package com.example.backend.controller;

import com.example.backend.model.CheatSheet;
import com.example.backend.repo.CheatSheetRepo;
import com.example.backend.service.IdService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
class CheatSheetControllerTest {

    @Autowired
    private MockMvc mvc;

    @Autowired
    private CheatSheetRepo repo;

    @MockBean
    private IdService fakeId;

    @Test
    void getAllCommands_ShouldReturn_AllCommands() throws Exception {

        //GIVEN
        repo.insert(List.of(
                new CheatSheet("1", "Test", "Command", "java", "nix"),
                new CheatSheet("2", "Test2", "Command2", "javascript", "nix2")
        ));
        String expectedJSON = """
                [
                        {
                            "id": "1",
                                "name": "Test",
                                "command": "Command",
                                "category": "java",
                                "description": "nix"
                        },
                        {
                            "id": "2",
                                "name": "Test2",
                                "command": "Command2",
                                "category": "javascript",
                                "description": "nix2"
                        }
                    ]
                """;


        //WHEN&THEN
        mvc.perform(MockMvcRequestBuilders.get("/api/cheatsheet/"))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));

    }

    @Test
    void postCommand_ShouldReturn_AddedCommand() throws Exception {
    //GIVEN
        String postJSON = """
                        {
                                "name": "Test",
                                "command": "Command",
                                "category": "java",
                                "description": "nix"
                        }
                """;

        String expectedJSON = """
                        {
                                "id": "1",
                                "name": "Test",
                                "command": "Command",
                                "category": "java",
                                "description": "nix"
                        }
                """;
        when(fakeId.generateId()).thenReturn("1");

        //WHEN&THEN
        mvc.perform(post("/api/cheatsheet/")
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .content(postJSON))
                .andExpect(status().isOk())
                .andExpect(content().json(expectedJSON));
    }
}
