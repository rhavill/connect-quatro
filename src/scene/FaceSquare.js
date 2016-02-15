
export default class FaceSquare {
    constructor(material, checkerRadius, x, y) {

        let shape = new THREE.Shape();
        shape.moveTo( -checkerRadius,-checkerRadius );
        shape.lineTo( -checkerRadius,checkerRadius );
        shape.lineTo(checkerRadius,checkerRadius );
        shape.lineTo( checkerRadius,-checkerRadius );
        shape.lineTo( -checkerRadius,-checkerRadius );

        var ellipse = new THREE.EllipseCurve(0, 0, checkerRadius *.75, checkerRadius *.75, 0, 2.0 * Math.PI, false);
        var ellipsePath = new THREE.CurvePath();
        ellipsePath.add(ellipse);
        var ellipseGeometry = ellipsePath.createPointsGeometry(100);
        var line = new THREE.Line(ellipseGeometry, material);

        shape.holes = [ellipsePath]

        let geometry = new THREE.ShapeGeometry(shape);
        let mesh = new THREE.Mesh(geometry, material)
        this.sceneObject = mesh
        this.sceneObject.position.x = x
        this.sceneObject.position.y = y
    }
}


