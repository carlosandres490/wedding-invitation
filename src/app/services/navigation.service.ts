import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private isInternalNavigation = false;

  setInternalNavigation(value: boolean) {
    this.isInternalNavigation = value;
  }

  isNavigatedInternally(): boolean {
    return this.isInternalNavigation;
  }
}
