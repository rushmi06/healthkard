import { TiInputChecked } from "react-icons/ti";
import { MdOutlinePendingActions } from "react-icons/md";
import { FaDatabase, FaLock, FaMoneyBill, FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineFeedback } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineRssFeed } from "react-icons/md";
import { GiSatelliteCommunication } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { RiFolderShield2Fill } from "react-icons/ri";

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
                label: 'Healtkards',
                link: '/admin/users/healtkards',
                icon: FaRegUserCircle
            },
            {
                label: 'Mobile',
                link: '/admin/users/mobile',
                icon: FaMobileAlt
            },

            {
                label: 'Records',
                link: '/admin/users/records',
                icon: RiFolderShield2Fill
            },
            // {
            //     label: 'Feedback',
            //     link: '/admin/users/feedback',
            //     icon: MdOutlineFeedback
            // }
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
                link: '/admin/transactions',
                icon: FaMoneyBill
            },
        ]
    },
    {
        label: 'Database',
        subLinks: [
            {
                label: 'Data storage',
                link: '/admin/database',
                icon: FaDatabase
            }
        ]
    }
]