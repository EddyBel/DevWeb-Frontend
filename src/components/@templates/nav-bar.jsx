import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  Link,
  Button,
  NavbarMenuItem,
  Divider,
} from '@nextui-org/react';
import { AvatarCard } from '../@common/avatar-cards';
import { DropdownNavbar } from '../@buttons/dropdown-navbar';
import { FiBook } from 'react-icons/fi';
import { FiBookOpen } from 'react-icons/fi';
import { GrFavorite } from 'react-icons/gr';
import { FaCodepen } from 'react-icons/fa6';
import { FaHouse } from 'react-icons/fa6';
import { FaNetworkWired } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import {
  SOURCE_CV,
  URL_GITHUB,
  URL_LINKEDIN,
  USERNAME,
  USERNAME_PROFILE,
  USER_AVATAR,
  USER_DESCRIPTION,
  USER_HASHTAG,
  USER_POSITION,
  USER_STATUS,
} from '../../web.config';
// import { Navigation } from '../../web.config.json';

export function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="animation-navbar">
      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
        <NavbarBrand>
          <AvatarCard
            img={USER_AVATAR}
            name={USERNAME}
            userProfile={USERNAME_PROFILE}
            position={USER_POSITION}
            status={USER_STATUS}
            hashtag={USER_HASHTAG}
            description={USER_DESCRIPTION}
            github={URL_GITHUB}
            linkedin={URL_LINKEDIN}
            key={`avatar-card-eddybel`}
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color={'foreground'} className="hover:text-blue-400 transition-colors duration-150" href={'/home'}>
            Inicio
          </Link>
        </NavbarItem>
        <DropdownNavbar
          label="Blog"
          items={[
            {
              label: 'Ultimos articulos',
              icon: <GrFavorite className="text-3xl text-danger" />,
              description: 'Articulos destacados y recientes.',
              route: '/home/blog',
            },
            {
              label: 'Posts',
              icon: <FiBookOpen className="text-3xl text-warning" />,
              description: 'Articulos y tutoriales de código.',
              route: '/home/blog/posts',
            },
            {
              label: 'Snippets',
              icon: <FaCodepen className="text-3xl text-primary" />,
              description: 'Snippets de programación y ejercicios.',
              route: '/home/blog/snippets',
            },
            {
              label: 'Apuntes',
              icon: <FiBook className="text-3xl text-secondary" />,
              description: 'Apuntes de la universidad.',
              route: '/home/blog/notes',
            },
          ]}
        />
        <NavbarItem>
          <Link color={'foreground'} className="hover:text-blue-400 transition-colors duration-150" href="/works">
            Proyectos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href={SOURCE_CV}
            variant="flat"
            className="text-md font-bold"
            startContent={<IoDocumentText className="text-xl" />}
          >
            CV
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="pt-6">
        <NavbarMenuItem className="flex items-center gap-2 my-2">
          <FaHouse className="text-3xl text-success" />
          <Link color="foreground" className="w-full" href="/home" size="lg">
            Inicio
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem className="flex items-center gap-2 my-2">
          <GrFavorite className="text-3xl text-danger" />
          <Link color="foreground" className="w-full" href="/home/blog" size="lg">
            Blog
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pl-3 flex items-center gap-2">
          <FiBookOpen className="text-3xl text-warning" />
          <Link color="foreground" className="w-full" href="/home/blog/posts" size="lg">
            Posts
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pl-3 flex items-center gap-2">
          <FaCodepen className="text-3xl text-primary" />
          <Link color="foreground" className="w-full" href="/home/blog/snippets" size="lg">
            Snippets
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem className="pl-3 flex items-center gap-2">
          <FiBook className="text-3xl text-secondary" />
          <Link color="foreground" className="w-full" href="/home/blog/notes" size="lg">
            Notes
          </Link>
        </NavbarMenuItem>
        <Divider />
        <NavbarMenuItem className="flex items-center gap-2 my-2">
          <FaNetworkWired className="text-3xl text-primary" />
          <Link color="foreground" className="w-full" href="/works" size="lg">
            Proyectos
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
