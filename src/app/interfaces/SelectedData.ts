import {Riders} from "./Riders";
import {Cars} from "./Cars";
import {Direction} from "./Direction";

export class SelectedData {
    Rider: Riders;
    Car: Cars = null;
    Direction: Direction =  null;
    DateFrom: string = null;
    DateTo: string = null;
}