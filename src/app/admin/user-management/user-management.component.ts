import { Component } from '@angular/core';
import { Mover } from '../../mover/mover.model';
import { User } from '../../user/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { MoverService } from '../../mover.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
  userForm: FormGroup;
  moverForm: FormGroup;
  users: User[] = [];
  movers: Mover[] = [];
  editingUserId: number | null = null;
  editingMoverId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private moverService: MoverService
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      role: ['Customer', Validators.required]
    });

    this.moverForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      vehicleType: ['', Validators.required],
      status: ['Active', Validators.required]
    });

    this.loadUsers();
    this.loadMovers();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
  }

  loadMovers() {
    this.movers = this.moverService.getMovers();
  }

  onUserSubmit() {
    if (this.userForm.valid) {
      if (this.editingUserId !== null) {
        this.userService.updateUser(this.editingUserId, this.userForm.value);
        this.editingUserId = null; 
      } else {
        this.userService.addUser(this.userForm.value);
      }
      this.loadUsers();
      this.userForm.reset();
    }
  }

  onMoverSubmit() {
    if (this.moverForm.valid) {
      if (this.editingMoverId !== null) {
        this.moverService.updateMover(this.editingMoverId, this.moverForm.value);
        this.editingMoverId = null; 
      } else {
        this.moverService.addMover(this.moverForm.value);
      }
      this.loadMovers();
      this.moverForm.reset();
    }
  }

  editUser(user: User) {
    if (user.id !== undefined) {
      this.editingUserId = user.id; 
      this.userForm.patchValue(user);
    }
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id);
    this.loadUsers();
  }

  editMover(mover: Mover) {
    if (mover.id !== undefined) {
      this.editingMoverId = mover.id; 
      this.moverForm.patchValue(mover);
    }
  }

  deleteMover(id: number) {
    this.moverService.deleteMover(id);
    this.loadMovers();
  }
}
