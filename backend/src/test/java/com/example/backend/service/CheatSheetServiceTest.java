package com.example.backend.service;

import com.example.backend.model.CheatSheet;
import com.example.backend.repo.CheatSheetRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CheatSheetServiceTest {

    private final CheatSheetRepo repo = mock(CheatSheetRepo.class);
    private final IdService idService = mock(IdService.class);
    private final CheatSheetService service = new CheatSheetService(repo, idService);


    @Test
    void getAllCommands() {
        when(repo.findAll())
                .thenReturn(List.of(
                        new CheatSheet("1","int (Integer)","int {intName} = 1", "Java","Ganzzahl"),
                        new CheatSheet("2", "float", "float {floatName} = 300000.1", "Java","Kommazahlen (32 Bit Genauigkeit)")));

        List<CheatSheet> actual = service.getAllCommands();

        List<CheatSheet> expected = List.of(
                new CheatSheet("1","int (Integer)","int {intName} = 1", "Java","Ganzzahl"),
                new CheatSheet("2", "float", "float {floatName} = 300000.1", "Java","Kommazahlen (32 Bit Genauigkeit)"));
        verify(repo).findAll();
        assertEquals(expected, actual);
    }
    
}



































