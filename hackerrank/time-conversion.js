function timeConversion(s) {
    const getComplement = { 
        'AM' : 0,
        'PM' : 12,
    };
    
    const dateLength = s.length;
    const partialDate = s.substring(2, dateLength-2);
    
    const hourFormatMatches = s.match(/\w{2}$/);
    const complement = getComplement[hourFormatMatches[0]];

    const hourMatches = s.match(/^\d{2}/);
    const hour = parseInt(hourMatches[0]);
    
    return `${hour + complement}` + partialDate

}