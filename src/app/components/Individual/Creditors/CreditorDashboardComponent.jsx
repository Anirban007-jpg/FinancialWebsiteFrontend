'use client'
import React, { useEffect, useState } from 'react'
import { getCookie, isAuth } from '../../../../../actions/auth';
import { useTypewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import Sidebar from '../Common/Sections/Sidebar';
import { IoSearch } from 'react-icons/io5';
import { FaBookReader, FaUser } from 'react-icons/fa';
import Main from '../Common/Sections/Main';
import { UpdateCreditorLedgerBalance, createCreditor } from '../../../../../actions/credtiors';

const CreditorDashboardComponent = () => {

    const [data, setData] = useState({});

    useEffect(() => {
        setData(isAuth());
    }, [])


    const [values, setValues] = useState({
        Creditor_name: "",
        Creditor_address: "",
        Creditor_contact_no: "",
        Creditor_email: "",
        Creditor_balance: "",
        Creditor_Currency: "",
        error: "",
        success: "",
        errorforupdate: "",
        successforupdate: "",
        Account_Name: "Creditor A/C",
        loading: false
    });

    const [text] = useTypewriter({
        words: ['Creditors'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 100
    })

    const { Creditor_name, Creditor_address, Creditor_contact_no, Creditor_email, Creditor_balance, Creditor_Currency, Account_Name, success, error,errorforupdate,successforupdate, loading } = values;

    const handleChangeInput = (name) => e => {
        setValues({ ...values, error: '', success: '', [name]: e.target.value })
    }


    const token = getCookie('token');

    const handleFormsubmitData = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: '' });
        const Creditor = { Creditor_name, Creditor_address, Creditor_contact_no, Creditor_email, Creditor_balance, Creditor_Currency };
        // console.log(ledger);
        createCreditor(Creditor, token).then(data => {
            if (data.error) {
                setValues({ ...values, loading: false, error: data.error });
            }
            else {
                setValues({
                    Creditor_name: "",
                    Creditor_address: "",
                    Creditor_contact_no: "",
                    Creditor_email: "",
                    Creditor_balance: "",
                    Creditor_Currency: "",
                    error: '',
                    success: data.message,
                    loading: false
                })
            }
        })
    }
    
    const UpdateCreditorBalance = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true, errorforupdate: '' });
        // console.log(ledger);
        UpdateCreditorLedgerBalance(Account_Name,token).then(data => {
            if (data.error) {
                setValues({ ...values, loading: false, errorforupdate: data.error });
            }
            else {
                setValues({
                errorforupdate: '',
                successforupdate: data.message,
                loading: false
            })
        }})
    }

    return (
        <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
            <Sidebar />
            <Main>
                <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-1 gap-2'>
                    <div>
                        <h1 className='text-2xl text-black font-semibold'>Creditors Page</h1>
                    </div>
                    <div className='flex justify-between items-center gap-10'>
                        <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all' />
                        <div id="client-info" className='flex justify-center items-center gap-4'>
                            <Link href={`${data.profile}`}><img src={`${process.env.NEXT_PUBLIC_DOMAIN}/photo/${data._id}` || "/download.png"} alt='client-image' className='rounded-full w-12 h-12 bg-white' /></Link>
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

                        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 w-full mb-0'>
                            <Link href="/Individual/Display/Ledgers">
                                <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                                    <div className='w-full flex justify-between items-center'>
                                        <h1 className='text-md text-black font-extrabold '>Display Ledgers</h1>
                                        <h1 className='text-green-600 font-bold'>Multiple</h1>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='flex flex-col justify-center items-start gap-1'>
                                            <h1 className='text-3xl text-black font-semibold'><Link href="/Individual/Display/Ledgers"></Link></h1>
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
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='flex flex-col justify-center items-start gap-1'>
                                            <h1 className='text-3xl text-black font-semibold'>Create Debtor</h1>
                                            <p className='text-slate-700'></p>
                                        </div>
                                        <div className='bg-green-400 hover:bg-green-500 cursor-pointer text-black p-3 rounded-full'>
                                            <FaUser className='w-[30px] h-[30px]' />
                                        </div>
                                    </div>
                                </div>
                            </Link>

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
                                            Creditor Details
                                        </span>
                                        <div className='fields'>
                                            <div className='input-field-fd'>
                                                <label>Creditor Name</label>
                                                <input value={Creditor_name} onChange={handleChangeInput("Creditor_name")} type="text" className="filed-input-fd" id="input-field" placeholder='' />
                                            </div>
                                            <div className='input-field-fd'>
                                                <label>Creditor Address</label>
                                                <textarea rows="5" value={Creditor_address} onChange={handleChangeInput("Creditor_address")} type="text" className="filed-input-fd-textarea" id="input-field" placeholder='' />
                                            </div>
                                            <div className='input-field-fd'>
                                                <label>Creditor Contact No</label>
                                                <input value={Creditor_contact_no} onChange={handleChangeInput("Creditor_contact_no")} type="text" className="filed-input-fd" id="input-field-fd" placeholder='' />
                                            </div>
                                            <div className='input-field-fd'>
                                                <label>Creditor Email</label>
                                                <input value={Creditor_email} onChange={handleChangeInput("Creditor_email")} type="email" className="filed-input-fd" id="input-field-fd" placeholder='' />
                                            </div>
                                            <div className='input-field-fd'>
                                                <label>Creditor Amount</label>
                                                <input value={Creditor_balance} onChange={handleChangeInput("Creditor_balance")} type="text" className="filed-input-fd" id="input-field" placeholder='' />
                                            </div>
                                            <div className='input-field-fd'>
                                                <label>Creditor Currency</label>
                                                <input value={Creditor_Currency} onChange={handleChangeInput("Creditor_Currency")} type="text" className="filed-input-fd" id="input-field-fd" placeholder='' />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-row gap-2'>
                                    <button className="submitbutton" type='submit' onClick={handleFormsubmitData}>
                                        <span className="buttontext">Submit</span>

                                    </button>
                                    <button className="submitbutton" type='submit' onClick={UpdateCreditorBalance}>
                                        <span className="buttontext">Update Creditor Ledger Balance</span>

                                    </button>
                                </div>

                                {success && (
                                    <div className='border-s border-[2px] bg-green-500 p-2 flex flex-row items-center justify-center rounded-full'>
                                        <span className="text-white font-bold text-center mt-0">
                                            {success}
                                        </span>
                                    </div>
                                )}
                                {error && (
                                    <div className='border-s border-[2px] p-2 bg-red-500-500 flex flex-row items-center justify-center rounded-full'>
                                        <span className="text-white font-bold text-center mt-0">
                                            {error}
                                        </span>
                                    </div>
                                )}
                                 {successforupdate && (
                                    <div className='border-s border-[2px] bg-green-500 p-2 flex flex-row items-center justify-center rounded-full'>
                                        <span className="text-white font-bold text-center mt-0">
                                            {successforupdate}
                                        </span>
                                    </div>
                                )}
                                {errorforupdate && (
                                    <div className='border-s border-[2px] p-2 bg-red-500-500 flex flex-row items-center justify-center rounded-full'>
                                        <span className="text-white font-bold text-center mt-0">
                                            {errorforupdate}
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

export default CreditorDashboardComponent