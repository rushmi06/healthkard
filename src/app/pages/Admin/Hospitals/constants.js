import { theme } from '../../../theme/colors'

export const hospitalHeaders = ['Hospital', 'Contact Number', 'Owner Name', 'Category', 'Available Days (Sun-Sat)']

export const statistics = {

    hospitals: [
        {
            label: 'Today’s approved hospitals',
            value: '10',
            color: theme.dark.colors.secondary,
        },
        {
            label: 'Total approved hospitals',
            value: '10',
            color: theme.dark.colors.secondary,
        },
        {
            label: 'Pending hospitals',
            value: '10',
            color: theme.dark.colors.warning,
        },
    ]

}

export const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']