import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { EmailService } from '../../../services/email.service';
import { CaptchaService } from '../../../services/captcha.service';

@Component({
  selector: 'contact-contact-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  contactForm: FormGroup;
  success: boolean;

  constructor(private emailService: EmailService, private fb: FormBuilder, private captchaService: CaptchaService) {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^(\+?1[-.\s]?)?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/)]],
      message: ['', Validators.required],
      subject: ['', Validators.required]
    });

    this.success = false;
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

  resolved(response: string | null) {
    this.captchaService.validate({ response: response }).subscribe({
      next: res => {
        this.success = res.success;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  onSubmit() {
    // Changed depricated direct function passing to latest approach of RxJs
    // subscribe(next,err,complete) -> subscribe({next,complete,error})
    if (this.contactForm.valid && this.success) {
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
