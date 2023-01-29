import './BlogPost.style.css'
import '../../App.css'
import { data, data1, data2 } from "../../Utility/ApiCaller";
import { useNavigate } from "react-router-dom";
function BlogPost(props) {
    const navigate = useNavigate();
    const handleNavigation = (id, item) => {// two arg - 1. pathname - 2. state
        navigate(`/bollywood/${id}`, { state: { item } });
    };
    return (
        <>
            <div id="Title" style={{ width: "200px", marginLeft: "40px" }}>{props.Title}</div>
            <div id="flexBlog">
                <div id="Blog">
                    {data.map((item) => {
                        return (
                            <div key={item.id}>
                                <img
                                    className="img2"
                                    onClick={() => handleNavigation(item.id, item)}
                                    src={item.url}
                                    alt={"404_Error Check your Connection please...."}
                                    width={370}
                                    height={210}
                                    style={{ borderRadius: "15px" }}
                                />
                                <div id="BlogContent"  onClick={() => handleNavigation(item.id, item)}>
                                    <div className="miniTitle1">{item.title}</div>
                                    <div className="miniParagraph1">{item.content}</div>
                                    <div className="Traval1">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id="Blog">
                    {data1.map((item) => {
                        return (
                            <div key={item.id}>
                                <img
                                    className="img2"
                                    onClick={() => handleNavigation(item.id, item)}
                                    src={item.url}
                                    alt={"404_Error Check your Connection please...."}
                                    width={370}
                                    height={210}
                                    style={{ borderRadius: "15px" }}
                                />
                                <div id="BlogContent" onClick={() => handleNavigation(item.id, item)}>
                                    <div className="miniTitle1">{item.title}</div>
                                    <div className="miniParagraph1">{item.content}</div>
                                    <div className="Traval1">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id="Blog">
                    {data2.map((item) => {
                        return (
                            <div key={item.id}>
                                <img
                                    className="img2"
                                    onClick={() => handleNavigation(item.id, item)}
                                    src={item.url}
                                    alt={"404_Error Check your Connection please...."}
                                    width={370}
                                    height={210}
                                    style={{ borderRadius: "15px" }}
                                />
                                <div id="BlogContent" onClick={() => handleNavigation(item.id, item)}>
                                    <div className="miniTitle1">{item.title}</div>
                                    <div className="miniParagraph1">{item.content}</div>
                                    <div className="Traval1">{item.category} / {item.date}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default BlogPost;