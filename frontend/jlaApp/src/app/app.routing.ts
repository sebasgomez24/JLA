// https://angular.io/docs/ts/latest/guide/router.html
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { PropertyListComponent } from './property-list/property-list.component';

const appRoutes: Routes = [
    {
        path:"",
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path:"properties",
        component: PropertyListComponent,
        pathMatch: 'full'
    },
    {
        path:"properties/:slug",
        component: PropertyDetailComponent,
        pathMatch: 'full'
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}