import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'To-Do-List';
  showAddTask: boolean = false;
  subscription: Subscription=new Subscription()

  // pour utiliser un service on doit l'ajoyer a noter constructeur
  constructor(private uiService: UiService, private router:Router) {

    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value)
  }
  ngOnInit(): void {}
  toggleAddTask() {
    this.uiService.toggleAddtask();
  }
  hasRouter(route:string){
    return this.router.url===route



  }
}
