import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    template: `
    <h1>New Event</h1> 
    <hr>
    <div class='cold-md-6'>
        <h1>[Create Event Form will go here]</h1>
        <br />
        <br />
        <button type='submit' class='btn btn-primary'>Save</button>
        <button type='button' class='btn btn-default' (click)='cancel()'>Cancel</button>
    </div>
    `
})
export class CreateEventComponent {
    isDirty: boolean = true;
    constructor(private router: Router) {

    }

    cancel(){
        this.router.navigate(['/events'])
    }
}