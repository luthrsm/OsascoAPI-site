//scrolltop

var linkTop = document.querySelector('.scrollTop');

window.addEventListener('scroll', function () {
    linkTop.classList.toggle('active', window.scrollY > 450)
})

function backTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


//api

// Seleciona o elemento onde os dados serão inseridos


function getJogadoras() {
    fetch('https://my-json-server.typicode.com/luthrsm/OsascoAPI/jogadoras')
        .then((response) => response.json())
        .then((data) => {

            const elencoContainer = document.querySelector(".elenco");
            // Itera sobre os dados para criar um bloco HTML para cada jogadora
            data.forEach((jogadora) => {
                // Cria um novo elemento div com a classe jogadoras
                const jogadoraDiv = document.createElement("div");
                jogadoraDiv.classList.add("jogadoras", "current-elenco");

                // Cria a estrutura interna da jogadora
                jogadoraDiv.innerHTML = `
                    <div class="img">
                        <img src="${jogadora.foto}" alt="${jogadora.nome}" id="foto"/>
                    </div>
                    <div class="txtElenco">
                        <p class="nome"><b>Nome:</b> ${jogadora.nome}</p>
                        <p class="pos"><b>Posição:</b> ${jogadora.posição}</p>
                        <p class="altura"><b>Altura:</b> ${jogadora.altura}</p>
                        <p class="idade"><b>Idade:</b> ${jogadora.idade}</p>
                        <p class="numero"><b>Nº:</b> ${jogadora.numero}</p>
                    </div>
                `;

                // Adiciona o bloco da jogadora ao contêiner
                elencoContainer.appendChild(jogadoraDiv);
            });
        })
        .catch((err) => {
            console.log('jogadora não encontrada', err);
        });
}

getJogadoras();

function getComissao() {
    fetch('https://my-json-server.typicode.com/luthrsm/OsascoAPI/comissaotecnica')
        .then((response) => response.json())
        .then((data) => {

            const comissaoContainer = document.querySelector(".comissao");

            data.forEach((comissaoTecnica) => {
                const comissaoDiv = document.createElement("div");
                comissaoDiv.classList.add("comissao-tecnica", "current-elenco");

                comissaoDiv.innerHTML = `
                    <div class="img">
                        <img src="${comissaoTecnica.foto}" alt="${comissaoTecnica.nome}" id="foto"/>
                    </div>
                    <div class="txtElenco">
                        <p class="nome"><b>Nome:</b> ${comissaoTecnica.nome}</p>
                        <p class="fun"><b>Função:</b> ${comissaoTecnica.função}</p>
                    </div>
                `;

                comissaoContainer.appendChild(comissaoDiv);
            });
        })
        .catch((err) => {
            console.log('comissão técnica não encontrada', err);
        });
}

getComissao();

