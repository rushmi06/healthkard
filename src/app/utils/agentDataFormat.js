export const formatData = (result, itemsKey) => {
    // Group by date
    const groupedByDate = result.reduce((acc, item) => {
        const date = formatDate(item['date']);
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(item);
        return acc;
    }, {});
    // Convert to array format
    const formattedData = Object.entries(groupedByDate).map(([date, items]) => ({
        date,
        [itemsKey]: items
    }));
    return formattedData;
};

export const countByYearAndMonth = (data, isUsersPane) => {
    const userCountByYearAndMonth = {};
    data?.forEach(entry => {
        const [, month, year] = entry.date.split(' ');
        if (!userCountByYearAndMonth[year]) {
            userCountByYearAndMonth[year] = {};
        }
        if (!userCountByYearAndMonth[year][month]) {
            userCountByYearAndMonth[year][month] = 0;
        }
        if (isUsersPane) {
            userCountByYearAndMonth[year][month] += entry.amount.reduce((sum, amount) => sum + amount, 0);
        } else {

            userCountByYearAndMonth[year][month] += entry.hospitalId.length;
        }
    });
    return userCountByYearAndMonth;
};

export const formatDate = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate().toString().padStart(2, '0');
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
};

export const calculateMonthlyStats = (data, isUsersPane) => {
    const monthlyStats = {};
    data?.forEach(entry => {
        const [, month, year] = entry.date.split(' ');
        if (!monthlyStats[year]) {
            monthlyStats[year] = {};
        }
        if (!monthlyStats[year][month]) {
            monthlyStats[year][month] = { count: 0, totalAmount: 0 };
        }
        if (isUsersPane) {
            monthlyStats[year][month].count += entry.healthID.length;
            monthlyStats[year][month].totalAmount += entry.healthID.reduce((sum, userId) => {
                const user = data.find(item => item.healthID === userId);
                return sum + (user?.amount || 0);
            }, 0);
        } else {
            monthlyStats[year][month].count += entry.hospitalId.length;
            // Assuming hospitals also have an amount field. If not, remove this line.
            monthlyStats[year][month].totalAmount += entry.hospitalId.reduce((sum, hospitalId) => {
                const hospital = data.find(item => item.hospitalId === hospitalId);
                return sum + (hospital?.amount || 0);
            }, 0);
        }
    });
    return monthlyStats;
};