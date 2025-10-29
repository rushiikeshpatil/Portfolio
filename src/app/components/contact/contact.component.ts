import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  formSubmitted = false;
  isFormValid = false;

  send() {
    this.formSubmitted = true;
    
    // Check if form is valid
    this.isFormValid = this.validateForm();
    
    if (this.isFormValid) {
      // This is a placeholder. Wire your backend or mailto link as needed.
      alert('Thanks! I will contact you soon.');
      this.resetForm();
    }
  }

  validateForm(): boolean {
    return this.name.trim() !== '' && 
           this.email.trim() !== '' && 
           this.isValidEmail(this.email) && 
           this.message.trim() !== '';
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.message = '';
    this.formSubmitted = false;
    this.isFormValid = false;
  }
}
