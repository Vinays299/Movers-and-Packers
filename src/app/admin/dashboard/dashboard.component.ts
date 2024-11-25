import { Component, OnInit } from '@angular/core';
import { MoverService } from '../../mover.service';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 0;
  totalMovers: number = 0;
  totalOrders: number = 0; 
  totalRevenue: number = 0; 

  constructor(
    private userService: UserService,
    private moverService: MoverService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    this.userService.getTotalUsers().subscribe((data: number) => {
      this.totalUsers = data;
    });

    this.moverService.getTotalMovers().subscribe((data: number) => {
      this.totalMovers = data;
    });

    // You can also add similar calls for orders and revenue if you have those services.
    // this.orderService.getTotalOrders().subscribe(data => {
    //   this.totalOrders = data;
    // });

    // this.revenueService.getTotalRevenue().subscribe(data => {
    //   this.totalRevenue = data;
    // });
  }
}
