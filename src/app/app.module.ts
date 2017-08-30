import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostAddComponent } from './post-add/post-add.component';

const appRoutes: Routes = [
  { path: 'postAdd', component: PostAddComponent },
  { path: '',
    redirectTo: '/postAdd',
    pathMatch: 'full'
  },
  { path: '**', component: PostAddComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
