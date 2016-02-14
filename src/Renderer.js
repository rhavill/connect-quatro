import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'

import Table from './Table'
import Camera from './Camera'
import Light from './Light'
import Room from './Room'

export default class Renderer {

    constructor(rootElement) {
        this.scene = new THREE.Scene();
        this.camera = new Camera;
        this.scene.add(new Light().sceneObject);
        this.scene.add(new Room().sceneObject);
        this.scene.add(new Table().sceneObject)

        let axes = new THREE.AxisHelper(5);
        this.scene.add( axes );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        rootElement.parentNode.replaceChild(this.renderer.domElement, rootElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera.sceneObject);
    }

    add(mesh) {
        this.scene.add(mesh)
    }
}