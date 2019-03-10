$.extend({
	culture:{
			loadCulture: function(culture){
			var version = '1.2019.3.9';
			window.localStorage.setItem('culture', culture)
			switch(culture){
				case "pt-BR": loadCulture_PT(version); break;
                case "en-US": loadCulture_EN(version); break;
                default: loadCulture_EN(version); break;
            }
		}
	}
});