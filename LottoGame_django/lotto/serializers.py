from django.db.models import fields
from django.db.models.base import Model
from rest_framework import serializers
from .models import Ranking

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ranking
        fields = "__all__"