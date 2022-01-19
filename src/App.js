import logo from '../logo.svg';
import '../App.css';
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {useWeb3React} from "@web3-react/core"
import {injected} from "../components/wallet/connectors"

function App() {

    const {active, account, library, connector, activate, deactivate} = useWeb3React()

    async function connect() {
        try {
            await activate(injected)
        } catch (ex) {
            console.log(ex)
        }
    }

    async function disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }

        return (
            <div className="App flex flex-col items-center justify-center">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Connecting MetaMask with React
                    </p>
                    <button
                        className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Connect
                        to MetaMask
                    </button>
                    <span>Not connected</span>
                    <button
                        className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect
                    </button>
                </header>
            </div>
        );
    }

    export default App;
