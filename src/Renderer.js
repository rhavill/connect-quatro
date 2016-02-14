import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'


export default class Renderer {

    constructor(rootElement) {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.camera.position.set(2,10,30);
        this.camera.lookAt(this.scene.position);

        //let light = new THREE.DirectionalLight(0xffffff, 2);
        //light.lookAt(this.scene.position);
        //light.position.set(2,10,40);
        //this.scene.add(light);
        var ambientLight = new THREE.AmbientLight(0xffffff);
        this.scene.add(ambientLight);

        let axes = new THREE.AxisHelper(5);
        this.scene.add( axes );

        var floorMaterial = new THREE.MeshBasicMaterial( {color: new THREE.Color("rgb(250, 250, 210)"), side: THREE.DoubleSide} );
        var floorGeometry = new THREE.PlaneGeometry(10, 10, 2, 1);
        var floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = 90*(Math.PI/180);
        this.scene.add(floor);

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