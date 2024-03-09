const itemNome = document.getElementById('nome')
const itemRaca = document.getElementById('raca')
const itemClasse = document.getElementById('classe')
const itemSubclasse = document.getElementById('subclasse')
const itemNivel = document.getElementById('nivel')
const itemHp = document.getElementById('hp')
const itemCa = document.getElementById('ca')
const itemForca = document.getElementById('forca')
const itemDestreza = document.getElementById('destreza')
const itemConstituicao = document.getElementById('constituicao')
const itemInteligencia = document.getElementById('inteligencia')
const itemSabedoria = document.getElementById('sabedoria')
const itemCarisma = document.getElementById('carisma')
const itemHabilidades = document.getElementById('habilidades')
const itemArma1 = document.getElementById('arma1')
const itemMagias = document.getElementById('magias')
const divLista = document.getElementById('lista')
const salvar = document.getElementById('salvar')
const itensRenderizados = document.getElementById('itensRenderizados')

let lista = new Todo()

let componentList_v2 = (items) => {
    itensRenderizados.innerHTML = '' 
    items.forEach((i, idx) => {
        let item = {
            nome: i.nome,
            raca: i.raca,
            classe: i.classe,
            subclasse: i.subclasse,
            nivel: i.nivel,
            ca: i.ca,
            hp: i.hp,
            habilidades: i.habilidades,
            armas: i.armas,
            magias: i.magias,
            forca: i.forca,
            destreza: i.destreza,
            constituicao: i.constituicao,
            inteligencia: i.inteligencia,
            sabedoria: i.sabedoria,
            carisma: i.carisma,
            salvar: i.salvar,
            idx: idx 
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    })
}

salvar.addEventListener('click', (e) => {
        lista.novoItem = {
            nome: itemNome.value,
            raca: itemRaca.value,
            classe: itemClasse.value,
            subclasse: itemSubclasse.value,
            nivel: itemNivel.value,
            ca: itemCa.value,
            hp: itemHp.value,
            habilidades: itemHabilidades.value,
            armas: itemArma1.value,
            magias: itemMagias.value,
            forca: itemForca.value,
            destreza: itemDestreza.value,
            constituicao: itemConstituicao.value,
            inteligencia: itemInteligencia.value,
            sabedoria: itemSabedoria.value,
            carisma: itemCarisma.value,
        }
        componentList_v2(lista.todos)
        itemNome.value = ''
        itemRaca.value = ''
        itemClasse.value = ''
        itemSubclasse.value = ''
        itemNivel.value = ''
        itemCa.value = ''
        itemHp.value = ''
        itemHabilidades.value = ''
        itemArma1.value = ''
        itemForca.value = ''
        itemDestreza.value = ''
        itemConstituicao.value = ''
        itemInteligencia.value = ''
        itemSabedoria.value = ''
        itemCarisma.value = ''
        itemNome.focus()
})

window.onload = () => { 
    console.log('Tá funcionando!')
    componentList_v2(lista.todos)
}
