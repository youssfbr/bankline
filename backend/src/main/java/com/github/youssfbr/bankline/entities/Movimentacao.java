package com.github.youssfbr.bankline.entities;

import com.github.youssfbr.bankline.entities.enums.MovimentacaoTipo;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "tb_movimentacao")
public class Movimentacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDateTime dataHora;
    private String descricao;
    private Double valor;

    @Enumerated(EnumType.STRING)
    private MovimentacaoTipo tipo;

}
