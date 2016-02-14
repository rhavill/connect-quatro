
export default class Checker {
    constructor(geometry, material) {
        this.sceneObject = new THREE.Mesh(geometry, material)
        this.sceneObject.rotation.x += Math.PI/2
        this.sceneObject.position.set(-5, 2, 0)
    }
}