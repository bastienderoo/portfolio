import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './shared/header/header.component';

 const appRoutes: Routes = [
  { path: 'crisis-center', component: HeaderComponent },
//   { path: 'hero/:id',      component: HeroDetailComponent },
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '',
//     redirectTo: '/heroes',
//     pathMatch: 'full'
//   },
//   { path: '**', component: PageNotFoundComponent }
 ];

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(
  appRoutes,
  { enableTracing: true } // <-- debugging purposes only
),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
