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
  touchStartY = 0;
  swipeThreshold = 50;
  swipeHandled = false;
  swipeMode: 'touch' | 'pointer' | null = null;

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
    if (this.swipeMode && this.swipeMode !== 'touch') {
      return;
    }
    this.swipeMode = 'touch';
    this.swipeHandled = false;
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
  }

  onTouchMove(event: TouchEvent) {
    if (this.swipeMode !== 'touch') {
      return;
    }
    const touch = event.touches[0];
    const diffX = Math.abs(this.touchStartX - touch.clientX);
    const diffY = Math.abs(this.touchStartY - touch.clientY);

    if (diffX > diffY) {
      event.preventDefault();
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (this.swipeMode !== 'touch' || this.swipeHandled) {
      this.resetSwipe();
      return;
    }
    this.swipeHandled = true;

    const touchEndX = event.changedTouches[0].clientX;
    const touchEndY = event.changedTouches[0].clientY;
    const diffX = this.touchStartX - touchEndX;
    const diffY = Math.abs(this.touchStartY - touchEndY);

    if (Math.abs(diffX) >= 40 && diffY <= 80) {
      if (diffX > this.swipeThreshold) {
        this.nextFoto();
      } else if (diffX < -this.swipeThreshold) {
        this.prevFoto();
      }
    }

    this.resetSwipe();
  }

  onPointerDown(event: PointerEvent) {
    if (this.swipeMode && this.swipeMode !== 'pointer') {
      return;
    }
    this.swipeMode = 'pointer';
    this.swipeHandled = false;
    this.touchStartX = event.clientX;
    this.touchStartY = event.clientY;
  }

  onPointerMove(event: PointerEvent) {
    if (event.isPrimary) {
      const diffX = Math.abs(this.touchStartX - event.clientX);
      const diffY = Math.abs(this.touchStartY - event.clientY);
      if (diffX > diffY) {
        event.preventDefault();
      }
    }
  }

  onPointerUp(event: PointerEvent) {
    if (this.swipeMode !== 'pointer' || !event.isPrimary || this.swipeHandled) {
      this.resetSwipe();
      return;
    }
    this.swipeHandled = true;

    const diffX = this.touchStartX - event.clientX;
    const diffY = Math.abs(this.touchStartY - event.clientY);

    if (Math.abs(diffX) >= 40 && diffY <= 80) {
      if (diffX > this.swipeThreshold) {
        this.nextFoto();
      } else if (diffX < -this.swipeThreshold) {
        this.prevFoto();
      }
    }

    this.resetSwipe();
  }

  onTouchCancel() {
    this.resetSwipe();
  }

  private resetSwipe() {
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.swipeHandled = false;
    this.swipeMode = null;
  }

  confirmar() {
    window.open('https://form.jotform.com/261494475674672', '_blank');
  }
}
