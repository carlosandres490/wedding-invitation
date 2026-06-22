// app/pages/entrada/entrada.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.css']
})
export class EntradaComponent {
  constructor(private router: Router, private navigationService: NavigationService) {}

  ingresar() {
    this.navigationService.setInternalNavigation(true);
    this.router.navigate(['/invitacion']);
  }
}
