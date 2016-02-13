import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'

export default class  Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild( this.renderer.domElement );
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
        this.cube = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.cube);
        this.camera.position.z = 5;
        this.render();
    }

    render() {
        requestAnimationFrame( this.render.bind(this) );
        this.cube.rotation.x += 0.05;
        this.cube.rotation.y += 0.05;
        this.renderer.render(this.scene, this.camera);
    };
}


