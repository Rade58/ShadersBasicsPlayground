precision mediump float;

// integer
int a = 2;
// float
float b = 0.2;
// booolean
bool truty = true;

// we made a conversion to float with float() function
// in order to do matematical operations
float c = float(a) * b;

// here we are doing matematical operation with vector
// which will in this case multiply items, which
// will create new vector with new items
vec2 d = vec2(b,c) * 1.0;


// this is vector4 and his properties are x,y,z,w
// and      r, g, b, a           r == x     g == y   b == z    a == w   
vec4 foo = vec4(0.0, 0.9, 0.5, 1.0);

// this is how we extract vector2 from our vector4
vec2 bar = foo.wy; // doing this is also called swizzle
// as you can see swizzle order can be inverted, you don't need to
// go xy for example, you can go yx
vec2 lorem = foo.yx;


// here we extracted vec3 from vec4
vec3 baz = foo.rgb;
// we can change value of the property;

// ---------------- Defining a function -----------------------
// ------------------------------------------------------------
// I think that you need to declare them
// before     main     in order to use them inside main 

// function declaration has a type that function returns

// here we defined a function that returns nothing
// that's why it starts with    void    keyword
void incre_by_zero_five(vec3 a){
  a *= 0.5;
}

// this function returns vec3
vec3 give_ve_3(){
  return vec3(1.0, 0.4, 0.5);
}

// this function makes vec2 from its parameters
vec2 make_ve_2(float x, float y){
  return vec2(x,y);
}

// -------------------------------------------------------------
// -------------------------------------------------------------


void main() {


  //  we can increment like this
  foo *= 0.5;

  // we can only do this inside   main  scope
  // I tried doing it outside the scope and I got error 
  foo.y = 0.2;

  // gl_FragColor = vec4(foo.x, foo.y, foo.z, foo.w);


  // this is how we can use vec4 parts, and vec2 parts for example,
  // to build another vec4
  // gl_FragColor = vec4(bar.g, foo.xy, 1.0);

  // gl_FragColor = foo;

  // we called function here as you can see
  // incre_by_zero_five(baz);

  // gl_FragColor = vec4(baz, 1.0);

  // using function that outputs vec2
  // and using outputed value into this vec4

  gl_FragColor = vec4(make_ve_2(0.4, 0.2), 0.5, 1.0);




}
