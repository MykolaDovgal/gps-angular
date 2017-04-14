import {Injectable} from '@angular/core';
import {Cars} from "../interfaces/Cars";
import {Riders} from "../interfaces/Riders";
import {Direction} from "../interfaces/Direction";
import {SelectedData} from "../interfaces/SelectedData";
import {Realization} from "../interfaces/Realization";
import {RouteItem} from "../interfaces/RouteItem";

@Injectable()
export class DataService {

    constructor() {
    }

    private cars: Cars[] = [];
    private riders: Riders[] = [];
    private directions: Direction[] = [];
    private realization: Realization[] = [];
    private RouteItems: RouteItem[] = [];
    selectedData: SelectedData = new SelectedData();


    getCars(): Cars[] {
        return this.cars;
    }

    setCars(value: Cars[]) {
        this.cars = value;
    }


    getRiders(): Riders[] {
        return this.riders;
    }

    setRiders(value: Riders[]) {
        this.riders = value;
    }


    getDirections(): Direction[] {
        return this.directions;
    }

    setDirections(value: Direction[]) {
        this.directions = value;
    }


    getRealizations(): Realization [] {
        return this.realization;
    }

    setRealizations(value: Realization[]) {
        this.realization = value;
        this.setRouteItems(this.realization);
    }


    setRouteItems(realizations: Realization[]) {
        let tempRouteItems: RouteItem[] = [];
        let tempRouteItem: RouteItem;
        let clients: string[] = [];

        for (let i = 0; i < realizations.length; i += 1) {
            if (clients.indexOf(realizations[i].Client) == -1) {
                clients.push(realizations[i].Client);
            }
        }

        for (let i = 0; i < clients.length; i += 1) {
            tempRouteItem = {};
            tempRouteItem.Addresses = [];
            tempRouteItem.Client = clients[i];
            let iter = 0;
            for (let j = 0; j < realizations.length; j += 1) {
                if (tempRouteItem.Client == realizations[j].Client && tempRouteItem.ClientGuid == null) {
                    tempRouteItem.ClientGuid = realizations[j].GuidClient;
                }

                if (tempRouteItem.Client == realizations[j].Client &&
                    (tempRouteItem.Addresses.map(x => x.Address).indexOf(realizations[j].Adress) == -1)) {
                    tempRouteItem.Addresses.push({
                        Address: realizations[j].Adress,
                        AddressGuid: realizations[j].GuidAdress,
                        LatLng: {lat: realizations[j].Latitude, lng: realizations[j].Longitude},
                        Realizations:[]
                    });

                    for (let k = 0; k < realizations.length; k += 1) {

                        if (tempRouteItem.Client == realizations[j].Client && realizations[j].Adress == realizations[k].Adress) {
                            tempRouteItem.Addresses[iter].Realizations.push({
                                Name: realizations[k].Name,
                                DocGuid: realizations[k].GuidDoc
                            });
                        }
                    }
                    iter +=1;
                }
            }

            // console.log(tempRouteItem);
            tempRouteItems.push(tempRouteItem);
        }
        this.RouteItems = tempRouteItems;
    }


    getRouteItem(): RouteItem[] {
        return this.RouteItems;
    }


}
