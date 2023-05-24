import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EventsComponent } from './events/events.component';
import { BirthdaysComponent } from './events/birthdays/birthdays.component';
import { EngagementsComponent } from './events/engagements/engagements.component';
import { AllEventsComponent } from './events/all-events/all-events.component';
import { AddEventComponent } from './events/add-event/add-event.component';


const routes: Route[] = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeCarouselComponent},
  {
    path: 'events',
    component: EventsComponent,
    children: [
      {path: '', component: AllEventsComponent},
      {path: 'birthdays', component: BirthdaysComponent},
      {path: 'engagements', component: EngagementsComponent},
      {path: 'addEvent', component: AddEventComponent}
    ]
  },
  {path: '**', component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
