document.addEventListener('DOMContentLoaded', function() {
    var scene = document.querySelector('a-scene');
    var splash = document.querySelector('#splash');
    scene.addEventListener('loaded', function (e) {
        splash.style.display = 'none';
    });

    document.querySelector('#aa').addEventListener('click', function (e) {
        document.querySelector('#ab').emit('aa-clicked');
        document.querySelector('#ba').emit('aa-clicked');
        document.querySelector('#bb').emit('aa-clicked');
        document.querySelector('#ca').emit('aa-clicked');
    });

    document.querySelector('#ca').addEventListener('click', function (e) {
        document.querySelector('#cb').emit('ca-clicked');
    });

    document.querySelector('#cb').addEventListener('click', function (e) {
        document.querySelector('#cc').emit('cb-clicked');
    });
});