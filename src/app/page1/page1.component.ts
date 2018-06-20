import { Component } from '@angular/core';
import { ActivatedRoute, Params, ParamMap } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
})
export class Page1Component {
    // constant for swipe action: left or right
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    
  constructor(private route: ActivatedRoute) {

  }
}