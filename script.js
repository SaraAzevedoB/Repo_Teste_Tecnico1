async function rendPartidos() {
  const resp = await fetch(
    'https://dadosabertos.camara.leg.br/api/v2/partidos/'
  );
  return await resp.json();
}

async function rendMembros() {
  const resp = await fetch(
    `https://dadosabertos.camara.leg.br/api/v2/deputados/`
  );
  return await resp.json();
}


const listaCandidatos = document.querySelector('#exibir_partido');

rendPartidos().then(
  (lista) =>
  (listaCandidatos.innerHTML = `${lista.dados.map(
    (e) => `<option value=${e.sigla}>${e.sigla}</option>`
  )}`)
);

var botao = document.getElementById('botao');
botao.addEventListener('click', () => {
  var select = document.getElementById('exibir_partido').value;
  console.log(select);

  const parlamentares = document.querySelector('#parlamentares');

  rendMembros().then(
    (lista) =>
    parlamentares.innerHTML = `${lista.dados.filter(e => e.siglaPartido == select).map(e => `<li>${e.nome}</li>`)}`
  )
})