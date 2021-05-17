from django.db import models

# Create your models here.
class Lotto(models.Model):
    cnt = models.IntegerField(primary_key=True)
    lottono = models.CharField(db_column='lottoNo', max_length=80)  # lotto 번호 리스트
    bnusno = models.IntegerField(db_column='bnusNo')  # 보너스번호
    firstwinamnt = models.BigIntegerField(db_column='firstWinamnt', blank=True, null=True)  # 1등상금
    secondwinamnt = models.BigIntegerField(db_column='secondWinamnt', blank=True, null=True)  # 2등상금
    thirdwinamnt = models.IntegerField(db_column='thirdWinamnt', blank=True, null=True)  # 3등상금
    fourthwinamnt = models.IntegerField(db_column='fourthWinamnt', blank=True, null=True)  # 4등상금
    fifthwinamnt = models.IntegerField(db_column='fifthWinamnt', blank=True, null=True)  # 5등상금

    class Meta:
        managed = False
        db_table = 'lotto'