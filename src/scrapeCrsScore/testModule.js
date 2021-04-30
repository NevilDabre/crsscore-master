import scrapeCrsScore from './scrapeCrsScore';

const scrapeCrsScoreAsync = async () => {
  const scrapeCrsScoreResponse = await scrapeCrsScore();
  return scrapeCrsScoreResponse;
};

const getScrapeCrsScore = () => {
  const crsScore = scrapeCrsScoreAsync();
  return crsScore;
};

module.exports = getScrapeCrsScore;
