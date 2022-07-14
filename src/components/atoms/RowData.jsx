import React from "react"
import Buttons from "./Buttons"

export default function RowData(props) {


  return (
    <div className=''>
        {
            props.data.map((item,index) => 
                <div key={index} className='flex flex-col lg:flex lg:flex-col md:flex md:flex-col pb-8 px-8 pt-4 border-b-[1px] mb-8 bg-white drop-shadow-xl '>
                    <div className="lg:flex flex">
                        <div className="lg:w-[70%] md:w-[70%] w-full">
                            <div className="h-6 mt-2"></div>
                            <div className='flex w-[100%] h-8'>
                                {item.risk}
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-col md:flex md:flex-col flex flex-col w-[30%]">
                            <div className="w-full h-6 mt-2 text-center">Probability of risk</div>
                            <div className='flex h-8 w-[100%] justify-around border-slate-300 border-b-[1px]'>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeProbability(e, index)} checked={props.probability[index] === "1" } name={`probability-${index}`} value="1" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeProbability(e, index)} checked={props.probability[index] === "2"}  name={`probability-${index}`} value="2" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeProbability(e, index)} checked={props.probability[index] === "3"}  name={`probability-${index}`} value="3" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-slate-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeProbability(e, index)} checked={props.probability[index] === "4"}  name={`probability-${index}`} value="4" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] border-r-[1px] bg-slate-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeProbability(e, index)} checked={props.probability[index] === "5"}  name={`probability-${index}`} value="5" type="radio"/>
                                </div>
                            </div>
                            <div className="w-full h-6 mt-2 text-center">Impact on lifecycle</div>
                            <div className='flex h-8 w-[100%] justify-around border-slate-300 border-b-[1px]'>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeImpact(e, index)} checked={props.impact[index] === "1"} name={`impact-${index}`} value="1" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeImpact(e, index)} checked={props.impact[index] === "2"} name={`impact-${index}`} value="2" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeImpact(e, index)} checked={props.impact[index] === "3"} name={`impact-${index}`} value="3" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeImpact(e, index)} checked={props.impact[index] === "4"} name={`impact-${index}`} value="4" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-green-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeImpact(e, index)} checked={props.impact[index] === "5"} name={`impact-${index}`} value="5" type="radio"/>
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
                                    <input required onChange={(e) => props.handleChangeSeverity(e, index)} checked={props.severity[index] === "1"} name={`severity-${index}`} value="1" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeSeverity(e, index)} checked={props.severity[index] === "2"} name={`severity-${index}`} value="2" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeSeverity(e, index)} checked={props.severity[index] === "3"} name={`severity-${index}`} value="3" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeSeverity(e, index)} checked={props.severity[index] === "4"} name={`severity-${index}`} value="4" type="radio"/>
                                </div>
                                <div className="flex justify-center w-full border-l-[1px] bg-orange-200 border-slate-300">
                                    <input required onChange={(e) => props.handleChangeSeverity(e, index)} checked={props.severity[index] === "5"} name={`severity-${index}`} value="5" type="radio"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        <div className="flex justify-center items-center w-full py-8">
            <Buttons state={props.nextState} setGetRole={props.setGetRole} onClick={props.handleClick}>Next</Buttons>
            <Buttons onClick={props.exportFile} state={props.submitState}>Submit</Buttons>
        </div>
    </div>
  )
}
