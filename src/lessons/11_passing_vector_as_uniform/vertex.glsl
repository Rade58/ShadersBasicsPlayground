uniform mat4 projectionMatrix;
//
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
//
// uniform we created
// it is vec2
uniform vec2 uFrequency;
// we used this 

attribute vec3 position;


attribute float aRandom;
// varying float vRandom;



void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);


  // modelPosition.z += aRandom * 0.1;
  
  // ------------------------------------------------------------
  // now we will use uniform we created here to modify
  // frequiency in sin function
  // so if we look from a point of view of a one vertix,
  // which we should always, since this shader program will
  // be run for each vertex separately
  // in here vertex will be moved over z axis
  // and as you can see we are incrementing it couple of time
  // and we use value of the sinus to do this
  // 
  // this is a bit strange
  // since we are moving vertex by z axis and we are doing this
  // two times

  // but this is the way to create some kind of "randomness"
  // also it is important to notice that we are incrementing here

  // it is hard to imagine, for me how would end result look
  // but this is I guess one of the way we can create
  // that kind of interesting look, something that would
  // look like vawe of the liquid, or something bumpy

  // so here we use x value of the modelPosition, and we are using
  // x of the uFrequency vector2 uniform, and this will 
  // move modelPosition.z to some position
  modelPosition.z += sin(modelPosition.x * uFrequency.x) * 0.1;
  // here we are moving the same vertex again which is current vertes
  // and it is moved again according to sinus function but we are using
  // y value of the vertex and we are using different frequency value
  modelPosition.z += sin(modelPosition.y * uFrequency.y) * 0.1;
  // I guess author of the workshop decided to do this to
  // accomplish larger randomness in terms where will vertices
  // change their position by z
  
  // only thing we didn't change above is amplitude, which we kept at 
  // 0.1 as you saw 

  // and to better see that we are changing vertex position by over
  // z axis, inside threejs I added axses helper and I
  // used wireframe on the material

  // ---------------------------------------------------------------



  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;


  gl_Position = projectedPosition;


  // 
  // vRandom = aRandom;

}