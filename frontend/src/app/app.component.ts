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
  @select() count; //same name
  // @select('count') counter; //If name change
  // @select(['messages','newmessage']) newmessage; //complex property
  // @select((s: IAppState)=>s.messages.newmessage) messageCount;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    // this.count++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
