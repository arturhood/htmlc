module.exports.template = function (text, settings, oldSettings) {

	 var regex = /<\s*(\w+)\s?((?:\s*[.#^][^\s>]*)+)/g;


		text = text.replace(regex, function(match, tagText, selText, offset, string){
		// console.log(tagText);
		// console.log(selText);
		let url = '';
		let idAttr = '';
		let classAttr = '';

		if (tagText == 'img') {
			url = selText.replace(/\^([^\s]*)/, ' src="$1"');
		} else if (tagText == 'a') {
			url = selText.replace(/\^([^\s]*)/, ' href="$1"');
		}
		let classes = selText.match(/\.[_a-zA-Z0-9-]+/g);
		if (classes) {
			classes = classes.map(x=>x.replace('.',''));
			classAttr = ' class="'+classes.join(' ')+'"';
		} 
		let ids = selText.match(/#[_a-zA-Z0-9-]+/g);

		if (ids) {
			ids = ids.map(x=>x.replace('#',''));
			idAttr = ' id="'+ids.join(' ')+'"';
		}
		
		return '<' + tagText + idAttr + classAttr + url;
	});


	var tagEnds = /<\s*\/\s*([a-zA-Z0-9_-]+)[^>]*>/g;
	text = text.replace(tagEnds, function(match, tagText, offset, string){
		// console.log(tagText);
		
		return '</' + tagText + '>';
	});


	var comments = /\n\s*\/\/.*\n/g;
	text = text.replace(comments,'\n');



	return function (options) {
		return text;
	}



	// I don't fully understand the necessity of the code below, but everyone's doing it so...

	// source = "var __t,__p='',__j=Array.prototype.join," +
 //      "print=function(){__p+=__j.call(arguments,'');};\n" +
 //      source + 'return __p;\n';

 //    try {
 //      var render = new Function(settings.variable || 'obj', '_', source);
 //    } catch (e) {
 //      e.source = source;
 //      throw e;
 //    }

 //    var template = function(data) {
 //      return render.call(this, data, _);
 //    };

 //    // Provide the compiled source as a convenience for precompilation.
 //    var argument = settings.variable || 'obj';
 //    template.source = 'function(' + argument + '){\n' + source + '}';

 //    return template;










	// return text;
}