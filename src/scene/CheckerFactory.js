import Checker from './Checker'

export default class CheckerFactory {

    constructor(radius, height) {
        this.geometry = new THREE.CylinderGeometry(radius, radius, height, 32);
        this.material = {
            black: new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x606060 } ),
            red: new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0x606060 } )
        };
    }

    make(color) {
        let checker = new Checker
        checker.sceneObject = new THREE.Mesh(this.geometry, this.material[color]);
        checker.sceneObject.rotation.x += Math.PI/2;
        checker.sceneObject.position.set(-5, 2, 0)
        return checker;
    }
}