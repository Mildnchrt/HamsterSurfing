var StartGame = cc.LayerColor.extend({
    init: function() {
        this._super();
        
        this.createBG();
        
        this.addKeyboardHandlers();
        
        cc.audioEngine.playMusic( 'res/effects/startmusic.mp3', true );
    },
    
    createBG: function() {
        this.startPic = new startBG();
	    this.startPic.setPosition( new cc.Point(490, 292 ) );
	    this.addChild( this.startPic );
    },
    
    onKeyDown: function( keyCode, event ) {
        this.gameStatus = GameLayer.STATUS.STARTED;
	    if( this.gameStatus = GameLayer.STATUS.STARTED ){ 
            if ( keyCode == cc.KEY.space ) {
	           cc.director.runScene( new StartScene() );
	        }
        }
    },
    
    onKeyUp: function( keyCode, event ) {
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
    }
}); 
    
var Start = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new StartGame();
        layer.init();
        this.addChild( layer );
        
    }
});