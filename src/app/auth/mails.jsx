import httpService from '../api/httpService'

export const sendPasswordToEmail = async (email) => {
    const response = await httpService.post('auth/send-password', { email })
    return response
}