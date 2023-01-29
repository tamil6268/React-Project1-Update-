import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import '../App.css';

const BollywoodDetails = () => {
  const params = useParams();
  const location = useLocation();
  useEffect(() => {
    async function getBollywoodDetails() {
      const response = await fetch(`https://v1/images/${params.Id}`, {
        method: "GET",
      });
      const data = await response.json();
      return data;
    }
    getBollywoodDetails();
  }, [params.Id]);

  const item = location.state.item;
  return (
    <div id="container">
      <div style={{ textAlign: "center" }}>
        <h1 id="title-Fold" style={{ border: "1px solid gray", marginTop: "30px", marginBottom: "30px", padding: "10px" }}>{item.title}</h1>

        <img id="detais-img" style={{border:"3px solid black"}} src={item.url} width={700} height={500} alt={"404_Error"} />
        <div id="details-content" style={{width:"700px",textAlign:"left",marginLeft:"24%",fontSize:"16px",fontWeight:600}}>{item.content}{item.content}<br/>{item.content}<br/>{item.content}<br/><br/>{item.content}{item.content}{item.content}<br/><br/>{item.content}</div>
      </div>
    </div>
  );
};

export default BollywoodDetails;