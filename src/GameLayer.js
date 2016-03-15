var GameLayer = cc.LayerColor.extend({
    init: function() {
        this.BG = new BG();
	    this.BG.setPosition( new cc.Point(490, 300 ) );
	    this.addChild( this.BG );
        
        this.bear = new bear();
	    this.bear.setPosition( new cc.Point( 490, 300 ) );
	    this.addChild( this.bear );
        
        this.sea = new sea();
	    this.sea.setPosition( new cc.Point( 490, 300 ) );
	    this.addChild( this.sea );
        
	    cc.audioEngine.playMusic( 'res/effects/musicBG.mp3', true );
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