function story(){
    if(mousePressedOver(next)){
        next.visible=false
        sprite.destroy()
        greeting.destroy()
        storyPage.visible= true
        storyPage.scale = 0.8
        cont.visible = true
    }
}

function rules(){
    if(storyPage.visible===true&&mousePressedOver(cont)){
        storyPage.destroy()
        cont.destroy()
        rulesPage.visible = true
        starting.visible = true
    }
}

function levelstart(){
    if(starting.visible === true&&mousePressedOver(starting)){
        starting.destroy()
        rulesPage.visible = false
       starting.visible=false 
     bg2.visible=true  
    }
}
function level1(){
    if(bg2.visible===true){
        
        plr.visible=true
        plr.velocityY=5
        if(plr.y>=500&&bg2.visible===true){
            plr.velocityY=0
            choose.visible=true
            next.visible=true
        next.depth=plr.depth+1
        }
        if (next.visible===true&&mousePressedOver(next)){
            choose.destroy()
            bg2.destroy()
            bg3.visible=true
            plr.depth=bg3.depth+1
            next.visible=false
            plr.velocityY=0
        }
    
        if(bg3.visible===true&&keyCode===LEFT_ARROW){
            plr.x = plr.x-3
        }
         else if(bg3.visible===true&&keyCode===RIGHT_ARROW){
             plr.x = plr.x+3
         }
        else if(bg3.visible===true&&keyCode===UP_ARROW){
             plr.y = plr.y-3
         }
        else if(bg3.visible===true&&keyCode===DOWN_ARROW){
             plr.y = plr.y+3
         }
    }
}

//make weapons sprite
//they will be visible = false
