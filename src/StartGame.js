var StartGame = cc.LayerColor.extend({
    init: function() {
        this._super();
        this.update();
        cc.audioEngine.playMusic( 'res/effects/startmusic.mp3', true );
    },
    update: function() {
        this.button = new cc.MenuItemImage(
            'res/images/startpic.jpg',
            'res/images/startpic.jpg',
            function() {
                cc.director.runScene(new StartScene());
        }, this);
        this.buttonPic = new cc.Menu (this.button);
        this.buttonPic.setPosition( new cc.Point (490, 292) );
        this.addChild(this.buttonPic);
    }
}); 
    
var Start = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new StartGame();
        layer.init();
        this.addChild( layer );
        
    }
});