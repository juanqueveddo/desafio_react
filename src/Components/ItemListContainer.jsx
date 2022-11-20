import React from 'react'

const ItemListContainer = (props) => {
    return (
        <>
            <div className="containerCard">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <img src={props.img1} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{props.nombre1}</h5>
                                    <p className="card-text">{props.desc}</p>
                                    <a href="#" className="btn btn-primary bg-dark card-shadow">Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={props.img2} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{props.nombre2}</h5>
                                    <p className="card-text">{props.desc}</p>
                                    <a href="#" className="btn btn-primary bg-dark card-shadow">Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={props.img3} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{props.nombre3}</h5>
                                    <p className="card-text">{props.desc}</p>
                                    <a href="#" className="btn btn-primary bg-dark card-shadow">Añadir al carrito</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemListContainer;