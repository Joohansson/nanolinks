/* Source file for index.md */
$(document).ready(function() {
  /*$('#dropdown-container').show();*/
  $('#dropbtn').click(function(event) {
    if($('#dropdown-container').is(":visible")) {
    $('#dropdown-container').hide();
    }
    else {
    $('#dropdown-container').show();
    }
  });

  $(document).on('touchstart click', function(event) { 
    if(!$(event.target).closest('#dropbtn').length && !$(event.target).closest('#dropdown-container').length) {
    if($('#dropdown-container').is(":visible")) {
      $('#dropdown-container').hide();
    }
    }        
  });

  //Quick help
  $('#help-select').on('change',function(){
    var val = $(this).val();
    var helpDivs = ['#help1','#help2','#help3','#help4','#help5','#help6','#help7','#help8'];

    //Hide all other divs
    $.each( helpDivs, function( index, value ){
    $(value).hide();
    });

    $(helpDivs[parseInt(val)-1]).show();
  });

  //Click analytics
  $('a').on('click auxclick', function(e) {
    //Only hitCallback when tracking links in same tab, to prevent speed button to use href (it uses new tab)
    var params = {};
    if (!$(this).hasClass("btn-external")) {
      params.hitCallback = function () {
        document.location = url;
      }
    }
    
    if (!ga.q) {
      var url = $(this).attr("href");
      console.log("Link click")
      ga("send", "event", "outbound", "click", url, params);
      e.preventDefault();
    }
  });

  /* Collapsible Controller */
  $('.collapse').click(function(){
    $('.collapse-content').slideToggle('slow');
  });
});
