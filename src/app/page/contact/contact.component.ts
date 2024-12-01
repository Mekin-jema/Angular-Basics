import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html', // Link to the external HTML file
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule, CommonModule],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      console.log('Form Submitted!', this.contactData);
      alert('Thank you for reaching out! We will get back to you soon.');
      contactForm.reset();
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
