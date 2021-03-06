;(function () {
  'use strict'

  /*
   * This directive establishes the body background (color or texture).
   * If that background is a texture, it could be configured to use a CSS class too.
   *
   * Since some background textures have light colors, they could use it to
   * customize other elements, such as buttons that would not be distinguishable
   * otherwise. Others could use it for improving the general aesthetics.
   */
  angular.module('bplclient.directives')
    .directive('backgroundStyle', [function () {
      return {
        restrict: 'A',
        require: '?ngModel',
        link: function (scope, elem, attrs, ctrl) {
          var defaultBackground = 'url(assets/images/images/Blockchain.jpg)'
          // This is the custom configuration of textures
          var textures = {
            'Ahoy.jpg': {
              cssClass: ''
            }
          }

          var classes = Object.values(textures).reduce(function (all, texture) {
            if (all.indexOf(texture.cssClass) === -1) {
              all.push(texture.cssClass)
            }
            return all
          }, [])

          // Used to extract the image filename
          var textureRe = /url\(.+\/([^/]+).\)/
          // Used to extract the image path
          var pathRe = /\((.*)\)/

          scope.$watch(attrs.backgroundStyle, function (value) {
            // Check if the background exists
            if (value === undefined){
              value = defaultBackground
            }
            var mathPath = value.match(pathRe)
            if (mathPath) {
              let filePath = mathPath[1].replace(/'/g, ``)
              var fullPath = require('path').join(__dirname, filePath)

              if (!require('fs').existsSync(filePath) && !require('fs').existsSync(fullPath)) {
                value = defaultBackground // if not exists
              }
            }

            var style = { background: value }
            var newClass = null

            if (value.match('textures')) {
              style.backgroundRepeat = 'repeat'
            } else {
              style.backgroundSize = 'cover'
            }

            elem.css(style)

            var matches = value.match(textureRe)
            if (matches) {
              var filename = matches[1]

              if (textures[filename]) {
                newClass = textures[filename].cssClass
                elem.addClass(newClass)
              }
            }

            classes.forEach(function (textureClass) {
              if (newClass !== textureClass) {
                elem.removeClass(textureClass)
              }
            })
          })
        }
      }
    }])
})()
