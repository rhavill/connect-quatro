import THREE from 'three'

export default class Slat {
    constructor(geometry, material) {
        this.sceneObject = new THREE.Mesh(geometry, material);
    }
}


