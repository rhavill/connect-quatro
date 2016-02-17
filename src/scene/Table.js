import THREE from 'three'

export default class Table {
    constructor() {
        var texture = new THREE.TextureLoader().load( 'assets/wood.jpg' );
        const material = new THREE.MeshBasicMaterial( { map: texture } );
        const geometry = new THREE.PlaneGeometry(500, 500);
        this.sceneObject = new THREE.Mesh(geometry, material);
        this.sceneObject.position.y = -1;
        this.sceneObject.rotation.x = -Math.PI/2
    }
}


