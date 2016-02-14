
export default class Table {
    constructor() {
        const material = new THREE.MeshPhongMaterial( { color: 0xffffff, specular: 0x606060, side: THREE.DoubleSide } )
        const geometry = new THREE.PlaneGeometry(25, 25);
        this.sceneObject = new THREE.Mesh(geometry, material);
        this.sceneObject.position.y = -1;
        this.sceneObject.rotation.x = 90*(Math.PI/180);
    }
}


