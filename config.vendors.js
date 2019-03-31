/**
 * Append every vendor js path.
 *  - Relative to the project root.
 *  - In load order.
 * 
 * 
 * Defaults:
 * 
 * module.exports = {
 *     jsVendorFiles: []
 * }
 */

module.exports = {
  jsVendorFiles: [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/js/dist/tab.js',
    'node_modules/bootstrap/js/dist/util.js',
    'node_modules/bootstrap/js/dist/collapse.js',
    // 'node_modules/bootstrap/js/dist/alert.js',
    // 'node_modules/bootstrap/js/dist/button.js',
    // 'node_modules/bootstrap/js/dist/carousel.js',
    // 'node_modules/bootstrap/js/dist/modal.js',
    // 'node_modules/bootstrap/js/dist/toast.js',
    // 'node_modules/bootstrap/js/dist/tooltip.js'
  ],
};
