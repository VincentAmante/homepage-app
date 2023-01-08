/**
 * This file is dedicated for the usage of fontawesome icons
 * as well as the the importing of icons
 *      - Importing icons manually allows saving of space, as not all icons from the library would be used
 * */ 

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

// Solid-Style Icons
import { 
    faMagnifyingGlass,
    faEye,
    faEyeSlash,
    faGear,
    faRightFromBracket,
    faLock,
    faAt,
    faF,
    faL,
    faKey, 
    faHouseChimneyWindow,
    faTemperatureHigh,
    faTemperatureLow,
    faPlus,
    faCheck,
    faArrowLeft,
    faTriangleExclamation,
    faXmark
} from "@fortawesome/free-solid-svg-icons"

// Regular-Style Icons
import {
    faFaceSadTear
} from "@fortawesome/free-regular-svg-icons"

import { faGoogle } from '@fortawesome/free-brands-svg-icons';

// Define icons to be used here
const icons = [
    faMagnifyingGlass, 
    faGoogle, 
    faEye, 
    faEyeSlash, 
    faGear, 
    faRightFromBracket,
    faAt,
    faLock,
    faF,
    faL,
    faKey,
    faHouseChimneyWindow,
    faTemperatureHigh,
    faTemperatureLow,
    faPlus,
    faCheck,
    faArrowLeft,
    faFaceSadTear,
    faTriangleExclamation,
    faXmark
]

library.add(...icons);
export default FontAwesomeIcon;