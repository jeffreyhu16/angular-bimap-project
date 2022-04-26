import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchGridComponent } from './components/search-grid/search-grid.component';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  { path: 'historyDiscover', component: SearchGridComponent },
  { path: 'report', component: ReportComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
