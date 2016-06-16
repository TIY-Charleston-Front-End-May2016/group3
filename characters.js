class Combatant {
    constructor(opts) {
        this.Name = opts.Name || 'Default';
        this.Health = opts.Health || 100;
        this.Damage = opts.Damage || 0;
        this.Accuracy = opts.Accuracy || 0;
        this.Evasion = opts.Evasion || 0;
        this.Attack = opts.Attack || 0;
        this.mod = opts.mod || 2;
    }
    attackMain(enemy) {
        var swing = (this.Accuracy + (Math.floor(Math.random() * 10)))
        var dodge = (enemy.Evasion + (Math.floor(Math.random() * 10)))

        console.log(swing, dodge)
        if (swing >= dodge) {
          enemy.Health -= this.Damage - Math.floor(Math.random() * this.Damage);

        } else if (enemy.Health <= 0 ) {
            enemy.kill()
        }
    }
    attackSecondary(enemy) {
        console.log(enemy.Health -= Math.floor(this.Damage * Math.random()))
        if (enemy.Health <= 0) {
            console.log("UUCK")
        }
    }
    dodge(enemy) {
        var swing = (this.Accuracy + (Math.floor(Math.random() * 10)))
        var block = (enemy.Evasion + (Math.floor(Math.random() * 10)))

        console.log(swing, block)
        if (swing >= block) {
            console.log(enemy.Health -= this.Damage - Math.floor(Math.random() * this.Damage));
            // console.log(this.Health -= enemy.Damage)
        } else {
            console.log("Miss", enemy.Health);
        }
    }
    kill() {
      $('.ninja').slideUp(2000);
      
      }
    }


class Europe extends Combatant {
    constructor(opts) {
        super(opts)
        this.Block = opts.Block || 0;
    }
}



class Japan extends Combatant {
    constructor(opts) {
        super(opts)
        this.Evade = opts.Evade || 0;
    }
}



var samurai = new Japan({
    Name: "Samurai",
    Damage: 12,
    Health: 100,
    Evasion: 8,
    Accuracy: 2,
});
var assassin = new Japan({
    Name: "Assasin",
    Damage: 15,
    Health: 100,
    Evasion: 6,
    Accuracy: 4,
});
var shogun = new Japan({
    Name: "Shogun",
    Damage: 25,
    Health: 100,
    Evasion: 4,
    Accuracy: 3,
});
var squire = new Europe({
    Name: "Squire",
    Damage: 12,
    Health: 100,
    Block: 0,
    Evasion: 7,
    Accuracy: 2,
});
var calvary = new Europe({
    Name: "Calvary",
    Damage: 15,
    Health: 100,
    Evasion: 4,
    Accuracy: 5,
});
var knight = new Europe({
    Name: "Knight",
    Damage: 25,
    Health: 100,
    Evasion: 3,
    Accuracy: 4,
})
