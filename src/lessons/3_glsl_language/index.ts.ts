import * as THREE from "three";

import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";

// GLSL language features
// GLSL stands for OpenGL Shading Language
// really close to C language

// - prints or logs aren't possible because GPU is doing its thing

// - indentation not important

// - smicolon (;) is important

// ------- usual types ------------
// -- float, int, bool --
// - you can do mathematic operation but you can mix integers and floats in those operations
// - we don't do a lot of mathematical operations with integers, it is almost always floats we will use
// - we convert integers into float with `float()` function
// like I did in test fragment shader   /fragment.glsl
//

// ------- glsl types ------------
//  --     vec2, vec3, vec4    --
// - I know them from beforre but one of fun thing is how vec2
// can be building part of vec3 or vec4, or how can vec3 be
// building part of vec4 for example
//    vec2 a = vec2(1.0, 0.5);           vec3 b = vex3(a, 1.0);

// and you can just provide floats to complete vec3 made from vec2
// and a float. Besically to fill out the blanks

// - you can multiply vectors by floats
// (you can do also other mathematical operations on them)
// which means all the items of the vector will be the one
// you are doing matematical operations
// this includes operations like `*=` which will change
// original vector we are calculating with

// - depending on which vector we are talking about
//     they can have properties properties like   x y z w
//     and    r, g, b, a
//     for example vec4  has all   x, y, z, w   and   r, g, b, a
//     and    r == x      g == y      b == z      a == w
//     they are like the aliases as you can see
//     and you can already conclude what properties vec2 and vec3
//     can have
// - you can change value of the property also
//   vec3 a = vec3(1.0,1.0,1.0);      a.y = 0.5;
// but I think you can only do mentioned inside `main` only

// - you can extract desired vectors from a vector
// vec3 a = vec3(1.0, 0.5, 0.6);     vec2 b = a.xz;
// b will be evaluated to   -   vec2(1.0, 0.6)   -
// doing mentioned thing is called swizzle

//
// ------- more types ------------
// there are            mat2, mat3, mat4, sampler2D     etc.
// but we will cover them later

// ------ functions --------------
// in     /fragment.glsl   file
// I showed you how to define functions
// I showed you how to declare functions that return nothing (declare dwith `void`)
// I showed you haow to declare functions that return something
// in that case you are typing them with type of value they return
// if a function returns vec2, you must type it as vec2
// I also showed you how to define and type parameters of a function

// There are also native functions you can use
// I assume they are part of standard library

// Some of them are    sin, cos, max, min, pow, exp, mod, clamp

// also, there are a lot of practical, but complex ones, like:
//         cross, dot, distance, mix, step, smoothStep, length,
//         reflect, refract, normalize

// -------------------------------------------------------------
// I pretty much tested some of the language features inside
// /fragment.glsl   file
// I also left some helpful comments for you to see
// ------------------------------------
// ------------ gui -------------------

//  Debug UI - lil-ui

const gui = new GUI({
  width: 340,
  title: "Tweak it",
  closeFolders: false,
});

//  gui parmeters

const guiParameters = {
  //
};
// gui.hide()
// ----------------------------------

//------------ canvas settings -----------

//  canvas settings

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
// ----------------------------------------

const canvas: HTMLCanvasElement | null = document.querySelector("canvas.webgl");

