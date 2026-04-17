import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  tasks: any[] = [];
  newTask: any = { id: null, title: '', description: '' };
  constructor(private service: TaskService) {}
  ngOnInit() { this.loadTasks(); }
  loadTasks() {
    this.service.getTasks().subscribe((data: any) => { this.tasks = data; });
  }
  addTask() {
    this.service.addTask(this.newTask).subscribe(() => {
      this.loadTasks();
      this.newTask = { title: '', description: '' };
    });
  }
  deleteTask(id: number) {
    this.service.deleteTask(id).subscribe(() => { this.loadTasks(); });
  }
  editTask(task: any) {
  this.newTask = { ...task };
}
  updateTask() {
  this.service.updateTask(this.newTask.id, this.newTask).subscribe(() => {
    this.loadTasks();
    this.newTask = { id: null, title: '', description: '' };
  });
}
}
