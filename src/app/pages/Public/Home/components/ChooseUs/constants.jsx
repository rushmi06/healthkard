import { MdPersonSearch } from "react-icons/md";
import { FaStethoscope, FaUserDoctor, FaBriefcaseMedical } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

export const benefits = [
    {
        icon: <MdPersonSearch />,
        description: "Visit any of our associated hospital",
    },
    {
        icon: <FaStethoscope />,
        description: "Free Doctor Consultation (OP)",
    },
    {
        icon: <FaBriefcaseMedical />,
        description: "Avoid high Consultation fee",
    },
    {
        icon: <FaRegCalendarAlt />,
        description: "Longer validity with 28 days",
    },
    {
        icon: <FaUserDoctor />,
        description: "Chance of visiting multiple doctors with single HEALTHKARD",
    },
];
