import request from 'request';
import cheerio from 'cheerio';

const url = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html';

const scrapeCrsScore = () => {
  return new Promise(function (resolve, reject) {
    let crsScore = { plain: {}, json: {} };
    request(url, function (error, response, html) {
      if (error) {
        reject(error);
      }
      let $ = cheerio.load(html);

      $('.mwsgeneric-base-html').filter(function () {
        var data = $(this).find('p');
        data.each((i, item) => {
          if (item.children[0].type === 'tag' && item.children[0].name === 'strong' && item.children[0].parent.children[1]) {
            let key = item.children[0].children[0].data.replace(':', '');
            let value = item.children[0].parent.children[1].data.trim();
            crsScore.plain[key] = value;
            crsScore.json[key.toLowerCase().split(' ').join('_')] = value.indexOf('UTC') > 0 ? new Date(value.replace('at', '')) : parseInt(value.trim().split(',').join(''));
          }
        })
      })
      resolve(crsScore);
    })

  });
};

export default scrapeCrsScore;
