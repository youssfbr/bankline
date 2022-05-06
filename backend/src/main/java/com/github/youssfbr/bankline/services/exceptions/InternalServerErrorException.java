package com.github.youssfbr.bankline.services.exceptions;


public class InternalServerErrorException extends RuntimeException {

    public InternalServerErrorException() {
        super("Erro interno identificado. Por favor, contate o suporte.");
    }

}
