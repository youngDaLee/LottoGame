import pandas
from collections import Counter

lotto_df = pandas.read_csv("lotto_num_1_959.csv")

# print(lotto_df)

# 가장 많이 나온 번호
num_list = list(lotto_df['No1']) + list(lotto_df['No2']) + list(lotto_df['No3']) + list(lotto_df['No4']) + list(lotto_df['No5']) + list(lotto_df['No6'])
bonus_list = list(lotto_df['Bonus'])


count = Counter(num_list)
common_num_45 = count.most_common(6)
count_bonus = Counter(bonus_list)
common_bonus_num = count_bonus.most_common(1)


print(common_num_45)
print(common_bonus_num)
