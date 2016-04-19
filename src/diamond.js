var diamond = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/diamond.png');
        this.speed = 3;

    },
    update: function( dt ) {
        this.setPositionX( this.getPositionX() - this.speed);
    },
    

    randomPosition: function() {
        //this.speed += 0.2;
       
        var x = (1800);
        var y = (Math.random()*345) + 210;
        
        this.setPosition(new cc.Point(x,y));
    },
    closeTo: function( obj ) {
	   var myPos = this.getPosition();
	   var oPos = obj.getPosition();
  	   return ( ( Math.abs( myPos.x - oPos.x ) <= 80 ) && ( Math.abs( myPos.y - oPos.y ) <= 180 ) );
    },

}); 
        


