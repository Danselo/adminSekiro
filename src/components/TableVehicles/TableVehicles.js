import React, { useState, useEffect } from "react";
import "./dataTableVehicle.css";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export const TableVehicles = ({ setVehicleSelected, vehicles }) => {
    const [globalFilter, setGlobalFilter] = useState(null);
    const [vehiclesSelected, setVehiclesSelected] = useState([]);
// console.log(vehiclesSelected)
    useEffect(() => {
        if (vehiclesSelected) {
            setVehicleSelected(vehiclesSelected)
        }
    }, [vehiclesSelected, setVehicleSelected])
    
    console.log(vehicles)
    return (
        <>
            <div className="p-inputgroup create-brand__table">
                <InputText placeholder="Buscar marca" onInput={(e) => setGlobalFilter(e.target.value)} />
                <Button icon="pi pi-search" className="p-button-primary" />
            </div>
            <DataTable value={vehicles} paginator responsiveLayout="scroll" emptyMessage="No se encontraron datos" className="table-vehicles" showGridlines rows={10} selection={vehiclesSelected} onSelectionChange={(e) => setVehiclesSelected(e.value)} dataKey="id" globalFilter={globalFilter}>
                <Column selectionMode="single" headerStyle={{ width: "3em" }}></Column>
                <Column field="id" sortable header="Id vehiculo"></Column>
                <Column field="name" sortable header="Nombre"></Column>
                <Column field="model" sortable header="Modelo"></Column>
                <Column field="idBrand" sortable header="Marca"></Column>
            </DataTable>
        </>
    );
};