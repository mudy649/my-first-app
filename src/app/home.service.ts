import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { home } from 'src/model/home.model';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  URL = 'http://dummy.restapiexample.com/api/v1'
  URLp ='http://dummy.restapiexample.com/api/v1/create'
  dataarray = [];
  constructor(private http: HttpClient) {
    console.log("service")
   }

   
   getdata():Observable<any>{
    return this.http.get(`${this.URL}/employees`);
    
  }

  createdata(info):Observable<any>{
    return this.http.post(this.URLp,info, httpOptions)
  }

  deleteData(id):Observable<any>{
    return this.http.delete('http://dummy.restapiexample.com/api/v1/delete/'+id,httpOptions)
  }

  updateData(info):Observable<any>{
    return this.http.put('http://dummy.restapiexample.com/api/v1/update/'+info.id,info,httpOptions)
  }
}
