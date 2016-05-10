var Gameover = cc.LayerColor.extend({
    init: function() {
        this._super();
        
        this.createBG();
        
        this.createScoreLabel();
        
        this.createReplayButton();
        
        cc.audioEngine.playMusic( 'res/effects/laugh.mp3', true );
    },
    createBG: function() {
        this.frame = new Over();
        this.frame.setPosition( new cc.Point(490, 292 ) );
        this.addChild( this.frame );
    },
    createScoreLabel: function() {
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 48 );
        this.scoreLabel.color = "black";
        this.scoreLabel.setString( score );
        this.scoreLabel.setPosition( new cc.Point( 550, 70) );
	    this.addChild( this.scoreLabel );
    },
    
    createReplayButton: function() {
        this.button = new cc.MenuItemImage(
            'res/images/Replay.png',
            'res/images/Replay.png',
            function() {
                this.reset();
                cc.director.runScene( new StartScene() );
        }, this);
        this.buttonPic = new cc.Menu ( this.button );
        this.buttonPic.setPosition( new cc.Point ( 780, 70 ) );
        this.addChild( this.buttonPic );
    },
    
    reset: function() {
        count = 2;
        score = 0;
        keepBlood = 0;
    },
    
    EndScene: function() {
        this.endScene = new EndScene();
        this.endScene.setPosition( new cc.Point( 490, 292 ) );
        this.addChild( this.endScene );
    }
}); 
    
var EndGame = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Gameover();
        layer.init();
        this.addChild( layer );
        
    }
});