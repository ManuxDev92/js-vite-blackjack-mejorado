import _ from 'underscore'; 

/**
 * 
 * @param {Arrray<String>} tiposDeCarta 
 * @param {Arrray<String>} tiposEspeciales 
 * @returns {Arrray} retorna un nuevo Deck de carta 
 */

export const crearDeck = ( tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0 ) 
        throw new Error('tipoDeCarta es obligatorio como un arreglo de string'); 

     if (!tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tipoDeCarta es obligatorio como un arreglo de string'); 

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

    return deck;
}