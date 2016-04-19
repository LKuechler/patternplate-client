import highlight from 'highlight.js/lib/highlight.js';
import {pd as pretty} from 'pretty-data';

import less from 'highlight.js/lib/languages/less.js';
import css from 'highlight.js/lib/languages/css.js';
import js from 'highlight.js/lib/languages/javascript.js';
import xml from 'highlight.js/lib/languages/xml.js';

highlight.registerLanguage('less', less);
highlight.registerLanguage('css', css);
highlight.registerLanguage('js', js);
highlight.registerLanguage('jsx', js);
highlight.registerLanguage('html', xml);
highlight.registerLanguage('xml', xml);

highlight.configure({
	tabReplace: '  ',
	languages: ['less', 'css', 'html', 'js']
});

global.onmessage = event => {
	const {data} = event;
	const {payload: code, id} = JSON.parse(data);
	const {value, language} = highlight.highlightAuto(code);

	// If html is detected, reformat it
	const payload = language === 'html' ?
		highlight.highlight('html', pretty.xml(code)).value :
		value;

	global.postMessage(JSON.stringify({id, payload}));
};
