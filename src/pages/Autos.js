import React,{useEffect,useState} from 'react';
import axios from "axios";
import { Table, Button} from 'antd';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';


const Autos = () => {
    const [state,setstate] = useState([]);
    const [loading, setloading] = useState(true);

    let history = useHistory();

    useEffect(() =>{
        getData();
    },[]);

    const getData = async () =>{
      await axios.get("https://run.mocky.io/v3/b6592e1d-d8e5-4af0-b656-9d7efae69ca4").then( 
          res => {
          setloading(false);
          setstate(
              res.data.map( row => ({
                  id: row.id,
                  Marca: row.brand,
                  Modelo: row.model,
                  Ano: row.year,
                  Patente: row.plate
              }))
          );
        }  
      );    
    };

    const columns = [
        {
          title: "Marca",
          dataIndex: "Marca",
          width: 150
        },
        {
          title: "Modelo",
          dataIndex: "Modelo",
          width: 150
        },
        {
          title: "Año",
          dataIndex: "Ano",
          width: 150
        },
        {
          title: "Patente",
          dataIndex: "Patente",
          width: 150
        }
      ];

const regresar = () =>{
    history.push("/");
}

  return(
       <div>
          {

              loading? 
             (
               "Cargando..."   
              ) : (
                <Table
                 columns={columns}
                 dataSource={state}
                 pagination={{ pageSize: 50}}
                 scroll={{ y:280}}
                />  
              )
          } 
      <Button type="primary" onClick={regresar}>Inicio</Button>
       </div>
  )
    }

export default Autos;
