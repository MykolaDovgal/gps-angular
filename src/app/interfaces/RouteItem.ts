export interface RouteItem {
    Client?:string;
    ClientGuid?:string;
    Addresses?:Address[];

}

interface Address {
    Address?:string;
    AddressGuid?:string;
    LatLng?:LatLng;
    Realizations?: RealizationMin[];
}

interface LatLng {
    lat?: number;
    lng?: number;
}

export interface RealizationMin {
    Name?: string;
    DocGuid?:string;
}

