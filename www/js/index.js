
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    //document.getElementById('deviceready').classList.add('ready');
    $(document).ready(function(){
        init();
    });

    function init() {
        $('#addButton').click(function() {
            let taskName = $('#newTask').val();
            $('ul').append("<li>" + taskName + "</li>");
        });
    }

		

}
