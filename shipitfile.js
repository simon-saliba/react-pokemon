module.exports = function (shipit) {
    require('shipit-deploy')(shipit);
  
    shipit.initConfig({
        default: {
            workspace: '/tmp/github-monitor',
            deployTo: '/home/ubuntu/react-pokemon',
            repositoryUrl: 'https://github.com/simon-saliba/react-pokemon',
            ignores: ['.git', 'node_modules'],
            keepReleases: 2,
            deleteOnRollback: false,
            key: '/Users/simons/.ssh/aws-key-pair-perso.pem',
            shallowClone: true,
            branch: 'master'
        },
        staging: {
            servers: 'ubuntu@3.20.221.186'
        }
    });
    shipit.on('built', function() {
        shipit.start('start-server')
      });
};