import THREE from 'three'

import Leg from './Leg'

export default class Legs {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        const width = checkerHeight*3
        const height = checkerRadius*14
        let material = new THREE.MeshPhongMaterial( { color: 0x558CC4, specular: 0x606060, side: THREE.DoubleSide } )

        let left = new Leg(material, width, height).sceneObject
        left.position.x = -0.75*checkerRadius
        left.position.y += height/2
        this.sceneObject.add(left)

        let right = new Leg(material, width, height).sceneObject
        right.position.x = 14.75*checkerRadius
        right.position.y += height/2
        this.sceneObject.add(right)

    }
}