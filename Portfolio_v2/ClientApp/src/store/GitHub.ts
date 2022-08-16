import { Action, Reducer } from 'redux';
import { AppThunkAction } from '.';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.
export interface RepositoriesState {
    isLoading: boolean;
    username?: string;
    repositories: Repository[];
}

interface RequestRepositoryAction {
    type: 'REQUEST_USER_REPOSITORIES';
    username: string;
}

interface ReceiveRepositoryAction {
    type: 'RECEIVE_USER_REPOSITORIES';
    username: string;
    repositories: Repository[];
}

interface SetUsernameAction {
    type: 'SET_USERNAME_ACTION';
    username: string;
}

type KnownAction = RequestRepositoryAction | ReceiveRepositoryAction | SetUsernameAction;

export const actionCreators = {
    requestUserRepositories: (username: string): AppThunkAction<KnownAction> => async (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        const appState = getState();
        let url = ``;
        if (process.env.NODE_ENV === 'production') {
            url = `https://ua0t6z413c.execute-api.us-west-1.amazonaws.com/Prod/api/GitHub/GetUserRepositories/?username=${username}`;
        }
        else {
            url = `http://localhost:59111/api/GitHub/GetUserRepositories/?username=${username}`;
        }

        if (appState && appState.repositories && username !== appState.repositories.username) {
            console.log('API' + username);
            fetch(url).then(async response => {
                if (response) {
                    const data = await response.json();

                    if (!response.ok) {
                        const error = (data && data.message) || response.status;
                        dispatch({ type: 'RECEIVE_USER_REPOSITORIES', username: username, repositories: [] });
                        return Promise.reject(error);
                    }

                    dispatch({ type: 'RECEIVE_USER_REPOSITORIES', username: username, repositories: data });

                }
            })
                .catch(error => {
                    console.log(error);
                    dispatch({ type: 'RECEIVE_USER_REPOSITORIES', username: username, repositories: [] });
                });

            dispatch({ type: 'REQUEST_USER_REPOSITORIES', username: username });

        }
    },
    setUsername: (username: string): AppThunkAction<KnownAction> => (dispatch, getState) => {
        // Only load data if it's something we don't already have (and are not already loading)
        dispatch({ type: 'SET_USERNAME_ACTION', username: username });
    }
};

const unloadedState: RepositoriesState = { repositories: [], isLoading: false, username: ''};

export const reducer: Reducer<RepositoriesState> = (state: RepositoriesState | undefined, incomingAction: Action): RepositoriesState => {
    if (state === undefined) {
        return unloadedState;
    }

    const action = incomingAction as KnownAction;
    switch (action.type) {
        case 'REQUEST_USER_REPOSITORIES':
            return {
                username: action.username,
                repositories: state.repositories,
                isLoading: true
            }
        case 'RECEIVE_USER_REPOSITORIES':
            // Only accept the incoming data if it matches the most recent request. This ensures we correctly
            // handle out-of-order responses.
            if (action.username === state.username) {
                return {
                    username: action.username,
                    repositories: action.repositories,
                    isLoading: false
                }
            } break;
        case 'SET_USERNAME_ACTION':
            if (action.username === state.username)
                return {
                    username: action.username,
                    repositories: state.repositories,
                    isLoading: false
                }
            break;
    }

    return state;
};


export interface RepositoryOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: RepositoryOwner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: Date;
    updated_at: Date;
    pushed_at: Date;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    forks_count: number;
    mirror_url?: any;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license?: any;
    allow_forking: boolean;
    is_template: boolean;
    topics: any[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}