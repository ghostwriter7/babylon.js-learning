import * as BABYLON from 'babylonjs';
const canvasEl = document.getElementById('app') as HTMLCanvasElement;

const engine = new BABYLON.Engine(canvasEl, true, { preserveDrawingBuffer: true, stencil: true });

const createScene = () => {
  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.ArcRotateCamera('camera', -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0), scene);
  camera.attachControl(canvasEl, true);
  const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
  const box = BABYLON.MeshBuilder.CreateBox('box', {}, scene);

  return scene;
}
const scene = createScene();
engine.runRenderLoop(() => {
  scene.render();
});

window.addEventListener('resize', () => {
  engine.resize();
});
