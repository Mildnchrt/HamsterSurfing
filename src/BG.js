var BG = cc.Sprite.extend({
    ctor: function() {
       this._super();
       var bg = new cc.Animation.create();
	   bg.addSpriteFrameWithFile( 'res/images/G1.jpg' );
       bg.addSpriteFrameWithFile( 'res/images/G5.jpg' );
       bg.addSpriteFrameWithFile( 'res/images/G4.jpg' );
       bg.addSpriteFrameWithFile( 'res/images/G3.jpg' );
       bg.addSpriteFrameWithFile( 'res/images/G4.jpg' );
       bg.addSpriteFrameWithFile( 'res/images/G5.jpg' );
        
	   bg.setDelayPerUnit( 0.2 );
	   var movingAction = cc.RepeatForever.create( cc.Animate.create( bg ) );
	   this.runAction( movingAction );
    }
 
});