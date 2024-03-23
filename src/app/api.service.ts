import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const { apiUrl } = environment;
 
  
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
   
  }

  getOneTheme(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
  }

  addTheme(themeName: string, postText: string) {
    const { apiUrl } = environment;
    return this.http.post<Theme>(`${apiUrl}/themes`, {themeName, postText});
  }
    

  getPosts(limit?: number) {
    const { apiUrl } = environment;

    if (!limit) {
      return this.http.get<Post[]>(`${apiUrl}/posts`);
    }
    return this.http.get<Post[]>(`${apiUrl}/posts?limit=${limit}`);
  }
}
