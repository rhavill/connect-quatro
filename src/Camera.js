import Entity from './Entity'

import {VIEW_ANGLE, ASPECT, NEAR, FAR, WIDTH, HEIGHT}  from './constants'

export default class Camera extends Entity {
    initSceneObject() {
        this.sceneObject = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        this.sceneObject.position.set(0,10,30);
        //this.sceneObject.lookAt(this.scene.position);
    }
}


