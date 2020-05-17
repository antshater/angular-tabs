import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class TabsService {

  private index = 0;
  private labels$ = new BehaviorSubject<string[]>([]);
  private activeIndex$ = new BehaviorSubject<number>(0);

  constructor() { }

  getIndex(): number {
    return this.index ++;
  }

  setLabel(index: number, label: string): void {
    const labels = this.labels$.value;
    labels[index] = label;
    this.labels$.next(labels);
  }

  getLabels(): Observable<string[]> {
    return this.labels$.asObservable();
  }

  setActiveIndex(index: number): void {
    this.activeIndex$.next(index);
  }

  getActiveIndex(): Observable<number> {
    return this.activeIndex$.asObservable();
  }
}
