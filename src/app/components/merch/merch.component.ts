import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'src/app/django-api/api-request.service';
import { Merch } from 'src/app/merch-class/merch';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-merch',
  templateUrl: './merch.component.html',
  styleUrls: ['./merch.component.css']
})
export class MerchComponent implements OnInit {
  merchlist:Merch[];
  apiUrl = environment.baseUrl+"api/merch/";

  token = "df01453b2af2cf4b61248c230185135fbb9db753"

  constructor( private merchService: ApiRequestService, private http: HttpClient) {
    
  }
  
  ngOnInit(): void {
    this.getMerch();
  }
  
  headers = new HttpHeaders().set("Authorization", "Token" + this.token);
  httpOptions: { headers: HttpHeaders; };

  getMerch(){
    this.http.get<any>(this.apiUrl, {headers: this.headers}).subscribe( 
    response => {
      console.log(response);

      this.merchlist = response
    }
    )}

}
