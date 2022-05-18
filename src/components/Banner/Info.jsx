import React from 'react'

export default function Info({title,body,img}) {
    return (
        <div className="laptop">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="titlepage">
                            <h2>{title}</h2>
                            <p>{body}</p>
                           
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="laptop_box">
                            <figure>
                                {/* <img src="images/pc.png" alt="#" /> */}
                                <img src={img} alt="#" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

