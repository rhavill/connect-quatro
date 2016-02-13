import factory from './CheckerFactory'

import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'

export default class  Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild(this.renderer.domElement);
        let checker = factory.makeChecker();
        this.scene.add(checker.getMesh());
        this.camera.position.z = 5;
        this.render();
    }

    render() {

        this.renderer.render(this.scene, this.camera);
    };
}


