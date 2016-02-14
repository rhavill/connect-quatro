import Entity from './Entity'

export default class Light extends Entity {
    initSceneObject() {
        this.sceneObject = new THREE.DirectionalLight(0xffffff,1.25);
        //light.lookAt(this.scene.position);
        this.sceneObject.position.set(0,10,10);
    }
}


