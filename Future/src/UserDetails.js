class UserDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:props.data,
            //id:props.data.id,
            //firstName:props.data.firstName,
            //address:props.data.address,
            //description:props.data.description,
        }
    }
    componentDidMount(){
        //this.state.setState();
    }
    render(){
        console.log("~~~~~~~~~~~~~ "+this.state.data);
        if(this.props.data){
            return (
                <div className="userDetails">
        Выбран пользователь <b>{this.props.data.firstName} {this.props.data.lastName}</b><br/>
                    Описание:<br/>
                    <textarea value={this.props.data.description}></textarea>
                    <br/>
                    Адрес проживания: <b>{this.props.data.address.streetAddress}</b><br/>
                    Город: <b>{this.props.data.address.city}</b><br/>
                    Провинция/штат: <b>{this.props.data.address.state}</b><br/>
                    Индекс: <b>{this.props.data.address.zip}</b>
                </div>
            )
        }else{
            return <span/>;
        }
    }
}