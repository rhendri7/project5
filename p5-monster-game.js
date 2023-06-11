/* CIT281 
RJ Hendrix P5
*/
const Monster = require("./p5-monster.js");
moduele.exports = class MonsterGame {
    constructor({
        monsterList = [],
        gameDelayInMilliseconds = 5000,
        minimumLifeDrain = 1,
        maximumLifeDrain = 30,
}) {
    console.log("Initializing monsters...");
    this.gameDelayInMilliseconds = gameDelayInMilliseconds;
    this.minimumLifeDrain = minimumLifeDrain;
    this.maximumLifeDrain = maximumLifeDrain;
    this.createMonsters(monsterList);
    console.log("Monsters Initialized, redy to play!");
}
listMonsters() {
    this.Monsters.forEach((monster) => {
        console.log(`Monster: ${monster.monsterName}`);
        console.log(`Cureent Life: ${monster.currentLife}`);
        console.log(`Minimum Life: ${monster.minimumLife}`);
        console.log(`Is Alive; ${monster.isAlive}`);
        console.log("...");
    });
}
createMonsters(monsterList =[]){
    this.monsters = monsterList.map((monster) => new Monster(monster));
}
async playGame() {
    console.log("Starting game...");
    let monstersAreAlive = true;
    do{
        console.log(`Sleeping for ${this.gameDelayInMilliseconds} milliseconde...`);
        await sleep(this.gameDelayInMilliseconds);
    this.monsters.forEach((monster) => {
        if (monster.isAlive) {
            monster.randomLifeDrain(this.minimumLifeDrain, this.maximumLifeDrain);
        }
    });

this.listMonsters();

monstersAreAlive = this.monsters.some((monster) => monster.isAlive);
if (!monstersAreAlive) {
    console.log("All monsters have died, game over !");
    }
} while (monstersAreAlive);
}
};
function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}
