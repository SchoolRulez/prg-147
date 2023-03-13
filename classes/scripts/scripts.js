class Game {
    constructor(title, genre, platform, players, esrb) { //I used esrb rather than rating to be more clear
        this.title = title;
        this.genre = genre;
        this.platform = platform;
        this.players = players;
        this.esrb = esrb;
    }

    gameStats() {
        return `The game, ${this.title}, is a ${this.genre} on ${this.platform}. It is ${this.players} and rated ${this.esrb}.`;
    }
}

const wow = new Game("World of Warcraft", "RPG", "PC", "multiplayer", "Teen");
document.getElementById("game1").innerHTML = wow.gameStats();

const skyrim = new Game("The Elder Scrolls V: Skyrim", "RPG", "PC and console", "single player", "Mature (17+)");
document.getElementById("game2").innerHTML = skyrim.gameStats();

const ac = new Game("Animal Crossing: New Horizons", "life simulator", "console", "multiplayer", "Everyone");
document.getElementById("game3").innerHTML = ac.gameStats();

const mc = new Game("Minecraft: Java Edition", "survival sandbox", "PC", "multiplayer", "Everyone (10+)");
document.getElementById("game4").innerHTML = mc.gameStats();

//console.log(wow);
//console.log(wow.gameStats());