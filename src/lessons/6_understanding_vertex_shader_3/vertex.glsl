uniform mat4 projectionMatrix;

//
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
//
// uniform mat4 modelViewMatrix; 
//                     modelViewMatrix ==   viewMatrix * modelMatrix  




attribute vec3 position;



void main(){

 
  // we created next 3 vec4 instances in previous lesson


  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // tweaking coordinates of modelPosition I assume would
  // change position of the mesh
  modelPosition.y += 0.3;   // yes on the screen our plane moved on y axis by value we incremented
  // this will move mesh in z position towards us (toward camera to be precise)
  modelPosition.z += 0.5;
  // this moves vertices
  // and depending on geometry we set
  // plane can have as much vertices as we set them
  // we have I think 32 * 32 vertices we can move

  // as gpu runs this program, vertice by vertice is moved to new position
  // which results in moving entire plane in new position

  
  // based on what we understand in this lesson about modelPosition
  // let's move coordinates (move vertices) in next lesson by using trigonometry
  // to get something interesting


  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;



  gl_Position = projectedPosition;

}