import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  // templateUrl: './navbar.component.html',
  template:`

  <div class="cloudNav">
    <p class="logo">
      <img  src="assets/images/comsoftlogo.png" alt="logo"/>
    </p>


    <p class="menuIcon">
      <button mat-button (click)="showSection1 =!showSection1" >
        <mat-icon *ngIf="!showSection1" class="example-icon">
          menu
        </mat-icon>
        <mat-icon *ngIf="showSection1" class="example-icon">
          cancel
        </mat-icon>
        </button>
    </p>
<div *ngIf="showSection1" id="navbar">
  <ul>
  <li routerLink="/dashboard" routerLinkActive="skip">Dashboard</li>
  <li routerLink="/create" routerLinkActive="skip">Add Book</li>
  <li routerLink="/books" routerLinkActive="skip" >Books</li>
  <li routerLink="/" routerLinkActive="skip">Gallary</li>
  </ul>
<div>
  </div>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public toggleNav =true
  constructor() { }

  ngOnInit() {
  }

}
