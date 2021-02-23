import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'

var scene, camera, renderer;

var init = function(){

    scren = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 45/180*Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var loader = new GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        scene.add(gltf.scene);
        renderer.render(scene,camera);
    });
    init();
};