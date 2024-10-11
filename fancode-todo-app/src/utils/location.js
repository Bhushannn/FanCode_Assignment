// This function checks if the users' belong to FanCode city or not
export const isUserFromFanCode = (user) => {
    const lat = parseFloat(user.address.geo.lat);
    const lng = parseFloat(user.address.geo.lng);
    // here assuming -40,5 is also included in latitude and 5,100 is included in longitude
    if(lat >= -40 && lat <= 5 && lng >= 5 && lng <= 100)
        return true;

    return false;
};
