"use client";

import Arrow from "@/components/icons/Arrow";
import GithubIcon from "@/components/icons/Github";
import LinkedInIcon from "@/components/icons/LinkedIn";
import Mail from "@/components/icons/Mail";

import TwitterIcon from "@/components/icons/Twitter";
import ThemeSwitch from "@/components/ThemeSwitch";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <main className='min-h-screen max-w-5xl mx-auto flex flex-col  font-montserrat p-6 sm:p-24'>
        <div className='flex justify-end mb-12'>
          <ThemeSwitch />
        </div>
        <div className='text-black dark:text-primary'>
          <h1 className='text-4xl font-bold'>Taha Mutlu Kanar</h1>
          <p className='text-xl'>Software Developer</p>
        </div>

        <div className='flex flex-col sm:flex-row items-start sm:items-center my-5'>
          <Image
            src='/profile.png'
            className='w-24 h-24 rounded-full bg-black saturate-0 dark:saturate-100 transition-all duration-700 hover:saturate-100'
            priority
            alt='Profil Fotoğrafı'
          />
          <p className='mt-3 sm:mt-0 sm:ml-3'>
            Hey, I&apos;m Taha, a software developer residing in Istanbul.
            I&apos;m currently working at Akinon.
          </p>
        </div>
        <hr className='h-1 block sm:hidden mb-3' />
        <p>
          As a highly motivated and energetic individual, I am always open to
          new opportunities for development, particularly those that require
          strong teamwork. I am solution-oriented and driven to find effective
          solutions to complex problems. My strong work ethic and commitment to
          hard work enable me to tackle challenges with enthusiasm and
          perseverance. You can always reach me via
          <Link className='mx-1 font-medium' href='mailto:tahakanar@gmail.com'>
            my email
          </Link>
          address.
        </p>
        <div className='flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2 mt-4'>
          <Link
            className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600'
            href='mailto:tahakanar@gmail.com'
            target='_blank'
          >
            <div className='flex items-center space-x-3'>
              <Mail className='text-black dark:text-primary w-8' />
              <span className='font-medium'>Email</span>
            </div>
            <Arrow className='text-black dark:text-primary' />
          </Link>
          <Link
            className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600'
            href='https://twitter.com/TahaKanar'
            target='_blank'
          >
            <div className='flex items-center space-x-3'>
              <TwitterIcon className='text-black dark:text-primary w-8' />
              <span className='font-medium'>Twitter</span>
            </div>
            <Arrow className='text-black dark:text-primary' />
          </Link>
          <Link
            className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600'
            href='https://github.com/tahakanar'
            target='_blank'
          >
            <div className='flex items-center space-x-3'>
              <GithubIcon className='text-black dark:text-primary w-8' />
              <span className='font-medium'>Github</span>
            </div>
            <Arrow className='text-black dark:text-primary' />
          </Link>
          <Link
            className='border border-1 flex-1 p-3 rounded-md flex justify-between items-center border-black dark:border-gray-600'
            href='https://www.linkedin.com/in/tahamutlukanar/'
            target='_blank'
          >
            <div className='flex items-center space-x-2'>
              <LinkedInIcon className='text-black dark:text-primary w-8' />
              <span className='font-medium'>LinkedIn</span>
            </div>
            <Arrow className='text-black dark:text-primary' />
          </Link>
        </div>
      </main>
    </ThemeProvider>
  );
}
