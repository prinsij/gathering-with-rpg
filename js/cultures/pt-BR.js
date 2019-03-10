// control values
$ddl_languages_button__pt = 'Idioma <span class="caret"></span>';
$ddl_languages_item_pt__pt = 'Português (Brasil)';
$ddl_languages_item_en__pt = 'English (USA)';

$main_title__pt = 'Gathering com RPG';
$sub_title__pt = 'Gerando aventuras aleatórias com Magic: The Gathering &copy;';

$btn_how_to__pt = 'Como utilizar';
$btn_new_adventure__pt = 'Gerar nova aventura';
$btn_bookmark_adventure__pt = 'Link para esta aventura';

$dlg_loading_cards__pt = 'Carregando banco de dados de cartas. Por favor, aguarde...';
$dlg_help_label__pt = 'Como utilizar';

$crd_problem__pt = 'O Problema';
$crd_problem_description__pt = 'Esse é o problema que sempre rondou a região, mas só agora se tornou sério o suficiente. Ou algum evento misterioso que surgiu do nada.';

$crd_scenario__pt = 'O Cenário';
$crd_scenario_description__pt = 'É aqui onde tudo ocorre.';

$crd_solution__pt = 'A Solução';
$crd_solution_description__pt = 'Isso pode ser considerado "tirar o coelho da cartola" ou meio que um Deus Ex Machina. O grupo poderia resolver o problema sozinho, mas isso não seria tão divertido, né?';

$crd_ally__pt = 'O Ajudante';
$crd_ally_description__pt = 'Representa alguém que quer que o problema seja solucionado/removido do cenário.';

$crd_enemy__pt = 'O Antagonista';
$crd_enemy_description__pt = 'Representa alguém que quer que o problema não seja solucionado/removido do cenário.';

function loadCulture_PT(version){
	$('.dropdown-languages button#dropdown-languages').html($ddl_languages_button__pt);
	$('.dropdown-menu li a.culture-pt').text($ddl_languages_item_pt__pt);
	$('.dropdown-menu li a.culture-en').text($ddl_languages_item_en__pt);

	$('.main-title').text($main_title__pt);
	$('.sub-title').html($sub_title__pt);

	$('.btn.how-to').val($btn_how_to__pt);
	$('.btn.new-adventure').val($btn_new_adventure__pt);
	$('.btn.bookmark-adventure').text($btn_bookmark_adventure__pt);	// the bookmark button is a link and not a button itself

	$('.loading-dialog').text($dlg_loading_cards__pt);
	$('.help-dialog-label').text($dlg_help_label__pt);

	$('.card-problem').text($crd_problem__pt);
	$('.card-problem-description').text($crd_problem_description__pt);

	$('.card-scenario').text($crd_scenario__pt);
	$('.card-scenario-description').text($crd_scenario_description__pt);

	$('.card-solution').text($crd_solution__pt);
	$('.card-solution-description').text($crd_solution_description__pt);

	$('.card-ally').text($crd_ally__pt);
	$('.card-ally-description').text($crd_ally_description__pt);

	$('.card-enemy').text($crd_enemy__pt);
	$('.card-enemy-description').text($crd_enemy_description__pt);

	_loadStaticHtmlContent__PT(version);

}

