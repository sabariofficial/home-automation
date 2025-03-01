import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SignService } from "./sign.service";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private signService: SignService
    ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }



  ngOnInit(): void {

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    console.log(this.registerForm.value);
    this.submitted = true;
    if (this.registerForm.invalid) {
      alert('Err');
      return;
    }
    this.signService.setUserData(this.registerForm.value).subscribe( data => {
      console.log(data);
      this.registerForm.reset();
      alert("Profile Added Successfully!!");
    });
  }

}

