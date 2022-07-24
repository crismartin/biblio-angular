import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IntranetComponent} from './intranet.component';
import {LoanComponent} from './loan/loan.component';

const routes: Routes = [
  {
    path: '', // 'intranet' to forRoot
    children: [ // or path: 'intranet/articles'
      {path: '', component: IntranetComponent},
      {path: 'loan', component: LoanComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule {
}
