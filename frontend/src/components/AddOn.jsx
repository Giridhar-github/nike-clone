import { Link } from 'react-router-dom'

const AddOn = ({ addOnData }) => {
    return (
        <div className='flex flex-col items-center mb-6 mt-2'>
            {addOnData.miniTitle && <Link to={''} className="font-semibold text-lg">{addOnData.miniTitle}</Link>}
            <h1 className='font-extrabold text-5xl text-center md:text-7xl tracking-tighter'>{addOnData.title}</h1>
            <p className='text-black font-semibold mt-3 mx-2 text-center'>{addOnData.subtitle}</p>
            <div className='mt-5 flex justify-between gap-x-5'>
                <Link to={''} className='border text-white bg-black px-5 py-2 rounded-full'>{addOnData.buttonTitle1}</Link>
                {addOnData.buttonTitle2 && <Link to={''} className='border text-white bg-black px-5 py-2 rounded-full'>{addOnData.buttonTitle2}</Link>}
            </div>
        </div>
    )
}

export default AddOn