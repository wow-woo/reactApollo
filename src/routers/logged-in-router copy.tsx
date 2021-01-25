import { reactiveVar } from "../apollo-client";

export function LoggedInRouter() {
    const handleLogOut =()=>{
        window.localStorage.removeItem('token')
        reactiveVar(false);
    }

    return (
        <div className='flex justify-center flex-col'>
            <h1>
                user is logged in.
            </h1>
            <button className='rounded-xl mt-5 bg-gray-800 text-white p-3 text-sm' onClick={handleLogOut}>Click here to logout</button>
        </div>
    )
}

