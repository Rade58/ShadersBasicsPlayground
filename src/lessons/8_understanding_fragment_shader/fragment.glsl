// precision of the float is mandatory and possible values are
//    highp     medium      lowp
precision mediump float;
// this can be important if you have for example very huge or very
// small values
// let's say you have human running in your scene
// but you zoom in at his hair folicule where you rendered an insect
// walking over his hair, well there this precison could be important

// highp       can have performance hit and might not work on some devices
// lowp        can create bugs by the lack of precision

// so we tend to use precision for the floats, that is     mediump

// float precision is automatically handled when using
// ShaderMaterial, but as you know we are curently using
// RawShaderMaterial, and we need to explicitly set precsion



// you need to have this function
// and it is called by gpu, just like the one function
// with a same name of our vertex shader
void main() {

  // r g b a     or     x y z w
  // but since color is being set here, we tend to use and change
  // r g b a    properties
  //      gl_FragColor = vec4(0.0, 0.5, 0.5, 1.0);

  // you can't set nuances of alpha if you didn't set
  // transparent: true        on material
  // without that only alpha of     1.0    or     0.0
  // would give some visible effect but that wouldn't be
  // what you want

  // so we did set       transparent: true     on our RawShaderMaterial instance

  gl_FragColor = vec4(0.0, 0.5, 0.5, 0.4);


}
