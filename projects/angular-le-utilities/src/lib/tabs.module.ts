import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabLabelComponent } from './tab-label/tab-label.component';
import { TabBodyComponent } from './tab-body/tab-body.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [TabLabelComponent, TabBodyComponent, TabItemComponent, TabsComponent],
  imports: [
    CommonModule
  ],
  exports: [TabLabelComponent, TabBodyComponent, TabItemComponent, TabsComponent]
})
export class TabsModule { }
