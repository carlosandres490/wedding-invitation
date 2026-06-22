// app/pages/invitacion/invitacion.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-invitacion',
  templateUrl: './invitacion.component.html',
  styleUrls: ['./invitacion.component.css']
})
export class InvitacionComponent {
  fotoActual = 0;
  touchStartX = 0;

  fotos: string[] = [
    'assets/img/fotoUno.png',
    'assets/img/fotoDos.png',
    'assets/img/fotoTres.png',
    'assets/img/fotoCuatro.png',
    'assets/img/fotoCinco.png',
    'assets/img/fotoSeis.png',
    'assets/img/fotoSiete.png',
    'assets/img/fotoOcho.png',
    'assets/img/fotoNueve.png',
    'assets/img/fotoDiez.png',
    'assets/img/fotoOnce.png',
    'assets/img/fotoDoce.png'
  ];

  constructor(private router: Router, private navigationService: NavigationService) {}

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  volver() {
    this.navigationService.setInternalNavigation(false);
    this.router.navigate(['/']);
  }

  irADetalles() {
    this.navigationService.setInternalNavigation(true);
    this.router.navigate(['/detalles']);
  }

  prevFoto() {
    this.fotoActual = this.fotoActual > 0 ? this.fotoActual - 1 : this.fotos.length - 1;
  }

  nextFoto() {
    this.fotoActual = this.fotoActual < this.fotos.length - 1 ? this.fotoActual + 1 : 0;
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const touchEndX = event.changedTouches[0].clientX;
    const diff = this.touchStartX - touchEndX;
    
    // Si desliza más de 50px, navega
    if (diff > 50) {
      this.nextFoto(); // desliza hacia la izquierda = siguiente foto
    } else if (diff < -50) {
      this.prevFoto(); // desliza hacia la derecha = foto anterior
    }
  }

  confirmar() {
    alert('¡Gracias! Tu confirmación ha sido registrada. 💍');
  }
}
