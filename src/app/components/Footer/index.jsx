import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import withTheme from "../../theme/Theme";
import GooglePlayStoreLogo from "../../assets/GooglePlayStoreLogo.png";
import AppStoreLogo from "../../assets/AppStoreLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { isUserLoggedIn } from "../../utils/auth";
import alertTrigger from "../../components/Alert/alertTrigger";

const Footer = ({ theme }) => {
  const navigate = useNavigate();
  const aboutUs = [
    { label: 'About Us', link: '/about' },
    { label: 'Blogs', link: '/blogs' },
    { label: 'FAQ\'s', link: '/faqs' },
    { label: 'Terms & Conditions', link: '/terms-and-conditions' },
    { label: 'Private Policies', link: '/private-policies' },
    { label: 'Refund Policy', link: '/refund-policy' },
    { label: 'Admin Login', link: '/auth/admin/login' },
  ]
  const plans = [
    { id: '1', name: 'Monthly Plan' },
    { id: '2', name: 'Quarterly Plan' },
    { id: '3', name: 'Half Yearly Plan' },
    { id: '4', name: 'Yearly Plan' },
  ]
  const onClickPlan = (planId) => {
    if (isUserLoggedIn()) {
      navigate(`/plans/${planId}`)
    } else {
      alertTrigger.emit('alert',
        'Please login to purchase the plan',
        null,
        () => navigate('/auth/user/login'),
        'btn-primary',
        'Login'
      )
    }
  }
  return (
    <div style={ { backgroundColor: theme.primary, color: theme.senary } } className="w-full lg:h-[400px] flex flex-col lg:flex-row lg:items-center lg:justify-around p-4 lg:px-10">

      {/* Left Side Panel */ }
      <div className="flex lg:justify-center flex-col gap-4 lg:w-1/2 h-[70%] p-2">
        <h2 className="w-max h-[45px] text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#00BFA8] to-[rgba(0,191,168,0.5)] text-transparent bg-clip-text">
          Healthkard
        </h2>
        <p className="font-light">
          We’re redefining doctor visits—no more worrying about consultation fees. Join our
          growing family and access affordable, high-qualified Doctors whenever you need it.
          Let us take care of your doctor visits, so you can focus on what matters most—your
          health.
        </p>
        <div className="font-light">
          <p className="text-[1rem] font-semibold">Contact Us</p>
          <p>+91 78427 22245</p>
          <p>support@healthkard.in</p>
          <p>Halekard Pvt Ltd.</p>
        </div>
        <div className="font-semibold">
          <p style={ { color: theme.senary } }>©Copyright @2024 Healthkard Powered by Halekard Private Limited</p>
        </div>
      </div>

      {/* Divider for Desktop */ }
      <div style={ { backgroundColor: theme.senary } } className="hidden lg:block h-[80%] w-[2px]"></div>
      <div style={ { backgroundColor: theme.senary } } className="block lg:hidden h-[2px] w-full my-4"></div>

      {/* Right Side Panel */ }
      <div className="w-full lg:w-1/2 flex justify-between h-auto lg:h-[70%] p-2">

        {/* About Us Section */ }
        <div className="font-semibold flex flex-col gap-4 w-1/2">
          <div className="flex flex-col gap-2">
            { aboutUs.map((item, index) => (
              <Link key={ index } to={ item.link } target="_blank" rel="noreferrer">
                { item.label }
              </Link>
            )) }
          </div>
          <div>
            <p>Follow Us :</p>
            <div className="flex gap-4 text-2xl p-2">
              <a href="mailto:support@healthkard.in" target="_blank" rel="noreferrer" ><CiMail /></a>
              <a href="https://www.linkedin.com/company/healthkard/posts/?feedView=all" target="_blank" rel="noreferrer" ><CiLinkedin /></a>
              <a href="https://www.instagram.com/healthkard.in" target="_blank" rel="noreferrer" ><CiInstagram /></a>
            </div>
          </div>
        </div>

        {/* Divider for Mobile */ }
        <div className="block lg:hidden h-[2px] bg-white my-4"></div>

        {/* HealthKard Plans Section */ }
        <div className="flex flex-col w-1/2">
          <h2 className="font-semibold">HealthKard Plans</h2>
          <div className="flex flex-col gap-2 font-light">
            { plans.map((plan, index) => (
              <div key={ index } onClick={ () => onClickPlan(plan.id) } className="cursor-pointer">{ plan.name }</div>
            )) }
          </div>
        </div>

      </div>
      <div className="flex flex-col items-center py-4">
        <h2 className="font-semibold mb-2">Download Apps</h2>
        <div className="flex gap-2">
          <img src={ GooglePlayStoreLogo } alt="Google Play Store" className="w-28 h-10" />
          <img src={ AppStoreLogo } alt="App Store" className="w-28" />
        </div>
      </div>

    </div>
  );
};

export default withTheme(Footer)
