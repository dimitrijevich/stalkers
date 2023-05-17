import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private rapidApiKey = '4b1848fb59mshb5032c5b9b389b8p1c8b53jsn209fdc9336b7';
  private rapidApiHost = 'instagram-looter2.p.rapidapi.com';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any> {
    const apiUrl = 'https://fortressapi-ig.herokuapp.com/';
    const ipifyUrl = 'https://api.ipify.org/?format=json';
  
    return this.http.get(ipifyUrl).pipe(
      switchMap((result: any) => {
        const globalinstagramURI = result.ip;
        const data = { usr: username };
  
        return this.http.post(apiUrl, data, {
          headers: {
            'Content-Type': 'application/json',
            'x-forwarded-for': globalinstagramURI
          }
        });
      })
    );
  }

}
