import { RiProfileLine as GeneralIcon } from "react-icons/ri";
import { GiHorseHead as OwnerIcon } from "react-icons/gi";
import { FaUserDoctor as DoctorIcon } from "react-icons/fa6";
import { TfiGallery as GalleryIcon } from "react-icons/tfi";
import { FaRegAddressCard as AddressIcon } from "react-icons/fa";
import { GrServices as ServicesIcon } from "react-icons/gr";

export const types = [
    {
        type: 'general',
        icon: <GeneralIcon />,
        tooltip: 'Here you can edit the general information of the hospital, such as the hospital legal name, number, email and description.'
    },
    {
        type: 'owner',
        icon: <OwnerIcon />,
        tooltip: 'Here you can edit the owner information of the hospital, such as the owner name, number and email.'
    },
    {
        type: 'doctors',
        icon: <DoctorIcon />,
        tooltip: 'Here you can edit the doctors information of the hospital, such as the doctor name, number and email.'
    },
    {
        type: 'gallery',
        icon: <GalleryIcon />,
        tooltip: 'Here you can edit the gallery of the hospital, such as the gallery images.'
    },
    {
        type: 'address',
        icon: <AddressIcon />,
        tooltip: 'Here you can edit the address of the hospital, such as the address, city, state and zip code.'
    },
    {
        type: 'services',
        icon: <ServicesIcon />,
        tooltip: 'Here you can edit the services of the hospital, such as the services offered, timings and mor e.'
    }
]