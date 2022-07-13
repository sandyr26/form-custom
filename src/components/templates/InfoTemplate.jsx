import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../atoms/Buttons'
import NavBar from '../molecules/NavBar'

export default function InfoTemplate() {
  return (
    <div className='bg-[#f4f7ff]'>
        <NavBar />
        <div className='flex flex-col justify-center items-center py-16 w-full'>
            <div className='w-[45rem] border-[2px] bg-white border-orange-300 px-16 py-12 drop-shadow-xl'>
                <div className='font-bold text-xl pb-4'>
                    Development of a Robust Risk Assessment Model for improving Solar Photovoltaic System Bankability in Mauritius
                </div>
                <div className='text-justify text-sm'>
                    The project aims at developing a holistic risk management framework for improving solar PV bankability in Mauritius. It will allow a thorough investigation of inherent risks in all phases of a PV project cycle and will explore a multitude of relevant PV business models. This project will serve as a reference for all stakeholders and help in identifying and mitigating risks, improving technical reliability and soundness of PV projects, assessing the impact of risks on life cycle cost of PV systems, electricity generation, levelized cost of electricity (LCOE) and hence assess the risks associated with business models. The results will help in the development of a set of guidelines to assist stakeholders in the comprehensive risk management of existing and future PV installations, thus improving bankability of PV projects. This will help in the mitigation of risks in existing and new projects as well in the development of new types of business models. This research contributes to the  Sustainable Development Goals 7 and 9.
                    <br/><br/>
                    The survey has been created to help with the data collection of all risks occurring throughout the six stages of the project lifecycle. The stages and the stakeholders involved are shown in the infographic below:
                </div>
                <div className='flex justify-center items-center py-4'>
                    <img src="../../../dist/assets/picture1.png" />
                </div>
                <div className='text-justify text-sm'>
                    The stakeholders will be required to rate the probability of risks happening and their impact on the PV system life cycle as well as to share their opinion. The severity of the risks and impact are described in <b>Table 1</b> and <b>Table 2</b> respectively. This survey will be an essential part of the project to help develop a thorough set of guidelines for the risk management of PV systems. 
                </div>
                <div className='flex flex-col justify-center items-center py-4'>
                    <img className='border-[1px] drop-shadow-md border-black' src="../../../dist/assets/picture2.png" />
                    <div className='text-xs font-semibold pt-1'>Table 1</div>
                </div>
                <div className='flex flex-col justify-center items-center py-4'>
                    <img className='border-[1px] drop-shadow-md border-black' src="../../../dist/assets/picture3.png" />
                    <div className='text-xs font-semibold pt-1'>Table 2</div>
                </div>
                <div className='text-justify text-xs italic'>
                    Any information/data/response provided will be treated in strict confidentiality and will under no circumstances be revealed to a third party.  The responses will be used solely for research purposes and all respondents will remain anonymous.
                </div>
                <div className='flex justify-center pt-10'>
                    <Link to="/form">
                        <Buttons>Next</Buttons>
                    </Link>       
                </div>
            </div>
        </div>
    </div>
  )
}
