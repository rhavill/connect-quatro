import Checker from './Checker'

class CheckerFactory {
    constructor() {
        this.geometry = new THREE.CylinderGeometry( 1, 1,.4, 32);
        this.material = {
            black: new THREE.MeshBasicMaterial({color: 0xffffff}),
            red: new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0x606060 } )
        };
    }

    makeChecker(color) {
        let mesh = new THREE.Mesh(this.geometry, this.material[color]);
        return new Checker(mesh);
    }
}

export default new CheckerFactory();