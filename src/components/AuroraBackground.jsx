import { useEffect, useRef } from "react";

const AuroraBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    // -----------------------------
    // Canvas size
    // -----------------------------
    function syncSize() {
      const w = canvas.clientWidth || 1280;
      const h = canvas.clientHeight || 720;

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    }

    const resizeObserver = new ResizeObserver(syncSize);

    resizeObserver.observe(canvas);
    syncSize();

    // -----------------------------
    // WebGL
    // -----------------------------
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    if (!gl) {
      console.error("WebGL is not supported");
      return;
    }

    // -----------------------------
    // Vertex Shader
    // -----------------------------
    const vs = `
      attribute vec2 a_position;

      varying vec2 v_texCoord;

      void main() {
        v_texCoord = a_position * 0.5 + 0.5;

        gl_Position = vec4(
          a_position,
          0.0,
          1.0
        );
      }
    `;

    // -----------------------------
    // Fragment Shader
    // -----------------------------
    const fs = `
      precision highp float;

      varying vec2 v_texCoord;

      uniform float u_time;
      uniform vec2 u_resolution;

      void main() {

        vec2 uv = v_texCoord;

        // -------------------------
        // Aurora orbs
        // -------------------------

        float orb1 = smoothstep(
          0.8,
          0.2,
          distance(
            uv,
            vec2(
              0.2 + 0.1 * sin(u_time * 0.5),
              0.3 + 0.1 * cos(u_time * 0.4)
            )
          )
        );

        float orb2 = smoothstep(
          0.7,
          0.1,
          distance(
            uv,
            vec2(
              0.8 + 0.1 * cos(u_time * 0.3),
              0.7 + 0.1 * sin(u_time * 0.6)
            )
          )
        );

        float orb3 = smoothstep(
          0.9,
          0.0,
          distance(
            uv,
            vec2(
              0.5 + 0.2 * sin(u_time * 0.2),
              0.5 + 0.2 * cos(u_time * 0.35)
            )
          )
        );

        // -------------------------
        // Colors
        // -------------------------

        vec3 deepNavy = vec3(
          0.02,
          0.03,
          0.04
        );

        vec3 electricBlue = vec3(
          0.0,
          0.48,
          1.0
        );

        vec3 cyan = vec3(
          0.35,
          0.78,
          0.98
        );

        vec3 violet = vec3(
          0.69,
          0.32,
          0.87
        );

        // -------------------------
        // Blend colors
        // -------------------------

        vec3 color = deepNavy;

        color += electricBlue * orb1 * 0.4;
        color += cyan * orb2 * 0.3;
        color += violet * orb3 * 0.2;

        // -------------------------
        // Grain
        // -------------------------

        float grain = fract(
          sin(
            dot(
              uv,
              vec2(12.9898, 78.233)
            )
          ) * 43758.5453
        );

        color += grain * 0.02;

        gl_FragColor = vec4(
          color,
          1.0
        );
      }
    `;

    // -----------------------------
    // Create Shader
    // -----------------------------
    function createShader(type, source) {
      const shader = gl.createShader(type);

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));

        gl.deleteShader(shader);

        return null;
      }

      return shader;
    }

    // -----------------------------
    // Create Program
    // -----------------------------
    const vertexShader = createShader(gl.VERTEX_SHADER, vs);

    const fragmentShader = createShader(gl.FRAGMENT_SHADER, fs);

    if (!vertexShader || !fragmentShader) {
      return;
    }

    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);

    gl.attachShader(program, fragmentShader);

    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));

      return;
    }

    gl.useProgram(program);

    // -----------------------------
    // Position Buffer
    // -----------------------------
    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW,
    );

    // -----------------------------
    // Position Attribute
    // -----------------------------
    const position = gl.getAttribLocation(program, "a_position");

    gl.enableVertexAttribArray(position);

    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    // -----------------------------
    // Uniforms
    // -----------------------------
    const uTime = gl.getUniformLocation(program, "u_time");

    const uResolution = gl.getUniformLocation(program, "u_resolution");

    // -----------------------------
    // Animation
    // -----------------------------
    let animationId;

    function render(time) {
      syncSize();

      gl.viewport(0, 0, canvas.width, canvas.height);

      gl.uniform1f(uTime, time * 0.001);

      gl.uniform2f(uResolution, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationId = requestAnimationFrame(render);
    }

    animationId = requestAnimationFrame(render);

    // -----------------------------
    // Cleanup
    // -----------------------------
    return () => {
      cancelAnimationFrame(animationId);

      resizeObserver.disconnect();

      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      gl.deleteBuffer(buffer);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <canvas ref={canvasRef} className="block h-full w-full" />

      {/* Optional dark overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />
    </div>
  );
};

export default AuroraBackground;
