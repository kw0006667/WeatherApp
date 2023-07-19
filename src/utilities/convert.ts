import { Days } from "@/types/dateType";

export class Convert {
    constructor() {
        
    }

    public static getWeek = (day: number) => {
        return Days[day];
      }

    public static getTime = (date: Date) => {
        return `${date.getHours()}:${date.getMinutes()}`;
    }
}