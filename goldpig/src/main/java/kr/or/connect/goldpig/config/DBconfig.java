package kr.or.connect.goldpig.config;

import javax.sql.DataSource;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableTransactionManagement
public class DBconfig {
	private String driverClassName = "com.mysql.jdbc.Driver";
    private String url = "jdbc:mysql://localhost:3306/lotto_info?&useSSL=false&useUnicode=true&characterEncoding=utf8";

    private String username = "lotto_user";
    private String password = "lotto123";

    @Bean
    public DataSource dataSource() {
    	BasicDataSource dataSource = new BasicDataSource();
        dataSource.setDriverClassName(driverClassName);
        dataSource.setUrl(url);
        dataSource.setUsername(username);
        dataSource.setPassword(password);
        return dataSource;

    }
}

