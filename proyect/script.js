const frases = [
  { texto: "Eres una gran estudiante.", autor: "Anónimo" },
  { texto: "Ya falta poco.", autor: "Anónimo" },
  { texto: "No importa lo que pasa en el camino, el final lo vale.", autor: "Confucio" },
  { texto: "Cree en ti. Siempre.", autor: "Anónimo" },
  { texto: "No te rindas puedes con esto y más.", autor: "Anónimo" },
  { texto: "Una calificacion no determina tu conocimiento.", autor: "Anónimo" },
  { texto: "Después de la tormenta, viene la calma.", autor: "Refrán popular" },
  { texto: "El negro dice que tu puedes, y si ocupas se puede comer a quien sea.", autor: "Anónimo" }	
];

function nuevaFrase() {
  const i = Math.floor(Math.random() * frases.length);
  document.getElementById("frase").innerText = frases[i].texto;
  document.getElementById("autor").innerText = "— " + frases[i].autor;
}

let musicaActiva = false;
function toggleMusica() {
  const audio = document.getElementById("audio");
  musicaActiva = !musicaActiva;
  musicaActiva ? audio.play() : audio.pause();
}
 