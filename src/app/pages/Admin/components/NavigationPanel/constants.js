import { TiInputChecked } from "react-icons/ti";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaLock, FaMoneyBill, FaRegUserCircle } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { MdOutlineFeedback } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineRssFeed } from "react-icons/md";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
export const NAVIGATION_PANEL_LINKS = [
    {
        label: 'Hospitals',
        subLinks: [
            {
                label: 'Approved',
                link: '/admin/hospitals/approved',
                icon: TiInputChecked
            },
            {
                label: 'Pending',
                link: '/admin/hospitals/pending',
                icon: MdOutlinePendingActions
            }
        ]
    },
    {
        label: 'Users',
        subLinks: [
            {
                label: 'Details',
                link: '/admin/users/details',
                icon: FaRegUserCircle
            },
            {
                label: 'Mobile',
                link: '/admin/users/mobile',
                icon: FaMobileAlt
            },

            {
                label: 'Logs',
                link: '/admin/users/logs',
                icon: VscJson
            },
            {
                label: 'Feedback',
                link: '/admin/users/feedback',
                icon: MdOutlineFeedback
            }
        ]

    },
    {
        label: 'Agents',
        subLinks: [
            {
                label: 'New Agent',
                link: '/admin/agents/new',
                icon: FaUserShield
            },
            {

                label: 'Agent Logs',
                link: '/admin/agents/logs',
                icon: IoMdContacts
            },
        ]

    },
    {
        label: 'Marketing',
        subLinks: [
            {
                label: 'Blogs',
                link: '/admin/marketing/blogs',
                icon: MdOutlineRssFeed
            },
            {

                label: 'Testimonials',
                link: '/admin/marketing/testimonials',
                icon: GiSatelliteCommunication
            },
            {

                label: 'You Tube',
                link: '/admin/marketing/youtube',
                icon: FaYoutube
            },
        ]

    },
    {
        label: 'Settings',
        subLinks: [
            {
                label: 'Theme',
                link: '/admin/settings/theme',
                icon: FaPalette
            },
            {

                label: 'Change Password',
                link: '/admin/settings/change-password',
                icon: FaLock
            },


        ]
    },
    {
        label: 'Payments',
        subLinks: [
            {
                label: 'Transactions',
                link: '/admin/payments/transactions',
                icon: FaMoneyBill
            },


        ]
    }
]