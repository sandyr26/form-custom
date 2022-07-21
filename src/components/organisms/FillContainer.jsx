import React from 'react'
import { Link } from "react-router-dom";
import Buttons from '../atoms/Buttons';

export default function () {

    const [companyName, setCompanyName] = React.useState()
    const [jobTitle, setJobTitle] = React.useState()
    const [role, setRole] = React.useState()
    const [otherIsVisisble, setOtherIsVisible] = React.useState("hidden")
    const [otherRole, setOtherRole] = React.useState("")
    const [updatedRole, setUpdatedRole] = React.useState("")

    React.useEffect(() => {
        // console.log(role)
        role === 'Other' ? setOtherIsVisible("block") : setOtherIsVisible("hidden")
        setUpdatedRole(role)
    },[role])

    React.useEffect(() => {
        // console.log(updatedRole)

        setUpdatedRole(otherRole)
    },[otherRole])

  return (
    <div className='flex w-full h-full justify-center items-center'>
        <div className='flex flex-col justify-center items-center lg:w-[25rem] w-[18rem] gap-6 px-12 py-8 bg-white border-[2px] border-orange-200 drop-shadow-xl'>
            <div className='align-left font-normal text-orange-500'>
                Please Fill in
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor="company-name">Name / Company Name <i>(optional)</i></label>
                <input id="company-name" className='border-[1px] border-blue-200 pl-4 h-8' onChange={(e) => setCompanyName(e.target.value)} type="text"/>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='job-title'>Job Title</label>
                <input id="job-title" className='border-[1px] border-blue-200 pl-4 h-8' onChange={(e) => setJobTitle(e.target.value)} type="text"/>
            </div>
            <div className='flex flex-col w-full'>
                <label htmlFor='role'>Identify Role</label>
                <select placeholder='sss' id="role" className='border-[1px] border-blue-200 pl-4 h-8' onChange={(e) => setRole(e.target.value)}>
                    <option disabled selected hidden>Please Choose...</option>
                    <option>Project management</option>
                    <option>Consultant</option>
                    <option>Financial institutions(including Banks)</option>
                    <option>Regulatory institutions and Permitting</option>
                    <option>Property owner/ Building tenant/ Real Estate Broker</option>
                    <option>Engineering</option>
                    <option>Construction management</option>
                    <option>PV System design</option>
                    <option>Finance team</option>
                    <option>Manufacturers/ Suppliers</option>
                    <option>Importers/Warehousing/Logistics</option>
                    <option>Installation,testing and Commissioning</option>
                    <option>Insurance providers</option>
                    <option>Operation and Maintenance</option>
                    <option>Other</option>
                </select>
            </div>
            <div className={`${otherIsVisisble} flex flex-col w-full`}>
                <label>Other: </label>
                <input className={`border-[1px] border-blue-200 pl-4 h-8`} type="text" onChange={(e) => setOtherRole(e.target.value)} />
            </div>
            {/* <div className='flex flex-col'>
                <label>Type of Business Model</label>
                <select className='border-[1px] border-blue-200 pl-4 h-8'>
                    <option>--- Select ---</option>
                    <option>Host-owned</option>
                    <option>Third-party-owned</option>
                    <option>Community-shared</option>
                </select>
            </div> */}
            <div className='flex justify-center pt-4'>
                <Link 
                    to="/info" 
                    state=
                        {
                            {
                                role: updatedRole,
                                companyName: companyName,
                                jobTitle: jobTitle
                            }
                        }
                >
                    <Buttons>Next</Buttons>
                </Link>
                
            </div>
        </div>
    </div>
  )
}
