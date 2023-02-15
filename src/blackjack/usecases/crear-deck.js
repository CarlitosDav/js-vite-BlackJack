import _ from 'underscore';

//export const miNombre = 'Carlos';

// Esta función crea un nuevo deck
/**
 * 
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<string>} Retorna un arreglo de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta > 0) throw new console.error('Tipo de carta es obligatorio o  debe ser un arreglo de String');
    //if(tiposDeCarta > 0) throw new console.error('Tipos de carta debe ser un arreglo de String');
    if(!tiposEspeciales || tiposEspeciales > 0) throw new console.error('Tipo de carta es obligatorio o  debe ser un arreglo de String');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    //console.log( deck );
    return deck;
}

//export default crearDeck;