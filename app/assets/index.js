(() => {

audios = {
    burst: new Audio('assets/audio/burst.mp3'),
    coin: new Audio('assets/audio/coin.mp3')
}

class Score {
    constructor(selector){
        if (selector){
            this.element = document.querySelector(selector); 
        }
        else {
            this.element = null;
        }
        this.set(0);
    }
    set(number){
        console.log(this.number)
        this.number = number;
        if(!this.element) return;
        this.element.innerText = this.number;
    }
    up(number){
        if(typeof number == 'undefined') number = 1;
        this.set(this.number + number);
    }
    down(number) {
        if(typeof number == 'undefined') number = 1;
        this.set(this.number - number);
    }
}

class Square {
    constructor(gameboard, has_bomb){
        this.gameboard = gameboard
        this.element = document.createElement('div');
        this.element.classList.add('square');
        this.has_bomb = has_bomb;
        this.opened = false;
        this.element.addEventListener('click', () => this.open(this))
    }

    open(){
        if(this.opened || this.gameboard.stopped) return;

        if (this.has_bomb){
            let bomb = document.createElement('i');
            bomb.className = 'fa-solid fa-burst bomb';
            this.element.appendChild(bomb);
            audios.burst.currentTime = 0
            audios.burst.play();
            this.gameboard.total_score.down((this.gameboard.score.number * 2) || 1);
            this.gameboard.score.set(0);
            this.gameboard.stop();
        }
        else {
            let gem = document.createElement('i');
            gem.className = 'fa-solid fa-gem gem';
            this.element.appendChild(gem);
            audios.coin.currentTime = 0
            audios.coin.play();
            this.gameboard.total_score.up();
            this.gameboard.score.up();
        }

        this.opened = true;
        this.element.classList.add('opened');
    }
}

class Row {
    constructor(){
        this.element = document.createElement('div');
        this.element.classList.add('row');
        this.squares = [];
    }

    add(square){
        this.squares.push(square);
        this.element.appendChild(square.element);
    }
}

class GameBoard {
    constructor(qrows, qcolumns){
        this.element = document.querySelector('.board');
        this.stopped = false;
        this.qrows = qrows;
        this.qcolumns = qcolumns;
        this.total_score = new Score('#total-score');
        this.score = new Score('#score');
        this.reload();
        this.stop();
    }

    reload(){
        this.resume();
        this.element.innerHTML = '';
        this.rows = [];
        for(let _r=1; _r<=this.qrows; _r++){
            let row = new Row;
            for(let _c=1; _c<=this.qcolumns; _c++){
                row.add(new Square(this, Math.random() <= 0.2));
            }
            this.rows.push(row);
            this.element.appendChild(row.element);
        }
    }

    stop(){
        this.stopped = true;
        document.body.classList.toggle('stopped', true);
        this.score.set(0);
    }

    resume(){
        this.stopped = false;
        document.body.classList.toggle('stopped', false);
    }
}

const gameboard = new GameBoard(10, 10);
document.querySelector('#play').addEventListener('click', () => gameboard.reload(gameboard));
document.querySelector('#stop').addEventListener('click', () => gameboard.stop(gameboard));

})();