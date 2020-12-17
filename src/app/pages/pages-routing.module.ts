import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./overview/overview.module').then((m) => m.OverviewModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
