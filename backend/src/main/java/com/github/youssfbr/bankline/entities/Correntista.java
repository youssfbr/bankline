package com.github.youssfbr.bankline.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "tb_correntista")
public class Correntista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 15, unique = true)
    private String cpf;

    @Column(length = 40)
    private String nome;

    @Embedded
    private Conta conta;

}
