import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddIssue } from '../../actions/issue.action';
import { State } from '../../reducers';

@Component({
  selector: 'app-issue-entry',
  templateUrl: './issue-entry.component.html',
  styleUrls: ['./issue-entry.component.css']
})
export class IssueEntryComponent implements OnInit {

  hasErrors = false;
  issueForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store<State>) { }

  ngOnInit() {
    this.issueForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(200)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]]
    });
  }

  onSubmit(focusme: HTMLInputElement) {
    if (this.issueForm.valid) {
      const { title, description } = this.issueForm.value;
      this.store.dispatch(new AddIssue(title, description));
      this.issueForm.reset();
      focusme.focus();
      this.hasErrors = false;
    } else {
      this.hasErrors = true;
    }
  }

  get title() {
    return this.issueForm.get('title');
  }

  get description() {
    return this.issueForm.get('description');
  }

}
