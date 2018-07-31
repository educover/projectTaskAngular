import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgDragDropModule } from 'ng-drag-drop';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { TaskItemComponent } from './task-item/task-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ColorPickerModule,
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
