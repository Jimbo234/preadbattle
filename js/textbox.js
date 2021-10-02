class Textbox {
  constructor(){
    this.content = ["* You feel your sins crawling down", "  your back."]
    this.progress = 0;
    this.speed = 0.50;
  }
  
  /**
   * Draws the contents of the textbox.
   * Increments the progress by the speed once it's done.
   * 
   * @return {object} this: Returns the textbox object.
   */
  draw(){ 
    
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
}