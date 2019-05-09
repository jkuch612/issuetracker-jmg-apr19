import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { UpdateIssue } from '../../actions/issue.action';
import { IssueListItem } from '../../model/issue';
import { State } from '../../reducers';
import { IssueEntity } from '../../reducers/issues.reducer';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueListComponent implements OnInit {

  constructor(private store: Store<State>) { }

  @Input() listType: string;
  @Input() issues: IssueListItem[];

  ngOnInit() {

  }

  unassignItem(issue: IssueListItem) {
    const update: Update<IssueEntity> = {
      id: issue.id,
      changes: {
        assignedDeveloper: 'N/A',
        status: 'unassigned'
      }
    }
    this.store.dispatch(new UpdateIssue(update));
  }
}
