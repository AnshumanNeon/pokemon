function getRandomInt(min, max) {
    a = Math.floor(Math.pow(10,14) * Math.random() * Math.random()) % (max - min + 1) + min;
    return a;
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

    ball_arr = [0, 0, 0, 0];

    for(let i = 0; i < ball_types.length; i++) {
	result[i] = `#${add+arr[i]} ${generation[arr[i]-1]}`;

	if(ball_types[i] == 1) {
	    x = 3;
	    ball_arr[0] += 1;
	} else if(ball_types[i] == 2) {
	    x = 4;
	    ball_arr[1] += 1;
	} else if(ball_types[i] == 3) {
	    x = 5;
	    ball_arr[2] += 1;
	} else if(ball_types[i] == 4) {
	    x = 1;
	    ball_arr[3] += 1;
	}

	let res = getRandomInt(1, x);

	while(res == 2) {
	    res = getRandomInt(1, x);
	}

	if(res == 1) {
	    result[i] += " got away.";
	} else {
	    result[i] += " was caught!";
	}
    }

    res_div = document.getElementById("results");
    ball_div = document.getElementById("balls");

    result.forEach(r => {
	const p = document.createElement("p");
	p.textContent = r;
	res_div.appendChild(p);
    });

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    p1.textContent = "Regular Balls" + ball_arr[0];
    p2.textContent = "Great Balls" + ball_arr[1];
    p3.textContent = "Ultra Balls" + ball_arr[2];
    p4.textContent = "Master Balls" + ball_arr[3];
    ball_div.appendChild(p1);
    ball_div.appendChild(p2);
    ball_div.appendChild(p3);
    ball_div.appendChild(p4);
}
