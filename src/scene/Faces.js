import Face from './Face'

export default class Faces {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        const width = checkerRadius*14
        const height = checkerRadius*12
        let material = new THREE.MeshPhongMaterial( { color: 0xffff00, specular: 0x606060, side: THREE.DoubleSide } )

        let back = new Face(material, checkerRadius, checkerHeight).sceneObject
        back.position.x = checkerRadius
        back.position.y = checkerRadius
        back.position.z = -checkerHeight/2
        this.sceneObject.add(back)

        let front = new Face(material, checkerRadius, checkerHeight).sceneObject
        front.position.x = checkerRadius
        front.position.y = checkerRadius
        front.position.z = checkerHeight/1.9
        this.sceneObject.add(front)
    }
}