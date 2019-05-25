import { Component, OnInit } from '@angular/core';

@Component({

  // styleUrls: ['./welcome.component.css'],
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  // template: `

  // `,
  styles: ['h1 { font-weight: normal;}']
})
export class WelcomeComponent implements OnInit {
  public welcome = "Logger form"
  constructor() { }

  ngOnInit() {
  }

  public loggerHandler(message) {
    console.log(message)
  }

}
