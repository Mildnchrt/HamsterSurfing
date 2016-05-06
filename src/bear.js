var bear = cc.Sprite.extend({
ctor: function() {
    this._super();
    this.initWithFile( 'res/images/p1.png');
        
//       this._super();
//       var bear = new cc.Animation.create();
//	   bear.initWithFile( 'res/images/p1.png' );
//       bear.addSpriteFrameWithFile( 'res/images/player2.png' );
//       bear.addSpriteFrameWithFile( 'res/images/player3.png' );
//	   bear.setDelayPerUnit( 0.2 );
//	   var movingAction = cc.RepeatForever.create( cc.Animate.create( bear ) );
//	   this.runAction( movingAction );
    },
    
    update: function(  ) {
    var pos = this.getPosition();   
       switch (this.direction) {
            case bear.DIR.UP :
               this.checkDirectionUp(pos);
               break;
            case bear.DIR.DOWN :
               this.checkDirectionDown(pos);
               break;
            case bear.DIR.RIGHT :
               this.checkDirectionRight(pos);
               break;  
            case bear.DIR.LEFT :
               this.checkDirectionLeft(pos);
               break;
       }
    },
    
    checkDirectionUp: function(pos) {
        if ( pos.y < 490 ) {
            this.setPosition( new cc.Point( pos.x, pos.y + this.speed ) );
        } 
    },
    
    checkDirectionDown: function(pos) {
        if ( pos.y > 220 ) {
            this.setPosition( new cc.Point( pos.x, pos.y - this.speed ) );
        } 
    },
    
    checkDirectionRight: function(pos) {
        if ( pos.x < 800 ) {
            this.setPosition( new cc.Point( pos.x + this.speed, pos.y) );
        } 
    },
    
    checkDirectionLeft: function(pos) {
        if ( pos.x > 110 ) {
            this.setPosition( new cc.Point( pos.x - this.speed, pos.y ) );
        }
    },
    
    switchDirection: function(num) {
       switch (num) {
           case 1 :
               this.direction = bear.DIR.LEFT;
               break;
           case 2 :
               this.direction = bear.DIR.UP;
               break;
           case 3 :
               this.direction = bear.DIR.RIGHT;
               break;
           case 4 :
               this.direction = bear.DIR.DOWN;
               break;
       }
    }
});

bear.DIR = {
    UP: 2,
    RIGHT: 3,
    DOWN: 4,
    LEFT: 1
    
};