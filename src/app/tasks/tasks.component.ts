import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  taskName: string = 'training';

  constructor(
    private addCategoryService: addCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onDisplayTasks(type: string, index: number) {
    if (type) {
      this.taskName = type;

      this.taskType = this.addCategoryService.categories[index].tasks;
    } else {
      console.log('no type provided');
    }
  }

  ngOnInit(): void {
    this.categories = this.addCategoryService.categories;
  }
}
