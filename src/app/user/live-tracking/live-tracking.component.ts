import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LiveTrackingService } from '../../live-tracking.service';


@Component({
  selector: 'app-live-tracking',
  templateUrl: './live-tracking.component.html',
  styleUrls: ['./live-tracking.component.css']
})
export class LiveTrackingComponent {

  trackingForm: FormGroup;
  trackingInfo: string | null = null;

  constructor(private fb: FormBuilder, private liveTrackingService: LiveTrackingService) {
    this.trackingForm = this.fb.group({
      trackingNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.trackingForm.valid) {
      const trackingNumber = this.trackingForm.value.trackingNumber;
      this.trackPackage(trackingNumber);
    }
  }

  trackPackage(trackingNumber: string) {
    this.liveTrackingService.trackPackage(trackingNumber).subscribe(
      response => {
        // Process the response from the API
        this.trackingInfo = `Package ${trackingNumber} is currently in transit.`;
        // You can extract more details from the response as needed
      },
      error => {
        console.error('Error tracking package:', error);
        this.trackingInfo = 'Unable to retrieve tracking information. Please try again.';
      }
    );
  }
}
