function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  
  ctx.imageSmoothingEnabled = false;
  
  textbox = new Textbox();
  
  turn = 0;
  
  party = [
    new PartyMember(0, 144, "#2BF1F4", 0),
    new PartyMember(1, 212, "#FF00FF", 1),
    new PartyMember(2, 121, "#00FF00", 2),
  ];
  
  sprites = {
    hud: document.getElementById("hud"),
    hp_num: document.getElementById("hp_num"),
  };
  
  initInput();
  
  update();
}

function update() {
  manageInput();
  
  if (turn < 3){
    if (keypress.right) party[turn].menuoption++;
    if (keypress.left) party[turn].menuoption--;
    
    if (party[turn].menuoption > 4) party[turn].menuoption = 0;
    if (party[turn].menuoption < 0) party[turn].menuoption = 4;
    
    if (keypress.x && turn>0){
      turn--;
    }
    
    if (keypress.z){
      turn++;
    }
  }
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "black";
  ctx.fillRect(0, 326, 640, 480);
  
  ctx.fillStyle = "#332033";
  ctx.fillRect(0, 326, 640, 3);
  ctx.fillRect(0, 362, 640, 3);
  
  //ctx.drawImage(document.getElementById("demo"), 0, 0);
  
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(document.getElementById("dog"), -360, 150, -200, 60);
  ctx.restore();
  
  textbox.draw();
  party.forEach(member => member.draw());
  
  requestAnimationFrame(update);
}