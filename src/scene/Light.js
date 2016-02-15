import THREE from 'three'

export default class Light {
    constructor() {
        //this.sceneObject = new THREE.DirectionalLight(0xffffff,1.25)
        //this.sceneObject.position.set(0,10,10);
        this.sceneObject = new THREE.AmbientLight( 0xffffff );
    }
}


