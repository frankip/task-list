import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/django-api/api-request.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  username = ""
  password = ""

  constructor(private loginservice: ApiRequestService) {

   }
  
  ngOnInit(): void {
    // this.loginservice.loginRequest()
  }
  submitlogin():any {
    this.loginservice.merchRequest()
    console.log("called", this.username+this.password)
  };
}
