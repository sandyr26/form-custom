import React from "react"

export default function RowData(props) {


  return (
    <div className=''>
        {
            props.data.map((item,index) => 
                <div key={index} className='flex flex-col pb-8 px-8 pt-4 border-b-[1px] mb-8 bg-white drop-shadow-xl '>
                    <div className="flex">
                        <div className="w-[70%]">
                            <div className="h-6 mt-2"></div>
                            <div className='flex w-[100%] h-8'>
                                {item.risk}
                            </div>
                        </div>
                        <div className="flex flex-col w-[30%]">
                            <div className="w-full h-6 mt-2 text-center">Probability of risk</div>
                            <div className='flex h-8 w-[100%] justify-around border-slate-300 border-b-[1px]'>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeProbability(e, index)} name={`probability-${index}`} value="1" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeProbability(e, index)} name={`probability-${index}`} value="2" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeProbability(e, index)} name={`probability-${index}`} value="3" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeProbability(e, index)} name={`probability-${index}`} value="4" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] border-r-[1px] bg-slate-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeProbability(e, index)} name={`probability-${index}`} value="5" type="radio"/>
                                </div>
                            </div>
                            <div className="w-full h-6 mt-2 text-center">Impact on lifecycle</div>
                            <div className='flex h-8 w-[100%] justify-around border-slate-300 border-b-[1px]'>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeImpact(e, index)} name={`impact-${index}`} value="1" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeImpact(e, index)} name={`impact-${index}`} value="2" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeImpact(e, index)} name={`impact-${index}`} value="3" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeImpact(e, index)} name={`impact-${index}`} value="4" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeImpact(e, index)} name={`impact-${index}`} value="5" type="radio"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-[70%]">
                            <div className="font-extralight h-6 mt-2">
                            </div>
                            <div className='flex flex-col w-[100%]'>
                                <div className="font-extralight h-6">
                                    Do you agree that the risk may cause the following:
                                </div>
                                <div>
                                    {item.severity}
                                </div>
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <div className="w-full text-center h-6 mt-2">Severity</div>
                            <div className='flex h-8 w-[100%] justify-around border-slate-300 border-b-[1px]'>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeSeverity(e, index)} name={`severity-${index}`} value="1" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeSeverity(e, index)} name={`severity-${index}`} value="2" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeSeverity(e, index)} name={`severity-${index}`} value="3" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeSeverity(e, index)} name={`severity-${index}`} value="4" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input onChange={(e) => props.handleChangeSeverity(e, index)} name={`severity-${index}`} value="5" type="radio"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        <div className="flex justify-center items-center w-full py-8">
            <button className={`${props.nextIsVisible} border-[1px] px-16 py-4 bg-blue-300 hover:bg-blue-800 text-white`} onClick={props.handleClick}>Next</button>
        </div>
    </div>
  )
}
