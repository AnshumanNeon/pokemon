function getRandomInt(min, max) {
    a = Math.ceil(min);
    b = Math.floor(max);
    return Math.floor(Math.random() * (b - a + 1)) + a;
}

function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function run() {
    num_rolls = document.getElementById("rolls").value;
    gen = document.getElementById("gen").value;

    generation = generation_1;
    add = 0;

    if (gen == 2) {
	generation = generation_2;
	add = 151;
    } else if (gen == 3) {
	generation = generation_3;
	add = 251;
    } else if (gen == 1) {
	generation = generation_1;
	add = 0;
    } else {
	alert("Wrong generation type");
    }

    bookemon_num = Object.keys(generation).length;
    arr = [];

    for(let i = 0; i < num_rolls; i++) {
	arr.push(getRandomInt(1, bookemon_num));
    }

    ball_types = [];

    arr.forEach(element => {
	let type = prompt(`Enter the ball type for #${add+element} (${generation[element-1]}). Enter 1 for a Regular ball, 2 for a Great Ball, 3 for a Ultra Ball and 4 for a Master Ball.`);
	ball_types.push(type);
    });

    result = [];

    for(let i = 0; i < ball_types.length; i++) {
	result[i] = `#${add+arr[i]} ${generation[arr[i]-1]}`;

	let x = 0

	if(ball_types[i] == 4) {
	    x = 1;
	} else {
	    x = ball_types[i] + 2;
	}

	let res = rollDice(x);

	while(res == 2) {
	    res = rollDice(x);
	}

	if(res == 1) {
	    result[i] += " got away.";
	} else {
	    result[i] += " was caught!";
	}
    }

    res_div = document.getElementById("results");

    result.forEach(r => {
	const p = document.createElement("p");
	p.textContent = r;
	res_div.appendChild(p);
    })
}
