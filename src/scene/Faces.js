import THREE from 'three'

import Face from './Face'

export default class Faces {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        let material = new THREE.MeshPhongMaterial( { color: 0xffff00, specular: 0x606060, side: THREE.DoubleSide } )

        let back = new Face(material, checkerRadius, checkerHeight).sceneObject
        back.position.x = checkerRadius
        back.position.y = checkerRadius*3
        back.position.z = -checkerHeight
        this.sceneObject.add(back)

        let front = new Face(material, checkerRadius, checkerHeight).sceneObject
        front.position.x = checkerRadius
        front.position.y = checkerRadius*3
        front.position.z = checkerHeight
        this.sceneObject.add(front)
    }
}