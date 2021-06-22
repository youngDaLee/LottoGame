from re import I
from django.shortcuts import render
from .models import Lotto, Ranking
from .lottogame import lottoGame
from .form import PostForm
from django.shortcuts import redirect

from rest_framework import generics, mixins
from .serializers import RankSerializer
import ast


# Create your views here.
def lotto_view(request):
    lotto = Lotto.objects.all() # Lotto 테이블의 모든 객체 불러와서 lotto에 저장
    return render(request, 'index.html',{"lotto":lotto})

def game_view(request):
    num = [41,39,13,2,29,5]
    prize = lottoGame(num)
    return render(request, 'game.html', {'prize':prize})

def post(request):
    if request.method == 'POST':
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.num = request
            # post.game = lottoGame(request)

            # 프론트에서 autoNum 받아줌.
            num = request.POST.get('autoNum')
            # 23,45,...형태로 들어오는 숫자를 []안에 넣어 리스트 형식으로 바꿔줌
            numstr = '['+num+']'
            # ast로 list로 바꿔서 lottogame 돌려줌
            usernumlist = ast.literal_eval(numstr)
            gamenum = lottoGame(usernumlist)
            post.num = num
            post.price = sum(gamenum)
            post.save()
        return render(request, 'parameter.html', {'form':form, 'game':gamenum})
    
    else:
        form = PostForm()
        return render(request, 'parameter.html', {"form":form})

class rankAPI(generics.GenericAPIView, mixins.ListModelMixin):

    serializer_class = RankSerializer

    def get_queryset(self):
        return Ranking.objects.all()

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)