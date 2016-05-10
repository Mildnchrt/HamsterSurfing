var heart =cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/images/heart.png');
        this.speed = 6;
    },
}); 
    