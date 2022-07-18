import {useState, useEffect} from 'react'

export default function RowHeaderMain(props) {

    const [title, setTitle] = useState("Solar Photovoltaic System Value Chain: 1 - Development Phase");
    const [subTitle, setSubTitle] = useState("This phase includes acquiring land, permitting, financing, initial feasibility studies, and all activities completed prior to the project’s detailed design.");
    const [designStyle, setDesignStyle] = useState("")
    const [manufacturingStyle, setManufacturingStyle] = useState("")
    const [installationStyle, setInstallationStyle] = useState("")
    const [operationStyle, setOperationStyle] = useState("")
    const [decommisioningStyle, setdecommisioningStyle] = useState("")

    useEffect(() => {
        props.dataName === "dataDevelopment" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 1 - Development Phase"),
                setSubTitle("This phase includes acquiring land, permitting, financing, initial feasibility studies, and all activities completed prior to the project’s detailed design.")
            ),
        props.dataName === "dataDesign" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 2 - Design Phase"),
                setSubTitle("This phase includes constraints analyses, layout design and optimization, engineering, glare studies, cost estimation, and procurement."),
                setDesignStyle("bg-orange-500 text-white")
            ),
        props.dataName === "dataManufacturing" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 3 - Manufacturing / Import Phase"),
                setSubTitle("This phase includes the manufacturing/import of solar cells, module components, module unit assembly, and balance-of-system technology such as inverters, optimizers, racking, trackers, transformers or combiner boxes."),
                setManufacturingStyle("bg-orange-500 text-white")
            ),
        props.dataName === "dataInstallation" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 4 - Installation and Commissionning Phase"),
                setSubTitle("This phase includes project and construction management, construction labor, mounting and piling equipment, electrical work, raw materials."),
                setInstallationStyle("bg-orange-500 text-white")
            ),
        props.dataName === "dataOperation" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 5 - Operations and Maintenance Phase"),
                setSubTitle("This phase includes metering and communications, maintenance, insurance, warranty, and aggregation of output and sales."),
                setOperationStyle("bg-orange-500 text-white")
            ),
        props.dataName === "dataDecommisioning" && 
            (
                setTitle("Solar Photovoltaic System Value Chain: 6 - Decommissioning Phase"),
                setSubTitle("This phase includes activities to dismantle and remove the solar PV facility, either on rooftop or ground-mount, and includes waste management and project management."),
                setdecommisioningStyle("bg-orange-500 text-white")
            )
    },[props.dataName])

  return (
    <div className='top-0 flex justify-center px-8 py-4 mb-0 bg-orange-300 border-b-2 drop-shadow-xl'>
        <div className='w-full lg:mx-16 font-light'>
            <div>
                <div className='lg:text-xl md:text-xl text-md font-bold pb-2 text-white'>
                    {title}
                </div>
                <div className='text-white text-sm'>
                    {subTitle}
                </div>
                <div className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col lg:gap-4 md:gap-4 pt-4'>
                    <div className='flex lg:flex-col items-center justify-center border-2 bg-orange-500 text-white border-orange-300 w-full lg:w-1/6 h-18'>
                        <div className='h-18 py-1 text-center text-sm font-semibold'>1. Development</div>
                    </div>
                    <div className={`flex flex-col items-center justify-center border-2 border-orange-300 bg-white w-full lg:w-1/6 h-18 ${designStyle}`}>
                        <div className='h-18 py-1 text-center text-sm font-extralight'>2. Design</div>
                    </div>
                    <div className={`flex flex-col items-center justify-center border-2 border-orange-300 bg-white w-full lg:w-1/6 h-18  ${manufacturingStyle}`}>
                        <div className='h-18 py-1 text-center text-sm font-extralight'>3. Manufacturing/ Import</div>
                    </div>
                    <div className={`flex flex-col items-center justify-center border-2 border-orange-300 bg-white w-full lg:w-1/6 h-18  ${installationStyle}`}>
                        <div className='h-18 py-1 text-center text-sm font-extralight'>4. Installation/ Commissioning</div>
                    </div>
                    <div className={`flex flex-col items-center justify-center border-2 border-orange-300 bg-white w-full lg:w-1/6 h-18  ${operationStyle}`}>
                        <div className='h-18 py-1 text-center text-sm font-extralight'>5. Operation and Maintenance</div>
                    </div>
                    <div className={`flex flex-col items-center justify-center border-2 border-orange-300 bg-white w-full lg:w-1/6 h-18  ${decommisioningStyle}`}>
                        <div className='h-18 py-1 text-center text-sm'>6. Decomissioning</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}