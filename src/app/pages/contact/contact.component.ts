import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = '';
  phone: string = '';
  subject: string = '';
  message: string = '';
  sendEmail() {
    const emailBody = `Name: ${this.name}\nPhone: ${this.phone}\nMessage: ${this.message}`;
    window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(emailBody)}`;
  }
}
