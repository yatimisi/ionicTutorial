import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'test1', loadChildren: './test1/test1.module#Test1PageModule' },
  { path: 'test2', loadChildren: './test2/test2.module#Test2PageModule' },
  { path: 'test3', loadChildren: './test3/test3.module#Test3PageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
