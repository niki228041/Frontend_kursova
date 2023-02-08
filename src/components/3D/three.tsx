import { OBJLoader } from '../../OBJLoader';
// Option 2: Import just the parts you need.
import { HemisphereLight, Scene, Vector3 } from 'three';
import { PerspectiveCamera } from 'three';
import { WebGLRenderer } from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(
    75,
    window.innerWidth/ window.innerHeight,
    0.1,
    1000
);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new OBJLoader();
var obj:any;
loader.load('./rob-knop-with-texture.obj',function(object:any){
    scene.add(object);
    obj = object;
});

const light = new HemisphereLight(0xffffff,0x080820,1);

scene.add(light);
camera.position.set(0,20,60);
camera.lookAt(new Vector3(0,10,0));

function animate(){
    requestAnimationFrame(animate);
    obj.rotation.y += 0.01;
    renderer.render(scene,camera);
}