function _loadStaticHtmlContent__PT(version){
	$('.help').html('<p>Clique em <b>Gerar Nova Aventura</b>. Os slots de cartas servem para você gerar uma idéia de aventura de RPG. Depois você pode clicar em cada carta para sortea-la separadamente. Ao gerar a aventura, um link sugirá.</p><p> <ul> <li><em><b>O Problema</b></em> (Carta de Criatura ou Encantamento): Esse é o problema que sempre rondou a região, mas só agora se tornou sério o suficiente. Ou algum evento misterioso que surgiu do nada.</li><li><em><b>O Cenário </b> </em> (Carta de Terreno não-básico): É aqui onde tudo ocorre.</li><li><em><b>A Solução </b></em> (Carta de Artefato ou Feitiço): Isso pode ser considerado "tirar o coelho da cartola" ou meio que um Deus Ex Machina. O grupo poderia resolver o problema sozinho, mas isso não seria tão divertido, né?</li><li><em><b>O Ajudante </b> </em> (Carta de Criatura): Representa alguém que quer que o problema seja solucionado/removido do cenário.</li><li><em><b>O Antagonista </b> </em> (Carta de Criatura): Representa alguém que quer que o problema não seja solucionado/removido do cenário.</li></ul> </p><p> <b> Claro, isso tudo são ideias para desencadear outras ideias ou dar uma ajuda quando você empacar e ficar sem inspiração. Não existe um jeito certo de usar as cartas, você pode ter mais de um ajudante ou antagonista, por exemplo! </b> </p><p>Você pode ter alguns resultados sem sentido, claro, mas é aí que a sua criatividade deve entrar em jogo!</p><p> <b>Logo abaixo, um exemplo de aventura:</b> </p><p> [O Problema]: <a href="https://scryfall.com/card/m13/111/pt/alma-atormentada" target="_blank">Alma Atormentada </a> </p><p> [O Cenário]: <a href="https://scryfall.com/card/c16/308/pt/bosque-murmurante" target="_blank"> Bosque Murmurante </a> </p><p> [A Solução]: <a href="https://scryfall.com/card/mps/17/mana-vault" target="_blank"> Cofre de Mana </a> </p><p> [O Ajudante]: <a href="https://scryfall.com/card/inv/204/quirion-sentinel" target="_blank"> Sentinela Quirion </a> </p><p>[O Antagonista]: <a href="https://scryfall.com/card/10e/199/pt/elemental-da-terra" target="_blank">Elemental da Terra</a></p><i> <p> Recentemente no território élfico conhecido como <b>Bosque Murmurante </b>, viajantes tem ouvido mais do que os simples sussurros habituais. Corpos estão sendo encontrados, cascas ocas completamente privados de suas almas! Eles tem um aspecto velho e frágil, mesmo alguns deles sendo identificados como jovens que estavam fazendo suas jornadas entre as diversas vilas locais pela primeira vez. As <b>Almas Atormentadas </b>dos humanos que foram caçados pelos elfos como animais em tempos imemoriais, finalmente levantaram-se! </p><p> As <b>Sentinelas de Quirion</b>, elfos que protegem essa terra nos últimos séculos e estão em paz com os humanos, suspeitam que a recente invasão dos elementais da terra na parte sul do bosque tem como objetivo enfraquecer essa aliança entre elfos e humanos. As sentinelas, ocupadas com a ameaça, não conseguem mais seguir com os rituais que apaziguam os espíritos vítimas das antigas desavenças. </p><p> O líder dos <b>Elementais da Terra</b> apoia essas almas, motivado principalmente pelo fato de que elas podem auxiliá-lo a conquistar as tão desejadas terras élficas ao criar desavenças entre humanos e elfos. Mas também porque, como elas são etéreas, não possuem nenhum desejo pelas pedras preciosas tão cobiçadas pelos Elementais. </p><p> Se alguém pudesse encontrar o artefato perdido conhecido como <b>Cofre de Mana</b>, que possui o poder de, no plano material primário, absorver qualquer energia espiritual nas próximidades dele, esse alguém poderia aprisionar as almas e permitir que as Sentinelas de Quirion focassem na guerra que está para irromper... </p></i>');

	$('.disclaimer').html(String.format('<p class="text-muted"> <b>Gathering com RPG ({0})</b> Criando aventuras aleatórias com Magic: The Gathering &copy;. Todas as informações fornecidas aqui estao sob direitos autorais da Wizards of The Coast. A api usada para a obtenção dos dados e este site ou domínio não estão, sob nenhuma hipótese afiliados com a Wizards of The Coast. Powered by <a href="https://scryfall.com/docs/api" target="_blank">ScryFall api</a>. <ul> <li><b>Ideia orignal:</b> Baldr12, no <a href="http://www.reddit.com/r/rpg/comments/2gi4yh/creating_a_random_adventure_using_mtg_cards/" target="_blank">Reddit</a>.</li><li><b>Tradução:</b> Eduardo Soares, na lista de discussão do Old Dragon.</li><li><b>Execução:</b> Geraldo Nogueira, na Holanda.</li><li><b>Adaptação:</b> Danilo Lima, acolá.</li><li><b>Hospedagem:</b> Sérgio Luis, na web.</li><li><b>Versão {1}</b></li></ul> </p>', new Date().getFullYear(), version));
}