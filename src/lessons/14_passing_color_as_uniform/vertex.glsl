uniform mat4 projectionMatrix;
//
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
//
uniform vec2 uFrequency;
// 

// this is our new uniform
uniform float uTime;
// 



attribute vec3 position;


attribute float aRandom;
// varying float vRandom;


void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);


  // modelPosition.z += aRandom * 0.1;

  // and we are using time value here as a some kind of offset
  // in order to create animation that looks like water vawes 
  modelPosition.z += sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
  modelPosition.z += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
  
  // this would move vertices in that way that would
  // decrese size of the plane by y, and it would be half of the size
  // I think this is good spot for thinking of
  // how this program is executing separatelly for each vertex
  // but it is moving vertex that way that end result
  // would be plane that decreased its size by half
  // modelPosition.y *= 0.5;
  // but we wouldn't do mentioned thing here, because if we want
  // plane that is half of it size by y, we would scale it inside threejs instead


  vec4 viewPosition = viewMatrix * modelPosition;

  vec4 projectedPosition = projectionMatrix * viewPosition;


  gl_Position = projectedPosition;


  // 
  // vRandom = aRandom;

}