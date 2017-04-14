import {LatLng} from "./LatLng";
import {RealizationMin} from "./RealizationMin";

export interface AddressItem {
    ClientGuid?:string;
    Address?:string;
    AddressGuid?:string;
    LatLng?:LatLng;
    Realizations?: RealizationMin[];
}


