import crsScore from './currentCrsScore';

const crsScoreResult = async () => {
  const res = await crsScore();
  return res;
};

module.exports = {
  crsLiveScore: crsScoreResult,
};
