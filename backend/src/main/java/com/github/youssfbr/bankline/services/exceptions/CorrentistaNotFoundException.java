package com.github.youssfbr.bankline.services.exceptions;


public class CorrentistaNotFoundException extends RuntimeException {

    public CorrentistaNotFoundException(Long id) {
        super("Correntista não encontrado. ID: " + id);
    }

}
