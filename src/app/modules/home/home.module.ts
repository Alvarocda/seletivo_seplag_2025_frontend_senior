import { NgModule } from '@angular/core';

import { HomeComponent } from './container/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './home.routes';

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
