import React from "react";

const AreasServed = () => (
    <div className="space-y-4">
        <h3 className="text-lg font-bold">Areas Served</h3>
        <div className="divider mt-2"></div>
        <p className="text-sm" itemProp="areaServed">
            Metro Phoenix area including Apache Junction, Avondale, Buckeye, Care Free,
            Cave Creek, Chandler, Cottonwood, El Mirage, Flagstaff, Gilbert, Glendale, Globe, Goodyear,
            Litchfield Park, Maricopa, Mesa, Peoria, Phoenix, Queen Creek, Safford, Scottsdale, Surprise,
            Tempe, and Wickenburg.
        </p>
        <p className="text-sm">
            Serving: Epcor Water, Arizona Water, Gila River Indian Community, Global Water,
            Graham County Utilities, Johnson Utilities, Liberty Utilities, Pima Utility,
            Salt River Pima Maricopa Indian Community, and Sunrise Water.
        </p>
    </div>
);

export default AreasServed;