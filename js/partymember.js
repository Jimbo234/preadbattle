class PartyMember{
  constructor(character, hp, color, slot){
    
    // 0 KRIS
    // 1 SUSIE
    // 2 RALSEI
    this.character = character;
    
    this.maxhp = hp;
    this.hp = hp;
    
    this.color= color;
    
    this.slot = slot;
    
    this.x = slot * 212;
    this.y = 329;
    
    this.anim = 0;
    
    this.menuoption = 0;
    this.easing = 0;
  }
  
  /**
   * Draws the player box in the HUD.
   * Includes the health bar, the health count, and the HUD icons.
   * 
   * @return {object} this: Returns the PartyMember object.
   */
  draw(){
    let x = this.x;
    let y = Math.floor(this.y - 33 * this.easing);
    
    this.anim++;
    
    let anim = this.anim % 40;
    let anim2 = (this.anim+20) % 40;
    
    if (turn == this.slot){
      ctx.fillStyle = this.color;
      ctx.fillRect(x - 2, y - 2, 216, 37);
      
      ctx.fillRect(x - 1, this.y, 6, 33);
      ctx.fillRect(x + 208, this.y, 6, 33);
      
      ctx.globalAlpha = (1 - anim/40);
      ctx.fillRect(Math.floor(x - 2 - (1.001 ^ -anim)), this.y, 4, 33);
      ctx.fillRect(Math.floor(x + 208 + (1.001 ^ -anim)), this.y, 4, 33);
      ctx.globalAlpha = 1;
      
      ctx.globalAlpha = (1 - anim2/40);
      ctx.fillRect(Math.floor(x - 2 - (1.0001 ^ -anim2)), this.y, 4, 33);
      ctx.fillRect(Math.floor(x + 208 + (1.0001 ^ -anim2)), this.y, 4, 33);
      ctx.globalAlpha = 1;
    }
    
    this.ease();
    
    if (this.easing){
      this.drawOptions()
    }
    ctx.drawImage(sprites.hud, 0, 33 * this.character, 212, 33, 1 + x, y, 211, 33);
    
    // Red HP bar behind the colored bar to show lost hp.
    ctx.fillStyle = "#800000";
    ctx.fillRect(128 + x, y + 18, 76, 9);
    
    ctx.fillStyle = this.color;
    ctx.fillRect(128 + x, y + 18, Math.floor(76 * this.hp/this.maxhp), 9);
    
    // Displays HP
    
    let hp_string = this.hp.toString();
    let maxhp_string = this.maxhp.toString();
    
    for (var i = 0; i < hp_string.length; i++) {
      ctx.drawImage(sprites.hp_num, 0 + hp_string.charAt(hp_string.length - i - 1) * 4, 0, 4, 8, x + 152 - i*8, y + 5, 8, 16);
    }
    
    for (var i = 0; i < maxhp_string.length; i++) {
      ctx.drawImage(sprites.hp_num, 0 + maxhp_string.charAt(maxhp_string.length - i - 1) * 4, 0, 4, 8, x + 197 - i*8, y + 5, 8, 16);
    }
    
    return this;
  }
  
  ease(){
    if (turn == this.slot) {
      
      this.easing += 0.1 + this.easing*0.01;
      
      if (this.easing > 1) this.easing = 1;
      
    }
    
    else {
      
      this.easing -= 0.1 + this.easing*0.3;
      
      if (this.easing < 0) this.easing = 0;
    }
  }
  
  drawOptions(){
    
    let x = this.x;
    
    // Draws the battle options.
    for (let i = 0; i < 5; i++){
      ctx.fillStyle = "black";
      
      // Makes sure only Kris gets the ACT button.
      let sprite = i;
      if (i == 1 && this.character > 0){
        sprite = 5;
      }
      
      let y_offset = 32;
      if (this.menuoption == i) y_offset = 0;
      
      ctx.fillRect(x + 17 + (i * 35), this.y + 6, 27, 22);
      ctx.drawImage(sprites.hud, 212 + (sprite*31), y_offset, 31, 32, x + 15 + (i * 35), this.y + 4, 31, 32);
      
    }
  }
}