jewel.screens["about"] = (function() {
    var firstRun = true;

    function setup() {
        var $ = jewel.dom.$,
            backButton = $("#about button.back")[0];
        jewel.dom.bind(backButton, "click", function() {
            jewel.showScreen("main-menu");
        });
    }

    function run() {
        if (firstRun) {
            setup();
            firstRun = false;
        }
    }

    return {
        run : run
    };
})();
