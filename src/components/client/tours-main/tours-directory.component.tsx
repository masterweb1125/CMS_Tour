import React from 'react'
import type { Tours } from '@/src/types/client/tours.types'
import Client_ToursDirectoryItem from './tours-directory-item.component'
import Client_Container from '../container/container.component'

type ToursProps={
  tours:Array<Tours> | undefined;
  directoryTitle:string;
  subPara:string;
}
const Client_ToursDirectory = ({tours,directoryTitle,subPara}:ToursProps) => {
  return (
      <Client_Container>
        <div className="directory-titles pt-20 pb-8">
          <h1 className='text-3xl md:text-4xl lg:text-5xl text-black font-bold leading-[72px] mb-4 capitalize'>{directoryTitle}</h1>
          <h5 className='text-gray-text text-lg leading-7 font-medium'>{subPara}</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center mb-10 md:mb-16 lg:mb-20">
        {
          tours?.map((tourItem,index) => {
            return(
              <Client_ToursDirectoryItem key={index} tour={tourItem} />
            )
          })
        }
        </div>
      </Client_Container>
  )
}

export default Client_ToursDirectory