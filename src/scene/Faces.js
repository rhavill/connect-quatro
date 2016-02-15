import Face from './Face'

export default class Faces {
    constructor(checkerRadius, checkerHeight) {
        this.sceneObject = new THREE.Group();
        const width = checkerRadius*14
        const height = checkerRadius*12
        //let material = new THREE.MeshPhongMaterial( { color: 0xffff00, specular: 0x606060, side: THREE.DoubleSide } )
        let material = new THREE.MeshPhongMaterial( { color: 0xd3d3d3, specular: 0x606060, side: THREE.DoubleSide } )
        let geometry = new THREE.PlaneGeometry(width, height);
        let back = new Face(geometry).sceneObject
        //var backBSP = new ThreeBSP(back)
        //let circleGeometry = new THREE.CircleGeometry(.9*checkerRadius, 32);
        //let circleMesh = new THREE.Mesh(circleGeometry);
        //var circleBSP = new ThreeBSP(circleMesh);
        //var newBSP = backBSP.subtract(circleBSP);
        //var materialNormal = new THREE.MeshNormalMaterial();
        //var newMesh = newBSP.toMesh(materialNormal);

        //newMesh.position.set(-180, 60, 0);
        //back = newMesh
        //scene.add( newMesh );
        //let circle = new THREE.Mesh( circleGeometry, material );

        var materialNormal = new THREE.MeshNormalMaterial();

        var cubeGeometry = new THREE.CubeGeometry( 100, 100, 100, 1, 1, 1 );
        var cubeMesh = new THREE.Mesh( cubeGeometry );
        var cubeBSP = new ThreeBSP( cubeMesh );

        var sphereGeometry = new THREE.SphereGeometry( 60, 32, 32 );
        var sphereMesh = new THREE.Mesh( sphereGeometry );
        var sphereBSP = new ThreeBSP( sphereMesh );

        // Example #1 - Cube subtract Sphere
        var newBSP = cubeBSP.subtract( sphereBSP );
        //var newMesh = newBSP.toMesh( materialNormal );
        //newMesh.position.set(-180, 60, 0);
        //this.sceneObject.add( newMesh );

        //back.position.set(width/2, height/2, back.position.z - checkerHeight/2)
        //this.sceneObject.add(back)
    }
}