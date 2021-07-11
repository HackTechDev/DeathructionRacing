import 'phaser';

export default class Boot extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/logo/logo_deathructionracing.png');
  }

  create () {
    this.scene.start('Preloader');
  }
};
