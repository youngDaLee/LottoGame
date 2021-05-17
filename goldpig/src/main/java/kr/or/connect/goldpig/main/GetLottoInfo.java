package kr.or.connect.goldpig.main;
import kr.or.connect.goldpig.dao.*;
import kr.or.connect.goldpig.dto.*;
import java.util.List;
public class GetLottoInfo {
	public List<LottoDto> getLottoInfo() {
		LottoInfoDao dao = new LottoInfoDao();
		List<LottoDto> info = dao.getLottoInfo();
		for (LottoDto i : info) {
			System.out.println(i);
		}
		return info;
	}
}
