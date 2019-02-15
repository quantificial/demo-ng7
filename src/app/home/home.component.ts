import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://reqres.in/api/users').subscribe(data => {
      console.log(data);
      this.users = data;
    });

  }

}
