import {WIDTH, HEIGHT}  from './constants'

import Table from './Table'
import cameraMaker from './CameraMaker'
import factory from './CheckerFactory'

import Light from './Light'
import Room from './Room'

export default class Scene {

    constructor(rootElement) {
        this.scene = new THREE.Scene();
        this.camera = cameraMaker.make(WIDTH/HEIGHT);
        this.scene.add(new Light().sceneObject);
        this.scene.add(new Room().sceneObject);
        this.scene.add(new Table().sceneObject)

        let axes = new THREE.AxisHelper(5);
        this.scene.add( axes );
        let checker = factory.makeChecker('red', 2, 4);
        this.scene.add(checker.sceneObject);

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        rootElement.parentNode.replaceChild(this.renderer.domElement, rootElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera.sceneObject);
    }

    add(sceneObject) {
        this.scene.add(sceneObject)
    }
}