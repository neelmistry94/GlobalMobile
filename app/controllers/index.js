function openWindow1(e) {
    var blurbWin=Alloy.createController('blurbWin').getView();
 	blurbWin.open();
}

function openWindow2(e) {
    var quizWin=Alloy.createController('quizWin').getView();
 	quizWin.open();
}

function openWindow3(e) {
    var mapWin=Alloy.createController('mapWin').getView();
 	mapWin.open();
}
$.index.open();