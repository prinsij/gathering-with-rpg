// jquery widget mapping
//$.widget.bridge('jqbutton', $.ui.button);
//$.widget.bridge('jqtooltip', $.ui.tooltip);

// global variables
var helpDialog;
var allCards;
var pro = getQueryVariable("p"); // problema
var cen = getQueryVariable("c"); // cenário
var sol = getQueryVariable("s"); // solucao
var aju = getQueryVariable("a"); // ajuda
var ant = getQueryVariable("v"); // antagonista
var Adventure;

// Inicializacao de todo o corpo da página separadamente por funcao
$(function(){
    initializeDropDownCultures();
    initializeAdventureGeneration();
    initializeViewModel();
    var aventura = new Adventure();
    ko.applyBindings(aventura);
});

function initializeAdventureGeneration(){
    if (pro && cen && sol && aju && ant) {
        generateAdventureLink(pro, cen, sol, aju, ant);
    }else{
        $(".shareAdventure").hide();
    }
}

function cardHasType(card, type) {
    return card.type_line.indexOf(type) > -1;
}

function randomCard(yesTypes, noTypes, callback) {
    // %3A == ':'
    var typesStr = '';
    for (let type of yesTypes) {
        typesStr += '+type%3A' + type;
    }
    for (let type of noTypes) {
        typesStr == '+-type%3A' + type;
    }
    $.ajax({
        //   -is:funny t:type
        url: 'https://api.scryfall.com/cards/random?q=-is%3Afunny' + typesStr,
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        success: callback,
    });
}

function getCardImage(card) {
    return card.image_uris.large;
}

function initializeViewModel(){
    // viewmodel
    Adventure = function(){
        var self = this;

        self.problema = pro ? ko.observable(String.format("http://api.mtgdb.info/content/hi_res_card_images/{0}.jpg", pro)) : ko.observable();
        self.cenario = cen ? ko.observable(String.format("http://api.mtgdb.info/content/hi_res_card_images/{0}.jpg", cen)) : ko.observable();
        self.solucao = sol ? ko.observable(String.format("http://api.mtgdb.info/content/hi_res_card_images/{0}.jpg", sol)) : ko.observable();
        self.ajudante = aju ? ko.observable(String.format("http://api.mtgdb.info/content/hi_res_card_images/{0}.jpg", aju)) : ko.observable();
        self.antagonista = ant ? ko.observable(String.format("http://api.mtgdb.info/content/hi_res_card_images/{0}.jpg", ant)) : ko.observable();

        self.loadProblema = function(){
            self.problema("");
            // Creature || Enchantment
            randomCard(['Creature', 'Enchantment'], [], function(maCard) {
                pro = maCard.id;
                self.problema(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadCenario = function(){
            self.cenario("");
            // Non-basic land
            randomCard(['Land'], ['Basic'], function(maCard) {
                cen = maCard.id;
                self.cenario(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadSolucao = function(){
            self.solucao("");
            // Sorcery or Artifact
            randomCard(['Sorcery', 'Artifact'], [], function(maCard) {
                sol = maCard.id;
                self.solucao(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadAjudante = function(){
            self.ajudante("");
            // Creature
            randomCard(['Creature'], [], function(maCard) {
                aju = maCard.id;
                self.ajudante(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });
        };

        self.loadAntagonista = function(){
            self.antagonista("");
            // Creature
            randomCard(['Creature'], [], function(maCard) {
                ant = maCard.id;
                self.antagonista(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            });

        };

        self.loadValues = function(data, event){
            self.loadProblema();
            self.loadCenario();
            self.loadSolucao();
            self.loadAjudante();
            self.loadAntagonista();
        };

    }
}

function generateAdventureLink(pro, cen, sol, aju, ant){
    var adventureLink = String.format("?p={0}&c={1}&s={2}&a={3}&v={4}", pro, cen, sol, aju, ant);

    $("#adventure")
        .attr("href", window.location.pathname + adventureLink);

    $("#adventure").removeClass('hidden');
}

function initializeDropDownCultures(){
    $('.dropdown-menu li a').on('click', function(){
        $.culture.loadCulture($(this).data("value"));
    });

    if(window.localStorage.getItem('culture')){
            $.culture.loadCulture(window.localStorage.getItem('culture'));
    }else{
            $('.dropdown-menu li a:first').click();
    }

}