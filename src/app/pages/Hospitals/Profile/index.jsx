import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import httpService from '../../../api/httpService';

function Profile({ }) {
    const [isEditing, setIsEditing] = useState(false);
    const [hospitalDetails, setHospitalDetails] = useState({});
    const [editedDetails, setEditedDetails] = useState({});
    const { hospitalId } = useParams();

    useEffect(() => {
        const fetchHospital = async () => {
            const response = await httpService.get(`/hospitals/hospital/${hospitalId}`);
            setHospitalDetails(response);
            setEditedDetails(response);
        }
        fetchHospital();
    }, [hospitalId])

    const handleInputChange = (field, value) => {
        setEditedDetails(prev => ({
            ...prev,
            hospitalDetails: {
                ...prev?.hospitalDetails,
                [field]: value
            }
        }));
    };

    const handleAddressChange = (field, value) => {
        setEditedDetails(prev => ({
            ...prev,
            address: {
                ...prev?.address,
                [field]: value
            }
        }));
    };

    const handleSubmit = () => {
        console.log('Updated Hospital Details:', editedDetails);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setEditedDetails(hospitalDetails);
        setIsEditing(false);
    };

    const openInNewTab = (url) => {
        window.open(url, '_blank');
    };
    if (!editedDetails?.hospitalDetails?.hospitalLegalName) return <div>Loading...</div>;
    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-2xl font-bold">Hospital Profile</h2>
                { !isEditing && (
                    <Button
                        label="Edit Profile"
                        onClick={ () => setIsEditing(true) }
                        type="btn-primary"
                    />
                ) }
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <div className="w-full mx-auto space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="Hospital Legal Name"
                            value={ editedDetails?.hospitalDetails?.hospitalLegalName }
                            onChange={ (e) => handleInputChange('hospitalLegalName', e.target.value) }
                            inputStyle={ { width: '75%' } }
                            disabled={ !isEditing }
                        />

                        <Input
                            label="Hospital Trade Name"
                            value={ editedDetails?.hospitalDetails?.hospitalTradeName }
                            onChange={ (e) => handleInputChange('hospitalTradeName', e.target.value) }
                            inputStyle={ { width: '75%' } }
                            disabled={ !isEditing }
                        />

                        <Input
                            label="Type of Hospital"
                            value={ editedDetails?.hospitalDetails?.typeOfHospital }
                            onChange={ (e) => handleInputChange('typeOfHospital', e.target.value) }
                            inputStyle={ { width: '75%' } }
                            disabled={ !isEditing }
                        />

                        <Input
                            label="License Number"
                            value={ editedDetails?.hospitalDetails?.licenseNumber }
                            onChange={ (e) => handleInputChange('licenseNumber', e.target.value) }
                            inputStyle={ { width: '75%' } }
                            disabled={ !isEditing }
                        />
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Documents</h3>
                        <div className="flex gap-4">
                            <Button
                                label="View License"
                                onClick={ () => openInNewTab(editedDetails?.hospitalDetails?.hospitalLicense) }
                                type="btn-secondary"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Hospital Number"
                                value={ editedDetails?.hospitalDetails?.hospitalNumber }
                                onChange={ (e) => handleInputChange('hospitalNumber', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="Owner Contact Number"
                                value={ editedDetails?.hospitalDetails?.hospitalOwnerContactNumber }
                                onChange={ (e) => handleInputChange('hospitalOwnerContactNumber', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="Owner Email"
                                value={ editedDetails?.hospitalDetails?.hospitalOwnerEmail }
                                onChange={ (e) => handleInputChange('hospitalOwnerEmail', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="Owner Full Name"
                                value={ editedDetails?.hospitalDetails?.hospitalOwnerFullName }
                                onChange={ (e) => handleInputChange('hospitalOwnerFullName', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Address</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Street"
                                value={ editedDetails?.hospitalDetails?.address?.street }
                                onChange={ (e) => handleAddressChange('street', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="City"
                                value={ editedDetails?.hospitalDetails?.address?.city }
                                onChange={ (e) => handleAddressChange('city', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="State"
                                value={ editedDetails?.hospitalDetails?.address?.state }
                                onChange={ (e) => handleAddressChange('state', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="Country"
                                value={ editedDetails?.hospitalDetails?.address?.country }
                                onChange={ (e) => handleAddressChange('country', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="Postal Code"
                                value={ editedDetails?.hospitalDetails?.address?.code }
                                onChange={ (e) => handleAddressChange('code', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="Landmark"
                                value={ editedDetails?.hospitalDetails?.address?.landmark }
                                onChange={ (e) => handleAddressChange('landmark', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Timing</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="From"
                                value={ editedDetails?.hospitalDetails?.from }
                                type="time"
                                onChange={ (e) => handleInputChange('from', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                            <Input
                                label="To"
                                value={ editedDetails?.hospitalDetails?.to }
                                type="time"
                                onChange={ (e) => handleInputChange('to', e.target.value) }
                                inputStyle={ { width: '75%' } }
                                disabled={ !isEditing }
                            />
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Days Available</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                { ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index) => (
                                    <Checkbox
                                        key={ day }
                                        label={ day }
                                        checked={ editedDetails?.hospitalDetails?.daysAvailabilty?.[index] || false }
                                        onChange={ (e) => {
                                            const newDaysAvailability = [...(editedDetails?.hospitalDetails?.daysAvailability || Array(7).fill(false))];
                                            newDaysAvailability[index] = e.target.checked;
                                            handleInputChange('daysAvailability', newDaysAvailability);
                                        } }
                                        disabled={ !isEditing }
                                    />
                                )) }
                            </div>
                        </div>
                    </div>

                    { isEditing && (
                        <div className="flex gap-4 justify-end sticky bottom-0 bg-white py-4 border-t mt-6">
                            <Button
                                label="Cancel"
                                onClick={ handleCancel }
                                type="btn-secondary"
                            />
                            <Button
                                label="Save Changes"
                                onClick={ handleSubmit }
                                type="btn-primary"
                            />
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
}

export default Profile;
