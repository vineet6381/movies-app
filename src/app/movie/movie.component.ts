import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../api.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: any;

  constructor(
    private route: ActivatedRoute,
    private ApiService: ApiService,
    private TitleService: Title
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      this.ApiService.getMovie(id).subscribe(data => {
        this.movie = data;
        this.TitleService.setTitle(this.movie.title);
      });
    });
  }
}

