import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {AuthGuard} from "../shared/guard";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'admin', canActivate: [AuthGuard] },
            { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
            { path: 'subscriber', loadChildren: './subscriber/subscriber.module#SubscriberModule' },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
