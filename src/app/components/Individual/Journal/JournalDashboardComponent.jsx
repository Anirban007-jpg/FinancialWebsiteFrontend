'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Common/Sections/Sidebar'
import Main from '../Common/Sections/Main';
import { IoSearch } from 'react-icons/io5';
import { FaBookReader, FaUser } from 'react-icons/fa';
import Link from 'next/link';
import { useTypewriter } from 'react-simple-typewriter';
import { stimulatejournal } from '../../../../../actions/journal';
import FormData from 'form-data';
import { getCookie, isAuth } from '../../../../../actions/auth';
import { displayCreditors, displayDebtors, displayLedger } from '../../../../../actions/ledger';

const JournalDashboardComponent = () => {

    const [data, setData] = useState({});
    const [ledgerdata, setLedgerData] = useState([]);
    const [debtordata, setDebtorData] = useState([]);
    const [creditordata, setCreditorData] = useState([]);
    const [returnedData, setRuturendData] = useState({});

    useEffect(() => {
        setData(isAuth());
        displayLedger().then(data => {
            setLedgerData(data)
            console.log(ledgerdata);
        });
        displayDebtors().then(data => {
            setDebtorData(data);
        })
        displayCreditors().then(data => {
            setCreditorData(data);
        })
    }, [])


    const [values, setValues] = useState({
        Financial_Year: '',
        Assessment_Year: '',
        Document_No: '',
        Document_id: '',
        error: '',
        success: '',
        Document_Date: '',
        Posting_Date: '',
        Document_Header: '',
        loading: false,
        showStimulateForm: true,
        showPostingForm: false,
        Debit_item: "",
        Discount_Allowed_on_Debtors_Balance: 0,
        Discount_Allowed: 0,
        Credit_item: "",
        Debit_Item_balance: 0,
        Credit_Item_balance: 0,
        Narration: "",
        Discount_Received: 0,
        Debit_Item_Balance_Type: "",
        Discount_Allowed_on_debtors: "",
        Credit_Item_Balance_Type: "",
        Discount_Received_on_creditors: "",
        Debit_Item_Currency: "",
        Credit_Item_Currency: "",
        Debtor_name: "",
        Creditor_name: "",
        Discount_Allowed_Balance: 0,
        data_obtained: {}
    });

    const [userData, setUserData] = useState(new FormData())

    const handleChangeInput = name => e => {
        // console.log(e.target.value);
        let value = e.target.value;
        userData.set(name, value);
        setValues({ ...values, [name]: value, error: false, success: false });
        setUserData(userData);

    };

    const { Debit_item, Credit_item, Discount_Allowed_on_debtors, Document_No, Creditor_name, Debit_Item_Currency, Credit_Item_Currency, Credit_Item_Balance_Type, showPostingForm, showStimulateForm, Discount_Received_on_creditors, Document_id, Debtor_name, Credit_Item_balance, Debit_Item_Balance_Type, Debit_Item_balance, Narration, data_obtained, Discount_Allowed, Discount_Received, Document_Header, Financial_Year, Assessment_Year, Posting_Date, Document_Date, error, success, loading } = values;

    const [text] = useTypewriter({
        words: ['Journal'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 100
    })

    const token = getCookie('token');
    const handleFormsubmitData = (e) => {
        e.preventDefault();
        let info = { Debit_item, Debit_Item_balance, Credit_item, Discount_Allowed, Creditor_name, Debtor_name, Discount_Received, Credit_Item_balance, Discount_Received_on_creditors, Discount_Allowed_on_debtors, Narration, Financial_Year, Document_id, Assessment_Year, Document_Date, Posting_Date, Document_Header, Debit_Item_Currency, Credit_Item_Currency };
        setValues({ ...values, loading: true, error: '' });
        // const data = Object.fromEntries(userData);
        stimulatejournal(info, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            }
            else {
                console.log(data);
                setValues({
                    error: '',
                    success: '',
                    loading: false,
                    showStimulateForm: false,
                    showPostingForm: true,
                    data_obtained: data,
                });

            }
        })
    }

    const { Discount_Received_on_Creditors_Balance, Discount_Received_on_Creditors_Balance_Type, Discount_Allowed_on_Debtors_Balance, Discount_Allwoed_on_Debtors_Balance_Type, Discount_Received_Balance, Discount_Received_Balance_Type, Discount_Allowed_Balance, Discount_Allowed_Balance_Type, Profit_on_Sale_of_Asset_Balance, Profit_on_Sale_of_Asset_Balance_Type, Loss_on_Sale_of_Asset_Balance, Loss_on_Sale_of_Asset_Balance_Type } = data_obtained;

    // console.log(data_obtained);

    return (

        <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
            <Sidebar />
            <Main>

                <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4'>
                    <div>
                        <h1 className='text-2xl text-black font-semibold'>Journal Entry Posting Page</h1>
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
                            <Link href="/Individual/Ledger">
                                <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                                    <div className='w-full flex justify-between items-center'>
                                        <h1 className='text-md text-black font-extrabold '>Create Ledgers</h1>
                                        <h1 className='text-green-600 font-bold'>Multiple</h1>
                                    </div>
                                    <div className='w-full flex justify-between items-center'>
                                        <div className='flex flex-col justify-center items-start gap-1'>
                                            <h1 className='text-3xl text-black font-semibold'><Link href="/Individual/Ledger"></Link></h1>
                                        </div>
                                        <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                                            <Link href="/Individual/Ledger"><FaBookReader className='w-[30px] h-[30px]' /></Link>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className='w-full flex flex-col justify-center items-center bg-blue-200 p-5 rounded-xl gap-5 transition-transform transform hover:rotate-[0deg] hover:scale-95 cursor-pointer'>
                                <div className='w-full flex justify-between items-center'>
                                    <h1 className='text-md text-black font-extrabold '>Users</h1>
                                    <h1 className='text-green-600 font-bold'>Newly Joined</h1>
                                </div>
                                <div className='w-full flex justify-between items-center'>
                                    <div className='flex flex-col justify-center items-start gap-1'>

                                    </div>
                                    <div className='bg-blue-400 hover:bg-blue-500 cursor-pointer text-black p-3 rounded-full'>
                                        <FaUser className='w-[30px] h-[30px]' />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='smm:mt-10 lg:mt-[-20px] mdd:mt-20 lgg:mt-[-2900px] w-screen lgg:h-full lgg:relative'>
                    <div className='h-full w-screen flex items-center justify-center p-5'>
                        <div className='main-container-ledger'>
                            <h1 className='container-header'>Create {text}</h1>
                            <form className='form-ledger'>
                                <div className='form-first'>
                                    <div className='details personal'>
                                        <span className='title-for-form underline'>
                                            Journal Details
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
                                                <label>Document Date</label>
                                                <input value={Document_Date} onChange={handleChangeInput("Document_Date")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="date" placeholder="Please select a date" />
                                            </div>
                                            {showPostingForm && (
                                                <>
                                                    <div className='input-field'>
                                                        <label>Document No</label>
                                                        <input value={data_obtained.Document_No} onChange={handleChangeInput("Document_No")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" disabled />
                                                    </div>
                                                </>
                                            )}
                                            <div className='input-field'>
                                                <label>Posting Date</label>
                                                <input value={Posting_Date} onChange={handleChangeInput("Posting_Date")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="date" placeholder="Please select a date" />
                                            </div>
                                            <div className='input-field'>
                                                <label>Document Header</label>
                                                <input value={Document_Header} onChange={handleChangeInput("Document_Header")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="text" placeholder="" />
                                            </div>
                                            <div className='input-field'>
                                                <label>Document Id</label>
                                                <input value={Document_id} onChange={handleChangeInput("Document_id")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="text" placeholder="" />
                                            </div>
                                            <div className='fields'>
                                                <div className='input-field'>
                                                    <label>Narration</label>
                                                    <textarea rows="3" value={Narration} onChange={handleChangeInput("Narration")} className="filed-input-journal-textarea" type="text" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='fields'>
                                            <div className='input-field'>
                                                <label>Debit Item Currency</label>
                                                <input value={Debit_Item_Currency} onChange={handleChangeInput("Debit_Item_Currency")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="text" placeholder="" />
                                            </div>
                                            <div className='input-field'>
                                                <label>Credit Item Balance Type</label>
                                                <select value={Credit_Item_Balance_Type} onChange={handleChangeInput("Credit_Item_Balance_Type")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option>Choose Balance Type</option>
                                                    <option value="Dr">Debit</option>
                                                    <option value="Cr">Credit</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Debit Item Balance Type</label>
                                                <select value={Debit_Item_Balance_Type} onChange={handleChangeInput("Debit_Item_Balance_Type")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                    <option>Choose Balance Type</option>
                                                    <option value="Dr">Debit</option>
                                                    <option value="Cr">Credit</option>
                                                </select>
                                            </div>
                                            <div className='input-field'>
                                                <label>Credit Item Currency</label>
                                                <input value={Credit_Item_Currency} onChange={handleChangeInput("Credit_Item_Currency")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="text" placeholder="" />
                                            </div>
                                        </div>
                                        <hr className='w-full border-[2px] border-solid border-gray-800' />
                                        {showStimulateForm && (
                                            <>
                                                <span className='title-for-form underline'>
                                                    Debit Item Details
                                                </span><br></br>
                                                <div className='fields'>
                                                    <div className='input-field'>
                                                        <label>Debit Item</label>
                                                        <select value={Debit_item} onChange={handleChangeInput("Debit_item")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                            <option value=""> Select Account</option>
                                                            {ledgerdata.map((data, index) => (
                                                                <option key={index} value={data.Account_Name}>{data.Account_Name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    {Debit_item === "Creditor A/C" && (
                                                        <div className='input-field'>
                                                            <label>Debtor Name</label>
                                                            <select value={Creditor_name} onChange={handleChangeInput("Creditor_name")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                                {
                                                                    creditordata.map((data, index) => (
                                                                        <option key={index} value={data.Creditor_name}>{data.Creditor_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    )}

                                                    {Debit_item === "Creditor A/C" && (
                                                        <div className='input-field'>
                                                            <label>Creditor allowed Discount on Final Seetlement</label>
                                                            <input value={Discount_Received_on_creditors} onChange={handleChangeInput("Discount_Received_on_creditors")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                        </div>
                                                    )}
                                                    {Credit_item === "Sale A/C" && (
                                                        <div className='input-field'>
                                                            <label>Discount Allowed</label>
                                                            <input value={Discount_Allowed} onChange={handleChangeInput("Discount_Allowed")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="number" placeholder="" />
                                                        </div>
                                                    )}

                                                    <div className='input-field'>
                                                        <label>Debit Item Balance</label>
                                                        <input value={Debit_Item_balance} onChange={handleChangeInput("Debit_Item_balance")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="number" placeholder="" />
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {showStimulateForm && (
                                            <>
                                                <hr className='w-full border-[2px] border-solid border-gray-800' />
                                                <span className='title-for-form underline'>
                                                    Credit Item Details
                                                </span>
                                                <div className='fields'>
                                                    <div className='input-field'>
                                                        <label>Credit Item</label>
                                                        <select value={Credit_item} onChange={handleChangeInput("Credit_item")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                            <option value=""> Select Account</option>
                                                            {ledgerdata.map((data, index) => (
                                                                <option key={index} value={data.Account_Name}>{data.Account_Name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    {Credit_item === "Debtor A/C" && (
                                                        <div className='input-field'>
                                                            <label>Debtor Name</label>
                                                            <select value={Debtor_name} onChange={handleChangeInput("Debtor_name")} type="text" className="filed-input" id="input-field" placeholder=''>
                                                                {
                                                                    debtordata.map((data, index) => (
                                                                        <option key={index} value={data.Debtor_name}>{data.Debtor_name}</option>
                                                                    ))
                                                                }
                                                            </select>
                                                        </div>
                                                    )}
                                                    {Credit_item === "Debtor A/C" && (
                                                        <div className='input-field'>
                                                            <label>Debtor Discount</label>
                                                            <input value={Discount_Allowed_on_debtors} onChange={handleChangeInput("Discount_Allowed_on_debtors")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                        </div>
                                                    )}

                                                    {Debit_item === "Purchase A/C" && (
                                                        <div className='input-field'>
                                                            <label>Discount Recieved</label>
                                                            <input value={Discount_Received} onChange={handleChangeInput("Discount_Received")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="number" placeholder="" />
                                                        </div>
                                                    )}


                                                    <div className='input-field'>
                                                        <label>Credit Item Balance</label>
                                                        <input value={Credit_Item_balance} onChange={handleChangeInput("Credit_Item_balance")} className="filed-input focus:shadow-soft-primary-outline dark:bg-gray-950 dark:placeholder:text-white/80 dark:text-white/80 text-sm  ease-soft rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-[3px] focus:border-solid focus:border-fuchsia-300 focus:outline-none" type="number" placeholder="" />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {showPostingForm && (
                                            <>
                                                <div className='fields'>
                                                    <div className='input-field'>
                                                        <label>Debit Item</label>
                                                        <input value={data_obtained.Debit_item} disabled onChange={handleChangeInput("Debit_item")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                    </div>
                                                    <div className='input-field'>
                                                        <label>Debit Item Balance</label>
                                                        <input value={data_obtained.Debit_Item_balance} disabled onChange={handleChangeInput("Debit_Item_balance")} type="number" className="filed-input" id="input-field" placeholder='' />
                                                    </div>
                                                    <div className='input-field'>
                                                        <label>Credit Item</label>
                                                        <input value={data_obtained.Credit_item} disabled onChange={handleChangeInput("Credit_item")} type="text" className="filed-input" id="input-field" placeholder='' />
                                                    </div>
                                                    <div className='input-field'>
                                                        <label>Debit Item Balance</label>
                                                        <input value={data_obtained.Credit_Item_balance} disabled onChange={handleChangeInput("Credit_Item_balance")} type="number" className="filed-input" id="input-field" placeholder='' />
                                                    </div>
                                                    <div className='input-field'>
                                                        <label>Discount Allowed</label>
                                                        <input value={data_obtained.Discount_Allowed_Balance} disabled onChange={handleChangeInput("Discount_Allowed_Balance")} type="number" className="filed-input" id="input-field" placeholder='' />
                                                    </div>
                                                    <div className='input-field'>
                                                        <label>Discount Allowed on Debtors</label>
                                                        <input value={data_obtained.Discount_Allowed_on_Debtors_Balance} disabled onChange={handleChangeInput("Discount_Allowed_on_Debtors_Balance")} type="number" className="filed-input" id="input-field" placeholder='' />
                                                    </div>
                                                    <div className='input-field'>
                                                        <label>Discount Received</label>
                                                        <input value={data_obtained.Discount_Received_Balance} disabled onChange={handleChangeInput("Discount_Received_Balance")} type="number" className="filed-input" id="input-field" placeholder='' />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    {showStimulateForm && (
                                        <button className="submitbutton" type="submit" onClick={handleFormsubmitData}>
                                            <span className="buttontext">Stimulate</span>
                                        </button>
                                    )}
                                    {showPostingForm && (
                                        <button className="submitbutton">
                                            <span className="buttontext">Post Document</span>
                                        </button>
                                    )}
                                </div>

                                {/* {success && (
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
                    )} */}
                            </form>
                        </div>
                    </div>
                </div >
            </Main >
        </div >
    )
}

export default JournalDashboardComponent