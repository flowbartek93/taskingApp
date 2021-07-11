import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';

import { FormsModule } from '@angular/forms';
import { addCategoryService } from './services/addCategory.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRouter } from './app-router.module';
import { TaskPanelComponent } from './task-panel/task-panel.component';
import { TasksCategoriesComponent } from './task-panel/task-categories/tasks-categories.component';
import { TasksListComponent } from './task-panel/tasks-list/tasks-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddCategoryModalComponent,
    TaskPanelComponent,
    TasksCategoriesComponent,
    TasksListComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule, appRouter],
  providers: [addCategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
