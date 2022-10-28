import axios from "axios";
import config from "../config/config";

const baseRolURL = config.baseURL + "/roles"

export class RolesService {

    getRol(id) {
        return axios.get(`${baseRolURL}/${id}`).then(res => res.datas);
    }
    getRolByName(name) {
        return axios.get(`${baseRolURL}/find-by-name/${name}`).then(res => res.datas);
    }

    getRoles(){
        return axios.get(baseRolURL).then(res => res.data);
        
    }
    deleteRol(id){
        
        return axios
        .delete(`${baseRolURL}/delete/${id}`)
        .then(() => {
          console.log("Rol eliminada")
        });

    }

    createRol(name) {
        return axios
            .post(baseRolURL + "/create", {
                name              
            })
            .then((response) => {
                return response.data;
            });
    }

    

}