import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { BookingManagementComponent } from './admin/booking-management/booking-management.component';
import { PaymentManagementComponent } from './admin/payment-management/payment-management.component';
import { ReportingComponent } from './admin/reporting/reporting.component';
import { PromotionsComponent } from './admin/promotions/promotions.component';
import { EnquiryFormComponent } from './user/enquiry-form/enquiry-form.component';
import { LoginComponent } from './user/login/login.component';
import { MovingRequirementComponent } from './user/moving-requirement/moving-requirement.component';
import { QuoteComponent } from './user/quote/quote.component';
import { PaymentComponent } from './user/payment/payment.component';
import { LiveTrackingComponent } from './user/live-tracking/live-tracking.component';
import { CustomersupportComponent } from './user/customersupport/customersupport.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { MoverRegistrationComponent } from './mover/mover-registration/mover-registration.component';
import { MovingEquipmentComponent } from './mover/moving-equipment/moving-equipment.component';
import { BookingComponent } from './mover/booking/booking.component';
import { EarningTrackingComponent } from './mover/earning-tracking/earning-tracking.component';
import { RouteOptimizationComponent } from './mover/route-optimization/route-optimization.component';
import { ReviewManagementComponent } from './mover/review-management/review-management.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MoverPanelComponent } from './mover-panel/mover-panel.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'users', component: UserPanelComponent },
  { path: 'movers', component: MoverPanelComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'booking-management', component: BookingManagementComponent },
  { path: 'payment-management', component: PaymentManagementComponent },
  { path: 'promotion', component: PromotionsComponent },
  { path: 'reporting', component: ReportingComponent },
  { path: 'enquiry', component: EnquiryFormComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'moving-requirement', component: MovingRequirementComponent },
  { path: 'quote', component: QuoteComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'live-tracking', component: LiveTrackingComponent },
  { path: 'reviews', component: ReportingComponent },
  { path: 'support', component: CustomersupportComponent },
  { path: 'mover-registration', component: MoverRegistrationComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'moving-equipment', component: MovingEquipmentComponent },
  { path: 'earning-tracking', component: EarningTrackingComponent },
  { path: 'route-optimization', component: RouteOptimizationComponent },
  { path: 'review-management', component: ReviewManagementComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
