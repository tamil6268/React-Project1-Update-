import '../Components/BlogPost/BlogPost.style.css'
import { data1 } from "../Utility/ApicallerHead";
import { useNavigate } from "react-router-dom";
const Pic=()=>{
const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
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