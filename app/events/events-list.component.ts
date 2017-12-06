import { Component } from '@angular/core';
import { EventService } from './shared/event.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared/index';

@Component({
    template: `
    <div>
        <h1>Upcominng Angular 2 Events</h1>
        <hr />
        <div class='row'>
            <div *ngFor='let event of events' class='col-md-5'>
                <event-thumbnail (click)='handleThumbnailClick(event.name)' [event]='event'></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventsListComponent implements OnInit{
   events: IEvent[] 
   constructor(
       private eventService: EventService, 
       private toastrService: ToastrService,
       private route: ActivatedRoute) {
   } 

   ngOnInit() {
       this.events = this.route.snapshot.data['events']
   }

   handleThumbnailClick(data){
       this.toastrService.success(data);
   }
}