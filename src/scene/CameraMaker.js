import Camera from './Camera'

class CameraFactory {

    make(aspect) {
        let camera = new Camera()
        camera.sceneObject = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        camera.sceneObject.position.set(0,10,30);
        //camera.sceneObject.lookAt(this.scene.position);
        return camera
    }
}

export default new CameraFactory();