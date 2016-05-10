var diamond = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/diamond.png');
        this.speed = 6;
    },
    
    update: function( dt ) {
        this.setPositionX( this.getPositionX() - this.speed);
        if ( this.getPositionX < 0) {
            this.randomPosition();
        }
    },
    
    randomPosition: function() {
        this.speed += 0.8;
        var x = ( 1800 + ( this.speed * 250 ) );
        var y = ( Math.random() * 345.123 ) + 210;
        this.setPosition(new cc.Point(x,y));
    }

}); 
        


