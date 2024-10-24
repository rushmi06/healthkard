export const formatUserGraph = (dataPoints) => {
    const formattedDataPoints = [];
    for (const dataPoint of dataPoints) {
        const date = new Date(dataPoint.dateJoined);
        const formattedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        const count = dataPoints.filter(dp => {
            const dpDate = new Date(dp.dateJoined);
            return dpDate.getFullYear() === formattedDate.getFullYear() &&
                dpDate.getMonth() === formattedDate.getMonth() &&
                dpDate.getDate() === formattedDate.getDate();
        }).length;

        formattedDataPoints.push({
            x: formattedDate,
            y: count
        });
    }
    return formattedDataPoints
}

export const formatHospitalGraph = (dataPoints) => {
    return dataPoints
}
