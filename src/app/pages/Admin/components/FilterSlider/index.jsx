
import React, { useState } from 'react';
import Modal from '../../../../components/Modal';
import Button from '../../../../components/Button';
import Checkbox from '../../../../components/Checkbox'; // Import the new Checkbox component

function FilterSlider({ open, onClose, onApplyFilters = () => { }, filterCategories }) {
    const [filters, setFilters] = useState({
        location: [],
        category: [],
        sortByDate: false,
        sortByName: false
    });

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFilters(prevFilters => {
            if (checked) {
                return {
                    ...prevFilters,
                    [name]: [...prevFilters[name], value]
                };
            } else {
                return {
                    ...prevFilters,
                    [name]: prevFilters[name].filter(item => item !== value)
                };
            }
        });
    };

    const handleSortChange = (e) => {
        const { name, checked } = e.target;
        setFilters(prevFilters => ({
            ...prevFilters,
            [name]: checked
        }));
    };

    const handleApplyFilters = () => {
        onApplyFilters(filters);
        onClose();
    };

    const handleClearFilters = () => {
        setFilters({
            location: [],
            category: [],
            sortByDate: false,
            sortByName: false
        });
    };

    return (
        <Modal open={ open } onClose={ onClose } position="center" style={ { width: '40%', height: '60%' } }>
            <div className="p-4 flex flex-col justify-between h-full">
                <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Location</label>
                    <div className="flex flex-wrap">
                        { filterCategories.location.map(loc => (
                            <div key={ loc } className="w-1/3 mb-2">
                                <Checkbox
                                    label={ loc }
                                    checked={ filters.location.includes(loc) }
                                    onChange={ (e) => handleCheckboxChange({
                                        target: { name: 'location', value: loc, checked: e.target.checked }
                                    }) }
                                />
                            </div>
                        )) }
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-semibold">Category</label>
                    <div className="flex flex-wrap">
                        { filterCategories.category.map(cat => (
                            <div key={ cat } className="w-1/3 mb-2">
                                <Checkbox
                                    label={ cat }
                                    checked={ filters.category.includes(cat) }
                                    onChange={ (e) => handleCheckboxChange({
                                        target: { name: 'category', value: cat, checked: e.target.checked }
                                    }) }
                                />
                            </div>
                        )) }
                    </div>
                </div>
                <div className="mb-4 flex items-center">
                    <div className="mr-4 font-semibold">
                        <Checkbox
                            label="Sort By Date"
                            checked={ filters.sortByDate }
                            onChange={ (e) => handleSortChange({
                                target: { name: 'sortByDate', checked: e.target.checked }
                            }) }
                        />
                    </div>
                    <div className="font-semibold">
                        <Checkbox
                            label="Sort By Name"
                            checked={ filters.sortByName }
                            onChange={ (e) => handleSortChange({
                                target: { name: 'sortByName', checked: e.target.checked }
                            }) }
                        />
                    </div>
                </div>
                <div className="flex justify-between space-x-2 ">
                    <Button
                        type="btn-tertiary"
                        label="Clear"
                        onClick={ handleClearFilters }
                        style={ { width: '100px' } }
                    />
                    <div className="flex space-x-2">

                        <Button
                            type="btn-secondary"
                            label="Cancel"
                            onClick={ onClose }
                            style={ { width: '100px' } }
                        />
                        <Button
                            type="btn-primary"
                            label="Apply"
                            onClick={ handleApplyFilters }
                            style={ { width: '100px' } }
                        />
                    </div>
                </div>
            </div>
        </Modal >
    );
}

export default FilterSlider;
