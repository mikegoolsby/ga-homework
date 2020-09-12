const React = require("react")

class Layout extends  React.Component {
    render() {
        return (
            <html>
                <head>
                <link rel="stylesheet" href="../css/style.css"/>
                <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>test</h1>
                </body>
            </html>
        )
    }
}