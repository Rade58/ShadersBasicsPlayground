uniform mat4 projectionMatrix;
//
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
//
uniform vec2 uFrequency;
// 

uniform float uTime;
// 


// we will send this attribute to fragment in varying we'll create
attribute vec2 uv;
//
// this is going to be that varying
varying vec2 vUv;



attribute vec3 position;


attribute float aRandom;
// varying float vRandom;



void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);


  // modelPosition.z += aRandom * 0.1;

  modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
  modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
  
  // modelPosition.y *= 0.5;
  

  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;


  gl_Position = projectedPosition;


  // 
  // vRandom = aRandom;

  // we are assigning to mentioned varying
  // because we want tit to be available in
  // corrsponding fragment shader
  vUv = uv;
}