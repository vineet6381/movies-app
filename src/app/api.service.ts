import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  options: Object = {
    "language": "fr_FR",
    "api_key": API_KEY
  };

  constructor(private http: HttpClient) {
  }

  private getOptions() {

    let httpParams = new HttpParams();

    for (let option in this.options) {
      httpParams = httpParams.set(option, this.options[option]);
    }

    return httpParams;
  }

  getTrendingMovies() {
    return this.http.get<any>(API_URL + '/trending/movie/week', { params: this.getOptions() });
  }

  getBestMovies() {
    return this.http.get<any>(API_URL + "/movie/top_rated", { params: this.getOptions() });
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(API_URL + "/movie/" + id, { params: this.getOptions() });
  }

  search(query: string): Observable<any> {
    let options = this.getOptions().set('query', query);
    return this.http.get(API_URL + '/search/movie', { params: options });
  }
}
