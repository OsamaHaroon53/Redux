import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT } from "./action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  count = 0;
  constructor(private ngRedux: NgRedux<IAppState>) {
    ngRedux.subscribe(() => {
      var store = ngRedux.getState();
      this.count = store.count;
    })
  }
  inc() {
    // this.count++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
