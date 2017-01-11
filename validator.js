'use strict';

var niceWords = ["amazing", "awesome", "blithesome", "excellent", "fabulous",
               "fantastic", "favorable", "fortuitous", "great", "incredible",
               "ineffable", "mirthful", "outstanding", "perfect", "propitious",
               "remarkable", "smart", "spectacular", "splendid", "stellar",
               "stupendous", "super", "ultimate", "unbelievable", "wondrous"];


function validator (feedback, scale, email){
   var scale = parseInt(scale);
   if(validateScale(scale) && validateEmail(email) && validateFeedback(feedback)){
      return true
   } else {
      return false
   }
}

function validateScale (scale) {
   if(scale >= 10){
      return true
   } else {
      return false
   }
}

function validateEmail (email) {
   var emailArray = email.split('');
   var result = false;
   emailArray.forEach(function(string){
      if(string === '@'){
         result = true;
      }
   });
   return result
}

function validateFeedback (feedback){
   var feedback = feedback.toLowerCase();
   var feedbackArray = feedback.split(' ');
   var wordArray;
   var newWord;
   var niceWordCounter = 0;
   var words = feedbackArray.map(function(element){
      newWord = '';
      wordArray = element.split('');
      wordArray.forEach(function(string){
         if(string.search(/[^a-zA-Z]+/) === -1){
            newWord += string;
         }
      })
      return newWord;
   });

   words.forEach(function(e){
      niceWords.forEach(function(nice){
         if(e == nice){
            niceWordCounter += 1;
         }
      })
   })
   if(niceWordCounter >= 3){
      return true
   } else {
      return false
   }
}

module.exports = validator;
