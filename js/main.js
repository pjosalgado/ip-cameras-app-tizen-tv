//Initialize function
var init = function () {
	
    console.log('init() called');
    
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        	window.location.href = 'index.html';
        }
    });
 
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch (e.keyCode) {
    		
	    	case 13: // Enter
	        	window.location.href = 'index.html';
	        	break;
    		
	    	case 38: // ArrowUp
	        	window.location.href = 'detalhes-camera.html';
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

// window.onload can work without <body onload="">
window.onload = init;
