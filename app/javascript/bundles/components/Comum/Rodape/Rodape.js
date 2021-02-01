import React from "react";

const Rodape = (props) => {
  return (
    <div className = "bg-dark p-2 rodape">
      <div className = "mr-2">
        <a href = "https://www.facebook.com/vegoor/" target = "_blank">
          <i className = "fab fa-facebook-square p-1 iconeRodape iconeSocial"></i>
        </a>
        <a href = "https://www.instagram.com/vegoor.tec/" target = "_blank">
          <i className = "fab fa-instagram p-1 iconeRodape iconeSocial"></i>
        </a>
        <a href = "https://www.linkedin.com/company/vegoor/" target = "_blank">
          <i className = "fab fa-linkedin p-1 iconeRodape iconeSocial"></i>
        </a>
        <a href = "https://www.youtube.com/channel/UCfOPtNNh7CfFd4oIeXXKXgA" target = "_blank">
          <i className = "fab fa-youtube p-1 iconeRodape iconeSocial"></i>
        </a>
      </div>

      <div className = "ml-2">
        <a href = "" target = "_blank">
          <i className = "fa fa-question-circle p-1 iconeRodape iconeAjuda"></i>
        </a>
      </div>
    </div>
  )
}

export default Rodape;
