import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProcessFileComponent } from './components/process-file/process-file.component';
import { AccessFilesService } from './services/access-files.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProcessFileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    AccessFilesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
