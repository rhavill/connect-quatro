
export default class Room {
    constructor() {
        const geometry = new THREE.CubeGeometry( 1000, 1000, 1000 );
        const material = new THREE.MeshBasicMaterial( { color: 0xD3D3DF, side: THREE.BackSide } );
        this.sceneObject = new THREE.Mesh(geometry, material );
    }
}


