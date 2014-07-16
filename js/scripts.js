var Tamagotchi = {
  initialize: function(name){
    this.name = name
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.activityLevel = 10;
  },
  name: "",
  foodLevel: 0,
  sleepLevel: 0,
  activityLevel: 0,

  timePasses: function(){
    this.foodLevel --;
    this.sleepLevel --;
    this.activityLevel --;
  },

  isAlive: function(){
    if (this.foodLevel >= 1 && this.sleepLevel >= 1 && this.activityLevel >= 1 )
      return true;
    else {
      if (this.foodLevel <= 0) {
        this.causeOfDeath = "died of starvation!";
      } else if (this.sleepLevel <= 0) {
        this.causeOfDeath = "died of lack of sleep!";
      } else if (this.activityLevel <= 0) {
        this.causeOfDeath = "died of lack of attention!";
      }
    }
  },
  causeOfDeath: ""
};



$(document).ready(function() {
  $("form#petCreator").submit(function(event){
     var newPet = Object.create(Tamagotchi);
     var petName = $("input#petName").val();
     newPet.initialize(petName);
     $("input#petName").val("");
     $("div#create-tom").hide();
     $("div#tom").show();
     $("button#feed").click(function(event){
      newPet.foodLevel = 10;
      $("#foodNum").text(newPet.foodLevel);
      event.preventDefault();
    });
     $("button#sleep").click(function(event){
      newPet.sleepLevel = 10;
      $("#sleepNum").text(newPet.sleepLevel);
      event.preventDefault();
    });
     $("button#play").click(function(event){
      newPet.activityLevel = 10;
      $("#activityNum").text(newPet.activityLevel);
      event.preventDefault();
    });
     var time = window.setInterval(function(){
      if (newPet.isAlive() === true){
     newPet.timePasses();
     $("#foodNum").text(newPet.foodLevel);
     $("#sleepNum").text(newPet.sleepLevel);
     $("#activityNum").text(newPet.activityLevel);
     $("#putName").text(petName);
      } else {
        window.clearInterval(time);
        $("#tom").hide();
        $("#alert").text(petName + newPet.causeOfDeath);

      }
    }, 1000);
     $("#foodNum").text(newPet.foodLevel);
     $("#sleepNum").text(newPet.sleepLevel);
     $("#activityNum").text(newPet.activityLevel);
     $("#putName").text(petName);



     event.preventDefault();
    });
});
