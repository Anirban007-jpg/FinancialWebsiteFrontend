'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Common/Sections/Sidebar'
import Main from '../Common/Sections/Main'
// import { displayLedger } from '../../../../../actions/ledger'
import DataTable from 'react-data-table-component'
import { displayLedger } from '../../../../../actions/ledger'

const tableHeaderstyle = {
  headCells: {
    style: {
      fontWeight: "bolder",
      fontSize: "14px",
      backgroundColor: "#EBE8E8",
      textAlign: "center",
      border: "2px solid red",
      textTransform: "uppercase"
    },
  },
    cells: {
      style: {  
        fontWeight: "bold",
        fontSize: "14px",
        width: "200px",
        color: "blue",
      },
    }
}

const DisplayLedgersComponent = () => {


  // const customStyles = {
  //   headRow : {
  //     style : {
  //       bacgroundColor
  //     }
  //   }
  // }

  const column = [
    {
      name: "Account Name",
      selector: row => row.Account_Name,
      sortable: true
    },
    {
      name: "Balance Type",
      selector: row => row.Account_Balance_Type
    },
    {
      name: "Item Group",
      selector: row => row.Account_Group,
    },
    {
      name: "Head Group",
      selector: row => row.Head_Item_Group
    },
    {
      name: "Balance Amount",
      selector: row => row.Balance
    },
    {
      name: "Type of Item",
      selector: row => row.Type_of_Item
    },
    {
      name: "Currency",
      selector: row => row.Currency
    },
    {
      name: "Debtors",
      selector: row => row.Debtors
    },
  ]

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    displayLedger().then(data => {
      setData(data);
      setFilter(data);
    })
  },[])
 

  useEffect(() => {
    const result = data.filter((item) => {
      return item.Account_Name.match(search);
    })
    setFilter(result);
  }, [search])

  
  // console.log(data);

  return (
    <div className='w-full bg-slate-200 h-screen flex justify-between items-start'>
      <Sidebar />
      <Main>
        <div  id="main-section" className='flex overflow-x-scroll flex-col rounded-lg items-center justify-center w-full'>
          <DataTable customStyles={tableHeaderstyle} columns={column} data={filter} subHeader selectableRows subHeaderComponent={<div className='smm:mb-2 input-field'><input type='text' placeholder='search keyword..' className='filed-input' value={search} onChange={(e) => setSearch(e.target.value)} /></div>} pagination fixedHeader selectableRowsHighlight highlightOnHover />
        </div>
      </Main>
    </div>
  )
}

export default DisplayLedgersComponent