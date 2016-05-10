var count = 2;
var score = 0;
var timerBloodEffect = 0;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.gameStatus = GameLayer.STATUS.FRONT;
        
        this.createBG();
        
        this.createScoreLabel();
        
        this.diamondArr = [];
        this.initailDiamond();
       
        this.createBomb();
        
        this.createSeed();
        
        this.createBlood();
        
        this.createWave();
        
        this.createPlayer();
        
        this.createSea();
        
        this.initailHeart();
        
	    cc.audioEngine.playMusic( 'res/effects/startmusic2.mp3', true );
        
        this.scheduleUpdate();
        
        this.addKeyboardHandlers();
        
        return true;
    },
    createBG: function() {
        this.BG = new BG();
	    this.BG.setPosition( new cc.Point(490, 292 ) );
	    this.addChild( this.BG );
    },
    
    createScoreLabel: function() {
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
	    this.scoreLabel.setPosition( new cc.Point( 120, 612) );
	    this.addChild( this.scoreLabel );
    },
    
    initailDiamond: function() {
        for( var i = 0; i < 7; i++ ) {
            this.diamondArr[i] = new diamond();
            this.diamondArr[i].speed = 4.2;
            this.diamondArr[i].setPosition( new cc.Point( 1000 + (i * 500) , (Math.random() * 345) + 210 ) );
            this.addChild(this.diamondArr[i]);
            this.diamondArr[i].scheduleUpdate();
        }
    },
    
    createBomb: function() {
        this.bomb1 = new bomb();
        this.bomb1.setPosition( new cc.Point( 2020, 520 ) );
        this.addChild( this.bomb1 );
        this.bomb1.scheduleUpdate();
    },
    createSeed: function() {
        this.seed = new seed();
        this.seed.setPosition( new cc.Point( 2400, 460 ) );
        this.addChild( this.seed );
        this.seed.scheduleUpdate();
    },
    
    createBlood: function() {
        this.blood = new blood();
        this.blood.setPosition( new cc.Point(3900, 399) );
        this.addChild( this.blood );
        this.blood.scheduleUpdate();
    },
    
    createPlayer: function() {
        this.bear = new bear();
	    this.bear.setPosition( new cc.Point( 490, 220 ) );
	    this.addChild( this.bear );
	    this.bear.scheduleUpdate();
    },
    
    createWave: function() {
        this.wave = new wave();
	    this.wave.setPosition( new cc.Point( 420, 80 ) );
	    this.addChild( this.wave );
	    this.wave.scheduleUpdate();
    },
    
    createSea: function() {
        this.sea = new sea();
	    this.sea.setPosition( new cc.Point( 490, 250 ) );
	    this.addChild( this.sea );
    },
    
    initailHeart: function() {
        this.heartArr = [];
        for ( var i = 0 ; i < 3; i++ ) {
            this.heartArr[i] = new heart();
            this.heartArr[i].setPosition( new cc.Point( (838.2 + (40.09 * i)), 612 ) );
            this.addChild(this.heartArr[i]);
        }
    },
    
    onKeyDown: function( keyCode, event ) {
        this.gameStatus = GameLayer.STATUS.STARTED;
	    if( this.gameStatus = GameLayer.STATUS.STARTED){ 
            if ( keyCode == cc.KEY.up ) {
	           this.bear.switchDirection(2);
               this.wave.switchDirection(2);
	        }
            else if (keyCode == cc.KEY.down){
                this.bear.switchDirection(4);
                this.wave.switchDirection(4);
            }
            else if (keyCode == cc.KEY.left){
                this.bear.switchDirection(1);
                this.wave.switchDirection(1);
            }
            else if (keyCode == cc.KEY.right){
                this.bear.switchDirection(3);
                this.wave.switchDirection(3);
            }
        }
    },
    
    onKeyUp: function( keyCode, event ) {
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
//            for ( var i = 0; i < 3; i++ ) {
//                this.diamondArr[i].speed = 0;
//            }
            this.gameOver();
        }else {
            this.bear.speed = 14;
            this.wave.speed = 14;
            this.checkCloseTo();
        }
        
        if ( timerBloodEffect > 0) {
            this.bear.speed = 27;
            this.wave.speed = 27;
        }
    },
    
    checkCloseTo: function() {
        this.hitDiamond();
        this.hitBomb();
        this.hitBlood();
        this.hitSeed();
    },
    
    hitDiamond: function() {
        for (var i = 0; i < 7; i++) {
            if ( this.bear.closeTo( this.diamondArr[i] ) ) {
                timerBloodEffect--;
                score++;
                this.diamondArr[i].randomPosition();
                this.scoreLabel.setString( score ) ;
            }
            else if ( this.diamondArr[i].getPositionX() < 0 ) {
                this.diamondArr[i].randomPosition();
            }
        }
    },
    
    hitBomb: function() {
        if ( this.bear.closeTo( this.bomb1 ) || this.bomb1.getPositionX() < 0 ) {
            this.bomb1.randomPosition(); 
            if ( count >= 0 ) {
                this.DecreaseHeart();
            }
        }
    },
    
    hitSeed: function() {
        if ( this.bear.closeTo( this.seed ) || this.seed.getPositionX < 0 ) {
            if ( count < 2 ) {
                this.IncreaseHeart();
            }
            this.seed.randomPosition();
        }
    },
    
    hitBlood: function() {
        if ( this.bear.closeTo( this.blood ) || this.seed.getPositionX < 0 ) {
            this.blood.randomPosition();
            timerBloodEffect = 3;
        }
    },
    
    IncreaseHeart: function() {
        count++;
        this.heartArr[count].setOpacity(255);
    },
    
    DecreaseHeart: function() {
        this.heartArr[count].setOpacity(0);
        count--;
    },

    gameOver: function() {
        cc.director.runScene( new EndGame() );
    },

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

