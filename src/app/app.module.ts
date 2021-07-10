import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { DetailsComponent } from './details/details.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';

import { FormsModule } from '@angular/forms';
import { addCategoryService } from './services/addCategory.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { appRouter } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TasksComponent,
    DetailsComponent,
    AddCategoryModalComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule, appRouter],
  providers: [addCategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
