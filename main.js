$( document ).ready(function() {

});

var time = 1500;
var healthbar =(`<div class="healthbar">'${shogun.Health}'</div>`);

$('#hitMessage').append(healthbar);

$('#hitMessage').addClass('hidden');

$('#mainAttack').on('click', function() {
  knight.attackMain(shogun);
  var popup = setTimeout(function(){
    $('#hitMessage').toggle();
  }, time);
  $hitMessage = $('#hitMessage');
  if ($hitMessage.css('display','block')){
    popup = null;

  }
})
$('#lightAttack').on('click', function() {
    knight.attackSecondary(shogun)
})
$('#dodge').on('click', function() {
    knight.dodge(shogun)
})
$('#Calvary').on('click', function(e) {
    e.preventDefault();
    // console.log('knight', knight);
    var randNum = Math.floor(Math.random() * 10);
    var randEnemy;

    if (randNum <= 3) {
        randEnemy = samurai;
    } else if (randNum >= 4 && randNum <= 6) {
        randEnemy = shogun;
    } else if (randNum >= 7) {
        randEnemy = monk;
    }

    if (shogun.Health > 0) {
        calvary.attackMain(randEnemy);
    } else {
        killEnemy(randEnemy);
    }
});


$('.insertCoin').on('click', function(event) {
    console.log("insert screen removed")
    event.preventDefault();
    var randomNum = Math.floor(Math.random() * 10)
    var randomCombatant;
    var randomEnemy;
    if (randomNum <= 3) {
        randomCombatant = knight;
        randomEnemy = shogun;
    } else if (randomNum >= 4 && randomNum <= 6) {
        randomCombatant = calvary;
        randomEnemy = assassin;
    } else if (randomNum >= 7) {
        randomCombatant = squire;
        randomEnemy = samurai;
    }

$('.insertCoin').on('click', function(event){
   console.log("insert screen removed")
   event.preventDefault();
   $('.insertCoin').addClass('hidden');
   $('.introScreen').addClass('hidden');
   $('.main-container').removeClass('hidden');
 });

    $('#Name').append(`${randomCombatant.Name}`)
    $('#Health').append(`${randomCombatant.Health}`)
    $('#Attack').append(`${randomCombatant.Damage}`)
    $('#Evade').append(`${randomCombatant.Evasion}`)
    console.log(randomCombatant);
    console.log(randomEnemy);
    $('#enName').append(`${randomEnemy.Name}`)
    $('#enHealth').append(`${randomEnemy.Health}`)
    $('#enAttack').append(`${randomEnemy.Damage}`)
    $('#enEvade').append(`${randomEnemy.Evasion}`)
    $('.insertCoin').addClass('hidden');
    $('.introScreen').addClass('hidden');
    $('.main-container').removeClass('hidden');
});
