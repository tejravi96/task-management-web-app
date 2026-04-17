import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class TaskService {
  private apiUrl = 'http://localhost:8080/tasks';
  constructor(private http: HttpClient) {}
  getTasks() { return this.http.get(this.apiUrl); }
  addTask(task: any) { return this.http.post(this.apiUrl, task); }
  deleteTask(id: number) { return this.http.delete(`${this.apiUrl}/${id}`); }
}
updateTask(id: number, task: any) {
  return this.http.put(`http://localhost:8080/tasks/${id}`, task);
}
