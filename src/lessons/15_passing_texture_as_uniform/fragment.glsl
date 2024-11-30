precision mediump float;
// precision highp float;

// uniform float uFrequency;
// varying float vRandom;

//  we are going to use this varying
// we send from the vertex shader
varying vec2 vUv;


uniform vec3 uColor;



// this is our texture, and it is special type
// sampler2D
uniform sampler2D uFlag;


varying vec3 vPosition;

void main() {

  // vec3 foo = vRandom * vec3(0.1, 0.5, 0.1);
  // gl_FragColor = vec4(foo, 1.0);

  // gl_FragColor = vec4(vRandom, 0.4, 0.4, 1.0);

  // gl_FragColor = vec4(0.6, 0.5, 0.3, 1.0);
  
  // gl_FragColor = vec4(uColor, 1.0);

  // here you go, we are defining new
  // vector 4
  vec4 textureColor = texture2D(uFlag, vUv);

  // which is going to be value of our fragment color 
  gl_FragColor = textureColor;

}