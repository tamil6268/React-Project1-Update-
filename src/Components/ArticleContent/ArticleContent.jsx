import './articlecontent.style.css'
import { data, data1, data2 } from "../../Utility/ApicallerHead";
import { useNavigate } from "react-router-dom";
function ArticleContent() {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    return (
        <div id="Pic">
            <div>
                {data.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                id="one"
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
            <div id="two">
                {data1.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                className="img1"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={450}
                                height={225}
                                style={{ borderRadius: "15px" }}
                            />
                            <div id="twoText">
                                <div className="Text">{item.title}
                                    <div className="Traval">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div id="three">
                {data2.map((item) => {
                    return (
                        <div key={item.id}>
                            <img
                                className="img1"
                                onClick={() => handleNavigation(item.id, item)}
                                src={item.url}
                                alt={"404_Error Check your Connection please...."}
                                width={450}
                                height={225}
                                style={{ borderRadius: "15px" }}
                            />
                            <div id="twoText">
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
export default ArticleContent;