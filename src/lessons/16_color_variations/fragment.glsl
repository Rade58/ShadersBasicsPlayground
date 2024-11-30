precision mediump float;
// precision highp float;


varying vec2 vUv;


uniform vec3 uColor;


// receiving this from vertex
varying float vElevation;
// and we are going to use it to
// alter x y z
// or better to say r g b values of the color



uniform sampler2D uFlag;


varying vec3 vPosition;

void main() {

  // vec3 foo = vRandom * vec3(0.1, 0.5, 0.1);
  // gl_FragColor = vec4(foo, 1.0);

  // gl_FragColor = vec4(vRandom, 0.4, 0.4, 1.0);

  // gl_FragColor = vec4(0.6, 0.5, 0.3, 1.0);
  
  // gl_FragColor = vec4(uColor, 1.0);


  vec4 textureColor = texture2D(uFlag, vUv);

  // altering x y z of vector4 and as you remeber we can
  // use syntax with    r g b a    or    x y z w
  // we are multiplying and incrementing

  textureColor.rgb *= vElevation * 2.0 + 0.5;
  // if you understand that z goes from -1 to 1, effect of this will make sense
  // 
  // and yes, result is very nice

  gl_FragColor = textureColor;

}