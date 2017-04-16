import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { ColumnComponent } from './column.component';
import { BlockComponent } from './block.component';
import { AddBlockComponent } from './add-block.component';
import { BlockService } from './block.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations:
  [
   AppComponent,
   ColumnComponent,
   BlockComponent,
   AddBlockComponent,
  ],
  providers:    [ BlockService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }