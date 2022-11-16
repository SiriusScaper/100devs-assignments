let turn = 0

while (turn < 10) {
  turn++
  console.log(turn);
}

for (let t = 1; t <= 10; t++) {
  console.log(t);
}

let userPrompt = prompt()

while (userPrompt > 0) {
  userPrompt--
  console.log(userPrompt);
}


for (let userPrompt2 = prompt(); userPrompt2 > 0; userPrompt2--) {
  console.log(userPrompt2)
}