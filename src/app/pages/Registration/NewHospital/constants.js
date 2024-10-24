import { SiGeneralelectric as HospitalIcon } from "react-icons/si";
import { FaPersonBurst as OwnerIcon } from "react-icons/fa6";
import { FaServicestack as ServicesIcon } from "react-icons/fa";
import { FaUserDoctor as DoctorIcon } from "react-icons/fa6";
import { IoDocuments as DocumentsIcon } from "react-icons/io5";
import { MdOutlinePermMedia as MediaIcon } from "react-icons/md";

// form data for slider
import GeneralForm from './Forms/General'
import OwnerForm from './Forms/Owner'
import ServicesForm from './Forms/Services'
import DoctorForm from './Forms/Doctor'
import UploadForm from './Forms/Upload'
import MediaForm from './Forms/Media'

export const CARD_DATA = [
    {
        id: 1,
        title: 'General Details',
        description: 'Hospital Name, Hospital Address, Hospital Contact Number, Hospital Email',
        icon: HospitalIcon,
        form: GeneralForm
    },
    {
        id: 2,
        title: 'Owner Details',
        description: 'Owner Name, Owner Contact Number, Owner Email',
        icon: OwnerIcon,
        form: OwnerForm
    },
    {
        id: 3,
        title: 'Hospital Services',
        description: 'Hospital Type, Hospital Speciality, Hospital Timings, Available Days',
        icon: ServicesIcon,
        form: ServicesForm
    },
    {
        id: 4,
        title: 'Doctors Details',
        description: 'Doctor Name, Doctor Contact Number, Doctor Email, Doctor License Number',
        icon: DoctorIcon,
        form: DoctorForm
    },
    {
        id: 5,
        title: 'Upload Documents',
        description: 'Hospital License, Owner PAN Card, Hospital GST Certificate',
        icon: DocumentsIcon,
        form: UploadForm
    },
    {
        id: 6,
        title: 'Media Details',
        description: 'Hospital Logo, Doctor Images, Hospital Banner ',
        icon: MediaIcon,
        form: MediaForm
    }
]