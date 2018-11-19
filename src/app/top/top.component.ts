import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  movies: [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private TitleService: Title
  ) {
    this.TitleService.setTitle("TOP 20 - MovieApp");
  }

  ngOnInit() {
    this.apiService.getBestMovies().subscribe(data => {
      this.movies = data.results;
    });
  }

}
