# Shaders Basics Playground

refactored and extended original workshop follow-along-repo: [shaders intro](https://github.com/Rade58/shaders_intro)

```
pnpm add lil-gui three
```

```
pnpm add -D @types/three vite vite-plugin-glslify
```

# Examples with inlining shaders code

todo

not going to use offten. I'll just show you the example

# Loader

We are using 'vite-plugin-glslify, instead other one :'vite-plugin-glsl', because with glslify we have option to import shaders code into our shaders which is big advantage for large projects.

After importing files, and after you print them:

```js
console.log({ vertexShader });
console.log({ fragmentShader });
```

you will see that these are strings which you assign to `vertexShader` and `fragmentShader` properties of `RawShadeMaterial` or `ShaderMaterial` instance

# Debugging

1. Finding errors
   if we forget semicolon threejs will log out shader and tell
   us the line where the error occured with a short
   description. Take your time and read the error and
   find what is wrong
2. Read the shader that is logged in console when you have an error

there are some pluggins but author of the workshop
tend not to use them

3. Test values
   if you don't know what is something, pass it to `gl_FragColor`
   value, for example
