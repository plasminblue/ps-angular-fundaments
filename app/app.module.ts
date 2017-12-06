import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/404.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { AuthService } from './user/auth.service';

import {
EventsListComponent,
EventThumbnailComponent,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator,
EventListResolver,
EventService
} from './events/index';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
    
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty){
        return window.confirm('You have not saved this event, do you really want to quit?')
    }
    return true;
}