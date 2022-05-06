package com.github.youssfbr.bankline.entities;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "tb_correntista",
        uniqueConstraints = @UniqueConstraint(
                name = "UK_CORRENTISTA_CPF",
                columnNames = "cpf"
        ))
public class Correntista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, length = 15)
    @NaturalId
    private String cpf;

    @Column(nullable = false, length = 40)
    private String nome;

    @Embedded
    private Conta conta;

}
