// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let newL = readline.createInterface({ input: process.stdin });
	
    const input =[];
    rl.on("line", function(line){
        input.push(line.split(' ').map((v)=> parseInt(v)));
    })
	for await (const line of rl) {
		console.log('Hello Goorm! Your input is', line);
		rl.close();
	}
	
	process.exit();
})();