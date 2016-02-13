import Checker from './Checker'

class CheckerFactory {
    constructor() {
        console.log('CheckerFactory constructed')
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({color: 0x0000ff});
    }

    makeChecker() {
        let mesh = new THREE.Mesh(this.geometry, this.material);
        return new Checker(mesh);
    }
}

export default new CheckerFactory();