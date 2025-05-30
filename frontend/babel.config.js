// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//   };
// };

// // module.exports = {
// //   presets: ['module:metro-react-native-babel-preset'],
// //   plugins: [
// //     'react-native-reanimated/plugin',
// //   ],
// // };

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     plugins: [
//       'react-native-reanimated/plugin',
//       ['module:react-native-dotenv'],
//     ],
//   };
// };

// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['module:metro-react-native-babel-preset'],
//     plugins: [
//       'react-native-reanimated/plugin',
//       ['module:react-native-dotenv'],
//       '@babel/plugin-transform-private-methods' // Add this line
//     ],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      ['module:react-native-dotenv'],
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }]
    ],
  };
};

