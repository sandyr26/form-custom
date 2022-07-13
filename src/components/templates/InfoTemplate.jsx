import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../molecules/NavBar'

export default function InfoTemplate() {
  return (
    <div>
        <NavBar />
        <div className='mx-64 py-16'>
            <div className='font-bold text-xl pb-4'>
                “Development of a Robust Risk Assessment Model for improving Solar Photovoltaic System Bankability in Mauritius” 
            </div>
            Following the budget 2022, the Government of Mauritius has reaffirmed its commitment to the transition to a green economy. While small scale systems are normally self-funded by customers, other PV systems types require the owners to seek finance from a number of sources such as banks or other investors. Hence, bankability or acceptance of the project to the investor becomes critical. When assessing the investment-worthiness of a PV project, different financial stakeholders such as investors, lenders and insurers need to evaluate the impact and probability of investment risks differently depending on their investment goals. Risks have to be identified, quantified and mitigated both in existing and new PV installations. There are several challenges to address when assessing the viability of a PV project, such as the policy and regulatory instability locally and abroad, financial and bankability challenges, the need to integrate solar PV into electricity markets and systems in a fair and sustainable manner, technical reliability or the financial stability of PV investments which have to match established standards. The bankability of a PV project relies mainly on the technical soundness of the PV system and optimal operation of the system throughout the lifetime which is quantified by the levelised cost of electricity (LCOE) of the project. LCOE is one of the most widely accepted metrics for analyzing the cost-effectiveness of energy systems because it encompasses all of these factors, allowing for direct comparisons on a cost per unit energy basis. However, inherent risks in PV projects have an impact on the LCOE of the project and if the risks are not identified and mitigated, they would eventually render a project financially unsustainable. 
            The project aims at developing a comprehensive risk management framework for improving solar PV bankability in Mauritius. It will allow a thorough investigation of inherent risks in all phases of a PV project cycle and will explore a multitude of relevant PV business models. This project will serve as a reference for all stakeholders and help in identifying and mitigating risks, improving technical reliability and soundness of PV projects, assessing the impact of risks on life cycle cost of PV systems, electricity generation, levelized cost of electricity (LCOE) and hence assess the risks associated with business models. A set of guidelines will be developed to assist stakeholders in the holistic risk management of existing and future PV installations, thus improving bankability of PV projects. This will help in the mitigation of risks in existing and new projects as well in the development of new types of business models. This research contributes to the Sustainable Development Goals 7 and 9 which are to ensure access to affordable, reliable, sustainable and modern energy for all and to build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation. 
            The survey has been created to help with the data collection of all risks occurring during the different project lifecycle stages of a PV system namely: 1. Development, 2. Design, 3. Manufacturing/import, 4. Installation/commissioning, 5. Operation/ maintenance and 6. Decommissioning. The stakeholders will be required to rate the probability of risks and their impact on the project life cycle as well to have their comments. The feedback will be an essential
            part of the project to help develop the comprehensive guidelines for the risk management of PV systems.

        </div>
        <div className='flex justify-center pb-8 pt-4'>
            <Link to="/form">
                <button className='text-center border-2 px-4 py-1 w-32 bg-blue-500 text-white hover:bg-blue-800'>Next</button>
            </Link>       
        </div>
    </div>
  )
}
