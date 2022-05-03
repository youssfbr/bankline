package com.github.youssfbr.bankline.entities;

import com.github.youssfbr.bankline.entities.enums.MovimentacaoTipo;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class Movimentacao {

    private Long id;
    private LocalDateTime dataHora;
    private String descricao;
    private Double valor;
    private MovimentacaoTipo tipo;

}
