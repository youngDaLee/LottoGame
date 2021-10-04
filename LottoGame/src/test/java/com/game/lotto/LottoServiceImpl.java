package com.game.lotto;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

@Service
public class LottoServiceImpl implements LottoService{
	
	@Inject
	private LottoDAO dao;
	
	@Override
	public List<LottoVO> lottoInfo(LottoVO vo){
		return dao.lottoInfo(vo);
	}

}
