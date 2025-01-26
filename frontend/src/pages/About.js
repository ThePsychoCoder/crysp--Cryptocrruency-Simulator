// imports
import React from "react";
import { Container, Row, Col, Button, Navbar, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { UserService, AuthService } from "../services";
import { Logo } from "../img";

// component About
export default class About extends React.Component {
  /**
   * constructor of About
   * @param {*} props
   */
  constructor(props) {
        super(props);

        this.state = {
        currentUser: AuthService.getCurrentUser(),
        message: "",
        };
    }

  /**
   * executes on mount
   */
  componentDidMount() {
    this.getBalance();
  }

  /**
   * gets user balance from backend
   */
  getBalance() {
    UserService.getUserBalance(this.state.currentUser.username).then(
      (response) => {
        this.setState({
          currentUSD: response.balance.toFixed(2),
        });
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        this.setState({
          message: resMessage,
        });
      }
    );
  }

  /**
   * handles logout
   * @param {Event} e
   */
  handleLogout(e) {
    e.preventDefault();
    AuthService.logout();
    window.location.reload();
  }

  /**
   * render-function of About
   */
  render() {
    const {currentUser, currentUSD} = this.state;

    if (currentUser == null) {
      this.props.history.push("/login");
      window.location.reload();
    }

    return (
      <div style={{width:"99%"}}>  {
      <Container fluid>
        <Navbar className="z-100" id="navbar">
            <Logo/>
          <Nav className="mr-auto w-100">
            <Button href="./dashboard" className="w-15 ml-4">
              Dashboard
            </Button>
            <Button href="./about" className="w-15 ml-4">
              About
            </Button>
          </Nav>
          <Navbar.Text className="w-20 text-light mr-2">
            Signed in as: <span className="text-pripri"><b>{currentUser.username}</b></span>
          </Navbar.Text>
          <Navbar.Text className="w-yb text-light mr-2">
            Your Balance:
          </Navbar.Text>
          <DropdownButton id="dropdown-basic-button" title="">
                    
                    <Dropdown.Item>{<div onClick={()=>{document.getElementById("currencySymbol").innerText="    $ ";document.getElementById("currencyValue").textContent=(currentUSD*1.00).toFixed(5)}}>USD</div>}</Dropdown.Item>
                    <Dropdown.Item>{<div onClick={()=>{document.getElementById("currencySymbol").innerText="    € ";document.getElementById("currencyValue").textContent=(currentUSD*0.95).toFixed(5)}}>EUR</div>}</Dropdown.Item>
                    <Dropdown.Item>{<div onClick={()=>{document.getElementById("currencySymbol").innerText="    £ ";document.getElementById("currencyValue").textContent=(currentUSD*0.83).toFixed(5)}}>GBP</div>}</Dropdown.Item>
                    <Dropdown.Item>{<div onClick={()=>{document.getElementById("currencySymbol").innerText="    ¥ ";document.getElementById("currencyValue").textContent=(currentUSD*138.20).toFixed(5)}}>JPY</div>}</Dropdown.Item>
                    <Dropdown.Item>{<div onClick={()=>{document.getElementById("currencySymbol").innerText="    ₽ ";document.getElementById("currencyValue").textContent=(currentUSD*60.77).toFixed(5)}}>RUB</div>}</Dropdown.Item>
                    <Dropdown.Item>{<div onClick={()=>{document.getElementById("currencySymbol").innerText="    ₩ ";document.getElementById("currencyValue").textContent=(currentUSD*1334.00).toFixed(5)}}>KRW</div>}</Dropdown.Item>
                    <Dropdown.Item>{<div onClick={()=>{document.getElementById("currencySymbol").innerText="    ₹ ";document.getElementById("currencyValue").textContent=(currentUSD*81.58).toFixed(5)}}>INR</div>}</Dropdown.Item>
        </DropdownButton>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Navbar.Text className="text-light mr-4 ml-n4">
                {
                <div id="currencySymbol"> $ </div>
                }
            </Navbar.Text>
            &nbsp;
            <Navbar.Text className="text-light mr-4 ml-n4" id="currencyVal">
                {<div id="currencyValue">
                {currentUSD}
                </div>}
            </Navbar.Text>
          <Button className="w-15" onClick={this.handleLogout}>
            Logout
          </Button>
        </Navbar>

        <Row
          className="d-flex justify-content-center align-items-center"
          style={{
            height: "calc(100vh - 76px)",
            marginBottom: "0px",
            marginTop: "27px",
            padding: "0",
          }}
        >
          <Col
            md="12"
            className="h-100 m-0 p-0 pb-2 pl-2 pr-2 d-flex justify-content-center align-items-center"
          >
            <div
              className="rounded w-70 h-100 pl-5 pr-5 bg-dark text-light fw-bold text-center"
              style={{ border: "2px solid grey" }}
            >
              <h1 className="h-25 d-flex justify-content-center align-items-center">
                About
              </h1>
              <div className="h-75">
                Delivering a genuine cryptocurrency trading experience is the
                goal of this online application. We work hard to provide a {" "}
                <b className="text-primary">
                realistic, risk-free trading environment
                </b>{" "}
                for our users that is up to date on currency rates.
                <br></br>
                <br></br>
                Please be aware that as this is a {" "}
                <b className="text-primary">prototype</b>, several processes still need to be refined. However, we are pleased to offer a {" "}
                <b className="text-primary">
                  fully functional cryptocurrency trading experience
                </b>{" "}
                with{" "}
                <b className="text-primary">over 9 supported currencies</b>{" "}
                and more on the way.
                <br></br>
                <br></br>
                Users will immediately receive their <b className="text-primary">initial start-up cash of $10,000</b> after registering. From that point on, you are <b className="text-primary">free to purchase, trade, and invest</b> in the cryptocurrencies we support. We use our own trading charts and exchange histories to assist your strategic decisions.
                <br></br>
                <br></br>
                <br></br>
                If you face any difficulties with our web app, please do not hesitate to contact our lead developers directly:
                <br></br>
                <br></br>
                <b className="text-primary"><a href="mailto:yashbaid2002@gmail.com">Yashvardhan</a></b>,{" "}
                <b className="text-primary"><a href="mailto:lit2020017@iiitl.ac.in">Neetigya</a></b>,{" "}
                <b className="text-primary"><a href="mailto:lit2020016@iiitl.ac.in">Akshay</a></b>,{" "}
                <b className="text-primary"><a href="mailto:lit2020015@iiitl.ac.in">Parmeet</a></b> and{" "}
                <b className="text-primary"><a href="mailto:lit2020014@iiitl.ac.in">Rohan</a></b>
              </div>
            </div>
          </Col>
        </Row>
      </Container>}
      </div>
    );
  }
}
