import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsGroupComponent } from './tabs-group/tabs-group.component';
import { TabComponent } from './tab/tab.component';



@NgModule({
    declarations: [TabsGroupComponent, TabComponent],
  exports: [
    TabsGroupComponent,
    TabComponent
  ],
    imports: [
        CommonModule
    ]
})
export class TabsModule { }
