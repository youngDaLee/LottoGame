package com.game.lotto;

import java.util.List;

import javax.inject.Inject;
 
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
 
@Controller
public class LottoController {
    
    @Inject
    private LottoService service;
    
    @RequestMapping("/lotto.do")
    public String lottoInfo(Model model,LottoVO vo) {
        
        List<LottoVO> list = service.lottoInfo(vo);
        model.addAttribute("list", list);
        
        return "lotto/lotto";
    }
}
