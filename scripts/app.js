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
const itemAtributos = [itemForca, itemDestreza, itemConstituicao, itemInteligencia, itemSabedoria, itemCarisma]
const itemPericias = []
const proeficiencias = []
itemPericias[0] = document.getElementById('atletismo')
itemPericias[1] = document.getElementById('acrobacia')
itemPericias[2] = document.getElementById('furtividade')
itemPericias[3] = document.getElementById('prestidigitacao')
itemPericias[4] = document.getElementById('arcanismo')
itemPericias[5] = document.getElementById('historia')
itemPericias[6] = document.getElementById('investigacao')
itemPericias[7] = document.getElementById('natureza')
itemPericias[8] = document.getElementById('religiao')
itemPericias[9] = document.getElementById('adestrar_animais')
itemPericias[10] = document.getElementById('intuicao')
itemPericias[11] = document.getElementById('medicina')
itemPericias[12] = document.getElementById('percepcao')
itemPericias[13] = document.getElementById('sobrevivencia')
itemPericias[14]= document.getElementById('atuacao')
itemPericias[15] = document.getElementById('enganacao')
itemPericias[16] = document.getElementById('intimidacao')
itemPericias[17] = document.getElementById('persuasao')
const itemHabilidades = document.getElementById('habilidades')
const itemArma1 = document.getElementById('arma1')
const itemArma2 = document.getElementById('arma2')
const itemArma3 = document.getElementById('arma3')
const itemArma4 = document.getElementById('arma4')
const itemArma5 = document.getElementById('arma5')
const itemArma6 = document.getElementById('arma6')
const itemArmas = [itemArma1, itemArma2, itemArma3, itemArma4, itemArma5, itemArma6]
const itemMagias = document.getElementById('magias')
const profBonus = (Math.ceil((itemNivel/4) + 1))
const divLista = document.getElementById('lista')
const salvar = document.getElementById('salvar')
const itensRenderizados = document.getElementById('itensRenderizados')

for (const element of itemPericias){
    if (element.value == true){
        proeficiencias.push(profBonus)
    } else {
        proeficiencias.push(0)
    }
}

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
            proeficiencias: i.proeficiencias,
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
            armas: itemArmas.value,
            magias: itemMagias.value,
            forca: itemForca.value,
            destreza: itemDestreza.value,
            constituicao: itemConstituicao.value,
            inteligencia: itemInteligencia.value,
            sabedoria: itemSabedoria.value,
            carisma: itemCarisma.value,
            proeficiencias: proeficiencias,
        }
        componentList_v2(lista.todos)
        // itemNome.value = ''
        // itemRaca.value = ''
        // itemClasse.value = ''
        // itemSubclasse.value = ''
        // itemNivel.value = ''
        // itemCa.value = ''
        // itemHp.value = ''
        // itemHabilidades.value = ''
        // itemArmas.value = ''
        // itemForca.value = ''
        // itemDestreza.value = ''
        // itemConstituicao.value = ''
        // itemInteligencia.value = ''
        // itemSabedoria.value = ''
        // itemCarisma.value = ''
        // itemNome.focus()
})

window.onload = () => { 
    console.log('Tá funcionando!')
    componentList_v2(lista.todos)
}
