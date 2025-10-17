export interface Contact {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  phone: { phoneNumber: string; phoneType: string };
  // etc...
}
