import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private readonly router: Router
  ) {}

  get isIndex(): boolean {
    return this.router.url === '/';
  }
}
