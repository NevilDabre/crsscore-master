import scrapeCrsScore from './scrapeCrsScore/scrapeCrsScore';

const scrapeCrsScoreAsync = async () => {
  try {
    const scrapeCrsScoreResponse = await scrapeCrsScore();
    return scrapeCrsScoreResponse;
  } catch (err) {
    if (err && err.code) {
      throw new Error(`Check your internet connection. ${err}`);
    }
  }
};

const currentScrapeCrsScore = () => {
  try {
    const crsScore = scrapeCrsScoreAsync();
    return crsScore;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = currentScrapeCrsScore;
