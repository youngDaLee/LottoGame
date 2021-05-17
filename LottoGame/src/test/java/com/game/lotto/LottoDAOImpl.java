package com.game.lotto;

import java.util.List;

import javax.inject.Inject;
 
import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;
 
@Repository
public class LottoDAOImpl implements LottoDAO {
 
    @Inject
    private SqlSession session;
 
    @Override
    public List<LottoVO> lottoInfo(LottoVO vo) {
        
        return session.selectList("lottoList",vo);
    }
 
    
}