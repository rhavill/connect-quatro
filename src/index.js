if (module.hot) {
    module.hot.accept()
}

require("./style.css");

import Game from './Game'
const game = new Game()
game.run()
