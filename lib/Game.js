const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');
const Plater = require('./Player');

function Game() {
this.roundNumber = 0;
this.isPlaterTurn = false;
this.enemies = [];
this.currentEnemy;
this.player;
}

Game.prototype.initializeGame = function() {
this.enemies.push(new Enemy('goblin', 'sword'));
this.enemies.push(new Enemy('orc', 'baseball bat'));
this.enemies.push(new Enemy('skeletion', 'axe'));

this.currentEnemy = this.enemies[0];

inquirer
.prompt({
    type: 'text',
    name: 'name', 
    message: 'what is your name?'
})
// destructure name from the promp object
.then (({ name }) => {
    this.player = new Player(name);

    // test the object creation
    console.log(this.currentEnemy, this.player);
});

};

module.exports = Game;