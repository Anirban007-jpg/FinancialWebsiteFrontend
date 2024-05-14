'use client'
import React, { useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { getCookie } from '../../../../../../../actions/auth';
import { createLedger } from '../../../../../../../actions/ledger';

const LedgerCreateFormComponent = () => {

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
        words: ['Ledger'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 100
    })

    const { Account_Name, Currency, Financial_Year, Assessment_Year, Rate_of_tax, Type_of_Item, Account_Group, Head_Item_Group, Tax_Account_Type, Account_Class, Bal_Start, Account_SubClass, Account_Balance_Type, success, error, loading } = values;

    const handleChangeInput = (name) => e => {
        setValues({ ...values, error: '', [name]: e.target.value })
    }

    const token = getCookie('token');
    const handleFormsubmitData = (e) => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: '' });
        const ledger = { Account_Name, Currency, Financial_Year, Assessment_Year, Type_of_Item, Account_Group, Head_Item_Group, Tax_Account_Type, Account_Class, Bal_Start, Account_SubClass, Account_Balance_Type };
        // console.log(ledger);
        createLedger(ledger, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            }
            else {
                setValues({ ...values, error: '', success: data.message });
            }
        })
    }

    return (
        <div className='h-full w-screen flex items-center justify-center p-5'>
            <div className='main-container-ledger'>
                <h1 className='container-header'>Create {text}</h1>
                <form className='form-ledger' onSubmit={handleFormsubmitData}>
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
                                        <option value="Direct Expenses">Indirect Expenses</option>
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
                    <button className="submitbutton">
                        <span className="buttontext">Submit</span>

                    </button>
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
                                {success}
                            </span>
                        </div>
                    )}
                </form>
            </div>
        </div>
    )
}

export default LedgerCreateFormComponent