import { Component } from '@angular/core';

@Component({
    templateUrl: '/app/user/login.component.html'
})
export class LoginComponent {
    login(values){
        console.log('values: ', values);
    }
}