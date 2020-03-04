class PageSwitcher extends React.Component {
    constructor(props){
        super();
    }

    render(){
        return <div className="pageSwitcher">
            <span className="pageSwitcherTxt">←</span>
            <span className="pageSwitcherTxt"> 1 / 3 </span>
            <span className="pageSwitcherTxt">→</span>
        </div>
    }
}