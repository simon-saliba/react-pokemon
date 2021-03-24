export function getFirstAbility (pokemon){
    if(pokemon.abilities && pokemon.abilities.length > 0) return pokemon.abilities[0].ability.name;
    else return null;
}

export function convertPoundsToKilograms (pound){
    return pound*0.45;
}