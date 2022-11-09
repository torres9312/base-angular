import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarCollapseService } from '../../../shared/services/sidebar-collapse.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  collapsed : boolean = false;
  dropdownActive: any;
  username : any ;

  innerWidth?: number;

  constructor(
    private collapsedService : SidebarCollapseService,
    private router : Router,
  ) { }

  
  @HostListener('window:resize', ['$event'])
  onResize(event? : any) {
    this.innerWidth = window.innerWidth;   
  }


  ngOnInit(): void {
    if(window.innerWidth <= 856){
      this.collapsed = true;
      this.collapsedService.collapseMenu(this.collapsed);
      
    }
    this.collapsedService.getEmittedValue()
    .subscribe(value => this.collapsed = value);
  }


  collapseMenu(){
    this.collapsed = !this.collapsed;
    this.collapsedService.collapseMenu(this.collapsed);
  }

  openMenu(event : any){
    let arrayList : Array<string> = [];

    event.target.nextElementSibling.classList.forEach((element: any) => {
      arrayList.push(element);
    });
    
    if(arrayList.includes('show')){
      event.target.nextElementSibling.classList.remove('show');
    }else{
      event.target.nextElementSibling.classList.add('show');
    }
  }

  logout(){
    sessionStorage.clear();

    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
    
    
  }

}
