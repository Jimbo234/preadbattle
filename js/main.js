function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  
  ctx.imageSmoothingEnabled = false;
  
  textbox = new Textbox();
  
  turn = 0;
  
  submenu = 0;
  selector = 0;
  
  inventory = [0, 2, 3, 4, 0, 6, 8, 0, 9, 2, 7, 10];
  
  party = [
    new PartyMember(0, 193, "#2BF1F4", 0),
    new PartyMember(1, 296, "#FF00FF", 1),
    new PartyMember(2, 167, "#00FF00", 2),
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
  manageMenu();
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "black";
  ctx.fillRect(0, 326, 640, 480);
  
  ctx.fillStyle = "#332033";
  ctx.fillRect(0, 326, 640, 3);
  ctx.fillRect(0, 362, 640, 3);
  
  
  ctx.save();
  ctx.scale(-1, 1);
  ctx.drawImage(document.getElementById("dog"), -360, 150, -200, 60);
  ctx.restore();
  
  textbox.draw();
  party.forEach(member => member.draw());
  
  //ctx.globalAlpha = 0.5;
  //ctx.drawImage(document.getElementById("demo"), -5, 0, 645, 480);
  //ctx.globalAlpha = 1;
  
  requestAnimationFrame(update)
  
  
}
