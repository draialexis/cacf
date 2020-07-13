import {Component, OnInit} from '@angular/core';

// import { ConnectionService } from '../../logic/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  href: string;

  constructor() {
  } // private service: ConnectionService

  ngOnInit() {
  }

  processForm() {
    window.location.assign('mailto:prospection@cours-anglais-clermont.fr?subject=prospection%20' + this.name + '&body=' + this.message);
    // this.service.sendMessage(this.message);
  }
}
