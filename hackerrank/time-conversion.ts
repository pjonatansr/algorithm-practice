function timeConversion(s: string): string {
    type AorP = 'A' | 'P';

    type ParserFunction = (hour: number) => number;
    
    const getHour = ([f, s] : string[]) : number =>  Number([f, s].join(''));

    const parseHour = (str: AorP) : ParserFunction => {
        const parsers = {
            A: (hour: number): number => {
                if (hour !== 12) {
                    return hour;
                }
                
                return hour - 12;
            },
            P: (hour: number): number => {
                if (hour === 12) {
                    return hour;
                }
                
                return hour + 12
            }
        }
        
        return parsers[str];
    }

    const replaceHour = (timeArray: string[], newHour: string) => {
        const newTimeArray = timeArray.slice(2,-2);
        return [
            newHour[0],
            newHour[1],
            ...newTimeArray,
        ].join('')
    }

    const enforceTwoDigits = (n: number) => n > 9 ? `${n}` : `0${n}`;
    
    const timeArray: string[] = [...s];

    const format: AorP = timeArray
        .slice(-2,-1)
        .shift() as AorP;
      
    const hour = getHour(timeArray);

    const getHourParsed = parseHour(format);

    const hourParsed = getHourParsed(hour);
        
    const hourWithTwoDigits = enforceTwoDigits(hourParsed);
        
    return replaceHour(timeArray, hourWithTwoDigits);
    
}