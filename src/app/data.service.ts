import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imatch } from './matchesInt';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
    data1= [];
    tryGEt(): Observable<any>{
        return this.http.get<Imatch[]>("http://localhost:8181/get_all");
    }
    getAllMatches(){
       return this.http.get<Imatch[]>("http://localhost:8181/get_all");
       
    }

    constructor(private http: HttpClient) { 
        this.getAllMatches();
        console.log(this.data1);

    }

    ngOnInit(){
        this.getAllMatches();
    }

   
  
   
}
