
export default class Face {
    constructor(geometry, material) {
        this.sceneObject = new THREE.Mesh(geometry, material);
    }
}


