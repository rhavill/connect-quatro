import THREE from 'three'

import Slats from './Slats'
import Faces from './Faces'
import Legs from './Legs'

export default class Board {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        this.sceneObject.add(new Slats(checkerRadius, checkerHeight).sceneObject)
        this.sceneObject.add(new Faces(checkerRadius, checkerHeight).sceneObject)
        this.sceneObject.add(new Legs(checkerRadius, checkerHeight).sceneObject)

        let material = new THREE.MeshPhongMaterial( { color: 0x558CC4, specular: 0x606060, side: THREE.DoubleSide } )
        let geometry = new THREE.BoxGeometry(2*checkerHeight, 14*checkerRadius, checkerHeight)
        let bottom = new THREE.Mesh(geometry, material)
        bottom.rotation.x = Math.PI/2
        bottom.rotation.z = Math.PI/2
        bottom.position.y += checkerRadius*1.75
        bottom.position.x += checkerRadius*7
        this.sceneObject.add(bottom)

        this.sceneObject.position.y += checkerRadius*2
        this.sceneObject.position.x -= checkerRadius*7
    }
}