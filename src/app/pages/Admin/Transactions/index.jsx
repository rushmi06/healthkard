import React, { useState, useEffect } from 'react'
import withTheme from '../../../theme/Theme'
import httpService from '../../../api/httpService';
import { formatCurrency } from '../../../utils/format';
import Search from '../../../components/Search';
import Table from '../../../components/Table';

function Transactions({ theme }) {
    const [payments, setPayments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await httpService.get('payments');
                setPayments(response);
            } catch (error) {
                console.error('Error fetching payments:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPayments();
    }, []);

    const headers = ['User', 'Transaction ID', 'Amount', 'Status'];

    const tableData = payments.map(payment => ({
        _id: payment.userId,
        name: payment.userName,
        id: payment.agent,
        navigateTo: `/admin/users/details/${payment.userId}`,
        transactionId: payment.transactionId || 'Offline',
        amount: formatCurrency(payment.amount),
        status: payment.paymentStatus ? 'Success' : 'Failed'
    }));

    return (
        <div style={ { backgroundColor: theme.secondary, color: theme.primary } } className=' rounded h-full flex-grow overflow-y-scroll flex flex-col gap-2'>
            <Header title='Transactions' theme={ theme } />
            <Search />
            <Table
                headers={ headers }
                data={ tableData }
                isLoading={ isLoading }
                style={ { height: '100vh' } }
            />
        </div>
    )
}

function Header({ title, theme }) {
    return (
        <div style={ { borderBottom: `1px solid ${theme.primary}` } } className='text-2xl font-semibold p-4'>
            { title }
        </div>
    )
}

export default withTheme(Transactions)
