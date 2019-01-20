import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { AboutComponent } from './about/about.component';
import { GridComponentService } from './grid/grid.component.service';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent },
      { path: 'grid', component: GridComponent }
    ]
    ),
    HttpClientModule
  ],
  providers: [ GridComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
