console.log('heck no')

var camera, scene, renderer;
			init();
			animate();

function init() {

    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0, 0, 0 );
 
    camera = new THREE.PerspectiveCamera( 120, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 50;
   
    renderer = new THREE.SVGRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight)

    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.CylinderBufferGeometry(2, 2, 30, 500)
    for (var i = 1; i < 5; i++){
        var material = new THREE.MeshBasicMaterial( {color: 0xa6d64c} );
        var cylinder = new THREE.Mesh( geometry, material );
        cylinder.position.set(20*i, 2*i, 10)
        scene.add( cylinder );
    }
    // var vertices = [];
    // var divisions = 50;

    // for ( var i = 0; i <= divisions; i ++ ) {
    //     var v = ( i / divisions ) * ( Math.PI * 2 );
    //     var x = Math.sin( v );
    //     var z = Math.cos( v );
    //     vertices.push( x, 0, z );
    // }

    // var geometry = new THREE.BufferGeometry();
    // geometry.addAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

    // for ( var i = 1; i <= 3; i ++ ) {
    //     var material = new THREE.LineBasicMaterial( {
    //         color: Math.random() * 0xffffff,
    //         linewidth: 10
    //     } );
    //     var line = new THREE.Line( geometry, material );
    //     line.scale.setScalar( i / 3 );
    //     scene.add( line );
    // }

    // var material = new THREE.LineDashedMaterial( {
    //     color: 'blue',
    //     linewidth: 1,
    //     dashSize: 10,
    //     gapSize: 10
    // } );
    // var line = new THREE.Line( geometry, material );
    // line.scale.setScalar( 2 );
    // // scene.add( line );

    var light = new THREE.PointLight( 0xFFFF00 );
		light.position.set( 10, 0, 10 );
		scene.add( light );

    window.addEventListener( 'resize', onWindowResize, false );

}


function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    var count = 0;
    var time = performance.now() / 1000;
    scene.traverse( function ( child ) {
        //child.rotation.x = count + ( time / 3 );
        //child.rotation.z = count + ( time / 4 );
        child.rotation.y = count + ( time / 5 );
        count ++;
    } );
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}
