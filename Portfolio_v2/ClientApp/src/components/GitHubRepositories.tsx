import { History } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route } from 'react-router';
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, Col, Row, Spinner } from 'reactstrap';
import { ApplicationState } from '../store';
import * as GitHubStore from '../store/GitHub';

// At runtime, Redux will merge together...
type GitHubReposProps =
    GitHubStore.RepositoriesState // ... state we've requested from the Redux store
    & typeof GitHubStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ username: string }>; // ... plus incoming routing parameters



class GitHubRepositories extends React.PureComponent<GitHubReposProps> {

    private myref = React.createRef<HTMLInputElement>();

    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched(true);
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched(false);
    }

    public render() {
        return (
            <React.Fragment>
                    {this.renderHeader()}
                    {this.renderForecastsTable()}
            </React.Fragment>
        );
    }

    private ensureDataFetched(constructorCall: boolean) {
        var username;
        if (constructorCall) {
            username = 'vincentgaravuso';
        } else {
            username = this.props.username ? this.props.username : '';
            console.log('Routing changed: ' + username);
        }

        this.props.requestUserRepositories(username);
    }

    private handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, history: History<any>) {
        if (e.key === 'Enter') {
            var val = this.myref.current!.value;
            if (val && val !== this.props.username) {
                history.push(`${val}`);
                this.props.requestUserRepositories(val);

                console.log('Value Entered: ' + val);
            }
        }
    }

    private populateImgSrc() {
        if (this.props.repositories && this.props.repositories[0] && this.props.repositories[0].owner) {
            return this.props.repositories[0].owner.avatar_url;
        }
        else {
            return require('../assets/Octocat.png');
        }
    }

    private renderHeader() {
        return (
            <div style={{ paddingTop: '100px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={this.populateImgSrc()} alt={'test'} style={{ borderRadius: '50%', width: '250px', height: '250px', objectFit: 'contain', border: '3px solid #E4DEAE', padding: '1px', margin: '1rem' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                    <p id="tabelLabel" style={{ fontSize: 'x-large', color: '#E4DEAE', margin: '0' }}>GitHub.com/</p>
                    <Route render={({ history }) => (
                        <input ref={this.myref} type="text" onKeyDown={(evt) => this.handleKeyDown(evt, history)} placeholder={'VincentGaravuso'} style={{ fontSize: 'larger', marginBottom: '0', marginLeft: '5px', width: '250px', borderRadius: '5px', background: '#E4DEAE', border: 0, color: '#011B10', paddingLeft: '5px', paddingRight: '5px' }} />
                    )} />
                </div>
            </div>
        );
    }

    private renderForecastsTable() {
        if (this.props.isLoading) {
            return (
                <div>
                    <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', height: '100vh' }}>
                        <Spinner style={{ color:'#E4DEAE' }}>
                            Loading
                        </Spinner>
                    </div>
                </div>
            );
        }
        if (this.props.repositories && this.props.repositories.length > 0) {
            return (
                <div style={{ marginTop: '2rem' }}>
                    <Row style={{ margin: "auto" }}>
                        {this.props.repositories.map((repo: GitHubStore.Repository) =>
                            <Col lg="4" key={repo.id} style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                                <Card style={{ height: '20rem', marginBottom: 10, boxShadow: '3px 3px 7px 2px #0000009c', border: 0, borderRadius: '5px'}}>
                                    <CardHeader style={{ backgroundColor: '#133A1B', fontWeight: 'bold', color: '#E4DEAE', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ margin: 0 }}>{repo.name.toUpperCase()}</p>
                                        <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                            <img alt='NewWindow' style={{ width: '20px', height: '20px' }} src={require('../assets/new-window.svg')} />
                                        </a>
                                    </CardHeader>
                                    <CardBody style={{ background: '#E4DEAE' } }>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                            <CardSubtitle className="mb-2" style={{ color: '#011B10' }} tag="h6">
                                                Primary Language: {repo.language}
                                            </CardSubtitle>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                                            <CardSubtitle className="mb-2" style={{ marginBottom: '0rem!important', color: '#011B10' }} tag="h6">
                                                Description
                                            </CardSubtitle>
                                            <CardText style={{ color: '#011B10' }}>
                                                {repo.description ? repo.description : 'N/A'}
                                            </CardText>
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px', fontSize: '12px', position: 'absolute', bottom: 0 }}>
                                            <CardSubtitle className="mb-2 text-muted">
                                                Size: {repo.size}MB
                                            </CardSubtitle>
                                            <CardSubtitle className="mb-2 text-muted">
                                                Created: {new Date(repo.created_at).toLocaleDateString()} | Updated: {new Date(repo.pushed_at).toLocaleDateString()}
                                            </CardSubtitle>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>)}
                    </Row>
                </div>);
        }
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', marginTop: '3rem', height: '100vh', color: '#E4DEAE' }}>
                <h3>Username not found...</h3>
                <h6>(Make sure to enter a valid GitHub Username!)</h6>
            </div>
        );
    }

    private RGBToHSL(h: number, s: number, l: number) {
        h /= 360;
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p: number, q: number, t: number) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }
        const toHex = (x: number) => {
            const hex = Math.round(x * 255).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    private getColor() {
        return this.RGBToHSL(360 * Math.random(), 100, 75);
    }
}

export default connect(
    (state: ApplicationState) => state.repositories, // Selects which state properties are merged into the component's props
    GitHubStore.actionCreators // Selects which action creators are merged into the component's props
)(GitHubRepositories as any); // eslint-disable-line @typescript-eslint/no-explicit-any