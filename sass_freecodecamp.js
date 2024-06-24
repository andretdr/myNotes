// EXTENDS add more rules to existing class rule. CSS can do this w overides or just combining classes

  .panel{
    background-color: red;
    height: 70px;
    border: 2px solid green;
  }
  
  .big-panel{
    @extend .panel;
    width: 150px;
    font-size: 2em;
  }


// PARTIALS are seperate smaller SASS files, starting w _ and ending with .scss
// _variables.scss 
// _mixins.scss
// the MAIN scss file may still be called main.scss and have the following for importing

  @import 'mixins'
  @import 'variables'


// WHILE loop

  $x: 1;
  @while $x < 13 {
    .col-#{$x} { width: 100%/12 * $x;}
    $x: $x + 1;
  }


// EACH, for each loop. For a list, or for a map(MAP IS A DICT, KEY VALUE PAIR)

  // FOR EACH OF LIST
  // creates 3 new rules
  @each $color in blue, red, green {
    .#{$color}-text {color: $color;}
  }
  
  // MAP or DICT
  // creates 3 new rules
  $colors: (color1: blue, color2: red, color3: green);
  @each $key, $color in $colors {
    .#{$color}-text {color: $color;}
  }



// COMBINING STR W VAR AND MATH OPERATIONS
// for $var from start TO end (end exclusive), for $var from start THROUGH end (end inclusive)
// FOR LOOP

  // col-#{$i} combines the string w var, 1-12
  // churns out 12 .col-n {} style rules
  @for $i from 1 through 12 {
    .col-#{$i} { width: 100%/12 * $i; }
  }
  
  // 1-5, calculations are also possible
  // churns out 5 .col-n {} style rules
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
// FOR PROGRAMATICALLY CREATING STYLES AND RULES
    
<style type='text/scss'>

$main-fonts: Arial, sans-serif;
$headings-color: green;

h1 {
  font-family: $main-fonts;
  color: $headings-color;
}

</style>
