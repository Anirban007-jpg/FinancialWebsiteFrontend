'use client'
import React, { useEffect, useState } from 'react'
import { getCookie, isAuth } from '../../../../../actions/auth';
import { IoSearch } from 'react-icons/io5';
import Link from 'next/link';
import Sidebar from '../Common/Sections/Sidebar';
import { FaBookReader, FaUser } from 'react-icons/fa';
import Main from '../Common/Sections/Main';
import { useTypewriter } from 'react-simple-typewriter';

const DebtorsDashboardComponent = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(isAuth());
    }, [])


    const [values, setValues] = useState({
        Account_Name: "",
        Financial_Year: "",
        Assessment_Year: "",
        Rate_of_tax: "",
        Type_of_Item: "",
        Account_Group: "",
        Head_Item_Grou: "",
        Tax_Account_Type: "",
        Account_Class: "",
        Bal_Start: "",
        Account_SubClass: "",
        Account_Balance_Type: "",
        Currency: "",
        error: '',
        success: '',
        loading: false
    });

    const [text] = useTypewriter({
        words: ['Debtors'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 100
    })

    const { Account_Name, Currency, Financial_Year, Assessment_Year, Rate_of_tax, Type_of_Item, Account_Group, Head_Item_Group, Tax_Account_Type, Account_Class, Bal_Start, Account_SubClass, Account_Balance_Type, success, error, loading } = values;

    const handleChangeInput = (name) => e => {
        setValues({ ...values, error: '', success: '', [name]: e.target.value })
    }

    const token = getCookie('token');
    const handleFormsubmitData = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: '' });
        const ledger = { Account_Name, Currency, Financial_Year, Assessment_Year, Type_of_Item, Account_Group, Head_Item_Group, Tax_Account_Type, Account_Class, Bal_Start, Account_SubClass, Account_Balance_Type };
        // console.log(ledger);

    }


    return (
        <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
            <Sidebar />
            <Main>
                <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-1 gap-2'>
                    <div>
                        <h1 className='text-2xl text-black font-semibold'>Debtors Page</h1>
                    </div>
                    <div className='flex justify-between items-center gap-10'>
                        <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all' />
                        <div id="client-info" className='flex justify-center items-center gap-4'>
                            <Link href={`${data.profile}`}><img src="/download.png" alt='client-image' className='rounded-full w-12 h-12 bg-white' /></Link>
                            <div className='flex flex-col justify-center items-start'>
                                <div className='flex justify-center text-black items-center -mb-1 gap-2'>
                                    <h1 className='text-lg font-bold text-black'>Hi, {data.Name}</h1>
                                </div>
                                <p className='text-black'>{data.role}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="main-section" className='grid lg:grid-cols-1 grid-cols-1 gap-4 w-full h-screen'>
                    <div id="left" className='col-span-1 p-2 gap-0 flex flex-col justify-between items-center h-full'>
                        {/* three grid layout */}

                        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 w-full mb-0'>
                            <Link href="/Individual/Display/Ledgers">
                                <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                                    <div className='w-full flex justify-between items-center'>
                                        <h1 className='text-md text-black font-extrabold '>Display Ledgers</h1>
                                        <h1 className='text-green-600 font-bold'>Multiple</h1>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='flex flex-col justify-center items-start gap-1'>
                                            <h1 className='text-3xl text-black font-semibold'><Link href="/Individual/Display/Ledgers">Click Here to see all Ledgers</Link></h1>
                                        </div>
                                        <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                                            <Link href="/Individual/Display/Ledgers"><FaBookReader className='w-[30px] h-[30px]' /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link href="/Individual/Create/Debtors">
                                <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                                    <div className='w-full flex justify-between items-center'>
                                        <h1 className='text-md text-black font-extrabold '>Debtor</h1>
                                        <h1 className='text-green-600 font-bold'>Newly Created</h1>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='flex flex-col justify-center items-start gap-1'>
                                            <h1 className='text-3xl text-black font-semibold'>will be developed Later</h1>
                                            <p className='text-slate-700'></p>
                                        </div>
                                        <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full'>
                                            <FaUser className='w-[30px] h-[30px]' />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='w-full flex flex-col justify-center items-center bg-green-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-105 cursor-pointer'>
                                <div className='w-full flex justify-between items-center'>
                                    <h1 className='text-md text-black font-extrabold '>Users</h1>
                                    <h1 className='text-green-600 font-bold'>Newly Joined</h1>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='flex flex-col justify-center items-start gap-1'>
                                        <h1 className='text-3xl text-black font-semibold'>30</h1>
                                        <p className='text-slate-700'>followers</p>
                                    </div>
                                    <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full'>
                                        <FaUser className='w-[30px] h-[30px]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='mt-0 lgg:mt-[-2550px] w-screen lgg:h-full lgg:relative'>
                    <div className='h-full w-screen flex items-center justify-center p-5'>
                        <div className='main-container-ledger'>
                            <h1 className='container-header'>Create {text}</h1>
                            <form className='form-ledger'>
                                <div className='form-first'>
                                    <div className='details personal'>
                                        <span className='title-for-form underline'>
                                            Ledger Details
                                        </span>
                                        <div className='fields'>
                                            <div className='input-field'>
                                                <label>Financial Year</label>
                                                <select value={Financial_Year} onChange={handleChangeInput("Financial_Year")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option>Choose Year</option>
                                                    <option value="2023-24">2023-24</option>
                                                    <option value="2024-25">2024-25</option>
                                                    <option value="2025-26">2025-26</option>
                                                    <option value="2026-27">2026-27</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Assessment Year</label>
                                                <select value={Assessment_Year} onChange={handleChangeInput("Assessment_Year")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option>Choose Year</option>
                                                    <option value="2024-25">2024-25</option>
                                                    <option value="2025-26">2025-26</option>
                                                    <option value="2026-27">2026-27</option>
                                                    <option value="2027-28">2027-28</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Account Name</label>
                                                <input value={Account_Name} onChange={handleChangeInput("Account_Name")} type="text" className="filed-input" id="input-field" placeholder='' />
                                            </div>
                                            <div className='input-field'>
                                                <label>Type of Item</label>
                                                <select value={Type_of_Item} onChange={handleChangeInput("Type_of_Item")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option>Choose Statement</option>
                                                    <option value="Balance Sheet">Balance Sheet</option>
                                                    <option value="Profit & Loss Statement">Profit & Loss</option>
                                                    <option value="ITR Item">ITR Item</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Currency</label>
                                                <input value={Currency} onChange={handleChangeInput("Currency")} type="text" className="filed-input" id="input-field" placeholder='' />
                                            </div>
                                            <div className='input-field'>
                                                <label>Account Group</label>
                                                <input value={Account_Group} onChange={handleChangeInput("Account_Group")} type="text" className="filed-input" id="input-field" placeholder='' />
                                            </div>
                                            <div className='input-field'>
                                                <label>Head Item Group</label>
                                                <select value={Head_Item_Group} onChange={handleChangeInput("Head_Item_Group")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option value="">Choose Head Account Group</option>
                                                    <option value="Expenses">Expenses</option>
                                                    <option value="Revenue">Revenue</option>
                                                    <option value="Contingent Liability">Contingent Liability</option>
                                                    <option value="Current Assets">Current Assets</option>
                                                    <option value="Non-Current Assets">Non-Current Assets</option>
                                                    <option value="Current Liabilities">Current Liabilities</option>
                                                    <option value="Non-Current Liabilities">Non-Current Liabilities</option>
                                                    <option value="Share Capital">Share Capital</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Account Class</label>
                                                <select value={Account_Class} onChange={handleChangeInput("Account_Class")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option value="">Choose Account Class</option>
                                                    <option value="Assets">Assets</option>
                                                    <option value="Liabilities">Liabilities</option>
                                                    <option value="Expenses">Expenses</option>
                                                    <option value="Income">Income</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Account Sub Class</label>
                                                <select value={Account_SubClass} onChange={handleChangeInput("Account_SubClass")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option value="">Choose Account Sub Class</option>
                                                    <option value="Indirect Income">Indirect Income</option>
                                                    <option value="Direct Income">Direct Income</option>
                                                    <option value="Indirect Expenses">Indirect Expenses</option>
                                                    <option value="Direct Expenses">Direct Expenses</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Account Balance Type</label>
                                                <select value={Account_Balance_Type} onChange={handleChangeInput("Account_Balance_Type")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option>Choose Balance Type</option>
                                                    <option value="Debit">Debit</option>
                                                    <option value="Credit">Credit</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Account Opening Balance</label>
                                                <input value={Bal_Start} onChange={handleChangeInput("Bal_Start")} type="text" className="filed-input" id="input-field" placeholder='' />
                                            </div>

                                            {Account_Name == "Input CGST" && (
                                                <div className='input-field'>
                                                    <label>Rate of Tax</label>
                                                    <input value={Rate_of_tax} onChange={handleChangeInput("Rate_of_tax")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                </div>
                                            )}
                                            {Account_Name == "Output CGST" && (
                                                <div className='input-field'>
                                                    <label>Rate of Tax</label>
                                                    <input value={Rate_of_tax} onChange={handleChangeInput("Rate_of_tax")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                </div>
                                            )}
                                            {Account_Name == "Input SGST" && (
                                                <div className='input-field'>
                                                    <label>Rate of Tax</label>
                                                    <input value={Rate_of_tax} onChange={handleChangeInput("Rate_of_tax")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                </div>
                                            )}
                                            {Account_Name == "Output SGST" && (
                                                <div className='input-field'>
                                                    <label>Rate of Tax</label>
                                                    <input value={Rate_of_tax} onChange={handleChangeInput("Rate_of_tax")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                </div>
                                            )}
                                            {Account_Name == "Input IGST" && (
                                                <div className='input-field'>
                                                    <label>Rate of Tax</label>
                                                    <input value={Rate_of_tax} onChange={handleChangeInput("Rate_of_tax")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                </div>
                                            )}
                                            {Account_Name == "Output IGST" && (
                                                <div className='input-field'>
                                                    <label>Rate of Tax</label>
                                                    <input value={Rate_of_tax} onChange={handleChangeInput("Rate_of_tax")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <button className="submitbutton">
                                        <span className="buttontext">Submit</span>

                                    </button>
                                    <button className="submitbutton">
                                        <span className="buttontext">Update Balance</span>

                                    </button>
                                </div>

                                {success && (
                                    <div className='border-s border-[2px] bg-green-500 flex flex-row items-center justify-center rounded-full'>
                                        <span className="text-white font-bold text-center mt-0">
                                            {success}
                                        </span>
                                    </div>
                                )}
                                {error && (
                                    <div className='border-s border-[2px] bg-red-500-500 flex flex-row items-center justify-center rounded-full'>
                                        <span className="text-white font-bold text-center mt-0">
                                            {error}
                                        </span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </Main>
        </div>
    )
}

export default DebtorsDashboardComponent