import Checker from './Checker'

class CheckerFactory {
    constructor() {
        this.geometry = new THREE.CylinderGeometry( 1, 1,.4, 32);
        this.material = {
            black: new THREE.MeshPhongMaterial( { color: 0x000000, specular: 0x606060 } ),
            red: new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0x606060 } )
        };
    }

    makeChecker(color, x=0, y=0) {
        let checker = new Checker
        checker.sceneObject = new THREE.Mesh(this.geometry, this.material[color]);
        checker.sceneObject.rotation.x += Math.PI/2;
        checker.sceneObject.position.set(x, y, 0)
        return checker;
    }
}

export default new CheckerFactory();