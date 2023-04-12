import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Edit() {
    const [update, setProducts] = useState({
        _id: "",
        name: "",
        description: "",
        price: 0,
        proveedor: "",
        pais: "",
    });

    const navigate = useNavigate();

    const fetchgetUsers = async (_id) => {
        try {
          const response = await axios.get(`http://localhost:5000/api/consumo/dev/${_id}`);
          const update = response.data;
          setProducts(update);
        } catch (error) {
          console.log(error);
        }
      }

      useEffect(() => {
        const id = window.location.pathname.split("/")[2];
        fetchgetUsers(id);
      }, []);

    const HandleSubmitUpdate = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/api/consumo/update/${update._id}`, update);
            console.log(response.data);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    }

    const HandleEdit = (event) => {
        const { name, value } = event.target;
        setProducts({ ...update, [name]: value });
    }

    return (

        <div className="container">
            <div className="row">
                <div className="card mt-5">
                    <div className="card-header bg-dark">
                        <h6 className="text-primary text-center text-uppercase">Actualizar usuario</h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <form id="form-agree" onSubmit={HandleSubmitUpdate}>
                                <div className="form-group">
                                    <div className="col-sm-6">
                                        <label htmlFor="name">Nombre:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Ingresa un nombre"
                                            value={update.name}
                                            onChange={HandleEdit}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="description">Descripción:</label>
                                        <textarea
                                            name="description"
                                            id="description"
                                            placeholder="Ingresa una descripción"
                                            className="form-control"
                                            value={update.description}
                                            onChange={HandleEdit}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="price">Precio:</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="price"
                                            id="price"
                                            placeholder="Ingresa el valor"
                                            value={update.price}
                                            onChange={HandleEdit}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="proveedor">Proveedor:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="proveedor"
                                            id="proveedor"
                                            placeholder="Ingresa el proveedor"
                                            value={update.proveedor}
                                            onChange={HandleEdit}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-6">
                                        <label htmlFor="pais">País:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="pais"
                                            id="pais"
                                            placeholder="Ingresa el país"
                                            value={update.pais}
                                            onChange={HandleEdit}
                                        />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-12 text-center">
                                        <button type="submit" className="btn btn-primary">
                                            Actualizar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Edit;