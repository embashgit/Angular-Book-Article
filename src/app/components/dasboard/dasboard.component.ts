import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit {
public name = "dashboard";

  constructor() { }

  ngOnInit() {
  }

}
