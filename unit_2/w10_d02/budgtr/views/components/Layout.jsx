const React = require("react")

class Layout extends  React.Component {
    render() {
        return (
            <html>
                <head>
                <link rel="stylesheet" href="/style.css"/>
                <title>{this.props.title}</title>
                </head>
                <body>
                    <main>
                        {this.props.children}
                    </main>
                </body>
            </html>
        )
    }
}
module.exports = Layout