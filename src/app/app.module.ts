import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';

import {FormsModule} from '@angular/forms';
import {ConnectionService} from './services/connection.service';
import {FooterComponent} from './components/page-structure/footer/footer.component';
import {HeaderComponent} from './components/page-structure/header/header.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from './components/video/video.component';
import { OfferComponent } from './components/description/offer/offer.component';
import { TutorComponent } from './components/description/tutor/tutor.component';
import { MiscInfoComponent } from './components/description/misc-info/misc-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    VideoComponent,
    OfferComponent,
    TutorComponent,
    MiscInfoComponent
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
