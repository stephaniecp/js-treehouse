// /** Replace these with your own API keys, username and roomId from Chatkit  */
// const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token"
// const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24"
// const roomId = 9806194
// const username = 'perborgen'

// set up for 4 following variables was on ChatKit website
const instanceLocator = "v1:us1:19bd530e-ddf5-43e9-8051-13d979106c4e\n"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/19bd530e-ddf5-43e9-8051-13d979106c4e/token\n"
const username = "Steph"
const roomId = 14498821

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    }

    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: username,
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        })

        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser
                this.currentUser.subscribeToRoom({
                    roomId: roomId,
                    hooks: {
                        onNewMessage: message => {

                            this.setState({
                                messages: [...this.state.messages, message]
                            })
                        }
                    }
                })
            })
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }

// root componnement
    render() {
        return (
            <div className="app">
                <Title />
                <MessageList
                    roomId={this.state.roomId}
                    messages={this.state.messages} />
                <SendMessageForm
                    sendMessage={this.sendMessage} />
            </div>
        );
    }
}
// We’ll begin with using dummy data so that we can understand the data flow of the app.
//     Then we’ll swap this out with real data from the Chatkit API later on.
class MessageList extends React.Component {
    render() {
        return (
            <ul className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <li  key={message.id} className="message">
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
// Then we’ll add this data to the state of App and pass it down to the MessageList component as a prop.
// Here, we’re initializing the state in the constructor and we’re also passing this.state.messages down to MessageList.
class SendMessageForm extends React.Component {
    constructor() {
        super()
        this.state = {
            message: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            message: e.target.value
        })
    }
// CHeck #2 in directions
        handleSubmit(e) {
            e.preventDefault()
            this.props.sendMessage(this.state.message)
            this.setState({
                message: ''
            })
        }

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="send-message-form">
                <input
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text" />
            </form>
        )
    }
}

function Title() {
    return <p className="title">My awesome chat app</p>
}

ReactDOM.render(<App />, document.getElementById('root'));


























