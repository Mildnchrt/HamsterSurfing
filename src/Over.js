var Over = cc.Sprite.extend({
    ctor: function() {
       this._super();
       var go = new cc.Animation.create();
	   go.addSpriteFrameWithFile( 'res/images/GO1.jpg' );
       go.addSpriteFrameWithFile( 'res/images/GO2.jpg' );
       go.addSpriteFrameWithFile( 'res/images/GO3.jpg' );
       go.addSpriteFrameWithFile( 'res/images/GO4.jpg' );
        
	   go.setDelayPerUnit( 0.3 );
	   var movingAction = cc.RepeatForever.create( cc.Animate.create( go ) );
	   this.runAction( movingAction );
    }
}); 
    