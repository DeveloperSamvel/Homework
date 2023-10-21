class Shiritory {
    constructor() {
        this.words = [];
        this.game_over = false;
    }

    play(word) {
        if (this.game_over || word.trim() === "") {
            this.game_over = true;
            return "game over";
        }

        let wordsLength = this.words.length;
        if(wordsLength === 0) {
            this.words = [...this.words, word];
            return this.words;
        }

        let lastWord = this.words[wordsLength - 1];

        if(!this.words.includes(word) && lastWord[lastWord.length - 1] === word[0].toLowerCase()) {
            this.words = [...this.words, word];    
            return this.words;
        }

        this.game_over = true;
        return "game over";
    }

    restart(){
        this.words = [];
        this.game_over = true;
        return "game restarted";
    }
}

const myShiritori = new Shiritory();
console.log(myShiritori.play("apple")); // ["apple"]
console.log(myShiritori.play("ear")); // ["apple", "ear"]
console.log(myShiritori.play("rhino")); // ["apple", "ear", "rhino"]
console.log(myShiritori.play("corn")); // "game over"

console.log(myShiritori.words); // ["apple", "ear", "rhino"]
// Words should be accessible.
console.log(myShiritori.restart()); // "game restarted"
console.log(myShiritori.words); // []
// Words array should be set back to empty.
console.log(myShiritori.play("hostess")); // ["hostess"]
console.log(myShiritori.play("stash")); // ["hostess", "stash"]
console.log(myShiritori.play("hostess")); // "game over"
