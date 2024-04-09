import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    {
      name: 'Quiz HCI',
      description: 'Quiz on the first 5 Labs',
      dueDate: '2024/4/20',
      completed: false,
    },
    {
      name: 'Quiz ERP',
      description: 'Quiz on the first 3 Labs',
      dueDate: '2024/4/22',
      completed: false,
    },
  ];
  constructor() {}
}
