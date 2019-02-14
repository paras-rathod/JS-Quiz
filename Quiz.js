function submitAnswers() {
	var total = 5;
	var score = 0;

	//Get user input
	var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;


    //Validation
    for(i=1; i<=total; i++) {
        if (eval('q'+i) == null || eval('q'+i) == '') {
            alert("You missed question "+i);
            return false;
        }
    }


    //Set correct answers
    var answers = ["b", "a", "d", "c", "c"];

    //Check answers

    for(i=1; i<=total; i++) {
        if(eval('q'+i) == answers[i-1]) {
            score++;
        }
    }

    var results = document.getElementById('finalResult');

    results.innerHTML = '<h3>You Scored <span> '+score+'</span> out of <span>'+total+'</span></h3>';

    document.getElementById('a1').style.background = 'lightgreen';
    document.getElementById('a2').style.background = 'lightgreen';
    document.getElementById('a3').style.background = 'lightgreen';
    document.getElementById('a4').style.background = 'lightgreen';
    document.getElementById('a5').style.background = 'lightgreen';

    /*for(i=1; i<=total; i++) {

            var r = eval('a'+i);
            document.getElementById(r).style.background = 'lightgreen';

    }*/

    //alert("You Scored "+score+ " Out of "+total);

    return false;


}