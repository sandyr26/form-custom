import {useState, useEffect} from 'react'

export default function RowHeaderMain(props) {

    const [title, setTitle] = useState("Solar Photovoltaic System Value Chain: 1 - Development Phase");
    const [subTitle, setSubTitle] = useState("This phase includes acquiring land, permitting, financing, initial feasibility studies, and all activities completed prior to the project’s detailed design.");

    useEffect(() => {
        props.dataName === "dataDevelopment" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 1 - Development Phase"),
                setSubTitle("This phase includes acquiring land, permitting, financing, initial feasibility studies, and all activities completed prior to the project’s detailed design.")
            ),
        props.dataName === "dataDesign" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 2 - Design Phase"),
                setSubTitle("This phase includes constraints analyses, layout design and optimization, engineering, glare studies, cost estimation, and procurement.")
            ),
        props.dataName === "dataManufacturing" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 3 - Manufacturing / Import Phase"),
                setSubTitle("This phase includes the manufacturing/import of solar cells, module components, module unit assembly, and balance-of-system technology such as inverters, optimizers, racking, trackers, transformers or combiner boxes.")
            ),
        props.dataName === "dataInstallation" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 4 - Installation and Commissionning Phase"),
                setSubTitle("This phase includes project and construction management, construction labor, mounting and piling equipment, electrical work, raw materials.")
            ),
        props.dataName === "dataOperation" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 5 - Operations and Maintenance Phase"),
                setSubTitle("This phase includes metering and communications, maintenance, insurance, warranty, and aggregation of output and sales.")
            ),
        props.dataName === "dataDecommisioning" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 6 - Decommissioning Phase"),
                setSubTitle("This phase includes activities to dismantle and remove the solar PV facility, either on rooftop or ground-mount, and includes waste management and project management.")
            )
    },[props.dataName])

  return (
    <div className='top-0 flex px-8 py-4 mb-0 bg-white border-b-2 drop-shadow-xl'>
        <div className='w-[100%] font-light'>
            <div>
                <div className='text-xl font-normal pb-2'>
                    {title}
                </div>
                <div>
                    {subTitle}
                </div>
                <div className='flex gap-4 pt-4'>
                    <div className='flex flex-col items-center border-2 border-blue-500 w-1/6 h-24'>
                        <div className=' w-full h-8 text-black flex justify-center items-center font-semibold'>1</div>
                        <div className='h-18 pt-2 text-black text-center font-semibold'>Development</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>2</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Design</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>3</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Manufacturing/ Import</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>4</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Installation/ Commissioning</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>5</div>
                        <div className='h-18 pt-2 text-white text-center font-extralight'>Operation and Maintenance</div>
                    </div>
                    <div className='flex flex-col items-center bg-blue-500 border-2 border-blue-500 w-1/6 h-24'>
                        <div className='bg-blue-500 w-full h-8 text-white flex justify-center items-center font-bold'>6</div>
                        <div className='h-18 pt-2 text-white text-center'>Decomissioning</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}