import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  LogoTransparent,Cover } from '@/src/utils/images/images'
import { Button } from '@mui/material'
import './header.styles.css'
import Client_HeaderNavigation from './header-navigation.component'
import Client_MobileDrawer from './header-drawer.component'


type Props = {}

const Client_Header = (props: Props) => {
  return (
    <header className="absolute w-full bg-transparent overflow-hidden">
      <div className='max-w-7xl m-auto px-4 flex flex-row flex-wrap justify-between items-center py-3'>
      <div className='overflow-hidden relative'><Image src={LogoTransparent.src} alt='Tropical' width={60} height={64} /></div>
      
      
      <Client_HeaderNavigation />

      <div className='account-actions flex flex-row gap-2'>
        <div className='btn text-white bg-transparent hover:cursor-pointer px-4 py-2 rounded-md min-w-20 text-center'>Login</div>
        <div className='text-black text-base font-semibold leading-6 bg-white hover:cursor-pointer px-4 py-2 rounded-md min-w-22 text-center'>
          Register
        </div>
      </div>
      <Client_MobileDrawer />
      </div>
    </header>
  )
}

export default Client_Header