import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PageToggleService {

  constructor(private router: Router) {
  }

  goPage(target: string) {
    this.router.navigateByUrl(target);
  }

}
