import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Adding the page-routes for the navigation
const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'CV', loadChildren: './cv/cv.module#CVPageModule' },
  { path: 'Projects', loadChildren: './projects/projects.module#ProjectsPageModule' },
  { path: 'About', loadChildren: './about/about.module#AboutPageModule' },
  { path: 'Contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'extraCV', loadChildren: './extra-cv/extra-cv.module#ExtraCVPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
