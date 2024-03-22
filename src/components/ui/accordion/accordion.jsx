import { Disclosure } from '@headlessui/react'
import React from 'react'
import AccordionArrowIcon from '../../../assets/icon/accordion-arrow-icon'
import './accordion.css'

const Accordion = ({children, quetion}) => {
  return (
    <Disclosure>
      <Disclosure.Button className='flex w-full py-2 justify-between  items-center bg-primary transition px-1  mb-2 text-white rounded-t-md'>
        <h2 className=' font-normal text-xs '>{quetion}</h2>
        <div>
            <AccordionArrowIcon />
        </div>
      </Disclosure.Button>
      <Disclosure.Panel className='px-1'>{children}</Disclosure.Panel>
    </Disclosure>
  )
}

export default Accordion
