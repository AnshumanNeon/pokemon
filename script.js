function getRandomInt(min, max) {
    return Math.floor(Math.random() * max) + min;
}

num_rolls = document.getElementById("rolls").value;
gen = document.getElementById("gen").value;

generation = generation_1;

if gen == 2 {
    generation = generation_2;
} else if gen == 3 {
    generation = generation_3;
} else {
    alert("Wrong generation type");
}

bookemon_num = Object.keys(generation).length;
arr = []

for(let i = 0; i < num_rolls; i++) {
    arr.push(getRandomInt(1, bookemon_num));
}

rolls = document.getElementById("rolls_div");

arr.forEach(element => {
    const p = document.createElement("p");
    p.textContent = element;
    arr.appenedChild(p);
});

ball_types = []

arr.forEach(element => {
    let type = prompt(`Enter the ball type for #${element} (${generation[arr.indexOf(element)]}). Enter 1 for a Regular ball, 2 for a Great Ball, 3 for a Ultra Ball and 4 for a Master Ball.`);
    ball_types.append(type);
});

result = []

for(let i = 0; i < ball_types.length; i++) {
    result[i] += `#${arr[i]} ${generation[i]}`;

    let x = 0

    if(ball_types[i] == 4) {
	x = 1;
    } else {
	x = ball_types[i] + 2;
    }

    let res = getRandomInt(1, x);

    while(res == 2) {
	res = getRandomInt(1, x);
    }

    if(res == 1) {
	result[i] += "got away.";
    } else {
	result[i] += "was caught!";
    }
}

res_div = document.getElementById("results");

result.forEach(r => {
    const p = document.createElement("p");
    p.textContent = r;
    arr.appenedChild(p);
})
