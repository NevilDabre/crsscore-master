import requests
import urllib.request
import time
from bs4 import BeautifulSoup
import json
import socket
import datetime

class BuildCrsScore:
    def buildDateTime(date_string2,date_string ):
        date_time_str = date_string
        date_time_obj = datetime.datetime.strptime(date_time_str, '%B %d, %Y at %H:%M:%S UTC')
        return date_time_obj

    def __init__(self, score, rank_required, number_of_invitations, date_and_time_of_round):
        self.score = int(score)
        self.rank_required = int(rank_required.replace(',',''))
        self.number_of_invitations = int(number_of_invitations.replace(',', ''))
        # self.date_and_time_of_round = str(self.buildDateTime(str(date_and_time_of_round)))
        self.date_and_time_of_round = str(date_and_time_of_round)

    def buildJSONResponse(self):
        print(json.dumps(self.__dict__))



def getInformationFromCIC():
    # Set the URL you want to webscrape from
    url = 'https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations.html'

    # Connect to the URL
    try:
        response = requests.get(url)
        if response.ok:
            print('Testing Connection: Ok')
    except:
            raise Exception('This is the exception you expect to handle')
         
    # Parse HTML and save to BeautifulSoup object¶
    soup = BeautifulSoup(response.content, "html.parser")

    # To download the whole data set, let's do a for loop through all a tags
    crs_score_row = soup.find(text='CRS score of lowest-ranked candidate invited:')
    date_time_of_crs_draw_row = soup.find(text='Date and time of round:')
    rank_required_row = soup.find(text='Rank required to be invited to apply:')
    number_of_invitations_row = soup.find(text='Number of invitations issued:')

    result = BuildCrsScore(crs_score_row.next.strip(),  rank_required_row.next.strip(),  number_of_invitations_row.next.strip(), date_time_of_crs_draw_row.next.strip())
    result.buildJSONResponse()

getInformationFromCIC()



