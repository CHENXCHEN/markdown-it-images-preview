/**
 * @Author: HuaChao Chen <chc>
 * @Date:   2017-06-12T21:06:58+08:00
 * @Email:  chenhuachaoxyz@gmail.com
 * @Filename: index.js
 * @Last modified by:   chc
 * @Last modified time: 2017-06-12T21:18:15+08:00
 * @License: MIT
 * @Copyright: 2017
 */

module.exports = function(md, config){
    md.image_add = function(src, data){
        if(!(md.__image instanceof Object))
            md.__image = {}
        md.__image[src] = data;
    }
    md.image_del = function(src){
        if(!(md.__image instanceof Object))
            md.__image = {}
        delete md.__image[src];
    }
    var imagedefault = md.renderer.rules.image;
    md.renderer.rules.image = function(tokens, idx, options, env, slf){
        var _attrs = tokens[idx].attrs;
        if(md.__image instanceof Object){
            for(var i = 0;i < _attrs.length;i++){
                if(_attrs[i][0] == 'src' && md.__image.hasOwnProperty(tokens[idx].attrs[i][1])){
                    _attrs.push(['rel', _attrs[i][1]]);
                    _attrs[i][1] = md.__image[tokens[idx].attrs[i][1]]
                    break;
                }
            }
        }
        return imagedefault(tokens, idx, options, env, slf);
    }
}
