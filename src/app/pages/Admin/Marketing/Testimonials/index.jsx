import React from 'react'
import withTheme from '../../../../theme/Theme'
import DragAndDropFile from '../../../../components/DragAndDropFile'
import Input from '../../../../components/Input'
import Button from '../../../../components/Button'
import Blog from '../../../../components/Blog'
function Testimonials({ theme }) {
    const blogs = [
        {
            title: 'Essential attending suregey by Dr. Ramprasad',
            description: 'Make sure to bring any necessary medical documents, like your ID, insurance information, and a list of medications you’re currently taking. It’s also a good idea to write down any questions or concerns you might have for your healthcare team.',
            image: require('../../../../assets/blog.png'),
        },
        {
            title: 'Essential attending suregey by Dr. Ramprasad',
            description: 'Make sure to bring any necessary medical documents, like your ID, insurance information, and a list of medications you’re currently taking. It’s also a good idea to write down any questions or concerns you might have for your healthcare team.',
            image: require('../../../../assets/blog.png'),
        },
        {
            title: 'Essential attending suregey by Dr. Ramprasad',
            description: 'Make sure to bring any necessary medical documents, like your ID, insurance information, and a list of medications you’re currently taking. It’s also a good idea to write down any questions or concerns you might have for your healthcare team.',
            image: require('../../../../assets/blog.png'),
        },
        {
            title: 'Essential attending suregey by Dr. Ramprasad',
            description: 'Make sure to bring any necessary medical documents, like your ID, insurance information, and a list of medications you’re currently taking. It’s also a good idea to write down any questions or concerns you might have for your healthcare team.',
            image: require('../../../../assets/blog.png'),
        },
        {
            title: 'Essential attending suregey by Dr. Ramprasad',
            description: 'Make sure to bring any necessary medical documents, like your ID, insurance information, and a list of medications you’re currently taking. It’s also a good idea to write down any questions or concerns you might have for your healthcare team.',
            image: require('../../../../assets/blog.png'),
        },
    ]
    return (
        <div style={ { backgroundColor: theme.secondary } } className='p-4 rounded h-full flex-grow flex flex-col gap-2'>
            <div className='flex justify-between'>
                <div style={ { color: theme.primary } } className='text-2xl font-semibold'>Testimonials</div>
            </div>
            <div className='flex justify-center items-center gap-4 h-1/2'>
                <DragAndDropFile style={ { height: '100%' } } />
                <Form />
            </div>
            <div className='flex flex-col justify-start items-start gap-2 h-1/2 overflow-hidden'>
                <div style={ { color: theme.primary } } className='text-2xl font-semibold'>Current Blogs</div>
                <div className='flex gap-4 items-center overflow-x-scroll w-full flex-wrap'>
                    { blogs.map((blog, index) => (
                        <Blog key={ index } blog={ blog } />
                    )) }
                </div>
            </div>
        </div>
    )
}

export default withTheme(Testimonials)

function Form() {
    return (
        <div className='flex flex-col justify-between items-start gap-2 w-1/2 h-full'>
            <Input label='Title' placeholder='Title' style={ { width: '100%' } } inputStyle={ { width: '80%' } } />
            <Input label='Description' placeholder='Description' multiline={ true } rows={ 10 } style={ { width: '100%' } } inputStyle={ { width: '100%' } } />
            <div className='flex justify-between items-center gap-2 w-full'>
                <Button label='Clear' type='btn-secondary' />
                <Button label='Save' />
            </div>
        </div>
    )
}
