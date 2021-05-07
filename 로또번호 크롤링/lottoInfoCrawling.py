import pandas
import requests
import re
from bs4 import BeautifulSoup
from tqdm import tqdm


def getLottoInfo(startRound, endRound) :
    roundNo = []
    first_win_num = []
    second_win_num = []
    third_win_num = []
    fourth_win_num = []
    fifth_win_num = []
    sixth_win_num = []
    bonus_num = []
    first_win_price = []
    second_win_price = []
    third_win_price = []
    fourth_win_price = []
    fifth_win_price = []

    for i in tqdm(range(startRound, endRound + 1, 1)) :
        url = "https://dhlottery.co.kr/gameResult.do?method=byWin&drwNo=" + str(i)
        html = requests.get(url).text

        soup = BeautifulSoup(html, 'html.parser')


        # 회차
        roundNo.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > h4 > strong")[0].text.strip()[0:-1]))
        


        # 당첨번호
        first_win_num.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > div > div.num.win > p > span:nth-of-type(1)")[0].text.strip()))
        second_win_num.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > div > div.num.win > p > span:nth-of-type(2)")[0].text.strip()))
        third_win_num.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > div > div.num.win > p > span:nth-of-type(3)")[0].text.strip()))
        fourth_win_num.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > div > div.num.win > p > span:nth-of-type(4)")[0].text.strip()))
        fifth_win_num.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > div > div.num.win > p > span:nth-of-type(5)")[0].text.strip()))
        sixth_win_num.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > div > div.num.win > p > span:nth-of-type(6)")[0].text.strip()))

        bonus_num.append(int(soup.select("#article > div:nth-child(2) > div > div.win_result > div > div.num.bonus > p > span")[0].text.strip()))


        # 상금
        win_selector =  "#article > div:nth-child(2) > div > table > tbody"

        first_win_selector = win_selector + " > tr:nth-child(1) > td:nth-child(4)"
        second_win_selector = win_selector + " > tr:nth-child(2) > td:nth-child(4)"
        third_win_selector = win_selector + " > tr:nth-child(3) > td:nth-child(4)"
        fourth_win_selector = win_selector + " > tr:nth-child(4) > td:nth-child(4)"
        fifth_win_selector = win_selector + " > tr:nth-child(5) > td:nth-child(4)"

        first_win_price.append(int(re.sub(r",|원", "", soup.select(first_win_selector)[0].text.strip())))
        second_win_price.append(int(re.sub(r",|원", "", soup.select(second_win_selector)[0].text.strip())))
        third_win_price.append(int(re.sub(r",|원", "", soup.select(third_win_selector)[0].text.strip())))
        fourth_win_price.append(int(re.sub(r",|원", "", soup.select(fourth_win_selector)[0].text.strip())))
        fifth_win_price.append(int(re.sub(r",|원", "", soup.select(fifth_win_selector)[0].text.strip())))


        # 저장
        lotto_dict = {"회차" : roundNo, "No1" : first_win_num, "No2" : second_win_num, "No3" : third_win_num,
                      "No4" : fourth_win_num, "No5" : fifth_win_num, "No6" : sixth_win_num, "Bonus" : bonus_num,
                      "1등 당첨금" : first_win_price, "2등 당첨금" : second_win_price, "3등 당첨금" : third_win_price,
                      "4등 당첨금" : fourth_win_price, "5등 당첨금" : fifth_win_price}
        lotto_df = pandas.DataFrame(lotto_dict)

    
    return lotto_df


# main code
startRound = 1
endRound = 961
lotto_df = getLottoInfo(startRound, endRound)

lotto_df.to_csv("lotto_info_" + str(startRound) + "_" + str(endRound) + ".csv", index = False)
