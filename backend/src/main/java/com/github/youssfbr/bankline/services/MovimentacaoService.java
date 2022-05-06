package com.github.youssfbr.bankline.services;


import com.github.youssfbr.bankline.dto.MovimentacaoDTO;
import com.github.youssfbr.bankline.dto.NovaMovimentacao;
import com.github.youssfbr.bankline.entities.Correntista;
import com.github.youssfbr.bankline.entities.Movimentacao;
import com.github.youssfbr.bankline.entities.enums.MovimentacaoTipo;
import com.github.youssfbr.bankline.mapper.MovimentacaoMapper;
import com.github.youssfbr.bankline.repositories.ICorrentistaRepository;
import com.github.youssfbr.bankline.repositories.IMovimentacaoRepository;
import com.github.youssfbr.bankline.services.exceptions.CorrentistaNotFoundException;
import com.github.youssfbr.bankline.services.interfaces.IMovimentacaoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MovimentacaoService implements IMovimentacaoService {

    private final IMovimentacaoRepository movimentacaoRepository;
    private final ICorrentistaRepository correntistaRepository;
    private static final MovimentacaoMapper movimentacaoMapper = MovimentacaoMapper.INSTANCE;

    @Override
    @Transactional(readOnly = true)
    public List<MovimentacaoDTO> findAll(Long contaId) {
        return  movimentacaoRepository
                .findByCorrentistaId(contaId)
                .stream()
                .map(movimentacaoMapper::toDTO)
                .collect(Collectors.toList());

    }

    @Override
    @Transactional(readOnly = true)
    public List<MovimentacaoDTO> findAll() {
        return movimentacaoRepository
                .findAll()
                .stream()
                .map(movimentacaoMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public Movimentacao insert(NovaMovimentacao novaMovimentacao) {

        final long id = novaMovimentacao.getContaId();

        Movimentacao movimentacao = new Movimentacao();

        Double valor = novaMovimentacao.getTipo() == MovimentacaoTipo.RECEITA
                ? novaMovimentacao.getValor() : novaMovimentacao.getValor() * -1;

        movimentacao.setDataHora(LocalDateTime.now());
        movimentacao.setDescricao(novaMovimentacao.getDescricao());
        movimentacao.setTipo(novaMovimentacao.getTipo());
        movimentacao.setValor(valor);

        Correntista correntista = correntistaRepository
                .findById(id)
                .orElseThrow(() -> new CorrentistaNotFoundException(id));

        if (correntista != null) {
            correntista.getConta().setSaldo(correntista.getConta().getSaldo() + valor);
            movimentacao.setCorrentista(correntista);
            correntistaRepository.save(correntista);
        }

        return movimentacaoRepository.save(movimentacao);
    }

}
