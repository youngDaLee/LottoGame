package com.sample.mybatis;
 
import java.sql.Connection;
import java.sql.DriverManager;

import javax.inject.Inject;
import javax.sql.DataSource;
 
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

 
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "file:src/main/webapp/WEB-INF/spring/**/root-context.xml" })
public class MySQLConnectionTest {
	
	private static final String DRIVER = "com.mysql.cj.jdbc.Driver";
	
	private static final String URL = "jdbc:mysql://localhost:3306/lottoDB?useUnicode=true&characterEncoding=utf8&allowPublicKeyRetrieval=true&useSSL=false&serverTimezone=UTC";
	private static final String USER = "lotto";
	private static final String PW = "game";
			
    
    @Inject
    private DataSource ds;
 
    @Test
    public void testConnection() throws Exception {
    	Class.forName(DRIVER);
 
        try (Connection con = DriverManager.getConnection(URL, USER, PW)) {
 
            System.out.println("\n >>>>>>>>>> Connection 출력 : " + con + "\n");
 
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
}