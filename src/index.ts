import './config';
import readline from 'readline';

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(`${process.env.Question}: `, (value) => {
	console.log(`${value} - good answer!`);
	rl.close();
});
