import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ContactPageModule } from '../contact/contact.module';
import { AboutPageModule } from '../about/about.module';
import { HomePageModule } from '../home/home.module';
// Adding the tabs menu to other pages as well
import { CVPageModule } from '../cv/cv.module';
import { ExtraCVPageModule } from '../extra-cv/extra-cv.module';
import { ProjectsPageModule } from '../projects/projects.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    AboutPageModule,
    ContactPageModule,
    // Adding the ipmports here too
    CVPageModule,
    ProjectsPageModule,
    ExtraCVPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
