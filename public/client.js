import * as THREE from '/build/three.module.js';
import {GLTFLoader} from '/jsm/loaders/GLTFLoader.js';

var scene, camera, renderer;

var group;

var init = function(){

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.position.x = -10;
    camera.position.y = -10;
    camera.position.z = 20; 

    var hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    var loader = new GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        //camera position z might need to be moved back (To about 200) depending on settings with object.
        group = gltf.scene;
        group.position.x = 0;
        group.position.y = 0;
        group.rotation.set(0, 0, 0);
        group.scale.set(1, 1, 1);

        scene.add(group);
        renderer.render(scene,camera);
    });
};
init();