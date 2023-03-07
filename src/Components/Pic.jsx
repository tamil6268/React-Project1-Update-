import '../Components/BlogPost/BlogPost.style.css'
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
const Pic=()=>{
const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    const [data1,setData1]=useState([]);
    useEffect(()=>{
        axios
            .get('https://heisenberg-tamil.onrender.com/home/singlepic')
            .then((response)=>{
                setData1(response.data);
                console.log("Pic ",response.data)
            })
            .catch((error)=>{
                setData1(error);
            })
    },[])
    return(
        <div>
            <div id="img1">
                {data1.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                className="img1"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={800}
                                height={465}
                                style={{ borderRadius: "15px" }}
                            />
                            <div id="oneText">
                                <div className="Text">{item.title}
                                    <div className="Traval">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
export default Pic;
