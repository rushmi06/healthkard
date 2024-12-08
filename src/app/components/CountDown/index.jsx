import React, { useState, useEffect } from 'react'

function CountDown({ time }) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime()
            const targetTime = new Date(time).getTime()
            const difference = targetTime - now

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
                const seconds = Math.floor((difference % (1000 * 60)) / 1000)

                setTimeLeft({ days, hours, minutes, seconds })
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [time])

    return (
        <div className="flex gap-4 justify-center items-center">
            <div className="text-center">
                <div className="text-2xl font-bold">{ timeLeft.days }</div>
                <div className="text-sm">Days</div>
            </div>
            <div className="text-center">
                <div className="text-2xl font-bold">{ timeLeft.hours }</div>
                <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
                <div className="text-2xl font-bold">{ timeLeft.minutes }</div>
                <div className="text-sm">Minutes</div>
            </div>
            <div className="text-center">
                <div className="text-2xl font-bold">{ timeLeft.seconds }</div>
                <div className="text-sm">Seconds</div>
            </div>
        </div>
    )
}

export default CountDown
