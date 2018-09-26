// Practicing Standard input and output using Node's modules

// Sentence builder, will generate a factual sentence based off the answers provided

var questions = [
"What is your name?",
"What is your favorite food?",
"What is your favorite drink?",
"How many times do you want me to tell you bye?"
];

var answers = [];

process.stdin.on('data', function(data) {
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		ask_questions(answers.length);
	} else {
		process.exit();
	}

});


function ask_questions(i) {
	process.stdout.write(`${questions[i]}    >     `);
}

process.on('exit', function() {
		process.stdout.write("\n\n\n\n");

		process.stdout.write(`You're name is ${answers[0]}, your favorite food is ${answers[1]} and your favorite drink is ${answers[2]}.`);
		process.stdout.write(`\nI will now tell you bye ${answers[3]} times.\n`);

		for (var i = 0; i < Number(answers[3]); i++) {
			process.stdout.write("Goodbye!\n");
		}
		process.stdout.write("\n\n\n\n");

});

ask_questions(0);

