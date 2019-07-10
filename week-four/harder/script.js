(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for (var index in names) {
    var firstLetter = names[index].toLowerCase().charAt(0)
    if(firstLetter === "j"){
      byeSpeaker.speak(names[index]);
    }
    else{
      helloSpeaker.speak(names[index]);
    }
  }
})();
