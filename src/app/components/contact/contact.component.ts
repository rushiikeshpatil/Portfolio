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
  send() {
    // This is a placeholder. Wire your backend or mailto link as needed.
    alert('Thanks! I will contact you soon.');
  }
}
