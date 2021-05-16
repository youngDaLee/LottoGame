package lottogame.goldpig;

import java.util.List;

import lottogame.goldpig.dao.LottoInfoDao;
import lottogame.goldpig.dto.LottoInfo;

public class GetLottoInfo {

	public List<LottoInfo> getLottoInfo() {
		LottoInfoDao dao = new LottoInfoDao();
		List<LottoInfo> info = dao.getLottoInfo();
		for (LottoInfo i : info) {
			System.out.println(i);
		}
		return info;
	}

}
