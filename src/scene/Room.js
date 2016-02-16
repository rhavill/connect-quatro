import THREE from 'three'

export default class Room {
    constructor() {
        const geometry = new THREE.CubeGeometry( 10000, 10000, 10000 );
        const material = new THREE.MeshBasicMaterial( { color: 0xD3D3DF, side: THREE.BackSide } );
        this.sceneObject = new THREE.Mesh(geometry, material );
    }
}


