


// MIXIN
// SOMETHING LIKE FUNCTIONS?

// we want to simplify this
div {
  -webkit-box-shadow: 0px 0px 4px #fff;
  -moz-box-shadow: 0px 0px 4px #fff;
  -ms-box-shadow: 0px 0px 4px #fff;
  box-shadow: 0px 0px 4px #fff;
}

// mixin
@mixin box-shadow($x, $y, $blur, $c){ 
  -webkit-box-shadow: $x $y $blur $c;
  -moz-box-shadow: $x $y $blur $c;
  -ms-box-shadow: $x $y $blur $c;
  box-shadow: $x $y $blur $c;
}

// to use, @include
div {
  @include box-shadow(0px, 0px, 4px, #fff);
}



// NESTING
article {
  height: 200px;

  p {
    color: white;
  }

  ul {
    color: blue;
  }
}


// SASS USES VARIABLES
<style type='text/scss'>

$main-fonts: Arial, sans-serif;
$headings-color: green;

h1 {
  font-family: $main-fonts;
  color: $headings-color;
}

</style>
