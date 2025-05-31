import {renderNestedList} from '../../utils/ListUtils'

export default function Country({data}) {
    return (
        <div className='text-left bg-gray-50 rounded-2xl p-5'>
            <h4 className='text-center font-bold my-5 underline'>{data.name.official}</h4>
            {
                data && Object.keys(data).length ?
                renderNestedList(data) : 
                null
            }
        </div>
    )
}