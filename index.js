function shout(string) {
    return string.toUpperCase();
}
"Hello!".toUpperCase(); // 'HELLO!'
function whisper(string){
    return string.toLowerCase();
}
"HELLO".toLowerCase()
function logShout(string) {
    console.log(string.toUpperCase())
  }
  
  function logWhisper(string) {
    console.log(string.toLowerCase())
  }
  
  /*function sayHiToGrandma(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!"
    }
  
    if (string.toUpperCase() === string) {
      return "YES INDEED!"
    }
  
    if (string === "I love you, Grandma.") {
      return "I love you, too."
    }
  
    return "Are you eating enough?"
  }*/
  function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
      return "I can't hear you!"
    }
  
    if (string.toUpperCase() === string) {
      return "YES INDEED!"
    }
  
    if (string === "Let's have dinner together!") {
      return  "I would love to!"
    }
  
    return "Are you eating enough?"
  }