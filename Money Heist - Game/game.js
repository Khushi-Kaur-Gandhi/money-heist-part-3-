class Game{
    constructor(){}

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value",function(data){
        gameState = data.val();
        })
    }
    
    update(state){
        database.ref("/").update({
            gameState : state
        })
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            
            welcome = new Welcome();
            welcome.display();
        
        }
    }

    play(){
        welcome.hide();
        background(img1)
    }
}