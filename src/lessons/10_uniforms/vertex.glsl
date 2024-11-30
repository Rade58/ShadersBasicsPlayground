uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;


attribute vec3 position;


attribute float aRandom;
// varying float vRandom;


// uniform we created
uniform float uFrequency;
// we used this 



void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);


  // modelPosition.z += aRandom * 0.1;
  
  // now we will use uniform we created here as a frequency
  modelPosition.z = sin(modelPosition.x * uFrequency) * 0.1;
  // 0.1 is amplitude (just telling you if you forgot, 
  // we are not changing it now)



  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;


  gl_Position = projectedPosition;


  // 
  // vRandom = aRandom;

}