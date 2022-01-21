import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public titleInputNull: boolean = false;

  tasks: Task[] = [
    new Task (Guid.create(), 'Wash the car', false),
    new Task (Guid.create(), 'Go to grocery store', false)
  ]

  onSubmit(form: NgForm){
    if (form.value.title !== '' && form.value.title !== null){
      let task = new Task(Guid.create(), form.value.title, false);
      this.tasks.push(task);
      this.titleInputNull = false;
      form.resetForm();
  } else {
    this.titleInputNull = true;
    setTimeout(() => {this.titleInputNull = false;}, 3000);
    form.resetForm();
  }
}
  onComplete(id: Guid){
    let task = this.tasks.filter(x => x.id === id)[0];
    task.isComplete = true;
  }

  onDelete(id: Guid){
    let task = this.tasks.filter(x => x.id === id)[0];
    let index = this.tasks.indexOf(task, 0);
    if(index > -1){
      this.tasks.splice(index, 1);
    }
  }

}
