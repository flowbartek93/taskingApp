import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { addCategoryService } from '../services/addCategory.service';
import { taskModel } from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  //tasks

  categories: { title: string; tasks: taskModel[] }[] = [];
  taskType: taskModel[];

  @Output() displayTasks = new EventEmitter<taskModel[]>();

  constructor(private addCategoryService: addCategoryService) {}

  onDisplayTasks(type: string, index: number) {
    if (type) {
      this.taskType = this.addCategoryService.categories[index].tasks;
      this.displayTasks.emit(this.taskType);
    } else {
      console.log('no type provided');
    }
  }

  ngOnInit(): void {
    this.categories = this.addCategoryService.categories;
  }
}
