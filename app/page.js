"use client";

import GithubIcon from "@/components/icons/Github";
import LinkedInIcon from "@/components/icons/LinkedIn";
import MailIcon from "@/components/icons/Mail";
import TwitterIcon from "@/components/icons/Twitter";
import ThemeSwitch from "@/components/ThemeSwitch";
import { ThemeProvider } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <main className='min-h-screen max-w-4xl mx-auto flex flex-col font-montserrat p-24'>
        <div className='text-black dark:text-primary'>
          <h1 className='text-4xl font-bold'>Taha Mutlu Kanar</h1>
          <p className='text-xl'>Developer</p>
        </div>

        <div className='flex flex-row items-center my-5'>
          <Image
            src='/profile.png'
            width={100}
            height={100}
            className='rounded-full bg-black saturate-0 dark:saturate-100 transition-all duration-700 hover:saturate-100'
            priority
            alt='Profil Fotoğrafı'
          />
          <p className='ml-3'>
            Hey, I'm Taha, a software developer residing in Istanbul.
          </p>
        </div>
        <p>
          As a highly motivated and energetic individual, I am always open to
          new opportunities for development, particularly those that require
          strong teamwork. I am solution-oriented and driven to find effective
          solutions to complex problems. My strong work ethic and commitment to
          hard work enable me to tackle challenges with enthusiasm and
          perseverance.
        </p>
        <div className='flex space-x-4'>
          <Link href='https://twitter.com/TahaKanar' target='_blank'>
            <TwitterIcon className='text-black dark:text-primary w-8' />
          </Link>
          <Link href='https://github.com/tahakanar' target='_blank'>
            <GithubIcon className='text-black dark:text-primary w-8' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/tahamutlukanar/'
            target='_blank'
          >
            <LinkedInIcon className='text-black dark:text-primary w-8' />
          </Link>
        </div>
        <ThemeSwitch />
      </main>
    </ThemeProvider>
  );
}
