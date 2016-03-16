// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .


function submitOnce(button){
  button.disabled = true;
  button.form.submit();
}

function hideEmptyRow(){
  var count = document.getElementsByClassName("association container").length;
  var lastRow = document.getElementsByClassName("association container")[count - 1];
  lastRow.style.display = 'none';
}

function addGradeThreshold(){
  var count = document.getElementsByClassName("association container").length;
  var lastRow = document.getElementsByClassName("association container")[count - 1];
  lastRow.style.display = 'block';
}

function deleteRow(button){
  button.parentElement.parentElement.style.display = 'none';
}
