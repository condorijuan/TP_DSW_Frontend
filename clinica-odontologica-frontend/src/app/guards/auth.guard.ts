import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  if (!localStorage.getItem('token')) {
    return inject(Router).createUrlTree(['/login']);
  }
  console.log('Puede acceder por autenticacion');
  return true;
};
