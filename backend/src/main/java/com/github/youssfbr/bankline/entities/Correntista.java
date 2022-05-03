package com.github.youssfbr.bankline.entities;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Correntista {

    private Long id;
    private String cpf;
    private String nome;

    private Conta conta;

}
