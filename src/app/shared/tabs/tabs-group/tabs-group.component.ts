import { Component, OnInit } from '@angular/core';
import { TabsService } from '../tabs.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs-group',
  templateUrl: './tabs-group.component.html',
  styleUrls: ['./tabs-group.component.scss'],
  providers: [TabsService]
})
export class TabsGroupComponent implements OnInit {

  labels$: Observable<string[]>;
  activeIndex$: Observable<number>;

  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
    this.labels$ = this.tabsService.getLabels();
    this.activeIndex$ = this.tabsService.getActiveIndex();
  }

  onClickTab(index: number): void {
    this.tabsService.setActiveIndex(index);
  }
}
