import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private userData: any = {};

  setUserData(data: any) {
    this.userData = { ...this.userData, ...data };
  }

  getUserData() {
    return this.userData;
  }

  clearUserData() {
    this.userData = {};
  }
}
