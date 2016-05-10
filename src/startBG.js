var startBG = cc.Sprite.extend({
    ctor: function() {
       this._super();
       var bg = new cc.Animation.create();
	   bg.addSpriteFrameWithFile( 'res/images/s1.jpg' );
       bg.addSpriteFrameWithFile( 'res/images/s2.jpg' );
       bg.addSpriteFrameWithFile( 'res/images/s3.jpg' );
        
	   bg.setDelayPerUnit( 0.2 );
	   var movingAction = cc.RepeatForever.create( cc.Animate.create( bg ) );
	   this.runAction( movingAction );
    }
 
});