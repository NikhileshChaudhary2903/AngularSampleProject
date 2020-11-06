import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { User } from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users;

  // h1Style: boolean = false;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // when component loads up
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

  // firstClick(): void {
  //   this.dataService.firstClick();
  // }
}
