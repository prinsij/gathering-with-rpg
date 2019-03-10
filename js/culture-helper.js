$.extend({
	culture:{
			loadCulture: function(culture){
			var version = '1.2015.6.2';
			window.localStorage.setItem('culture', culture)
			switch(culture){
				case "pt-BR": loadCulture_PT(version); break;
                case "en-US": loadCulture_EN(version); break;
                default: loadCulture_EN(version); break;
            }
		}
	}
});