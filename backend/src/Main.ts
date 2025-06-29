import {Express} from "express";
import express from "express"

class Main {
    static main() : void {
        const APP  : Express = express();
        const PORT : number | string = process.env.PORT || 3000;
    }
}