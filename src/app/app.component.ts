import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
        group([
          query(':enter', [style({ opacity: 0, transform: 'translateY(10px)' }), animate('450ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))], { optional: true }),
          query(':leave', [style({ opacity: 1 }), animate('350ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'rushikesh-portfolio-bootstrap';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
