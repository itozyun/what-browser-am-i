const pkg             = require('../package.json'),
      moduleName      = pkg.name,
      tempDir         = require('os').tmpdir() + '/' + moduleName,
      copyright       = moduleName + '@' + pkg.version + '\n' +
                       '(c) 2021-' + (new Date).getFullYear() + ' ' + pkg.author + '(' + pkg.homepage + '), ' + pkg.license + '.';

module.exports.tempDir = tempDir;
module.exports.copyright = copyright;
