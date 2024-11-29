uniform mat4 projectionMatrix;

//
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
// 



attribute vec3 position;



void main(){

 


  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  // based on what we learned
  // modelPosition.y += 0.3;
  // modelPosition.z += 0.5;
  // let's try moving coordinates of the mesh to make something
  // that resembles vawes
  // we will use trigonometry for this

  // modelPosition.z += sin(modelPosition.x * 10.0) * 0.1;
  // because of this above our plane will be bended
  // because we moved its vertices

  // It's crucial to rember what we explained back earlier
  // this program runs for each of the vertices

  // our plane has 32 times 32 vertices, which will be visible
  // if we use wireframe (we did that)

  // well, in this lesson, we used trigonometry to move each of that
  // vertex
  
  // by increasing for example, number 10.0 above, we are multipying
  // with inside of sinus function we will get more vawes

  // and by incresing multiplier of entire sinus function call
  // we are incresing the amplitude

  // try playing with those, for example, like this
  modelPosition.z += sin(modelPosition.x * 20.0) * 0.25;
  // and see what you'll get




  // I guess, this above is important part for us
  // even if you didn't understood next things, we explained earlier
  // but to remind you, viewPosition are coordinates for
  // the camera, and projectionPosition are coordinates of clip space
  // which at the end determines position of the shader
  // on the render

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;



  gl_Position = projectedPosition;

}