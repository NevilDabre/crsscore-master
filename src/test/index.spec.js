import { expect } from 'chai';
import { crsLiveScore as CrsScore } from '../index';

async function getCrsScore() {
  const res = await CrsScore();
  return res;
}

describe('Test Crs Score Function', async () => {
  let crs;
  beforeEach(async () => {
    crs = await getCrsScore();
  });

  it('Crs Score is an object', async () => {
    expect(crs).to.be.an('object')
  });

  it('Crs Score has json property', async () => {
    expect(crs).to.have.own.property('json');
  });

  it('Crs Score has plain property', async () => {
    expect(crs).to.have.own.property('plain');
  });

  it('Crs Score -> json has property number_of_invitations_issued', async () => {
    expect(crs).to.have.nested.property('json.number_of_invitations_issued');
  });

  it('Crs Score -> json has property rank_required_to_be_invited_to_apply', async () => {
    expect(crs).to.have.nested.property('json.rank_required_to_be_invited_to_apply');
  });

  it('Crs Score -> json has property date_and_time_of_round', async () => {
    expect(crs).to.have.nested.property('json.date_and_time_of_round');
  });

  it('Crs Score -> json has property crs_score_of_lowest-ranked_candidate_invited', async () => {
    expect(crs).to.have.nested.property('json.crs_score_of_lowest-ranked_candidate_invited');
  });

  it('Crs Score -> json has property tie-breaking_rule', async () => {
    expect(crs).to.have.nested.property('json.tie-breaking_rule');
  });

});
