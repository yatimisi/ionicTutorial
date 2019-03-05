import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      { path: '', redirectTo: 'home' , pathMatch: 'full'},
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'test1', loadChildren: '../test1/test1.module#Test1PageModule' },
      { path: 'test2', loadChildren: '../test2/test2.module#Test2PageModule' },
      { path: 'test3', loadChildren: '../test3/test3.module#Test3PageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
