var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.gameStatus = GameLayer.STATUS.FRONT;
        this.BG = new BG();
	    this.BG.setPosition( new cc.Point(490, 300 ) );
	    this.addChild( this.BG );
        
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
	    this.scoreLabel.setPosition( new cc.Point( 130, 590) );
	    this.addChild( this.scoreLabel );
        

        this.diamond1 = new diamond();
        this.diamond1.setPosition( new cc.Point( 850, 400 ) );
        this.addChild( this.diamond1 );
        this.diamond1.scheduleUpdate();
        
        this.diamond2 = new diamond();
        this.diamond2.setPosition( new cc.Point( 1220, 250 ) );
        this.addChild( this.diamond2 );
        this.diamond2.scheduleUpdate();
        
        this.diamond3 = new diamond();
        this.diamond3.setPosition( new cc.Point( 1870, 500 ) );
        this.addChild( this.diamond3 );
        this.diamond3.scheduleUpdate();
        
        this.diamond4 = new diamond();
        this.diamond4.setPosition( new cc.Point( 2300, 580 ) );
        this.addChild( this.diamond4 );
        this.diamond4.scheduleUpdate();
        
        this.bear = new bear();
	    this.bear.setPosition( new cc.Point( 490, 298 ) );
	    this.addChild( this.bear );
	    this.bear.scheduleUpdate();
        
        
        this.sea = new sea();
	    this.sea.setPosition( new cc.Point( 490, 300 ) );
	    this.addChild( this.sea );
        
        
	    cc.audioEngine.playMusic( 'res/effects/musicBG.mp3', true );
        
        this.scheduleUpdate();
        
        this.addKeyboardHandlers();
        
        
        return true;

    },
    onKeyDown: function( keyCode, event ) {
        this.gameStatus = GameLayer.STATUS.STARTED;
	    if( this.gameStatus = GameLayer.STATUS.STARTED){ 
            if ( keyCode == cc.KEY.up ) {
	           this.bear.switchDirection(2);
               this.bear.update();
	        }
            else if (keyCode == cc.KEY.down){
                this.bear.switchDirection(4);
                this.bear.update();
            }
            else if (keyCode == cc.KEY.left){
                this.bear.switchDirection(1);
                this.bear.update();
            }
            else if (keyCode == cc.KEY.right){
                this.bear.switchDirection(3);
                this.bear.update();
            }
        }
    },
    onKeyUp: function( keyCode, event ) {
       this.bear.speed = 0;
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
        this.bear.speed = 5;
        if ( this.diamond1.closeTo(this.bear)) {
            this.diamond1.randomPosition();
            this.scoreLabel.setString(parseInt(this.scoreLabel.string)+1) ;
        }
        if ( this.diamond2.closeTo(this.bear)) {
            this.diamond2.randomPosition();
            this.scoreLabel.setString(parseInt(this.scoreLabel.string)+1) ;
        }
        if ( this.diamond3.closeTo(this.bear)) {
            this.diamond3.randomPosition();
            this.scoreLabel.setString(parseInt(this.scoreLabel.string)+1) ;
        }
        if ( this.diamond4.closeTo(this.bear)) {
            this.diamond4.randomPosition();
            this.scoreLabel.setString(parseInt(this.scoreLabel.string)+1) ;
        }

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

