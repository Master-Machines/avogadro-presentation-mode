var windowRef;

$(function() {
	
	$('body').keydown(function(e) {
			console.log(e.which);
			var dataToSend = {};
			dataToSend.act = "changePlace";
			switch (e.which) {
				case 39 :
					dataToSend.val = -1;
					windowRef.postMessage(dataToSend,"*");
					break;
				case 37 :
					dataToSend.val = 1;
					windowRef.postMessage(dataToSend,"*");
					break;
				case 27 :
					dataToSend.val = 1000;
					windowRef.postMessage(dataToSend,"*");
					break;
			}
	});

	for (var eventName in avgo.eventData) 
	{ 
		$('#wrapper').append('<div>' + "<a href='javascript:linkClick(&#34;" + eventName + "&#34;)' id='link" + eventName + "' eventname='" + eventName + "'>" + eventName + '</a>' + '</div>');
	}

	$('.controls').hide().click(function() {
		var dataToSend = {};
		dataToSend.act = "changePlace";
		dataToSend.val = parseInt($(this).attr('v'));
		windowRef.postMessage(dataToSend,"*");
	});
});

function linkClick(data){
	windowRef = window.open("presentation.html",'titleTown','width=800, height=900');
	setTimeout(function() {
		var dataToSend = {};
		dataToSend.act = "setData";
		dataToSend.array = avgo.eventData[data];
		dataToSend.category = data;
		var elem = document.getElementById('placesSelector');
		dataToSend.numPlaces = elem.options[elem.selectedIndex].value;
		windowRef.postMessage(dataToSend,"*");
	}, 1000);
	$('.controls').fadeIn(100);
	
}
