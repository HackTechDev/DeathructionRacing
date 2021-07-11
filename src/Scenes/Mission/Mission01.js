import 'phaser';
import Button from '../../Buttons/Button';

var keyM;

export default class Mission01 extends Phaser.Scene {
  constructor () {
    super('Mission01');
  }

  init(data){
    this.previousScene = data.previousScene;

    console.log("Mission / previousScene: " + this.previousScene);
    
  }

  create () {

    

    this.text = this.add.text(300, 100, 'Mission 1', { fontSize: 40 });
    this.mission1Text = this.add.text(250, 190, '- Faire 3 tours de piste', { fontSize: 24 });

    this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'En avant !', 'Track01');

  }

  update(time, delta) {
 
  }

};
