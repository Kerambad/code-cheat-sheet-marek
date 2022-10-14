package com.example.backend.service;

import com.example.backend.model.CheatSheet;
import com.example.backend.repo.CheatSheetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CheatSheetService {

    private final CheatSheetRepo repo;
    private final  IdService idService;

    @Autowired
    public CheatSheetService(CheatSheetRepo cheatSheetRepo, IdService idService) {
        this.repo = cheatSheetRepo;
        this.idService = idService;
    }


    public List<CheatSheet> getAllCommands() {
        return repo.findAll();
    }

    public CheatSheet postCommand(CheatSheet postCheat) {
        CheatSheet newCheatSheet = CheatSheet.builder()
                .id(idService.generateId())
                .name(postCheat.getName())
                .command(postCheat.getCommand())
                .category(postCheat.getCategory())
                .description(postCheat.getDescription())
                .build();

        return repo.save(newCheatSheet);
    }
}













