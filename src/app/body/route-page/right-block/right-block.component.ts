import { Component, OnInit } from '@angular/core';
import {DragulaService} from "ng2-dragula";


@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.css']
})
export class RightBlockComponent implements OnInit {

  constructor(private dragulaService: DragulaService ) {

    // function isElementShadow(el,target):boolean{
    //   return !(el.contains ?
    //           el != target && el.contains(target) :
    //           !!(el.compareDocumentPosition(target) & 16));
    // }
    //
    // dragulaService.setOptions('bag-main', {
    //   moves: function(el, container, handle) {
    //     return !(handle.classList.contains('customer-handle') || handle.classList.contains('address-handle') || handle.classList.contains('realization-handle'));
    //   },
    //
    //   accepts: function (el, target, source, sibling) {
    //     return isElementShadow(el,target);
    //   }
    //
    // });
    //
    //
    // dragulaService.setOptions('bag-kek', {
    //   moves: function(el, container, handle) {
    //     return (handle.classList.contains('customer-handle'));
    //   },
    //
    //   accepts: function (el, target, source, sibling) {
    //     return isElementShadow(el,target);
    //   }
    // });
    //
    //
    // dragulaService.setOptions('bag-kek1', {
    //   moves: function(el, container, handle) {
    //     return (handle.classList.contains('address-handle'));
    //   },
    //
    //   accepts: function (el, target, source, sibling) {
    //     return isElementShadow(el,target);
    //   }
    // });
    //
    // dragulaService.setOptions('bag-kek2', {
    //   moves: function(el, container, handle) {
    //         console.log('el-', el.dataset.guid);
    //         console.log('handle-',handle);
    //     return (handle.classList.contains('realization-handle'));
    //   },
    //
    //   accepts: function (el, target, source, sibling) {
    //     return isElementShadow(el,target);
    //   }
    // });


  }

  ngOnInit() {
  }

}