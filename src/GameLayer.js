var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.BG = new BG();
	    this.BG.setPosition( new cc.Point(490, 300 ) );
	    this.addChild( this.BG );
        
        this.bear = new bear();
	    this.bear.setPosition( new cc.Point( 490, 300 ) );
	    this.addChild( this.bear );
	    this.bear.scheduleUpdate();
        
        this.sea = new sea();
	    this.sea.setPosition( new cc.Point( 490, 300 ) );
	    this.addChild( this.sea );
        
        this.diamond = new diamond();
	    this.addChild( this.diamond );
        this.diamond.setPosition( new cc.Point( 500, 500 ) );
        
	    cc.audioEngine.playMusic( 'res/effects/musicBG.mp3', true );
        
        this.scheduleUpdate();
        
        this.addKeyboardHandlers();
        
        
        return true;

    },
    onKeyDown: function( keyCode, event ) {
        
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
        this.bear.speed = 4;
//	   if ( this.gold.closeTo( this.ship ) ) {
//	       this.gold.randomPosition();
//           this.bear.speed = 0.9;
//           this.scoreLabel.setString(parseInt(this.scoreLabel.string)+1) ;
//	   }
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
