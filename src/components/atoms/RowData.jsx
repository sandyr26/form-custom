import React from "react"
import data from "../../../data/data"

export default function Row(props) {

  return (
    <div className='px-8 pb-8'>
        {
            data.map((item,index) => 
                <div key={index} className='flex flex-col pb-8 border-b-[1px]'>
                    <div className="flex gap-4 py-4">
                        <div className='flex items-center w-[50%] h-8 pl-4'>
                            {item.risk}
                        </div>
                        <div className='flex h-8 w-[25%] justify-around border-slate-300 border-b-[1px]'>
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
                        <div className='flex h-8 w-[25%] justify-around border-slate-300 border-b-[1px]'>
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
                    <div className="flex gap-4">
                        <div className="w-[50%] pl-4 font-extralight">
                        Do you agree that the risk may cause the following:
                        </div>
                        <div className='flex items-center w-[25%]'>
                            {item.severity}
                        </div>
                        <div className='flex h-8 w-[25%] justify-around border-slate-300 border-b-[1px]'>
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
            )
        }
    </div>
  )
}
