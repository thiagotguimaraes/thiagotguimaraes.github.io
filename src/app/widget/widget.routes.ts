import { WidgetComponent } from './widget.component';
// import { ChildWidgetComponent } from './child-widget/child-widget.component';

export const routes = [
  { path: 'widget', component: WidgetComponent },
  {
    path: '', component: WidgetComponent,
    // children: [
    //   {
    //     path: 'child-widget',
    //     component: ChildWidgetComponent,
    //   }
    // ]
  },
];
