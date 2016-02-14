import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'


export default class Renderer {

    constructor(rootElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.camera.position.set(0,45,60);
        this.camera.lookAt(this.scene.position);
        let light = new THREE.DirectionalLight(0xffffff, 2);

        light.position.set(0,45,60);
        this.scene.add(light);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        rootElement.parentNode.replaceChild(this.renderer.domElement, rootElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    add(mesh) {
        this.scene.add(mesh)
    }
}