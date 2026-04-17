package com.taskapp.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.taskapp.model.Task;
import com.taskapp.repository.TaskRepository;
@Service
public class TaskService {
    @Autowired
    private TaskRepository repo;
    public List<Task> getAllTasks() { return repo.findAll(); }
    public Task saveTask(Task task) { return repo.save(task); }
    public void deleteTask(Long id) { repo.deleteById(id); }
}