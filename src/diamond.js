var diamond = cc.Sprite.extend({
    ctor: function() {
//        this._super();
//        this.initWithFile( 'res/images/diamond.png' );
        
        this._super();
        this.diamond = cc.Sprite.create( 'res/images/diamond.png' );
//        this.diamond.setAnchorPoint( new cc.Point( 500, 500 ) );
        this.diamond.setPosition( new cc.Point( 900, 500 ) );
        this.addChild( this.diamond );
    },
    update: function( dt ) {
        this.setPositionX( this.getPositionX() - 5 );
    }
}); 