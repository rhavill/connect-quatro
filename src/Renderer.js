import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'


export default class Renderer {

    constructor(rootElement) {
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.camera.position.set(0,10,30);
        this.camera.lookAt(this.scene.position);

        let light = new THREE.DirectionalLight(0xffffff,1.5);
        light.lookAt(this.scene.position);
        light.position.set(0,10,10);
        this.scene.add(light);
        //let ambientLight = new THREE.AmbientLight(0xffffff);
        //this.scene.add(ambientLight);

        this.scene.fog = new THREE.FogExp2( 0x9999ff, 0.02 );
        let axes = new THREE.AxisHelper(5);
        this.scene.add( axes );

        let floorMaterial = new THREE.MeshPhongMaterial( { color: new THREE.Color("rgb(250, 250, 210)"), specular: 0x606060, side: THREE.DoubleSide } )
        var floorGeometry = new THREE.PlaneGeometry(25, 25);
        var floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.position.y = -1;
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