import { MdSpaceDashboard as Dashboard } from "react-icons/md";
import { FaUserInjured as Patients } from "react-icons/fa";
import { FaUserDoctor as Doctors } from "react-icons/fa6";
import { CgProfile as Profile } from "react-icons/cg";

export const sideNavigationBar = [
    {
        name: 'Dashboard',
        icon: Dashboard,
        path: 'dashboard'
    },
    {
        name: 'Patients',
        icon: Patients,
        path: 'patients'
    },
    {
        name: 'Doctors',
        icon: Doctors,
        path: 'doctors'
    },
    {
        name: 'Profile',
        icon: Profile,
        path: 'profile'
    }
]