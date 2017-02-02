import { Component, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

console.log('`Widget` component loaded asynchronously');

@Component({
  selector: 'widget',
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./widget.component.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './widget.component.html'
})
export class WidgetComponent implements OnChanges {
  @Input() currentObject: Object;
  private _currentObject: Object;
  public currentList: Array<Object>;

  // TypeScript public modifiers
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const currentObject: SimpleChange = changes['currentObject'];
    if (currentObject.currentValue != undefined) {
      this.currentList = currentObject.currentValue['automationList'];
    }
  }

}
