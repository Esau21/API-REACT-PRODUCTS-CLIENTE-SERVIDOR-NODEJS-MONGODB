import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

function Products() {

    const [productos, setProducts] = useState([]);
    const [deletepro, setDeleteProduct] = useState([]);

    useEffect(() => {
        FetchProducts();
    }, []);

    const FetchProducts = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/consumo/products`);
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }

    }

    const navigate = useNavigate();

    const Delete_Product = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/consumo/delete/${id}`);
            if (response.data === 200) {
                setDeleteProduct(deletepro.filter((producdelete) => producdelete._id !== id));
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container mt-5">
            <div className="col-12">
                <div className="card">
                    <div className="card-header bg-dark">
                        <h6 className="badge bg-success text-white">Listado de productos</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <Link to='/agree'>
                                <button className="btn btn-sm btn-outline-dark mb-3">Agregar producto</button>
                            </Link>
                            <table className="table table-bordered table-sm">
                                <thead>
                                    <tr>
                                        <th>_Id</th>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Pais</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map((product, index) => (
                                        <tr key={index}>
                                            <td className="text-primary">{product._id}</td>
                                            <td className="text-primary">{product.name}</td>
                                            <td className="text-primary">{product.description}</td>
                                            <td className="text-primary">${product.price}</td>
                                            <td className="text-primary">{product.pais}</td>
                                            <td>
                                                <Link to={`/editar/${product._id}`}>
                                                    <button className="btn btn-sm btn-info">Edit</button>
                                                </Link>
                                                <button className="btn btn-sm btn-danger" onClick={() => Delete_Product(product._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Products;