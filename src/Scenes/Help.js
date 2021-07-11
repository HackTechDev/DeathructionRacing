import 'phaser';
import Button from '../Buttons/Button';

export default class Help extends Phaser.Scene {
  constructor () {
    super('Help');
  }

  init(data){
    this.previousScene = data.previousScene;

    console.log("previousScene: " + this.previousScene);
}

  create () {

    this.text = this.add.text(300, 100, 'Aide', { fontSize: 30 });
    this.mission1Text = this.add.text(150, 150, '- Déplacer la voiture : [Fléches]', { fontSize: 12 });

    if(this.previousScene === undefined) {
      this.menuButton = new Button(this, 400, 500, 'blueButton1', 'blueButton2', 'Menu', 'Menu');
    }

  }


  update(time, delta) {
 
  }

};
