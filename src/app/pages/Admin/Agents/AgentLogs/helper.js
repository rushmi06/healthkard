export const getAgentLogs = (agents) => {
    let todayUsers = 0;
    let totalUsers = 0;
    let todayHospitals = 0;
    let totalHospitals = 0;

    // Get today's date at midnight for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    agents.usersAdded.forEach((user) => {
        // Increment total users for each entry
        totalUsers++;

        // Check if the user was added today
        const userDate = new Date(user.date);
        if (userDate >= today) {
            todayUsers++;
        }
    });

    agents.hospitalsAdded.forEach((hospital) => {
        // Increment total hospitals for each entry
        totalHospitals++;

        // Check if the hospital was added today
        const hospitalDate = new Date(hospital.date);
        if (hospitalDate >= today) {
            todayHospitals++;
        }
    });

    return { todayUsers, totalUsers, todayHospitals, totalHospitals };
}