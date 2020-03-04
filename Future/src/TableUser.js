class TableUser extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color:props.color,
            data:props.data,
            num:props.num,
            onSelect:props.onSelect
        }
    }
    /*selectUser = ()=>{
        //console.log("tr clicked...");
        //this.props.showDetails();
        return this.state.data;
    }*/
    render(){
        return (
            <tr onClick={ ()=>this.props.showDetails(this.state.data) }>
                <td>
                    {this.state.data.id}
                </td>
                <td>
                    {this.state.data.firstName}
                </td>
                <td>
                    {this.state.data.lastName}
                </td>
                <td>
                    {this.state.data.email}
                </td>
                <td>
                    {this.state.data.phone}
                </td>
            </tr>
        )
    }
}