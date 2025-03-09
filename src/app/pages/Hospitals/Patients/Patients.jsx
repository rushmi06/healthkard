export const groupPatientsByDate = (patients) => {
    return patients.reduce((acc, patient) => {
        const date = patient.date;
        if (!acc[date]) {
            acc[date] = [];
        }
        acc[date].push(patient);
        return acc;
    }, {});
}