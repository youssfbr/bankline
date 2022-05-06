package com.github.youssfbr.bankline.services.interfaces;

import com.github.youssfbr.bankline.dto.MovimentacaoDTO;
import com.github.youssfbr.bankline.dto.NovaMovimentacao;
import com.github.youssfbr.bankline.entities.Movimentacao;

import java.util.List;

public interface IMovimentacaoService {

    List<MovimentacaoDTO> findAll(Long contaId);
    List<MovimentacaoDTO> findAll();
    Movimentacao insert(NovaMovimentacao movimentacao);

}
