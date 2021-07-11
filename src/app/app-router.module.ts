import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPanelComponent } from './task-panel/task-panel.component';
import { TasksListComponent } from './task-panel/tasks-list/tasks-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'tasks/training',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TaskPanelComponent,
    children: [{ path: ':name', component: TasksListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class appRouter {}
