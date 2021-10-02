function initInput(){
  input = {
    up: false,
    down: false,
    left: false,
    right: false,
    z: false,
    x: false,
    c: false,
  };
  
  lastinput = {
    up: false,
    down: false,
    left: false,
    right: false,
    z: false,
    x: false,
    c: false,
  };
  
  keypress = {
    up: false,
    down: false,
    left: false,
    right: false,
    z: false,
    x: false,
    c: false,
  };
  
  binds = {
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    z: 90,
    x: 88,
    c: 67,
  };
  
  document.addEventListener("keydown", function(e){
    if (e.keyCode == binds.up) input.up = true;
    if (e.keyCode == binds.down) input.down = true;
    if (e.keyCode == binds.left) input.left = true;
    if (e.keyCode == binds.right) input.right = true;
    
    if (e.keyCode == binds.z) input.z = true;
    if (e.keyCode == binds.x) input.x = true;
    if (e.keyCode == binds.c) input.c = true;
  });
  
  document.addEventListener("keyup", function(e){
    if (e.keyCode == binds.up) input.up = false;
    if (e.keyCode == binds.down) input.down = false;
    if (e.keyCode == binds.left) input.left = false;
    if (e.keyCode == binds.right) input.right = false;
    
    if (e.keyCode == binds.z) input.z = false;
    if (e.keyCode == binds.x) input.x = false;
    if (e.keyCode == binds.c) input.c = false;
  });
}

function manageInput(){
  Object.keys(keypress).forEach(v => keypress[v] = false)
  
  if (input.up && !lastinput.up) keypress.up = true;
  if (input.down && !lastinput.down) keypress.down = true;
  if (input.left && !lastinput.left) keypress.left = true;
  if (input.right && !lastinput.right) keypress.right = true;
  
  if (input.z && !lastinput.z) keypress.z = true;
  if (input.x && !lastinput.x) keypress.x = true;
  if (input.c && !lastinput.c) keypress.c = true;
  
  lastinput = Object.assign({}, input);
}