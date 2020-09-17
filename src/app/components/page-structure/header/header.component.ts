import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Cours d\'anglais tous niveaux à Clermont-Ferrand';
  wip = 'Site en cours de création, merci pour votre patience.';

  constructor() {
  }

  ngOnInit() {
  }

}
