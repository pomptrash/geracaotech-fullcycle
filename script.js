// Dados mockados — a lista começa com estas tarefas
const tarefas = [
  { id: 1, texto: "I will wake up at 8 in the morning" },
  { id: 2, texto: "I will practice html for 1 hour" },
  { id: 3, texto: "I will give time for 2 hours css" },
  { id: 4, texto: "Then I will have breakfast" },
];

const formulario = document.querySelector(".entrada");
const campo = document.querySelector("#tarefa");
const lista = document.querySelector(".lista");

// Gera um id novo maior que todos os existentes
function proximoId() {
  if (tarefas.length === 0) return 1;
  return Math.max(...tarefas.map((t) => t.id)) + 1;
}

// Desenha a lista inteira na tela
function renderizar() {
  lista.innerHTML = "";

  if (tarefas.length === 0) {
    const vazio = document.createElement("li");
    vazio.className = "vazio";
    vazio.textContent = "Nenhuma tarefa por aqui. Escreva a primeira acima.";
    lista.appendChild(vazio);
    return;
  }

  tarefas.forEach((tarefa) => {
    const item = document.createElement("li");
    item.className = "item";
    item.dataset.id = tarefa.id;

    const texto = document.createElement("span");
    texto.className = "texto";
    texto.textContent = tarefa.texto;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "botao-lixeira";
    botao.setAttribute("aria-label", `Excluir "${tarefa.texto}"`);
    botao.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v7M14 10v7"/>
      </svg>`;

    item.append(texto, botao);
    lista.appendChild(item);
  });
}

// Adicionar
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const texto = campo.value.trim();
  if (texto === "") {
    campo.focus();
    return;
  }

  tarefas.push({ id: proximoId(), texto });
  campo.value = "";
  campo.focus();
  renderizar();
});

// Excluir (um listener só, na lista inteira)
lista.addEventListener("click", (evento) => {
  const botao = evento.target.closest(".botao-lixeira");
  if (!botao) return;

  const id = Number(botao.closest(".item").dataset.id);
  const posicao = tarefas.findIndex((t) => t.id === id);
  tarefas.splice(posicao, 1);
  renderizar();
});

renderizar();
