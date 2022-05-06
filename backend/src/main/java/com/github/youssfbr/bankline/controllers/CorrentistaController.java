package com.github.youssfbr.bankline.controllers;

import com.github.youssfbr.bankline.dto.MessageResponseDTO;
import com.github.youssfbr.bankline.dto.NovoCorrentista;
import com.github.youssfbr.bankline.entities.Correntista;
import com.github.youssfbr.bankline.model.Response;
import com.github.youssfbr.bankline.services.interfaces.ICorrentistaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/correntistas")
@RequiredArgsConstructor
public class CorrentistaController {

    private final ICorrentistaService correntistaService;

    @GetMapping
    public Response<List<Correntista>> findAll() {

        Response<List<Correntista>> response = new Response<>();
        response.setStatusCode(HttpStatus.OK.value());
        response.setData(correntistaService.findAll());

        return response;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public  Response<MessageResponseDTO> insert(@RequestBody NovoCorrentista novoCorrentista) {

        Response<MessageResponseDTO> response = new Response<>();
        response.setStatusCode(HttpStatus.CREATED.value());
        response.setData(correntistaService.insert(novoCorrentista));

        return response;
    }

}
