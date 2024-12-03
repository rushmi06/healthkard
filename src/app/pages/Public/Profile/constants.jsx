import { MdSupportAgent as SupportIcon } from "react-icons/md";
import { MdPayment as PaymentIcon } from "react-icons/md";
import { BiTask as ChallengeIcon } from "react-icons/bi";
import { IoIdCardSharp as HealthKardIcon } from "react-icons/io5";
import { IoRefresh as RefreshIcon } from "react-icons/io5";

export const links = [
    {
        index: 0,
        label: 'HealthKard',
        icon: <HealthKardIcon />,
    },
    {
        index: 1,
        label: 'Renewal',
        icon: <RefreshIcon />,
    },
    {
        index: 2,
        label: 'Payments',
        icon: <PaymentIcon />,
    },
    {
        index: 3,
        label: 'Challenges',
        icon: <ChallengeIcon />,
    },
    {
        index: 4,
        label: 'Support',
        icon: <SupportIcon />,
    },
]   