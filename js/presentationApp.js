var windowRef;
$(function() {

	windowRef = window.open("presentation.html",'titleTown','width=800, height=900');
	windowRef.focus();

    // Need to call on a delay to allow
    // the child window to fully load...
    window.setTimeout(callChildWindowFunction, 2500);
	setTimeout(function(){
			windowRef.postMessage("message","/presentation.html");
		//window.frames[0].contentWindow.tester("test");
	},2000);
	
	//  $(avgo.presentionWindow.document).load(function() {
	 //   alert('loaded');
	 //   do other things
	//  });
});

function callChildWindowFunction() {
    //if ((windowRef != null) && (windowRef.closed == false)) windowRef.tester("test");
}