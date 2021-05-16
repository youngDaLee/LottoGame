package lottogame.goldpig;

import java.util.List;

import lottogame.goldpig.dto.LottoInfo;

public class GetPrice {

	public long getPrice() {
		// 사용자에게 입력받은 번호를 넣는 배열
		// 임시로 961회차 숫자 넣음
		int[] num = { 11, 20, 29, 31, 33, 42 };
		
		GetLottoInfo info_object = new GetLottoInfo();
		List<LottoInfo> info = info_object.getLottoInfo();
		
		long max_price = 0;
		for (LottoInfo i : info) {
			System.out.println(i);
			
			// 번호가 맞는지 계산
			int equal_cnt = 0;
			boolean bonus_equal = false;
			int[] lotto_num = { i.getNum1(), i.getNum2(), i.getNum3(), i.getNum4(), i.getNum5(), i.getNum6(), i.getBonus() };
			for (int j = 0; j < 6; j++) {
				for (int k = 0; k < 6; k++) {
					if (num[j] == lotto_num[k]) {
						equal_cnt++;
						break;
					}
				}
				if (num[j] == lotto_num[6])
					bonus_equal = true;
			}
			
			// 맞는 번호 수에 맞게 상금 계산
			long tmp = 0;
			if (equal_cnt == 6) {
				tmp = i.getPrice1();
			} else if (equal_cnt == 5 && bonus_equal) {
				tmp = i.getPrice2();
			} else if (equal_cnt == 5) {
				tmp = i.getPrice3();
			} else if (equal_cnt == 4) {
				tmp = i.getPrice4();
			} else if (equal_cnt == 3) {
				tmp = i.getPrice5();
			}
			if (max_price < tmp) {
				max_price = tmp;
			}
		}
		
		System.out.println(max_price);
		
		return max_price;
	}

}
