import { Component, HostBinding, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { TabsService } from '../tabs.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, OnChanges, OnDestroy {

  @HostBinding('class.active') private active: boolean;
  @Input() label: string;

  private index: number;

  private destroy$ = new Subject();

  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
    this.index = this.tabsService.getIndex();
    this.updateLabel();
    this.tabsService.getActiveIndex().pipe(
      takeUntil(this.destroy$)
    ).subscribe(activeIndex => this.active = this.index === activeIndex);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateLabel();
  }

  private updateLabel(): void {
    if (this.index === undefined) {
      return;
    }

    this.tabsService.setLabel(this.index, this.label);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
