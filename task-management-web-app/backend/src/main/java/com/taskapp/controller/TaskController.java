package com.taskapp.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.taskapp.model.Task;
import com.taskapp.service.TaskService;
@CrossOrigin
@RestController
@RequestMapping("/tasks")
public class TaskController {
    @Autowired
    private TaskService service;
    @GetMapping
    public List<Task> getTasks() { return service.getAllTasks(); }
    @PostMapping
    public Task addTask(@RequestBody Task task) { return service.saveTask(task); }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id) { service.deleteTask(id); }
}
@PutMapping("/{id}")
public Task updateTask(@PathVariable Long id, @RequestBody Task task) {
    task.setId(id);
    return service.saveTask(task);
}
