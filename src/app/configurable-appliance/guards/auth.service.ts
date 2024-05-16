import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router : Router
  ){

  }
  private isAuthenticatedd = false;

  checkVirtualID(virtualID): any | null {
    const storedVirtualID = localStorage.getItem('VirtualID');
    if (storedVirtualID) {
      this.isAuthenticatedd = true;
      return parseInt(storedVirtualID, 10);
    }
  

    if (virtualID) {
      const match = environment.VIRTUAL_ID_LIST.find(item => item.virtualID === virtualID);
  
      if (match) {
        this.isAuthenticatedd = true;
  
        localStorage.setItem('VirtualID', match.virtualID.toString());
  
        // setTimeout(() => {
        //   localStorage.removeItem('VirtualID');
        //   this.isAuthenticatedd = false;
        // }, 5000); 
  
        return match.virtualID;
      } else {
        this.isAuthenticatedd = false;
        return null;
      }
    } else {
      this.isAuthenticatedd = false;
      return null;
    }
  }  
  
  logout(): void {
    localStorage.removeItem('VirtualID');
    this.router.navigate(['/configuration/login']);
    this.isAuthenticatedd = false;
  }

  isAuthenticated(): boolean {
    return this.isAuthenticatedd;
  }
}
