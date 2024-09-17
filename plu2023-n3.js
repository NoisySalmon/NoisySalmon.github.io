const input = `6
50
45
70
35
44
60`.split('\n');

// first input is number of players; cast as int
const players = Number.parseInt(input.shift());
for (let i = 0; i < players; i++) {
  console.log(input[i]+ " lines were sent");
}
