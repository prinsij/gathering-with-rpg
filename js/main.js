// jquery widget mapping
//$.widget.bridge('jqbutton', $.ui.button);
//$.widget.bridge('jqtooltip', $.ui.tooltip);

// global variables
var helpDialog;
var pro = getQueryVariable("p"); // problema
var cen = getQueryVariable("c"); // cenário
var sol = getQueryVariable("s"); // solucao
var aju = getQueryVariable("a"); // ajuda
var ant = getQueryVariable("v"); // antagonista
var Adventure;

// Inicializacao de todo o corpo da página separadamente por funcao
$(function () {
    initializeDropDownCultures();
    initializeAdventureGeneration();
    initializeViewModel();
    var aventura = new Adventure();
    ko.applyBindings(aventura);
});

function initializeAdventureGeneration() {
    if (pro && cen && sol && aju && ant) {
        generateAdventureLink(pro, cen, sol, aju, ant);
    } else {
        $(".shareAdventure").hide();
    }
}

function cardHasType(card, type) {
    return card.type_line.indexOf(type) > -1;
}

function randomCard(queryStr, callback) {
    // Allow unstable, heroes of the realm, and holiday cards, but no other silver border cards
    // We don't just explicitly disallow unglued/unhinged bc of promos and such
    // Unstable's flavor is generally less 4th-wally and while goofy can actually work
    var noFunny = '(set:unstable OR set:HTR OR set:HTR17 OR set:"Happy Holidays" OR -is:funny)';
    scryfallRateLimit(function () {
        $.ajax({
            // We need to wrap the query in quotes because the OR operator
            // binds less tightly than the implicit AND of space separated parameters
            url: 'https://api.scryfall.com/cards/random?q=' + encodeURIComponent(`(${noFunny}) (${queryStr})`),
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: callback,
        });
    });
}

function scryfallRateLimit(callback) {
    var now = new Date().getTime();
    if (now < scryfallRateLimit.newReqWindow) {
        window.setTimeout(callback, scryfallRateLimit.newReqWindow - now);
        scryfallRateLimit.newReqWindow += 200;
    } else {
        scryfallRateLimit.newReqWindow = now + 200;
        callback();
    }
}
scryfallRateLimit.newReqWindow = new Date().getTime();

function getCardImage(card) {
    return card.image_uris.large;
}

function initializeViewModel() {
    // viewmodel
    Adventure = function () {
        var self = this;

        self.problema = pro ? ko.observable(`https://api.scryfall.com/cards/${pro}?format=image`) : ko.observable();
        self.cenario = cen ? ko.observable(`https://api.scryfall.com/cards/${cen}?format=image`) : ko.observable();
        self.solucao = sol ? ko.observable(`https://api.scryfall.com/cards/${sol}?format=image`) : ko.observable();
        self.ajudante = aju ? ko.observable(`https://api.scryfall.com/cards/${aju}?format=image`) : ko.observable();
        self.antagonista = ant ? ko.observable(`https://api.scryfall.com/cards/${ant}?format=image`) : ko.observable();

        self.loadProblema = function () {
            self.problema("");
            randomCard('type:Creature OR type:Enchantment', function (maCard) {
                pro = maCard.id;
                self.problema(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadCenario = function () {
            self.cenario("");
            randomCard('type:Land -type:Basic', function (maCard) {
                cen = maCard.id;
                self.cenario(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadSolucao = function () {
            self.solucao("");
            randomCard('type:Sorcery OR type:Artifact', function (maCard) {
                sol = maCard.id;
                self.solucao(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadAjudante = function () {
            self.ajudante("");
            randomCard('type:Creature', function (maCard) {
                aju = maCard.id;
                self.ajudante(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadAntagonista = function () {
            self.antagonista("");
            randomCard('type:Creature', function (maCard) {
                ant = maCard.id;
                self.antagonista(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });

        };

        self.loadValues = function (data, event) {
            self.loadProblema();
            self.loadCenario();
            self.loadSolucao();
            self.loadAjudante();
            self.loadAntagonista();
        };

    }
}

function generateAdventureLink(pro, cen, sol, aju, ant) {
    var adventureLink = String.format("?p={0}&c={1}&s={2}&a={3}&v={4}", pro, cen, sol, aju, ant);

    $("#adventure")
        .attr("href", window.location.pathname + adventureLink);

    $("#adventure").removeClass('hidden');
}

function initializeDropDownCultures() {
    $('.dropdown-menu li a').on('click', function () {
        $.culture.loadCulture($(this).data("value"));
    });

    if (window.localStorage.getItem('culture')) {
        $.culture.loadCulture(window.localStorage.getItem('culture'));
    } else {
        $('.dropdown-menu li a:first').click();
    }

}