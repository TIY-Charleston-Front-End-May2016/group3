$('#mainAttack').on('click',function(){
  knight.attackMain(enemy,);
  $('#hitMessage').slideDown(2000);
});
$('#lightAttack').on('click',function(){
  knight.attackSecondary(shogun)
})
$('#dodge').on('click',function(){
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

$('.insertCoin').on('click', function(event){
   console.log("insert screen removed")
   event.preventDefault();
   $('.insertCoin').addClass('hidden');
   $('.introScreen').addClass('hidden');
   $('.main-container').removeClass('hidden');
   $('#hitMessage').toggleClass('hidden')
 });
