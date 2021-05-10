package kr.or.connect.goldpig.config;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@ComponentScan(basePackages = {"kr.or.connect.goldpig.dao"})
@Import({DBconfig.class})
public class ApplicationConfig {

}
