$(document).ready(function() {

function Car(options) {

  this.name = options.name;
  this.row = options.row;
  this.unit = 1;
  this.start = 1;
  this.position = 1;

  this.goRight = function () {
    var chance = Math.floor(Math.random() * 3) + 1;
    console.log(chance)
    this.position = this.position + chance;
  // var sibs = $('#' + this.name).closest('div[class^="r"]').siblings();
  // var childs = sibs;
    var racer = $('#' + this.name).closest('div[class^="r"]').html();
    $('#' + this.name).closest('.car').remove();

    $('.r' + this.row + 'd' + this.position).append(racer).siblings();

      console.log("Vrooooom!");
      if (this.position >= this.row + "d10") {
        return "You won the race!";
        console.log("YOU");
      } else {
          return "Keep going!";
          console.log("Else test")
      }

  }
}
var Tom = new Car({name: "Tom", row: "1"});
var Bob = new Car({name: "Bob", row: "2"});

function moveIt() {
  Tom.goRight();
  Bob.goRight();
}
  $('.randomizer').click(moveIt);
});