if (canvas) {
  // ---- loaders -------

  // loaders

  /* const textureLoader = new THREE.TextureLoader();

  const flagTexture = textureLoader.load("textures/flag.serbia.jpg");

  console.log({ flagTexture }); */
  // -------------------------------------------------------------------
  // -------------------------------------------------------------------

  // ------- Scene ---------------------------------
  const scene = new THREE.Scene();

  // -------- Camera -------------------------------
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  // camera.position.set(0.5, 0.5, 1);
  camera.position.set(0, 0, 1);
  scene.add(camera);

  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------
  //------------------------------------------------

  // ----------------------------------------------
  // ----------------------------------------------
  // Meshes, Geometries, Materials
  // ----------------------------------------------
  // ----------------------------------------------

  const geometry = new THREE.PlaneGeometry(1, 1, 32, 32);

  const material = new THREE.RawShaderMaterial({
    vertexShader,
    fragmentShader,
    // wireframe: true,
    side: THREE.DoubleSide,

    uniforms: {
      /* uFrequency: {
        //
        value: new THREE.Vector2(10, 5),
      },
      //
      uTime: {
        value: 0,
      }, */
      //
      /* uColor: {
        value: new THREE.Color("crimson"),
      }, */
    },
  });

  const mesh = new THREE.Mesh(geometry, material);

  // mesh.scale.y = 2 / 3;

  scene.add(mesh);

  // let's add gui

  /* gui
    .add(material.uniforms["uFrequency"].value, "x")
    .name("uFrequency x")
    .min(0)
    .max(20)
    .step(0.001);
  gui
    .add(material.uniforms["uFrequency"].value, "y")
    .name("uFrequency y")
    .min(0)
    .max(15)
    .step(0.001); */

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // ------------------------- LIGHTS ----------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------

  // Directional light

  /* const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
  directionalLight.position.set(-4, 6.5, 2.5);
  scene.add(directionalLight);

  // add this before adding helper
  directionalLight.shadow.camera.far = 15;

  directionalLight.shadow.mapSize.set(1024, 1024);

  const directionalLightCameraHelper = new THREE.CameraHelper(
    directionalLight.shadow.camera
  );

  directionalLight.castShadow = true;

  directionalLight.target.position.set(0, 2, 0);
  directionalLight.target.updateWorldMatrix(true, true);

  scene.add(directionalLightCameraHelper);

  gui.add(directionalLight, "castShadow"); */

  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------
  // -------------------------------------------------------------

  // ----------------------------------------------
  // ----------------------------------------------
  // ----------------------------------------------
  // ----------------------------------------------

  // -------- Controls and helpers

  const orbit_controls = new OrbitControls(camera, canvas);
  orbit_controls.enableDamping = true;

  const axesHelper = new THREE.AxesHelper(4);
  // axesHelper.setColors("red", "green", "blue");
  scene.add(axesHelper);

  axesHelper.visible = false;

  // ----------------------------------------------
  // ----------------------------------------------

  // -------------- RENDERER
  // ----------------------------------
  const renderer = new THREE.WebGLRenderer({
    canvas,
    //To make the edges of the objects more smooth (we are setting this in this lesson)
    antialias: true,
    // alpha: true,
  });

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  // maybe this should be only inside       tick

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // -------------- SHADOWS ----------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // renderer.shadowMap.enabled = true;
  // renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ------------- TONE MAPPING ------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // renderer.toneMapping = THREE.ReinhardToneMapping;
  // renderer.toneMappingExposure = 3;

  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // Event Listeners

  window.addEventListener("resize", (e) => {
    console.log("resizing");
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "h") {
      gui.show(gui._hidden);
    }
  });

  const mouse = new THREE.Vector2();
  window.addEventListener("mousemove", (_event) => {
    mouse.x = (_event.clientX / sizes.width) * 2 - 1;
    mouse.y = -(_event.clientY / sizes.height) * 2 + 1;

    // console.log({ mouse });
  });

  window.addEventListener("dblclick", () => {
    console.log("double click");

    // handling safari
    const fullscreenElement =
      // @ts-ignore webkit
      document.fullscreenElement || document.webkitFullScreenElement;
    //

    // if (!document.fullscreenElement) {
    if (!fullscreenElement) {
      if (canvas.requestFullscreen) {
        // go fullscreen
        canvas.requestFullscreen();

        // @ts-ignore webkit
      } else if (canvas.webkitRequestFullScreen) {
        // @ts-ignore webkit
        canvas.webkitRequestFullScreen();
      }
    } else {
      // @ts-ignore
      if (document.exitFullscreen) {
        document.exitFullscreen();

        // @ts-ignore webkit
      } else if (document.webkitExitFullscreen) {
        // @ts-ignore webkit
        document.webkitExitFullscreen();
      }
    }
  });

  // ---------------------------------------------------------
  // ---------------------- TICK -----------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------
  // ---------------------------------------------------------

  const clock = new THREE.Clock();

  function tick() {
    // const elapsed = clock.elapsedTime;
    // const delta = clock.getDelta();

    /* material.uniforms["uFrequency"].value = new THREE.Vector2(
      10 * elapsed,
      5 * elapsed
    ); */

    // we are altering mentioned uniform here
    // material.uniforms["uTime"].value = elapsed;

    // for dumping to work
    orbit_controls.update();

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  }

  tick();
}
