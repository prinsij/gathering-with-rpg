// control values
$ddl_languages_button__en = 'Language <span class="caret"></span>';
$ddl_languages_item_pt__en = 'Português (Brasil)';
$ddl_languages_item_en__en = 'English (United States)';

$main_title__en = 'Gathering with RPG';
$sub_title__en = 'Creating random adventures with Magic: The Gathering &copy;';

$btn_how_to__en = 'How to use';
$btn_new_adventure__en = 'Create new adventure';
$btn_bookmark_adventure = 'Link to this adventure';

$dlg_loading_cards__en = 'Loading cards database. Please wait...';
$dlg_help_label__en = 'How to use';

$crd_problem__en = 'The Problem';
$crd_problem_description__en = 'This is the problem that was always around, but only now has became significant. Or some mysterious event that came out of nowhere.';

$crd_scenario__en = 'The Scenario';
$crd_scenario_description__en = 'Where everything takes place.';

$crd_solution__en = 'The Solution';
$crd_solution_description__en = 'This could be the ace up your sleeve or a Deus Ex Machina. The party could solve it alone, but where is the fun in that, right?';

$crd_ally__en = 'The Ally';
$crd_ally_description__en = 'Someone who wants the problem to be solved, removed from the scenario.';

$crd_enemy__en = 'The Enemy';
$crd_enemy_description__en = 'Someone who does not want the problem to go away. And will do everything to not allow the party to succeed.';

function loadCulture_EN(version) {
    $('.dropdown-languages button#dropdown-languages').html($ddl_languages_button__en);
    $('.dropdown-menu li a.culture-pt').text($ddl_languages_item_pt__en);
    $('.dropdown-menu li a.culture-en').text($ddl_languages_item_en__en);

    $('.main-title').text($main_title__en);
    $('.sub-title').html($sub_title__en);

    $('.btn.how-to').val($btn_how_to__en);
    $('.btn.new-adventure').val($btn_new_adventure__en);
    $('.btn.bookmark-adventure').text($btn_bookmark_adventure);	// the bookmark button is a link and not a button itself

    $('.loading-dialog').text($dlg_loading_cards__en);
    $('.help-dialog-label').text($dlg_help_label__en);

    $('.card-problem').text($crd_problem__en);
    $('.card-problem-description').text($crd_problem_description__en);

    $('.card-scenario').text($crd_scenario__en);
    $('.card-scenario-description').text($crd_scenario_description__en);

    $('.card-solution').text($crd_solution__en);
    $('.card-solution-description').text($crd_solution_description__en);

    $('.card-ally').text($crd_ally__en);
    $('.card-ally-description').text($crd_ally_description__en);

    $('.card-enemy').text($crd_enemy__en);
    $('.card-enemy-description').text($crd_enemy_description__en);

    _loadStaticHtmlContent__EN(version);

}

