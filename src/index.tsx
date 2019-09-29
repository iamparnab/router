import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router'
import Path from './path'
import { RouterRenderProps, ExtraProps, ChangePathType } from './models'


const Component1 = ({ changePath }: ExtraProps & RouterRenderProps) => {
    return (
        <>
            <p>This is page1.</p>
            <button onClick={() => changePath('/page2')}> Go to page2 </button>
        </>
    )
}

const Component2 = ({ changePath }: ExtraProps & RouterRenderProps) => {
    return (
        <>
            <p>This is page2.</p>
            <button onClick={() => changePath('/page1')}> Go to page1 </button>
        </>
    )
}

const Home = ({ changePath }: ExtraProps & RouterRenderProps) => {
    return (
        <>
            <p>This is Home page.</p>
            <button onClick={() => changePath('/page1')}> Go to page1 </button>
            <button onClick={() => changePath('/page2')}> Go to page2 </button>
        </>
    )
}

class App extends React.Component {
    render() {
        return (
            <Router
                render={(changePath: ChangePathType) => {
                    return (
                        <>
                            <Path
                                url="/"
                                render={() => <Home changePath={changePath} data={'Home'} />}
                            />
                            <Path
                                url="/page1"
                                render={() => <Component1 changePath={changePath} data={'anything'} />}
                            />
                            <Path
                                url="/page2"
                                render={() => <Component2 changePath={changePath} data={{ any: 'thing' }} />}
                            />
                        </>
                    )
                }}
            />
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root'),
)