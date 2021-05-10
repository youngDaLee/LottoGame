package kr.or.connect.goldpig.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import kr.or.connect.goldpig.config.ApplicationConfig;
import kr.or.connect.goldpig.dao.LottoDao;
import kr.or.connect.goldpig.dto.Lotto;

public class JDBCTest {
	public static void main(String[] args) {
		ApplicationContext ac = new AnnotationConfigApplicationContext(ApplicationConfig.class);
		
		LottoDao lottoDao = ac.getBean(LottoDao.class);
		
		Lotto lotto = new Lotto();
		
		Lotto resultLotto = lottoDao.selectById_num(201);
		System.out.println(resultLotto);
		
	}
}
