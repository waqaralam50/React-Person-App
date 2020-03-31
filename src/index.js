import React from "react";
import ReactDom from "react-dom";
import './index.css';


const Person =({img,name,job,children})=> {
    // yai inverted comma nhe hai link mai slash hai tab k nichai wala :D

  const url=`https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;      
return(
<article className="person">
  <img src={url} alt="person"/>

  <h4>{name}</h4>
  <h4>{job}</h4>
{children}
</article>

);
};

const PersonList =() =>{
  return(
    <section className="person-list">
      <Person img="34" name="zulfiqar" job="BDO"/>
      <Person img="35" name="waqar" job="developer">
      <p>my name is waqar and i am MERN stack website developer</p>

      </Person>
      <Person img="36" name="Zeeshan" job="Flutter dev"/>

    </section>
  );
};


ReactDom.render(<PersonList/>,document.getElementById("root"));
