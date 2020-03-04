class UsersList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            headColNames:["ID", "First name", "Last name", "e-Mail", "Phone"],
            headColFields:["id", "firstName", "lastName", "email", "phone"],
            //sortIcons:[" &#9652;"," &#9662;"],
            filterString:"",
            users:props.users,
            usersSorted:props.users,
            usersPages:[props.users.slice(0,5)],
            currentPage:0,
            renderingUsers:[props.users.slice(0,5)],
            num:props.num,
            sortColNum:-1,
            sortDirections:[1,1,1,1,1],
            sortingColumns:["","","","",""],
            selectedUser:0,
            showNewUserDialog:false,
        }
        
    }
    componentDidMount(){
        this.slicePages();
    }
    slicePages = ()=>{
        let usersOnPage = 5;
        let pages=[];// = arr.slice(,);
        //console.log(">>>>>>>>>>>>>>>> LEN: "+this.state.users);
        for(let i=0; i<this.state.usersSorted.length; i+=usersOnPage){
            pages.push(this.state.usersSorted.slice(i,i+usersOnPage));
            //console.log("------> "+this.state.usersSorted);
        }
        console.log("DOES IT NOT TO FILTER? "+pages.length);
        if(!pages.length)
            pages = [[]];
        //console.log("[[page "+this.state.currentPage+" > "+pages[this.state.currentPage]);//this.state.currentPage
        //usersPages = pages.slice();
        this.setState({usersPages:pages, renderingUsers:pages[this.state.currentPage]});
        //this.setState({});
        this.render();
    }
    switchPages = (dir)=>{//on PageSwitcher click
        //console.log("SWITCH PAGE! NOW IT IS "+this.state.currentPage);
        let newPage = this.state.currentPage+dir;
        this.setState({currentPage:newPage});
    }
    sortByColumn = (colName, dir)=>{
        let newSorted = _.sortBy(this.state.users, colName);
        if(dir<0)
            newSorted.reverse();
        this.setState({usersSorted:newSorted, currentPage:0});
        this.slicePages();
    }
    columnClick = (indx)=>{
        let newSortingColumns = this.state.sortingColumns.slice();

        if(this.state.sortColNum>=0)
            newSortingColumns[this.state.sortColNum] = "";

        let newSortDirections = this.state.sortDirections.slice();
        if(indx == this.state.sortColNum)
            newSortDirections[indx] *= -1;
        
        let dir = newSortDirections[indx];
        let char = dir>0 ? "▾" : "▴";
        
        newSortingColumns[indx] = char;
        this.state.sortColNum = indx;

        this.sortByColumn(this.state.headColFields[indx], newSortDirections[indx]);

        this.setState({sortingColumns: newSortingColumns, sortDirections:newSortDirections});
    }
    onFilterInput = (e)=>{
        let value = e.target.value
        this.setState({filterString:value});
        console.log(this.state.filterString);
    }
    filterUserList = (e)=>{
        let str = this.state.filterString;
        str = str.toLowerCase();
        let filteredUsers = this.state.users.filter(function(o){
            //console.log(o);
            for(let nm in o){
                //console.log("___________ "+o[nm]);
                if(o[nm].toString().toLowerCase().indexOf(str)>=0) return true;
            }
            return false;
        });
        console.log(">>>found users:");
        console.log(filteredUsers);
        //this.setState({usersSorted:filteredUsers});
        this.setState(()=>{return {usersSorted:filteredUsers} });
        this.slicePages();
    }
    selectUser = (obj)=>{
        this.setState({selectedUser:obj});
    }
    showAddUserDialog = ()=>{
        this.setState({showNewUserDialog:true});
    }
    closeAddUserDialog = ()=>{
        this.setState({showNewUserDialog:false});
    }
    addNewUser = (obj)=>{
        console.log("ADD NEW USER!");
        console.log(obj);
        let updatedUsers = this.state.users.slice();
        updatedUsers.unshift(obj);
        this.setState({users:updatedUsers});
        this.sortByColumn(0,0);
    }
    render(){
        return (
            <div>
                <input value={this.state.filterString} onChange={this.onFilterInput} ></input> <button onClick={this.filterUserList}>Поиск</button>
                &nbsp;&nbsp;
                <button onClick={()=>{this.showAddUserDialog();}}>Добавить</button>
                
                <div className="pageSwitcher">
                    <span className="pageSwitcherTxt" disabled={this.state.currentPage==0} onClick={()=>this.switchPages(-1)}>←</span>
                    <span className="pageSwitcherTxt">{this.state.currentPage+1} / {this.state.usersPages.length}</span>
                    <span className="pageSwitcherTxt" disabled={this.state.currentPage>=(this.state.usersPages.length-1)} onClick={()=>this.switchPages(1)}>→</span>
                </div>
                
                <table>
                    <thead>
                        <tr>
                            {
                                this.state.headColNames.map((itm, idx)=>{
                                    return (<th key={idx} onClick={ (e) =>{
                                            return this.columnClick(idx);
                                        } }>
                                        {itm}
                                        <span className="tho">{this.state.sortingColumns[idx]}</span>
                                        </th>);
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //       this.state.users.map(function(usr, idx){
                            this.state.usersPages[this.state.currentPage].map((usr, idx)=>{
                                return ( <TableUser data={usr} key={usr.id} showDetails={this.selectUser}/> );
                            })
                        }
                    </tbody>
                </table>
                
                
                <UserDetails key="0" data={this.state.selectedUser}/>
                {console.log("-------------- SHOW DIALOG "+this.state.showNewUserDialog)}
                { this.state.showNewUserDialog ? <NewUserDialog key="1" addNewUser={this.addNewUser} closeNewUserDialog={this.closeAddUserDialog}/> : null }
            </div>
        )
    }
}