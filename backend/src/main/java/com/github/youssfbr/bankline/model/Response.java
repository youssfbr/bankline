package com.github.youssfbr.bankline.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import org.springframework.hateoas.RepresentationModel;

@Data
@EqualsAndHashCode(callSuper = false)
public class Response<T> extends RepresentationModel<Response<T>> {

    private int statusCode;
    private long timeStamp;
    private T data;

    public Response() {
        timeStamp = System.currentTimeMillis();
    }
}
