import React from "react";
import hospitalLogo from "../../../../../assets/hospitalLogo.png"
import withTheme from "../../../../../theme/Theme";
import { Link } from "react-router-dom";
const HospitalNameCard = ({ hospital, theme }) => {
  return (
    <Link to={ `/hospital/${hospital._id}` } style={ { backgroundColor: theme.secondary } } className="flex items-center justify-center gap-2 w-[45%] md:h-14 md:w-44 border border-[#303486] rounded p-2 mx-1">
      <img src={ hospital?.logo || hospitalLogo } alt="" className="rounded-full w-10 h-10 object-cover " />
      <p className="font-medium text-ellipsis overflow-hidden whitespace-nowrap lg:text-base text-xs">{ hospital?.name }</p>
    </Link>
  )
};

export default withTheme(HospitalNameCard);
