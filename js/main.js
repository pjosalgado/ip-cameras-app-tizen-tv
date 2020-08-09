var init = function() {

    console.log('init() called');

    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Something you want to do when hide or exit.
        } else {
            window.location.href = 'index.html';
        }
    });

    document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {

            // reference: https://developer.samsung.com/tv/develop/guides/user-interaction/remote-control

            case 37: // ArrowLeft
                window.location.href = 'cameras/camera1.html';
                break;

            case 38: // ArrowUp
                window.location.href = 'cameras/camera2.html';
                break;

            case 39: // ArrowRight
                window.location.href = 'cameras/camera3.html';
                break;

            case 40: // ArrowDown
                window.location.href = 'cameras/camera4.html';
                break;

            case 10009: // Back
                tizen.application.getCurrentApplication().exit();
                break;

            default:
                console.log('Key code : ' + e.keyCode);
                break;
        }
    });

};

window.onload = init;