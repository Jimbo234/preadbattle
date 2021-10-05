class Textbox {
  constructor(){
    this.content = ["* You feel your sins crawling down", "  your back."]
    this.progress = 0;
    this.speed = 0.50;
    this.mode = "text";
  }
  
  /**
   * Draws the contents of the textbox.
   * Increments the progress by the speed once it's done.
   * 
   * @return {object} this: Returns the textbox object.
   */
  draw(){ 
    if (this.mode == "text"){
      // Letter count is used to figure out how much to draw for the other lines.
      var letterCount = 0;
      
      ctx.font = "24pt Determination Mono, Courier New";
      
      for (let i = 0; i < this.content.length; i++){
        
        // Purple shadow for text.
        ctx.fillStyle = "#0F0F71";
        ctx.fillText(this.content[i].slice(0, this.progress - letterCount), 31, 402 + (i * 28));
        
        // White text.
        ctx.fillStyle = "white";
        ctx.fillText(this.content[i].slice(0, this.progress - letterCount), 30, 401 + (i * 28));
        
        letterCount += this.content[i].length;
        
        // If the progress doesn't even break the current letter count,
        // don't bother trying to draw the next line.
        if (this.progress < letterCount) break;
        
        // Skip past the first two characters in the line.
        if (this.progress - letterCount === 0) this.progress += 2;
      }
      
      // Progresses the text.
      this.progress += this.speed;
    }
    else if (this.mode == "inventory"){
      ctx.font = "24pt Determination Sans, Courier New";
      
      for (let i = 0; i<inventory.length && i<6; i++){
      
        let slot = i;
        if (selector >= 6){
          slot += 6;
        }
        
        let itemName = items[inventory[slot]].name;
        let x = 25 + i%2 * 232;
        let y = 401 + Math.floor(i/2) * 31;
        
        if (slot == selector){
           ctx.drawImage(sprites.hud, 211, 64, 18, 18, x-22, y-17, 18, 18);
        }
        
        // Purple shadow for text.
        ctx.fillStyle = "#0F0F71";
        ctx.fillText(itemName, x + 1, y + 1);
        
        // White text.
        ctx.fillStyle = "#FFFFFF";
        ctx.fillText(itemName, x, y);
      }
      
      // Grey text for description.
      ctx.fillStyle = "grey";
      
      let description = items[inventory[selector]].desc;
        
      for (let i = 0; i<description.length; i++){
      
        let x = 499;
        let y = 401 + 31 * i;
      
        ctx.fillText(description[i], x, y);
        
      }
    }
    
  }
}
