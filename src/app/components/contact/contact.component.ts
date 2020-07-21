import {Component, OnInit} from '@angular/core';

// import { ConnectionService } from '../../services/connection.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  level: string;
  message: string;

  constructor(/* private service: ConnectionService */) {
  }

  ngOnInit() {
  }

  processForm() {
    // this.service.sendMessage(this.message);
  }

  // window.location.assign('mailto:prospection@cours-anglais-clermont.fr?subject=prospection%20pour%20niveau20%' +
  //   this.level + 'par20%' + this.name + '&body=' + this.message);
}
