package com.github.youssfbr.bankline.repositories;

import com.github.youssfbr.bankline.entities.Movimentacao;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IMovimentacaoRepository extends JpaRepository<Movimentacao, Long> {

    List<Movimentacao> findByCorrentistaId(Long contaId);

}
