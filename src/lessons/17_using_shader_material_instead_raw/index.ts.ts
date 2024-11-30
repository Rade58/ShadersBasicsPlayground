import * as THREE from "three";

import GUI from "lil-gui";
import { OrbitControls } from "three/examples/jsm/Addons.js";

import vertexShader from "./vertex.glsl";
import fragmentShader from "./fragment.glsl";

// ------ using ShaderMaterial instead of RawShaderMaterial ------

// So far we were using `RawShaderMaterial`
// now we are going to use `ShaderMaterial` for the firstt time

// It's the same as `RawShaderMaterial` but it has prebuilt
// uniforms, attributes and precision prepended to the
// shader codes

// by starting to use mentioned we will have bunch of error
// since bunch of stuff we defined previouslly comes
// out of the box with ShaderMaterial
// so we need to read error code and remove or comment out
// everything what we redefined and redefinition isn't allowed
// ------------------------------------------------------------

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

  const textureLoader = new THREE.TextureLoader();

  const flagTexture = textureLoader.load("/textures/flag_serbia.jpg");

  // console.log({ flagTexture });
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

  // console.log(geometry.attributes);

  const verticesCount = geometry.attributes["position"].count;

  const randoms = new Float32Array(verticesCount); // array of numbers
  // with length that is number of the vertices of our geometry

  for (let i = 0; i < verticesCount; i++) {
    // filling it with random values
    randoms[i] = Math.random();
  }

  const aRandomAttribute = new THREE.BufferAttribute(randoms, 1);

  geometry.setAttribute("aRandom", aRandomAttribute);

  // console.log(geometry.attributes["aRandom"]);

  // const material = new THREE.RawShaderMaterial({
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    // wireframe: true,
    side: THREE.DoubleSide,
    // transparent: true,
    // transparent: true,

    uniforms: {
      uFrequency: {
        value: new THREE.Vector2(10, 5),
      },
      uTime: {
        value: 0,
      },
      uColor: { value: new THREE.Color("crimson") },
      // here is the texture
      uFlag: {
        value: flagTexture,
      },
    },
  });

  const mesh = new THREE.Mesh(geometry, material);

  // mesh.scale.y = 2 / 3;

  scene.add(mesh);

  // let's add gui

  gui
    .add(material.uniforms["uFrequency"].value, "x")
    .name("uFrequency x")
    .min(0)
    .max(10)
    .step(0.001);
  gui
    .add(material.uniforms["uFrequency"].value, "y")
    .name("uFrequency y")
    .min(0)
    .max(5)
    .step(0.001);

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
    const elapsed = clock.getElapsedTime();
    // const delta = clock.getDelta();

    /* material.uniforms["uFrequency"].value = new THREE.Vector2(
      10 * elapsed,
      5 * elapsed
    ); */

    // we are altering mentioned uniform here
    material.uniforms["uTime"].value = elapsed;
    // console.log(material.uniforms["uTime"].value);

    // for dumping to work
    orbit_controls.update();

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
  }

  tick();
}
