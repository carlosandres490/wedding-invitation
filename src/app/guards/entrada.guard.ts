import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NavigationService } from '../services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class EntradaGuard implements CanActivate {
  constructor(private router: Router, private navigationService: NavigationService) {}

  canActivate(): boolean {
    if (!this.navigationService.isNavigatedInternally()) {
      // Si no navegó internamente (es un refresh), redirige a entrada
      this.router.navigate(['']);
      return false;
    }
    
    // Permite acceso
    return true;
  }
}
