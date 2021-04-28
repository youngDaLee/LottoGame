# -*- coding: utf-8 -*-


# %% 모듈


import pandas as pd

import requests

from tqdm import tqdm


# import json


# %% 함수


def getLottoWinInfo(startRound, endRound):
    drwtNo1 = []

    drwtNo2 = []

    drwtNo3 = []

    drwtNo4 = []

    drwtNo5 = []

    drwtNo6 = []

    bnusNo = []

    #totSellamnt = []

    drwNoDate = []

    #firstAccumamnt = []

    #firstPrzwnerCo = []

    #firstWinamnt = []

    roundNo = []

    for i in tqdm(range(startRound, endRound + 1, 1)):
        # i = 1

        req_url = "https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=" + str(i)

        req_lotto = requests.get(req_url)

        lottoNo = req_lotto.json()

        drwtNo1.append(lottoNo['drwtNo1'])

        drwtNo2.append(lottoNo['drwtNo2'])

        drwtNo3.append(lottoNo['drwtNo3'])

        drwtNo4.append(lottoNo['drwtNo4'])

        drwtNo5.append(lottoNo['drwtNo5'])

        drwtNo6.append(lottoNo['drwtNo6'])

        bnusNo.append(lottoNo['bnusNo'])

        roundNo.append(i)

        #totSellamnt.append(lottoNo['totSellamnt'])

        drwNoDate.append(lottoNo['drwNoDate'])

        #firstAccumamnt.append(lottoNo['firstAccumamnt'])

        #firstPrzwnerCo.append(lottoNo['firstPrzwnerCo'])

        #firstWinamnt.append(lottoNo['firstWinamnt'])

        lotto_dict = {"추첨일": drwNoDate, "회차": roundNo,
                      "Num1": drwtNo1, "Num2": drwtNo2,
                      "Num3": drwtNo3, "Num4": drwtNo4, "Num5": drwtNo5,
                      "Num6": drwtNo6, "bnsNum": bnusNo}

        lotto_df = pd.DataFrame(lotto_dict)

    return lotto_dict, lotto_df


# %% 로또 회차정보 불러오기


startRound = 1

endRound = 960

lotto_dict, lotto_df = getLottoWinInfo(startRound, endRound)

# %% CSV 파일로 저장


lotto_df.to_csv(str(startRound) + '-' + str(endRound) + '_lotto_number.csv', index=False, encoding='utf-8-sig')

