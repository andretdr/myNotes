


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
