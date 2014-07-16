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
    if (this.foodLevel > 0)
      return true;
    else
      return false;
  }
};



$(document).ready(function() {
  $("form#petCreator").submit(function(event){
     var newPet = Object.create(Tamagotchi);
     var petName = $("input#petName").val();
     newPet.initialize(petName);
     $("input#petName").val("");
     $("div#create-tom").hide();
     $("div#tom").show();
     $("#foodNum").text(newPet.foodLevel);
     $("#sleepNum").text(newPet.sleepLevel);
     $("#activityNum").text(newPet.activityLevel);
     $("#putName").text(petName);


     event.preventDefault();
    });
});
