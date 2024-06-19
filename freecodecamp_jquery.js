// .html(), like .innerHTML
// CHANGING INNERHTML

$("h3").html("<em>jQuery Playground</em>");

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

<script>
  $(document).ready(function() {
  });
</script>
