// PAGE MODIFIER

$("body").addClass("animated fadeOut");
$('body').addClass('animated hinge');

// .odd, .even
// ODD EVEN SELECTORS, remember that JQ is 0 indexed so 1st element is even

  $(".target:odd").addClass("animated shake");

// .target:nth-child(n)
// SELECT SPECIFIC ELEMENT OF CLASS, in below case, 3rd element of target class

  $('.target:nth-child(3)').addClass("animated bounce");

// .children(), DESCENDANTS
// https://www.w3schools.com/jquery/jquery_traversing_descendants.asp
// get all the targer's children

  $('#right-well').children().css('color', 'orange');

// .parent(), ANCESTORS
// https://www.w3schools.com/jquery/jquery_traversing_ancestors.asp
// get the targer's parent

  $('#target1').parent().css('background-color', 'red')

// .clone()
// COPY ELEMENT TO SOMEWHERE ELSE

  // from #left-well,
  $("#target2").clone().appendTo("#right-well");

// .appendTO()
// APPENDTO MOVE ELEMENTS FROM ONE DIV TO ANOTHER

  // from #right-well,
  $("#target4").appendTo("#left-well");

// .remove()
// REMOVE THE ELEMENT

   $("#target4").remove();

// .text(), like .innerHTML but ONLY affecting text, not HTML
// https://www.w3schools.com/jquery/html_text.asp
// .html(), like .innerHTML
// CHANGING INNERHTML

$("h3").html("<em>jQuery Playground</em>");
$('#target4').html('<em>#target4</em>')

// .prop()
// https://www.w3schools.com/jquery/html_prop.asp
// CHANGING NON CSS PROPERTIES

$('button').prop('disabled', true);

// .css()
// https://www.w3schools.com/jquery/jquery_css.asp
// CSS CHANGING

<script>
  $(document).ready(function() {
    $('#target1').css('color', 'blue');
  });
</script>


// .addCLASS, .removeCLASS
// $() SELECTORS, like document.querySelector(), type, class n button
// ADDING CLASS TO ELEMENT, BOUNCE CLASS TO ALL BUTTONS

<script>
  $(document).ready(function() {
    $('button').addClass('animated bounce');
    $('.well').addClass('animated shake');
    $('#text-primary').addClass('animated shake');
    $("button").removeClass("btn-default");
  });
</script>
.... html ...


// INITIALISING AT TOP OF PAGE
// ALL JQUERY STARTS WITH $ or BLING
// https://www.w3schools.com/jquery/

<script>
  $(document).ready(function() {
  });
</script>
