const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);

  rl.question('What do you like to listen to? ', (answer2) => {
    console.log(`Thank you for your valuable feedback: ${answer2}`);
  rl.close();

  let output = (`My name is ${answer1} and I enjoy listening to ${answer2}`)
  console.log(output)
}) 
});
 
