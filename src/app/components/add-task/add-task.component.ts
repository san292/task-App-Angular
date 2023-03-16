import { Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  // on initialise nos valeurs
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription: Subscription;

  // @Output() methode qui permet d'envoyer des props d'enfant vers parent
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {}
  onSubmit() {
    if (!this.text) {
      alert('rentrez un text svp !');
      return;
    }
    // on crée l'objet a transmetter via la requête
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    // on vide nos input
    (this.text = ''), (this.day = ''), (this.reminder = false);

    // emit(newTask) est un évènement avec une valeur donnée
    this.onAddTask.emit(newTask);
  }
}
