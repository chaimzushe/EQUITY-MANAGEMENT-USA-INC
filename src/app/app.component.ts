import { Component, OnInit } from '@angular/core';
import LogRocket from 'logrocket';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    const user =  {
      name: 'Abe katz',
      email: 'abekatz@gmail.vom'
    }
    LogRocket.init('mt2awk/say-kaddish');
    LogRocket.identify('equity-management', {
      release: 'b620fm',
      name: user.name,
      email: user.email,
    });
  }

}
