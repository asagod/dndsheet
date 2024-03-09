class Todo extends Store {
    constructor() {
        super();
    }

    renderItem(item) {

        let template = `
            <div class="card mb-3">
            <h3 class="card-header">${item.nome}</h3>
                <ul class="list-group list-group-flush">
                    <div class="list-group-item">
                    <div class="form-group row">
                    <div class="col-md-6">
                        <input id="nome" class="form-control enter" type="text" disabled value="${item.nome}">
                    </div>
                    <div class="col-md-3">
                        <input id="raca" class="form-control enter" type="text" disabled value="${item.raca}">
                    </div>
                    <div class="col-md-3">
                        <input id="classe" class="form-control enter" type="text" disabled value="${item.classe}">
                    </div>
                    </div>
                    </div>
                    <div class="list-group-item">
                    <div class="form-group row">
                    <div class="col-md-3">
                    <label for="nivel">Nível</label>
                    <input id="nivel" class="form-control enter" type="text" disabled value="${item.nivel}">
                    </div>
                    <div class="col-md-3">
                    <label for="hp">HP</label>
                    <input id="hp" class="form-control enter" type="text" disabled value="${item.hp}">
                    </div>
                    <div class="col-md-3">
                    <label for="ca">CA</label>
                    <input id="ca" class="form-control enter" type="text" disabled value="${item.ca}">
                    </div>
                    <div class="col-md-3">
                    <label for="subclasse">Subclasse</label>
                    <input id="subclasse" class="form-control enter" type="text" disabled value="${item.subclasse}">
                    </div>
                    </div>
                    </div>
                    <li class="list-group-item">
                    <div class="row">
            <div class="form-group  col-xs-6 col-md-3">
                    <label for="armas">Atributos</label>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <span class="input-group-text score-form">Força</span>
                </div>
                <input type="number" id="forca" name="forca" class="form-control text-right enter" disabled value="${item.forca}">
                <input type="number" id="destreza" name="destreza" class="form-control text-right enter" disabled value="${Math.floor((item.forca/2)-5)}">
            </div>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <span class="input-group-text score-form">Destreza</span>
                </div>
                <input type="number" id="destreza" name="destreza" class="form-control text-right enter" disabled value="${item.destreza}">
                <input type="number" id="destreza" name="destreza" class="form-control text-right enter" disabled value="${Math.floor((item.destreza/2)-5)}">
            </div>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <span class="input-group-text score-form">Constituição</span>
                </div>
                <input type="number" id="constituicao" name="constituicao" class="form-control text-right enter" disabled value="${item.constituicao}">
                <input type="number" id="destreza" name="destreza" class="form-control text-right enter" disabled value="${Math.floor((item.constituicao/2)-5)}">
            </div>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <span class="input-group-text score-form">Inteligência</span>
                </div>
                <input type="number" id="inteligencia" name="inteligencia" class="form-control text-right enter" disabled value="${item.inteligencia}">
                <input type="number" id="destreza" name="destreza" class="form-control text-right enter" disabled value="${Math.floor((item.inteligencia/2)-5)}">
            </div>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <span class="input-group-text score-form">Sabedoria</span>
                </div>
                <input type="number" id="sabedoria" name="sabedoria" class="form-control text-right enter" disabled value="${item.sabedoria}">
                <input type="number" id="destreza" name="destreza" class="form-control text-right enter" disabled value="${Math.floor((item.sabedoria/2)-5)}">
            </div>
            <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <span class="input-group-text score-form">Carisma</span>
                </div>
                <input type="number" id="carisma" name="carisma" class="form-control text-right enter" disabled value="${item.carisma}">
                <input type="number" id="destreza" name="destreza" class="form-control text-right enter" disabled value="${Math.floor((item.carisma/2)-5)}">
            </div>
        </div>
        </li>
                    <li class="list-group-item">
                    <label for="habilidades">Habilidades</label>
                    <textarea id="habilidades" class="form-control enter" type="text" disabled>${item.habilidades}</textarea></li>
                    <li class="list-group-item">
                    <label for="armas">Armas</label>
                    <textarea id="armas" class="form-control enter" type="text" disabled>${item.armas}</textarea></li>
                    <li class="list-group-item">
                    <label for="magias">Magias</label>
                    <textarea id="magias" class="form-control enter" type="text" disabled>${item.magias}</textarea></li>
                    <li class="list-group-item">
                    <label for="pericias">Perícias</label>
                    <textarea id="pericias" class="form-control enter" type="text" disabled>${item.magias}</textarea></li>
                </ul>
            </div
            <div class="card-body">
                <a class="btn btn-info editar">Editar</a>
                <a class="btn btn-danger deletar">Excluir</a>
            </div>   
            </div>
            <br>`

        const itemHTML = document.createRange().createContextualFragment(template)

        itemHTML.querySelector('.deletar').addEventListener('click', () => {
            lista.excluirIndex = item.idx
            componentList_v2(lista.todos)
        })

        const itemNome = itemHTML.querySelector('#nome')
        const itemRaca = itemHTML.querySelector('#raca')
        const itemClasse = itemHTML.querySelector('#classe')
        const itemSubclasse = itemHTML.querySelector('#subclasse')
        const itemNivel = itemHTML.querySelector('#nivel')
        const itemCa = itemHTML.querySelector('#ca')
        const itemHp = itemHTML.querySelector('#hp')
        const itemHabilidades = itemHTML.querySelector('#habilidades')
        const itemArmas = itemHTML.querySelector('#armas')
        const itemMagias = itemHTML.querySelector('#magias')
        const itemForca = itemHTML.querySelector('#forca')
        const itemDestreza = itemHTML.querySelector('#destreza')
        const itemConstituicao = itemHTML.querySelector('#constituicao')
        const itemInteligencia = itemHTML.querySelector('#inteligencia')
        const itemSabedoria = itemHTML.querySelector('#sabedoria')
        const itemCarisma = itemHTML.querySelector('#carisma')
        const inputs = itemHTML.querySelectorAll('.enter')

        itemHTML.querySelector('.editar').addEventListener('click', (e) => {
            itemNome.removeAttribute('disabled')
            itemRaca.removeAttribute('disabled')
            itemClasse.removeAttribute('disabled')
            itemSubclasse.removeAttribute('disabled')
            itemNivel.removeAttribute('disabled')
            itemCa.removeAttribute('disabled')
            itemHp.removeAttribute('disabled')
            itemHabilidades.removeAttribute('disabled')
            itemArmas.removeAttribute('disabled')
            itemMagias.removeAttribute('disabled')
            itemForca.removeAttribute('disabled')
            itemDestreza.removeAttribute('disabled')
            itemConstituicao.removeAttribute('disabled')
            itemInteligencia.removeAttribute('disabled')
            itemSabedoria.removeAttribute('disabled')
            itemCarisma.removeAttribute('disabled')
            itemNome.focus()

            inputs.forEach(element => {
                element.addEventListener('keyup', (e) => {
                    if (e.key === "Enter") {
                        lista.editarIndex(item.idx, {
                            nome: itemNome.value,
                            raca: itemRaca.value,
                            classe: itemClasse.value,
                            subclasse: itemSubclasse.value,
                            nivel: itemNivel.value,
                            ca: itemCa.value,
                            hp: itemHp.value,
                            habilidades: itemHabilidades.value,
                            armas: itemArmas.value,
                            magias: itemMagias.value,
                            forca: itemForca.value,
                            destreza: itemDestreza.value,
                            constituicao: itemConstituicao.value,
                            inteligencia: itemInteligencia.value,
                            sabedoria: itemSabedoria.value,
                            carisma: itemCarisma.value
                        })
                        componentList_v2(lista.todos)
                        itemNome.value = ''
                        itemRaca.value = ''
                        itemClasse.value = ''
                        itemSubclasse.value = ''
                        itemNivel.value = ''
                        itemCa.value = ''
                        itemHp.value = ''
                        itemHabilidades.value = ''
                        itemArmas.value = ''
                        itemMagias.value = ''
                        itemNome.focus()
                    }
                })
            })
        })

        return itemHTML
    }
}
