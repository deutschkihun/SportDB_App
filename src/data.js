import {HiDocumentReport} from 'react-icons/hi'
import {RiTeamFill} from 'react-icons/ri'
import {BsFillPersonFill} from 'react-icons/bs'
import {GrContactInfo} from 'react-icons/gr'
import React from 'react';
import profile from './images/profile.png'

export const sublinks = [
  {
    page: 'Sport Search',
    links: [
      { label: 'Team', icon: <RiTeamFill />, url: '/team' },
      { label: 'Player', icon: <BsFillPersonFill />, url: '/player' }
    ],
  },
  {
    page: 'Information',
    links: [
      { label: 'About', icon: <HiDocumentReport />, url: '/about' },
      { label: 'Contact', icon: <GrContactInfo />, url: '/contact' }
    ]
  }

];



export const reviews = [
  {
    id: 1,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    name: 'maria ferguson',
    title: 'football fan',
    quote:
      "Thanks for sport DB. This application is very useful for football fan"
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    name: 'john doe',
    title: 'student',
    quote:
      'Big respect to your effort for this amazing application. I really like all features in this platform',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
    name: 'peter smith',
    title: 'product designer',
    quote:
      'simple design and search engine. good job bro',
  },
  {
    id: 4,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    name: 'susan andersen',
    title: 'baseball fan',
    quote:
      "It's not really detail like MLB website but pretty sure that people can use it easily",
  },
   {
    id: 5,
    image: profile,
    name: 'Kihun',
    title: 'Coding enthusiast',
    quote:
      "As a developler who made this service, I'm very pround of this application.",
  },
];

