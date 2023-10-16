const current_date = new Date();

export const CURRENT_YEAR = current_date.getFullYear();
export const IS_LEAP_YEAR = CURRENT_YEAR % 4 === 0;

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const WEEK = DAY * 7;
export const NORMAL_YEAR = DAY * 365;
export const LEAP_YEAR = DAY * 366;