import React from 'react'
import logo from "../Assets/png/Logo.png"

const Signup = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-white px-4 py-8'>
<div className='flex flex-col lg:flex-row w-full max-w-7xl gap-y-12 lg:gap-y-0 lg:gap-x-24 justify-center items-center'>

                <div className='hidden lg:flex w-full lg:w-1/2 justify-center items-center px-4 md:px-10'>
                    <img 
                        src={logo} 
                        alt='Main Logo' 
                           className='w-1/2 max-w-xs sm:max-w-sm md:max-w-md' 
                    />
                </div>

                 <div className='w-full lg:w-1/2 flex justify-center items-center px-4 md:px-10'>
                    <div className='w-full max-w-sm'>
                        <div className='flex justify-center mb-6'>
                            <img src={logo} alt='Small Logo' className='w-10 h-10' />
                        </div>
                        <h2 className='text-[28px] sm:text-[32px] font-bold text-center text-gray-900'>
                            Create an account
                        </h2>
                        <p className='text-[14px] sm:text-[16px] text-center text-[#667085] mt-1 mb-6'>
                            Start your 30-day free trial.
                        </p>

                        <form className='space-y-5'>
                            <div className='flex flex-col'>
                                <label htmlFor='name' className='text-sm font-medium text-gray-500 mb-1'>Name*</label>
                                <input
                                    type='text'
                                    id='name'
                                    placeholder='Enter your name'
                                    className='border border-gray-300 rounded-lg px-4 py-2 text-sm h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='email' className='text-sm font-medium text-gray-500 mb-1'>Email*</label>
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Enter your email'
                                    className='border border-gray-300 rounded-lg px-4 py-2 text-sm h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='password' className='text-sm font-medium text-gray-500 mb-1'>Password*</label>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='********'
                                    className='border border-gray-300 rounded-lg px-4 py-2 text-sm h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                                <p className='text-sm text-gray-500 mt-1'>
                                    Must be at least 8 characters.
                                </p>
                            </div>
                            <button
                                type='submit'
                                className='w-full bg-blue-600 text-white text-base font-semibold py-3 rounded-lg hover:bg-blue-700 transition'
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup
