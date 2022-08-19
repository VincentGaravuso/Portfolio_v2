import { History } from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route } from 'react-router';
import { Button, Card, CardBody, CardHeader, CardSubtitle, CardText, Col, Row, Spinner } from 'reactstrap';
import { ApplicationState } from '../store';
import * as GitHubStore from '../store/GitHub';
import './css/GitHubRepositories.css';

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
            <div className='header-container'>
                <div className='profile-pic'>
                    <img src={this.populateImgSrc()} alt={'test'}/>
                </div>
                <div className='git-url-container'>
                    <p id="tabelLabel">GitHub.com/</p>
                    <Route render={({ history }) => (
                        <input ref={this.myref} type="text" onKeyDown={(evt) => this.handleKeyDown(evt, history)} placeholder={'VincentGaravuso'}/>
                    )} />
                </div>
            </div>
        );
    }

    private renderForecastsTable() {
        if (this.props.isLoading) {
            return (
                <div>
                    <div className='loading-spinner-container'>
                        <Spinner>Loading</Spinner>
                    </div>
                </div>
            );
        }
        if (this.props.repositories && this.props.repositories.length > 0) {
            return (
                <div className='project-display-container'>
                    <Row className='row'>
                        {this.props.repositories.map((repo: GitHubStore.Repository) =>
                            <Col lg="4" key={repo.id} className='col'>
                                <Card className='card'>
                                    <CardHeader className='card-header'>
                                        <p>{repo.name.toUpperCase()}</p>
                                        <a target="_blank" rel="noopener noreferrer" href={repo.html_url}>
                                            <img alt='NewWindow' src={require('../assets/new-window.svg')} />
                                        </a>
                                    </CardHeader>
                                    <CardBody className='card-body'>
                                        <div>
                                            <CardSubtitle className='card-subtitle-lang'>
                                                Primary Language: {repo.language}
                                            </CardSubtitle>
                                        </div>
                                        <div className='card-description-container'>
                                            <CardSubtitle className='card-subtitle'>
                                                Description
                                            </CardSubtitle>
                                            <CardText className='card-description-text'>
                                                {repo.description ? repo.description : 'N/A'}
                                            </CardText>
                                        </div>
                                        <div className='card-footer-container'>
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
            <div className='user-not-found'>
                <h3>Username not found...</h3>
                <h6>(Make sure to enter a valid GitHub Username!)</h6>
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => state.repositories, // Selects which state properties are merged into the component's props
    GitHubStore.actionCreators // Selects which action creators are merged into the component's props
)(GitHubRepositories as any); // eslint-disable-line @typescript-eslint/no-explicit-any