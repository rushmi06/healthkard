import React from "react";
import hospitalLogo from "../../../../../assets/hospitalLogo.png"
import withTheme from "../../../../../theme/Theme";
import { Link } from "react-router-dom";
const HospitalNameCard = ({ hospital, theme }) => {
  return (
    <Link to={ `/hospital/${hospital._id}` } style={ { backgroundColor: theme.secondary, border: `1px solid ${theme.tertiary}` } } className="flex items-center justify-start gap-2 lg:h-14 w-32 lg:min-w-40 lg:max-w-44 rounded p-2 ">
      <img src={ hospital?.logo || hospitalLogo } alt="" className="rounded-full w-10 h-10 object-cover " />
      <p className="font-medium text-ellipsis overflow-hidden whitespace-nowrap lg:text-base text-xs">{ hospital?.name }</p>
    </Link>
  )
};

export default withTheme(HospitalNameCard);
