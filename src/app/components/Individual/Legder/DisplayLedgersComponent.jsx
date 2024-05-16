'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Common/Sections/Sidebar'
import Main from '../Common/Sections/Main'
// import { displayLedger } from '../../../../../actions/ledger'
import DataTable from 'react-data-table-component'
import { displayLedger } from '../../../../../actions/ledger'
import { useRouter } from 'next/navigation'
import { IoSearch } from 'react-icons/io5'
import Link from 'next/link'
import { isAuth } from '../../../../../actions/auth'

const tableHeaderstyle = {
  headCells: {
    style: {
      fontWeight: "bolder",
      fontSize: "14px",
      backgroundColor: "#EBE8E8",
      border: "2px solid red",
      textTransform: "uppercase"
    },
  },
    cells: {
      style: {  
        fontWeight: "bold",
        fontSize: "14px",
        width: "100px",
        color: "blue",
      },
    }
}

const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

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
      sortable: true,
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
  ]

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState([]);

  const [userdata, setUserdata] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (isAuth()) {
      setUserdata(isAuth());
    }

  }, [])

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
      <section className='w-full bg-transparent lg:h-20 h-fit flex lg:flex-row flex-col justify-between items-center p-4 rounded-xl lg:gap-2 gap-4'>
          <div>
            <h1 className='text-2xl text-black font-semibold'>Display Ledger Page</h1>
          </div>
          <div className='flex justify-between items-center gap-10'>
            <IoSearch className='w-6 h-6 cursor-pointer hover:scale-150 hover:text-yellow-500 transition-all' />
            <div id="client-info" className='flex justify-center items-center gap-4'>
              <Link href={`${userdata.profile}`}><img src="/download.png" alt='client-image' className='rounded-full w-12 h-12 bg-white' /></Link>
              <div className='flex flex-col justify-center items-start'>
                <div className='flex justify-center text-black items-center -mb-1 gap-2'>
                  <h1 className='text-lg font-bold text-black'>Hi, {userdata.Name}</h1>
                </div>
                <p className='text-black'>{userdata.role}</p>
              </div>
            </div>
          </div>
        </section>
        <div  id="main-section" className='flex overflow-x-scroll flex-col rounded-lg items-center justify-center w-full'>
          <DataTable customStyles={tableHeaderstyle} expandableRows expandableRowDisabled={row => row.disabled}	expandableRowsComponent={ExpandedComponent} columns={column} data={filter} subHeader subHeaderComponent={<div className='smm:mb-2 input-field'><input type='text' placeholder='search keyword..' className='filed-input' value={search} onChange={(e) => setSearch(e.target.value)} /></div>} pagination fixedHeader selectableRowsHighlight highlightOnHover />
        </div>
      </Main>
    </div>
  )
}

export default DisplayLedgersComponent