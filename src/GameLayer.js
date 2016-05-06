var count = 2;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        
        this.gameStatus = GameLayer.STATUS.FRONT;
        this.BG = new BG();
	    this.BG.setPosition( new cc.Point(490, 292 ) );
	    this.addChild( this.BG );
        
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
	    this.scoreLabel.setPosition( new cc.Point( 120, 612) );
	    this.addChild( this.scoreLabel );
        
        this.diamondArr = [];
        this.initailDiamond();
       
        this.bomb1 = new bomb();
        this.bomb1.setPosition( new cc.Point( 2020, 520 ) );
        this.addChild( this.bomb1 );
        this.bomb1.scheduleUpdate();
        
        this.seed = new seed();
        this.seed.setPosition( new cc.Point( 2400, 460 ) );
        this.addChild( this.seed );
        this.seed.scheduleUpdate();
        
        this.wave = new wave();
	    this.wave.setPosition( new cc.Point( 420, 80 ) );
	    this.addChild( this.wave );
	    this.wave.scheduleUpdate();
        
        this.bear = new bear();
	    this.bear.setPosition( new cc.Point( 490, 220 ) );
	    this.addChild( this.bear );
	    this.bear.scheduleUpdate();
        
        this.sea = new sea();
	    this.sea.setPosition( new cc.Point( 490, 250 ) );
	    this.addChild( this.sea );
        
        this.initailHeart();
        
	    cc.audioEngine.playMusic( 'res/effects/musicBG.mp3', true );
        
        this.scheduleUpdate();
        
        this.addKeyboardHandlers();
        
        
        return true;

    },
    initailDiamond: function() {
        for( var i = 0; i < 7; i++) {
            this.diamondArr[i] = new diamond();
            this.diamondArr[i].speed = 4.2;
            this.diamondArr[i].setPosition(new cc.Point( 1000 + (i * 325) , (Math.random() * 345) + 210 ));
            this.addChild(this.diamondArr[i]);
            this.diamondArr[i].scheduleUpdate();
        }
    },
    initailHeart: function() {
        this.heartArr = [];
        for ( var i = 0 ; i < 3; i++) {
            this.heartArr[i] = new heart();
            this.heartArr[i].setPosition(new cc.Point((838.2 + (40.09 * i)), 612));
            this.addChild(this.heartArr[i]);
        }
    },
    
    onKeyDown: function( keyCode, event ) {
        this.gameStatus = GameLayer.STATUS.STARTED;
	    if( this.gameStatus = GameLayer.STATUS.STARTED){ 
            if ( keyCode == cc.KEY.up ) {
	           this.bear.switchDirection(2);
               this.bear.update();
               this.wave.switchDirection(2);
	        }
            else if (keyCode == cc.KEY.down){
                this.bear.switchDirection(4);
                this.bear.update();
                this.wave.switchDirection(4);
            }
            else if (keyCode == cc.KEY.left){
                this.bear.switchDirection(1);
                this.bear.update();
                this.wave.switchDirection(1);
            }
            else if (keyCode == cc.KEY.right){
                this.bear.switchDirection(3);
                this.bear.update();
                this.wave.switchDirection(3);
            }
        }
    },
    
    onKeyUp: function( keyCode, event ) {
       this.bear.speed = 0;
       this.wave.speed = 0;
	   console.log( 'Up: ' + keyCode.toString() );
    },
    
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    },
    
    update: function() {
        if ( count < 0 ) {
            this.bear.speed = 0;
            this.wave.speed = 0;
            for (var i = 0; i < 3; i++) {
                this.diamondArr[i].speed = 0;
            }
            this.bomb1.speed = 0;
            this.seed.speed = 0;
            this.gameOver();
        }
        else {
            this.bear.speed = 10;
            this.wave.speed = 10;
            this.checkCloseTo();
        }
    },
    
    checkCloseTo: function() {
        for (var i = 0; i < 7; i++) {
            if ( this.diamondArr[i].closeTo( this.bear ) ) {
                this.diamondArr[i].randomPosition();
                this.scoreLabel.setString( parseInt(this.scoreLabel.string)+1 ) ;
            }
            else if ( this.diamondArr[i].getPositionX() < 0 ) {
                this.diamondArr[i].randomPosition();
            }
        }
        
        if ( this.bomb1.closeTo( this.bear ) || this.bomb1.getPositionX() < 0 ) {
            this.bomb1.randomPosition(); 
            if ( count >= 0 ) {
                this.heartArr[count].setPosition( new cc.Point(2000, 2000) );
                count--;
            }
        }
        
        if ( this.seed.closeTo( this.bear ) || this.seed.getPositionX < 0 ) {
            this.seed.randomPosition();
        }
    },  
    gameOver: function() {
        cc.director.runScene( new EndGame() );
    },
    getScore: function() {
        var score = parseInt(this.score.string);
        
        return this.score;
    }

});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
        
    }
});

GameLayer.STATUS = {
     FRONT: 1,
     STARTED: 2
}

