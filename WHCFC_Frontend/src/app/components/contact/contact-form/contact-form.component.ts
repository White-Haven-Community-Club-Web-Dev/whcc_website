import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmailService } from '../../../services/email.service';

@Component({
  selector: 'contact-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactForm: FormGroup;
  constructor(private emailService: EmailService, private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.pattern(/^(\+?1[-.\s]?)?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/)]],
      message: ['', Validators.required],
      subject: ['', Validators.required]
    });
  }

  // Toast message after contact form submitted successfully
  showToast(msg: string) {
    const el = document.getElementById('toast')!;
    el.textContent = msg;


    el.classList.remove('opacity-0', 'translate-x-5');
    el.classList.add('opacity-100', 'translate-x-0');


    setTimeout(() => {
      el.classList.remove('opacity-100', 'translate-x-0');
      el.classList.add('opacity-0', 'translate-x-5');
    }, 3000);
  }


  onSubmit() {
    // Changed depricated direct function passing to latest approach of RxJs
    // subscribe(next,err,complete) -> subscribe({next,complete,error})
    if (this.contactForm.valid) {
      let [firstname, ...lastname] = this.fullName.value.split(" ");
      lastname = lastname.join(" ")
      const formData = { firstname, lastname, ...this.contactForm.value }

      this.emailService.sendContactForm(formData).subscribe({
        next: (response) => {
          this.showToast("We've recieved your message!");
          this.contactForm.reset();
          // console.log(response);
        },
        error: (error) => {
          console.log(error);
        }
      });
    } else {
      this.contactForm.markAllAsTouched()
    }
  }

  get fullName() { return this.contactForm.get('fullName')! }
  get email() { return this.contactForm.get('email')! }
  get message() { return this.contactForm.get('message')! }
  get subject() { return this.contactForm.get('subject')! }
  get phone() { return this.contactForm.get('phone')! }

}
