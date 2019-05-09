import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DeveloperEntryComponent } from './components/developer-entry/developer-entry.component';
import { DeveloperListSorterComponent } from './components/developer-list-sorter/developer-list-sorter.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { IssueEntryComponent } from './components/issue-entry/issue-entry.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { DevelopersComponent } from './containers/developers/developers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { AppStartUpEffect } from './effects/app-startup.effects';
import { DeveloperEffects } from './effects/developer.effects';
import { IssueEffects } from './effects/issue.effects';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { featureName, reducers } from './reducers';
import { IssueAssignComponent } from './components/issue-assign/issue-assign.component';
import { IssueCompleteComponent } from './components/issue-complete/issue-complete.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';


@NgModule({
  declarations: [IssuesComponent, DevelopersComponent, OverviewComponent, DeveloperEntryComponent,
    DeveloperListComponent, DeveloperListSorterComponent, IssueListComponent, IssueEntryComponent, IssueAssignComponent, IssueCompleteComponent, IssueDetailComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppStartUpEffect, DeveloperEffects, IssueEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class IssuesModule { }
