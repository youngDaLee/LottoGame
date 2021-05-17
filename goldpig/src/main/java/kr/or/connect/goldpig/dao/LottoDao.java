package kr.or.connect.goldpig.dao;

import static kr.or.connect.goldpig.dao.LottoDaoSqls.SELECT_NUM_ALL;
import static kr.or.connect.goldpig.dao.LottoDaoSqls.SELECT_PRICE_ALL;
import static kr.or.connect.goldpig.dao.LottoDaoSqls.SELECT_BY_ROUND;
import static kr.or.connect.goldpig.dao.LottoDaoSqls.SELECT_BY_ROUND_P;

import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.sql.DataSource;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.BeanPropertySqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.stereotype.Repository;

import kr.or.connect.goldpig.dto.Lotto;
@Repository
public class LottoDao {

	private NamedParameterJdbcTemplate jdbc;
	private SimpleJdbcInsert insertAction;
	private RowMapper<Lotto> rowMapper = BeanPropertyRowMapper.newInstance(Lotto.class);

	public LottoDao(DataSource dataSource) {
		this.jdbc = new NamedParameterJdbcTemplate(dataSource);
		this.insertAction = new SimpleJdbcInsert(dataSource)
                .withTableName("lotto");

	}
	
	
	public Lotto selectById_num(Integer id) {
		try {
			Map<String, ?> params = Collections.singletonMap("round", id);
			return jdbc.queryForObject(SELECT_BY_ROUND, params, rowMapper);		
		}catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
	public Lotto selectById_price(Integer id) {
		try {
			Map<String, ?> params = Collections.singletonMap("round", id);
			return jdbc.queryForObject(SELECT_BY_ROUND_P, params, rowMapper);		
		}catch(EmptyResultDataAccessException e) {
			return null;
		}
	}
	public List<Lotto> selectNumAll(){
		return jdbc.query(SELECT_NUM_ALL, Collections.emptyMap(), rowMapper);
	}
	public List<Lotto> selectPriceAll(){
		return jdbc.query(SELECT_PRICE_ALL, Collections.emptyMap(), rowMapper);
	}
}
