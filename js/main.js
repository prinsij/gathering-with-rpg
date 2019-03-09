// jquery widget mapping
//$.widget.bridge('jqbutton', $.ui.button);
//$.widget.bridge('jqtooltip', $.ui.tooltip);

// global variables
var loadingDialog;
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
    initializeStartDialogs();
    initializeAdventureGeneration();
    initializeViewModel();
    initializeAllCards();
});

function initializeStartDialogs(){
    loadingDialog = $(".loading").modal({
        keyboard: false,
        backdrop: false
    });
}

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

function randomCard() {
    return allCards[Math.floor(Math.random()*allCards.length)];
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
        self.countAll = ko.observable();

        self.loadProblema = function(){
            self.problema("");
            // Gerar o problema (Carta de Criatura ou Encanto)
            while(self.problema().length == 0){ 
                var maCard = randomCard();
                if (!cardHasType(maCard, "Creature") && !cardHasType(maCard, "Enchantment")) {
                    continue;
                } else {
                    pro = maCard.id;
                    self.problema(getCardImage(maCard));
                    generateAdventureLink(pro, cen, sol, aju, ant);
                }
            }
        };

        self.loadCenario = function(){
            self.cenario("");
            // Gerar o cenario (Carta de Terreno não-básico)
            while(self.cenario().length == 0){ 
                var maCard = randomCard();
                
                if (cardHasType(maCard, "Basic")) continue;
                if (!cardHasType(maCard, "Land")) continue;
                
                cen = maCard.id;
                self.cenario(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            };
        };

        self.loadSolucao = function(){
            self.solucao("");
            // Gerar a solucao (Carta de Artefato ou Feitiço)
            while(self.solucao().length == 0){ 
                var maCard = randomCard();

                if (!cardHasType(maCard, "Sorcery") && !cardHasType(maCard, "Artifact")) continue;
                
                sol = maCard.id;
                self.solucao(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            };
        };

        self.loadAjudante = function(){
            self.ajudante("");
            // Gerar o ajudante (Carta de Criatura)
            while(self.ajudante().length == 0){ 
                var maCard = randomCard();

                if (!cardHasType(maCard, "Creature")) continue;

                aju = maCard.id;
                self.ajudante(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            };
        };

        self.loadAntagonista = function(){
            self.antagonista("");
            // Gerar o antagonista (Carta de Criatura)
            while(self.antagonista().length == 0){ 
                var maCard = randomCard();

                if (!cardHasType(maCard, "Creature")) continue;

                ant = maCard.id;
                self.antagonista(getCardImage(maCard));
                generateAdventureLink(pro, cen, sol, aju, ant);
            };

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

function initializeAllCards(){
    $.ajax({
            //url: "https://api.mtgdb.info/cards/?fields=id,type,cardSetName",
            //   "https://api.scryfall.com/cards/search?q=-is:funny",
            url: "https://api.scryfall.com/cards/search?q=-is%3Afunny",
            type: 'GET',
            crossDomain: true,
            dataType: 'json',
            success: function(data){
                allCards = data.data;

                var aventura = new Adventure();
                aventura.countAll(allCards.length);

                ko.applyBindings(aventura);
            },
            complete: function(){
            // Hack to close a static bootstrap modal. http://stackoverflow.com/a/11081574
            loadingDialog.modal('show');
            loadingDialog.modal('hide');
            }
    });
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