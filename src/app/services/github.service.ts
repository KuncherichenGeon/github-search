import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//https://api.github.com/users/kuncherichenGeon
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http:HttpClient) { }

  getUserDetails(userName:string)
  {
      return this.http.get<any>(`https://api.github.com/users/${userName}`);
  }

  getRepos(repoUrl:string)
  {
    return this.http.get<any>(repoUrl);

  }



}
