import React from 'react'
import { Link } from 'react-router-dom'

const ThreeGrid = ({grid1, grid2, grid3}) => {
  return (
    <div className="w-full md:h-[750px] mb-12">
            <div className=" md:mx-16">
                <div className="mb-5">
                    <h3 className="text-2xl font-semibold ms-3 md:ms-0">{grid1.title}</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="relative h-[305px] md:h-[705px] bg-image2 bg-cover bg-center rounded-lg bg-no-repeat bg-green-600" style={{backgroundImage:`url(${grid1.bgImage})`}}>
                        <div className="block absolute left-3 bottom-3 md:left-10 md:bottom-10">
                            {grid1.addon && <h3 className="mb-0 md:mb-2 text-white font-semibold md:text-xl">{grid1.addon}</h3>}
                            {grid1.subtitle && <h3 className="mb-2 md:mb-5 text-white font-semibold md:text-xl">{grid1.subtitle}</h3>}
                            <Link to={''} className="border border-none px-3 py-1 md:px-5 md:py-2 rounded-full bg-white text-black font-semibold hover:bg-stone-500 hover:delay-150">{grid1.buttonTitle}</Link>
                        </div>
                    </div>
                    <div className="relative h-[305px] md:h-[705px] bg-image2 bg-cover bg-center rounded-lg bg-no-repeat bg-red-600" style={{backgroundImage:`url(${grid2.bgImage})`}}>
                        <div className="block absolute left-3 bottom-3 md:left-10 md:bottom-10">
                            {grid2.addon && <h3 className="mb-0 md:mb-2 text-white font-semibold md:text-xl">{grid2.addon}</h3>}
                            {grid2.subtitle && <h3 className="mb-2 md:mb-5 text-white font-semibold md:text-xl">{grid2.subtitle}</h3>}
                            <Link to={''} className="border border-none px-3 py-1 md:px-5 md:py-2 rounded-full bg-white text-black font-semibold hover:bg-stone-500 hover:delay-150">{grid2.buttonTitle}</Link>
                        </div>
                    </div>
                    <div className="relative h-[305px] md:h-[705px] bg-image2 bg-cover bg-center rounded-lg bg-no-repeat bg-red-600" style={{backgroundImage:`url(${grid3.bgImage})`}}>
                        <div className="block absolute left-3 bottom-3 md:left-10 md:bottom-10">
                            {grid3.addon && <h3 className="mb-0 md:mb-2 text-white font-semibold md:text-xl">{grid3.addon}</h3>}
                            {grid3.subtitle && <h3 className="mb-2 md:mb-5 text-white font-semibold md:text-xl">{grid3.subtitle}</h3>}
                            <Link to={''} className="border border-none px-3 py-1 md:px-5 md:py-2 rounded-full bg-white text-black font-semibold hover:bg-stone-500 hover:delay-150">{grid3.buttonTitle}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ThreeGrid