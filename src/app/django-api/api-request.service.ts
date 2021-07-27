import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { environment } from 'src/environments/environment';
import { Merch } from '../merch-class/merch';


@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  merchlist : Merch[];

  constructor(private httpService:HttpClient) {
  
   }
  // options: {headers?:{"Authorization":"token"}}
  loginRequest(){
    interface ApiResponse{
      name:string
    }
    let promise = new Promise((resolve, reject)=>{
      this.httpService.get<ApiResponse>(environment.baseUrl+"api/merch/").toPromise().then(response =>{
        console.log(response);
        resolve()
      },error =>{
        console.log("bad credentials");
        
        reject()
      })
    })
    return promise
  };

  merchRequest(){
    interface ApiResponse{
      name:string,
      description: string,
      price: string
    }
    let promise = new Promise((resolve, reject)=>{
      this.httpService.get<any>(environment.baseUrl+"api/merch/" )
      .toPromise()
      .then(response =>{
        // console.log(JSON.stringify(response));
        let data = JSON.stringify(response)
        for (let i = 0; i < response.length; i++) {
          console.log(i);
          // this.newUserData = new Repository(response[i].name, response[i].description, response[i].updated_at, response[i].clone_url, response[i].language)
          // this.repoData.push(this.newUserData);
        }  
        resolve()
      },error =>{
        console.log("bad credentials");
        reject()
      })
    })
    return promise


  }
}
