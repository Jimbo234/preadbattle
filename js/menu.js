function manageMenu(){
  if (turn < 3){
    if (submenu < 1){
      if (keypress.right) party[turn].menuoption++;
      if (keypress.left) party[turn].menuoption--;
    }
    
    if (party[turn].menuoption > 4) party[turn].menuoption = 0;
    if (party[turn].menuoption < 0) party[turn].menuoption = 4;
    
    if (keypress.x){
      if (turn>0 && submenu == 0) {
        turn--;
      }
      else if (submenu > 0) {
        submenu--;
      }
    }
    
    if (keypress.z){
      if (party[turn].menuoption == 2 && submenu == 0){
        submenu = 1;
        
        keypress.z = false; //So it doesn't auto confirm the next menu.
        
      }
      
      else if (submenu == 1) {
        submenu = 0;
        turn++;
        
        keypress.z = false;
      }
      else {
        turn++;
      }
      
    }
  }
  
  if (submenu === 0){
    textbox.mode = "text";
  }
  else {
    textbox.progress = 3490823048023802384;
  }
  
  if (submenu == 1 && party[turn].menuoption == 2){
    textbox.mode = "inventory";
    
    if (keypress.left || keypress.right){
      selector++;
      
      if (selector % 2 === 0) selector -= 2;
    }

    if (keypress.up){
      selector -= 2;
    }
    
    if (keypress.down){
      selector += 2;
    }
    
    if (selector < 0) selector += 2;
    if (selector > inventory.length - 1) selector -= 2;
  }
}