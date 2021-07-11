import 'phaser';


var hud;
var trackText;



export default class Track01 extends Phaser.Scene {
  constructor () {
    super('Track01');
  }

    init(data){
          this.px = data.px;
          this.py = data.py;
    }


    preload() {

        this.load.image("blue_car", "assets/images/soil.png");

       this.load.image("blue_car", "assets/images/blue_car.png");
       this.load.image("blue_car_2", "assets/images/blue_car_2.png");
       this.load.image("red_car", "assets/images/red_car.png");
       this.load.image("red_car_2", "assets/images/red_car_2.png");
        
    }

    create() {

        /* HUD */
        hud = this.add.rectangle( 10, 10, 200, 90, 0xffffff, 1)
                            .setOrigin(0, 0)
                            .setScrollFactor(0)
                            .setDepth(29);

        trackText = this.add
            .text(16, 16, "Piste : " , {
              font: "18px monospace",
              fill: "#000000",
              padding: { x: 20, y: 10 },
              backgroundColor: "#ffffff"
            })
            .setScrollFactor(0)
            .setDepth(30);


    }


    update(time, delta) {

    }
}