function _loadStaticHtmlContent__EN(version) {
    $('.help').html(`
<p>
    Click in <b>Generate new adventure</b>.
    The card slots will help you with an idea for an RPG adventure.
    You can click on each to generate a new card for it.
    When the adventure is generated, a link for it will be available.
    </p><p>
    <ul>
        <li><em><b>The Problem</b></em>
            (Creature or Enchantment card): This is the problem that was always around, but only now has became significant.
            Or some mysterious event that came out of nowhere.
        </li>
        <li><em><b>The Scenario</b></em>
            (Non-basic Land card): Where everything takes place.
        </li>
        <li><em><b>The Solution</b></em>
            (Artifact or Sorcery card): This could be the ace up your sleeve or a Deus Ex Machina.
            The party could solve it alone, but where is the fun in that, right?
        </li>
        <li><em><b>The Ally</b></em>
            (Creature card): Someone who wants the problem to be solved, removed from the scenario.
        </li>
        <li><em><b>The Enemy</b></em>
            (Creature card): Someone who does not want the problem to go away.
            And will do everything to not allow the party to succeed.
        </li>
    </ul>
</p><p>
    <b>
        Of course, this is all to help achieving new ideas for cool adventures when the inspiration is not doing it\'s job.
        There is no right way of doing that. For example, nothing can stop you from creating more than one enemy or ally if you feel like it!
    </b>
</p><p>
    And you can use the non sense results (they will pop up, because randomness :D) along with your creativity to create some even nicer adventures.
</p>
<p><b>An example below:</b></p>
<p> [The Problem]: <a href="https://scryfall.com/card/pwp11/76/tormented-soul" target="_blank">Tormented Soul</a> </p>
<p> [The Scenario]:<a href="https://scryfall.com/card/cm2/258/murmuring-bosk" target="_blank">Murmuring Bosk</a> </p>
<p> [The Solution] :<a href="https://scryfall.com/card/mps/17/mana-vault" target="_blank">Mana Vault</a> </p>
<p> [The Ally]: <a href="https://scryfall.com/card/inv/204/quirion-sentinel" target="_blank"> Quirion Sentinel </a> </p>
<p>[The Enemy]: <a href="https://scryfall.com/card/bbd/174/earth-elemental" target="_blank">Earth Elemental</a> </p>
<i>
    <p>
        Recently in the elven territory known as <b> Muttering Bosk </b>, travelers have heard more than simple usual whispers.
        Bodies have been found, hollow shells completely deprived of their souls!
        They have an old and fragile look, even some of them being identified as young people were making their journeys between the various local villages by first time.
        The <b> Tormented Souls </b> of humans who were hunted like animals by the elves to time immemorial, finally rose!
    </p><p>
        The <b>Quirion Sentinel </b>, elves that protect this land in past centuries and are at peace with humans, suspect the recent invasion of <b>Earth Elementals</b> in the southern part of the forest aims to weaken the alliance between elves and humans.
        The sentries, which occupied with the threat, can no longer follow with rituals that calm the ancient spirits of the victims quarrels.
    </p><p> 
        The leader of the <b> Earth Elementals </b> supports these souls, mainly due to the fact that they can help them win the coveted Elvish lands to create disagreements between humans and elves.
        But also because, as they are ethereal, have no desire for gemstones as coveted by Elementals.
    </p><p>
        If someone could find the lost artifact known as the <b>Mana Vault</b>, which has the power to, in the primary material plane, of absorbing any spiritual energy in its proximity, that person could imprison the souls and allow the <b>Quirion Sentinels </b> to focus in the imminent war...
</p></i>`);

    $('.disclaimer').html(String.format(`
<p class="text-muted"> 
    <b>Gathering with RPG ({0})</b>
    Generating random adventures with: Magic The Gathering &copy;.
    All information provided is copyrighted by Wizards of the Coast.
    This api and/or web applications on this domain are not in anyway affiliated with Wizards of the Coast.
    Powered by <a href="https://scryfall.com/docs/api" target="_blank">ScryFall api</a>.
</p><p class="text-muted">
    This page was ported from its original home at <a href="http://rpg.uece.net" target="_blank">rpg.uece.net</a>.
    It has been updated to use ScryFall as MTGDB, the original backing database, no longer exists.
</p><p>
    <ul>
        <li><b>Original idea:</b> Baldr12, at <a href="http://www.reddit.com/r/rpg/comments/2gi4yh/creating_a_random_adventure_using_mtg_cards/" target="_blank">Reddit</a>.</li>
        <li><b>Translation:</b> Eduardo Soares, at Old Dragon\'s discussion forum.</li>
        <li><b>Original Programming:</b> Geraldo Nogueira, op Nederlands.</li>
        <li><b>Adaptation:</b> Danilo Lima, somewhere.</li>
        <li><b>Original Hosting:</b> Sérgio Luis, on the internet.</li>
        <li><b>Version {1}</b></li>
    </ul>
</p><p class="text-muted">
    <b>Praises, ideas or bug reporting? Please contact the maintainer on GitHub!</b>
</p>`, new Date().getFullYear(), version));
}