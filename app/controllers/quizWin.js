function back(e){
	$.quizWin.close();
}

function start(e){
	var quiz = Alloy.createController('quiz').getView();
	quiz.open();
}
