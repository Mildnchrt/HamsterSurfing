var Gameover = cc.LayerColor.extend({
    init: function() {
        this._super();
        this.frame = new Over();
        this.frame.setPosition( new cc.Point(490, 292 ) );
        this.addChild( this.frame );
        
        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.set
        this.scoreLabel.setString( GameLayer.getScore ) ;
        this.scoreLabel.setPosition( new cc.Point( 120, 612) );
	    this.addChild( this.scoreLabel );
        
        cc.audioEngine.playMusic( 'res/effects/bad_day.mp3', true );
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