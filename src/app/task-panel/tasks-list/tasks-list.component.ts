import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { addCategoryService } from '../../services/addCategory.service';
import { taskModel } from '../task.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
})
export class TasksListComponent implements OnInit {
  constructor(
    private tasksService: addCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  tasks: taskModel[];

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (!this.tasks) {
        console.log('task lista pusta');
        this.tasks = this.tasksService.categories[0].tasks;
      } else {
        const tasksList = this.tasksService.categories.find(
          (category) => category.title === params.name
        );

        this.tasks = tasksList.tasks;
      }
    });
  }
}
