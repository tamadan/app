import { Component } from '@angular/core';
import { Params, OnsNavigator} from 'ngx-onsenui';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './page1.component.html',
    styleUrls: ['./page1.component.scss']
})
export class Page1Component {
    // constant for swipe action: left or right
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    
  constructor(private navi: OnsNavigator) {

  }
    // our list of avatars
    avatars = [
        {
            name: 'kristy',
            image: 'http://semantic-ui.com/images/avatar2/large/kristy.png',
            visible: true
        },
        {
            name: 'matthew',
            image: 'http://semantic-ui.com/images/avatar2/large/matthew.png',
            visible: false
        },
        {
            name: 'chris',
            image: 'http://semantic-ui.com/images/avatar/large/chris.jpg',
            visible: false
        },
        {
            name: 'jenny',
            image: 'http://semantic-ui.com/images/avatar/large/jenny.jpg',
            visible: false
        }
    ];

    // action triggered when user swipes
    swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
      console.log(currentIndex + " "+action);
      
        // out of range
        if (currentIndex > this.avatars.length || currentIndex < 0) return;

        let nextIndex = 0;

        // swipe right, next avatar
        if (action === this.SWIPE_ACTION.RIGHT) {
            const isLast = currentIndex === this.avatars.length - 1;
            nextIndex = isLast ? 0 : currentIndex + 1;
        }

        // swipe left, previous avatar
        if (action === this.SWIPE_ACTION.LEFT) {
            const isFirst = currentIndex === 0;
            nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
        }

        // toggle avatar visibility
        this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
    }
}