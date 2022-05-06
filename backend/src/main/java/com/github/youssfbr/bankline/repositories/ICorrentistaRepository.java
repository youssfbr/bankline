package com.github.youssfbr.bankline.repositories;

import com.github.youssfbr.bankline.entities.Correntista;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICorrentistaRepository extends JpaRepository<Correntista, Long> {

    boolean existsByCpf(String cpf);

}
