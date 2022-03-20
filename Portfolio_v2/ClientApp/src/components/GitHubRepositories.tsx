import { History } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, CardHeader, CardSubtitle, CardText, CardTitle, Col, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { ApplicationState } from '../store';
import * as GitHubStore from '../store/GitHub';
import AutoSizeInput from 'react-input-autosize';

// At runtime, Redux will merge together...
type GitHubReposProps =
    GitHubStore.RepositoriesState // ... state we've requested from the Redux store
    & typeof GitHubStore.actionCreators // ... plus action creators we've requested
    & RouteComponentProps<{ username: string }>; // ... plus incoming routing parameters



class GitHubRepositories extends React.PureComponent<GitHubReposProps> {

    private myref = React.createRef<HTMLInputElement>();

    // This method is called when the component is first added to the document
    public componentDidMount() {
        this.ensureDataFetched();
    }

    // This method is called when the route parameters change
    public componentDidUpdate() {
        this.ensureDataFetched();
    }

    public render() {
        return (
            <React.Fragment>
                {this.renderHeader()}
                {this.renderForecastsTable()}
            </React.Fragment>
        );
    }

    private ensureDataFetched() {
        var username = this.props.match.params.username;
        this.props.requestUserRepositories(username);
    }

    private handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>, history: History<any>) {
        if (e.key === 'Enter') {
            var val = this.myref.current!.value;
            if (val && val !== this.props.username) {
                history.push(`${val}`);
                this.props.requestUserRepositories(val);
            }
        }
    }

    private populateImgSrc() {
        if (this.props.repositories[0] && this.props.repositories[0].owner) {
            return this.props.repositories[0].owner.avatar_url;
        }
        else {
            return require('../assets/Octocat.png');
        }
    }
    private renderHeader() {
        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={this.populateImgSrc()} alt={'test'} style={{ borderRadius: '50%', width: '250px', height: '250px', objectFit: 'contain', border: '3px solid #000', padding: '1px', margin: '1rem' }} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center' }}>
                    <p id="tabelLabel" style={{ fontSize: 'x-large' }}>GitHub.com/</p>
                    <Route render={({ history }) => (
                        <input ref={this.myref} type="text" onKeyDown={(evt) => this.handleKeyDown(evt, history)} placeholder={this.props.match.params.username} style={{ fontSize: 'x-large', marginLeft: '2px', width: '250px' }} />
                    )} />
                </div>
                <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                    <h1 id="tabelLabel" >Projects</h1>
                </div>
            </div>
        );
    }

    private renderForecastsTable() {
        console.log(this.getColor());
        if (this.props.repositories && this.props.repositories.length > 0) {
            return (
                <div>
                    <Row>
                        {this.props.repositories && this.props.repositories!.map((repo: GitHubStore.Repository) =>
                            <Col sm="4" key={repo.id} style={{ paddingLeft: '5px', paddingRight: '5px' }}>
                                <Card style={{ minHeight: '20rem', marginBottom: 10 }}>
                                    <CardHeader style={{ backgroundColor: this.getColor(), fontWeight: 'bold', color: 'black', display: 'flex', justifyContent: 'space-between' }}>
                                        <p style={{ margin: 0 }}>{repo.name.toUpperCase()}</p>
                                        <a target="_blank" href={repo.html_url}>
                                            <img style={{ width: '20px', height: '20px' }} src={require('../assets/open-new-window-icon.png')} />
                                        </a>
                                    </CardHeader>
                                    <CardBody>
                                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                                            {repo.language}
                                        </CardSubtitle>
                                        <CardText>
                                            {repo.description}
                                        </CardText>
                                    </CardBody>
                                </Card>
                            </Col>)}
                    </Row>
                </div>);
        }
        return (
            <div>
                <h3>Nothing to see here...</h3>
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