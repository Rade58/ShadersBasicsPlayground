precision mediump float;

varying float vRandom;


void main() {

  // I played a little 
  // vec3 foo = vRandom * vec3(0.1, 0.5, 0.1);

  // gl_FragColor = vec4(foo, 1.0);

  // but author of the workshop did this
  // and what he accomplished looks nice
  gl_FragColor = vec4(vRandom, 0.4, 0.4, 1.0);

  // so we now have diferent color set for every vertex
  // but how did we get the effect of interpolation

  // I guess
  // inside pixel, fragment shader, that is
  // related to current vertice is coloring pixels by some rules

  // I guess since vertex shader passes data to the fragment shader
  // it maybe means that number of fragment execution matches
  // corelated vertex execution

  // for us we were able to interpolate color because
  // we used vRandom, and neighboring
  // vertex shaders provided each different value for vRandom
  // they sent to the associated fragment shader program


}