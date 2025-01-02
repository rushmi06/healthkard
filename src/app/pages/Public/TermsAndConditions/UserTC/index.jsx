import React from 'react';
import { legalContent } from './constants';
import withTheme from '../../../../theme/Theme';

function UserTC({ theme }) {
    return (
        <div style={ { backgroundColor: theme.senary } } className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div style={ { backgroundColor: theme.secondary, color: theme.text } } className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
                {/* Header */ }
                <div style={ { color: theme.primary } } className="text-3xl font-bold mb-8">{ legalContent.title }</div>

                {/* Introduction Section */ }
                <div style={ { color: theme.text } } className="space-y-6">
                    {/* Company Info */ }
                    <div className="text-lg">{ legalContent.introduction.companyInfo }</div>

                    {/* Services Info */ }
                    <div className="text-lg">{ legalContent.introduction.servicesInfo }</div>

                    {/* Objective */ }
                    <div className="text-lg">{ legalContent.introduction.objective }</div>

                    {/* Contact Info */ }
                    <div className="text-lg">
                        You can contact us by phone at{ ' ' }
                        <span style={ { color: theme.primary } } className="hover:underline">
                            { legalContent.introduction.contact.phone }
                        </span>
                        , email at{ ' ' }
                        <span style={ { color: theme.primary } } className="hover:underline">
                            { legalContent.introduction.contact.email }
                        </span>
                        , or by mail to { legalContent.introduction.contact.address }
                    </div>

                    {/* Important Notes */ }
                    <div style={ { backgroundColor: theme.tertiary, color: theme.text } } className="text-lg font-semibold p-4 rounded-lg border border-yellow-200">
                        And to be part of the Halekard Private Limited (Healthkard) family, we would highly recommend the user/ patient to check most important points (3-5 points in Table of contents) in this terms.
                    </div>

                    {/* Table of Contents */ }
                    <div className="mt-12">
                        <div style={ { color: theme.primary } } className="text-2xl font-bold mb-6">TABLE OF CONTENTS</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            { legalContent.sections.map((section) => (
                                <div
                                    key={ section.id }
                                    className="text-lg hover:text-blue-600 cursor-pointer transition-colors duration-200 ease-in-out"
                                >
                                    { section.id }. { section.title }
                                </div>
                            )) }
                        </div>
                    </div>

                    {/* Main Content Sections */ }
                    { legalContent.sections.map((section) => (
                        <div key={ section.id } className="mt-12">
                            <div style={ { color: theme.primary } } className="text-2xl font-bold mb-6">
                                { section.id }. { section.title }
                            </div>
                            <div className="text-lg space-y-4">
                                { Array.isArray(section.content) ? (
                                    section.content.map((paragraph, index) => (
                                        <div
                                            key={ index }
                                            className={ `text-lg ${paragraph.startsWith('-')
                                                ? 'pl-4 text-gray-700'
                                                : ''
                                                }` }
                                        >
                                            { paragraph }
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-lg">{ section.content }</div>
                                ) }
                            </div>
                        </div>
                    )) }

                    {/* Contact Section */ }
                    <div style={ { backgroundColor: theme.tertiary, color: theme.text } } className="mt-12 p-6 rounded-lg">
                        <div style={ { color: theme.primary } } className="text-2xl font-bold mb-6">Contact Information</div>
                        <div className="space-y-2">
                            <div className="font-semibold text-xl">HaleKard Private Limited</div>
                            <div>{ legalContent.introduction.contact.address.split(',')[0] }</div>
                            <div>Panasathota</div>
                            <div>Narasaraopet, Andhra Pradesh 522601</div>
                            <div>India</div>
                            <div className="mt-4">
                                <div>
                                    Phone:{ ' ' }
                                    <span className="text-blue-600 hover:underline cursor-pointer">
                                        { legalContent.introduction.contact.phone }
                                    </span>
                                </div>
                                <div>
                                    Email:{ ' ' }
                                    <span className="text-blue-600 hover:underline cursor-pointer">
                                        { legalContent.introduction.contact.email }
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTheme(UserTC);