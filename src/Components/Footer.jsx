
import {Link, useLocation} from 'react-router-dom'
import { LuHeart } from "react-icons/lu";
import { FcLikePlaceholder,FcLike } from "react-icons/fc";
import { useEffect, useState } from 'react';
import {toast} from 'react-toastify';

function Footer() {

    const locationObj = useLocation() ;
    const location = locationObj.pathname;
    const [liked,setLiked] = useState(false);
    const [likeCount,setLikeCount] = useState(null);


    let url = '';

    const handleLikeDislike = (type) =>
    {
        
        if(type === +1) url = "http://localhost:4000/like/addLike";
        else url = "http://localhost:4000/like/addDislike";

        sendLikeDislikeReq(url);
        
        setLiked(!liked);
    }

    const sendLikeDislikeReq = async(url) => {

        const response = await fetch( url ,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
        });

        if(!response.ok){
            console.log("not ok in sendLikeDislikeReq");
        }
        else{
            const data = await response.json();
            setLikeCount(data.updatedLikes.likes);
        }
    }

    // if(location==='/' || location==='/about' || location==='/submit' || location==='/contactus') {}
    // else return;

    const para = "Our platform aims to educate individuals and businesses about the harmful effects of improperly discarded electronics on the environment and public health."
    const love = "Made with ❤️️ by EcoGeeks";

    
    useEffect(()=>{

        const url = "http://localhost:4000/like/getLikeCount";

        const sendLikeDislikeReq = async(url) => {

            const response = await fetch(url);
    
            if(!response.ok){
                console.log("not ok in sendLikeDislikeReq");
            }
            else{
                const data = await response.json();
                setLikeCount(data.likeCount);
            }
        }

        sendLikeDislikeReq(url);

    },[]);


  return (
    <div className='  w-full bg-green-900 h-[30vh] flex flex-col text-white font-montserrat '>
        
        <div className=' w-[98%] mx-auto flex justify-between p-3  h-[80%] '>

            {/* left */}
            <div className=' h-full '>
                    <img src="" alt="" className=' border w-[170px] h-[80px] ' />
            </div>
 
            {/* middle */}
            <div className=' w-[35%] '>
                <p className=' text-xs text-center '> {para} </p>
            </div>

            {/* right */}
            <div className=' h-full w-[20%] flex-col flex gap-5 '>

                <div className=' w-full justify-evenly flex flex-wrap gap-2 text-xs '>
                    <Link>Home</Link>
                    <Link>Submit</Link>
                    <Link>About</Link>
                    <Link>Contact</Link>
                </div>

                {/* <p className='w-full text-xs leading-none '>
                    {para}
                </p> */}

            </div>

        </div>

        <div className=' w-full px-5 pt-2 h-5 flex justify-start '>

                <div className=' w-[60%] h-full flex justify-between '>
                    <div>
                    { liked ? <button onClick={()=>handleLikeDislike(-1)}> <FcLike size={20} /> </button> : <button onClick={()=>handleLikeDislike(+1)}> <FcLikePlaceholder size={20} /> </button> }
                    <span className=' ml-1 '> {likeCount} </span>
                    </div>
                    <p> {love} </p>
                </div>

        </div>

    </div>
  )
}

export default Footer