import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { TiSocialYoutubeCircular } from 'react-icons/ti'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
    return (
        <div className='w-full bg-black text-white grid md:grid-cols-2  py-10 px-20'>
            <div className='grid gap-y-9'>
                <div className='grid grid-cols-3 gap-x-3'>
                    <div className='flex flex-col gap-y-3 '>
                        <Link className='font-bold tracking-tighter md:text-sm text-xs'>FIND A STORE</Link>
                        <Link className='font-bold tracking-tighter md:text-sm text-xs'>BECOME A MEMBER</Link>
                        <Link className='font-bold tracking-tighter md:text-sm text-xs'>Send Us Feedback</Link>
                        <Link className='font-bold tracking-tighter md:text-sm text-xs'>STUDENT FEEDBACK</Link>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Link className='font-bold tracking-tighter text-sm'>GET HELP</Link>
                        <Link className='text-gray-500 text-xs md:text-sm font-bold font-mono hover:text-white'>Order Status</Link>
                        <Link className='text-gray-500 text-xs md:text-sm font-bold font-mono hover:text-white'>Delivery</Link>
                        <Link className='text-gray-500 text-xs md:text-sm font-bold font-mono hover:text-white'>Returns</Link>
                        <Link className='text-gray-500 text-xs md:text-sm font-bold font-mono hover:text-white'>Payment Options</Link>
                        <Link className='text-gray-500 text-xs md:text-sm font-bold font-mono hover:text-white'>Contact Us On Nike.com Inquiries</Link>
                        <Link className='text-gray-500 text-xs md:text-sm font-bold font-mono hover:text-white'>Contact Us On All Other Inquiries</Link>
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <Link className='font-bold tracking-tighter text-sm'>ABOUT NIKE</Link>
                        <Link className='text-gray-500 text-xs md:text:sm font-bold font-mono hover:text-white'>News</Link>
                        <Link className='text-gray-500 text-xs md:text:sm font-bold font-mono hover:text-white'>Careers</Link>
                        <Link className='text-gray-500 text-xs md:text:sm font-bold font-mono hover:text-white'>Investors</Link>
                        <Link className='text-gray-500 text-xs md:text:sm font-bold font-mono hover:text-white'>Sustainability</Link>
                    </div>
                </div>
                <div className='flex items-center my-2'>
                    <FaLocationDot className='text-white' />
                    <p className='ms-4 font-bold text-sm'>India<span className='font-semibold text-xs ms-4'>© 2023 Nike, Inc. All Rights Reserved</span></p>
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex justify-center my-3 md:justify-end gap-x-5'>
                    <AiFillTwitterCircle className='text-3xl text-slate-500 hover:text-white' />
                    <FaFacebook className='text-3xl text-slate-500 hover:text-white' />
                    <TiSocialYoutubeCircular className='text-3xl text-slate-500 hover:text-white' />
                    <AiFillInstagram className='text-3xl text-slate-500 hover:text-white' />
                </div>
                <div className='flex gap-x-6 md:justify-end justify-center'>
                    <Link className='text-xs font-semibold text-zinc-600 hover:text-white text-center'>Guides</Link>
                    <Link className='text-xs font-semibold text-zinc-600 hover:text-white text-center'>Terms of Sale</Link>
                    <Link className='text-xs font-semibold text-zinc-600 hover:text-white text-center'>Terms of Use</Link>
                    <Link className='text-xs font-semibold text-zinc-600 hover:text-white text-center'>Nike Privacy Policy</Link>
                </div>
            </div>
        </div>
    )
}

export default Footer