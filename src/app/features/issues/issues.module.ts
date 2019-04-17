import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DeveloperEntryComponent } from './components/developer-entry/developer-entry.component';
import { DeveloperListSorterComponent } from './components/developer-list-sorter/developer-list-sorter.component';
import { DeveloperListComponent } from './components/developer-list/developer-list.component';
import { DevelopersComponent } from './containers/developers/developers.component';
import { OverviewComponent } from './containers/overview/overview.component';
import { AppStartUpEffect } from './effects/app-startup.effects';
import { DeveloperEffects } from './effects/developer.effects';
import { IssuesRoutingModule } from './issues-routing.module';
import { IssuesComponent } from './issues.component';
import { featureName, reducers } from './reducers';


@NgModule({
  declarations: [IssuesComponent, DevelopersComponent, OverviewComponent, DeveloperEntryComponent, DeveloperListComponent, DeveloperListSorterComponent],
  imports: [
    CommonModule,
    IssuesRoutingModule,
    StoreModule.forFeature(featureName, reducers),
    EffectsModule.forFeature([AppStartUpEffect, DeveloperEffects]),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class IssuesModule { }
