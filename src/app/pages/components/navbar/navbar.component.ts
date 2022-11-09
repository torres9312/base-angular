import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pageScroll = false;

  constructor() { }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event : any) {
    /* console.log(window.scrollY); */
    if(window.scrollY  > 70){
      if(!this.pageScroll){
          this.pageScroll = true;
      }
    }else if(window.scrollY === 0){
      this.pageScroll = false;
    }
  }

  ngOnInit(): void {

    

  }

}
