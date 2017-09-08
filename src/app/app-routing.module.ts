import { NgModule }     from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { HelloComponent } from './hello/hello.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PersonnalProjectsComponent } from './personnal-projects/personnal-projects.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
 { path: '', component: HelloComponent },
 { path: 'about-me', component: AboutMeComponent },
 { path: 'personal-projects', component: PersonnalProjectsComponent },
 { path: 'my-projects', component: MyProjectsComponent },
 { path: 'contact', component: ContactComponent },

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
