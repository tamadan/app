import { Component, OnInit, Injectable, ElementRef } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WarifApiService} from '../warif-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { WarifStorageService} from '../warif-storage.service';
import 'rxjs/add/operator/map';
import * as anime from 'animejs';


@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {
  state = '';
  getUrl = 'https://api.foursquare.com/v2/venues/explore/';
  searchString: string;
  values: any[];
  title = '';
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  private inMove = false;
	private xDef = [0, 0, 0, 0, 0];
	private yDef = [0, 0, 0, 0, 0];
	private xStart = 0;
	private yStart = 0;
	private defHeight = window.screen.height;
	private defWidth = window.screen.width;
  private xPrevious = 0;
  
  private warifList = [];

  imgList = [];

  constructor(
    private el: ElementRef,
    private http: HttpClient,
    private service: WarifApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.search();
  }
  showDetail() {
    console.log('test');
  }

  search() {
    this.state = 'isLoading';
    // FIXME 一旦1にしてるけど、これは変えないとな〜
    // load filter options from localStorage
    this.service.getCouponList("1").subscribe(response => {
      let list = [];
      list = response['warif'];
      console.log(list[0]);
      this.values = list;
      this.values = list;
      this.title = list[0]['warif_name'];
      for (const l of list) {
        this.imgList.push(l['warif_image_url']);
        this.warifList.push(l['warif_name']);
      }
    });

  }

  searchCategory() {
  }
  searchMap() {
    this._router.navigate(['/map']);
  }
  searchWord() {

  }

  cellClick(id) {
    // this._router.navigate(['/info', id]);
    this._router.navigate(['/warif']);

  }
  //  // action triggered when user swipes
  // swipe(currentIndex: number, action = this.SWIPE_ACTION.RIGHT) {
  //   // out of range
  //   console.log(currentIndex  + action);
  // }
  doFab() {
		alert('あ');
  }

  clickWarif($event) {
    console.log($event);
    console.log(this.defWidth);
    console.log(this.defWidth / $event.target.clientWidth);


    this.el.nativeElement.getElementsByClassName('speed-dial')[0].hide();

    anime({
      targets: '.wrapper',
      easing: 'easeOutQuart',
      height: '100%',
      duration: 100,
      loop: false
    });

    anime.timeline().add({
      targets: '.card.card--material:not(.swiper-slide-active)',
      easing: 'easeOutQuart',
      opacity: [1, 0],
      translateY: 20,
      duration: 400,
      loop: false

    }).add({
      targets: '.list-wrapper',
      offset: '-=600',
      easing: 'easeInOutCirc',
      marginTop: ['30%','5%'],
      duration: 800,
      loop: false,
    });
    anime({
      targets: $event.target,
      delay: '200',
      easing: 'easeOutQuart',
      width: this.defWidth,
      height: this.defHeight-30,
      left: 0,
      top: 0,
      zIndex: 10,
      loop: false,
      duration: 500,
      margin: 0

    })
  }
  
  swipeWarif($event, swipeLeft: boolean) {
    console.log(this.el.nativeElement.getElementsByClassName('swiper-slide-left')[0].style);
    console.log(this.el.nativeElement.getElementsByClassName('swiper-slide-prev')[0].style);
    
    // TODO: どんなブラウザでも真ん中に来るように自動計算しないといけない
    if (swipeLeft) {
      anime.timeline().add({
        targets: 'div.card--material.swiper-slide:nth-child(2)',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: -15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: 2,
            duration: 100
          },
          {
            value: 6,
            duration: 50
          },
          {
            value: 12,
            duration: 250
          }
        ],
        opacity: [1, 0],
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(3)',
        offset: '-=1000',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: -15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: 1,
            duration: 100
          },
          {
            value: 5,
            duration: 50
          },
          {
            value: 11,
            duration: 250
          }
        ],
        zIndex: {
          value: [2, 1],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.swiper-slide-active',
        offset: '-=900',
        easing: 'easeOutCubic',
        translateX: [
          
          {
            value: -121,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: 2,
            duration: 100
          },
          {
            value: 6,
            duration: 50
          },
          {
            value: 15,
            duration: 250
          }
        ],
        zIndex: {
          value: [3, 2],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(5)',
        offset: '-=800',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: -117,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: -10,
            duration: 100
          },
          {
            value: -12,
            duration: 50
          },
          {
            value: -15,
            duration: 250
          }
        ],
        zIndex: {
          value: [2, 3],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(6)',
        offset: '-=800',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: -15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: -8,
            duration: 100
          },
          {
            value: -10,
            duration: 50
          },
          {
            value: -11,
            duration: 250
          }
        ],
        zIndex: {
          value: [1, 2],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(7)',
        offset: '-=800',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: -15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: -5,
            duration: 100
          },
          {
            value: -12,
            duration: 50
          },
          {
            value: -15,
            duration: 250
          }
        ],
        zIndex: {
          value: [0, 1],
          round: true
        },
        opacity: 1,
        loop: false
      });
      this.title = this.warifList[2];
    } else {
      anime.timeline().add({
        targets: 'div.card--material.swiper-slide:nth-child(6)',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: 15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: 2,
            duration: 100
          },
          {
            value: 6,
            duration: 50
          },
          {
            value: 12,
            duration: 250
          }
        ],
        opacity: [1, 0],
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(5)',
        offset: '-=1000',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: 15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: 1,
            duration: 100
          },
          {
            value: 5,
            duration: 50
          },
          {
            value: 11,
            duration: 250
          }
        ],
        zIndex: {
          value: [2, 1],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.swiper-slide-active',
        offset: '-=900',
        easing: 'easeOutCubic',
        translateX: [
          
          {
            value: 121,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: 2,
            duration: 100
          },
          {
            value: 6,
            duration: 50
          },
          {
            value: 15,
            duration: 250
          }
        ],
        zIndex: {
          value: [3, 2],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(3)',
        offset: '-=800',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: 117,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: -10,
            duration: 100
          },
          {
            value: -12,
            duration: 50
          },
          {
            value: -15,
            duration: 250
          }
        ],
        zIndex: {
          value: [2, 3],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(2)',
        offset: '-=800',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: 15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: -8,
            duration: 100
          },
          {
            value: -10,
            duration: 50
          },
          {
            value: -11,
            duration: 250
          }
        ],
        zIndex: {
          value: [1, 2],
          round: true
        },
        loop: false
      }).add({
        targets: 'div.card--material.swiper-slide:nth-child(1)',
        offset: '-=800',
        easing: 'easeOutCubic',
        translateX: [
  
          {
            value: 15,
            duration: 400
          }
  
        ],
        translateY: [
          {
            value: -5,
            duration: 100
          },
          {
            value: -12,
            duration: 50
          },
          {
            value: -15,
            duration: 250
          }
        ],
        zIndex: {
          value: [0, 1],
          round: true
        },
        opacity: 1,
        loop: false
      });
      this.title = this.warifList[1];
    }
    
    // TODO ここにDOMを操作する処理を入れる

  }
}
