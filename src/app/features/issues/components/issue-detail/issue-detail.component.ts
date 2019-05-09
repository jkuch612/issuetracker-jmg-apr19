import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CompleteIssue, UnassignIssue } from '../../actions/issue.action';
import { IssueListItem } from '../../model/issue';
import { selectIssueById, State } from '../../reducers';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit, OnDestroy {

  issue: IssueListItem;
  issue$: Observable<IssueListItem>;
  issueForm: FormGroup;
  hasErrors = false;
  developerForm: FormGroup;
  id: string;
  sub: Subscription;

  constructor(private formBuilder: FormBuilder, private store: Store<State>, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {

    this.issueForm = this.formBuilder.group({
      commitHash: ['', Validators.required]
    });

    this.sub = this.route.paramMap.subscribe(
      p => {
        this.id = p.get('id');
        this.issue$ = this.store.select(selectIssueById(this.id));
      }
    );
  }


  submit() {
    if (this.issueForm.valid) {
      const { commitHash } = this.issueForm.value;
      this.store.dispatch(new CompleteIssue(this.id, commitHash));
      this.router.navigate(['issues']);
      this.hasErrors = false;
    } else {
      this.hasErrors = true;
    }

  }

  unassign() {
    this.store.dispatch(new UnassignIssue(this.id));
    this.router.navigate(['issues']);
  }

  get commitHash() {
    return this.issueForm.get('commitHash');
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  get developer() {
    return this.developerForm.get('developer');
  }

}
