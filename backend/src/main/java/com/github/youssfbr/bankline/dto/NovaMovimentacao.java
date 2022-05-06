package com.github.youssfbr.bankline.dto;

import com.github.youssfbr.bankline.entities.enums.MovimentacaoTipo;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class NovaMovimentacao {

    private String descricao;
    private Double valor;
    private MovimentacaoTipo tipo;
    private Long contaId;

}
