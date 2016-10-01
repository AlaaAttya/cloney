/**
 * Clone object with its properties
 * @author Alaa Attya <alaa.attya91@gmail.com>
 * 
 * @param {Object} obj_to_clone    object to be cloned
 * @return {Object}
 */
function clone (obj_to_clone) {
    return Object.assign({}, obj_to_clone)
}

module.exports = clone