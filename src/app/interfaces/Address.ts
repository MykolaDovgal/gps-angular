import {LatLng} from "./LatLng";
import {RealizationMin} from "./RealizationMin";

export interface Address {
    Address?:string;
    AddressGuid?:string;
    LatLng?:LatLng;
    Realizations?: RealizationMin[];
}