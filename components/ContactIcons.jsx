import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaTwitter, FaUser } from 'react-icons/fa';

const ContactIcons = () => {
  const iconList = [
    {
      name: 'Porfolio',
      icon: <FaUser />,
      url: 'https://www.andreacardinale.me',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/Mirthis',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/andrea-cardinale-fullstack/',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/Mirthis',
    },
    {
      name: 'Mail',
      icon: <AiOutlineMail />,
      url: '/#contact',
      internal: true,
    },
  ];

  return (
    <div className="flex gap-5 py-4">
      {iconList.map((icon) => (
        <Link key={icon.name} href={icon.url}>
          <a target={icon.internal ? '' : '_blank'}>
            <div className="cursor-pointer rounded-full border-2 border-sky-700 p-3 text-sky-400 duration-300 ease-in hover:scale-110">
              {icon.icon}
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ContactIcons;
