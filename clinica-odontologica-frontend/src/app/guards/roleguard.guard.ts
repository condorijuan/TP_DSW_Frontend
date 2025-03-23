import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';



export const roleguardGuard: CanActivateFn = (route, state) => {
  const tokenString = localStorage.getItem('token');
  const roles = route.data?.['role'];
  if (tokenString) {
    const data = jwtDecode<any>(tokenString);
    if (Array.isArray(roles) && roles.includes(data.tipo)) {
      console.log('Puede acceder por rol con array');
      return true;
    }
    else if (data.tipo === roles) {
      return true;
    }
    else {
      return inject(Router).createUrlTree(['/login']);
    }
  }
  return inject(Router).createUrlTree(['/login']);
};
