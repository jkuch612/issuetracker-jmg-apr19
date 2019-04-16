import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DeveloperListItem } from '../../model';

@Component({
  selector: 'app-developer-list',
  templateUrl: './developer-list.component.html',
  styleUrls: ['./developer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeveloperListComponent implements OnInit {

  @Input() developers: DeveloperListItem[];

  constructor() { }

  ngOnInit() {
  }

}
