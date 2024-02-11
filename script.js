const main = document.querySelector('.hidden');
const searchButton = document.getElementById('search-button');
const headerUsername = document.getElementById('header_username');
const headerRepositories = document.getElementById('header_repositories');
const headerGists = document.getElementById('header_gists');
const userPicture = document.getElementById('user_img');
const userName = document.getElementById('user_Name');
const userNick = document.getElementById('user_nickname');
const userBio = document.getElementById('user_bio');
const userFollowers = document.getElementById('user_followers');
const userFollowing = document.getElementById('user_following');
const userCompany = document.getElementById('user_company');
const userLocation = document.getElementById('user_location');
const userEmail = document.getElementById('user_email');
const userTwitter = document.getElementById('user_twitter');
const userBlog = document.getElementById('user_blog');
const userCreateAt = document.getElementById('user_create_at');
const userUpdateAt = document.getElementById('user_update_at');
const userId = document.getElementById('user_id');
const userNodeId = document.getElementById('user_node_id');
const userApiUrl = document.getElementById('user__api_url');
const userUrl = document.getElementById('user_url');
const userFollowersUrl = document.getElementById('user_followers_url');
const userFollowingUrl = document.getElementById('user_following_url');
const userGistsUrl = document.getElementById('user_gists_url');
const userStarredUrl = document.getElementById('user_starred_url');
const userSubscriptionUrl = document.getElementById('user_subscriptions_url');
const userOrganizationUrl = document.getElementById('user_organizations_url');
const userRepositoriesUrl = document.getElementById('user_repositories_url');
const userEventsUrl = document.getElementById('user_events_url');
const userReceivedEventsUrl = document.getElementById('user_received_events_url');
const userType = document.getElementById('user_type');
const userAdmin = document.getElementById('user_admin');
const userHireable = document.getElementById('user_hireable');

let data = ""

async function getData() {
    const username = document.getElementById('input-username').value;
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        data = await response.json();
        if (response.status === 200) {
            console.log(data);
            showData(data);
        } else {
            console.log('Server Error:', data.error.message);
        }
    } catch(error) {
        console.log('Fetch Error:', error);
    }
}

function showData(data) {
    main.classList.remove('hidden');
    headerUsername.innerText = data.login;
    headerRepositories.innerText = data.public_repos;
    headerGists.innerText = data.public_gists;
    userPicture.src = data.avatar_url;
    userName.innerText = data.name;
    userNick.innerText = data.login;
    userBio.innerText = data.bio;
    userFollowers.innerText = data.followers;
    userFollowing.innerText = data.following;
    userCompany.innerText = data.company;
    userLocation.innerText = data.location;
    userEmail.innerText = data.email;
    userTwitter.innerText = data.twitter_username;
    userBlog.innerText = data.blog;
    userCreateAt.innerText = data.created_at;
    userUpdateAt.innerText = data.updated_at;
    userId.innerText = data.id;
    userNodeId.innerText = data.node_id;
    userApiUrl.innerText = data.url;
    userUrl.innerText = data.html_url;
    userFollowersUrl.innerText = data.followers_url;
    userFollowingUrl.innerText = data.following_url;
    userGistsUrl.innerText = data.gists_url;
    userStarredUrl.innerText = data.starred_url;
    userSubscriptionUrl.innerText = data.subscriptions_url;
    userOrganizationUrl.innerText = data.organizations_url;
    userRepositoriesUrl.innerText = data.repos_url;
    userEventsUrl.innerText = data.events_url;
    userReceivedEventsUrl.innerText = data.received_events_url;
    userType.innerText = data.type;
    userAdmin.innerText = data.site_admin;
    userHireable.innerText = data.hireable;
}

searchButton.addEventListener("click", getData)
