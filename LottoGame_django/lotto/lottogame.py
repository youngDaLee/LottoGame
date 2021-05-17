from .models import Lotto
import ast

lottos = Lotto.objects.all()

def lottoGame(nums):
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



