
//import  React as React  from '../../../lib/react.development.js';
//import  ReactDOM as ReactDOM from '../../../lib/react-dom.development.js';

class FutureTestTask extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            users:[
                {
                    id:0,
                    firstName:"John 1",
                    lastName:"Wiley",
                    email:"JohnWiley@in.gov",
                    phone:"(112)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:1,
                    firstName:"Bill 2",
                    lastName:"Smith",
                    email:"BillSmith@in.gov",
                    phone:"(212)211-6296",
                    address: {
                        streetAddress: '125635 Moscow ',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:2,
                    firstName:"Jack 3",
                    lastName:"3.5",
                    email:"Jack35@in.gov",
                    phone:"(312)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:3,
                    firstName:"Nicolas",
                    lastName:"Ostin",
                    email:"JohnWiley@in.gov",
                    phone:"(412)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:4,
                    firstName:"Peter",
                    lastName:"Quint",
                    email:"BillSmith@in.gov",
                    phone:"(512)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:5,
                    firstName:"Richard",
                    lastName:"Stevenson",
                    email:"Jack35@in.gov",
                    phone:"(612)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:6,
                    firstName:"William",
                    lastName:"Green",
                    email:"Will@in.gov",
                    phone:"(915)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:7,
                    firstName:"Aaron",
                    lastName:"Nickelson",
                    email:"Aaron@in.gov",
                    phone:"(926)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:8,
                    firstName:"Carl",
                    lastName:"Black",
                    email:"Carl@in.gov",
                    phone:"(615)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:9,
                    firstName:"Daniel",
                    lastName:"Edison",
                    email:"Daniel@in.gov",
                    phone:"(910)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:10,
                    firstName:"Faust",
                    lastName:"Garrison",
                    email:"Faust@in.gov",
                    phone:"(618)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:11,
                    firstName:"Hanck",
                    lastName:"Indigo",
                    email:"Jack35@in.gov",
                    phone:"(612)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:12,
                    firstName:"Justin",
                    lastName:"Kean",
                    email:"Justin@in.gov",
                    phone:"(612)181-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:13,
                    firstName:"Leon",
                    lastName:"Michaelson",
                    email:"Leon@in.gov",
                    phone:"(612)200-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:14,
                    firstName:"Neo",
                    lastName:"Zigmund",
                    email:"newTeOne@in.gov",
                    phone:"(618)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
                {
                    id:15,
                    firstName:"Ostin",
                    lastName:"Powers",
                    email:"newTeOne@in.gov",
                    phone:"(618)211-6296",
                    address: {
                        streetAddress: '9792 Mattis Ct',
                        city: 'Waukesha',
                        state: 'WI',
                        zip: '22178'
                    },
                    description: 'et lacus magna dolor...',
                },
            ],
            //selectedUser:0,
        };
        this.cnt=0;
    }
    render() {

        return (
            <div>
                <UsersList users={this.state.users}/>
                
                <br/>
                
            </div>
        );
    }
}

ReactDOM.render(<FutureTestTask/>, document.getElementById("app"));
