
export default class FaceSquare {
    constructor(material, checkerRadius, x, y) {
        let length = checkerRadius*2, width = checkerRadius*2;

        let shape = new THREE.Shape();
        shape.moveTo( 0,0 );
        shape.lineTo( 0, width );
        shape.lineTo(length, width );
        shape.lineTo( length, 0 );
        shape.lineTo( 0, 0 );

        let curve = new THREE.EllipseCurve(
            checkerRadius,  checkerRadius,            // ax, aY
            checkerRadius*0.85, checkerRadius *.85,           // xRadius, yRadius
            0,  2 * Math.PI,  // aStartAngle, aEndAngle
            false,            // aClockwise
            0                 // aRotation
        );
        let path = new THREE.Path( curve.getPoints( 600 ) );

        shape.holes = [path]

        let geometry = new THREE.ShapeGeometry(shape);
        let mesh = new THREE.Mesh(geometry, material)
        this.sceneObject = mesh
        this.sceneObject.position.x = x
        this.sceneObject.position.y = y
    }
}


