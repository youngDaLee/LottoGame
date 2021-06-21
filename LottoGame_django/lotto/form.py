from django import forms
from django.db.models import fields
from .models import Ranking

class PostForm(forms.ModelForm):

    class Meta:
        model = Ranking
        fields = ('nickname','num','price')