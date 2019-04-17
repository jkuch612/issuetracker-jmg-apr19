import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-developer-entry',
  templateUrl: './developer-entry.component.html',
  styleUrls: ['./developer-entry.component.css']
})
export class DeveloperEntryComponent implements OnInit {

  developerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.developerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      department: ['ero'],
      emailAdress: ['', {
        validators: [Validators.required, Validators.email, notThatPersonValidator('joe@aol.com')],
        updateOn: 'blur'
      }]
    });

    this.developerForm.valueChanges.subscribe(v => console.log(v));
  }


  onSubmit(focusme: HTMLInputElement) {
    console.log(this.developerForm.value);
    this.developerForm.reset();
    focusme.focus();
  }

  get firstName() {
    return this.developerForm.get('firstName');
  }

  get lastName() {
    return this.developerForm.get('lastName');
  }

  get emailAdress() {
    return this.developerForm.get('emailAdress');
  }

}

function notThatPersonValidator(name: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value === name) {
      return {
        jerk: 'we do not want that person on our team!'
      };
    } else {
      return null;
    }
  };
}
