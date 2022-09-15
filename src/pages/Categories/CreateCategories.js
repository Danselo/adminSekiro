import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";
import axios from 'axios'

const url = 'http://localhost:5000/categories/create'

export default function CreateCategories() {
    const accept = () => {
        toast.current.show({ severity: "info", summary: "Confirmacion", detail: "Categoria creada exitosamente", life: 3000 });
    };
   
    const reject = () => {
        toast.current.show({ severity: "warn", summary: "Denegado", detail: "Has cancelado el proceso", life: 3000 });
    };
    
    const confirm1 = () => {
        confirmDialog({
            message: "¿Esta seguro que desea agregar esta Categoria?",
            header: "Confirmacion",
            icon: "pi pi-exclamation-triangle",
            accept : () => CreateCategory(),
            reject,
        });
    };

    const confirm2 = () => {
        confirmDialog({
            message: "¿Esta seguro que desea perder el progreso?",
            header: "Confirmacion",
            icon: "pi pi-info-circle",
            acceptClassName: "p-button-danger",
            accept,
            reject,
        });
    };
   
    const toast = useRef(null);
    const [categoryName, setCategoryName] = useState("");
  
    function CreateCategory() {
        axios
          .post(url, {
            name: categoryName,           
          })
          .then((response) => {
            setCategoryName(response.data);
          });
      }

    // const [value, setValue] = useState("");

    return (
        <div>
            <Toast ref={toast} />
            <ConfirmDialog />
            <Link to={"/Categories"}>
                <Button label="Regresar" icon="pi pi-angle-left" className="p-button-sm p-button-danger" />
            </Link>
            <div className="text-center">
                <h3>Agregar  Categoria</h3>
            </div>
            
            <div className="create-product-form">
               
                <div className="row">
                    <div className="col-sm-12 pt-5">
                            <span className="p-float-label">
                            <InputText className="jjj" id="name" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
                            <label htmlFor="text">Nombre Categoria</label>
                        </span>
                    </div>
                    

                </div>
                
                
                

            </div>
            <div className="create-product-buttons">
                {/* <Button label="Crear" className="p-button-success" />
                <Link to={"/pages/Products/Products"}>
                    <Button label="Cancelar" className="p-button-danger" />
                </Link> */}
                <Button onClick={confirm1} icon="pi pi-check" label="Crear" className="mr-2"></Button>
                <Button onClick={confirm2} icon="pi pi-times" label="Cancelar"></Button>
            </div>
        </div>
    );
}
