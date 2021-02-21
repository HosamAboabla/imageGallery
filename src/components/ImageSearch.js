import React , {useState} from 'react'

const ImageSearch = ({ searchText , setIsLoading }) => {
    const [search , setSearch ] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        searchText(search);
        setSearch('')
    }
    return (
        <div className='max-w-sm p-5 rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={submitHandler} action="" className="w-full max-w-sm">
                <div className="flex items-center border-b border-b-2 border-blue-500 py-2 rounded">
                    <input value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Image Term..." className="apperance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
                
                    <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded">
                        Search
                    </button>
                
                </div>
            </form>
            
        </div>
    )
}

export default ImageSearch
