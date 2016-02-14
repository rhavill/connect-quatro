
export default class Camera {
    constructor(aspect) {
        this.sceneObject = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        this.sceneObject.position.set(0,10,30);
    }
}


