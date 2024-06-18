



// FORM CONTROL
// All textual <input>, <textarea>, and <select> elements with the class .form-control have a width of 100%
<input class='form-control' type="text" placeholder="cat photo URL" required>



// ADDING FONT AWESOME
//<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
// i now becomes an ICON element for ICONS. Also can use SPAN
<button class="btn btn-block btn-primary"><i class='fas fa-thumbs-up'></i>Like</button>
<button class="btn btn-block btn-danger"><i class="fas fa-trash"></i>Delete</button>
<button class="btn btn-block btn-info"><i class="fas fa-info-circle"></i>Info</button>
<button class='btn btn-primary'><i class='fa fa-paper-plane'></i>Submit</button>


//https://www.w3schools.com/bootstrap5/bootstrap_grid_basic.php
// GRID SYSTEM. Bootstrap uses 12 grid columnms system
    <div class='row'>
      <div class='col-xs-4'> // this div takes up 4 columns
        <button class="btn btn-block btn-primary">Like</button>
      </div>
      <div class='col-xs-4'>
        <button class="btn btn-block btn-info">Info</button>
      </div>
      <div class='col-xs-4'>
        <button class="btn btn-block btn-danger">Delete</button>
      </div>
    </div>

// https://www.w3schools.com/bootstrap5/bootstrap_buttons.php
// BUTTON DANGER COLOR
<button class="btn btn-block btn-danger">Delete</button>

// BUTTON INFO
<button class="btn btn-block btn-info">Info</button>

// BUTTONS PRIMARY IS main app default button COLOR
<button class="btn btn-block btn-primary">Like</button>

// BUTTONS BLOCK LEVEL, width 100%, no longer inline element
<button class="btn btn-default btn-block">Like</button>

// BUTTONS CLASS
<button class="btn btn-default">Like</button>

// TEXT-DANGER, text danger COLOR
<p>Things cats <span class='text-danger'>love:</span></p>

// TEXT CENTER, TEXT PRIMARY is the primary text color
<h2 class="text-primary text-center">

// RESPONSIVE IMGS
<img src="https:/running-cats.jpg" class="img-responsive" alt="Three kittens">

// FLUID CONTAINERS
<div class="container-fluid">
  ...

<div>
