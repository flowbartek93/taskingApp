import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { TasksComponent } from './tasks/tasks.component';
const appRoutes: Routes = [
  {
    path: 'tasks/:name',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class appRouter {}
