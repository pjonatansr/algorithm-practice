/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

const getFinalHour = (hour, complement) => {
    if (hour % 12 === 0){
        return Math.abs(hour - (12 + complement));
    }
    
    const newHour = hour + complement;
    return newHour;
}

function timeConversion(s) {   
    const getComplement = { 
        'AM' : 0,
        'PM' : 12,
    };

    const hourMatches = s.match(/^\d{2}/);
    const hourFormatMatches = s.match(/\w{2}$/);

    const hour = parseInt(hourMatches[0]);
    const complement = getComplement[hourFormatMatches[0]];

    const finalHour = getFinalHour(hour, complement);
    const partialDate = s.substring(2, s.length-2);

    return `${finalHour}`.padStart(2, 0) + partialDate;

}