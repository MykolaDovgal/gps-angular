import {Component, OnInit} from '@angular/core';
import {DataService} from "../../../../Services/data.service";
import {StringCutPipe} from "../../../../common/string-cut.pipe";
import {DragulaService} from "ng2-dragula";
import {AddressItem} from "../../../../interfaces/AddressItem";
import {RouteItem} from "../../../../interfaces/RouteItem";
import {Address} from "../../../../interfaces/Address";
import {RealizationMin} from "../../../../interfaces/RealizationMin";




@Component({
    selector: 'app-route-bar',
    templateUrl: './route-bar.component.html',
    styleUrls: ['./route-bar.component.css'],
})
export class RouteBarComponent implements OnInit {

     addressItems: AddressItem[] = [];

    constructor(private dragulaService: DragulaService, private dataService: DataService) {

        function isElementShadow(el, target): boolean {
            return !(el.contains ?
                el != target && el.contains(target) :
                !!(el.compareDocumentPosition(target) & 16));
        }

        dragulaService.setOptions('bag-main', {
            moves: function (el, container, handle) {
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
            },
        });
    }

    bool: boolean = false;




    customerAddressItem(routeItem:RouteItem)
    {

        for(let i = 0;i <routeItem.Addresses.length; i+=1)
        {
            let tmpAddressItem = <AddressItem>{};
            tmpAddressItem.Address = routeItem.Addresses[i].Address;
            tmpAddressItem.AddressGuid = routeItem.Addresses[i].AddressGuid;
            tmpAddressItem.Realizations = routeItem.Addresses[i].Realizations;
            tmpAddressItem.LatLng = routeItem.Addresses[i].LatLng;
            tmpAddressItem.ClientGuid = routeItem.ClientGuid;
            this.addressItems.push(tmpAddressItem);
        }

    }

    addressAddressItem(addressItem:Address, clientGuid)
    {
        let tmpAddressItem = <AddressItem>{};
        tmpAddressItem.Address = addressItem.Address;
        tmpAddressItem.AddressGuid = addressItem.AddressGuid;
        tmpAddressItem.Realizations = addressItem.Realizations;
        tmpAddressItem.LatLng = addressItem.LatLng;
        tmpAddressItem.ClientGuid = clientGuid;
        this.addressItems.push(tmpAddressItem);

    }

    realizationAddressItem(addressItem:Address,realization:RealizationMin,clientGuid)
    {
        let tmpAddressItem = <AddressItem>{};
        tmpAddressItem.Address = addressItem.Address;
        tmpAddressItem.AddressGuid = addressItem.AddressGuid;
        tmpAddressItem.Realizations = [realization];
        tmpAddressItem.LatLng = addressItem.LatLng;
        tmpAddressItem.ClientGuid = clientGuid;
        this.addressItems.push(tmpAddressItem);
    }



    ngOnInit() {
    }



    get routeItems() {
        return this.dataService.getRouteItem();
    }


}
