import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCompleteComponent } from './issue-complete.component';

describe('IssueCompleteComponent', () => {
  let component: IssueCompleteComponent;
  let fixture: ComponentFixture<IssueCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
