import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueAssignComponent } from './components/issue-assign/issue-assign.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { IssueEntryComponent } from './components/issue-entry/issue-entry.component';
import { DevelopersComponent } from './containers/developers/developers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { IssuesComponent } from './issues.component';

const routes: Routes = [
  {
    path: 'issues',
    component: IssuesComponent,
    children: [
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'developers',
        component: DevelopersComponent
      },
      {
        path: 'issuedetail/:id',
        component: IssueDetailComponent
      },
      {
        path: 'issueassign/:id',
        component: IssueAssignComponent
      },
      {
        path: 'issueentry',
        component: IssueEntryComponent
      },
      {
        path: '**',
        redirectTo: 'overview'
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssuesRoutingModule { }
