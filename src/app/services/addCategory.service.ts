import { taskModel } from '../tasks/task.model';

export class addCategoryService {
  categories: { title: string; tasks: taskModel[] }[] = [
    {
      title: 'training',
      tasks: [
        new taskModel('pushups', new Date()),
        new taskModel('bridge', new Date()),
        new taskModel('breath exercises', new Date()),
      ],
    },

    {
      title: 'work',
      tasks: [
        new taskModel('write raport', new Date()),
        new taskModel('learn coding', new Date()),
        new taskModel('call to employer', new Date()),
      ],
    },

    {
      title: 'relationships',
      tasks: [
        new taskModel('date with Veronica', new Date()),
        new taskModel('date with Marta', new Date()),
        new taskModel('date with Iga', new Date()),
      ],
    },

    {
      title: 'others',
      tasks: [
        new taskModel('watch tv', new Date()),
        new taskModel('play gwemt', new Date()),
        new taskModel('jerk off', new Date()),
      ],
    },
  ];

  AddCategory(titleName: string) {
    this.categories.push({ title: titleName, tasks: [] });
    console.log(this.categories);
  }
}
