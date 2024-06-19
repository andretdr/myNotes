// COMBINING STR W VAR AND MATH OPERATIONS
// for $var from start TO end (end exclusive), for $var from start THROUGH end (end inclusive)
// FOR LOOP

// col-#{$i} combines the string w var, 1-12
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}

// 1-5, calculations are also possible
@for $j from 1 to 6 {
  .text-#{$j} { font-size: 15px * $j }
}



// if then else
// ALL SASS OCCURS IN STYLE TAG 

@mixin text-effect($val) {
  @if $val == danger {
    color: red;
  }
  @else if $val == alert {
    color: yellow;
  }
  @else if $val == success {
    color: green;
  }
  @else {
    color: black;
  }
}


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
// ALL SASS OCCURS IN STYLE TAG 

<style type='text/scss'>

$main-fonts: Arial, sans-serif;
$headings-color: green;

h1 {
  font-family: $main-fonts;
  color: $headings-color;
}

</style>
