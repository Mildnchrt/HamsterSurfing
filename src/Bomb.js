var bomb =cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/bomb.png');
        this.speed = 10;
    },
    
    update: function( dt ) {
        this.setPositionX( this.getPositionX() - this.speed);
        if (this.getPositionX() < 0) {
            this.randomPosition();
        }
    },
    
    randomPosition: function() {
        this.speed += 1;
        var x = (1700);
        var y = (Math.random()*320) + 190;
        this.setPosition(new cc.Point(x,y));
    }
}); 
    