// we need to declare these when using RawShaderMaterial
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;

// we don't need to declare this since we are not using it now 
// attribute vec2 uv;


attribute vec3 position;



void main(){
 

  gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
   

}