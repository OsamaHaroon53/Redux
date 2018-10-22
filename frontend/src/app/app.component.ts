import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from "./action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  @select() count;
  constructor(private ngRedux: NgRedux<IAppState>) {
  }
  inc() {
    // this.count++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
