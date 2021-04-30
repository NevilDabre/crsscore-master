# Canada Permanent Resident Express Entry Live Score
- This module provides Comprehensive Ranking System (CRS) updates which is used for skilled immigrants (Express Entry). The CRS is a points-based system that we use to assess and score your profile and rank it in the Express Entry pool.
- This tool uses information from following page: [CRS Website](https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html)
- You can calculate your score here: [CIC Website](https://www.cic.gc.ca/english/immigrate/skilled/crs-tool.asp).

### Install
```shell
npm install @neville.dabreo/canada-crs-score
```

### Usage
```js
// Load module
import { crsLiveScore } from "@neville.dabreo/canada-crs-score";
 
// Get the latest score and other information
const crsScore = async () => {
  const crsScoreResult = await crsLiveScore();
  // Do your stuff with result. NOTE - returns result in a promise.
  return crsScoreResult;
};

// Call 
crsScore();
```


### Output
I have provided return result with two object properties as follows
  - Plain - Human readable Text
  - Json - JS friendly object for developers.

```js
//example
{
  plain: {
    'Number of invitations issued': '6000',
    'Rank required to be invited to apply': '6000',
    'Date and time of round': 'April 29, 2021 at 10:34:05 UTC',
    'CRS score of lowest-ranked candidate invited': '400',
    'Tie-breaking rule': 'April 24, 2021 at 15:24:49 UTC'
  },
  json: {
    number_of_invitations_issued: 6000,
    rank_required_to_be_invited_to_apply: 6000,
    date_and_time_of_round: 2021-04-29T10:34:05.000Z,
    'crs_score_of_lowest-ranked_candidate_invited': 400,
    'tie-breaking_rule': 2021-04-24T15:24:49.000Z
  }
}
```

## Questions
Share your thoughts or inform me bugs here: [Github Issues](https://github.com/NevilDabre/crsscore/issues)

## Contact
Email - [nevil_dabre@yahoo.com](nevil_dabre@yahoo.com)


Good Luck!

