package com.example.backend.service;

import com.example.backend.model.CheatSheet;
import com.example.backend.repo.CheatSheetRepo;
import net.bytebuddy.dynamic.scaffold.MethodGraph;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class CheatSheetServiceTest {

    private final CheatSheetRepo repo = mock(CheatSheetRepo.class);
    private final IdService fakeId = mock(IdService.class);
    private final CheatSheetService service = new CheatSheetService(repo, fakeId);


    @Test
    void getAllCommands() {
        when(repo.findAll())
                .thenReturn(List.of(
                        new CheatSheet("1", "int (Integer)", "int {intName} = 1", "Java", "Ganzzahl"),
                        new CheatSheet("2", "float", "float {floatName} = 300000.1", "Java", "Kommazahlen (32 Bit Genauigkeit)")));

        List<CheatSheet> actual = service.getAllCommands();

        List<CheatSheet> expected = List.of(
                new CheatSheet("1", "int (Integer)", "int {intName} = 1", "Java", "Ganzzahl"),
                new CheatSheet("2", "float", "float {floatName} = 300000.1", "Java", "Kommazahlen (32 Bit Genauigkeit)"));
        verify(repo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void postCommand_ShouldAddCommandWithNewId() {
        //GIVEN
        when(fakeId.generateId()).thenReturn("1");
        CheatSheet commandToAdd = new CheatSheet("", "test", "test", "test", "test");
        CheatSheet commandToReturn = new CheatSheet("1", "test", "test", "test", "test");
        when(repo.save(commandToReturn)).thenReturn(commandToReturn);
        //WHEN
        CheatSheet actual = service.postCommand(commandToAdd);
        //THEN
        CheatSheet expected = new CheatSheet("1", "test", "test", "test", "test");
        assertEquals(expected, actual);

    }

    @Test
    void deleteCommand_ShouldReturnTrue_IfCommandDeletedSucessfully () {
        //GIVEN
        when(repo.existsById("1")).thenReturn(true);
        //WHEN
        Boolean actual = service.deleteCommand("1");
        //THEN
        assertTrue(actual);

    }

}



































