import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedureDetailsComponent } from './views/procedure-details/procedure-details.component';
import { HomeComponent } from './views/home/home.component';
import { StudioDetailsComponent } from './views/studio-details/studio-details.component';
import { ProductComponent } from './views/product/product.component';
import { ProcedureComponent } from './views/procedure/procedure.component';

const routes: Routes = [
  {
    path: 'procedimentos',
    pathMatch: 'prefix',
    component: ProcedureComponent
  },
  {
    path: 'produtos',
    pathMatch: 'prefix',
    component: ProductComponent
  },
  {
    path: 'studio',
    pathMatch: 'prefix',
    component: StudioDetailsComponent
  },
  {
    path: 'procedimento/:slug',
    pathMatch: 'prefix',
    component: ProcedureDetailsComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { scrollPositionRestoration: "enabled", anchorScrolling: 'enabled' }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
