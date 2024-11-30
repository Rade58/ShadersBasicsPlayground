uniform mat4 projectionMatrix;
//
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

//
uniform vec2 uFrequency;

uniform float uTime;
// 


// 
attribute vec2 uv;

varying vec2 vUv;
//


attribute vec3 position;


// new varying we are creating
varying float vElevation;




void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);


  // we are going to redo some of this
  // 
  /* modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
  modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
  */
  // the thing we are incrementing over z axis we are going to store ins
  // separate variable
  float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
  // here we are doing what we already did in previous lessons
  elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
  //

  // and we are actually moving current vertex over z axis here
  modelPosition.z += elevation;
  //  
  // we isolated this elevation because
  // we are going to send it to the fragment shader as varying 
  vElevation = elevation;


  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;


  gl_Position = projectedPosition;

  vUv = uv;
}