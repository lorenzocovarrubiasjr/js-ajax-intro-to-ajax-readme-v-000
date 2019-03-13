function getRepositories() {
  const req = new XLMHttpRequest();
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
};
