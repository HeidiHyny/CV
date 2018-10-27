import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
// Adding the new pages here
import { CVPage } from '../cv/cv.page';
import { ExtraCVPage } from '../extra-cv/extra-cv.page';
import { ProjectsPage } from '../projects/projects.page';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        outlet: 'home',
        component: HomePage
      },
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      // Adding the new pages routes and outlets here as well
      {
        path: 'CV',
        outlet: 'CV',
        component: CVPage
      },
      {
        path: 'extra-cv',
        outlet: 'extra-cv',
        component: ExtraCVPage
      }
      ,
      {
        path: 'projects',
        outlet: 'projects',
        component: ProjectsPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home:home)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
