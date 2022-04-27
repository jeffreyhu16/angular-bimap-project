import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchGridComponent } from './components/search-grid/search-grid.component';
import { SourceSettingsComponent } from './components/source-settings/source-settings.component';
import { DisplaySettingsComponent } from './components/display-settings/display-settings.component';

const routes: Routes = [
    { path: 'historyDiscover', component: SearchGridComponent },
    { path: 'report', redirectTo: 'report/sourceSettings', pathMatch: 'full' },
    { path: 'report/sourceSettings', component: SourceSettingsComponent },
    { path: 'report/displaySettings', component: DisplaySettingsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
