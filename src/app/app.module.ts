import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { PaymentComponent } from './user/payment/payment.component';
import { CustomersupportComponent } from './user/customersupport/customersupport.component';
import { QuoteComponent } from './user/quote/quote.component';
import { LiveTrackingComponent } from './user/live-tracking/live-tracking.component';
import { MovingRequirementComponent } from './user/moving-requirement/moving-requirement.component';
import { RatingReviewsComponent } from './user/rating-reviews/rating-reviews.component';
import { BookingComponent } from './mover/booking/booking.component';
import { RouteOptimizationComponent } from './mover/route-optimization/route-optimization.component';
import { ReviewManagementComponent } from './mover/review-management/review-management.component';
import { EarningTrackingComponent } from './mover/earning-tracking/earning-tracking.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { BookingManagementComponent } from './admin/booking-management/booking-management.component';
import { ReportingComponent } from './admin/reporting/reporting.component';
import { PaymentManagementComponent } from './admin/payment-management/payment-management.component';
import { PromotionsComponent } from './admin/promotions/promotions.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnquiryFormComponent } from './user/enquiry-form/enquiry-form.component';
import { MoverRegistrationComponent } from './mover/mover-registration/mover-registration.component';
import { MoverEarningService } from './mover-earning.service';
import { MovingEquipmentComponent } from './mover/moving-equipment/moving-equipment.component';
import { MovingEquipmentService } from './moving-equipment.service';
import { ReviewManagementService } from './review-management.service';
import { PaymentManagementService } from './payment-management.service';
import { BookingManagementService } from './booking-management.service';
import { ReportingService } from './reporting.service';
import { PromotionService } from './promotion.service';
import { UserService } from './user.service';
import { MoverService } from './mover.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { MoverPanelComponent } from './mover-panel/mover-panel.component';
import { UserdataService } from './userdata.service';
import { RegistrationService } from './registration.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './login.service';
import { MovingRequirementService } from './moving-requirement.service';
import { LiveTrackingService } from './live-tracking.service';
import { CustomerSupportService } from './customersupport.service';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    PaymentComponent,
    CustomersupportComponent,
    QuoteComponent,
    LiveTrackingComponent,
    MovingRequirementComponent,
    RatingReviewsComponent,
    BookingComponent,
    RouteOptimizationComponent,
    ReviewManagementComponent,
    EarningTrackingComponent,
    DashboardComponent,
    UserManagementComponent,
    BookingManagementComponent,
    ReportingComponent,
    PaymentManagementComponent,
    PromotionsComponent,
    EnquiryFormComponent,
    MoverRegistrationComponent,
    MovingEquipmentComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminPanelComponent,
    UserPanelComponent,
    MoverPanelComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    SignupService,
    UserService,
    RegistrationService,
    LoginService,
    MovingRequirementService,
    LiveTrackingService,
    CustomerSupportService,
    MoverService,
    MoverEarningService,
    MovingEquipmentService,
    ReviewManagementService,
    PaymentManagementService,
    BookingManagementService,
    ReportingService,
    PromotionService,
    UserdataService,
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
