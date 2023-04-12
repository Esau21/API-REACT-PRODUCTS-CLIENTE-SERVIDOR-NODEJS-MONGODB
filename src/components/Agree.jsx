import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

<form id="form-agree">
    ...
</form>


function Agree() {

    const [formProducts, setFormProducts] = useState({
        name: "",
        description: "",
        price: "",
        proveedor: "",
        pais: "",
    });

    const navigate = useNavigate();

    const HandleAddProduct = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/consumo/add', formProducts);
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const handleonChnage = async (event) => {
        setFormProducts({ ...formProducts, [event.target.name]: event.target.value });
    }

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header bg-dark">
                    <h6 className="badge bg-info text-success">Agregar nuevo producto</h6>
                </div>
                <div className="card-body">
                    <form id="form-agree" onSubmit={HandleAddProduct}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="badge bg-dark">Nombre producto</label>
                                    <input type="text" name="name" className="form-control" placeholder="nombre del producto" onChange={handleonChnage} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="badge bg-dark">Descripcion del producto</label>
                                    <textarea className="form-control" name="description" placeholder="Ingresa una descripcion" onChange={handleonChnage}></textarea>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="badge bg-dark">Precio</label>
                                    <input type="number" name="price" className="form-control" placeholder="precio del producto" onChange={handleonChnage} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="badge bg-dark">Proveedor</label>
                                    <input type="text" name="proveedor" className="form-control" placeholder="ingresa el proveedor" onChange={handleonChnage} />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <label className="badge bg-dark">pais</label>
                                    <input type="text" name="pais" className="form-control" placeholder="Ingresa el pais" onChange={handleonChnage} />
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-sm btn-success mt-3" type="submit" onClick={HandleAddProduct}>Agregar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Agree;