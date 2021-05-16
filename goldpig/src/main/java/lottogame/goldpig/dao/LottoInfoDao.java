package lottogame.goldpig.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import lottogame.goldpig.dto.LottoInfo;

public class LottoInfoDao {
	private static String dbUrl = "jdbc:mysql://localhost:3306/LottoGame?serverTimezone=Asia/Seoul&useSSL=false";
	private static String dbUser = "GoldPig";
	private static String dbPassword = "Dream";
	
	// 로또 번호 select
	public List<LottoInfo> getLottoInfo() {
		List<LottoInfo> list = new ArrayList<>();
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
		
		String sql = "SELECT * FROM lotto_info";
		// try and resource를 이용하는 방법 -> finally에서 close할 필요가 없음
		try (Connection conn = DriverManager.getConnection(dbUrl, dbUser, dbPassword);
				PreparedStatement ps = conn.prepareStatement(sql)) {
			try (ResultSet rs = ps.executeQuery()) {
				while (rs.next()) {
					int c = rs.getInt("count");
					int n1 = rs.getInt("num1");
					int n2 = rs.getInt("num2");
					int n3 = rs.getInt("num3");
					int n4 = rs.getInt("num4");
					int n5 = rs.getInt("num5");
					int n6 = rs.getInt("num6");
					int b = rs.getInt("bonus");
					long p1 = rs.getLong("price1");
					long p2 = rs.getLong("price2");
					long p3 = rs.getLong("price3");
					int p4 = rs.getInt("price4");
					int p5 = rs.getInt("price5");
					LottoInfo num = new LottoInfo(c, n1, n2, n3, n4, n5, n6, b, p1, p2, p3, p4, p5);
					// list에 반복할 때마다 LottoNum 인스턴스를 생성하여 list에 추가함
					list.add(num);
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		} catch (Exception ex) {
			ex.printStackTrace();
		}
			
		return list;
	}
}
