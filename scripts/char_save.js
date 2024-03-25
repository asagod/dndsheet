function saveChar() {

    const nome = document.getElementById('nome')
    const raca = document.getElementById('raca')
    const classe = document.getElementById('classe')
    const subclasse = document.getElementById('subclasse')
    const nivel = document.getElementById('nivel')
    const hp = document.getElementById('hp')
    const ca = document.getElementById('ca')
    const forca = document.getElementById('forca')
    const destreza = document.getElementById('destreza')
    const constituicao = document.getElementById('constituicao')
    const inteligencia = document.getElementById('inteligencia')
    const sabedoria = document.getElementById('sabedoria')
    const carisma = document.getElementById('carisma')
    const atributos = [forca, destreza, constituicao, inteligencia, sabedoria, carisma]
    const pericias = []
    pericias[0] = document.getElementById('atletismo')
    pericias[1] = document.getElementById('acrobacia')
    pericias[2] = document.getElementById('furtividade')
    pericias[3] = document.getElementById('prestidigitacao')
    pericias[4] = document.getElementById('arcanismo')
    pericias[5] = document.getElementById('historia')
    pericias[6] = document.getElementById('investigacao')
    pericias[7] = document.getElementById('natureza')
    pericias[8] = document.getElementById('religiao')
    pericias[9] = document.getElementById('adestrar_animais')
    pericias[10] = document.getElementById('intuicao')
    pericias[11] = document.getElementById('medicina')
    pericias[12] = document.getElementById('percepcao')
    pericias[13] = document.getElementById('sobrevivencia')
    pericias[14] = document.getElementById('atuacao')
    pericias[15] = document.getElementById('enganacao')
    pericias[16] = document.getElementById('intimidacao')
    pericias[17] = document.getElementById('persuasao')
    const habilidades = document.getElementById('habilidades')
    const arma1 = document.getElementById('arma1')
    const arma2 = document.getElementById('arma2')
    const arma3 = document.getElementById('arma3')
    const arma4 = document.getElementById('arma4')
    const arma5 = document.getElementById('arma5')
    const arma6 = document.getElementById('arma6')
    const armas = [arma1, arma2, arma3, arma4, arma5, arma6]
    const magias = document.getElementById('magias')

    const myChar = new Character(nome, 'lyra', nivel, classe, subclasse, raca, 9, ca, hp, 0, atributos, pericias, armas, magias, habilidades);

    const personagem = JSON.stringify(myChar);
    myChar.save()
    location.href('../index')
}