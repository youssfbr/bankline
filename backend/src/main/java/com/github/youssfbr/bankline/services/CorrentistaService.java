package com.github.youssfbr.bankline.services;

import com.github.youssfbr.bankline.dto.MessageResponseDTO;
import com.github.youssfbr.bankline.dto.NovoCorrentista;
import com.github.youssfbr.bankline.entities.Conta;
import com.github.youssfbr.bankline.entities.Correntista;
import com.github.youssfbr.bankline.repositories.ICorrentistaRepository;
import com.github.youssfbr.bankline.services.exceptions.CpfExistsException;
import com.github.youssfbr.bankline.services.exceptions.InternalServerErrorException;
import com.github.youssfbr.bankline.services.interfaces.ICorrentistaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;


@Service
@RequiredArgsConstructor
public class CorrentistaService implements ICorrentistaService {

    private final ICorrentistaRepository correntistaRepository;

    @Override
    @Transactional(readOnly = true)
    public List<Correntista> findAll() {
        return correntistaRepository.findAll();
    }

    @Override
    @Transactional
    public MessageResponseDTO insert(NovoCorrentista novoCorrentista) {

        try {
            if (novoCorrentista.getCpf() == "") {
                novoCorrentista.setCpf(null);
            }
            else if (novoCorrentista.getCpf() != null) {
                checkCPF(novoCorrentista.getCpf());
            }

            Correntista correntista = new Correntista();
            correntista.setCpf(novoCorrentista.getCpf());
            correntista.setNome(novoCorrentista.getNome());

            Conta conta = new Conta();
            conta.setSaldo(0.0);
            conta.setNumero(new Date().getTime());

            correntista.setConta(conta);

            Correntista correntistaSalvo = correntistaRepository.save(correntista);

            return createMessageResponse(correntistaSalvo.getId(), "Correntista criado com ID: ");
        }
        catch (CpfExistsException e) {
            throw e;
        }
        catch (Exception e) {
            throw new InternalServerErrorException();
        }
    }

    private MessageResponseDTO createMessageResponse(Long id, String message) {
        return MessageResponseDTO
                .builder()
                .message(message + id)
                .build();
    }

    private void checkCPF(String cpf) {

        boolean cpfExists = correntistaRepository.existsByCpf(cpf);

         if (cpfExists)  throw new CpfExistsException();

    }

}
