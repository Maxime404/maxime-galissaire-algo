module.exports = function hasAllUniqueCharacters(str) {

    const allCharacters = 'abcdefghijklmnopqrstuvwxyz';
    let sameCharacterCounter = 0;

    for (const character of str) {
        for (const allCharacter of allCharacters) {
            if (character === allCharacter) {
                sameCharacterCounter++;
            }
        }
    }

    return sameCharacterCounter === allCharacters.length ? true : false;
}