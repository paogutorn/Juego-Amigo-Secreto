// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// 1️⃣ Array para almacenar los amigos
let listaAmigos = [];

// 2️⃣ Función para agregar un amigo

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (!nombre) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Evitar nombres repetidos
  if (listaAmigos.includes(nombre)) {
    alert('Ese nombre ya está en la lista.');
    return;
  }

  listaAmigos.push(nombre);

  input.value = '';
  input.focus();

  mostrarLista();
}
// 3️⃣ Función para mostrar la lista completa de amigos

function mostrarLista() {
  const listaHTML = document.getElementById('listaAmigos');
  listaHTML.innerHTML = '';

  for (let i = 0; i < listaAmigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = listaAmigos[i];
    listaHTML.appendChild(li);
  }
}

// 4️⃣ Función para sortear amigos sin repetir (mostrando solo 1 a la vez)

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert('No hay más amigos para sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio];

  // Quitar el nombre sorteado del array
  listaAmigos.splice(indiceAleatorio, 1);

  // Mostrar solo el último sorteado
  const resultadoHTML = document.getElementById('resultado');
  resultadoHTML.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

  // Actualizar la lista visible
  mostrarLista();
}
