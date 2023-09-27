
const OneGrid = ({gridData}) => {
    return (
        <div className='mb-5'>
            <div className="w-full md:h-[805px] mt-11 mb-6">
                <div className=" md:mx-16">
                    <div className="mb-5">
                        <h3 className="text-2xl font-semibold ms-3 md:ms-0">{gridData.title}</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        <div className=" h-[305px] md:h-[705px] rounded-lg bg-image2 bg-cover bg-center bg-no-repeat bg-green-600" style={{ backgroundImage: `url(${gridData.bgImage})` }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneGrid