import { BsFillPeopleFill } from "react-icons/bs";
import { FaHospitalAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { BiSolidCity } from "react-icons/bi";

export const stats = [
    { icon: <BsFillPeopleFill />, value: "2000+ ", label: "Users" },
    { icon: <FaHospitalAlt />, value: "100+ ", label: "Hospitals" },
    { icon: <FaUserDoctor />, value: "180+ ", label: "Doctors" },
    { icon: <BiSolidCity />, value: "4+ ", label: "Cities" }
];

export const plans = [
    {
        id: 1,
        name: 'Monthly',
        price: 19,
        stateGST: 1.71,
        centralGST: 1.71,
        platformFee: 0,
        convenienceFee: 0,
        total: 22.42,
        savings: 80,
        hospitalVisits: 'Unlimited',
        doctorConsultations: 'Unlimited',
        opFee: 'No',
        hiddenCharges: 'No',
        validUpto: '28 Days',
        recommended: false
    },
    {
        id: 2,
        name: 'Quarterly',
        price: 49,
        stateGST: 4.41,
        centralGST: 4.41,
        platformFee: 0,
        convenienceFee: 0,
        total: 57.82,
        savings: 248,
        hospitalVisits: 'Unlimited',
        doctorConsultations: 'Unlimited',
        opFee: 'No',
        hiddenCharges: 'No',
        validUpto: '84 Days',
        recommended: false
    },
    {
        id: 3,
        name: 'Half Yearly',
        price: 99,
        stateGST: 8.91,
        centralGST: 8.91,
        platformFee: 0,
        convenienceFee: 0,
        total: 116.82,
        savings: 400,
        hospitalVisits: 'Unlimited',
        doctorConsultations: 'Unlimited',
        opFee: 'No',
        hiddenCharges: 'No',
        validUpto: '168 Days',
        recommended: false
    },
    {
        id: 4,
        name: 'Yearly',
        price: 149,
        stateGST: 13.41,
        centralGST: 13.41,
        platformFee: 0,
        convenienceFee: 0,
        total: 175.82,
        savings: 750,
        hospitalVisits: 'Unlimited',
        doctorConsultations: 'Unlimited',
        opFee: 'No',
        hiddenCharges: 'No',
        validUpto: '226 Days',
        recommended: true
    }
]
