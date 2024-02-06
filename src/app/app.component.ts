import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'i2c-angular';
  formData = {
    name: '',
    company: '',
    email: ''
  };

  submitForm(): void {
    // debugger
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    const emailInput = document.getElementById('email') as HTMLInputElement | null;

    let isValid = true;

    const nameError = document.getElementById('nameError') as HTMLElement | null;
    const emailError = document.getElementById('emailError') as HTMLElement | null;

    if (nameInput && nameInput.checkValidity()) {
      if (nameError) nameError.textContent = '';
    } else {
      isValid = false;
      if (nameError) nameError.textContent = 'Please enter your name.';
    }    

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput && emailRegex.test(emailInput.value)) {
      if (emailError) emailError.textContent = '';
    } else {
      isValid = false;
      if (emailError) emailError.textContent = 'Please enter a valid email address.';
    }

    if (isValid) {
      console.log('Form submitted successfully!');
      this.reloadPage();
    } else {
      alert('Please fill in all required fields.');
    }
  }
  reloadPage() {
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

}
