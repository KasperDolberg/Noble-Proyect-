import React from 'react'
import '/src/stylesheets/global/btn.css'
import { Link} from 'react-router-dom'

const btn = ({Text, to}) => {
  return (
    <Link to={to} className="css-7au4jc" >
    <div>
        <button type="button" data-focus-theme="light" className="css-1lb0miy">
            <span className="css-zkwrbp">
                <span className="css-7au4jc">{Text}</span>
                <span aria-hidden="true" data-type="icon" className="css-12lxxes">
                <div className="css-1ckl8y4">
                    <div className="css-jyc14k" style={{ opacity: 1, transform: "translateX(0em)" }}>
                    <svg viewBox="0 0 16 16" fill="none" height="1em" role="img" aria-label="arrowRight" className="css-1krb9jt">
                        <path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="#FFAD0A"></path>
                    </svg>
                    </div>
                </div>
                </span>
            </span>
        </button>
    </div>
    </Link>
  )
}

export default btn