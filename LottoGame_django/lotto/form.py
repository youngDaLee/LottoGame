from django import forms
from django.db.models import fields
from .models import UserNum

class PostForm(forms.ModelForm):

    class Meta:
        model = UserNum
        fields = ('num',)