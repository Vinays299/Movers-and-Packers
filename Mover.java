// mover.model.ts
export interface Mover {
  id?: number; // Optional, will be auto-generated
  name: string;
  contactNumber: string;
  email: string;
  serviceAreas: string;
  experience: number; // In years
}
