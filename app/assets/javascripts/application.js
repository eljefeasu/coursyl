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
//= require datetimepicker
//= require_tree .


function submitOnce(){
  $(event.target).prop("disabled", true);
  $(event.target).closest("form").submit();
}

function bindSubmitClick(){
  $("input[type=submit]").on("click", submitOnce);
}

$(bindSubmitClick);

function hideEmptyRow(){
  $(".container").last().css("display", "none");
}

$(hideEmptyRow);

function addGradeThreshold(){
  $(".btn.btn-success").on("click", function(){
    $(".container").last().css("display", "block");
  })
}

$(addGradeThreshold);

function deleteRow(){
  $(event.target).closest(".association.container").css("display", "none");
  $(event.target).siblings().last().prop("checked", true);
}

function bindDeleteClick(){
  $(".btn.btn-danger").on("click", deleteRow);
}

$(bindDeleteClick);

function dateTimePicker(){
  $('.datetimepicker').datetimepicker();
}

$(dateTimePicker);
