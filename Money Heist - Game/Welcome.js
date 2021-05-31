class Welcome {
    constructor() {
      this.robberButton = createButton("Robber");
      this.policeButton = createButton("Police");
    }
  
    hideElements() {
      this.robberButton.hide();
      this.policeButton.hide();
    }
  
    handleOnpress() {
      this.robberButton.mousePressed(() => {
        this.choose = createButton("Choose Your Name: ")
        this.choose.position(800,100)
        this.choose.mousePressed(()=>{
          this.player1 = createButton("Player1")
          this.player1.position(800,150)
          this.player2 = createButton("Player2")
          this.player2.position(800,200)
          this.player3 = createButton("Player3")
          this.player3.position(800,250)
          this.player4 = createButton("Player4")
          this.player4.position(800,300)

          this.player1.mousePressed(()=>{
            this.robberButton.hide();
            this.policeButton.hide();
            this.choose.hide()
            this.player1.hide()
            this.player2.hide()
            this.player3.hide()
            this.player4.hide()
            playerCount+=1;
            player.index = playerCount;
            //player.update();
            player.updateCount(playerCount);
            // this.greeting = createElement('h2');
            // this.greeting.html("Hello! Welcome to Money Heist");
            // this.greeting.position(130,100);
            greeting.visible = true
          })

          this.player2.mousePressed(()=>{
            this.robberButton.hide();
            this.policeButton.hide();
            this.choose.hide()
            this.player1.hide()
            this.player2.hide()
            this.player3.hide()
            this.player4.hide()
            playerCount+=1;
            player.index = playerCount;
            //player.update();
            player.updateCount(playerCount);
            // this.greeting = createElement('h2');
            // this.greeting.html("Hello! Welcome to Money Heist");
            // this.greeting.position(130,100);
            greeting.visible = true
          })

          this.player3.mousePressed(()=>{
            this.robberButton.hide();
            this.policeButton.hide();
            this.choose.hide()
            this.player1.hide()
            this.player2.hide()
            this.player3.hide()
            this.player4.hide()
            playerCount+=1;
            player.index = playerCount;
            //player.update();
            player.updateCount(playerCount);
            // this.greeting = createElement('h2');
            // this.greeting.html("Hello! Welcome to Money Heist");
            // this.greeting.position(130,100);
            greeting.visible = true
          })

          this.player4.mousePressed(()=>{
            this.robberButton.hide();
            this.policeButton.hide();
            this.choose.hide()
            this.player1.hide()
            this.player2.hide()
            this.player3.hide()
            this.player4.hide()
            playerCount+=1;
            player.index = playerCount;
            //player.update();
            player.updateCount(playerCount);
            // this.greeting = createElement('h2');
            // this.greeting.html("Hello! Welcome to Money Heist");
            // this.greeting.position(130,100);
            greeting.visible = true
          })
        })
      });
  
      this.policeButton.mousePressed(() => {
        
      });
    }
  
    display() {
      this.handleOnpress();
      // this.robberButton.height="150px";
      // this.robberButton.width="150px";
      this.robberButton.position(800,50);
      this.policeButton.position(150, 50);
    }
  }