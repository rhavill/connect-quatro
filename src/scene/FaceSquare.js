
export default class FaceSquare {
    constructor(material, checkerRadius, x, y) {
        let length = checkerRadius*2, width = checkerRadius*2;
length=4; width=4;
        let shape = new THREE.Shape();
        shape.moveTo( -2,-2 );
        shape.lineTo( -2,2 );
        shape.lineTo(2,2 );
        shape.lineTo( 2,-2 );
        shape.lineTo( -2,-2 );
        //let holeRadius = checkerRadius*.4
        //shape.moveTo( 0, checkerRadius* 2);
        //shape.quadraticCurveTo( holeRadius, holeRadius, holeRadius, 0 );
        //shape.quadraticCurveTo( holeRadius, -holeRadius, 0, -holeRadius );
        //shape.quadraticCurveTo( -holeRadius, -holeRadius, -holeRadius, 0 );
        //shape.quadraticCurveTo( -holeRadius, holeRadius, 0, holeRadius );

        //let curve = new THREE.EllipseCurve(
        //    checkerRadius,  checkerRadius,            // ax, aY
        //    checkerRadius*0.85, checkerRadius *.85,           // xRadius, yRadius
        //    0,  2 * Math.PI,  // aStartAngle, aEndAngle
        //    false,            // aClockwise
        //    0                 // aRotation
        //);
        //let path = new THREE.Path( curve.getPoints( 600 ) );

        //let hole = new THREE.Shape();

        //hole.moveTo(0,2);
        //hole.ellipse(0,0,2,2,0,2*Math.PI)

        //let holePoints = [
        //        new THREE.Vector3(-1,-1,0),
        //        new THREE.Vector3(1,-1,0),
        //        new THREE.Vector3(1,1,0),
        //        new THREE.Vector3(-1,1,0)
        //    ];
        //hole.fromPoints(holePoints);

        var ellipse = new THREE.EllipseCurve(0, 0, 1, 1, 0, 2.0 * Math.PI, false);
        var ellipsePath = new THREE.CurvePath();
        ellipsePath.add(ellipse);
        var ellipseGeometry = ellipsePath.createPointsGeometry(100);
        var line = new THREE.Line(ellipseGeometry, material);

        //var circleRadius = 1;
        //var circleShape = new THREE.Path();
        //circleShape.moveTo( 0, circleRadius );
        //circleShape.quadraticCurveTo( circleRadius, circleRadius, circleRadius, 0 );
        //circleShape.quadraticCurveTo( circleRadius, -circleRadius, 0, -circleRadius );
        //circleShape.quadraticCurveTo( -circleRadius, -circleRadius, -circleRadius, 0 );
        //circleShape.quadraticCurveTo( -circleRadius, circleRadius, 0, circleRadius );

        shape.holes = [ellipsePath]

        let geometry = new THREE.ShapeGeometry(shape);
        let mesh = new THREE.Mesh(geometry, material)
        this.sceneObject = mesh
        this.sceneObject.position.x = x
        this.sceneObject.position.y = y
    }
}


