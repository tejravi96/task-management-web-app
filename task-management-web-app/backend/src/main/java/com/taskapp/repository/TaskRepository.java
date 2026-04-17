package com.taskapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.taskapp.model.Task;
public interface TaskRepository extends JpaRepository<Task, Long> {}