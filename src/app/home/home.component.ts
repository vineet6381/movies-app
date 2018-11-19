import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  movies: [];
  query: string;
  success: boolean = false;

  constructor(
    private apiService: ApiService,
    private TitleService: Title,
    private http: HttpClient
  ) {
    this.TitleService.setTitle("Accueil - MovieApp");
  }

  onSubmit() {

    /*if (this.searchForm.invalid) {
      this.success = false;
      this.displayTrendingMovies();
      return;
    }

    this.apiService.search(this.searchForm.controls.search.value).subscribe(data => {
      this.success = true;
      this.query = this.searchForm.controls.search.value;
      this.movies = data.results;
    });*/
  }

  ngOnInit() {
    this.displayTrendingMovies();
  }

  displayTrendingMovies() {
    this.apiService.getTrendingMovies().subscribe((data) => {
      this.movies = data.results;
    },
    (error) => {
      console.log(error);
    });
  }

}
