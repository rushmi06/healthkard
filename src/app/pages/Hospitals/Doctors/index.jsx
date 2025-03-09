import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import httpService from '../../../api/httpService';
import withTheme from '../../../theme/Theme';

function Doctors({ theme }) {
    const { hospitalId } = useParams();
    const [doctors, setDoctors] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editedDoctors, setEditedDoctors] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            const response = await httpService.get(`/hospitals/hospital/${hospitalId}`);
            setDoctors(response.doctorList || []);
            setEditedDoctors(response.doctorList || []);
        }
        fetchDoctors();
    }, [hospitalId]);

    const handleDoctorChange = (index, field, value) => {
        const updatedDoctors = [...editedDoctors];
        updatedDoctors[index] = {
            ...updatedDoctors[index],
            [field]: value
        };
        setEditedDoctors(updatedDoctors);
    };

    const handleAddDoctor = () => {
        const newDoctor = {
            _id: Date.now().toString(), // Temporary ID for new doctor
            name: '',
            email: '',
            number: '',
            lisenceNumber: '',
            qualification: '',
            doctorLicenseURL: ''
        };
        setEditedDoctors([...editedDoctors, newDoctor]);
        setIsEditing(true);
    };

    const handleRemoveDoctor = (index) => {
        const updatedDoctors = editedDoctors.filter((_, i) => i !== index);
        setEditedDoctors(updatedDoctors);
    };

    const handleSubmit = async () => {
        try {
            await httpService.put(`/hospitals/${hospitalId}/doctors`, { doctorList: editedDoctors });
            setDoctors(editedDoctors);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating doctors:', error);
        }
    };

    const handleCancel = () => {
        setEditedDoctors(doctors);
        setIsEditing(false);
    };

    const openInNewTab = (url) => {
        if (url) window.open(url, '_blank');
    };

    return (
        <div style={ { color: theme.text } } className="flex flex-col h-full">
            <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold">Doctors</h2>
                <div className="flex gap-4">
                    <Button
                        label="Add Doctor"
                        onClick={ handleAddDoctor }
                        type="btn-secondary"
                    />
                    { !isEditing ? (
                        <Button
                            label="Edit Doctors"
                            onClick={ () => setIsEditing(true) }
                            type="btn-primary"
                        />
                    ) : (
                        <>
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
                        </>
                    ) }
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
                <div className="max-w-3xl mx-auto space-y-6">
                    { editedDoctors.length === 0 ? (
                        <div className="text-center p-6 bg-gray-50 rounded-lg">
                            <p className="text-gray-600">No doctors found. Click "Add Doctor" to add one.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6">
                            { editedDoctors.map((doctor, index) => (
                                <div style={ { backgroundColor: theme.secondary } } key={ doctor._id } className=" p-6 rounded-lg shadow-sm border">
                                    <div className="flex justify-between mb-4">
                                        <h3 className="text-lg font-semibold">Doctor { index + 1 }</h3>
                                        { isEditing && (
                                            <Button
                                                label="Remove"
                                                onClick={ () => handleRemoveDoctor(index) }
                                                type="btn-danger"
                                            />
                                        ) }
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <Input
                                            label="Doctor Name"
                                            value={ doctor?.name }
                                            onChange={ (e) => handleDoctorChange(index, 'name', e.target.value) }
                                            inputStyle={ { width: '65%' } }
                                            disabled={ !isEditing }
                                        />
                                        <Input
                                            label="Email"
                                            value={ doctor?.email }
                                            onChange={ (e) => handleDoctorChange(index, 'email', e.target.value) }
                                            inputStyle={ { width: '65%' } }
                                            disabled={ !isEditing }
                                        />
                                        <Input
                                            label="Contact Number"
                                            value={ doctor?.number }
                                            onChange={ (e) => handleDoctorChange(index, 'number', e.target.value) }
                                            inputStyle={ { width: '65%' } }
                                            disabled={ !isEditing }
                                        />
                                        <Input
                                            label="License Number"
                                            value={ doctor?.lisenceNumber }
                                            onChange={ (e) => handleDoctorChange(index, 'lisenceNumber', e.target.value) }
                                            inputStyle={ { width: '65%' } }
                                            disabled={ !isEditing }
                                        />
                                        <div className="md:col-span-2">
                                            <Input
                                                label="Qualification"
                                                value={ doctor?.qualification }
                                                onChange={ (e) => handleDoctorChange(index, 'qualification', e.target.value) }
                                                inputStyle={ { width: '65%' } }
                                                disabled={ !isEditing }
                                            />
                                        </div>
                                        { doctor?.doctorLicenseURL && (
                                            <div className="md:col-span-2">
                                                <Button
                                                    label="View License"
                                                    onClick={ () => openInNewTab(doctor?.doctorLicenseURL) }
                                                    type="btn-secondary"
                                                />
                                            </div>
                                        ) }
                                    </div>
                                </div>
                            )) }
                        </div>
                    ) }
                </div>
            </div>
        </div>
    );
}

export default withTheme(Doctors);
