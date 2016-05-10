var wave = cc.Sprite.extend({
ctor: function() {
    this._super();
    this.initWithFile( 'res/images/wave.png');
    },
    
    update: function(  ) {
        var pos = this.getPosition();   
        switch (this.direction) {
            case wave.DIR.UP :
               this.checkDirectionUp(pos);
               break;
            case wave.DIR.DOWN :
               this.checkDirectionDown(pos);
               break;
            case wave.DIR.RIGHT :
               this.checkDirectionRight(pos);
               break;  
            case wave.DIR.LEFT :
               this.checkDirectionLeft(pos);
               break;
       }
    },

    checkDirectionUp: function(pos) {
        if ( pos.y < 348 ) {
            this.setPosition( new cc.Point( pos.x, pos.y + this.speed ) );
        } 
    },
    
    checkDirectionDown: function(pos) {
        if ( pos.y > 80 ) {
            this.setPosition( new cc.Point( pos.x, pos.y - this.speed ) );
        } 
    },
    
    checkDirectionRight: function(pos) {
        if ( pos.x < 730 ) {
            this.setPosition( new cc.Point( pos.x + this.speed, pos.y) );
        } 
    },
    
    checkDirectionLeft: function(pos) {
        if ( pos.x > 38 ) {
            this.setPosition( new cc.Point( pos.x - this.speed, pos.y ) );
        }
    },
    
    switchDirection: function(num) {
       switch (num) {
           case 1 :
               this.direction = wave.DIR.LEFT;
               break;
           case 2 :
               this.direction = wave.DIR.UP;
               break;
           case 3 :
               this.direction = wave.DIR.RIGHT;
               break;
           case 4 :
               this.direction = wave.DIR.DOWN;
               break;
       }
    }
});

wave.DIR = {
    UP: 2,
    RIGHT: 3,
    DOWN: 4,
    LEFT: 1
    
};