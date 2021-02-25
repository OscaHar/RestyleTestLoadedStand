import * as THREE from '/build/three.module.js';
import {GLTFLoader} from '/jsm/loaders/GLTFLoader.js';

var scene, camera, renderer;

var group1, group2;

var scenePath1 = '/Stands/Stand1/scene.gltf';
var scenePath2 = '/Stands/Stand2/scene.gltf';

var init = function(){

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 5000 );
    camera.position.x = -10;
    camera.position.y = -10;
    camera.position.z = 200; 

    var hlight = new THREE.AmbientLight ( 0x404040, 100 );
    scene.add( hlight );

    renderer = new THREE.WebGLRenderer( {antialias:true} );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var loader = new GLTFLoader();
    loader.load( scenePath1, function( gltf ){
        //camera position z might need to be moved back to about 200 just to see the object.
        group1 = gltf.scene;
        group1.position.set ( 50, -50, 0 );
        group1.rotation.set( 0, 0, 0 );
        group1.scale.set( .1, .1, .1 );

        scene.add( group1 );
        renderer.render( scene, camera );
    });

    loader.load( scenePath2, function( gltf ){
        //camera position z might need to be moved back to about 200 just to see the object.
        group2 = gltf.scene;
        group2.position.set ( -50, -50, 0 );
        group2.rotation.y = (Math.PI/2);
        group2.scale.set( .1, .1, .1 );

        scene.add( group2 );
        renderer.render( scene, camera );
    });
};
init();