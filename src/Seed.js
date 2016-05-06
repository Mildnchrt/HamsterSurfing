var seed = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/seed.png');
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
       
        var x = (3250);
        var y = (Math.random()*320) + 190;
        
        this.setPosition(new cc.Point(x,y));
    },
    closeTo: function( obj ) {
	   var myPos = this.getPosition();
	   var oPos = obj.getPosition();
  	   return ( ( Math.abs( myPos.x - oPos.x ) <= 60 ) && ( Math.abs( myPos.y - oPos.y ) <= 60 ) );
    },
}); 
    