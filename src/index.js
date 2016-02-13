if (module.hot) {
    module.hot.accept()
}

require("./style.css");
document.write(require("./game.js"));