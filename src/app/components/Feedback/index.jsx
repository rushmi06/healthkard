import React from 'react'
import withTheme from "../../theme/Theme"
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";


function Feedback({ theme, feedback }) {
    return (
        <div style={ { backgroundColor: theme.senary, border: `1px solid ${theme.primary}`, color: theme.primary } } className="w-72 h-48 rounded-lg p-4 shadow-lg flex flex-col gap-2 overflow-hidden">
            <div className="flex items-center gap-2">
                <img src={ feedback.image } alt={ feedback.name } className="w-8 h-8" />
                <div className="flex flex-col justify-center">
                    <p className="text-lg font-semibold">{ feedback.name }</p>
                    <p className="text-xs font-semibold flex items-center gap-1">
                        {
                            Array.from({ length: feedback.rating }).map((_, index) => (
                                <IoStar key={ index } style={ { color: 'gold' } } />
                            ))
                        }
                        {
                            feedback.rating % 1 === 0 ? null : <IoStarHalf style={ { color: 'gold' } } />
                        }
                        {
                            Array.from({ length: 5 - feedback.rating - (feedback.rating % 1) }).map((_, index) => (
                                <IoIosStarOutline key={ index } style={ { color: 'gold' } } />
                            ))
                        }
                    </p>
                </div>
            </div>
            <p style={ { color: theme.text } } className="text-sm flex-1 w-full flex-wrap">{ feedback.feedback }</p>
        </div>
    )
}

export default withTheme(Feedback)
