var counter=0;
function moveLeft(){
    var left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
    
}
function moveRight(){
    var left=parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<300){
        character.style.left = left + "px";
    }
   
}

document.addEventListener("keydown" ,X)

    function X(){
        if(event.key === "ArrowLeft"){moveLeft();}
        if(event.key === "ArrowRight"){moveRight();}
    }


document.getElementById("block").addEventListener("animationiteration" ,Y)

    function Y(){

        var random = Math.floor (Math.random() * 3);
        left = random * 100;
        block.style.left = left + "px" ;
        counter++;
    };

setInterval(Z,1)
     
    function Z(){
        var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    
        var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

        var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
          
           if(characterLeft == blockLeft && blockTop<498 && blockTop>300)
         {
           alert ("Game Over . Score => " + counter);
           document.write("Your score is => " + counter);
           block.style.animation = "none";
         }
    };
        
    
    

        

    


