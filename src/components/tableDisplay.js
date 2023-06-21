import React from "react"

class DisplayTable extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this);
        this.callAPI();
    }
    // Llama a la API del Ejercicio anterior (GET)
    callAPI() {
        fetch("http://localhost:3000/clients", {method: 'GET', redirect: 'follow'}).then(
            (response)=> response.json()).then((data) => {
            console.log(data)
            this.setState({
                list: data
            })
        })
    }

    // Muestra el resultado del fetch
    render() {
        let tb_data = this.state.list.map((item) =>  {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.Surname}</td>
                    <td>{item.Age}</td>
                </tr>
            )
        })
        return(
            <div>
                <table className="table table-striped">
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DisplayTable;