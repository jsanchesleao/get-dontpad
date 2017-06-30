const ccrawler = require('ccrawler');
const Entities = require('html-entities').AllHtmlEntities;

function get(path) {

  return ccrawler.exec(['open "http://dontpad.com/' + path + '"',
                  'find "#text"',
		  'inner-html'].join('\n'), {})
		  .then(decodeHtml);

}

function decodeHtml(text) {
  const entities = new Entities();
  return entities.decode(text);
}

module.exports = get
