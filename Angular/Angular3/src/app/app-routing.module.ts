import { NgModule } from '@angular/core';
import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponente} from "./componentes/index";
import {ApiComponente} from "./componentes/api";

const routes: Routes = [
  {path:"",component:IndexComponente},
  {path:"index",component:IndexComponente},
  {path:"api",component:ApiComponente},
  {path:"**",component:IndexComponente}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);
*/