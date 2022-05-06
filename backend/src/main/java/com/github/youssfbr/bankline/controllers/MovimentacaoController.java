package com.github.youssfbr.bankline.controllers;

import com.github.youssfbr.bankline.dto.MovimentacaoDTO;
import com.github.youssfbr.bankline.dto.NovaMovimentacao;
import com.github.youssfbr.bankline.entities.Movimentacao;
import com.github.youssfbr.bankline.services.interfaces.IMovimentacaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/movimentacoes")
@RequiredArgsConstructor
public class MovimentacaoController {

    private final IMovimentacaoService movimentacaoService;

    @GetMapping
    public List<MovimentacaoDTO> findAll() {
        return movimentacaoService.findAll();
    }

    @GetMapping("/{contaId}")
    public List<MovimentacaoDTO> findAll(@PathVariable("contaId") Long contaId){
        return movimentacaoService.findAll(contaId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Movimentacao insert(@RequestBody NovaMovimentacao novaMovimentacao) {
        return movimentacaoService.insert(novaMovimentacao);
    }

}
