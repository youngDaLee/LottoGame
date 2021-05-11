import re
import sys
import pandas as pd

import urllib.request as req
# bs4 임포트
from bs4 import BeautifulSoup
# selenium 임포트
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait


def cleaning(text):
    onlynum = re.sub('[,원]','',text)
    # regex = re.compile(r'\d')
    # matchobj = regex.search(onlynum)
    # num = int(matchobj.group())
    return int(onlynum)

def return_drwt(text):
    ret = []
    for i in text:
        string = str(i)
        onlynum = re.sub('<.+?>','', string, 0, re.I|re.S)
        if onlynum == '\n':
            continue
        ret.append(int(onlynum))
    return ret


chrome_options = Options()
chrome_options.add_argument("--headless")


# webdriver 설정(Chrome) - Headless 모드
browser = webdriver.Chrome('C:/Users/DY/Documents/LottoGame/crawling/chromedriver.exe', options=chrome_options)

# 크롬 브라우저 내부 대기
browser.implicitly_wait(5)

# 브라우저 사이즈
browser.set_window_size(1920, 1280)  # maximize_window(), minimize_window()

# 로또 번호 기본 URL
base = "https://dhlottery.co.kr/gameResult.do?method=byWin&drwNo="

result = []

for page in range(1, 961):
    # 초기화
    cnt = None,
    winnums = None,
    firstWinamnt = None,
    secondWinamnt = None,
    thirdWinamnt = None,
    fourthWinamnt = None,
    fifthWinamnt = None

    url = base + str(page)
    # move page
    browser.get(url)

    soup = BeautifulSoup(browser.page_source, 'html.parser')

    try:
        browser.implicitly_wait(10)

        cnt = page

        lottono = return_drwt(soup.select('div.num.win > p ')[0])
        bnusNo = return_drwt(soup.select('div.num.bonus > p')[0])
        winnums = lottono + bnusNo

        firstWinamnt = cleaning(soup.select('tr:nth-of-type(2) > td:nth-of-type(4)')[0].text.strip())
        secondWinamnt = cleaning(soup.select('tr:nth-of-type(3) > td:nth-of-type(4)')[0].text.strip())
        thirdWinamnt = cleaning(soup.select('tr:nth-of-type(4) > td:nth-of-type(4)')[0].text.strip())
        fourthWinamnt = cleaning(soup.select('tr:nth-of-type(5) > td:nth-of-type(4)')[0].text.strip())
        fifthWinamnt = cleaning(soup.select('tr:nth-of-type(6) > td:nth-of-type(4)')[0].text.strip())
    except IndexError as e:
        del soup
        continue
    
    item_obj = {
        'cnt' : cnt,
        'winnums' : winnums,
        'firstWinamnt' : firstWinamnt,
        'secondWinamnt' : secondWinamnt,
        'thirdWinamnt' : thirdWinamnt,
        'fourthWinamnt' : fourthWinamnt,
        'fifthWinamnt' : fifthWinamnt
    }

    result.append(item_obj)
    del soup

browser.close()

# print(result)
lotto_df = pd.DataFrame(result)
lotto_df.to_csv("lotto_num_final.csv", index=False)
print(lotto_df)
# lotto_df.to_csv("lotto.csv", index=False)