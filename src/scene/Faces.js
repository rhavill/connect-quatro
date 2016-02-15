import Face from './Face'

export default class Faces {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        const width = checkerRadius*14
        const height = checkerRadius*12
        let material = new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x606060, side: THREE.DoubleSide } )
        let back = new Face(material, checkerRadius, checkerHeight).sceneObject
        back.position.z = -checkerHeight/2
        this.sceneObject.add(back)
    }
}