'use strict';

var button = document.querySelector('button');
var experience = document.querySelector('textarea');
var scale = document.querySelector('#grade');
var email = document.querySelector('#email');
var loading = document.querySelector('.hide');
var list = document.querySelector('ul');
var rawData;
var answer = [];

button.addEventListener('click', function () {
  loading.classList.remove('hide');

  var httpRequest = new XMLHttpRequest();
  httpRequest.open('POST', 'http://localhost:3000/exam', true);
  httpRequest.setRequestHeader('Content-Type', 'application/json');
  httpRequest.send(JSON.stringify({
    feedback: experience.value,
    scale: scale.value,
    email: email.value
  }));

  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
         rawData = JSON.parse(httpRequest.responseText);
         console.log(rawData);
         if (rawData.message) {
            answer = [rawData.status, rawData.message];
         } else {
            answer = [rawData.status, rawData.projects];
         }
          list.innerHTML += '<li>' + answer + '</li>';
          loading.classList.add('hide');
        } else {
          alert('There was a problem with the request.', httpRequest.readyState);
        }
      }
   };
});
