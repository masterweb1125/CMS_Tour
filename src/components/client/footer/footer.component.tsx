'use client'
import React from 'react'
import { Logo } from '@/src/utils/images/images'
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationIcon from '@mui/icons-material/LocationOn';

import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Client_Footer = (props: Props) => {
  return (
    <footer className='bg-primary w-full pt-16'>
      <div className='max-w-7xl m-auto px-4'>
        <div className="footer-content text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-10 gap-y-8">
          <div className='flex flex-col gap-6 px-2'>
            <div className='logo-container relative overflow-hidden w-20 h-20'>
              <Image alt='Tropical' src={Logo.src} fill />
            </div>
            <p className='font-normal'>To taske Trival example which us ever undertakes laborious physica Exerpicne expert osome</p>
            <div className="icons-list flex flex-row gap-3">
              <Link href="#" passHref>
                <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                <i className="lni lni-facebook-fill text-2xl text-black"></i>
                </div>
              </Link>
              <Link href="#" passHref>
                <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                <i className="lni lni-twitter-fill text-2xl text-black"></i>
                </div>
              </Link>
              <Link href="#" passHref>
                <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                <i className="lni lni-pinterest text-2xl text-black"></i>
                </div>
              </Link>
              <Link href="#" passHref>
                <div className='bg-white rounded-full w-10 h-10 flex justify-center items-center'>
                <i className="lni lni-instagram-original text-2xl text-black"></i>
                </div>
              </Link>
            </div>
          </div>

          <div className='footer-m-container px-2 md:px-[15%]'>
            <h2 className='text-lg font-semibold leading-8 mb-6'>Pages</h2>
            <ul className='text-sm font-normal leading-8'>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Tours</Link></li>
              <li><Link href="#">Destination</Link></li>
              <li><Link href="#">Featured</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
          </div>

          <div className='footer-m-container px-2'>
            <h2 className='text-lg font-semibold leading-8 mb-6'>Newsletter</h2>
            <p className='text-sm font-normal leading-6 text-wrap max-w-72'>Subscribe our newsletter to get our latest updates & news.</p>
            <div className="subscription-container mt-3">
              <FormControl sx={{  }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                sx={{ 
                  background:'white',
                 }}
                type='text'
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{ 
                        color:'#FFA500',
                        transform:"rotate(-40deg)"
                       }}
                      size='large'
                      aria-label="subscribe to our newsletter"
                      onClick={() => console.log("Button clicked")}
                      edge="end"
                    >
                      <SendIcon fontSize='medium' />
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            </div>
          </div>
          <div className='footer-m-container px-2'>
            <h2 className='text-lg font-semibold leading-8 mb-6'>Contact</h2>
            <div className="contact-content flex flex-col gap-2">
              <div className="contact-item flex flex-row gap-2 items-center">
                <div className="contact-icon">
                  <IconButton sx={{ background:'white',color:'#FFA500',
                    '&:hover': {
                      backgroundColor: 'white', 
                      cursor:'auto'
                    },
                  }}>
                    <LocalPhoneIcon />
                  </IconButton>
                </div>
                <div className='flex flex-col'>
                  <div className="item-heading text-xs font-normal leading-5">
                    Drop a line
                  </div>
                  <div className="item-text text-sm font-medium leading-6">
                    +00 -249920-3323
                  </div>
                </div>
              </div>

              <div className="contact-item flex flex-row gap-2 items-center">
                <div className="contact-icon">
                  <IconButton sx={{ background:'white',color:'#FFA500',
                    '&:hover': {
                      backgroundColor: 'white', 
                      cursor:'auto'
                    },
                  }}>
                    <MailIcon />
                  </IconButton>
                </div>
                <div className='flex flex-col'>
                  <div className="item-heading text-xs font-normal leading-5">
                    Email Address
                  </div>
                  <div className="item-text text-sm font-medium leading-6">
                    gadai@gad.com
                  </div>
                </div>
              </div>

              <div className="contact-item flex flex-row gap-2 items-center">
                <div className="contact-icon">
                  <IconButton sx={{ background:'white',color:'#FFA500',
                    '&:hover': {
                      backgroundColor: 'white', 
                      cursor:'auto'
                    },
                  }}>
                    <LocationIcon />
                  </IconButton>
                </div>
                <div className='flex flex-col'>
                  <div className="item-heading text-xs font-normal leading-5">
                    Visit Office
                  </div>
                  <div className="item-text text-sm font-medium leading-6">
                    583 main street, NY, USA
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="end-footer-bar text-white flex flex-row justify-center md:justify-between flex-wrap py-8 border-t border-white gap-4">
          <p className='text-sm font-normal leading-normal capitalize '>&copy; Gad.AI. All rights reserved.</p>
          <div className="legal-menu text-sm font-normal leading-normal flex flex-row gap-6">
            <Link href='#'>Terms</Link>
            <Link href='#'>Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Client_Footer