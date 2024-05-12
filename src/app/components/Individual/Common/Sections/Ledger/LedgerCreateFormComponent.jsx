import React from 'react'

const LedgerCreateFormComponent = () => {

    
    return (
        <div className='h-full w-screen flex items-center justify-center p-5'>
            <div className='main-container-ledger'>
                <h1 className='container-header'>Create Ledger</h1>
                <form className='form-ledger'>
                    <div className='form-first'>
                        <div className='details personal'>
                            <span className='title-for-form underline'>
                                Ledger Details
                            </span>
                            <div className='fields'>
                                <div className='input-field'>
                                    <label>Financial Year</label>
                                    <select type="text" className="filed-input" id="input-field" placeholder=''>
                                        <option>Choose Year</option>
                                    </select>
                                </div>
                                <div className='input-field'>
                                    <label>Assessment Year</label>
                                    <select type="text" className="filed-input" id="input-field" placeholder=''>
                                        <option>Choose Year</option>
                                    </select>
                                </div>
                                <div className='input-field'>
                                    <label>Account Name</label>
                                    <input type="text" className="filed-input" id="input-field" placeholder='' />
                                </div>
                                <div className='input-field'>
                                    <label>Financial Year</label>
                                    <select type="text" className="filed-input" id="input-field" placeholder=''>
                                        <option>Choose Year</option>
                                        <option value="Balance_Sheet">Balance Sheet</option>
                                        <option value="Profit_Loss">Profit & Loss</option>
                                    </select>
                                </div>
                                <div className='input-field'>
                                    <label>Sub Account Type</label>
                                    <input type="text" className="filed-input" id="input-field" placeholder='' />
                                </div>
                                <div className='input-field'>
                                    <label>Head Item</label>
                                    <select type="text" className="filed-input" id="input-field" placeholder=''>
                                        <option>Choose Year</option>
                                        <option value="Balance_Sheet">Balance Sheet</option>
                                        <option value="Profit_Loss">Profit & Loss</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='details personal'>
                            <span className='title-for-form underline'>
                                
                            </span>
                            <div className='fields'>
                                <div className='input-field'>
                                    <label>Tax Item Type</label>
                                    <input type="text" className="filed-input" id="input-field" placeholder='' />
                                </div>
                                <div className='input-field'>
                                    <label>Account Class</label>
                                    <select type="text" className="filed-input" id="input-field" placeholder=''>
                                        <option>Choose Year</option>
                                        <option value="Balance_Sheet">Balance Sheet</option>
                                        <option value="Profit_Loss">Profit & Loss</option>
                                    </select>
                                </div>
                                <div className='input-field'>
                                    <label>Account Balance Type</label>
                                    <select type="text" className="filed-input" id="input-field" placeholder=''>
                                        <option>Choose Year</option>
                                        <option value="Debit">Debit</option>
                                        <option value="Credit">Credit</option>
                                    </select>
                                </div>
                                <div className='input-field'>
                                    <label>Account Balance</label>
                                    <input type="text" className="filed-input" id="input-field" placeholder='' />
                                </div>
                                {/* (Account_Name === "Input GST" && } */}
                                <div className='input-field'>
                                    <label>Rate of Tax</label>
                                    <input type="text" className="filed-input" id="input-field" placeholder='' />
                                </div>
                                <div className='input-field'>
                                    <label>Account Sub Class</label>
                                    <select type="text" className="filed-input" id="input-field" placeholder=''>
                                        <option>Choose Year</option>
                                        <option value="Debit">Debit</option>
                                        <option value="Credit">Credit</option>
                                    </select>
                                </div>
                              
                            </div>
                        </div>

                    </div>
                    <button className="submitbutton">
                        <span className="buttontext">Submit</span>

                    </button>
                </form>
            </div>
        </div>
    )
}

export default LedgerCreateFormComponent