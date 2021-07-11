import 'phaser';

import Config from './Config/Config';

import Boot from './Scenes/Boot';
import Preloader from './Scenes/Preloader';
import Menu from './Scenes/Menu';
import Options from './Scenes/Options';
import Credits from './Scenes/Credits';
import Help from './Scenes/Help';
import Music from './Music/Music';
import Mission01 from './Scenes/Mission/Mission01';

import Track01 from './Scenes/Track/Track01';

class Game extends Phaser.Game {
    constructor () {
        super(Config);
        const music = new Music();
        this.globals = { music, bgMusic: null };
        this.scene.add('Boot', Boot);
        this.scene.add('Preloader', Preloader);
        this.scene.add('Menu', Menu);
        this.scene.add('Options', Options);
        this.scene.add('Credits', Credits);
        this.scene.add('Help', Help);
        this.scene.add('Mission01', Mission01);
        this.scene.add('Track01', Track01);

        this.scene.start('Boot');
    }
}

window.game = new Game();
