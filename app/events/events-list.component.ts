import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
       <div>
            <h1>Upcominng Angular 2 Events</h1>
            <hr />
            <event-thumbnail
                #thumbnail
                [event]='event1'
            ></event-thumbnail>
            <button (click)='thumbnail.logFoo()'>logFoo</button>
            <h3>{{thumbnail.value}}</h3>
       </div> 
    ` 
})
export class EventsListComponent {
    event1 = {
        id: 1, 
        name: 'Angular Connect',
        date: '09/04/2017',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/app/assets/images/angularconnect-shield',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}