// this is already predefined with ShaderMaterial
// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;

// also this is predefined
// attribute vec2 uv;

uniform vec2 uFrequency;
uniform float uTime;
varying float vElevation;


varying vec2 vUv;

// also this is predefined
// attribute vec3 position;


void main(){
 
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
  elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;
  
  modelPosition.z += elevation;
  vElevation = elevation;


  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;


  gl_Position = projectedPosition;

  vUv = uv;
}