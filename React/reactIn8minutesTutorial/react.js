<App text={BUTTONTEXT} />

    var BUTTONTEXT = "Click the button";

    var ButtonForm = React.createClass({
        render: function(){
            return (
                <div>
                <h3>{this.props.text}</h3>
            <input type="submit" />
                </div>
        );
        }
    });

    var App = React.createClass({
        render: function(){
            return (
                <div>
                <h1> Welcome to my button app!</h1>
            <ButtonForm text={this.props.text} />
            </div>
        );
        }
    });

    handleClick: function(){
        this.setState({
            active: !this.state.active
        });
    },
    render: function(){
        var buttonSwitch = this.state.active ? "On" : "Off";
        return (
            <div>
                <p>Click the button!</p>
                <input type="submit" onClick={this.handleClick} />
                <p>{buttonSwitch}</p>
            </div>
        );
    }

React.render(<App text={BUTTONTEXT} />,  document.getElementById("content"));

