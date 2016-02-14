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
        this.scene.add(new Board().sceneObject)

        let axes = new THREE.AxisHelper(5);
        this.scene.add( axes );
        let checkerfactory = new CheckerFactory(CHECKER_RADIUS, CHECKER_HEIGHT);
        let checker = checkerfactory.make('red');
        this.scene.add(checker.sceneObject);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        rootElement.parentNode.replaceChild(this.renderer.domElement, rootElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera.sceneObject);
    }

}