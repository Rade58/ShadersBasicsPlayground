precision mediump float;

// varying float vRandom;

uniform vec2 uFrequency;

uniform vec3 uColor;

void main() {

  

  gl_FragColor = vec4(uColor, 1.0);

  
  // gl_FragColor = vec4(vec3(1.0, 0.6, 0.0), 1.0);
  
  // gl_FragColor = vec4(vRandom, 0.4, 0.4, 1.0);

  

}