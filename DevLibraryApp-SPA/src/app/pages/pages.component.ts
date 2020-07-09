import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  pages: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.http.get('http://localhost:5000/api/pages').subscribe(response => {
      this.pages = response;
    }, error => {
      console.log(error);
    });
  }
}
