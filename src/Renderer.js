import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'


export default class Renderer {
    constructor(rootElement) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.camera.position.set( 0, 0, 30 );
        this.scene.add( new THREE.AmbientLight( 0xffffff ) );
        this.light = new THREE.DirectionalLight( 0xFFFFFF, 2.25 );
        this.light.position.set( 200, 400, 500 );
        //this.scene.add( this.light );

        //this.light2 = new THREE.DirectionalLight( 0xFFFFFF, 1.5 );
        //this.light2.position.set( -400, -200, 200 );
        //this.scene.add( this.light2 );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        rootElement.appendChild(this.renderer.domElement);
    }

    render() {
        this.renderer.render(this.scene, this.camera);
    }

    add(mesh) {
        this.scene.add(mesh)
    }
}