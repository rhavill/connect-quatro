import THREE from 'three'

export default class Leg {
    constructor(material, width, height) {
        this.sceneObject = new THREE.Group()
        let geometry = new THREE.BoxGeometry(width, height, height/9.33)
        let plane = new THREE.Mesh(geometry, material)
        plane.rotation.y += Math.PI/2
        this.sceneObject.add(plane)

        let shape = new THREE.Shape()
        shape.moveTo(-height*0.25, 0)
        shape.lineTo(height*0.25, 0)
        shape.lineTo(0, height*0.25)
        shape.lineTo(-height*0.25, 0)
        geometry = new THREE.ShapeGeometry(shape)

        var extrudeSettings = {
            amount			: 1,
            steps			: 1
        };
        geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
        var mesh = new THREE.Mesh( geometry, material );
        mesh.rotation.y = Math.PI/2
        mesh.position.y -= height*0.63

        this.sceneObject.add( mesh );
    }
}


