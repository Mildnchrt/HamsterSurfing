var bomb =cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/bomb.png');
        this.speed = 6.9;

    },
    update: function( dt ) {
        this.setPositionX( this.getPositionX() - this.speed);
        if (this.getPositionX() < 0) {
            this.randomPosition();
        }
    },
    randomPosition: function() {
        this.speed += 2.5;
       
        var x = (1700);
        var y = (Math.random()*320) + 190;
        
        this.setPosition(new cc.Point(x,y));
    },
    closeTo: function( obj ) {
	   var myPos = this.getPosition();
	   var oPos = obj.getPosition();
  	   return ( ( Math.abs( myPos.x - oPos.x ) <= 64 ) && ( Math.abs( myPos.y - oPos.y ) <= 64 ) );
    },
}); 
    