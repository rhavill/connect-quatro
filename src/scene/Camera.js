import THREE from 'three'

export default class Camera {
    constructor(aspect) {
        this.sceneObject = new THREE.PerspectiveCamera(45, aspect, 0.1, 10000);
        this.sceneObject.position.set(0,100,500);
        //this.sceneObject.lookAt(0,0,0)
    }
}


