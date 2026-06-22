// app/pages/detalles/detalles.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent {
  constructor(private router: Router, private navigationService: NavigationService) {}

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  volver() {
    this.navigationService.setInternalNavigation(true);
    this.irAInvitacion();
  }

  irAInvitacion() {
    this.router.navigate(['/invitacion']);
  }
}
