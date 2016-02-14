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
        let mesh = new THREE.Mesh(this.geometry, this.material[color]);
        mesh.rotation.x += Math.PI/2;
        mesh.position.set(x, y, 0)
        return new Checker(mesh);
    }
}

export default new CheckerFactory();