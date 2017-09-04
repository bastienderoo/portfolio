import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {}
