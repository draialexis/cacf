import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';

import {FormsModule} from '@angular/forms';
import {ConnectionService} from './services/connection.service';
import {FooterComponent} from './components/page-structure/footer/footer.component';
import {DescriptionComponent} from './components/description/description.component';
import {HeaderComponent} from './components/page-structure/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    DescriptionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
