import Image from 'next/image';

import Shouter from '../public/assets/images/Shouter.jpg';
import ShouterSmall from '../public/assets/images/ShouterSmall.jpg';
import MyMovieDB from '../public/assets/images/MyMovieDB.jpg';
import MyMovieDBSmall from '../public/assets/images/MyMovieDBSmall.jpg';

const ProjectsData = [
  {
    title: 'shouter',
    link: 'https://www.facebook.com/moldovanu.andrei.165/',
    top: false,
    primary: false,
    primaryImage: (
      <Image
        src={Shouter}
        alt="shouter"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
    secondaryImage: (
      <Image
        src={ShouterSmall}
        alt="shouter small"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
  {
    title: 'mymoviedb',
    link: 'https://www.instagram.com/m.albert_andrei/',
    top: true,
    primary: true,
    primaryImage: (
      <Image
        src={MyMovieDB}
        alt="avatar"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
    secondaryImage: (
      <Image
        src={MyMovieDBSmall}
        alt="shouter small"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/albert-andrei-moldovanu-0a8199209/',
    top: false,
    primary: true,
    primaryImage: (
      <Image
        src={Shouter}
        alt="avatar"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
  {
    title: 'github',
    link: 'https://github.com/Albert-Andrei',
    top: true,
    primary: true,
    primaryImage: (
      <Image
        src={Shouter}
        alt="avatar"
        layout="fill"
        placeholder="blur"
        objectFit="cover"
      />
    ),
  },
];

export default ProjectsData;
