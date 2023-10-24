import { Component,DoCheck,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  isRouteActive: boolean = false;
  constructor(private route:ActivatedRoute,private router:Router){
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRouteActive = this.route.snapshot.firstChild !== null;
      }
    });
  }
}
