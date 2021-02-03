import React from "react";
import "./Style.css";

const RodapeLogin = () => {
  return (
    <div className = "text-right rodapeLogin">
      <div className = "mr-2">
        <a href = "https://www.facebook.com/vegoor/" target = "_blank">
          <i className = "fab fa-facebook-square p-1 iconeRodapeLogin iconeSocial"></i>
        </a>
        <a href = "https://www.instagram.com/vegoor.tec/" target = "_blank">
          <i className = "fab fa-instagram p-1 iconeRodapeLogin iconeSocial"></i>
        </a>
        <a href = "https://www.linkedin.com/company/vegoor/" target = "_blank">
          <i className = "fab fa-linkedin p-1 iconeRodapeLogin iconeSocial"></i>
        </a>
        <a href = "https://www.youtube.com/channel/UCfOPtNNh7CfFd4oIeXXKXgA" target = "_blank">
          <i className = "fab fa-youtube p-1 iconeRodapeLogin iconeSocial"></i>
        </a>
      </div>
    </div>
  )
}

export default RodapeLogin;
