class NewUserDialog extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:"",
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            submitAllowed:false
        }
        this.closeFunc=this.props.closeNewUserDialog;
        this.fields = ["id","firstName","lastName","email","phone"];
        this.addUser = this.props.addNewUser;
        console.log("THIS");
    }
    formInputs = (num, e)=>{
        console.log("new user inputting!");
        console.log("inputed value: "+this.fields[num]+ " - "+e.target.value);
        let stateKey = this.fields[num];
        let objToSet = {};
        objToSet[stateKey] = e.target.value;
        this.setState(objToSet);
        console.log(">>>>>>>>>>>> allowed: "+this.checkAllFilled());
    }
    checkAllFilled = ()=>{
        let allFilled = 0;
        for(let fld in this.fields){
            if(this.state[this.fields[fld]].length)
                allFilled ++;
        }
        console.log("checked: "+allFilled);
        return allFilled == this.fields.length;
    }
    closeDialog = (e)=>{
        console.log("close dialog");
        this.props.closeNewUserDialog()
    }
    addNewUser = ()=>{
        let obj = {};
        for(let str in this.fields){
            obj[this.fields[str]] = this.state[this.fields[str]];
        }
        this.addUser(obj);
        this.closeDialog();
    }
    render(){
        const submitAllowed = this.checkAllFilled();
        return (
            <div className="newUserElement">
                <div className="newUserDialogEmptyFields" onClick={()=>this.closeFunc()}/>
                <div className="newUserDialog">
                    <h3>Новый пользователь</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>e-mail</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <input value={this.state.id} onChange={(e)=>this.formInputs(0,e)}/>
                                </td>
                                <td>
                                    <input value={this.state.firstName} onChange={(e)=>this.formInputs(1,e)}/>
                                </td>
                                <td>
                                    <input value={this.state.lastName} onChange={(e)=>this.formInputs(2,e)}/>
                                </td>
                                <td>
                                    <input value={this.state.email} onChange={(e)=>this.formInputs(3,e)}/>
                                </td>
                                <td>
                                    <input value={this.state.phone} onChange={(e)=>this.formInputs(4,e)}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    {submitAllowed ? ( <button onClick={this.addNewUser}>Добавить в таблицу</button> ) : ("")
                    }
                </div>
            </div>
        )
    }
}