package com.github.youssfbr.bankline.services.interfaces;

import com.github.youssfbr.bankline.dto.MessageResponseDTO;
import com.github.youssfbr.bankline.dto.NovoCorrentista;
import com.github.youssfbr.bankline.entities.Correntista;

import java.util.List;

public interface ICorrentistaService {

    List<Correntista> findAll();
    MessageResponseDTO insert(NovoCorrentista novoCorrentista);

}
