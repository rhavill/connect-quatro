
export default class Room {
    constructor() {
        const geometry = new THREE.CubeGeometry( 100, 100, 100 );
        const material = new THREE.MeshBasicMaterial( { color: 0xD3D3DF, side: THREE.BackSide } );
        this.sceneObject = new THREE.Mesh(geometry, material );
    }
}


