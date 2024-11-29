// we need to declare these when using RawShaderMaterial
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
// for minimal requirements we don't need this one
// uniform mat4 modelMatrix;

// we don't need to declare this since we are not using it now 
// attribute vec2 uv;

// so, we are only required to load vertex shader in order
// for our shader to be called by gpu
// I guess by default something will be called in case of
// fragment shader (by default fragment will be: (r:1.0, g:1.0, b:1.0, a:1.0) 

attribute vec3 position;



void main(){
 

  gl_Position = projectionMatrix * viewMatrix * vec4(position, 1.0);
  // as I said, we can use modelMatrix but it will work without it 
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
   

}