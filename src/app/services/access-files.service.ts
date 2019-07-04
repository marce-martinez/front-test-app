import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessFilesService {

  constructor(private http: HttpClient) { }

  readFile(path:string){
    return this.http.get(path, {responseType: 'text'});
  }
}
