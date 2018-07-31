import { Component } from "@angular/core";
@Component({
    selector: 'app-child',
    template: `
    <h3>{{ value }}</h3>
    `
})
export class ChildComponent {
    // @Output() myClick = new EventEmitter<Boolean>();

    value = 0;
//     addForParent() {
//         this.myClick.emit(true);
//     }

//     subForParent() {
//         this.myClick.emit(false);
//     }
}