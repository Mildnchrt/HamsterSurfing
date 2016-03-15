var sea = cc.Sprite.extend({
    ctor: function() {
       this._super();
       var water = new cc.Animation.create();
	   water.addSpriteFrameWithFile( 'res/images/water1.png' );
	   water.addSpriteFrameWithFile( 'res/images/water2.png' );
	   water.setDelayPerUnit( 0.2 );
	   var movingAction = cc.RepeatForever.create( cc.Animate.create( water ) );
	   this.runAction( movingAction );
    }
});