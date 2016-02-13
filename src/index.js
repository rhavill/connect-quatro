if (module.hot) {
    module.hot.accept()
}

require("./style.css");

import Game from './Game'
let game = new Game();
