"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertHourStringToMinutes = void 0;
const convertHourStringToMinutes = (hourString) => {
    const [hours, minutes] = hourString.split(':').map(Number);
    const minutesAmout = (hours * 60) + minutes;
    return minutesAmout;
};
exports.convertHourStringToMinutes = convertHourStringToMinutes;
