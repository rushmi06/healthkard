import httpService from '../api/httpService'

export default async function pay(number, healthId, amount, plan, agent, userName, type) {
    if (!number || !healthId || !amount || !plan || !agent || !userName || !type) {
        return
    }
    try {
        const userId = localStorage.getItem('userToken')
        const response = await httpService.get(`pay/?number=${number}&healthId=${healthId}&amount=${amount}&plan=${plan}&agent=${agent}&userName=${userName}&type=${type}&userId=${userId}`)
        window.open(response.paymentUrl, '_blank')
    } catch (error) {
        console.log(error)
    }
}