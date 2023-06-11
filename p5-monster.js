/* 
Cit 281 RJ Hendrix P5
*/
class Monster {
    constructor({ monsterName = "Unknown", minimumLife = 0, currentLife = 100}) {
        this.monsterName = monsterName;
        this.minimumLife = minimumLife;
        this.currentLife = currentLife;
        this.isAlive = this.currentLife >= this.minimumLife;
        }  
        updateLife(lifeChangeAmount) {
            this.currentLife = math.max(0, this.currentLife + lifeChangeAmount);
            this.isAlive = this.currentLife >= this.minimumLife;
        }
    randomLifeDrain(minimumLifeDrain, maximumLifeDrain){
        const lifeChangeAmount = getRandomInteger(minimumLifeDrain, maximumLifeDrain + 1);
        this.updateLife (-lifeChangeAmount);
        console.log(`${this.monsterName} lost ${lifeChangeAmount} life.`);
    }
}
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
moduele.exports = Monster;