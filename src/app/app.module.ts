import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PostAddComponent } from './post-add/post-add.component';
import { ViewAddComponent } from './view-add/view-add.component';
import { addsReducer } from './store/adds-store';
import { AddsService } from './core/adds.service';

const appRoutes: Routes = [
  { path: 'postAdd', component: PostAddComponent },
  { path: 'viewAdd', component: ViewAddComponent },
  { path: '',
    redirectTo: '/postAdd',
    pathMatch: 'full'
  },
  { path: '**', component: PostAddComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    ViewAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({ adds: addsReducer })
  ],
  providers: [
    AddsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
