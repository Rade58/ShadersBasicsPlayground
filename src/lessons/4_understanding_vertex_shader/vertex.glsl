// these are matrices
uniform mat4 projectionMatrix; // yes,   mat    means matrix here
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;

uniform mat4 modelViewMatrix; // this is a shorthand for
//                             modelMatrix * viewMatrix
//                             (I explained this bellow, 
//                            but this changes, usage of two mentioned matrices )



// so this is attribute
// it is data that is different for every vertex
attribute vec3 position; // we are just retreiving value from the geometry
// things important to know for position
//     - provides us the position attribute
//     - different behaviour for each vertex (we know that this vertex shader program 
// is being runned for each of the vertices)
//     - contains coorinates   x,y,z     (it is vector3 after all)
// position value, which means coordiantes are retreived from geometry
// wich we set in threejs
// one time, in some lesson (some early chapter of the workshop) 
// we were setting these values directlly
// by setting buffer geometry as you remeber


// called automatically by GPU
void main(){


  // - main    function is called automatically by GPU and
  //      it returns nothing (void)
  // - we assign gl_Position entity in main function
  //     - gl_Position already exist and we choose to reassign it
  //            but it won't produce error if you don't reassign it
  //     - but we need to assign it with right value to render
  //                our shader
  //     - gl_Position will contain the position of the vertex on
  //          the screen


  // you can comment this out and it won't produce an error
  // only your shader wil not be rendered, because you din't provide
  // right coordinates so it won't be on the render
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);


  // this is vec4, or to be precise this long value produces vec4
  // we assign to gl_Position
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);


  // here as you see we used position attribute to build vector4
  // we passed entire 'position'; we also could have write it like
  // position.xyz, which is the same as writing position
  // position.xyz would create new instance of vec3 and we
  // passed original position vector 3 instance
  
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);

  // ----------------------------------------------------------
  // ----------------------------------------------------------
  
  // mentioned matrices we declared at the start of the program
  // are provided or passed by threejs
  // they are threejs specific 

  // each of marices we are multiplying above
  // projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0)
  // will transform the position,
  //  until we get the final clip space coordinates for the vertices

  // we have 3 matrices

  // - they are 'uniform's because they are the same for all the vertices
  // - each matrix will do a part of the transformation
  // - applying of matrix is done by multiplying
  // - matrix must have the same size as the coordinate
  //          which in these case, mat4 is coresponding to vec4

  // if we would have some mat3 value, we would multiply some vec3
  // we would have

  // let's explain them
  //  --  modelMatrix --
  // applyies tranformations relative to mesh (position, rotation, scale) (probaly missing some entity because should be 4)
  //  --  viewMatrix --
  // applyies tranformations relative to camera (position, rotation, fieldOfView, near, far)
  //  --  projectionMatrix --
  // transforms the coordinates into the clip space coordinates

  // More about coordinates you can read here:
  // https://learnopengl.com/Getting-started/Coordinate-Systems

  // but there is a shorthand
  // All of this:
  //                viewMatrix * modelMatrix
  //              
  // can be written as      modelViewMatrix
  // so this can be shorter

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);


  // ----------------------------------------------------------
  // ----------------------------------------------------------




  // to show you that these are coordinates, we can do something like this
  // this will change the coordinates of where shader is on the render
  // and you will see that shader changed position

  // we could have done calculating with coordinates separately
  // but I have choosen this syntax
  gl_Position.xy += 0.5;

  // gl_Position.z -= 0.5;

  // now you can guess how people can change this values to get some effect
  // that looks like vawes of water for example
  // they just introduce changing values, and some randomness
  // but esencially what they are doing, they are changing these coordinates



  // WHY 4 VALUES, why vector4
  // - because coordinates  we are providing are in **clip space**
  // it's like we are positioning things inside the box
  // this is why we need x, y and z
  // and forth value is about is perspective
  // author of the workshop never tended to understand the forth value
  // it's about something called: "homogenous coordinates"


}