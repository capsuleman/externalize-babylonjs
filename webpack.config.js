module.exports = (config, { isServer = false } = {}) => {

  config.externals = config.externals || [];
  if (!isServer) {
    config.externals.push(({ request }, callback) => {
      if (request.match('^@babylonjs/gui')) {
        return callback(null, 'BABYLON.GUI');
      }
      if (request.match('^@babylonjs')) {
        return callback(null, 'BABYLON');
      }
      callback();
    });
  } else {
    config.externals.push('@babylonjs/core');
    config.externals.push('@babylonjs/loaders/glTF');
    config.externals.push('@babylonjs/gui');
  }

  return config;
};
