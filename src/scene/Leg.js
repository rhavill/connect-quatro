import THREE from 'three'

export default class Leg {
    constructor(material, width, height) {
        this.sceneObject = new THREE.Group()
        let geometry = new THREE.PlaneGeometry(width, height, 32)
        let plane = new THREE.Mesh(geometry, material)
        plane.rotation.y += Math.PI/2
        this.sceneObject.add(plane)

        let shape = new THREE.Shape()
        shape.moveTo(-height*.4, 0)
        shape.lineTo(height*.4, 0)
        shape.lineTo(0, height*.4)
        shape.lineTo(-height*.4, 0)
        geometry = new THREE.ShapeGeometry(shape)
        let triangle = new THREE.Mesh(geometry, material)
        triangle.rotation.y = Math.PI/2
        triangle.position.y -= height*0.65
        this.sceneObject.add(triangle)

    }
}


