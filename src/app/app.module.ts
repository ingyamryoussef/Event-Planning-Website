import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LightboxModule } from 'ngx-lightbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventsComponent } from './events/events.component';
import { BirthdaysComponent } from './events/birthdays/birthdays.component';
import { EngagementsComponent } from './events/engagements/engagements.component';
import { AllEventsComponent } from './events/all-events/all-events.component';
import { LightboxComponentComponent } from './lightbox-component/lightbox-component.component';
import { AddCardComponent } from './add-card/add-card.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeCarouselComponent,
    FooterComponent,
    NotFoundComponent,
    EventsComponent,
    BirthdaysComponent,
    EngagementsComponent,
    AllEventsComponent,
    LightboxComponentComponent,
    AddCardComponent,
    AddEventComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
