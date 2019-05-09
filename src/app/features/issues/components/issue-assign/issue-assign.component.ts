import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AssignIssue } from '../../actions/issue.action';
import { DeveloperListItem } from '../../model';
import { IssueListItem } from '../../model/issue';
import { selectDevelopersListItems, selectIssueById, State } from '../../reducers';

@Component({
  selector: 'app-issue-assign',
  templateUrl: './issue-assign.component.html',
  styleUrls: ['./issue-assign.component.css']
})
export class IssueAssignComponent implements OnInit, OnDestroy {

  issue: IssueListItem;
  issue$: Observable<IssueListItem>;
  hasErrors = false;
  developerForm: FormGroup;
  developer$: Observable<DeveloperListItem[]>;
  id: string;
  sub: Subscription;
  sub2: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<State>, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.developer$ = this.store.select(selectDevelopersListItems);
    this.developerForm = this.formBuilder.group({
      developer: ['', Validators.required]
    });
    this.issue = {
      id: '',
      title: '',
      dateSubmitted: '',
      dateCompleted: '',
      description: '',
      assignedDeveloper: '',
      status: '',
      commitHash: ''
    };


    this.sub = this.route.paramMap.subscribe(
      p => {
        this.id = p.get('id');
        this.issue$ = this.store.select(selectIssueById(this.id));
      }
    );
  }


  submit() {
    if (this.developerForm.valid) {
      const { developer } = this.developerForm.value;
      this.store.dispatch(new AssignIssue(this.id, developer));
      this.router.navigate(['issues']);
      this.hasErrors = false;
    } else {
      this.hasErrors = true;
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get developer() {
    return this.developerForm.get('developer');
  }

}
