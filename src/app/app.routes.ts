import { ChildWidgetComponent } from './widget/child-widget/child-widget.component';
import { Routes } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';
// import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/popular' },
  { path: ':id', component: WidgetComponent },
  { path: '**', redirectTo: '/popular' },
];
