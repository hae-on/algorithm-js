// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n")

const sample = `26 5
Bulbasaur
Ivysaur
Venusaur
Charmander
Charmeleon
Charizard
Squirtle
Wartortle
Blastoise
Caterpie
Metapod
Butterfree
Weedle
Kakuna
Beedrill
Pidgey
Pidgeotto
Pidgeot
Rattata
Raticate
Spearow
Fearow
Ekans
Arbok
Pikachu
Raichu
25
Raichu
3
Pidgey
Kakuna`;
const input = sample.split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const book = input.slice(0, N);
const quiz = input.slice(N, N + M);

// ['포켓몬 이름', '번호']
const name = book.map((elem, idx) => [elem, (idx + 1).toString()]);
// ['번호', '포켓몬 이름']
const number = book.map((elem, idx) => [(idx + 1).toString(), elem]);
// ['번호' => '포켓몬 이름' || '포켓몬 이름' => '번호']
const combi = new Map(name.concat(number));

quiz.forEach((v) => {
  console.log(combi.get(v));
});
