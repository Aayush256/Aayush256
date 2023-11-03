import logo from './logo.svg';
import './App.css';
import StudentForm from './components/student-form/StudentForm';
function NavBar() {
  return <h1>This is a navbar component</h1>;
  
}  
 function Banner() {
  return  <h1 >This is a banner component</h1>;
  
}
function Footer() {
  return  <h1 >This is a footer component</h1>;
  
}
 function Header() {
  return  <h1 >This is a Header</h1>;
  
} 
 function GreetUser(props) {
  return(
    <div>
      <h1 >Welcome {props.name} </h1>
      <h1 >your email id {props.email} </h1>
      <h1 >your phone number {props.phonenumber} </h1>
     <h1 >semesterm is {props.sem} </h1>
     <h1 > branch belong to{props.branch} </h1>
    </div>
  );
  
}


export default function App() {
  return (
    <div className="App">
      {/* <NavBar />
      <Banner />
      <Footer />
      <Header /> */}
      <GreetUser name="Aayush" email="sdgayhsa.@gmail.com"  phonenumber=  "54879584951" sem="4" branch="cse"/>
    <StudentForm/>
    </div>
  );
}

// export default App;
