import React from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../atoms/Buttons'
import InfoTable from '../molecules/InfoTable'
import InfoTable2 from '../molecules/InfoTable2'
import NavBar from '../molecules/NavBar'

export default function InfoTemplate() {
  return (
    <div className='bg-[#f4f7ff]'>
        <NavBar />
        <div className='flex flex-col justify-center items-center py-16 w-full'>
            <div className='w-auto mx-2 md:w-[38rem] lg:w-[45rem] border-[2px] bg-white border-orange-300 px-4 lg:px-16 lg:py-12 md:py-12 py-4 drop-shadow-xl'>
                <div className='font-bold text-xl pb-4'>
                    Development of a Robust Risk Assessment Model for improving Solar Photovoltaic System Bankability in Mauritius
                </div>
                <div className='text-justify text-sm'>
                    The project aims at developing a holistic risk management framework for improving solar PV bankability in Mauritius. It will allow a thorough investigation of inherent risks in all phases of a PV project cycle and will explore a multitude of relevant PV business models. This project will serve as a reference for all stakeholders and help in identifying and mitigating risks, improving technical reliability and soundness of PV projects, assessing the impact of risks on life cycle cost of PV systems, electricity generation, levelized cost of electricity (LCOE) and hence assess the risks associated with business models. <br /><br/>The results will help in the development of a set of guidelines to assist stakeholders in the comprehensive risk management of existing and future PV installations, thus improving bankability of PV projects. This will help in the mitigation of risks in existing and new projects as well in the development of new types of business models. This research contributes to the  Sustainable Development Goals 7 and 9.
                    <br/><br/>
                    The survey has been created to help with the data collection of all risks occurring throughout the six stages of the project lifecycle. The stages and the stakeholders involved are shown in the infographic below:
                </div>
                <div className='flex justify-center items-center py-4'>
                    <img src="https://asterloto.com/form-custom/Picture1.png" />
                </div>
                <div className='text-justify text-sm'>
                    The stakeholders will be required to rate the probability of risks happening and their impact on the PV system life cycle as well as to share their opinion. The severity of the risks and impact are described in <b>Table 1</b> and <b>Table 2</b> respectively. This survey will be an essential part of the project to help develop a thorough set of guidelines for the risk management of PV systems. 
                </div>
                <InfoTable2 
                    tableNumber = "1"
                    title = "Probability/ likelihood"
                    header1 = "Rating"
                    header2 = "Severity"
                    row1 = "Extremely Improbable"
                    row2 = "Improbable"
                    row3 = "Remote"
                    row4 = "Occasional"
                    row5 = "Frequent"
                    desc1= "The risk is almost inconceivable. In a span of 10 years, the risk has not occurred."
                    desc2= "The risk is very unlikely to happen. In a span of 10 years, the risk has occurred less than 2 times only."
                    desc3= "The risk is unlikely to occur, but is possible. In a span of 10 years, the risk occurred once a year."
                    desc4= "The risk occirs very often. In a span of ten years, every 6 months or more the risk happens or is expected to happen."
                    desc5= "The risk has occurred frequently. In a span of 10 years, every 5 months or even earlier, the risk happens or is expected to happen."
                />
                <InfoTable2 
                    tableNumber = "2"
                    title = "Consequences/ Impact"
                    header1 = "Rating"
                    header2 = "Severity"
                    row1 = "Negligible"
                    row2 = "Marginal"
                    row3 = "Moderate"
                    row4 = "Critical"
                    row5 = "Catastrophic"
                    desc1= "There is no impact and the project is not affected."
                    desc2= "There can be consequences but the project is not affected."
                    desc3= "The project can be affected with the possibility of being remediated."
                    desc4= "The project is badly affected but can still go ahead."
                    desc5= "The project is badly affected and may or will have to be stopped."
                />
                <InfoTable 
                    tableNumber = "3"
                    title = "Effect of Risk"
                    header1 = "Rating"
                    header2 = "Risk"
                    row1 = "Strongly Agree"
                    row2 = "Agree"
                    row3 = "Neither Agree/ Disagree"
                    row4 = "Disagree"
                    row5 = "Strongly Disagree"
                />

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
