import {WIDTH, HEIGHT, CHECKER_RADIUS, CHECKER_HEIGHT}  from './constants'

import Table from './Table'
import Board from './Board'
import Camera from './Camera'
import CheckerFactory from './CheckerFactory'

import Light from './Light'
import Room from './Room'

export default class Scene {

    constructor(rootElement) {
        this.scene = new THREE.Scene();
        this.camera = new Camera(WIDTH/HEIGHT);
        this.scene.add(new Light().sceneObject);
        this.scene.add(new Room().sceneObject);
        this.scene.add(new Table().sceneObject)
        this.scene.add(new Board(CHECKER_RADIUS, CHECKER_HEIGHT).sceneObject)

        let axes = new THREE.AxisHelper(5);
        this.scene.add( axes );
        let checkerfactory = new CheckerFactory(CHECKER_RADIUS, CHECKER_HEIGHT);
        let checker = checkerfactory.make('red');
        this.scene.add(checker.sceneObject);

        var cubeMaterial = new THREE.MeshLambertMaterial( { color: 0xF07020 } );
        // base
        var cube;
        cube = new THREE.Mesh(
        new THREE.CubeGeometry(5, 5, 5 ), cubeMaterial );
        cube.position.x = -15;	// (20+32) - half of width (20+64+110)/2
        cube.position.y = 15;	// half of height
        //cube.position.z = 0;	// centered at origin
        this.scene.add( cube );
        this.cube = cube

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        rootElement.parentNode.replaceChild(this.renderer.domElement, rootElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera.sceneObject);
    }

    animate() {
        this.cube.rotation.y += .05
        window.requestAnimationFrame(this.animate.bind(this));
        this.render();
    }

}