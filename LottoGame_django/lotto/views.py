from django.shortcuts import render
from .models import Lotto
from .lottogame import lottoGame

# Create your views here.
def lotto_view(request):
    lotto = Lotto.objects.all() # Lotto 테이블의 모든 객체 불러와서 lotto에 저장
    return render(request, 'index.html',{"lotto":lotto})

def game_view(request):
    num = [9,13,21,25,32,42]
    prize = lottoGame(num)
    return render(request, 'game.html', {'prize':prize})