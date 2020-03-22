function countLetter(word, letter) {
    var count = 0;
    word = word.toLowerCase();
    letter = letter.toLowerCase();
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            count++;
        }

    }
    console.log("A letra " + letter + " ocorre: " + count + " vezes.");
}
countLetter("HeLlo", "l");