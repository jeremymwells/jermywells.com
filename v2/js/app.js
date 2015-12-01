var example = (function() {

    "use strict";

    var scene = new THREE.Scene(),
        light = new THREE.PointLight(0xffffff),
        camera,
        renderer = new THREE.WebGLRenderer(),
        cylinder,
        hotspots,
        stats;

    function degreesToRadians(degrees){
        return degrees * (Math.PI / 180);
    }

    function applyStats(){
        stats = new Stats();
        stats.setMode(0);

        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
    }

    function getMaterial(){
        return new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
        });
    }

    function initScene() {

        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById("webgl-div").appendChild(renderer.domElement);

        scene.add(light);

        camera = new THREE.PerspectiveCamera(
            35,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );

        camera.position.z = 45;

        scene.add(camera);

        cylinder = new THREE.Mesh(
            new THREE.CylinderGeometry( 5, 5, 90, 10, 1, true ),
            getMaterial()
        );

        cylinder.name = "cylinder";
        cylinder.rotation.x = degreesToRadians(90);        
        scene.add(cylinder);


        var material = new THREE.MeshBasicMaterial({
            vertexColors: THREE.VertexColors,
            side: THREE.DoubleSide
        });

        var cVerts = getCylinderVertices(cylinder);
        var geom = new THREE.Geometry();
        geom.vertices = cVerts;

        geom.faces.push( new THREE.Face3( 0, 1, 2 ) );

        hotspots = new THREE.Mesh(geom, material);

        scene.add(hotspots)

        applyStats();

        render();
    };

    function getCylinderVertices(cyl){
        var v=[];
        for(var i=0;i<cyl.geometry.vertices.length;i++){
            if (cyl.geometry.vertices[i].y > 0){
                v.push(cyl.geometry.vertices[i]);
            }
        }

        return v;
    }

    function render() {

        cylinder.rotation.y += 0.01;

        renderer.render(scene, camera);
        requestAnimationFrame(render);

        stats.update();
    };




    window.onload = initScene;

    return {
        scene: scene,
        getCylinder: function(){ return cylinder; }
    }

})();