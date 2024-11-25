import { Injectable } from '@angular/core';
import { User } from './user/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'your-api-url/users'; 

  constructor(private http: HttpClient) {}

  getTotalUsers(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }

  private users: User[] = [];
  private nextId: number = 1;

  addUser(user: User) {
    user.id = this.nextId++;
    this.users.push(user);
  }  

  getUsers(): User[] {
    return this.users;
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  updateUser(id: number, updatedUser: User) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
    }
  }
}
