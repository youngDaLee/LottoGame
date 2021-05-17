from django.shortcuts import render
from .models import Lotto

# Create your views here.
def lotto_view(request):
    lotto = Lotto.objects.all() # Lotto 테이블의 모든 객체 불러와서 lotto에 저장
    return render(request, 'index.html',{"lotto":lotto})