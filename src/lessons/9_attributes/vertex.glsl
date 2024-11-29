uniform mat4 projectionMatrix;
//
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
// 

attribute vec3 position;
// we console logged geometry and found also this
// two attributes we explained in    index.ts     in comments
// these attributes are      normal     and    uv
// normal is vector3
// uv is vector2


// this is the attribute we created in threejs, and it is float
attribute float aRandom; // different value for every of the vertices


// I explained bellow, why I added this varying
varying float vRandom;



void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // we will change z by a random value like this
  modelPosition.z += aRandom * 0.1;
  // now you should see that our plane is spiky,
  // it is not smooth anymore but that isn't visible good enough
  // because we have same color across our plane
  // which is a effect of fragment shader we define

  // so we are going to create varying, to send data from our
  // vertex shader to corresponding fragment shader

  // we can't send attributes to fragment shader
  // but we can send data from vertex to fragment, in form of
  // varying
  // vRandom = aRandom;   // we placed this at the end of the function
  //                     just to show you that we can, 
  //                      this function doesn't return anything
  //                       it is void function, we don't return it

  // 

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;


  gl_Position = projectedPosition;


  // see here
  vRandom = aRandom;



}