import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-from',
  templateUrl: './task-from.component.html',
  styleUrl: './task-from.component.css',
})
export class TaskFromComponent {
  constructor(public taskService: TaskService) {}
  addTask(n: any, desc: any, date: any) {
    this.taskService.tasks.push({
      name: n.value,
      description: desc.value,
      dueDate: date.value,
      completed: false,
    });
  }
}
