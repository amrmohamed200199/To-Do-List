import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFromComponent } from './task-from/task-from.component';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'add-task', component: TaskFromComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
