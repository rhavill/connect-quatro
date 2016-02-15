import THREE from 'three'

import Slat from './Slat'

export default class SlatFactory {

    constructor(width, height) {
        this.material = new THREE.MeshPhongMaterial( { color: 0xffff00, specular: 0x606060, side: THREE.DoubleSide } )
        this.geometry = new THREE.PlaneGeometry(width, height);
    }

    make() {
        return new Slat(this.geometry, this.material);
    }
}