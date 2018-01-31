import { Component, OnInit } from '@angular/core';
import {User} from '../users/modele/user';
import {UserService} from '../users/service/user.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './assets/inscription.component.html',
  styleUrls: ['./assets/inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inscriptionForm: FormGroup;
  email: string;
  password: string;
  confirmPass: string;
  statusCode: number;
  titleAlert = 'This field is required';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
      this.inscriptionForm = formBuilder.group({
        'emailCtrl': [null, Validators.compose([Validators.required,Validators.pattern("^[a-z]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
        'passwordCtrl': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
        'confirmPassCtrl': [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(20)])],
        'validate': ''
      },{validator: this.checkIfMatchingPasswords('passwordCtrl', 'confirmPassCtrl')});
       );
   }

  submitted = false;

  onSubmit() { this.submitted = true; }

  user = new User(1,"chris","paul","beezy@easy.fr",'',[],2);

  // A enlever si ça marhce
  get diagnostic() { return JSON.stringify(this.user); }

  ngOnInit() {
    this.inscriptionForm.get('validate').valueChanges.subscribe(

      (validate) => {

        if( this.inscriptionForm.get('password') !== this.InscriptionComponent.get('confirmPass')) {

        }

        if (validate === '1') {
          this.inscriptionForm.get('email').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.inscriptionForm.get('pass').setValidators(Validators.required);
        }
        this.inscriptionForm.get('confirmPass').updateValueAndValidity();

      });
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
          return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
              return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
          }
  }


  addUser(user){
    this.email = user.email;
    this.password = user.password;
    this.userService.addUser(user)
          .subscribe(
            successCode => {
              this.statusCode = successCode;
            },
            errorCode => {
              this.statusCode = errorCode;
            });

            setTimeout(() => {
              this.backToDashboard();
            }, 1500);
    }

    backToDashboard() {
      this.router.navigate(['']);
    }

}
