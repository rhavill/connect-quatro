import Face from './Face'

export default class Faces {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        const width = checkerRadius*14
        const height = checkerRadius*12
        //let material = new THREE.MeshPhongMaterial( { color: 0xffff00, specular: 0x606060, side: THREE.DoubleSide } )
        let material = new THREE.MeshPhongMaterial( { color: 0xd3d3d3, specular: 0x606060, side: THREE.DoubleSide } )
        let geometry = new THREE.PlaneGeometry(width, height);
        let back = new Face(geometry, material).sceneObject
        back.position.set(width/2, height/2, back.position.z - checkerHeight/2)
        this.sceneObject.add(back)
    }
}