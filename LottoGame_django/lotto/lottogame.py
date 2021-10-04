from .models import Lotto
import ast

lottos = Lotto.objects.all()

def lottoGame(nums):
    # # 프론트에서 Post했을 때 23,14,34 이런식으로 들어옴.
    # # 그 숫자를 []안에 넣은 뒤 ast로 list로 바꿔 수정.
    # numstr = '['+nums+']'
    # nums = ast.literal_eval(numstr)
    total_prize = []
    for lotto in lottos:
        cnt = lotto.cnt
        lottono = set(ast.literal_eval(lotto.lottono))
        bnusno = lotto.bnusno

        prizenum = lottono & set(nums)
        len_prizenum = len(prizenum)
        len_lottono = len(lottono)

        if len_prizenum == 6:
            total_prize.append(lotto.firstwinamnt)
        elif len_prizenum == 5 and (bnusno in nums):
            total_prize.append(lotto.secondWinamnt)
        elif len_prizenum == 5:
            total_prize.append(lotto.thirdwinamnt)
        elif len_prizenum == 4:
            total_prize.append(lotto.fourthwinamnt)
        elif len_prizenum == 3:
            total_prize.append(lotto.fifthwinamnt)
    
    return total_prize



