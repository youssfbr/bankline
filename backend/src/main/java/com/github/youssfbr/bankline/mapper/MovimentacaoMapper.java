package com.github.youssfbr.bankline.mapper;

import com.github.youssfbr.bankline.dto.MovimentacaoDTO;
import com.github.youssfbr.bankline.entities.Movimentacao;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface MovimentacaoMapper {

    MovimentacaoMapper INSTANCE = Mappers.getMapper(MovimentacaoMapper.class);

    Movimentacao toModel(MovimentacaoDTO movimentacaoDTO);

    MovimentacaoDTO toDTO(Movimentacao movimentacao);

}
