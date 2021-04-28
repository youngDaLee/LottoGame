# pandas -> dict 형태로 저장된 데이터를 dataframe 형태로 변환
# request -> 매 회차에 대한 데이터를 가져오는데 사용
# tqdm -> for 문과 함께 작동, 진행바를 시각화하여 보여줌
import pandas
import requests
from tqdm import tqdm

# startRound : 시작 회차, endRound : 끝 회차
def getLottoNum(startRound, endRound) :
    drwtNo1 = []
    drwtNo2 = []
    drwtNo3 = []
    drwtNo4 = []
    drwtNo5 = []
    drwtNo6 = []
    bnusNo = []
    drwNoDate = []
    roundNo = []
    for i in tqdm(range(startRound, endRound + 1, 1)) :
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
        drwNoDate.append(lottoNo['drwNoDate'])
        roundNo.append(i)
        lotto_dict = {"추첨일" : drwNoDate, "회차" : roundNo,
                           "No1" : drwtNo1, "No2" : drwtNo2, "No3" : drwtNo3,
                           "No4" : drwtNo4, "No5" : drwtNo5, "No6" : drwtNo6,
                           "Bonus" : bnusNo}
        lotto_df = pandas.DataFrame(lotto_dict)
    return lotto_df


# main code
startRound = 1
endRound = 959
lotto_df = getLottoNum(startRound, endRound)

print(lotto_df)

lotto_df.to_csv("lotto_num_" + str(startRound) + "_" + str(endRound) + ".csv", index = False)

