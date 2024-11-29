import * as THREE from "three";

import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";

// -------------- Understanding Attributes -----------------
// look for comments in:
//                        /vertex.glsl
//                        /fragment.glsl
//

//   important attributes sent by geometry (by BufferGeometry (PlaneGeometry inherits from it))
//   by default, to our vertex shader
// ---- position (vector 3) ----
// will have appropriate values for each vertex
// and I'm mentioning again, since our vertex shader
// is executed by GPU for each individual vertex
// and different position will be passed for every execution

// Other attributes you can find on your geometry instance
// Go and print them

// console.log({attributes: geometry.attributes});

// I found three attributes on our geometry and those are
//     ------  position       normal          uv

//  position    (a position of the vertices)

//  normal      (outside of the vertices)
//               this is important for light among other things

//  uv          about how to place texture

// ------------------------------------------------------------
// We will add our custom attribute on our PlaneGeometry instance
// it will be called `aRandom`
// then in vertex shader code we will add that random vlue for each of the vertices
// but just on the z axis according to that value
// we are doing this just as tast, a test for sake of the lesson

// ------------------------------------------------------------
// one more thing, read a comments in: `/fragment.glsl`
// at the end I think I understood how color is getting interpolated
// so that is the good comment to revisit

// 1 - first go to geometry and see how we pass attributes
// 2 - than go to vertex shader where we used the attribute
// and where we pass it as a varying so it will be available
// inside fragment shader
// 3 - and then go to the fragment shader and see how we use mentioned
// varying

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

  // we wil ladd attrubute here

  console.log(geometry.attributes);

  const verticesCount = geometry.attributes["position"].count;

  const randoms = new Float32Array(verticesCount); // array of numbers
  // with length that is number of the vertices of our geometry

  for (let i = 0; i < verticesCount; i++) {
    // filling it with random values
    randoms[i] = Math.random();
  }

  // why aren't we sending vec2 or vec3
  // why did we set 1 as an item size
  // well, we need single value in a shader execution instance
  // we don't need two or three values since we just
  // want to access that value and use it with `modelPosition.z`
  // we will not change y or x
  const aRandomAttribute = new THREE.BufferAttribute(randoms, 1);
  // we named it with a prefix `a` to mark it as an attribute
  // this is not convention, it's not required
  // but in shader it will be easier to know what are our custom attributes
  // when we are accessing them in glsl
  geometry.setAttribute("aRandom", aRandomAttribute);

  // and if you create uniform, pefix it with an u,
  // and if you create varying, prefix it with a v
  //  it will be easier
  // to find it (this is what author of the workshop tend to do)

  // checking now if there is new attribute there
  console.log(geometry.attributes["aRandom"]);

  const material = new THREE.RawShaderMaterial({
    vertexShader,
    fragmentShader,
    // wireframe: true,
    side: THREE.DoubleSide,
    transparent: true,
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
