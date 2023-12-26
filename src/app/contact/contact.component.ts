import { Component,ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'as-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {

  formData = this.builder.group({
    emailAddress: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    subject: ['', Validators.required],
    body: ['', Validators.required]
  });
  isSubmitted = false;

  constructor(private builder: FormBuilder) { }

  onSubmit(): void {
    this.isSubmitted = true;
  }

  isEmailValid(): boolean | undefined {
    return this.formData.get('emailAddress')?.invalid && (this.formData.get('emailAddress')?.dirty ||
    this.formData.get('emailAddress')?.touched ||
    this.isSubmitted);
  }

  isNameValid(): boolean | undefined {
    return this.formData.get('name')?.invalid && (this.formData.get('name')?.dirty ||
    this.formData.get('name')?.touched ||
    this.isSubmitted);
  }

  isSubjectValid(): boolean | undefined {
    return this.formData.get('subject')?.invalid && (this.formData.get('subject')?.dirty ||
    this.formData.get('subject')?.touched ||
    this.isSubmitted);
  }

  isBodyValid(): boolean | undefined {
    return this.formData.get('body')?.invalid && (this.formData.get('body')?.dirty ||
    this.formData.get('body')?.touched ||
    this.isSubmitted);
  }
}
