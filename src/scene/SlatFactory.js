import Slat from './Slat'

export default class SlatFactory {

    constructor(width, height) {
        this.material = new THREE.MeshPhongMaterial( { color: 0xffff00, specular: 0x606060, side: THREE.DoubleSide } )
        this.geometry = new THREE.PlaneGeometry(width, height);
    }

    make() {
        let slat = new Slat;
        slat.sceneObject = new THREE.Mesh(this.geometry, this.material);
        //slat.sceneObject.position.y = -1;
        //slat.sceneObject.rotation.x = 90*(Math.PI/180);        let checker = new Checker
        return slat;
    }
}