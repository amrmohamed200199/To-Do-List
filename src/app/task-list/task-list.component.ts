import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(public taskService: TaskService) {}
  taskId: any;
  task: any;
  editingTask: Task | null = null; // Track the task being edited

  deleteTask(i: number) {
    this.taskService.tasks.splice(i, 1);
  }
  completeTask(i: number) {
    this.taskService.tasks[i].completed = true;
  }
  trackByFn(index: number, task: any): any {
    return task.id; // Assuming tasks have unique identifiers
  }

  editTask(task: Task) {
    this.editingTask = task; // Assign the task to editingTask directly
  }

  // Method to save edited task
  saveEditedTask(title: string, description: string, dueDate: string) {
    if (this.editingTask) {
      // Update the properties of the editing task
      this.editingTask.name = title;
      this.editingTask.description = description;
      this.editingTask.dueDate = dueDate;

      this.editingTask = null; // Reset editing task
    }
  }

  // Method to cancel editing
  cancelEdit() {
    this.editingTask = null;
  }

  addTask(name: string, describtion: string, dueDate: string) {
    this.taskService.tasks.push({
      name: name,
      description: describtion,
      dueDate: dueDate,
      completed: false,
    });
  }
}
