import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../Services/data.service";
import {RouteItem} from "../../../../interfaces/RouteItem";
import {StringCutPipe} from "../../../../common/string-cut.pipe";
import {DragulaService} from "ng2-dragula";

@Component({
    selector: 'app-route-bar',
    templateUrl: './route-bar.component.html',
    styleUrls: ['./route-bar.component.css'],


})
export class RouteBarComponent implements OnInit {

    constructor(private dragulaService: DragulaService, private dataService: DataService) {

        function isElementShadow(el, target): boolean {
            return !(el.contains ?
                el != target && el.contains(target) :
                !!(el.compareDocumentPosition(target) & 16));
        }

        dragulaService.setOptions('bag-main', {
            moves: function (el, container, handle) {
                //return !(handle.classList.contains('customer-handle') || handle.classList.contains('address-handle') || handle.classList.contains('realization-handle'));
                return false;
            },

            accepts: function (el, target, source, sibling) {
                return isElementShadow(el, target);
            }

        });


        dragulaService.setOptions('bag-customers', {
            moves: function (el, container, handle) {
                return (handle.classList.contains('customer-handle') || handle.classList.contains('address-handle') || handle.classList.contains('realization-handle'));;
            },

            accepts: function (el, target, source, sibling) {
                if(isElementShadow(el, target)){
                    if(el.classList.contains('customer')){
                        return target.classList.contains('customer-container');
                    }
                    else if(el.classList.contains('address')){
                        if(target.classList.contains('address-container')){
                            return el.dataset.guidCustomer == target.dataset.guidCustomer;
                        }else if(target.classList.contains('customer-container')){
                            return true;
                        }
                        return false;
                    }
                    else if(el.classList.contains('realization')){
                        if(target.classList.contains('realization-container')){
                            return el.dataset.guidAddress == target.dataset.guidAddress;
                        }
                        return false;
                    }
                    return false;
                }
                return false;
            }
        });

        dragulaService.drop.subscribe((value) => {
            this.onDrop(value.slice(1),value[0]);
        });



    }

    ngOnInit() {
    }


    private onDrop(args,bagName) {
        let [el, target, source, sibling] = args; //при дропі адреси на пусте місце є два варіанта 1-батьківський елемент пустий, 2-в батьківсьькому елементі є ще дочірні
        console.log('bugName',bagName);
        console.log('el',el);
        console.log('target',target);
        console.log('source',source);
        console.log('sibling',sibling);

        if(el.classList.contains('address') && target.classList.contains('customer-container'))
        {
            if(source.children.length == 0){
                let newElement = source.cloneNode(true);
                // newElement.appendChild(el);
                this.createCustomerElement(el);
                sibling == null && target.children.length == 0 ? target.appendChild(newElement) : target.insertBefore(newElement,sibling);
                target.appendChild(this.createCustomerElement(el))
            }
        }
    }

    createCustomerElement(addressElement){
        console.log(addressElement.dataset.guidCustomer);

        let customer = document.createElement('md2-accordion-tab');
        customer.className += 'accordion customer';
        customer.setAttribute('mdTooltip','lolkek4eburek');
        customer.setAttribute('attr.data-guid-customer','some guid');

        return customer;
    }


    get routeItems() {
        return this.dataService.getRouteItem();
    }


}
