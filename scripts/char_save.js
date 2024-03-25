function saveChar() {

    const nome = document.getElementById('nome')
    const raca = document.getElementById('raca')
    const classe = document.getElementById('classe')
    const subclasse = document.getElementById('subclasse')
    const nivel = document.getElementById('nivel')
    const hp = document.getElementById('hp')
    const ca = document.getElementById('ca')
    const forca = document.getElementById('forca').value
    const destreza = document.getElementById('destreza').value
    const constituicao = document.getElementById('constituicao').value
    const inteligencia = document.getElementById('inteligencia').value
    const sabedoria = document.getElementById('sabedoria').value
    const carisma = document.getElementById('carisma').value
    const atributos = [forca, destreza, constituicao, inteligencia, sabedoria, carisma]
    const pericias = []
    pericias[0] = document.getElementById('atletismo').value
    pericias[1] = document.getElementById('acrobacia').value
    pericias[2] = document.getElementById('furtividade').value
    pericias[3] = document.getElementById('prestidigitacao').value
    pericias[4] = document.getElementById('arcanismo').value
    pericias[5] = document.getElementById('historia').value
    pericias[6] = document.getElementById('investigacao').value
    pericias[7] = document.getElementById('natureza').value
    pericias[8] = document.getElementById('religiao').value
    pericias[9] = document.getElementById('adestrar_animais').value
    pericias[10] = document.getElementById('intuicao').value
    pericias[11] = document.getElementById('medicina').value
    pericias[12] = document.getElementById('percepcao').value
    pericias[13] = document.getElementById('sobrevivencia').value
    pericias[14] = document.getElementById('atuacao').value
    pericias[15] = document.getElementById('enganacao').value
    pericias[16] = document.getElementById('intimidacao').value
    pericias[17] = document.getElementById('persuasao').value
    const habilidades = document.getElementById('habilidades')
    const arma1 = document.getElementById('arma1')
    const arma2 = document.getElementById('arma2')
    const arma3 = document.getElementById('arma3')
    const arma4 = document.getElementById('arma4')
    const arma5 = document.getElementById('arma5')
    const arma6 = document.getElementById('arma6')
    const armas = [arma1, arma2, arma3, arma4, arma5, arma6]
    const magias = document.getElementById('magias')

    const myChar = new Character(nome, 'lyra', nivel.value, classe.value, subclasse.value, raca.value, 9, ca.value, hp.value, 0, atributos, pericias, armas.value, magias.value, habilidades.value);

    const personagem = JSON.stringify(myChar);
    myChar.save()
    window.location.href = '../dndsheet/ficha'
}