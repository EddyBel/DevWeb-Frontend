import { Button, Tooltip, Link } from '@nextui-org/react';
import { IoLogoGithub } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { PiTrademarkRegisteredBold } from 'react-icons/pi';
import { FaBagShopping } from 'react-icons/fa6';
import { FaGitlab } from 'react-icons/fa6';
import { SiGmail } from 'react-icons/si';
import { URL_GITHUB, URL_GITLAB, URL_GMAIL, URL_LINKEDIN, URL_STORE } from '../../web.config';

export function Footer() {
  return (
    <footer className="w-full p-6 mt-20">
      <div className="w-full h-full min-h-[100px] rounded-xl bg-neutral-100/90 dark:bg-neutral-950/80 shadow-xl shadow-neutral-950/10 max-w-[1000px] m-auto flex flex-wrap justify-between items-center gap-5 py-3 px-5">
        <div className="w-full md:w-[fit-content] flex justify-center">
          <p className="flex items-center gap-2 text-3xl font-bold text-neutral-800/80 dark:text-neutral-200/70">
            <PiTrademarkRegisteredBold />
            EddyBel
          </p>
        </div>
        <div className="w-full md:w-[fit-content] flex justify-center md:justify-normal gap-2">
          <ButtonSocialNetwork color="default" label="Github" path={URL_GITHUB}>
            <IoLogoGithub className="text-2xl" />
          </ButtonSocialNetwork>
          <ButtonSocialNetwork color="warning" label="Gitlab" path={URL_GITLAB}>
            <FaGitlab className="text-2xl" />
          </ButtonSocialNetwork>
          <ButtonSocialNetwork color="primary" label="Linkedin" path={URL_LINKEDIN}>
            <FaLinkedin className="text-2xl" />
          </ButtonSocialNetwork>
          <ButtonSocialNetwork color="danger" label="Gmail" path={`mailto:${URL_GMAIL}`}>
            <SiGmail className="text-2xl" />
          </ButtonSocialNetwork>
          <ButtonSocialNetwork label="Shop" color="secondary" path={URL_STORE}>
            <FaBagShopping className="text-2xl" />
          </ButtonSocialNetwork>
        </div>
      </div>
    </footer>
  );
}

function ButtonSocialNetwork({ path, children, label, color = 'primary' }) {
  return (
    <Tooltip content={label} color={color} className="capitalize">
      <Button isIconOnly href={path} as={Link} color={color} variant="ghost" aria-label="Social network">
        {children}
      </Button>
    </Tooltip>
  );
}
