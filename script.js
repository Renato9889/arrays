var filmes = [
  "X-men: Dias de um Futuro Esquecido",
  "Vingadores: Guerra Infinita",
  "Aves de Rapina: Arlequina e sua Emancipação Fantabulosa"
];

//adicionar novos filmes
filmes.push("Liga da Justiça de Zack Snyder");

//adicionar novos filmes
filmes.push("Doutor Estranho no Multiverso da Loucura");

//adicionar novos filmes
filmes.push("Vingadores: Ultimato");

//adicionar novos filmes
filmes.push("The Batman");

for (var i = 0; i < filmes.length; i++) {
  document.write("<p>" + filmes[i] + "</p>");
}
