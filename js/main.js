var answers = [
	{
		question: "What programming language is the building block of a website?",
		answer: "html"
	},
	{
		question: "What is the abbreviation for Cascading Style Sheets?",
		answer: "css"
	},
	{	
		question: "Bootstrap is a ____ framework.",
		answer: "css"
	},
	{
		question: "What does DOM stand for?",
		answer: "document object model"
	},
	{
		question: "The most popular programming language is ___________.",
		answer: "javascript"
	},
	{
		question: "A popular javascript library used for DOM manipulation is _______.",
		answer: "jquery"
	},
	{
		question: "______ statements go hand-in-hand with IF statements.",
		answer: "else"
	},
	{
		question: "true or false: Anybody can learn to code.",
		answer: "true"
	},
	{
		question: "true or false: JavaScript can make anyone cry.",
		answer: "true"
	},
	{
		question: "true or false: web developers are always learning something new.",
		answer: "true"
	},
]

for (var i = 0; i < answers.length; i++) {
	var q = answers[i].question;
	document.getElementById('question' + [i]).textContent = q;
}

function getAnswers() {
	var correct = 0;
	var incorrect = 0;
	for (var i = 0; i < answers.length; i++) {
		var answer = answers[i].answer;
		var guess = document.getElementById('answer' + [i]).value.toLowerCase();
		var answerResult = document.getElementById('question' + [i]);
		if (answer == guess) {
			answerResult.className = "correct";
			correct++;
		} else {
			answerResult.className = "incorrect";
			incorrect++;
		}
	}
	document.getElementById('correct').textContent = correct;
	document.getElementById('incorrect').textContent = incorrect;
	// put image below results based on correct/incorrect answers
	document.getElementById('pic').setAttribute("src", "img/pass.jpg");

}








