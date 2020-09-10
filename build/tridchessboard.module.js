// threejs.org/license
(function(k,Fa){"object"===typeof exports&&"undefined"!==typeof module?Fa(exports):"function"===typeof define&&define.amd?define(["exports"],Fa):(k=k||self,Fa(k.THREE={}))})(this,function(k){function Fa(){}function t(a,b){this.x=a||0;this.y=b||0}function va(){this.elements=[1,0,0,0,1,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}function Y(a,b,c,d,e,f,g,h,l,m){Object.defineProperty(this,"id",{value:fj++});this.uuid=M.generateUUID();
this.name="";this.image=void 0!==a?a:Y.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:Y.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:1001;this.wrapT=void 0!==d?d:1001;this.magFilter=void 0!==e?e:1006;this.minFilter=void 0!==f?f:1008;this.anisotropy=void 0!==l?l:1;this.format=void 0!==g?g:1023;this.internalFormat=null;this.type=void 0!==h?h:1009;this.offset=new t(0,0);this.repeat=new t(1,1);this.center=new t(0,0);this.rotation=0;this.matrixAutoUpdate=!0;this.matrix=new va;this.generateMipmaps=
!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==m?m:3E3;this.version=0;this.onUpdate=null}function fa(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1}function Ia(a,b,c){this.width=a;this.height=b;this.scissor=new fa(0,0,a,b);this.scissorTest=!1;this.viewport=new fa(0,0,a,b);c=c||{};this.texture=new Y(void 0,c.mapping,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.texture.image={};this.texture.image.width=
a;this.texture.image.height=b;this.texture.generateMipmaps=void 0!==c.generateMipmaps?c.generateMipmaps:!1;this.texture.minFilter=void 0!==c.minFilter?c.minFilter:1006;this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=void 0!==c.depthTexture?c.depthTexture:null}function Yf(a,b,c){Ia.call(this,a,b,c);this.samples=4}function na(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1}function p(a,b,
c){this.x=a||0;this.y=b||0;this.z=c||0}function O(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}function Vb(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||Vb.DefaultOrder}function De(){this.mask=1}function y(){Object.defineProperty(this,"id",{value:gj++});this.uuid=M.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=y.DefaultUp.clone();
var a=new p,b=new Vb,c=new na,d=new p(1,1,1);b._onChange(function(){c.setFromEuler(b,!1)});c._onChange(function(){b.setFromQuaternion(c,void 0,!1)});Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new O},normalMatrix:{value:new va}});this.matrix=new O;this.matrixWorld=new O;this.matrixAutoUpdate=y.DefaultMatrixAutoUpdate;
this.matrixWorldNeedsUpdate=!1;this.layers=new De;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={}}function qb(){y.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.environment=this.background=null;this.autoUpdate=!0;"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Va(a,b){this.min=void 0!==a?a:new p(Infinity,Infinity,Infinity);this.max=void 0!==
b?b:new p(-Infinity,-Infinity,-Infinity)}function Zf(a,b,c,d,e){var f;var g=0;for(f=a.length-3;g<=f;g+=3){Wb.fromArray(a,g);var h=e.x*Math.abs(Wb.x)+e.y*Math.abs(Wb.y)+e.z*Math.abs(Wb.z),l=b.dot(Wb),m=c.dot(Wb),x=d.dot(Wb);if(Math.max(-Math.max(l,m,x),Math.min(l,m,x))>h)return!1}return!0}function eb(a,b){this.center=void 0!==a?a:new p;this.radius=void 0!==b?b:-1}function Xb(a,b){this.origin=void 0!==a?a:new p;this.direction=void 0!==b?b:new p(0,0,-1)}function Wa(a,b){this.normal=void 0!==a?a:new p(1,
0,0);this.constant=void 0!==b?b:0}function pa(a,b,c){this.a=void 0!==a?a:new p;this.b=void 0!==b?b:new p;this.c=void 0!==c?c:new p}function D(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c)}function $f(a,b,c){0>c&&(c+=1);1<c&&--c;return c<1/6?a+6*(b-a)*c:.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a}function ag(a){return.04045>a?.0773993808*a:Math.pow(.9478672986*a+.0521327014,2.4)}function bg(a){return.0031308>a?12.92*a:1.055*Math.pow(a,.41666)-.055}function Ac(a,b,c,d,e,f){this.a=a;this.b=
b;this.c=c;this.normal=d&&d.isVector3?d:new p;this.vertexNormals=Array.isArray(d)?d:[];this.color=e&&e.isColor?e:new D;this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0}function L(){Object.defineProperty(this,"id",{value:hj++});this.uuid=M.generateUUID();this.name="";this.type="Material";this.fog=!0;this.blending=1;this.side=0;this.vertexColors=this.flatShading=!1;this.opacity=1;this.transparent=!1;this.blendSrc=204;this.blendDst=205;this.blendEquation=100;this.blendEquationAlpha=
this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=3;this.depthWrite=this.depthTest=!0;this.stencilWriteMask=255;this.stencilFunc=519;this.stencilRef=0;this.stencilFuncMask=255;this.stencilZPass=this.stencilZFail=this.stencilFail=7680;this.stencilWrite=!1;this.clippingPlanes=null;this.clipShadows=this.clipIntersection=!1;this.shadowSide=null;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.dithering=!1;this.alphaTest=0;this.premultipliedAlpha=
!1;this.toneMapped=this.visible=!0;this.userData={};this.version=0}function Pa(a){L.call(this);this.type="MeshBasicMaterial";this.color=new D(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphTargets=this.skinning=!1;this.setValues(a)}
function F(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="";this.array=a;this.itemSize=b;this.count=void 0!==a?a.length/b:0;this.normalized=!0===c;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0}function yd(a,b,c){F.call(this,new Int8Array(a),b,c)}function zd(a,b,c){F.call(this,new Uint8Array(a),b,c)}function Ad(a,b,c){F.call(this,new Uint8ClampedArray(a),b,c)}function Bd(a,b,c){F.call(this,new Int16Array(a),
b,c)}function Yb(a,b,c){F.call(this,new Uint16Array(a),b,c)}function Cd(a,b,c){F.call(this,new Int32Array(a),b,c)}function Zb(a,b,c){F.call(this,new Uint32Array(a),b,c)}function B(a,b,c){F.call(this,new Float32Array(a),b,c)}function Dd(a,b,c){F.call(this,new Float64Array(a),b,c)}function sh(){this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=
this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1}function th(a){if(0===a.length)return-Infinity;for(var b=a[0],c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}function E(){Object.defineProperty(this,"id",{value:ij+=2});this.uuid=M.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.morphTargetsRelative=!1;this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity};
this.userData={}}function ha(a,b){y.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new E;this.material=void 0!==b?b:new Pa;this.updateMorphTargets()}function uh(a,b,c,d,e,f,g,h){if(null===(1===b.side?d.intersectTriangle(g,f,e,!0,h):d.intersectTriangle(e,f,g,2!==b.side,h)))return null;Ee.copy(h);Ee.applyMatrix4(a.matrixWorld);b=c.ray.origin.distanceTo(Ee);return b<c.near||b>c.far?null:{distance:b,point:Ee.clone(),object:a}}function Fe(a,b,c,d,e,f,g,h,l,m,x,n){Eb.fromBufferAttribute(e,m);Fb.fromBufferAttribute(e,
x);Gb.fromBufferAttribute(e,n);e=a.morphTargetInfluences;if(b.morphTargets&&f&&e){Ge.set(0,0,0);He.set(0,0,0);Ie.set(0,0,0);for(var v=0,r=f.length;v<r;v++){var k=e[v],u=f[v];0!==k&&(cg.fromBufferAttribute(u,m),dg.fromBufferAttribute(u,x),eg.fromBufferAttribute(u,n),g?(Ge.addScaledVector(cg,k),He.addScaledVector(dg,k),Ie.addScaledVector(eg,k)):(Ge.addScaledVector(cg.sub(Eb),k),He.addScaledVector(dg.sub(Fb),k),Ie.addScaledVector(eg.sub(Gb),k)))}Eb.add(Ge);Fb.add(He);Gb.add(Ie)}a.isSkinnedMesh&&(a.boneTransform(m,
Eb),a.boneTransform(x,Fb),a.boneTransform(n,Gb));if(a=uh(a,b,c,d,Eb,Fb,Gb,Ed))h&&(Bc.fromBufferAttribute(h,m),Cc.fromBufferAttribute(h,x),Dc.fromBufferAttribute(h,n),a.uv=pa.getUV(Ed,Eb,Fb,Gb,Bc,Cc,Dc,new t)),l&&(Bc.fromBufferAttribute(l,m),Cc.fromBufferAttribute(l,x),Dc.fromBufferAttribute(l,n),a.uv2=pa.getUV(Ed,Eb,Fb,Gb,Bc,Cc,Dc,new t)),h=new Ac(m,x,n),pa.getNormal(Eb,Fb,Gb,h.normal),a.face=h;return a}function J(){Object.defineProperty(this,"id",{value:jj+=2});this.uuid=M.generateUUID();this.name=
"";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1}function Ec(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e&&(e.isColor||e.isMatrix3||
e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}function qa(a){for(var b={},c=0;c<a.length;c++){var d=Ec(a[c]),e;for(e in d)b[e]=d[e]}return b}function Ca(a){L.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;this.uniformsNeedUpdate=!1;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}
function fb(){y.call(this);this.type="Camera";this.matrixWorldInverse=new O;this.projectionMatrix=new O;this.projectionMatrixInverse=new O}function S(a,b,c,d){fb.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix()}function Fc(a,b,c){y.call(this);this.type="CubeCamera";if(!0!==c.isWebGLCubeRenderTarget)console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
else{this.renderTarget=c;var d=new S(90,1,a,b);d.layers=this.layers;d.up.set(0,-1,0);d.lookAt(new p(1,0,0));this.add(d);var e=new S(90,1,a,b);e.layers=this.layers;e.up.set(0,-1,0);e.lookAt(new p(-1,0,0));this.add(e);var f=new S(90,1,a,b);f.layers=this.layers;f.up.set(0,0,1);f.lookAt(new p(0,1,0));this.add(f);var g=new S(90,1,a,b);g.layers=this.layers;g.up.set(0,0,-1);g.lookAt(new p(0,-1,0));this.add(g);var h=new S(90,1,a,b);h.layers=this.layers;h.up.set(0,-1,0);h.lookAt(new p(0,0,1));this.add(h);
var l=new S(90,1,a,b);l.layers=this.layers;l.up.set(0,-1,0);l.lookAt(new p(0,0,-1));this.add(l);this.update=function(a,b){null===this.parent&&this.updateMatrixWorld();var m=a.getRenderTarget(),x=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;a.setRenderTarget(c,0);a.render(b,d);a.setRenderTarget(c,1);a.render(b,e);a.setRenderTarget(c,2);a.render(b,f);a.setRenderTarget(c,3);a.render(b,g);a.setRenderTarget(c,4);a.render(b,h);c.texture.generateMipmaps=x;a.setRenderTarget(c,5);a.render(b,l);a.setRenderTarget(m)};
this.clear=function(a,b,d,e){for(var f=a.getRenderTarget(),g=0;6>g;g++)a.setRenderTarget(c,g),a.clear(b,d,e);a.setRenderTarget(f)}}}function $b(a,b,c){Number.isInteger(b)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),b=c);Ia.call(this,a,a,b)}function ac(a,b,c,d,e,f,g,h,l,m,x,n){Y.call(this,null,f,g,h,l,m,d,e,x,n);this.image={data:a||null,width:b||1,height:c||1};this.magFilter=void 0!==l?l:1003;this.minFilter=void 0!==m?m:1003;this.flipY=
this.generateMipmaps=!1;this.unpackAlignment=1;this.needsUpdate=!0}function Gc(a,b,c,d,e,f){this.planes=[void 0!==a?a:new Wa,void 0!==b?b:new Wa,void 0!==c?c:new Wa,void 0!==d?d:new Wa,void 0!==e?e:new Wa,void 0!==f?f:new Wa]}function vh(){function a(e,f){!1!==c&&(d(e,f),b.requestAnimationFrame(a))}var b=null,c=!1,d=null;return{start:function(){!0!==c&&null!==d&&(b.requestAnimationFrame(a),c=!0)},stop:function(){c=!1},setAnimationLoop:function(a){d=a},setContext:function(a){b=a}}}function kj(a,b){function c(b,
c){var d=b.array,e=b.usage,f=a.createBuffer();a.bindBuffer(c,f);a.bufferData(c,d,e);b.onUploadCallback();c=5126;d instanceof Float32Array?c=5126:d instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):d instanceof Uint16Array?c=5123:d instanceof Int16Array?c=5122:d instanceof Uint32Array?c=5125:d instanceof Int32Array?c=5124:d instanceof Int8Array?c=5120:d instanceof Uint8Array&&(c=5121);return{buffer:f,type:c,bytesPerElement:d.BYTES_PER_ELEMENT,
version:b.version}}var d=b.isWebGL2,e=new WeakMap;return{get:function(a){a.isInterleavedBufferAttribute&&(a=a.data);return e.get(a)},remove:function(b){b.isInterleavedBufferAttribute&&(b=b.data);var c=e.get(b);c&&(a.deleteBuffer(c.buffer),e.delete(b))},update:function(b,g){b.isInterleavedBufferAttribute&&(b=b.data);var f=e.get(b);if(void 0===f)e.set(b,c(b,g));else if(f.version<b.version){var l=b.array,m=b.updateRange;a.bindBuffer(g,f.buffer);-1===m.count?a.bufferSubData(g,0,l):(d?a.bufferSubData(g,
m.offset*l.BYTES_PER_ELEMENT,l,m.offset,m.count):a.bufferSubData(g,m.offset*l.BYTES_PER_ELEMENT,l.subarray(m.offset,m.offset+m.count)),m.count=-1);f.version=b.version}}}}function Fd(a,b,c,d){J.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new bc(a,b,c,d));this.mergeVertices()}function bc(a,b,c,d){E.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};a=a||1;
b=b||1;var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,l=a/c,m=b/d,x=[],n=[],v=[],r=[];for(a=0;a<h;a++){var k=a*m-f;for(b=0;b<g;b++)n.push(b*l-e,-k,0),v.push(0,0,1),r.push(b/c),r.push(1-a/d)}for(a=0;a<d;a++)for(b=0;b<c;b++)e=b+g*(a+1),f=b+1+g*(a+1),h=b+1+g*a,x.push(b+g*a,e,h),x.push(e,f,h);this.setIndex(x);this.setAttribute("position",new B(n,3));this.setAttribute("normal",new B(v,3));this.setAttribute("uv",new B(r,2))}function lj(a,b,c,d){function e(a,c){b.buffers.color.setClear(a.r,
a.g,a.b,c,d)}var f=new D(0),g=0,h,l,m=null,x=0,n=null;return{getClearColor:function(){return f},setClearColor:function(a,b){f.set(a);g=void 0!==b?b:1;e(f,g)},getClearAlpha:function(){return g},setClearAlpha:function(a){g=a;e(f,g)},render:function(b,d,k,u){d=d.background;k=a.xr;(k=k.getSession&&k.getSession())&&"additive"===k.environmentBlendMode&&(d=null);null===d?e(f,g):d&&d.isColor&&(e(d,1),u=!0);(a.autoClear||u)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(d&&(d.isCubeTexture||
d.isWebGLCubeRenderTarget||306===d.mapping)){void 0===l&&(l=new ha(new Gd(1,1,1),new Ca({type:"BackgroundCubeMaterial",uniforms:Ec(gb.cube.uniforms),vertexShader:gb.cube.vertexShader,fragmentShader:gb.cube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(a,b,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),
c.update(l));u=d.isWebGLCubeRenderTarget?d.texture:d;l.material.uniforms.envMap.value=u;l.material.uniforms.flipEnvMap.value=u.isCubeTexture?-1:1;if(m!==d||x!==u.version||n!==a.toneMapping)l.material.needsUpdate=!0,m=d,x=u.version,n=a.toneMapping;b.unshift(l,l.geometry,l.material,0,0,null)}else if(d&&d.isTexture){void 0===h&&(h=new ha(new bc(2,2),new Ca({type:"BackgroundMaterial",uniforms:Ec(gb.background.uniforms),vertexShader:gb.background.vertexShader,fragmentShader:gb.background.fragmentShader,
side:0,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(h));h.material.uniforms.t2D.value=d;!0===d.matrixAutoUpdate&&d.updateMatrix();h.material.uniforms.uvTransform.value.copy(d.matrix);if(m!==d||x!==d.version||n!==a.toneMapping)h.material.needsUpdate=!0,m=d,x=d.version,n=a.toneMapping;b.unshift(h,h.geometry,h.material,0,0,null)}}}}function mj(a,b,c,d){var e=d.isWebGL2,f;this.setMode=
function(a){f=a};this.render=function(b,d){a.drawArrays(f,b,d);c.update(d,f)};this.renderInstances=function(d,h,l,m){if(0!==m){if(e){d=a;var g="drawArraysInstanced"}else if(d=b.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",null===d){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](f,h,l,m);c.update(l,f,m)}}}function nj(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(35633,
36338).precision&&0<a.getShaderPrecisionFormat(35632,36338).precision)return"highp";b="mediump"}return"mediump"===b&&0<a.getShaderPrecisionFormat(35633,36337).precision&&0<a.getShaderPrecisionFormat(35632,36337).precision?"mediump":"lowp"}var e,f="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext||"undefined"!==typeof WebGL2ComputeRenderingContext&&a instanceof WebGL2ComputeRenderingContext,g=void 0!==c.precision?c.precision:"highp",h=d(g);h!==g&&(console.warn("THREE.WebGLRenderer:",
g,"not supported, using",h,"instead."),g=h);c=!0===c.logarithmicDepthBuffer;h=a.getParameter(34930);var l=a.getParameter(35660),m=a.getParameter(3379),x=a.getParameter(34076),n=a.getParameter(34921),k=a.getParameter(36347),r=a.getParameter(36348),q=a.getParameter(36349),u=0<l,p=f||!!b.get("OES_texture_float"),z=u&&p,w=f?a.getParameter(36183):0;return{isWebGL2:f,getMaxAnisotropy:function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):
0},getMaxPrecision:d,precision:g,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:l,maxTextureSize:m,maxCubemapSize:x,maxAttributes:n,maxVertexUniforms:k,maxVaryings:r,maxFragmentUniforms:q,vertexTextures:u,floatFragmentTextures:p,floatVertexTextures:z,maxSamples:w}}function oj(){function a(){m.value!==d&&(m.value=d,m.needsUpdate=0<e);c.numPlanes=e;c.numIntersection=0}function b(a,b,d,e){var f=null!==a?a.length:0,g=null;if(0!==f){g=m.value;if(!0!==e||null===g){e=d+4*f;b=b.matrixWorldInverse;
l.getNormalMatrix(b);if(null===g||g.length<e)g=new Float32Array(e);for(e=0;e!==f;++e,d+=4)h.copy(a[e]).applyMatrix4(b,l),h.normal.toArray(g,d),g[d+3]=h.constant}m.value=g;m.needsUpdate=!0}c.numPlanes=f;c.numIntersection=0;return g}var c=this,d=null,e=0,f=!1,g=!1,h=new Wa,l=new va,m={value:null,needsUpdate:!1};this.uniform=m;this.numIntersection=this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h};this.beginShadows=function(){g=!0;b(null)};
this.endShadows=function(){g=!1;a()};this.setState=function(c,h,l,k,q,u){if(!f||null===c||0===c.length||g&&!l)g?b(null):a();else{l=g?0:e;var n=4*l,x=q.clippingState||null;m.value=x;x=b(c,k,n,u);for(c=0;c!==n;++c)x[c]=d[c];q.clippingState=x;this.numIntersection=h?this.numPlanes:0;this.numPlanes+=l}}}function pj(a){var b={};return{get:function(c){if(void 0!==b[c])return b[c];switch(c){case "WEBGL_depth_texture":var d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||
a.getExtension("WEBKIT_WEBGL_depth_texture");break;case "EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case "WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case "WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||
a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d}}}function qj(a,b,c){function d(a){var e=a.target;a=f.get(e);null!==a.index&&b.remove(a.index);for(var h in a.attributes)b.remove(a.attributes[h]);e.removeEventListener("dispose",d);f.delete(e);if(h=g.get(a))b.remove(h),g.delete(a);c.memory.geometries--}function e(a){var c=[],d=a.index,e=a.attributes.position;if(null!==
d){var f=d.array;d=d.version;e=0;for(var h=f.length;e<h;e+=3){var k=f[e+0],q=f[e+1],u=f[e+2];c.push(k,q,q,u,u,k)}}else for(f=e.array,d=e.version,e=0,h=f.length/3-1;e<h;e+=3)k=e+0,q=e+1,u=e+2,c.push(k,q,q,u,u,k);c=new (65535<th(c)?Zb:Yb)(c,1);c.version=d;b.update(c,34963);(f=g.get(a))&&b.remove(f);g.set(a,c)}var f=new WeakMap,g=new WeakMap;return{get:function(a,b){var e=f.get(b);if(e)return e;b.addEventListener("dispose",d);b.isBufferGeometry?e=b:b.isGeometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=
(new E).setFromObject(a)),e=b._bufferGeometry);f.set(b,e);c.memory.geometries++;return e},update:function(a){var c=a.index,d=a.attributes;null!==c&&b.update(c,34963);for(var e in d)b.update(d[e],34962);a=a.morphAttributes;for(e in a){c=a[e];d=0;for(var f=c.length;d<f;d++)b.update(c[d],34962)}},getWireframeAttribute:function(a){var b=g.get(a);if(b){var c=a.index;null!==c&&b.version<c.version&&e(a)}else e(a);return g.get(a)}}}function rj(a,b,c,d){var e=d.isWebGL2,f,g,h;this.setMode=function(a){f=a};
this.setIndex=function(a){g=a.type;h=a.bytesPerElement};this.render=function(b,d){a.drawElements(f,d,g,b*h);c.update(d,f)};this.renderInstances=function(d,m,x,n){if(0!==n){if(e){d=a;var l="drawElementsInstanced"}else if(d=b.get("ANGLE_instanced_arrays"),l="drawElementsInstancedANGLE",null===d){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[l](f,x,g,m*h,n);c.update(x,f,n)}}}function sj(a){var b=
{frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:b,programs:null,autoReset:!0,reset:function(){b.frame++;b.calls=0;b.triangles=0;b.points=0;b.lines=0},update:function(a,d,e){e=e||1;b.calls++;switch(d){case 4:b.triangles+=a/3*e;break;case 1:b.lines+=a/2*e;break;case 3:b.lines+=e*(a-1);break;case 2:b.lines+=e*a;break;case 0:b.points+=e*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d)}}}}function tj(a,b){return Math.abs(b[1])-Math.abs(a[1])}
function uj(a){var b={},c=new Float32Array(8);return{update:function(d,e,f,g){var h=d.morphTargetInfluences,l=void 0===h?0:h.length;d=b[e.id];if(void 0===d){d=[];for(var m=0;m<l;m++)d[m]=[m,0];b[e.id]=d}var x=f.morphTargets&&e.morphAttributes.position;f=f.morphNormals&&e.morphAttributes.normal;for(m=0;m<l;m++){var n=d[m];0!==n[1]&&(x&&e.deleteAttribute("morphTarget"+m),f&&e.deleteAttribute("morphNormal"+m))}for(m=0;m<l;m++)n=d[m],n[0]=m,n[1]=h[m];d.sort(tj);for(m=h=0;8>m;m++){if(n=d[m])if(l=n[0],
n=n[1]){x&&e.setAttribute("morphTarget"+m,x[l]);f&&e.setAttribute("morphNormal"+m,f[l]);c[m]=n;h+=n;continue}c[m]=0}e=e.morphTargetsRelative?1:1-h;g.getUniforms().setValue(a,"morphTargetBaseInfluence",e);g.getUniforms().setValue(a,"morphTargetInfluences",c)}}}function vj(a,b,c,d){var e=new WeakMap;return{update:function(a){var f=d.render.frame,h=a.geometry,l=b.get(a,h);e.get(l)!==f&&(h.isGeometry&&l.updateFromObject(a),b.update(l),e.set(l,f));a.isInstancedMesh&&c.update(a.instanceMatrix,34962);return l},
dispose:function(){e=new WeakMap}}}function rb(a,b,c,d,e,f,g,h,l,m){a=void 0!==a?a:[];Y.call(this,a,void 0!==b?b:301,c,d,e,f,void 0!==g?g:1022,h,l,m);this.flipY=!1}function Hc(a,b,c,d){Y.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0}function Ic(a,b,c,d){Y.call(this,null);this.image={data:a||null,width:b||1,height:c||1,depth:d||1};this.minFilter=this.magFilter=1003;
this.wrapR=1001;this.flipY=this.generateMipmaps=!1;this.needsUpdate=!0}function Jc(a,b,c){var d=a[0];if(0>=d||0<d)return a;var e=b*c,f=wh[e];void 0===f&&(f=new Float32Array(e),wh[e]=f);if(0!==b)for(d.toArray(f,0),d=1,e=0;d!==b;++d)e+=c,a[d].toArray(f,e);return f}function Qa(a,b){if(a.length!==b.length)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function Ja(a,b){for(var c=0,d=b.length;c<d;c++)a[c]=b[c]}function xh(a,b){var c=yh[b];void 0===c&&(c=new Int32Array(b),yh[b]=
c);for(var d=0;d!==b;++d)c[d]=a.allocateTextureUnit();return c}function wj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1f(this.addr,b),c[0]=b)}function xj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y)a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y}else Qa(c,b)||(a.uniform2fv(this.addr,b),Ja(c,b))}function yj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z)a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z}else if(void 0!==b.r){if(c[0]!==b.r||
c[1]!==b.g||c[2]!==b.b)a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b}else Qa(c,b)||(a.uniform3fv(this.addr,b),Ja(c,b))}function zj(a,b){var c=this.cache;if(void 0!==b.x){if(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w}else Qa(c,b)||(a.uniform4fv(this.addr,b),Ja(c,b))}function Aj(a,b){var c=this.cache,d=b.elements;void 0===d?Qa(c,b)||(a.uniformMatrix2fv(this.addr,!1,b),Ja(c,b)):Qa(c,d)||(zh.set(d),a.uniformMatrix2fv(this.addr,
!1,zh),Ja(c,d))}function Bj(a,b){var c=this.cache,d=b.elements;void 0===d?Qa(c,b)||(a.uniformMatrix3fv(this.addr,!1,b),Ja(c,b)):Qa(c,d)||(Ah.set(d),a.uniformMatrix3fv(this.addr,!1,Ah),Ja(c,d))}function Cj(a,b){var c=this.cache,d=b.elements;void 0===d?Qa(c,b)||(a.uniformMatrix4fv(this.addr,!1,b),Ja(c,b)):Qa(c,d)||(Bh.set(d),a.uniformMatrix4fv(this.addr,!1,Bh),Ja(c,d))}function Dj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTexture2D(b||Ch,
e)}function Ej(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture2DArray(b||Fj,e)}function Gj(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.setTexture3D(b||Hj,e)}function Ij(a,b,c){var d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e);c.safeSetTextureCube(b||Dh,e)}function Jj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1i(this.addr,b),c[0]=b)}function Kj(a,b){var c=
this.cache;Qa(c,b)||(a.uniform2iv(this.addr,b),Ja(c,b))}function Lj(a,b){var c=this.cache;Qa(c,b)||(a.uniform3iv(this.addr,b),Ja(c,b))}function Mj(a,b){var c=this.cache;Qa(c,b)||(a.uniform4iv(this.addr,b),Ja(c,b))}function Nj(a,b){var c=this.cache;c[0]!==b&&(a.uniform1ui(this.addr,b),c[0]=b)}function Oj(a){switch(a){case 5126:return wj;case 35664:return xj;case 35665:return yj;case 35666:return zj;case 35674:return Aj;case 35675:return Bj;case 35676:return Cj;case 5124:case 35670:return Jj;case 35667:case 35671:return Kj;
case 35668:case 35672:return Lj;case 35669:case 35673:return Mj;case 5125:return Nj;case 35678:case 36198:case 36298:case 36306:case 35682:return Dj;case 35679:case 36299:case 36307:return Gj;case 35680:case 36300:case 36308:case 36293:return Ij;case 36289:case 36303:case 36311:case 36292:return Ej}}function Pj(a,b){a.uniform1fv(this.addr,b)}function Qj(a,b){a.uniform1iv(this.addr,b)}function Rj(a,b){a.uniform2iv(this.addr,b)}function Sj(a,b){a.uniform3iv(this.addr,b)}function Tj(a,b){a.uniform4iv(this.addr,
b)}function Uj(a,b){b=Jc(b,this.size,2);a.uniform2fv(this.addr,b)}function Vj(a,b){b=Jc(b,this.size,3);a.uniform3fv(this.addr,b)}function Wj(a,b){b=Jc(b,this.size,4);a.uniform4fv(this.addr,b)}function Xj(a,b){b=Jc(b,this.size,4);a.uniformMatrix2fv(this.addr,!1,b)}function Yj(a,b){b=Jc(b,this.size,9);a.uniformMatrix3fv(this.addr,!1,b)}function Zj(a,b){b=Jc(b,this.size,16);a.uniformMatrix4fv(this.addr,!1,b)}function ak(a,b,c){var d=b.length,e=xh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTexture2D(b[a]||
Ch,e[a])}function bk(a,b,c){var d=b.length,e=xh(c,d);a.uniform1iv(this.addr,e);for(a=0;a!==d;++a)c.safeSetTextureCube(b[a]||Dh,e[a])}function ck(a){switch(a){case 5126:return Pj;case 35664:return Uj;case 35665:return Vj;case 35666:return Wj;case 35674:return Xj;case 35675:return Yj;case 35676:return Zj;case 5124:case 35670:return Qj;case 35667:case 35671:return Rj;case 35668:case 35672:return Sj;case 35669:case 35673:return Tj;case 35678:case 36198:case 36298:case 36306:case 35682:return ak;case 35680:case 36300:case 36308:case 36293:return bk}}
function dk(a,b,c){this.id=a;this.addr=c;this.cache=[];this.setValue=Oj(b.type)}function Eh(a,b,c){this.id=a;this.addr=c;this.cache=[];this.size=b.size;this.setValue=ck(b.type)}function Fh(a){this.id=a;this.seq=[];this.map={}}function Hb(a,b){this.seq=[];this.map={};for(var c=a.getProgramParameter(b,35718),d=0;d<c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,l=h.length;for(fg.lastIndex=0;;){var m=fg.exec(h),x=fg.lastIndex,n=m[1],k=m[3];"]"===m[2]&&(n|=0);if(void 0===
k||"["===k&&x+2===l){h=g;e=void 0===k?new dk(n,e,f):new Eh(n,e,f);h.seq.push(e);h.map[e.id]=e;break}else k=g.map[n],void 0===k&&(k=new Fh(n),n=g,g=k,n.seq.push(g),n.map[g.id]=g),g=k}}}function Gh(a,b,c){b=a.createShader(b);a.shaderSource(b,c);a.compileShader(b);return b}function Hh(a){switch(a){case 3E3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];case 3002:return["RGBE","( value )"];case 3004:return["RGBM","( value, 7.0 )"];case 3005:return["RGBM","( value, 16.0 )"];case 3006:return["RGBD",
"( value, 256.0 )"];case 3007:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case 3003:return["LogLuv","( value )"];default:throw Error("unsupported encoding: "+a);}}function Ih(a,b,c){var d=a.getShaderParameter(b,35713),e=a.getShaderInfoLog(b).trim();if(d&&""===e)return"";a=a.getShaderSource(b).split("\n");for(b=0;b<a.length;b++)a[b]=b+1+": "+a[b];a=a.join("\n");return"THREE.WebGLShader: gl.getShaderInfoLog() "+c+"\n"+e+a}function Hd(a,b){b=Hh(b);return"vec4 "+a+"( vec4 value ) { return "+b[0]+
"ToLinear"+b[1]+"; }"}function ek(a,b){b=Hh(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+b[0]+b[1]+"; }"}function fk(a,b){switch(b){case 1:b="Linear";break;case 2:b="Reinhard";break;case 3:b="Uncharted2";break;case 4:b="OptimizedCineon";break;case 5:b="ACESFilmic";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+b+"ToneMapping( color ); }"}function gk(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d)}return b.join("\n")}
function Id(a){return""!==a}function Jh(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,b.numPointLightShadows)}function Kh(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,
b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection)}function gg(a,b){a=N[b];if(void 0===a)throw Error("Can not resolve #include <"+b+">");return a.replace(hg,gg)}function Lh(a,b,c,d){console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead.");return ig(a,b,c,d)}function ig(a,b,c,d){a="";for(b=parseInt(b);b<parseInt(c);b++)a+=d.replace(/\[ i \]/g,"[ "+b+" ]").replace(/UNROLLED_LOOP_INDEX/g,
b);return a}function Mh(a){var b="precision "+a.precision+" float;\nprecision "+a.precision+" int;";"highp"===a.precision?b+="\n#define HIGH_PRECISION":"mediump"===a.precision?b+="\n#define MEDIUM_PRECISION":"lowp"===a.precision&&(b+="\n#define LOW_PRECISION");return b}function hk(a){var b="SHADOWMAP_TYPE_BASIC";1===a.shadowMapType?b="SHADOWMAP_TYPE_PCF":2===a.shadowMapType?b="SHADOWMAP_TYPE_PCF_SOFT":3===a.shadowMapType&&(b="SHADOWMAP_TYPE_VSM");return b}function ik(a){var b="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case 301:case 302:b=
"ENVMAP_TYPE_CUBE";break;case 306:case 307:b="ENVMAP_TYPE_CUBE_UV";break;case 303:case 304:b="ENVMAP_TYPE_EQUIREC";break;case 305:b="ENVMAP_TYPE_SPHERE"}return b}function jk(a){var b="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case 302:case 304:b="ENVMAP_MODE_REFRACTION"}return b}function kk(a){var b="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case 0:b="ENVMAP_BLENDING_MULTIPLY";break;case 1:b="ENVMAP_BLENDING_MIX";break;case 2:b="ENVMAP_BLENDING_ADD"}return b}function lk(a,
b,c){var d=a.getContext(),e=c.defines,f=c.vertexShader,g=c.fragmentShader,h=hk(c),l=ik(c),m=jk(c),x=kk(c),n=0<a.gammaFactor?a.gammaFactor:1,k=c.isWebGL2?"":[c.extensionDerivatives||c.envMapCubeUV||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||"physical"===c.shaderID?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?
"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Id).join("\n"),r=gk(e),q=d.createProgram();c.isRawShaderMaterial?(e=[r].filter(Id).join("\n"),0<e.length&&(e+="\n"),h=[k,r].filter(Id).join("\n"),0<h.length&&(h+="\n")):(e=[Mh(c),"#define SHADER_NAME "+c.shaderName,r,c.instancing?"#define USE_INSTANCING":"",c.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+
n,"#define MAX_BONES "+c.maxBones,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?"#define "+m:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":
"",c.clearcoatMap?"#define USE_CLEARCOATMAP":"",c.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",c.displacementMap&&c.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?"#define USE_COLOR":"",c.vertexUvs?
"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.flatShading?"#define FLAT_SHADED":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals&&!1===c.flatShading?"#define USE_MORPHNORMALS":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+h:"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":
"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&c.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT",
"\tattribute vec4 tangent;","#endif","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;",
"\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(Id).join("\n"),h=[k,Mh(c),"#define SHADER_NAME "+c.shaderName,r,c.alphaTest?"#define ALPHATEST "+c.alphaTest+(c.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+n,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.matcap?"#define USE_MATCAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?
"#define "+l:"",c.envMap?"#define "+m:"",c.envMap?"#define "+x:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",c.clearcoatMap?"#define USE_CLEARCOATMAP":"",c.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":
"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.sheen?"#define USE_SHEEN":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?"#define USE_COLOR":"",c.vertexUvs?"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.gradientMap?"#define USE_GRADIENTMAP":"",c.flatShading?"#define FLAT_SHADED":"",
c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+h:"",c.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",c.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&c.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(c.extensionShaderTextureLOD||c.envMap)&&c.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":
"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",0!==c.toneMapping?"#define TONE_MAPPING":"",0!==c.toneMapping?N.tonemapping_pars_fragment:"",0!==c.toneMapping?fk("toneMapping",c.toneMapping):"",c.dithering?"#define DITHERING":"",c.outputEncoding||c.mapEncoding||c.matcapEncoding||c.envMapEncoding||c.emissiveMapEncoding||c.lightMapEncoding?N.encodings_pars_fragment:"",c.mapEncoding?Hd("mapTexelToLinear",c.mapEncoding):"",c.matcapEncoding?Hd("matcapTexelToLinear",
c.matcapEncoding):"",c.envMapEncoding?Hd("envMapTexelToLinear",c.envMapEncoding):"",c.emissiveMapEncoding?Hd("emissiveMapTexelToLinear",c.emissiveMapEncoding):"",c.lightMapEncoding?Hd("lightMapTexelToLinear",c.lightMapEncoding):"",c.outputEncoding?ek("linearToOutputTexel",c.outputEncoding):"",c.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"","\n"].filter(Id).join("\n"));f=f.replace(hg,gg);f=Jh(f,c);f=Kh(f,c);g=g.replace(hg,gg);g=Jh(g,c);g=Kh(g,c);f=f.replace(Nh,ig).replace(Oh,Lh);g=g.replace(Nh,
ig).replace(Oh,Lh);c.isWebGL2&&!c.isRawShaderMaterial&&(l=!1,m=/^\s*#version\s+300\s+es\s*\n/,c.isShaderMaterial&&null!==f.match(m)&&null!==g.match(m)&&(l=!0,f=f.replace(m,""),g=g.replace(m,"")),e="#version 300 es\n\n#define attribute in\n#define varying out\n#define texture2D texture\n"+e,h=["#version 300 es\n\n#define varying in",l?"":"out highp vec4 pc_fragColor;",l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n#define texture2DLodEXT textureLod\n#define texture2DProjLodEXT textureProjLod\n#define textureCubeLodEXT textureLod\n#define texture2DGradEXT textureGrad\n#define texture2DProjGradEXT textureProjGrad\n#define textureCubeGradEXT textureGrad"].join("\n")+
"\n"+h);g=h+g;f=Gh(d,35633,e+f);g=Gh(d,35632,g);d.attachShader(q,f);d.attachShader(q,g);void 0!==c.index0AttributeName?d.bindAttribLocation(q,0,c.index0AttributeName):!0===c.morphTargets&&d.bindAttribLocation(q,0,"position");d.linkProgram(q);if(a.debug.checkShaderErrors){a=d.getProgramInfoLog(q).trim();l=d.getShaderInfoLog(f).trim();m=d.getShaderInfoLog(g).trim();n=x=!0;if(!1===d.getProgramParameter(q,35714))x=!1,k=Ih(d,f,"vertex"),r=Ih(d,g,"fragment"),console.error("THREE.WebGLProgram: shader error: ",
d.getError(),"35715",d.getProgramParameter(q,35715),"gl.getProgramInfoLog",a,k,r);else if(""!==a)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",a);else if(""===l||""===m)n=!1;n&&(this.diagnostics={runnable:x,programLog:a,vertexShader:{log:l,prefix:e},fragmentShader:{log:m,prefix:h}})}d.deleteShader(f);d.deleteShader(g);var u;this.getUniforms=function(){void 0===u&&(u=new Hb(d,q));return u};var p;this.getAttributes=function(){if(void 0===p){for(var a={},b=d.getProgramParameter(q,35721),
c=0;c<b;c++){var e=d.getActiveAttrib(q,c).name;a[e]=d.getAttribLocation(q,e)}p=a}return p};this.destroy=function(){d.deleteProgram(q);this.program=void 0};this.name=c.shaderName;this.id=mk++;this.cacheKey=b;this.usedTimes=1;this.program=q;this.vertexShader=f;this.fragmentShader=g;return this}function nk(a,b,c){function d(a){if(a)a.isTexture?b=a.encoding:a.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),
b=a.texture.encoding);else var b=3E3;return b}var e=[],f=c.isWebGL2,g=c.logarithmicDepthBuffer,h=c.floatVertexTextures,l=c.precision,m=c.maxVertexUniforms,x=c.vertexTextures,n={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",
PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},k="precision isWebGL2 supportsVertexTextures outputEncoding instancing map mapEncoding matcap matcapEncoding envMap envMapMode envMapEncoding envMapCubeUV lightMap lightMapEncoding aoMap emissiveMap emissiveMapEncoding bumpMap normalMap objectSpaceNormalMap tangentSpaceNormalMap clearcoatMap clearcoatRoughnessMap clearcoatNormalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors vertexTangents vertexUvs uvsVertexOnly fog useFog fogExp2 flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights numDirLightShadows numPointLightShadows numSpotLightShadows shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering sheen".split(" ");
this.getParameters=function(e,k,v,p,z,w,oa){var q=p.fog;p=e.isMeshStandardMaterial?p.environment:null;p=e.envMap||p;var r=n[e.type];if(oa.isSkinnedMesh){var u=oa.skeleton.bones;if(h)u=1024;else{var G=Math.min(Math.floor((m-20)/4),u.length);G<u.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+u.length+" bones. This GPU supports "+G+"."),u=0):u=G}}else u=0;null!==e.precision&&(l=c.getMaxPrecision(e.precision),l!==e.precision&&console.warn("THREE.WebGLProgram.getParameters:",e.precision,"not supported, using",
l,"instead."));r?(G=gb[r],G={name:e.type,uniforms:Ph.clone(G.uniforms),vertexShader:G.vertexShader,fragmentShader:G.fragmentShader}):G={name:e.type,uniforms:e.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader};e.onBeforeCompile(G,a);var t=a.getRenderTarget();return{isWebGL2:f,shaderID:r,shaderName:G.name,uniforms:G.uniforms,vertexShader:G.vertexShader,fragmentShader:G.fragmentShader,defines:e.defines,isRawShaderMaterial:e.isRawShaderMaterial,isShaderMaterial:e.isShaderMaterial,
precision:l,instancing:!0===oa.isInstancedMesh,supportsVertexTextures:x,outputEncoding:null!==t?d(t.texture):a.outputEncoding,map:!!e.map,mapEncoding:d(e.map),matcap:!!e.matcap,matcapEncoding:d(e.matcap),envMap:!!p,envMapMode:p&&p.mapping,envMapEncoding:d(p),envMapCubeUV:!!p&&(306===p.mapping||307===p.mapping),lightMap:!!e.lightMap,lightMapEncoding:d(e.lightMap),aoMap:!!e.aoMap,emissiveMap:!!e.emissiveMap,emissiveMapEncoding:d(e.emissiveMap),bumpMap:!!e.bumpMap,normalMap:!!e.normalMap,objectSpaceNormalMap:1===
e.normalMapType,tangentSpaceNormalMap:0===e.normalMapType,clearcoatMap:!!e.clearcoatMap,clearcoatRoughnessMap:!!e.clearcoatRoughnessMap,clearcoatNormalMap:!!e.clearcoatNormalMap,displacementMap:!!e.displacementMap,roughnessMap:!!e.roughnessMap,metalnessMap:!!e.metalnessMap,specularMap:!!e.specularMap,alphaMap:!!e.alphaMap,gradientMap:!!e.gradientMap,sheen:!!e.sheen,combine:e.combine,vertexTangents:e.normalMap&&e.vertexTangents,vertexColors:e.vertexColors,vertexUvs:!!e.map||!!e.bumpMap||!!e.normalMap||
!!e.specularMap||!!e.alphaMap||!!e.emissiveMap||!!e.roughnessMap||!!e.metalnessMap||!!e.clearcoatMap||!!e.clearcoatRoughnessMap||!!e.clearcoatNormalMap||!!e.displacementMap,uvsVertexOnly:!(e.map||e.bumpMap||e.normalMap||e.specularMap||e.alphaMap||e.emissiveMap||e.roughnessMap||e.metalnessMap||e.clearcoatNormalMap)&&!!e.displacementMap,fog:!!q,useFog:e.fog,fogExp2:q&&q.isFogExp2,flatShading:e.flatShading,sizeAttenuation:e.sizeAttenuation,logarithmicDepthBuffer:g,skinning:e.skinning&&0<u,maxBones:u,
useVertexTexture:h,morphTargets:e.morphTargets,morphNormals:e.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:k.directional.length,numPointLights:k.point.length,numSpotLights:k.spot.length,numRectAreaLights:k.rectArea.length,numHemiLights:k.hemi.length,numDirLightShadows:k.directionalShadowMap.length,numPointLightShadows:k.pointShadowMap.length,numSpotLightShadows:k.spotShadowMap.length,numClippingPlanes:z,numClipIntersection:w,dithering:e.dithering,shadowMapEnabled:a.shadowMap.enabled&&
0<v.length,shadowMapType:a.shadowMap.type,toneMapping:e.toneMapped?a.toneMapping:0,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:e.premultipliedAlpha,alphaTest:e.alphaTest,doubleSided:2===e.side,flipSided:1===e.side,depthPacking:void 0!==e.depthPacking?e.depthPacking:!1,index0AttributeName:e.index0AttributeName,extensionDerivatives:e.extensions&&e.extensions.derivatives,extensionFragDepth:e.extensions&&e.extensions.fragDepth,extensionDrawBuffers:e.extensions&&e.extensions.drawBuffers,
extensionShaderTextureLOD:e.extensions&&e.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||null!==b.get("EXT_frag_depth"),rendererExtensionDrawBuffers:f||null!==b.get("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||null!==b.get("EXT_shader_texture_lod"),onBeforeCompile:e.onBeforeCompile}};this.getProgramCacheKey=function(b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(b.fragmentShader),c.push(b.vertexShader));if(void 0!==b.defines)for(var d in b.defines)c.push(d),c.push(b.defines[d]);
if(void 0===b.isRawShaderMaterial){for(d=0;d<k.length;d++)c.push(b[k[d]]);c.push(a.outputEncoding);c.push(a.gammaFactor)}c.push(b.onBeforeCompile.toString());return c.join()};this.acquireProgram=function(b,c){for(var d,f=0,g=e.length;f<g;f++){var h=e[f];if(h.cacheKey===c){d=h;++d.usedTimes;break}}void 0===d&&(d=new lk(a,c,b),e.push(d));return d};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=e.indexOf(a);e[b]=e[e.length-1];e.pop();a.destroy()}};this.programs=e}function ok(){var a=new WeakMap;
return{get:function(b){var c=a.get(b);void 0===c&&(c={},a.set(b,c));return c},remove:function(b){a.delete(b)},update:function(b,c,d){a.get(b)[c]=d},dispose:function(){a=new WeakMap}}}function pk(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function qk(a,b){return a.groupOrder!==b.groupOrder?
a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function Qh(){function a(a,d,e,m,x,n){var g=b[c];void 0===g?(g={id:a.id,object:a,geometry:d,material:e,program:e.program||f,groupOrder:m,renderOrder:a.renderOrder,z:x,group:n},b[c]=g):(g.id=a.id,g.object=a,g.geometry=d,g.material=e,g.program=e.program||f,g.groupOrder=m,g.renderOrder=a.renderOrder,g.z=x,g.group=n);c++;return g}var b=[],c=0,d=[],e=[],f={id:-1};return{opaque:d,transparent:e,
init:function(){c=0;d.length=0;e.length=0},push:function(b,c,f,m,x,n){b=a(b,c,f,m,x,n);(!0===f.transparent?e:d).push(b)},unshift:function(b,c,f,m,x,n){b=a(b,c,f,m,x,n);(!0===f.transparent?e:d).unshift(b)},finish:function(){for(var a=c,d=b.length;a<d;a++){var e=b[a];if(null===e.id)break;e.id=null;e.object=null;e.geometry=null;e.material=null;e.program=null;e.group=null}},sort:function(a,b){1<d.length&&d.sort(a||pk);1<e.length&&e.sort(b||qk)}}}function rk(){function a(c){c=c.target;c.removeEventListener("dispose",
a);b.delete(c)}var b=new WeakMap;return{get:function(c,d){var e=b.get(c);if(void 0===e){var f=new Qh;b.set(c,new WeakMap);b.get(c).set(d,f);c.addEventListener("dispose",a)}else f=e.get(d),void 0===f&&(f=new Qh,e.set(d,f));return f},dispose:function(){b=new WeakMap}}}function sk(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case "DirectionalLight":var c={direction:new p,color:new D};break;case "SpotLight":c={position:new p,direction:new p,color:new D,distance:0,
coneCos:0,penumbraCos:0,decay:0};break;case "PointLight":c={position:new p,color:new D,distance:0,decay:0};break;case "HemisphereLight":c={direction:new p,skyColor:new D,groundColor:new D};break;case "RectAreaLight":c={color:new D,position:new p,halfWidth:new p,halfHeight:new p}}return a[b.id]=c}}}function tk(){var a={};return{get:function(b){if(void 0!==a[b.id])return a[b.id];switch(b.type){case "DirectionalLight":var c={shadowBias:0,shadowRadius:1,shadowMapSize:new t};break;case "SpotLight":c={shadowBias:0,
shadowRadius:1,shadowMapSize:new t};break;case "PointLight":c={shadowBias:0,shadowRadius:1,shadowMapSize:new t,shadowCameraNear:1,shadowCameraFar:1E3}}return a[b.id]=c}}}function uk(a,b){return(b.castShadow?1:0)-(a.castShadow?1:0)}function vk(){for(var a=new sk,b=tk(),c={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],
directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]},d=0;9>d;d++)c.probe.push(new p);var e=new p,f=new O,g=new O;return{setup:function(d,l,m){for(var h=0,n=0,k=0,r=0;9>r;r++)c.probe[r].set(0,0,0);var q=l=0,u=0,p=0,z=0,w=0,oa=0,T=0;m=m.matrixWorldInverse;d.sort(uk);r=0;for(var Z=d.length;r<Z;r++){var C=d[r],t=C.color,P=C.intensity,Da=C.distance,Ka=C.shadow&&C.shadow.map?C.shadow.map.texture:
null;if(C.isAmbientLight)h+=t.r*P,n+=t.g*P,k+=t.b*P;else if(C.isLightProbe)for(Ka=0;9>Ka;Ka++)c.probe[Ka].addScaledVector(C.sh.coefficients[Ka],P);else if(C.isDirectionalLight){var U=a.get(C);U.color.copy(C.color).multiplyScalar(C.intensity);U.direction.setFromMatrixPosition(C.matrixWorld);e.setFromMatrixPosition(C.target.matrixWorld);U.direction.sub(e);U.direction.transformDirection(m);C.castShadow&&(P=C.shadow,t=b.get(C),t.shadowBias=P.bias,t.shadowRadius=P.radius,t.shadowMapSize=P.mapSize,c.directionalShadow[l]=
t,c.directionalShadowMap[l]=Ka,c.directionalShadowMatrix[l]=C.shadow.matrix,w++);c.directional[l]=U;l++}else C.isSpotLight?(U=a.get(C),U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(m),U.color.copy(t).multiplyScalar(P),U.distance=Da,U.direction.setFromMatrixPosition(C.matrixWorld),e.setFromMatrixPosition(C.target.matrixWorld),U.direction.sub(e),U.direction.transformDirection(m),U.coneCos=Math.cos(C.angle),U.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),U.decay=C.decay,C.castShadow&&
(P=C.shadow,t=b.get(C),t.shadowBias=P.bias,t.shadowRadius=P.radius,t.shadowMapSize=P.mapSize,c.spotShadow[u]=t,c.spotShadowMap[u]=Ka,c.spotShadowMatrix[u]=C.shadow.matrix,T++),c.spot[u]=U,u++):C.isRectAreaLight?(U=a.get(C),U.color.copy(t).multiplyScalar(P),U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(m),g.identity(),f.copy(C.matrixWorld),f.premultiply(m),g.extractRotation(f),U.halfWidth.set(.5*C.width,0,0),U.halfHeight.set(0,.5*C.height,0),U.halfWidth.applyMatrix4(g),U.halfHeight.applyMatrix4(g),
c.rectArea[p]=U,p++):C.isPointLight?(U=a.get(C),U.position.setFromMatrixPosition(C.matrixWorld),U.position.applyMatrix4(m),U.color.copy(C.color).multiplyScalar(C.intensity),U.distance=C.distance,U.decay=C.decay,C.castShadow&&(P=C.shadow,t=b.get(C),t.shadowBias=P.bias,t.shadowRadius=P.radius,t.shadowMapSize=P.mapSize,t.shadowCameraNear=P.camera.near,t.shadowCameraFar=P.camera.far,c.pointShadow[q]=t,c.pointShadowMap[q]=Ka,c.pointShadowMatrix[q]=C.shadow.matrix,oa++),c.point[q]=U,q++):C.isHemisphereLight&&
(U=a.get(C),U.direction.setFromMatrixPosition(C.matrixWorld),U.direction.transformDirection(m),U.direction.normalize(),U.skyColor.copy(C.color).multiplyScalar(P),U.groundColor.copy(C.groundColor).multiplyScalar(P),c.hemi[z]=U,z++)}c.ambient[0]=h;c.ambient[1]=n;c.ambient[2]=k;d=c.hash;if(d.directionalLength!==l||d.pointLength!==q||d.spotLength!==u||d.rectAreaLength!==p||d.hemiLength!==z||d.numDirectionalShadows!==w||d.numPointShadows!==oa||d.numSpotShadows!==T)c.directional.length=l,c.spot.length=
u,c.rectArea.length=p,c.point.length=q,c.hemi.length=z,c.directionalShadow.length=w,c.directionalShadowMap.length=w,c.pointShadow.length=oa,c.pointShadowMap.length=oa,c.spotShadow.length=T,c.spotShadowMap.length=T,c.directionalShadowMatrix.length=w,c.pointShadowMatrix.length=oa,c.spotShadowMatrix.length=T,d.directionalLength=l,d.pointLength=q,d.spotLength=u,d.rectAreaLength=p,d.hemiLength=z,d.numDirectionalShadows=w,d.numPointShadows=oa,d.numSpotShadows=T,c.version=wk++},state:c}}function Rh(){var a=
new vk,b=[],c=[];return{init:function(){b.length=0;c.length=0},state:{lightsArray:b,shadowsArray:c,lights:a},setupLights:function(d){a.setup(b,c,d)},pushLight:function(a){b.push(a)},pushShadow:function(a){c.push(a)}}}function xk(){function a(c){c=c.target;c.removeEventListener("dispose",a);b.delete(c)}var b=new WeakMap;return{get:function(c,d){if(!1===b.has(c)){var e=new Rh;b.set(c,new WeakMap);b.get(c).set(d,e);c.addEventListener("dispose",a)}else!1===b.get(c).has(d)?(e=new Rh,b.get(c).set(d,e)):
e=b.get(c).get(d);return e},dispose:function(){b=new WeakMap}}}function Ib(a){L.call(this);this.type="MeshDepthMaterial";this.depthPacking=3200;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.fog=!1;this.setValues(a)}function Jb(a){L.call(this);this.type="MeshDistanceMaterial";this.referencePosition=new p;this.nearDistance=1;this.farDistance=1E3;this.morphTargets=this.skinning=
!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.fog=!1;this.setValues(a)}function Sh(a,b,c){function d(a,b,c){c=a<<0|b<<1|c<<2;var d=n[c];void 0===d&&(d=new Ib({depthPacking:3201,morphTargets:a,skinning:b}),n[c]=d);return d}function e(a,b,c){c=a<<0|b<<1|c<<2;var d=k[c];void 0===d&&(d=new Jb({morphTargets:a,skinning:b}),k[c]=d);return d}function f(b,c,f,g,h,l,m){var n=d,x=b.customDepthMaterial;!0===g.isPointLight&&(n=e,x=b.customDistanceMaterial);
void 0===x?(x=!1,!0===f.morphTargets&&(x=c.morphAttributes&&c.morphAttributes.position&&0<c.morphAttributes.position.length),c=!1,!0===b.isSkinnedMesh&&(!0===f.skinning?c=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",b)),b=n(x,c,!0===b.isInstancedMesh)):b=x;a.localClippingEnabled&&!0===f.clipShadows&&0!==f.clippingPlanes.length&&(x=b.uuid,n=f.uuid,c=r[x],void 0===c&&(c={},r[x]=c),x=c[n],void 0===x&&(x=b.clone(),c[n]=x),b=x);b.visible=f.visible;b.wireframe=
f.wireframe;b.side=3===m?null!==f.shadowSide?f.shadowSide:f.side:null!==f.shadowSide?f.shadowSide:q[f.side];b.clipShadows=f.clipShadows;b.clippingPlanes=f.clippingPlanes;b.clipIntersection=f.clipIntersection;b.wireframeLinewidth=f.wireframeLinewidth;b.linewidth=f.linewidth;!0===g.isPointLight&&!0===b.isMeshDistanceMaterial&&(b.referencePosition.setFromMatrixPosition(g.matrixWorld),b.nearDistance=h,b.farDistance=l);return b}function g(c,d,e,l,m){if(!1!==c.visible){if(c.layers.test(d.layers)&&(c.isMesh||
c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&3===m)&&(!c.frustumCulled||h.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,c.matrixWorld);var n=b.update(c),x=c.material;if(Array.isArray(x))for(var k=n.groups,v=0,q=k.length;v<q;v++){var r=k[v],u=x[r.materialIndex];u&&u.visible&&(u=f(c,n,u,l,e.near,e.far,m),a.renderBufferDirect(e,null,n,u,c,r))}else x.visible&&(u=f(c,n,x,l,e.near,e.far,m),a.renderBufferDirect(e,null,n,u,c,null))}c=c.children;n=0;for(x=c.length;n<
x;n++)g(c[n],d,e,l,m)}}var h=new Gc,l=new t,m=new t,x=new fa,n=[],k=[],r={},q={0:1,1:0,2:2},u=new Ca({defines:{SAMPLE_RATE:.25,HALF_SAMPLE_RATE:.125},uniforms:{shadow_pass:{value:null},resolution:{value:new t},radius:{value:4}},vertexShader:"void main() {\n\tgl_Position = vec4( position, 1.0 );\n}",fragmentShader:"uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n  float mean = 0.0;\n  float squared_mean = 0.0;\n\tfloat depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );\n  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {\n    #ifdef HORIZONAL_PASS\n      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );\n      mean += distribution.x;\n      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n    #else\n      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );\n      mean += depth;\n      squared_mean += depth * depth;\n    #endif\n  }\n  mean = mean * HALF_SAMPLE_RATE;\n  squared_mean = squared_mean * HALF_SAMPLE_RATE;\n  float std_dev = sqrt( squared_mean - mean * mean );\n  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}"}),
p=u.clone();p.defines.HORIZONAL_PASS=1;var z=new E;z.setAttribute("position",new F(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));var w=new ha(z,u),oa=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=1;this.render=function(d,e,f){if(!1!==oa.enabled&&(!1!==oa.autoUpdate||!1!==oa.needsUpdate)&&0!==d.length){var n=a.getRenderTarget(),k=a.getActiveCubeFace(),v=a.getActiveMipmapLevel(),q=a.state;q.setBlending(0);q.buffers.color.setClear(1,1,1,1);q.buffers.depth.setTest(!0);q.setScissorTest(!1);
for(var r=0,G=d.length;r<G;r++){var z=d[r],C=z.shadow;if(void 0===C)console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");else{l.copy(C.mapSize);var t=C.getFrameExtents();l.multiply(t);m.copy(C.mapSize);if(l.x>c||l.y>c)l.x>c&&(m.x=Math.floor(c/t.x),l.x=m.x*t.x,C.mapSize.x=m.x),l.y>c&&(m.y=Math.floor(c/t.y),l.y=m.y*t.y,C.mapSize.y=m.y);null!==C.map||C.isPointLightShadow||3!==this.type||(t={minFilter:1006,magFilter:1006,format:1023},C.map=new Ia(l.x,l.y,t),C.map.texture.name=z.name+".shadowMap",
C.mapPass=new Ia(l.x,l.y,t),C.camera.updateProjectionMatrix());null===C.map&&(t={minFilter:1003,magFilter:1003,format:1023},C.map=new Ia(l.x,l.y,t),C.map.texture.name=z.name+".shadowMap",C.camera.updateProjectionMatrix());a.setRenderTarget(C.map);a.clear();t=C.getViewportCount();for(var Z=0;Z<t;Z++){var T=C.getViewport(Z);x.set(m.x*T.x,m.y*T.y,m.x*T.z,m.y*T.w);q.viewport(x);C.updateMatrices(z,Z);h=C.getFrustum();g(e,f,C.camera,z,this.type)}C.isPointLightShadow||3!==this.type||(z=C,C=f,t=b.update(w),
u.uniforms.shadow_pass.value=z.map.texture,u.uniforms.resolution.value=z.mapSize,u.uniforms.radius.value=z.radius,a.setRenderTarget(z.mapPass),a.clear(),a.renderBufferDirect(C,null,t,u,w,null),p.uniforms.shadow_pass.value=z.mapPass.texture,p.uniforms.resolution.value=z.mapSize,p.uniforms.radius.value=z.radius,a.setRenderTarget(z.map),a.clear(),a.renderBufferDirect(C,null,t,p,w,null))}}oa.needsUpdate=!1;a.setRenderTarget(n,k,v)}}}function yk(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();
a.bindTexture(b,f);a.texParameteri(b,10241,9728);a.texParameteri(b,10240,9728);for(b=0;b<d;b++)a.texImage2D(c+b,0,6408,1,1,0,6408,5121,e);return f}function e(c,d){p[c]=1;0===z[c]&&(a.enableVertexAttribArray(c),z[c]=1);w[c]!==d&&((k?a:b.get("ANGLE_instanced_arrays"))[k?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](c,d),w[c]=d)}function f(b){!0!==t[b]&&(a.enable(b),t[b]=!0)}function g(b){!1!==t[b]&&(a.disable(b),t[b]=!1)}function h(b,c,d,e,h,l,m,n){if(0===b)Z&&(g(3042),Z=!1);else if(Z||(f(3042),
Z=!0),5!==b){if(b!==C||n!==y){if(100!==B||100!==Ka)a.blendEquation(32774),Ka=B=100;if(n)switch(b){case 1:a.blendFuncSeparate(1,771,1,771);break;case 2:a.blendFunc(1,1);break;case 3:a.blendFuncSeparate(0,0,769,771);break;case 4:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",b)}else switch(b){case 1:a.blendFuncSeparate(770,771,1,771);break;case 2:a.blendFunc(770,1);break;case 3:a.blendFunc(0,769);break;case 4:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",
b)}A=U=Da=P=null;C=b;y=n}}else{h=h||c;l=l||d;m=m||e;if(c!==B||h!==Ka)a.blendEquationSeparate(wa[c],wa[h]),B=c,Ka=h;if(d!==P||e!==Da||l!==U||m!==A)a.blendFuncSeparate(K[d],K[e],K[l],K[m]),P=d,Da=e,U=l,A=m;C=b;y=null}}function l(b){D!==b&&(b?a.frontFace(2304):a.frontFace(2305),D=b)}function m(b){0!==b?(f(2884),b!==E&&(1===b?a.cullFace(1029):2===b?a.cullFace(1028):a.cullFace(1032))):g(2884);E=b}function x(b,c,d){if(b){if(f(32823),F!==c||L!==d)a.polygonOffset(c,d),F=c,L=d}else g(32823)}function n(b){void 0===
b&&(b=33984+da-1);M!==b&&(a.activeTexture(b),M=b)}var k=c.isWebGL2,r=new function(){var b=!1,c=new fa,d=null,e=new fa(0,0,0,0);return{setMask:function(c){d===c||b||(a.colorMask(c,c,c,c),d=c)},setLocked:function(a){b=a},setClear:function(b,d,f,g,h){!0===h&&(b*=g,d*=g,f*=g);c.set(b,d,f,g);!1===e.equals(c)&&(a.clearColor(b,d,f,g),e.copy(c))},reset:function(){b=!1;d=null;e.set(-1,0,0,0)}}},q=new function(){var b=!1,c=null,d=null,e=null;return{setTest:function(a){a?f(2929):g(2929)},setMask:function(d){c===
d||b||(a.depthMask(d),c=d)},setFunc:function(b){if(d!==b){if(b)switch(b){case 0:a.depthFunc(512);break;case 1:a.depthFunc(519);break;case 2:a.depthFunc(513);break;case 3:a.depthFunc(515);break;case 4:a.depthFunc(514);break;case 5:a.depthFunc(518);break;case 6:a.depthFunc(516);break;case 7:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);d=b}},setLocked:function(a){b=a},setClear:function(b){e!==b&&(a.clearDepth(b),e=b)},reset:function(){b=!1;e=d=c=null}}},u=new function(){var b=
!1,c=null,d=null,e=null,h=null,l=null,m=null,n=null,x=null;return{setTest:function(a){b||(a?f(2960):g(2960))},setMask:function(d){c===d||b||(a.stencilMask(d),c=d)},setFunc:function(b,c,f){if(d!==b||e!==c||h!==f)a.stencilFunc(b,c,f),d=b,e=c,h=f},setOp:function(b,c,d){if(l!==b||m!==c||n!==d)a.stencilOp(b,c,d),l=b,m=c,n=d},setLocked:function(a){b=a},setClear:function(b){x!==b&&(a.clearStencil(b),x=b)},reset:function(){b=!1;x=n=m=l=h=e=d=c=null}}};c=a.getParameter(34921);var p=new Uint8Array(c),z=new Uint8Array(c),
w=new Uint8Array(c),t={},T=null,Z=null,C=null,B=null,P=null,Da=null,Ka=null,U=null,A=null,y=!1,D=null,E=null,I=null,F=null,L=null,da=a.getParameter(35661),J=!1;c=0;c=a.getParameter(7938);-1!==c.indexOf("WebGL")?(c=parseFloat(/^WebGL ([0-9])/.exec(c)[1]),J=1<=c):-1!==c.indexOf("OpenGL ES")&&(c=parseFloat(/^OpenGL ES ([0-9])/.exec(c)[1]),J=2<=c);var M=null,Jd={},aa=new fa,Th=new fa,Ra={};Ra[3553]=d(3553,3553,1);Ra[34067]=d(34067,34069,6);r.setClear(0,0,0,1);q.setClear(1);u.setClear(0);f(2929);q.setFunc(3);
l(!1);m(1);f(2884);h(0);var wa={100:32774,101:32778,102:32779};k?(wa[103]=32775,wa[104]=32776):(c=b.get("EXT_blend_minmax"),null!==c&&(wa[103]=c.MIN_EXT,wa[104]=c.MAX_EXT));var K={200:0,201:1,202:768,204:770,210:776,208:774,206:772,203:769,205:771,209:775,207:773};return{buffers:{color:r,depth:q,stencil:u},initAttributes:function(){for(var a=0,b=p.length;a<b;a++)p[a]=0},enableAttribute:function(a){e(a,0)},enableAttributeAndDivisor:e,disableUnusedAttributes:function(){for(var b=0,c=z.length;b!==c;++b)z[b]!==
p[b]&&(a.disableVertexAttribArray(b),z[b]=0)},vertexAttribPointer:function(b,c,d,e,f,g){!0!==k||5124!==d&&5125!==d?a.vertexAttribPointer(b,c,d,e,f,g):a.vertexAttribIPointer(b,c,d,e,f,g)},enable:f,disable:g,useProgram:function(b){return T!==b?(a.useProgram(b),T=b,!0):!1},setBlending:h,setMaterial:function(a,b){2===a.side?g(2884):f(2884);var c=1===a.side;b&&(c=!c);l(c);1===a.blending&&!1===a.transparent?h(0):h(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,
a.premultipliedAlpha);q.setFunc(a.depthFunc);q.setTest(a.depthTest);q.setMask(a.depthWrite);r.setMask(a.colorWrite);b=a.stencilWrite;u.setTest(b);b&&(u.setMask(a.stencilWriteMask),u.setFunc(a.stencilFunc,a.stencilRef,a.stencilFuncMask),u.setOp(a.stencilFail,a.stencilZFail,a.stencilZPass));x(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits)},setFlipSided:l,setCullFace:m,setLineWidth:function(b){b!==I&&(J&&a.lineWidth(b),I=b)},setPolygonOffset:x,setScissorTest:function(a){a?f(3089):g(3089)},
activeTexture:n,bindTexture:function(b,c){null===M&&n();var d=Jd[M];void 0===d&&(d={type:void 0,texture:void 0},Jd[M]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||Ra[b]),d.type=b,d.texture=c},unbindTexture:function(){var b=Jd[M];void 0!==b&&void 0!==b.type&&(a.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{a.compressedTexImage2D.apply(a,arguments)}catch(ba){console.error("THREE.WebGLState:",ba)}},texImage2D:function(){try{a.texImage2D.apply(a,arguments)}catch(ba){console.error("THREE.WebGLState:",
ba)}},texImage3D:function(){try{a.texImage3D.apply(a,arguments)}catch(ba){console.error("THREE.WebGLState:",ba)}},scissor:function(b){!1===aa.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),aa.copy(b))},viewport:function(b){!1===Th.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),Th.copy(b))},reset:function(){for(var b=0;b<z.length;b++)1===z[b]&&(a.disableVertexAttribArray(b),z[b]=0);t={};M=null;Jd={};E=D=C=T=null;r.reset();q.reset();u.reset()}}}function zk(a,b,c,d,e,f,g){function h(a,b){return F?new OffscreenCanvas(a,
b):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function l(a,b,c,d){var e=1;if(a.width>d||a.height>d)e=d/Math.max(a.width,a.height);if(1>e||!0===b){if("undefined"!==typeof HTMLImageElement&&a instanceof HTMLImageElement||"undefined"!==typeof HTMLCanvasElement&&a instanceof HTMLCanvasElement||"undefined"!==typeof ImageBitmap&&a instanceof ImageBitmap)return d=b?M.floorPowerOfTwo:Math.floor,b=d(e*a.width),e=d(e*a.height),void 0===I&&(I=h(b,e)),c=c?h(b,e):I,c.width=b,c.height=e,
c.getContext("2d").drawImage(a,0,0,b,e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+a.width+"x"+a.height+") to ("+b+"x"+e+")."),c;"data"in a&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+a.width+"x"+a.height+").")}return a}function m(a){return M.isPowerOfTwo(a.width)&&M.isPowerOfTwo(a.height)}function x(a,b){return a.generateMipmaps&&b&&1003!==a.minFilter&&1006!==a.minFilter}function n(b,c,e,f){a.generateMipmap(b);d.get(c).__maxMipLevel=Math.log(Math.max(e,
f))*Math.LOG2E}function k(c,d,e){if(!1===Da)return d;if(null!==c){if(void 0!==a[c])return a[c];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+c+"'")}c=d;6403===d&&(5126===e&&(c=33326),5131===e&&(c=33325),5121===e&&(c=33321));6407===d&&(5126===e&&(c=34837),5131===e&&(c=34843),5121===e&&(c=32849));6408===d&&(5126===e&&(c=34836),5131===e&&(c=34842),5121===e&&(c=32856));33325!==c&&33326!==c&&34842!==c&&34836!==c||b.get("EXT_color_buffer_float");return c}function r(a){return 1003===
a||1004===a||1005===a?9728:9729}function q(b){b=b.target;b.removeEventListener("dispose",q);var c=d.get(b);void 0!==c.__webglInit&&(a.deleteTexture(c.__webglTexture),d.remove(b));b.isVideoTexture&&E.delete(b);g.memory.textures--}function u(b){b=b.target;b.removeEventListener("dispose",u);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b.isWebGLCubeRenderTarget)for(e=0;6>e;e++)a.deleteFramebuffer(c.__webglFramebuffer[e]),
c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer),c.__webglMultisampledFramebuffer&&a.deleteFramebuffer(c.__webglMultisampledFramebuffer),c.__webglColorRenderbuffer&&a.deleteRenderbuffer(c.__webglColorRenderbuffer),c.__webglDepthRenderbuffer&&a.deleteRenderbuffer(c.__webglDepthRenderbuffer);d.remove(b.texture);d.remove(b)}g.memory.textures--}function p(a,b){var e=d.get(a);
if(a.isVideoTexture){var f=g.render.frame;E.get(a)!==f&&(E.set(a,f),a.update())}if(0<a.version&&e.__version!==a.version)if(f=a.image,void 0===f)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(!1===f.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(e,a,b);return}c.activeTexture(33984+b);c.bindTexture(3553,e.__webglTexture)}function z(b,e){if(6===b.image.length){var g=d.get(b);if(0<b.version&&g.__version!==
b.version){T(g,b);c.activeTexture(33984+e);c.bindTexture(34067,g.__webglTexture);a.pixelStorei(37440,b.flipY);var h=b&&(b.isCompressedTexture||b.image[0].isCompressedTexture);e=b.image[0]&&b.image[0].isDataTexture;for(var v=[],q=0;6>q;q++)v[q]=h||e?e?b.image[q].image:b.image[q]:l(b.image[q],!1,!0,U);var r=v[0],u=m(r)||Da,p=f.convert(b.format),G=f.convert(b.type),w=k(b.internalFormat,p,G);t(34067,b,u);if(h){for(q=0;6>q;q++){var z=v[q].mipmaps;for(h=0;h<z.length;h++){var aa=z[h];1023!==b.format&&1022!==
b.format?null!==p?c.compressedTexImage2D(34069+q,h,w,aa.width,aa.height,0,aa.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+q,h,w,aa.width,aa.height,0,p,G,aa.data)}}g.__maxMipLevel=z.length-1}else{z=b.mipmaps;for(q=0;6>q;q++)if(e)for(c.texImage2D(34069+q,0,w,v[q].width,v[q].height,0,p,G,v[q].data),h=0;h<z.length;h++)aa=z[h],aa=aa.image[q].image,c.texImage2D(34069+q,h+1,w,aa.width,aa.height,0,p,G,aa.data);else for(c.texImage2D(34069+
q,0,w,p,G,v[q]),h=0;h<z.length;h++)aa=z[h],c.texImage2D(34069+q,h+1,w,p,G,aa.image[q]);g.__maxMipLevel=z.length}x(b,u)&&n(34067,b,r.width,r.height);g.__version=b.version;if(b.onUpdate)b.onUpdate(b)}else c.activeTexture(33984+e),c.bindTexture(34067,g.__webglTexture)}}function w(a,b){c.activeTexture(33984+b);c.bindTexture(34067,d.get(a).__webglTexture)}function t(c,f,g){g?(a.texParameteri(c,10242,J[f.wrapS]),a.texParameteri(c,10243,J[f.wrapT]),32879!==c&&35866!==c||a.texParameteri(c,32882,J[f.wrapR]),
a.texParameteri(c,10240,da[f.magFilter]),a.texParameteri(c,10241,da[f.minFilter])):(a.texParameteri(c,10242,33071),a.texParameteri(c,10243,33071),32879!==c&&35866!==c||a.texParameteri(c,32882,33071),1001===f.wrapS&&1001===f.wrapT||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(c,10240,r(f.magFilter)),a.texParameteri(c,10241,r(f.minFilter)),1003!==f.minFilter&&1006!==f.minFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));
!(g=b.get("EXT_texture_filter_anisotropic"))||1015===f.type&&null===b.get("OES_texture_float_linear")||1016===f.type&&null===(Da||b.get("OES_texture_half_float_linear"))||!(1<f.anisotropy||d.get(f).__currentAnisotropy)||(a.texParameterf(c,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,e.getMaxAnisotropy())),d.get(f).__currentAnisotropy=f.anisotropy)}function T(b,c){void 0===b.__webglInit&&(b.__webglInit=!0,c.addEventListener("dispose",q),b.__webglTexture=a.createTexture(),g.memory.textures++)}
function Z(b,d,e){var g=3553;d.isDataTexture2DArray&&(g=35866);d.isDataTexture3D&&(g=32879);T(b,d);c.activeTexture(33984+e);c.bindTexture(g,b.__webglTexture);a.pixelStorei(37440,d.flipY);a.pixelStorei(37441,d.premultiplyAlpha);a.pixelStorei(3317,d.unpackAlignment);e=Da?!1:1001!==d.wrapS||1001!==d.wrapT||1003!==d.minFilter&&1006!==d.minFilter;e=e&&!1===m(d.image);e=l(d.image,e,!1,y);var h=m(e)||Da,v=f.convert(d.format),q=f.convert(d.type),r=k(d.internalFormat,v,q);t(g,d,h);var u=d.mipmaps;if(d.isDepthTexture)r=
6402,Da?r=1015===d.type?36012:1014===d.type?33190:1020===d.type?35056:33189:1015===d.type&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),1026===d.format&&6402===r&&1012!==d.type&&1014!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),d.type=1012,q=f.convert(d.type)),1027===d.format&&6402===r&&(r=34041,1020!==d.type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),
d.type=1020,q=f.convert(d.type))),c.texImage2D(3553,0,r,e.width,e.height,0,v,q,null);else if(d.isDataTexture)if(0<u.length&&h){for(var p=0,G=u.length;p<G;p++){var w=u[p];c.texImage2D(3553,p,r,w.width,w.height,0,v,q,w.data)}d.generateMipmaps=!1;b.__maxMipLevel=u.length-1}else c.texImage2D(3553,0,r,e.width,e.height,0,v,q,e.data),b.__maxMipLevel=0;else if(d.isCompressedTexture){p=0;for(G=u.length;p<G;p++)w=u[p],1023!==d.format&&1022!==d.format?null!==v?c.compressedTexImage2D(3553,p,r,w.width,w.height,
0,w.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,p,r,w.width,w.height,0,v,q,w.data);b.__maxMipLevel=u.length-1}else if(d.isDataTexture2DArray)c.texImage3D(35866,0,r,e.width,e.height,e.depth,0,v,q,e.data),b.__maxMipLevel=0;else if(d.isDataTexture3D)c.texImage3D(32879,0,r,e.width,e.height,e.depth,0,v,q,e.data),b.__maxMipLevel=0;else if(0<u.length&&h){p=0;for(G=u.length;p<G;p++)w=u[p],c.texImage2D(3553,p,r,v,q,
w);d.generateMipmaps=!1;b.__maxMipLevel=u.length-1}else c.texImage2D(3553,0,r,v,q,e),b.__maxMipLevel=0;x(d,h)&&n(g,d,e.width,e.height);b.__version=d.version;if(d.onUpdate)d.onUpdate(d)}function C(b,e,g,h){var l=f.convert(e.texture.format),m=f.convert(e.texture.type),n=k(e.texture.internalFormat,l,m);c.texImage2D(h,0,n,e.width,e.height,0,l,m,null);a.bindFramebuffer(36160,b);a.framebufferTexture2D(36160,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(36160,null)}function B(b,c,d){a.bindRenderbuffer(36161,
b);if(c.depthBuffer&&!c.stencilBuffer){var e=33189;d?((d=c.depthTexture)&&d.isDepthTexture&&(1015===d.type?e=36012:1014===d.type&&(e=33190)),d=P(c),a.renderbufferStorageMultisample(36161,d,e,c.width,c.height)):a.renderbufferStorage(36161,e,c.width,c.height);a.framebufferRenderbuffer(36160,36096,36161,b)}else c.depthBuffer&&c.stencilBuffer?(d?(d=P(c),a.renderbufferStorageMultisample(36161,d,35056,c.width,c.height)):a.renderbufferStorage(36161,34041,c.width,c.height),a.framebufferRenderbuffer(36160,
33306,36161,b)):(b=f.convert(c.texture.format),e=f.convert(c.texture.type),e=k(c.texture.internalFormat,b,e),d?(d=P(c),a.renderbufferStorageMultisample(36161,d,e,c.width,c.height)):a.renderbufferStorage(36161,e,c.width,c.height));a.bindRenderbuffer(36161,null)}function P(a){return Da&&a.isWebGLMultisampleRenderTarget?Math.min(D,a.samples):0}var Da=e.isWebGL2,A=e.maxTextures,U=e.maxCubemapSize,y=e.maxTextureSize,D=e.maxSamples,E=new WeakMap,I,F=!1;try{F="undefined"!==typeof OffscreenCanvas&&null!==
(new OffscreenCanvas(1,1)).getContext("2d")}catch(Jd){}var L=0,J={1E3:10497,1001:33071,1002:33648},da={1003:9728,1004:9984,1005:9986,1006:9729,1007:9985,1008:9987},O=!1,N=!1;this.allocateTextureUnit=function(){var a=L;a>=A&&console.warn("THREE.WebGLTextures: Trying to use "+a+" texture units while this GPU supports only "+A);L+=1;return a};this.resetTextureUnits=function(){L=0};this.setTexture2D=p;this.setTexture2DArray=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?Z(e,a,b):(c.activeTexture(33984+
b),c.bindTexture(35866,e.__webglTexture))};this.setTexture3D=function(a,b){var e=d.get(a);0<a.version&&e.__version!==a.version?Z(e,a,b):(c.activeTexture(33984+b),c.bindTexture(32879,e.__webglTexture))};this.setTextureCube=z;this.setTextureCubeDynamic=w;this.setupRenderTarget=function(b){var e=d.get(b),h=d.get(b.texture);b.addEventListener("dispose",u);h.__webglTexture=a.createTexture();g.memory.textures++;var l=!0===b.isWebGLCubeRenderTarget,v=!0===b.isWebGLMultisampleRenderTarget,q=m(b)||Da;!Da||
1022!==b.texture.format||1015!==b.texture.type&&1016!==b.texture.type||(b.texture.format=1023,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."));if(l)for(e.__webglFramebuffer=[],v=0;6>v;v++)e.__webglFramebuffer[v]=a.createFramebuffer();else if(e.__webglFramebuffer=a.createFramebuffer(),v)if(Da){e.__webglMultisampledFramebuffer=a.createFramebuffer();e.__webglColorRenderbuffer=a.createRenderbuffer();a.bindRenderbuffer(36161,e.__webglColorRenderbuffer);
v=f.convert(b.texture.format);var r=f.convert(b.texture.type);v=k(b.texture.internalFormat,v,r);r=P(b);a.renderbufferStorageMultisample(36161,r,v,b.width,b.height);a.bindFramebuffer(36160,e.__webglMultisampledFramebuffer);a.framebufferRenderbuffer(36160,36064,36161,e.__webglColorRenderbuffer);a.bindRenderbuffer(36161,null);b.depthBuffer&&(e.__webglDepthRenderbuffer=a.createRenderbuffer(),B(e.__webglDepthRenderbuffer,b,!0));a.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
if(l){c.bindTexture(34067,h.__webglTexture);t(34067,b.texture,q);for(v=0;6>v;v++)C(e.__webglFramebuffer[v],b,36064,34069+v);x(b.texture,q)&&n(34067,b.texture,b.width,b.height);c.bindTexture(34067,null)}else c.bindTexture(3553,h.__webglTexture),t(3553,b.texture,q),C(e.__webglFramebuffer,b,36064,3553),x(b.texture,q)&&n(3553,b.texture,b.width,b.height),c.bindTexture(3553,null);if(b.depthBuffer){e=d.get(b);h=!0===b.isWebGLCubeRenderTarget;if(b.depthTexture){if(h)throw Error("target.depthTexture not supported in Cube render targets");
if(b&&b.isWebGLCubeRenderTarget)throw Error("Depth Texture with cube render targets is not supported");a.bindFramebuffer(36160,e.__webglFramebuffer);if(!b.depthTexture||!b.depthTexture.isDepthTexture)throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);
p(b.depthTexture,0);e=d.get(b.depthTexture).__webglTexture;if(1026===b.depthTexture.format)a.framebufferTexture2D(36160,36096,3553,e,0);else if(1027===b.depthTexture.format)a.framebufferTexture2D(36160,33306,3553,e,0);else throw Error("Unknown depthTexture format");}else if(h)for(e.__webglDepthbuffer=[],h=0;6>h;h++)a.bindFramebuffer(36160,e.__webglFramebuffer[h]),e.__webglDepthbuffer[h]=a.createRenderbuffer(),B(e.__webglDepthbuffer[h],b,!1);else a.bindFramebuffer(36160,e.__webglFramebuffer),e.__webglDepthbuffer=
a.createRenderbuffer(),B(e.__webglDepthbuffer,b,!1);a.bindFramebuffer(36160,null)}};this.updateRenderTargetMipmap=function(a){var b=a.texture,e=m(a)||Da;if(x(b,e)){e=a.isWebGLCubeRenderTarget?34067:3553;var f=d.get(b).__webglTexture;c.bindTexture(e,f);n(e,b,a.width,a.height);c.bindTexture(e,null)}};this.updateMultisampleRenderTarget=function(b){if(b.isWebGLMultisampleRenderTarget)if(Da){var c=d.get(b);a.bindFramebuffer(36008,c.__webglMultisampledFramebuffer);a.bindFramebuffer(36009,c.__webglFramebuffer);
var e=b.width,f=b.height,g=16384;b.depthBuffer&&(g|=256);b.stencilBuffer&&(g|=1024);a.blitFramebuffer(0,0,e,f,0,0,e,f,g,9728);a.bindFramebuffer(36160,c.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")};this.safeSetTexture2D=function(a,b){a&&a.isWebGLRenderTarget&&(!1===O&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),O=!0),a=a.texture);
p(a,b)};this.safeSetTextureCube=function(a,b){a&&a.isWebGLCubeRenderTarget&&(!1===N&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),N=!0),a=a.texture);a&&a.isCubeTexture||Array.isArray(a.image)&&6===a.image.length?z(a,b):w(a,b)}}function Uh(a,b,c){var d=c.isWebGL2;return{convert:function(a){if(1009===a)return 5121;if(1017===a)return 32819;if(1018===a)return 32820;if(1019===a)return 33635;if(1010===a)return 5120;
if(1011===a)return 5122;if(1012===a)return 5123;if(1013===a)return 5124;if(1014===a)return 5125;if(1015===a)return 5126;if(1016===a){if(d)return 5131;var c=b.get("OES_texture_half_float");return null!==c?c.HALF_FLOAT_OES:null}if(1021===a)return 6406;if(1022===a)return 6407;if(1023===a)return 6408;if(1024===a)return 6409;if(1025===a)return 6410;if(1026===a)return 6402;if(1027===a)return 34041;if(1028===a)return 6403;if(1029===a)return 36244;if(1030===a)return 33319;if(1031===a)return 33320;if(1032===
a)return 36248;if(1033===a)return 36249;if(33776===a||33777===a||33778===a||33779===a)if(c=b.get("WEBGL_compressed_texture_s3tc"),null!==c){if(33776===a)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(33777===a)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(33778===a)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(33779===a)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(35840===a||35841===a||35842===a||35843===a)if(c=b.get("WEBGL_compressed_texture_pvrtc"),null!==c){if(35840===a)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
if(35841===a)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(35842===a)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(35843===a)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(36196===a)return c=b.get("WEBGL_compressed_texture_etc1"),null!==c?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(37492===a||37496===a)if(c=b.get("WEBGL_compressed_texture_etc"),null!==c){if(37492===a)return c.COMPRESSED_RGB8_ETC2;if(37496===a)return c.COMPRESSED_RGBA8_ETC2_EAC}if(37808===a||37809===a||37810===a||37811===a||37812===
a||37813===a||37814===a||37815===a||37816===a||37817===a||37818===a||37819===a||37820===a||37821===a||37840===a||37841===a||37842===a||37843===a||37844===a||37845===a||37846===a||37847===a||37848===a||37849===a||37850===a||37851===a||37852===a||37853===a)return c=b.get("WEBGL_compressed_texture_astc"),null!==c?a:null;if(36492===a)return c=b.get("EXT_texture_compression_bptc"),null!==c?a:null;if(1020===a){if(d)return 34042;c=b.get("WEBGL_depth_texture");return null!==c?c.UNSIGNED_INT_24_8_WEBGL:null}}}}
function Me(a){S.call(this);this.cameras=a||[]}function Kc(){y.call(this);this.type="Group"}function Ne(){this._grip=this._targetRay=null}function Vh(a,b){function c(a){var b=q.get(a.inputSource);b&&b.dispatchEvent({type:a.type})}function d(){q.forEach(function(a,b){a.disconnect(b)});q.clear();a.setFramebuffer(null);a.setRenderTarget(a.getRenderTarget());P.stop();h.isPresenting=!1;h.dispatchEvent({type:"sessionend"})}function e(a){x=a;P.setContext(l);P.start();h.isPresenting=!0;h.dispatchEvent({type:"sessionstart"})}
function f(a){for(var b=l.inputSources,c=0;c<r.length;c++)q.set(b[c],r[c]);for(c=0;c<a.removed.length;c++){b=a.removed[c];var d=q.get(b);d&&(d.dispatchEvent({type:"disconnected",data:b}),q.delete(b))}for(c=0;c<a.added.length;c++)b=a.added[c],(d=q.get(b))&&d.dispatchEvent({type:"connected",data:b})}function g(a,b){null===b?a.matrixWorld.copy(a.matrix):a.matrixWorld.multiplyMatrices(b.matrixWorld,a.matrix);a.matrixWorldInverse.getInverse(a.matrixWorld)}var h=this,l=null,m=1,x=null,n="local-floor",k=
null,r=[],q=new Map,u=new S;u.layers.enable(1);u.viewport=new fa;var G=new S;G.layers.enable(2);G.viewport=new fa;var z=[u,G],w=new Me;w.layers.enable(1);w.layers.enable(2);var t=null,T=null;this.isPresenting=this.enabled=!1;this.getController=function(a){var b=r[a];void 0===b&&(b=new Ne,r[a]=b);return b.getTargetRaySpace()};this.getControllerGrip=function(a){var b=r[a];void 0===b&&(b=new Ne,r[a]=b);return b.getGripSpace()};this.setFramebufferScaleFactor=function(a){m=a;!0===h.isPresenting&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")};
this.setReferenceSpaceType=function(a){n=a;!0===h.isPresenting&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")};this.getReferenceSpace=function(){return x};this.getSession=function(){return l};this.setSession=function(a){l=a;null!==l&&(l.addEventListener("select",c),l.addEventListener("selectstart",c),l.addEventListener("selectend",c),l.addEventListener("squeeze",c),l.addEventListener("squeezestart",c),l.addEventListener("squeezeend",c),l.addEventListener("end",
d),a=b.getContextAttributes(),a=new XRWebGLLayer(l,b,{antialias:a.antialias,alpha:a.alpha,depth:a.depth,stencil:a.stencil,framebufferScaleFactor:m}),l.updateRenderState({baseLayer:a}),l.requestReferenceSpace(n).then(e),l.addEventListener("inputsourceschange",f))};var Z=new p,C=new p;this.getCamera=function(a){w.near=G.near=u.near=a.near;w.far=G.far=u.far=a.far;if(t!==w.near||T!==w.far)l.updateRenderState({depthNear:w.near,depthFar:w.far}),t=w.near,T=w.far;var b=a.parent,c=w.cameras;g(w,b);for(var d=
0;d<c.length;d++)g(c[d],b);a.matrixWorld.copy(w.matrixWorld);a=a.children;d=0;for(b=a.length;d<b;d++)a[d].updateMatrixWorld(!0);if(2===c.length){Z.setFromMatrixPosition(u.matrixWorld);C.setFromMatrixPosition(G.matrixWorld);c=Z.distanceTo(C);var e=u.projectionMatrix.elements,f=G.projectionMatrix.elements,h=e[14]/(e[10]-1);d=e[14]/(e[10]+1);a=(e[9]+1)/e[5];b=(e[9]-1)/e[5];var m=(e[8]-1)/e[0],n=(f[8]+1)/f[0];f=h*m;e=h*n;n=c/(-m+n);m=n*-m;u.matrixWorld.decompose(w.position,w.quaternion,w.scale);w.translateX(m);
w.translateZ(n);w.matrixWorld.compose(w.position,w.quaternion,w.scale);w.matrixWorldInverse.getInverse(w.matrixWorld);h+=n;n=d+n;w.projectionMatrix.makePerspective(f-m,e+(c-m),a*d/n*h,b*d/n*h,h,n)}else w.projectionMatrix.copy(u.projectionMatrix);return w};var B=null,P=new vh;P.setAnimationLoop(function(b,c){k=c.getViewerPose(x);if(null!==k){var d=k.views,e=l.renderState.baseLayer;a.setFramebuffer(e.framebuffer);var f=!1;d.length!==w.cameras.length&&(w.cameras.length=0,f=!0);for(var g=0;g<d.length;g++){var h=
d[g],m=e.getViewport(h),n=z[g];n.matrix.fromArray(h.transform.matrix);n.projectionMatrix.fromArray(h.projectionMatrix);n.viewport.set(m.x,m.y,m.width,m.height);0===g&&w.matrix.copy(n.matrix);!0===f&&w.cameras.push(n)}}d=l.inputSources;for(g=0;g<r.length;g++)r[g].update(d[g],c,x);B&&B(b,c)});this.setAnimationLoop=function(a){B=a};this.dispose=function(){}}function Ak(a){function b(b,c,f){b.opacity.value=c.opacity;c.color&&b.diffuse.value.copy(c.color);c.emissive&&b.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);
c.map&&(b.map.value=c.map);c.alphaMap&&(b.alphaMap.value=c.alphaMap);c.specularMap&&(b.specularMap.value=c.specularMap);if(f=c.envMap||f)b.envMap.value=f,b.flipEnvMap.value=f.isCubeTexture?-1:1,b.reflectivity.value=c.reflectivity,b.refractionRatio.value=c.refractionRatio,b.maxMipLevel.value=a.get(f).__maxMipLevel;c.lightMap&&(b.lightMap.value=c.lightMap,b.lightMapIntensity.value=c.lightMapIntensity);c.aoMap&&(b.aoMap.value=c.aoMap,b.aoMapIntensity.value=c.aoMapIntensity);if(c.map)var d=c.map;else c.specularMap?
d=c.specularMap:c.displacementMap?d=c.displacementMap:c.normalMap?d=c.normalMap:c.bumpMap?d=c.bumpMap:c.roughnessMap?d=c.roughnessMap:c.metalnessMap?d=c.metalnessMap:c.alphaMap?d=c.alphaMap:c.emissiveMap&&(d=c.emissiveMap);void 0!==d&&(d.isWebGLRenderTarget&&(d=d.texture),!0===d.matrixAutoUpdate&&d.updateMatrix(),b.uvTransform.value.copy(d.matrix));if(c.aoMap)var e=c.aoMap;else c.lightMap&&(e=c.lightMap);void 0!==e&&(e.isWebGLRenderTarget&&(e=e.texture),!0===e.matrixAutoUpdate&&e.updateMatrix(),b.uv2Transform.value.copy(e.matrix))}
function c(a,b,c){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale,1===b.side&&(a.bumpScale.value*=-1));b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale),1===b.side&&a.normalScale.value.negate());b.displacementMap&&(a.displacementMap.value=
b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);if(b.envMap||c)a.envMapIntensity.value=b.envMapIntensity}return{refreshFogUniforms:function(a,b){a.fogColor.value.copy(b.color);b.isFog?(a.fogNear.value=b.near,a.fogFar.value=b.far):b.isFogExp2&&(a.fogDensity.value=b.density)},refreshMaterialUniforms:function(a,e,f,g,h){if(e.isMeshBasicMaterial)b(a,e);else if(e.isMeshLambertMaterial)b(a,e),e.emissiveMap&&(a.emissiveMap.value=e.emissiveMap);
else if(e.isMeshToonMaterial)b(a,e),a.specular.value.copy(e.specular),a.shininess.value=Math.max(e.shininess,1E-4),e.gradientMap&&(a.gradientMap.value=e.gradientMap),e.emissiveMap&&(a.emissiveMap.value=e.emissiveMap),e.bumpMap&&(a.bumpMap.value=e.bumpMap,a.bumpScale.value=e.bumpScale,1===e.side&&(a.bumpScale.value*=-1)),e.normalMap&&(a.normalMap.value=e.normalMap,a.normalScale.value.copy(e.normalScale),1===e.side&&a.normalScale.value.negate()),e.displacementMap&&(a.displacementMap.value=e.displacementMap,
a.displacementScale.value=e.displacementScale,a.displacementBias.value=e.displacementBias);else if(e.isMeshPhongMaterial)b(a,e),a.specular.value.copy(e.specular),a.shininess.value=Math.max(e.shininess,1E-4),e.emissiveMap&&(a.emissiveMap.value=e.emissiveMap),e.bumpMap&&(a.bumpMap.value=e.bumpMap,a.bumpScale.value=e.bumpScale,1===e.side&&(a.bumpScale.value*=-1)),e.normalMap&&(a.normalMap.value=e.normalMap,a.normalScale.value.copy(e.normalScale),1===e.side&&a.normalScale.value.negate()),e.displacementMap&&
(a.displacementMap.value=e.displacementMap,a.displacementScale.value=e.displacementScale,a.displacementBias.value=e.displacementBias);else if(e.isMeshStandardMaterial)b(a,e,f),e.isMeshPhysicalMaterial?(c(a,e,f),a.reflectivity.value=e.reflectivity,a.clearcoat.value=e.clearcoat,a.clearcoatRoughness.value=e.clearcoatRoughness,e.sheen&&a.sheen.value.copy(e.sheen),e.clearcoatMap&&(a.clearcoatMap.value=e.clearcoatMap),e.clearcoatRoughnessMap&&(a.clearcoatRoughnessMap.value=e.clearcoatRoughnessMap),e.clearcoatNormalMap&&
(a.clearcoatNormalScale.value.copy(e.clearcoatNormalScale),a.clearcoatNormalMap.value=e.clearcoatNormalMap,1===e.side&&a.clearcoatNormalScale.value.negate()),a.transparency.value=e.transparency):c(a,e,f);else if(e.isMeshMatcapMaterial)b(a,e),e.matcap&&(a.matcap.value=e.matcap),e.bumpMap&&(a.bumpMap.value=e.bumpMap,a.bumpScale.value=e.bumpScale,1===e.side&&(a.bumpScale.value*=-1)),e.normalMap&&(a.normalMap.value=e.normalMap,a.normalScale.value.copy(e.normalScale),1===e.side&&a.normalScale.value.negate()),
e.displacementMap&&(a.displacementMap.value=e.displacementMap,a.displacementScale.value=e.displacementScale,a.displacementBias.value=e.displacementBias);else if(e.isMeshDepthMaterial)b(a,e),e.displacementMap&&(a.displacementMap.value=e.displacementMap,a.displacementScale.value=e.displacementScale,a.displacementBias.value=e.displacementBias);else if(e.isMeshDistanceMaterial)b(a,e),e.displacementMap&&(a.displacementMap.value=e.displacementMap,a.displacementScale.value=e.displacementScale,a.displacementBias.value=
e.displacementBias),a.referencePosition.value.copy(e.referencePosition),a.nearDistance.value=e.nearDistance,a.farDistance.value=e.farDistance;else if(e.isMeshNormalMaterial)b(a,e),e.bumpMap&&(a.bumpMap.value=e.bumpMap,a.bumpScale.value=e.bumpScale,1===e.side&&(a.bumpScale.value*=-1)),e.normalMap&&(a.normalMap.value=e.normalMap,a.normalScale.value.copy(e.normalScale),1===e.side&&a.normalScale.value.negate()),e.displacementMap&&(a.displacementMap.value=e.displacementMap,a.displacementScale.value=e.displacementScale,
a.displacementBias.value=e.displacementBias);else if(e.isLineBasicMaterial)a.diffuse.value.copy(e.color),a.opacity.value=e.opacity,e.isLineDashedMaterial&&(a.dashSize.value=e.dashSize,a.totalSize.value=e.dashSize+e.gapSize,a.scale.value=e.scale);else if(e.isPointsMaterial){a.diffuse.value.copy(e.color);a.opacity.value=e.opacity;a.size.value=e.size*g;a.scale.value=.5*h;e.map&&(a.map.value=e.map);e.alphaMap&&(a.alphaMap.value=e.alphaMap);if(e.map)var d=e.map;else e.alphaMap&&(d=e.alphaMap);void 0!==
d&&(!0===d.matrixAutoUpdate&&d.updateMatrix(),a.uvTransform.value.copy(d.matrix))}else if(e.isSpriteMaterial){a.diffuse.value.copy(e.color);a.opacity.value=e.opacity;a.rotation.value=e.rotation;e.map&&(a.map.value=e.map);e.alphaMap&&(a.alphaMap.value=e.alphaMap);if(e.map)var m=e.map;else e.alphaMap&&(m=e.alphaMap);void 0!==m&&(!0===m.matrixAutoUpdate&&m.updateMatrix(),a.uvTransform.value.copy(m.matrix))}else e.isShadowMaterial?(a.color.value.copy(e.color),a.opacity.value=e.opacity):e.isShaderMaterial&&
(e.uniformsNeedUpdate=!1)}}}function kg(a){var b;function c(){sa=new pj(H);Ga=new nj(H,sa,a);!1===Ga.isWebGL2&&(sa.get("WEBGL_depth_texture"),sa.get("OES_texture_float"),sa.get("OES_texture_half_float"),sa.get("OES_texture_half_float_linear"),sa.get("OES_standard_derivatives"),sa.get("OES_element_index_uint"),sa.get("ANGLE_instanced_arrays"));sa.get("OES_texture_float_linear");ra=new Uh(H,sa,Ga);X=new yk(H,sa,Ga);X.scissor(R.copy(ca).multiplyScalar(wa).floor());X.viewport(Y.copy(ha).multiplyScalar(wa).floor());
ea=new sj(H);Q=new ok;S=new zk(H,sa,X,Q,Ga,ra,ea);ma=new kj(H,Ga);ta=new qj(H,ma,ea);na=new vj(H,ta,ma,ea);za=new uj(H);pa=new nk(y,sa,Ga);ya=new Ak(Q);xa=new rk;va=new xk;qa=new lj(y,X,na,oa);Aa=new mj(H,sa,ea,Ga);Ca=new rj(H,sa,ea,Ga);ea.programs=pa.programs;y.capabilities=Ga;y.extensions=sa;y.properties=Q;y.renderLists=xa;y.state=X;y.info=ea}function d(a){a.preventDefault();console.log("THREE.WebGLRenderer: Context Lost.");E=!0}function e(){console.log("THREE.WebGLRenderer: Context Restored.");
E=!1;c()}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);Q.remove(a)}function g(a){var b=Q.get(a).program;a.program=void 0;void 0!==b&&pa.releaseProgram(b)}function h(a,b){a.render(function(a){y.renderBufferImmediate(a,b)})}function l(a,b,c,d){if(!1!==a.visible){if(a.layers.test(b.layers))if(a.isGroup)c=a.renderOrder;else if(a.isLOD)!0===a.autoUpdate&&a.update(b);else if(a.isLight)P.pushLight(a),a.castShadow&&P.pushShadow(a);else if(a.isSprite){if(!a.frustumCulled||la.intersectsSprite(a)){d&&
Kb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ja);var e=na.update(a),f=a.material;f.visible&&B.push(a,e,f,c,Kb.z,null)}}else if(a.isImmediateRenderObject)d&&Kb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ja),B.push(a,null,a.material,c,Kb.z,null);else if(a.isMesh||a.isLine||a.isPoints)if(a.isSkinnedMesh&&a.skeleton.frame!==ea.render.frame&&(a.skeleton.update(),a.skeleton.frame=ea.render.frame),!a.frustumCulled||la.intersectsObject(a))if(d&&Kb.setFromMatrixPosition(a.matrixWorld).applyMatrix4(ja),
e=na.update(a),f=a.material,Array.isArray(f))for(var g=e.groups,h=0,m=g.length;h<m;h++){var n=g[h],x=f[n.materialIndex];x&&x.visible&&B.push(a,e,x,c,Kb.z,n)}else f.visible&&B.push(a,e,f,c,Kb.z,null);a=a.children;h=0;for(m=a.length;h<m;h++)l(a[h],b,c,d)}}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e],h=g.object,l=g.geometry,m=void 0===d?g.material:d;g=g.group;if(c.isArrayCamera){Le=c;for(var n=c.cameras,k=0,v=n.length;k<v;k++){var q=n[k];h.layers.test(q.layers)&&(X.viewport(Y.copy(q.viewport)),
P.setupLights(q),x(h,b,q,l,m,g))}}else Le=null,x(h,b,c,l,m,g)}}function x(a,c,d,e,f,g){a.onBeforeRender(y,c,d,e,f,g);P=va.get(c,Le||d);a.modelViewMatrix.multiplyMatrices(d.matrixWorldInverse,a.matrixWorld);a.normalMatrix.getNormalMatrix(a.modelViewMatrix);if(a.isImmediateRenderObject){var l=k(d,c,f,a);X.setMaterial(f);V=b=null;Ke=!1;h(a,l)}else y.renderBufferDirect(d,c,e,f,a,g);a.onAfterRender(y,c,d,e,f,g);P=va.get(c,Le||d)}function n(a,b,c){var d=Q.get(a),e=P.state.lights,h=e.state.version;c=pa.getParameters(a,
e.state,P.state.shadowsArray,b,ia.numPlanes,ia.numIntersection,c);var l=pa.getProgramCacheKey(c),m=d.program,n=!0;if(void 0===m)a.addEventListener("dispose",f);else if(m.cacheKey!==l)g(a);else{if(d.lightsStateVersion!==h)d.lightsStateVersion=h;else if(void 0!==c.shaderID)return;n=!1}n&&(m=pa.acquireProgram(c,l),d.program=m,d.uniforms=c.uniforms,d.outputEncoding=c.outputEncoding,a.program=m);c=m.getAttributes();if(a.morphTargets)for(l=a.numSupportedMorphTargets=0;l<y.maxMorphTargets;l++)0<=c["morphTarget"+
l]&&a.numSupportedMorphTargets++;if(a.morphNormals)for(l=a.numSupportedMorphNormals=0;l<y.maxMorphNormals;l++)0<=c["morphNormal"+l]&&a.numSupportedMorphNormals++;c=d.uniforms;if(!a.isShaderMaterial&&!a.isRawShaderMaterial||!0===a.clipping)d.numClippingPlanes=ia.numPlanes,d.numIntersection=ia.numIntersection,c.clippingPlanes=ia.uniform;d.environment=a.isMeshStandardMaterial?b.environment:null;d.fog=b.fog;d.needsLights=a.isMeshLambertMaterial||a.isMeshToonMaterial||a.isMeshPhongMaterial||a.isMeshStandardMaterial||
a.isShadowMaterial||a.isShaderMaterial&&!0===a.lights;d.lightsStateVersion=h;d.needsLights&&(c.ambientLightColor.value=e.state.ambient,c.lightProbe.value=e.state.probe,c.directionalLights.value=e.state.directional,c.directionalLightShadows.value=e.state.directionalShadow,c.spotLights.value=e.state.spot,c.spotLightShadows.value=e.state.spotShadow,c.rectAreaLights.value=e.state.rectArea,c.pointLights.value=e.state.point,c.pointLightShadows.value=e.state.pointShadow,c.hemisphereLights.value=e.state.hemi,
c.directionalShadowMap.value=e.state.directionalShadowMap,c.directionalShadowMatrix.value=e.state.directionalShadowMatrix,c.spotShadowMap.value=e.state.spotShadowMap,c.spotShadowMatrix.value=e.state.spotShadowMatrix,c.pointShadowMap.value=e.state.pointShadowMap,c.pointShadowMatrix.value=e.state.pointShadowMatrix);a=d.program.getUniforms();a=Hb.seqWithValue(a.seq,c);d.uniformsList=a}function k(a,b,c,d){S.resetTextureUnits();var e=b.fog,f=c.isMeshStandardMaterial?b.environment:null,g=null===F?y.outputEncoding:
F.texture.encoding,h=Q.get(c),l=P.state.lights;Je&&(jg||a!==da)&&ia.setState(c.clippingPlanes,c.clipIntersection,c.clipShadows,a,h,a===da&&c.id===N);c.version===h.__version?void 0===h.program?n(c,b,d):c.fog&&h.fog!==e?n(c,b,d):h.environment!==f?n(c,b,d):h.needsLights&&h.lightsStateVersion!==l.state.version?n(c,b,d):void 0===h.numClippingPlanes||h.numClippingPlanes===ia.numPlanes&&h.numIntersection===ia.numIntersection?h.outputEncoding!==g&&n(c,b,d):n(c,b,d):(n(c,b,d),h.__version=c.version);var m=
!1,x=!1,k=!1;b=h.program;g=b.getUniforms();l=h.uniforms;X.useProgram(b.program)&&(k=x=m=!0);c.id!==N&&(N=c.id,x=!0);if(m||da!==a){g.setValue(H,"projectionMatrix",a.projectionMatrix);Ga.logarithmicDepthBuffer&&g.setValue(H,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));da!==a&&(da=a,k=x=!0);if(c.isShaderMaterial||c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshStandardMaterial||c.envMap)m=g.map.cameraPosition,void 0!==m&&m.setValue(H,Kb.setFromMatrixPosition(a.matrixWorld));(c.isMeshPhongMaterial||
c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial)&&g.setValue(H,"isOrthographic",!0===a.isOrthographicCamera);(c.isMeshPhongMaterial||c.isMeshToonMaterial||c.isMeshLambertMaterial||c.isMeshBasicMaterial||c.isMeshStandardMaterial||c.isShaderMaterial||c.skinning)&&g.setValue(H,"viewMatrix",a.matrixWorldInverse)}if(c.skinning&&(g.setOptional(H,d,"bindMatrix"),g.setOptional(H,d,"bindMatrixInverse"),a=d.skeleton))if(m=a.bones,Ga.floatVertexTextures){if(void 0===
a.boneTexture){m=Math.sqrt(4*m.length);m=M.ceilPowerOfTwo(m);m=Math.max(m,4);var v=new Float32Array(m*m*4);v.set(a.boneMatrices);var q=new ac(v,m,m,1023,1015);a.boneMatrices=v;a.boneTexture=q;a.boneTextureSize=m}g.setValue(H,"boneTexture",a.boneTexture,S);g.setValue(H,"boneTextureSize",a.boneTextureSize)}else g.setOptional(H,a,"boneMatrices");if(x||h.receiveShadow!==d.receiveShadow)h.receiveShadow=d.receiveShadow,g.setValue(H,"receiveShadow",d.receiveShadow);x&&(g.setValue(H,"toneMappingExposure",
y.toneMappingExposure),g.setValue(H,"toneMappingWhitePoint",y.toneMappingWhitePoint),h.needsLights&&(x=k,l.ambientLightColor.needsUpdate=x,l.lightProbe.needsUpdate=x,l.directionalLights.needsUpdate=x,l.directionalLightShadows.needsUpdate=x,l.pointLights.needsUpdate=x,l.pointLightShadows.needsUpdate=x,l.spotLights.needsUpdate=x,l.spotLightShadows.needsUpdate=x,l.rectAreaLights.needsUpdate=x,l.hemisphereLights.needsUpdate=x),e&&c.fog&&ya.refreshFogUniforms(l,e),ya.refreshMaterialUniforms(l,c,f,wa,Ra),
void 0!==l.ltc_1&&(l.ltc_1.value=A.LTC_1),void 0!==l.ltc_2&&(l.ltc_2.value=A.LTC_2),Hb.upload(H,h.uniformsList,l,S));c.isShaderMaterial&&!0===c.uniformsNeedUpdate&&(Hb.upload(H,h.uniformsList,l,S),c.uniformsNeedUpdate=!1);c.isSpriteMaterial&&g.setValue(H,"center",d.center);g.setValue(H,"modelViewMatrix",d.modelViewMatrix);g.setValue(H,"normalMatrix",d.normalMatrix);g.setValue(H,"modelMatrix",d.matrixWorld);return b}a=a||{};var r=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml",
"canvas"),q=void 0!==a.context?a.context:null,u=void 0!==a.alpha?a.alpha:!1,G=void 0!==a.depth?a.depth:!0,z=void 0!==a.stencil?a.stencil:!0,w=void 0!==a.antialias?a.antialias:!1,oa=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,T=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,Z=void 0!==a.powerPreference?a.powerPreference:"default",C=void 0!==a.failIfMajorPerformanceCaveat?a.failIfMajorPerformanceCaveat:!1,B=null,P=null;this.domElement=r;this.debug={checkShaderErrors:!0};this.sortObjects=
this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.outputEncoding=3E3;this.physicallyCorrectLights=!1;this.toneMapping=0;this.toneMappingWhitePoint=this.toneMappingExposure=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var y=this,E=!1,D=null,I=0,L=0,F=null,J=null,N=-1;var V=b=null;var Ke=!1;var da=null,Le=null,Y=new fa,R=new fa,aa=null,W=r.width,Ra=r.height,wa=1,K=null,ba=null,ha=new fa(0,0,
W,Ra),ca=new fa(0,0,W,Ra),ka=!1,la=new Gc,ia=new oj,Je=!1,jg=!1,ja=new O,Kb=new p;try{u={alpha:u,depth:G,stencil:z,antialias:w,premultipliedAlpha:oa,preserveDrawingBuffer:T,powerPreference:Z,failIfMajorPerformanceCaveat:C,xrCompatible:!0};r.addEventListener("webglcontextlost",d,!1);r.addEventListener("webglcontextrestored",e,!1);var H=q||r.getContext("webgl",u)||r.getContext("experimental-webgl",u);if(null===H){if(null!==r.getContext("webgl"))throw Error("Error creating WebGL context with your selected attributes.");
throw Error("Error creating WebGL context.");}void 0===H.getShaderPrecisionFormat&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(Wh){throw console.error("THREE.WebGLRenderer: "+Wh.message),Wh;}var sa,Ga,X,ea,Q,S,ma,ta,na,pa,ya,xa,va,qa,za,Aa,Ca,ra;c();var ua=new Vh(y,H);this.xr=ua;var Fa=new Sh(y,na,Ga.maxTextureSize);this.shadowMap=Fa;this.getContext=function(){return H};this.getContextAttributes=function(){return H.getContextAttributes()};this.forceContextLoss=
function(){var a=sa.get("WEBGL_lose_context");a&&a.loseContext()};this.forceContextRestore=function(){var a=sa.get("WEBGL_lose_context");a&&a.restoreContext()};this.getPixelRatio=function(){return wa};this.setPixelRatio=function(a){void 0!==a&&(wa=a,this.setSize(W,Ra,!1))};this.getSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),a=new t);return a.set(W,Ra)};this.setSize=function(a,b,c){ua.isPresenting?console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting."):
(W=a,Ra=b,r.width=Math.floor(a*wa),r.height=Math.floor(b*wa),!1!==c&&(r.style.width=a+"px",r.style.height=b+"px"),this.setViewport(0,0,a,b))};this.getDrawingBufferSize=function(a){void 0===a&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),a=new t);return a.set(W*wa,Ra*wa).floor()};this.setDrawingBufferSize=function(a,b,c){W=a;Ra=b;wa=c;r.width=Math.floor(a*c);r.height=Math.floor(b*c);this.setViewport(0,0,a,b)};this.getCurrentViewport=function(a){void 0===
a&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),a=new fa);return a.copy(Y)};this.getViewport=function(a){return a.copy(ha)};this.setViewport=function(a,b,c,d){a.isVector4?ha.set(a.x,a.y,a.z,a.w):ha.set(a,b,c,d);X.viewport(Y.copy(ha).multiplyScalar(wa).floor())};this.getScissor=function(a){return a.copy(ca)};this.setScissor=function(a,b,c,d){a.isVector4?ca.set(a.x,a.y,a.z,a.w):ca.set(a,b,c,d);X.scissor(R.copy(ca).multiplyScalar(wa).floor())};this.getScissorTest=
function(){return ka};this.setScissorTest=function(a){X.setScissorTest(ka=a)};this.setOpaqueSort=function(a){K=a};this.setTransparentSort=function(a){ba=a};this.getClearColor=function(){return qa.getClearColor()};this.setClearColor=function(){qa.setClearColor.apply(qa,arguments)};this.getClearAlpha=function(){return qa.getClearAlpha()};this.setClearAlpha=function(){qa.setClearAlpha.apply(qa,arguments)};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=16384;if(void 0===b||b)d|=256;if(void 0===
c||c)d|=1024;H.clear(d)};this.clearColor=function(){this.clear(!0,!1,!1)};this.clearDepth=function(){this.clear(!1,!0,!1)};this.clearStencil=function(){this.clear(!1,!1,!0)};this.dispose=function(){r.removeEventListener("webglcontextlost",d,!1);r.removeEventListener("webglcontextrestored",e,!1);xa.dispose();va.dispose();Q.dispose();na.dispose();ua.dispose();Ba.stop()};this.renderBufferImmediate=function(a,b){X.initAttributes();var c=Q.get(a);a.hasPositions&&!c.position&&(c.position=H.createBuffer());
a.hasNormals&&!c.normal&&(c.normal=H.createBuffer());a.hasUvs&&!c.uv&&(c.uv=H.createBuffer());a.hasColors&&!c.color&&(c.color=H.createBuffer());b=b.getAttributes();a.hasPositions&&(H.bindBuffer(34962,c.position),H.bufferData(34962,a.positionArray,35048),X.enableAttribute(b.position),H.vertexAttribPointer(b.position,3,5126,!1,0,0));a.hasNormals&&(H.bindBuffer(34962,c.normal),H.bufferData(34962,a.normalArray,35048),X.enableAttribute(b.normal),H.vertexAttribPointer(b.normal,3,5126,!1,0,0));a.hasUvs&&
(H.bindBuffer(34962,c.uv),H.bufferData(34962,a.uvArray,35048),X.enableAttribute(b.uv),H.vertexAttribPointer(b.uv,2,5126,!1,0,0));a.hasColors&&(H.bindBuffer(34962,c.color),H.bufferData(34962,a.colorArray,35048),X.enableAttribute(b.color),H.vertexAttribPointer(b.color,3,5126,!1,0,0));X.disableUnusedAttributes();H.drawArrays(4,0,a.count);a.count=0};var Ha=new qb;this.renderBufferDirect=function(a,c,d,e,f,g){null===c&&(c=Ha);var h=f.isMesh&&0>f.matrixWorld.determinant(),l=k(a,c,e,f);X.setMaterial(e,h);
var m=!1;if(b!==d.id||V!==l.id||Ke!==(!0===e.wireframe))b=d.id,V=l.id,Ke=!0===e.wireframe,m=!0;if(e.morphTargets||e.morphNormals)za.update(f,d,e,l),m=!0;!0===f.isInstancedMesh&&(m=!0);a=d.index;c=d.attributes.position;if(null===a){if(void 0===c||0===c.count)return}else if(0===a.count)return;var n=1;!0===e.wireframe&&(a=ta.getWireframeAttribute(d),n=2);h=Aa;if(null!==a){var x=ma.get(a);h=Ca;h.setIndex(x)}if(m){if(!1!==Ga.isWebGL2||!f.isInstancedMesh&&!d.isInstancedBufferGeometry||null!==sa.get("ANGLE_instanced_arrays")){X.initAttributes();
m=d.attributes;l=l.getAttributes();var v=e.defaultAttributeValues;for(oa in l){var q=l[oa];if(0<=q){var r=m[oa];if(void 0!==r){var u=r.normalized,p=r.itemSize,w=ma.get(r);if(void 0!==w){var G=w.buffer,z=w.type;w=w.bytesPerElement;if(r.isInterleavedBufferAttribute){var t=r.data,C=t.stride;r=r.offset;t&&t.isInstancedInterleavedBuffer?(X.enableAttributeAndDivisor(q,t.meshPerAttribute),void 0===d._maxInstanceCount&&(d._maxInstanceCount=t.meshPerAttribute*t.count)):X.enableAttribute(q);H.bindBuffer(34962,
G);X.vertexAttribPointer(q,p,z,u,C*w,r*w)}else r.isInstancedBufferAttribute?(X.enableAttributeAndDivisor(q,r.meshPerAttribute),void 0===d._maxInstanceCount&&(d._maxInstanceCount=r.meshPerAttribute*r.count)):X.enableAttribute(q),H.bindBuffer(34962,G),X.vertexAttribPointer(q,p,z,u,0,0)}}else if("instanceMatrix"===oa)w=ma.get(f.instanceMatrix),void 0!==w&&(G=w.buffer,z=w.type,X.enableAttributeAndDivisor(q+0,1),X.enableAttributeAndDivisor(q+1,1),X.enableAttributeAndDivisor(q+2,1),X.enableAttributeAndDivisor(q+
3,1),H.bindBuffer(34962,G),H.vertexAttribPointer(q+0,4,z,!1,64,0),H.vertexAttribPointer(q+1,4,z,!1,64,16),H.vertexAttribPointer(q+2,4,z,!1,64,32),H.vertexAttribPointer(q+3,4,z,!1,64,48));else if(void 0!==v&&(u=v[oa],void 0!==u))switch(u.length){case 2:H.vertexAttrib2fv(q,u);break;case 3:H.vertexAttrib3fv(q,u);break;case 4:H.vertexAttrib4fv(q,u);break;default:H.vertexAttrib1fv(q,u)}}}X.disableUnusedAttributes()}null!==a&&H.bindBuffer(34963,x.buffer)}var oa=d.drawRange.start*n;m=null!==g?g.start*n:
0;x=Math.max(oa,m);g=Math.max(0,Math.min(null!==a?a.count:c.count,oa+d.drawRange.count*n,m+(null!==g?g.count*n:Infinity))-1-x+1);0!==g&&(f.isMesh?!0===e.wireframe?(X.setLineWidth(e.wireframeLinewidth*(null===F?wa:1)),h.setMode(1)):h.setMode(4):f.isLine?(e=e.linewidth,void 0===e&&(e=1),X.setLineWidth(e*(null===F?wa:1)),f.isLineSegments?h.setMode(1):f.isLineLoop?h.setMode(2):h.setMode(3)):f.isPoints?h.setMode(0):f.isSprite&&h.setMode(4),f.isInstancedMesh?h.renderInstances(d,x,g,f.count):d.isInstancedBufferGeometry?
h.renderInstances(d,x,g,Math.min(d.instanceCount,d._maxInstanceCount)):h.render(x,g))};this.compile=function(a,b){P=va.get(a,b);P.init();a.traverse(function(a){a.isLight&&(P.pushLight(a),a.castShadow&&P.pushShadow(a))});P.setupLights(b);var c={};a.traverse(function(b){if(b.material)if(Array.isArray(b.material))for(var d=0;d<b.material.length;d++)!1===b.material[d].uuid in c&&(n(b.material[d],a,b),c[b.material[d].uuid]=!0);else!1===b.material.uuid in c&&(n(b.material,a,b),c[b.material.uuid]=!0)})};
var Ea=null,Ba=new vh;Ba.setAnimationLoop(function(a){ua.isPresenting||Ea&&Ea(a)});"undefined"!==typeof window&&Ba.setContext(window);this.setAnimationLoop=function(a){Ea=a;ua.setAnimationLoop(a);Ba.start()};this.render=function(a,c,d,e){if(void 0!==d){console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");var f=d}if(void 0!==e){console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
var g=e}c&&c.isCamera?E||(V=b=null,Ke=!1,N=-1,da=null,!0===a.autoUpdate&&a.updateMatrixWorld(),null===c.parent&&c.updateMatrixWorld(),ua.enabled&&ua.isPresenting&&(c=ua.getCamera(c)),a.onBeforeRender(y,a,c,f||F),P=va.get(a,c),P.init(),ja.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),la.setFromProjectionMatrix(ja),jg=this.localClippingEnabled,Je=ia.init(this.clippingPlanes,jg,c),B=xa.get(a,c),B.init(),l(a,c,0,y.sortObjects),B.finish(),!0===y.sortObjects&&B.sort(K,ba),Je&&ia.beginShadows(),
Fa.render(P.state.shadowsArray,a,c),P.setupLights(c),Je&&ia.endShadows(),this.info.autoReset&&this.info.reset(),void 0!==f&&this.setRenderTarget(f),qa.render(B,a,c,g),d=B.opaque,e=B.transparent,a.overrideMaterial?(f=a.overrideMaterial,d.length&&m(d,a,c,f),e.length&&m(e,a,c,f)):(d.length&&m(d,a,c),e.length&&m(e,a,c)),a.onAfterRender(y,a,c),null!==F&&(S.updateRenderTargetMipmap(F),S.updateMultisampleRenderTarget(F)),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),
X.setPolygonOffset(!1),P=B=null):console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")};this.setFramebuffer=function(a){D!==a&&null===F&&H.bindFramebuffer(36160,a);D=a};this.getActiveCubeFace=function(){return I};this.getActiveMipmapLevel=function(){return L};this.getRenderTarget=function(){return F};this.setRenderTarget=function(a,b,c){F=a;I=b;L=c;a&&void 0===Q.get(a).__webglFramebuffer&&S.setupRenderTarget(a);var d=D,e=!1;a?(d=Q.get(a).__webglFramebuffer,a.isWebGLCubeRenderTarget?
(d=d[b||0],e=!0):d=a.isWebGLMultisampleRenderTarget?Q.get(a).__webglMultisampledFramebuffer:d,Y.copy(a.viewport),R.copy(a.scissor),aa=a.scissorTest):(Y.copy(ha).multiplyScalar(wa).floor(),R.copy(ca).multiplyScalar(wa).floor(),aa=ka);J!==d&&(H.bindFramebuffer(36160,d),J=d);X.viewport(Y);X.scissor(R);X.setScissorTest(aa);e&&(a=Q.get(a.texture),H.framebufferTexture2D(36160,36064,34069+(b||0),a.__webglTexture,c||0))};this.readRenderTargetPixels=function(a,b,c,d,e,f,g){if(a&&a.isWebGLRenderTarget){var h=
Q.get(a).__webglFramebuffer;a.isWebGLCubeRenderTarget&&void 0!==g&&(h=h[g]);if(h){g=!1;h!==J&&(H.bindFramebuffer(36160,h),g=!0);try{var l=a.texture,m=l.format,n=l.type;1023!==m&&ra.convert(m)!==H.getParameter(35739)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):1009===n||ra.convert(n)===H.getParameter(35738)||1015===n&&(Ga.isWebGL2||sa.get("OES_texture_float")||sa.get("WEBGL_color_buffer_float"))||1016===n&&(Ga.isWebGL2?
sa.get("EXT_color_buffer_float"):sa.get("EXT_color_buffer_half_float"))?36053===H.checkFramebufferStatus(36160)?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&H.readPixels(b,c,d,e,ra.convert(m),ra.convert(n),f):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")}finally{g&&H.bindFramebuffer(36160,J)}}}else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")};
this.copyFramebufferToTexture=function(a,b,c){void 0===c&&(c=0);var d=Math.pow(2,-c),e=Math.floor(b.image.width*d);d=Math.floor(b.image.height*d);var f=ra.convert(b.format);S.setTexture2D(b,0);H.copyTexImage2D(3553,c,f,a.x,a.y,e,d,0);X.unbindTexture()};this.copyTextureToTexture=function(a,b,c,d){void 0===d&&(d=0);var e=b.image.width,f=b.image.height,g=ra.convert(c.format),h=ra.convert(c.type);S.setTexture2D(c,0);b.isDataTexture?H.texSubImage2D(3553,d,a.x,a.y,e,f,g,h,b.image.data):b.isCompressedTexture?
H.compressedTexSubImage2D(3553,d,a.x,a.y,b.mipmaps[0].width,b.mipmaps[0].height,g,b.mipmaps[0].data):H.texSubImage2D(3553,d,a.x,a.y,g,h,b.image);0===d&&c.generateMipmaps&&H.generateMipmap(3553);X.unbindTexture()};this.initTexture=function(a){S.setTexture2D(a,0);X.unbindTexture()};"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Oe(a,b){this.name="";this.color=new D(a);this.density=void 0!==b?b:2.5E-4}function Pe(a,b,c){this.name=
"";this.color=new D(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3}function sb(a,b){this.array=a;this.stride=b;this.count=void 0!==a?a.length/b:0;this.usage=35044;this.updateRange={offset:0,count:-1};this.version=0}function Kd(a,b,c,d){this.name="";this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d}function Lb(a){L.call(this);this.type="SpriteMaterial";this.color=new D(16777215);this.alphaMap=this.map=null;this.rotation=0;this.transparent=this.sizeAttenuation=!0;this.setValues(a)}
function Ld(a){y.call(this);this.type="Sprite";if(void 0===Lc){Lc=new E;var b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]);b=new sb(b,5);Lc.setIndex([0,1,2,0,2,3]);Lc.setAttribute("position",new Kd(b,3,0,!1));Lc.setAttribute("uv",new Kd(b,2,3,!1))}this.geometry=Lc;this.material=void 0!==a?a:new Lb;this.center=new t(.5,.5)}function Qe(a,b,c,d,e,f){Mc.subVectors(a,c).addScalar(.5).multiply(d);void 0!==e?(Md.x=f*Mc.x-e*Mc.y,Md.y=e*Mc.x+f*Mc.y):Md.copy(Mc);a.copy(b);a.x+=Md.x;
a.y+=Md.y;a.applyMatrix4(Xh)}function Nd(){y.call(this);this._currentLevel=0;this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}});this.autoUpdate=!0}function Re(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");ha.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new O;this.bindMatrixInverse=new O}function Se(a,b){a=a||[];this.bones=a.slice(0);this.boneMatrices=new Float32Array(16*
this.bones.length);this.frame=-1;if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[],a=0,b=this.bones.length;a<b;a++)this.boneInverses.push(new O)}function lg(){y.call(this);this.type="Bone"}function Te(a,b,c){ha.call(this,a,b);this.instanceMatrix=new F(new Float32Array(16*c),16);this.count=c;this.frustumCulled=!1}function ca(a){L.call(this);this.type=
"LineBasicMaterial";this.color=new D(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.morphTargets=!1;this.setValues(a)}function La(a,b,c){1===c&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");y.call(this);this.type="Line";this.geometry=void 0!==a?a:new E;this.material=void 0!==b?b:new ca;this.updateMorphTargets()}function la(a,b){La.call(this,a,b);this.type="LineSegments"}function Ue(a,b){La.call(this,a,b);this.type=
"LineLoop"}function Xa(a){L.call(this);this.type="PointsMaterial";this.color=new D(16777215);this.alphaMap=this.map=null;this.size=1;this.sizeAttenuation=!0;this.morphTargets=!1;this.setValues(a)}function Nc(a,b){y.call(this);this.type="Points";this.geometry=void 0!==a?a:new E;this.material=void 0!==b?b:new Xa;this.updateMorphTargets()}function mg(a,b,c,d,e,f,g){var h=ng.distanceSqToPoint(a);h<c&&(c=new p,ng.closestPointToPoint(a,c),c.applyMatrix4(d),a=e.ray.origin.distanceTo(c),a<e.near||a>e.far||
f.push({distance:a,distanceToRay:Math.sqrt(h),point:c,index:b,face:null,object:g}))}function og(a,b,c,d,e,f,g,h,l){Y.call(this,a,b,c,d,e,f,g,h,l);this.format=void 0!==g?g:1022;this.minFilter=void 0!==f?f:1006;this.magFilter=void 0!==e?e:1006;this.generateMipmaps=!1}function Oc(a,b,c,d,e,f,g,h,l,m,x,n){Y.call(this,null,f,g,h,l,m,d,e,x,n);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1}function Od(a,b,c,d,e,f,g,h,l){Y.call(this,a,b,c,d,e,f,g,h,l);this.needsUpdate=!0}
function Pd(a,b,c,d,e,f,g,h,l,m){m=void 0!==m?m:1026;if(1026!==m&&1027!==m)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");void 0===c&&1026===m&&(c=1012);void 0===c&&1027===m&&(c=1020);Y.call(this,null,d,e,f,g,h,m,c,l);this.image={width:a,height:b};this.magFilter=void 0!==g?g:1003;this.minFilter=void 0!==h?h:1003;this.generateMipmaps=this.flipY=!1}function Pc(a){E.call(this);this.type="WireframeGeometry";var b=[],c,d,e,f=[0,0],g={},h=["a","b","c"];if(a&&
a.isGeometry){var l=a.faces;var m=0;for(d=l.length;m<d;m++){var x=l[m];for(c=0;3>c;c++){var n=x[h[c]];var k=x[h[(c+1)%3]];f[0]=Math.min(n,k);f[1]=Math.max(n,k);n=f[0]+","+f[1];void 0===g[n]&&(g[n]={index1:f[0],index2:f[1]})}}for(n in g)m=g[n],h=a.vertices[m.index1],b.push(h.x,h.y,h.z),h=a.vertices[m.index2],b.push(h.x,h.y,h.z)}else if(a&&a.isBufferGeometry)if(h=new p,null!==a.index){l=a.attributes.position;x=a.index;var r=a.groups;0===r.length&&(r=[{start:0,count:x.count,materialIndex:0}]);a=0;for(e=
r.length;a<e;++a)for(m=r[a],c=m.start,d=m.count,m=c,d=c+d;m<d;m+=3)for(c=0;3>c;c++)n=x.getX(m+c),k=x.getX(m+(c+1)%3),f[0]=Math.min(n,k),f[1]=Math.max(n,k),n=f[0]+","+f[1],void 0===g[n]&&(g[n]={index1:f[0],index2:f[1]});for(n in g)m=g[n],h.fromBufferAttribute(l,m.index1),b.push(h.x,h.y,h.z),h.fromBufferAttribute(l,m.index2),b.push(h.x,h.y,h.z)}else for(l=a.attributes.position,m=0,d=l.count/3;m<d;m++)for(c=0;3>c;c++)g=3*m+c,h.fromBufferAttribute(l,g),b.push(h.x,h.y,h.z),g=3*m+(c+1)%3,h.fromBufferAttribute(l,
g),b.push(h.x,h.y,h.z);this.setAttribute("position",new B(b,3))}function Qd(a,b,c){J.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};this.fromBufferGeometry(new Qc(a,b,c));this.mergeVertices()}function Qc(a,b,c){E.call(this);this.type="ParametricBufferGeometry";this.parameters={func:a,slices:b,stacks:c};var d=[],e=[],f=[],g=[],h=new p,l=new p,m=new p,x=new p,n=new p,k,r;3>a.length&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
var q=b+1;for(k=0;k<=c;k++){var u=k/c;for(r=0;r<=b;r++){var G=r/b;a(G,u,l);e.push(l.x,l.y,l.z);0<=G-1E-5?(a(G-1E-5,u,m),x.subVectors(l,m)):(a(G+1E-5,u,m),x.subVectors(m,l));0<=u-1E-5?(a(G,u-1E-5,m),n.subVectors(l,m)):(a(G,u+1E-5,m),n.subVectors(m,l));h.crossVectors(x,n).normalize();f.push(h.x,h.y,h.z);g.push(G,u)}}for(k=0;k<c;k++)for(r=0;r<b;r++)a=k*q+r+1,h=(k+1)*q+r+1,l=(k+1)*q+r,d.push(k*q+r,a,l),d.push(a,h,l);this.setIndex(d);this.setAttribute("position",new B(e,3));this.setAttribute("normal",
new B(f,3));this.setAttribute("uv",new B(g,2))}function Rd(a,b,c,d){J.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};this.fromBufferGeometry(new Ha(a,b,c,d));this.mergeVertices()}function Ha(a,b,c,d){function e(a){h.push(a.x,a.y,a.z)}function f(b,c){b*=3;c.x=a[b+0];c.y=a[b+1];c.z=a[b+2]}function g(a,b,c,d){0>d&&1===a.x&&(l[b]=a.x-1);0===c.x&&0===c.z&&(l[b]=d/2/Math.PI+.5)}E.call(this);this.type="PolyhedronBufferGeometry";this.parameters={vertices:a,
indices:b,radius:c,detail:d};c=c||1;d=d||0;var h=[],l=[];(function(a){for(var c=new p,d=new p,g=new p,h=0;h<b.length;h+=3){f(b[h+0],c);f(b[h+1],d);f(b[h+2],g);var l,m,k=c,z=d,w=g,t=Math.pow(2,a),T=[];for(m=0;m<=t;m++){T[m]=[];var Z=k.clone().lerp(w,m/t),C=z.clone().lerp(w,m/t),y=t-m;for(l=0;l<=y;l++)T[m][l]=0===l&&m===t?Z:Z.clone().lerp(C,l/y)}for(m=0;m<t;m++)for(l=0;l<2*(t-m)-1;l++)k=Math.floor(l/2),0===l%2?(e(T[m][k+1]),e(T[m+1][k]),e(T[m][k])):(e(T[m][k+1]),e(T[m+1][k+1]),e(T[m+1][k]))}})(d);(function(a){for(var b=
new p,c=0;c<h.length;c+=3)b.x=h[c+0],b.y=h[c+1],b.z=h[c+2],b.normalize().multiplyScalar(a),h[c+0]=b.x,h[c+1]=b.y,h[c+2]=b.z})(c);(function(){for(var a=new p,b=0;b<h.length;b+=3)a.x=h[b+0],a.y=h[b+1],a.z=h[b+2],l.push(Math.atan2(a.z,-a.x)/2/Math.PI+.5,1-(Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5));a=new p;b=new p;for(var c=new p,d=new p,e=new t,f=new t,k=new t,G=0,z=0;G<h.length;G+=9,z+=6){a.set(h[G+0],h[G+1],h[G+2]);b.set(h[G+3],h[G+4],h[G+5]);c.set(h[G+6],h[G+7],h[G+8]);e.set(l[z+0],
l[z+1]);f.set(l[z+2],l[z+3]);k.set(l[z+4],l[z+5]);d.copy(a).add(b).add(c).divideScalar(3);var w=Math.atan2(d.z,-d.x);g(e,z+0,a,w);g(f,z+2,b,w);g(k,z+4,c,w)}for(a=0;a<l.length;a+=6)b=l[a+0],c=l[a+2],d=l[a+4],e=Math.min(b,c,d),.9<Math.max(b,c,d)&&.1>e&&(.2>b&&(l[a+0]+=1),.2>c&&(l[a+2]+=1),.2>d&&(l[a+4]+=1))})();this.setAttribute("position",new B(h,3));this.setAttribute("normal",new B(h.slice(),3));this.setAttribute("uv",new B(l,2));0===d?this.computeVertexNormals():this.normalizeNormals()}function Sd(a,
b){J.call(this);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Rc(a,b));this.mergeVertices()}function Rc(a,b){Ha.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Td(a,b){J.call(this);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new cc(a,b));this.mergeVertices()}function cc(a,b){Ha.call(this,[1,0,0,
-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Ud(a,b){J.call(this);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Sc(a,b));this.mergeVertices()}function Sc(a,b){var c=(1+Math.sqrt(5))/2;Ha.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,
11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Vd(a,b){J.call(this);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};this.fromBufferGeometry(new Tc(a,b));this.mergeVertices()}function Tc(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;Ha.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,
0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronBufferGeometry";this.parameters={radius:a,detail:b}}function Wd(a,b,c,d,e,f){J.call(this);this.type="TubeGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,
closed:e};void 0!==f&&console.warn("THREE.TubeGeometry: taper has been removed.");a=new dc(a,b,c,d,e);this.tangents=a.tangents;this.normals=a.normals;this.binormals=a.binormals;this.fromBufferGeometry(a);this.mergeVertices()}function dc(a,b,c,d,e){function f(e){k=a.getPointAt(e/b,k);var f=g.normals[e];e=g.binormals[e];for(v=0;v<=d;v++){var m=v/d*Math.PI*2,n=Math.sin(m);m=-Math.cos(m);l.x=m*f.x+n*e.x;l.y=m*f.y+n*e.y;l.z=m*f.z+n*e.z;l.normalize();q.push(l.x,l.y,l.z);h.x=k.x+c*l.x;h.y=k.y+c*l.y;h.z=
k.z+c*l.z;r.push(h.x,h.y,h.z)}}E.call(this);this.type="TubeBufferGeometry";this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e};b=b||64;c=c||1;d=d||8;e=e||!1;var g=a.computeFrenetFrames(b,e);this.tangents=g.tangents;this.normals=g.normals;this.binormals=g.binormals;var h=new p,l=new p,m=new t,k=new p,n,v,r=[],q=[],u=[],G=[];for(n=0;n<b;n++)f(n);f(!1===e?b:0);for(n=0;n<=b;n++)for(v=0;v<=d;v++)m.x=n/b,m.y=v/d,u.push(m.x,m.y);(function(){for(v=1;v<=b;v++)for(n=1;n<=d;n++){var a=
(d+1)*v+(n-1),c=(d+1)*v+n,e=(d+1)*(v-1)+n;G.push((d+1)*(v-1)+(n-1),a,e);G.push(a,c,e)}})();this.setIndex(G);this.setAttribute("position",new B(r,3));this.setAttribute("normal",new B(q,3));this.setAttribute("uv",new B(u,2))}function Xd(a,b,c,d,e,f,g){J.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new Uc(a,
b,c,d,e,f));this.mergeVertices()}function Uc(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.sin(a);b=c/b*a;c=Math.cos(b);e.x=d*(2+c)*.5*Math.cos(a);e.y=d*(2+c)*f*.5;e.z=d*Math.sin(b)*.5}E.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||1;b=b||.4;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=[],l=[],m=[],k=[],n,v=new p,r=new p,q=new p,u=new p,G=new p,z=new p,w=new p;for(n=0;n<=c;++n){var t=n/c*e*Math.PI*2;
g(t,e,f,a,q);g(t+.01,e,f,a,u);z.subVectors(u,q);w.addVectors(u,q);G.crossVectors(z,w);w.crossVectors(G,z);G.normalize();w.normalize();for(t=0;t<=d;++t){var T=t/d*Math.PI*2,Z=-b*Math.cos(T);T=b*Math.sin(T);v.x=q.x+(Z*w.x+T*G.x);v.y=q.y+(Z*w.y+T*G.y);v.z=q.z+(Z*w.z+T*G.z);l.push(v.x,v.y,v.z);r.subVectors(v,q).normalize();m.push(r.x,r.y,r.z);k.push(n/c);k.push(t/d)}}for(t=1;t<=c;t++)for(n=1;n<=d;n++)a=(d+1)*t+(n-1),b=(d+1)*t+n,e=(d+1)*(t-1)+n,h.push((d+1)*(t-1)+(n-1),a,e),h.push(a,b,e);this.setIndex(h);
this.setAttribute("position",new B(l,3));this.setAttribute("normal",new B(m,3));this.setAttribute("uv",new B(k,2))}function Yd(a,b,c,d,e){J.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new Vc(a,b,c,d,e));this.mergeVertices()}function Vc(a,b,c,d,e){E.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||1;b=b||.4;c=Math.floor(c)||8;d=Math.floor(d)||
6;e=e||2*Math.PI;var f=[],g=[],h=[],l=[],m=new p,k=new p,n=new p,v,r;for(v=0;v<=c;v++)for(r=0;r<=d;r++){var q=r/d*e,u=v/c*Math.PI*2;k.x=(a+b*Math.cos(u))*Math.cos(q);k.y=(a+b*Math.cos(u))*Math.sin(q);k.z=b*Math.sin(u);g.push(k.x,k.y,k.z);m.x=a*Math.cos(q);m.y=a*Math.sin(q);n.subVectors(k,m).normalize();h.push(n.x,n.y,n.z);l.push(r/d);l.push(v/c)}for(v=1;v<=c;v++)for(r=1;r<=d;r++)a=(d+1)*(v-1)+r-1,b=(d+1)*(v-1)+r,e=(d+1)*v+r,f.push((d+1)*v+r-1,a,e),f.push(a,b,e);this.setIndex(f);this.setAttribute("position",
new B(g,3));this.setAttribute("normal",new B(h,3));this.setAttribute("uv",new B(l,2))}function Yh(a,b,c,d,e){for(var f,g=0,h=b,l=c-d;h<c;h+=d)g+=(a[l]-a[h])*(a[h+1]+a[l+1]),l=h;if(e===0<g)for(e=b;e<c;e+=d)f=Zh(e,a[e],a[e+1],f);else for(e=c-d;e>=b;e-=d)f=Zh(e,a[e],a[e+1],f);f&&Ve(f,f.next)&&(Zd(f),f=f.next);return f}function Mb(a,b){if(!a)return a;b||(b=a);do{var c=!1;if(a.steiner||!Ve(a,a.next)&&0!==ja(a.prev,a,a.next))a=a.next;else{Zd(a);a=b=a.prev;if(a===a.next)break;c=!0}}while(c||a!==b);return b}
function $d(a,b,c,d,e,f,g){if(a){if(!g&&f){var h=a,l=h;do null===l.z&&(l.z=pg(l.x,l.y,d,e,f)),l.prevZ=l.prev,l=l.nextZ=l.next;while(l!==h);l.prevZ.nextZ=null;l.prevZ=null;h=l;var m,k,n,v,r=1;do{l=h;var q=h=null;for(k=0;l;){k++;var p=l;for(m=n=0;m<r&&(n++,p=p.nextZ,p);m++);for(v=r;0<n||0<v&&p;)0!==n&&(0===v||!p||l.z<=p.z)?(m=l,l=l.nextZ,n--):(m=p,p=p.nextZ,v--),q?q.nextZ=m:h=m,m.prevZ=q,q=m;l=p}q.nextZ=null;r*=2}while(1<k)}for(h=a;a.prev!==a.next;){l=a.prev;p=a.next;if(f)q=Bk(a,d,e,f);else a:if(q=
a,k=q.prev,n=q,r=q.next,0<=ja(k,n,r))q=!1;else{for(m=q.next.next;m!==q.prev;){if(Wc(k.x,k.y,n.x,n.y,r.x,r.y,m.x,m.y)&&0<=ja(m.prev,m,m.next)){q=!1;break a}m=m.next}q=!0}if(q)b.push(l.i/c),b.push(a.i/c),b.push(p.i/c),Zd(a),h=a=p.next;else if(a=p,a===h){if(!g)$d(Mb(a),b,c,d,e,f,1);else if(1===g){a=Mb(a);g=b;h=c;l=a;do p=l.prev,q=l.next.next,!Ve(p,q)&&$h(p,l,l.next,q)&&ae(p,q)&&ae(q,p)&&(g.push(p.i/h),g.push(l.i/h),g.push(q.i/h),Zd(l),Zd(l.next),l=a=q),l=l.next;while(l!==a);a=Mb(l);$d(a,b,c,d,e,f,2)}else if(2===
g)a:{g=a;do{for(h=g.next.next;h!==g.prev;){if(l=g.i!==h.i){l=g;p=h;if(q=l.next.i!==p.i&&l.prev.i!==p.i){b:{q=l;do{if(q.i!==l.i&&q.next.i!==l.i&&q.i!==p.i&&q.next.i!==p.i&&$h(q,q.next,l,p)){q=!0;break b}q=q.next}while(q!==l);q=!1}q=!q}if(q){if(q=ae(l,p)&&ae(p,l)){q=l;k=!1;n=(l.x+p.x)/2;r=(l.y+p.y)/2;do q.y>r!==q.next.y>r&&q.next.y!==q.y&&n<(q.next.x-q.x)*(r-q.y)/(q.next.y-q.y)+q.x&&(k=!k),q=q.next;while(q!==l);q=k}q=q&&(ja(l.prev,l,p.prev)||ja(l,p.prev,p))||Ve(l,p)&&0<ja(l.prev,l,l.next)&&0<ja(p.prev,
p,p.next)}l=q}if(l){a=ai(g,h);g=Mb(g,g.next);a=Mb(a,a.next);$d(g,b,c,d,e,f);$d(a,b,c,d,e,f);break a}h=h.next}g=g.next}while(g!==a)}break}}}}function Bk(a,b,c,d){var e=a.prev,f=a.next;if(0<=ja(e,a,f))return!1;var g=e.x>a.x?e.x>f.x?e.x:f.x:a.x>f.x?a.x:f.x,h=e.y>a.y?e.y>f.y?e.y:f.y:a.y>f.y?a.y:f.y,l=pg(e.x<a.x?e.x<f.x?e.x:f.x:a.x<f.x?a.x:f.x,e.y<a.y?e.y<f.y?e.y:f.y:a.y<f.y?a.y:f.y,b,c,d);b=pg(g,h,b,c,d);c=a.prevZ;for(d=a.nextZ;c&&c.z>=l&&d&&d.z<=b;){if(c!==a.prev&&c!==a.next&&Wc(e.x,e.y,a.x,a.y,f.x,
f.y,c.x,c.y)&&0<=ja(c.prev,c,c.next))return!1;c=c.prevZ;if(d!==a.prev&&d!==a.next&&Wc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ja(d.prev,d,d.next))return!1;d=d.nextZ}for(;c&&c.z>=l;){if(c!==a.prev&&c!==a.next&&Wc(e.x,e.y,a.x,a.y,f.x,f.y,c.x,c.y)&&0<=ja(c.prev,c,c.next))return!1;c=c.prevZ}for(;d&&d.z<=b;){if(d!==a.prev&&d!==a.next&&Wc(e.x,e.y,a.x,a.y,f.x,f.y,d.x,d.y)&&0<=ja(d.prev,d,d.next))return!1;d=d.nextZ}return!0}function Ck(a,b){return a.x-b.x}function Dk(a,b){var c=b,d=a.x,e=a.y,f=-Infinity;do{if(e<=
c.y&&e>=c.next.y&&c.next.y!==c.y){var g=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(g<=d&&g>f){f=g;if(g===d){if(e===c.y)return c;if(e===c.next.y)return c.next}var h=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!h)return null;if(d===f)return h;b=h;g=h.x;var l=h.y,m=Infinity;c=h;do{if(d>=c.x&&c.x>=g&&d!==c.x&&Wc(e<l?d:f,e,g,l,e<l?f:d,e,c.x,c.y)){var k=Math.abs(e-c.y)/(d-c.x);var n;if((n=ae(c,a))&&!(n=k<m)&&(n=k===m)&&!(n=c.x>h.x)&&(n=c.x===h.x)){n=h;var v=c;n=0>ja(n.prev,n,v.prev)&&0>ja(v.next,
n,n.next)}n&&(h=c,m=k)}c=c.next}while(c!==b);return h}function pg(a,b,c,d,e){a=32767*(a-c)*e;b=32767*(b-d)*e;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;b=(b|b<<8)&16711935;b=(b|b<<4)&252645135;b=(b|b<<2)&858993459;return(a|a<<1)&1431655765|((b|b<<1)&1431655765)<<1}function Ek(a){var b=a,c=a;do{if(b.x<c.x||b.x===c.x&&b.y<c.y)c=b;b=b.next}while(b!==a);return c}function Wc(a,b,c,d,e,f,g,h){return 0<=(e-g)*(b-h)-(a-g)*(f-h)&&0<=(a-g)*(d-h)-(c-g)*(b-h)&&0<=(c-g)*(f-h)-(e-g)*(d-h)}function ja(a,
b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function Ve(a,b){return a.x===b.x&&a.y===b.y}function $h(a,b,c,d){var e=We(ja(a,b,c)),f=We(ja(a,b,d)),g=We(ja(c,d,a)),h=We(ja(c,d,b));return e!==f&&g!==h||0===e&&Xe(a,c,b)||0===f&&Xe(a,d,b)||0===g&&Xe(c,a,d)||0===h&&Xe(c,b,d)?!0:!1}function Xe(a,b,c){return b.x<=Math.max(a.x,c.x)&&b.x>=Math.min(a.x,c.x)&&b.y<=Math.max(a.y,c.y)&&b.y>=Math.min(a.y,c.y)}function We(a){return 0<a?1:0>a?-1:0}function ae(a,b){return 0>ja(a.prev,a,a.next)?0<=ja(a,b,a.next)&&
0<=ja(a,a.prev,b):0>ja(a,b,a.prev)||0>ja(a,a.next,b)}function ai(a,b){var c=new qg(a.i,a.x,a.y),d=new qg(b.i,b.x,b.y),e=a.next,f=b.prev;a.next=b;b.prev=a;c.next=e;e.prev=c;d.next=c;c.prev=d;f.next=d;d.prev=f;return d}function Zh(a,b,c,d){a=new qg(a,b,c);d?(a.next=d.next,a.prev=d,d.next.prev=a,d.next=a):(a.prev=a,a.next=a);return a}function Zd(a){a.next.prev=a.prev;a.prev.next=a.next;a.prevZ&&(a.prevZ.nextZ=a.nextZ);a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function qg(a,b,c){this.i=a;this.x=b;this.y=c;this.nextZ=
this.prevZ=this.z=this.next=this.prev=null;this.steiner=!1}function bi(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop()}function ci(a,b){for(var c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y)}function ec(a,b){J.call(this);this.type="ExtrudeGeometry";this.parameters={shapes:a,options:b};this.fromBufferGeometry(new hb(a,b));this.mergeVertices()}function hb(a,b){function c(a){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a)}
function g(a,b,c){var d=a.x-b.x;var e=a.y-b.y;var f=c.x-a.x;var g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var l=Math.sqrt(h),m=Math.sqrt(f*f+g*g);h=b.x-e/l;b=b.y+d/l;g=((c.x-g/m-h)*g-(c.y+f/m-b)*f)/(d*g-e*f);f=h+d*g-a.x;d=b+e*g-a.y;e=f*f+d*d;if(2>=e)return new t(f,d);e=Math.sqrt(e/2)}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(f=-e,e=Math.sqrt(h)):(f=d,d=e,e=Math.sqrt(h/2));return new t(f/e,d/
e)}function h(a,b){for(K=a.length;0<=--K;){var c=K;var f=K-1;0>f&&(f=a.length-1);var g,h=w+2*P;for(g=0;g<h;g++){var l=W*g,m=W*(g+1),k=b+f+l,n=b+f+m;m=b+c+m;q(b+c+l);q(k);q(m);q(k);q(n);q(m);l=e.length/3;l=E.generateSideWallUV(d,e,l-6,l-3,l-2,l-1);u(l[0]);u(l[1]);u(l[3]);u(l[1]);u(l[2]);u(l[3])}}}function l(a,b,c){G.push(a);G.push(b);G.push(c)}function k(a,b,c){q(a);q(b);q(c);a=e.length/3;a=E.generateTopUV(d,e,a-3,a-2,a-1);u(a[0]);u(a[1]);u(a[2])}function q(a){e.push(G[3*a]);e.push(G[3*a+1]);e.push(G[3*
a+2])}function u(a){f.push(a.x);f.push(a.y)}var G=[],z=void 0!==b.curveSegments?b.curveSegments:12,w=void 0!==b.steps?b.steps:1,y=void 0!==b.depth?b.depth:100,T=void 0!==b.bevelEnabled?b.bevelEnabled:!0,Z=void 0!==b.bevelThickness?b.bevelThickness:6,C=void 0!==b.bevelSize?b.bevelSize:Z-2,B=void 0!==b.bevelOffset?b.bevelOffset:0,P=void 0!==b.bevelSegments?b.bevelSegments:3,A=b.extrudePath,E=void 0!==b.UVGenerator?b.UVGenerator:Fk;void 0!==b.amount&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),
y=b.amount);var D=!1;if(A){var F=A.getSpacedPoints(w);D=!0;T=!1;var I=A.computeFrenetFrames(w,!1);var J=new p;var L=new p;var M=new p}T||(B=C=Z=P=0);var N;z=a.extractPoints(z);a=z.shape;var O=z.holes;if(!tb.isClockWise(a)){a=a.reverse();var da=0;for(N=O.length;da<N;da++){var Q=O[da];tb.isClockWise(Q)&&(O[da]=Q.reverse())}}var Y=tb.triangulateShape(a,O),V=a;da=0;for(N=O.length;da<N;da++)Q=O[da],a=a.concat(Q);var aa,W=a.length,R,ea=Y.length;z=[];var K=0;var ba=V.length;var S=ba-1;for(aa=K+1;K<ba;K++,
S++,aa++)S===ba&&(S=0),aa===ba&&(aa=0),z[K]=g(V[K],V[S],V[aa]);A=[];var ha=z.concat();da=0;for(N=O.length;da<N;da++){Q=O[da];var ca=[];K=0;ba=Q.length;S=ba-1;for(aa=K+1;K<ba;K++,S++,aa++)S===ba&&(S=0),aa===ba&&(aa=0),ca[K]=g(Q[K],Q[S],Q[aa]);A.push(ca);ha=ha.concat(ca)}for(S=0;S<P;S++){ba=S/P;var fa=Z*Math.cos(ba*Math.PI/2);aa=C*Math.sin(ba*Math.PI/2)+B;K=0;for(ba=V.length;K<ba;K++){var ia=c(V[K],z[K],aa);l(ia.x,ia.y,-fa)}da=0;for(N=O.length;da<N;da++)for(Q=O[da],ca=A[da],K=0,ba=Q.length;K<ba;K++)ia=
c(Q[K],ca[K],aa),l(ia.x,ia.y,-fa)}aa=C+B;for(K=0;K<W;K++)ia=T?c(a[K],ha[K],aa):a[K],D?(L.copy(I.normals[0]).multiplyScalar(ia.x),J.copy(I.binormals[0]).multiplyScalar(ia.y),M.copy(F[0]).add(L).add(J),l(M.x,M.y,M.z)):l(ia.x,ia.y,0);for(ba=1;ba<=w;ba++)for(K=0;K<W;K++)ia=T?c(a[K],ha[K],aa):a[K],D?(L.copy(I.normals[ba]).multiplyScalar(ia.x),J.copy(I.binormals[ba]).multiplyScalar(ia.y),M.copy(F[ba]).add(L).add(J),l(M.x,M.y,M.z)):l(ia.x,ia.y,y/w*ba);for(S=P-1;0<=S;S--){ba=S/P;fa=Z*Math.cos(ba*Math.PI/
2);aa=C*Math.sin(ba*Math.PI/2)+B;K=0;for(ba=V.length;K<ba;K++)ia=c(V[K],z[K],aa),l(ia.x,ia.y,y+fa);da=0;for(N=O.length;da<N;da++)for(Q=O[da],ca=A[da],K=0,ba=Q.length;K<ba;K++)ia=c(Q[K],ca[K],aa),D?l(ia.x,ia.y+F[w-1].y,F[w-1].x+fa):l(ia.x,ia.y,y+fa)}(function(){var a=e.length/3;if(T){var b=0*W;for(K=0;K<ea;K++)R=Y[K],k(R[2]+b,R[1]+b,R[0]+b);b=W*(w+2*P);for(K=0;K<ea;K++)R=Y[K],k(R[0]+b,R[1]+b,R[2]+b)}else{for(K=0;K<ea;K++)R=Y[K],k(R[2],R[1],R[0]);for(K=0;K<ea;K++)R=Y[K],k(R[0]+W*w,R[1]+W*w,R[2]+W*w)}d.addGroup(a,
e.length/3-a,0)})();(function(){var a=e.length/3,b=0;h(V,b);b+=V.length;da=0;for(N=O.length;da<N;da++)Q=O[da],h(Q,b),b+=Q.length;d.addGroup(a,e.length/3-a,1)})()}E.call(this);this.type="ExtrudeBufferGeometry";this.parameters={shapes:a,options:b};a=Array.isArray(a)?a:[a];for(var d=this,e=[],f=[],g=0,h=a.length;g<h;g++)c(a[g]);this.setAttribute("position",new B(e,3));this.setAttribute("uv",new B(f,2));this.computeVertexNormals()}function di(a,b,c){c.shapes=[];if(Array.isArray(a))for(var d=0,e=a.length;d<
e;d++)c.shapes.push(a[d].uuid);else c.shapes.push(a.uuid);void 0!==b.extrudePath&&(c.options.extrudePath=b.extrudePath.toJSON());return c}function be(a,b){J.call(this);this.type="TextGeometry";this.parameters={text:a,parameters:b};this.fromBufferGeometry(new Xc(a,b));this.mergeVertices()}function Xc(a,b){b=b||{};var c=b.font;if(!c||!c.isFont)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new J;a=c.generateShapes(a,b.size);b.depth=void 0!==b.height?b.height:
50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);hb.call(this,a,b);this.type="TextBufferGeometry"}function ce(a,b,c,d,e,f,g){J.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new fc(a,b,c,d,e,f,g));this.mergeVertices()}function fc(a,b,c,d,e,f,g){E.call(this);this.type="SphereBufferGeometry";
this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||1;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;var h=Math.min(f+g,Math.PI),l,m,k=0,n=[],v=new p,r=new p,q=[],u=[],G=[],t=[];for(m=0;m<=c;m++){var w=[],y=m/c,T=0;0==m&&0==f?T=.5/b:m==c&&h==Math.PI&&(T=-.5/b);for(l=0;l<=b;l++){var Z=l/b;v.x=-a*Math.cos(d+Z*e)*Math.sin(f+y*g);v.y=a*Math.cos(f+
y*g);v.z=a*Math.sin(d+Z*e)*Math.sin(f+y*g);u.push(v.x,v.y,v.z);r.copy(v).normalize();G.push(r.x,r.y,r.z);t.push(Z+T,1-y);w.push(k++)}n.push(w)}for(m=0;m<c;m++)for(l=0;l<b;l++)a=n[m][l+1],d=n[m][l],e=n[m+1][l],g=n[m+1][l+1],(0!==m||0<f)&&q.push(a,d,g),(m!==c-1||h<Math.PI)&&q.push(d,e,g);this.setIndex(q);this.setAttribute("position",new B(u,3));this.setAttribute("normal",new B(G,3));this.setAttribute("uv",new B(t,2))}function de(a,b,c,d,e,f){J.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,
outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new Yc(a,b,c,d,e,f));this.mergeVertices()}function Yc(a,b,c,d,e,f){E.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||.5;b=b||1;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=[],h=[],l=[],m=[],k=a,n=(b-a)/d,v=new p,r=new t,q,u;for(q=0;q<=d;q++){for(u=
0;u<=c;u++)a=e+u/c*f,v.x=k*Math.cos(a),v.y=k*Math.sin(a),h.push(v.x,v.y,v.z),l.push(0,0,1),r.x=(v.x/b+1)/2,r.y=(v.y/b+1)/2,m.push(r.x,r.y);k+=n}for(q=0;q<d;q++)for(b=q*(c+1),u=0;u<c;u++)a=u+b,e=a+c+1,f=a+c+2,k=a+1,g.push(a,e,k),g.push(e,f,k);this.setIndex(g);this.setAttribute("position",new B(h,3));this.setAttribute("normal",new B(l,3));this.setAttribute("uv",new B(m,2))}function ee(a,b,c,d){J.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new Zc(a,
b,c,d));this.mergeVertices()}function Zc(a,b,c,d){E.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=M.clamp(d,0,2*Math.PI);var e=[],f=[],g=[],h=1/b,l=new p,m=new t,k;for(k=0;k<=b;k++){var n=c+k*h*d;var v=Math.sin(n),r=Math.cos(n);for(n=0;n<=a.length-1;n++)l.x=a[n].x*v,l.y=a[n].y,l.z=a[n].x*r,f.push(l.x,l.y,l.z),m.x=k/b,m.y=n/(a.length-1),g.push(m.x,m.y)}for(k=0;k<b;k++)for(n=0;n<a.length-1;n++)c=n+
k*a.length,h=c+a.length,l=c+a.length+1,m=c+1,e.push(c,h,m),e.push(h,l,m);this.setIndex(e);this.setAttribute("position",new B(f,3));this.setAttribute("uv",new B(g,2));this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,e=new p,f=new p,g=new p,c=b*a.length*3,n=k=0;k<a.length;k++,n+=3)e.x=d[n+0],e.y=d[n+1],e.z=d[n+2],f.x=d[c+n+0],f.y=d[c+n+1],f.z=d[c+n+2],g.addVectors(e,f).normalize(),d[n+0]=d[c+n+0]=g.x,d[n+1]=d[c+n+1]=g.y,d[n+2]=d[c+n+2]=g.z}function gc(a,b){J.call(this);
this.type="ShapeGeometry";"object"===typeof b&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments);this.parameters={shapes:a,curveSegments:b};this.fromBufferGeometry(new hc(a,b));this.mergeVertices()}function hc(a,b){function c(a){var c,h=e.length/3;a=a.extractPoints(b);var m=a.shape,k=a.holes;!1===tb.isClockWise(m)&&(m=m.reverse());a=0;for(c=k.length;a<c;a++){var x=k[a];!0===tb.isClockWise(x)&&(k[a]=x.reverse())}var p=tb.triangulateShape(m,k);a=0;for(c=k.length;a<
c;a++)x=k[a],m=m.concat(x);a=0;for(c=m.length;a<c;a++)x=m[a],e.push(x.x,x.y,0),f.push(0,0,1),g.push(x.x,x.y);a=0;for(c=p.length;a<c;a++)m=p[a],d.push(m[0]+h,m[1]+h,m[2]+h),l+=3}E.call(this);this.type="ShapeBufferGeometry";this.parameters={shapes:a,curveSegments:b};b=b||12;var d=[],e=[],f=[],g=[],h=0,l=0;if(!1===Array.isArray(a))c(a);else for(var m=0;m<a.length;m++)c(a[m]),this.addGroup(h,l,m),h+=l,l=0;this.setIndex(d);this.setAttribute("position",new B(e,3));this.setAttribute("normal",new B(f,3));
this.setAttribute("uv",new B(g,2))}function ei(a,b){b.shapes=[];if(Array.isArray(a))for(var c=0,d=a.length;c<d;c++)b.shapes.push(a[c].uuid);else b.shapes.push(a.uuid);return b}function $c(a,b){E.call(this);this.type="EdgesGeometry";this.parameters={thresholdAngle:b};var c=[];b=Math.cos(M.DEG2RAD*(void 0!==b?b:1));var d=[0,0],e={},f=["a","b","c"];if(a.isBufferGeometry){var g=new J;g.fromBufferGeometry(a)}else g=a.clone();g.mergeVertices();g.computeFaceNormals();a=g.vertices;g=g.faces;for(var h=0,l=
g.length;h<l;h++)for(var m=g[h],k=0;3>k;k++){var n=m[f[k]];var v=m[f[(k+1)%3]];d[0]=Math.min(n,v);d[1]=Math.max(n,v);n=d[0]+","+d[1];void 0===e[n]?e[n]={index1:d[0],index2:d[1],face1:h,face2:void 0}:e[n].face2=h}for(n in e)if(d=e[n],void 0===d.face2||g[d.face1].normal.dot(g[d.face2].normal)<=b)f=a[d.index1],c.push(f.x,f.y,f.z),f=a[d.index2],c.push(f.x,f.y,f.z);this.setAttribute("position",new B(c,3))}function ic(a,b,c,d,e,f,g,h){J.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,
radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new ub(a,b,c,d,e,f,g,h));this.mergeVertices()}function ub(a,b,c,d,e,f,g,h){function l(c){var e,f=new t,l=new p,x=0,u=!0===c?a:b,w=!0===c?1:-1;var y=q;for(e=1;e<=d;e++)n.push(0,G*w,0),v.push(0,w,0),r.push(.5,.5),q++;var B=q;for(e=0;e<=d;e++){var A=e/d*h+g,D=Math.cos(A);A=Math.sin(A);l.x=u*A;l.y=G*w;l.z=u*D;n.push(l.x,l.y,l.z);v.push(0,w,0);f.x=.5*D+.5;f.y=.5*A*w+.5;r.push(f.x,f.y);
q++}for(e=0;e<d;e++)f=y+e,l=B+e,!0===c?k.push(l,l+1,f):k.push(l+1,l,f),x+=3;m.addGroup(z,x,!0===c?1:2);z+=x}E.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var m=this;a=void 0!==a?a:1;b=void 0!==b?b:1;c=c||1;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var k=[],n=[],v=[],r=[],q=0,u=[],G=c/2,z=0;(function(){var f,l,x=new p,
t=new p,C=0,y=(b-a)/c;for(l=0;l<=e;l++){var B=[],A=l/e,D=A*(b-a)+a;for(f=0;f<=d;f++){var E=f/d,F=E*h+g,I=Math.sin(F);F=Math.cos(F);t.x=D*I;t.y=-A*c+G;t.z=D*F;n.push(t.x,t.y,t.z);x.set(I,y,F).normalize();v.push(x.x,x.y,x.z);r.push(E,1-A);B.push(q++)}u.push(B)}for(f=0;f<d;f++)for(l=0;l<e;l++)x=u[l+1][f],t=u[l+1][f+1],y=u[l][f+1],k.push(u[l][f],x,y),k.push(x,t,y),C+=6;m.addGroup(z,C,0);z+=C})();!1===f&&(0<a&&l(!0),0<b&&l(!1));this.setIndex(k);this.setAttribute("position",new B(n,3));this.setAttribute("normal",
new B(v,3));this.setAttribute("uv",new B(r,2))}function fe(a,b,c,d,e,f,g){ic.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function ge(a,b,c,d,e,f,g){ub.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}function he(a,b,c,d){J.call(this);this.type="CircleGeometry";this.parameters=
{radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new ad(a,b,c,d));this.mergeVertices()}function ad(a,b,c,d){E.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||1;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=[],f=[],g=[],h=[],l,m=new p,k=new t;f.push(0,0,0);g.push(0,0,1);h.push(.5,.5);var n=0;for(l=3;n<=b;n++,l+=3){var v=c+n/b*d;m.x=a*Math.cos(v);m.y=a*Math.sin(v);f.push(m.x,m.y,
m.z);g.push(0,0,1);k.x=(f[l]/a+1)/2;k.y=(f[l+1]/a+1)/2;h.push(k.x,k.y)}for(l=1;l<=b;l++)e.push(l,l+1,0);this.setIndex(e);this.setAttribute("position",new B(f,3));this.setAttribute("normal",new B(g,3));this.setAttribute("uv",new B(h,2))}function jc(a){L.call(this);this.type="ShadowMaterial";this.color=new D(0);this.transparent=!0;this.setValues(a)}function vb(a){Ca.call(this,a);this.type="RawShaderMaterial"}function ib(a){L.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=
new D(16777215);this.roughness=1;this.metalness=0;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new D(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new t(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=
!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.vertexTangents=this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function kc(a){ib.call(this);this.defines={STANDARD:"",PHYSICAL:""};this.type="MeshPhysicalMaterial";this.clearcoat=0;this.clearcoatMap=null;this.clearcoatRoughness=0;this.clearcoatRoughnessMap=null;this.clearcoatNormalScale=new t(1,1);this.clearcoatNormalMap=null;this.reflectivity=.5;this.sheen=null;this.transparency=0;this.setValues(a)}
function Nb(a){L.call(this);this.type="MeshPhongMaterial";this.color=new D(16777215);this.specular=new D(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new D(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new t(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=
null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function lc(a){L.call(this);this.defines={TOON:""};this.type="MeshToonMaterial";this.color=new D(16777215);this.specular=new D(1118481);this.shininess=30;this.lightMap=this.gradientMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=
new D(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new t(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=this.specularMap=null;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function mc(a){L.call(this);this.type="MeshNormalMaterial";this.bumpMap=
null;this.bumpScale=1;this.normalMap=null;this.normalMapType=0;this.normalScale=new t(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.fog=!1;this.setValues(a)}function nc(a){L.call(this);this.type="MeshLambertMaterial";this.color=new D(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new D(0);this.emissiveIntensity=
1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=0;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function oc(a){L.call(this);this.defines={MATCAP:""};this.type="MeshMatcapMaterial";this.color=new D(16777215);this.bumpMap=this.map=this.matcap=null;this.bumpScale=1;this.normalMap=null;this.normalMapType=
0;this.normalScale=new t(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.alphaMap=null;this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a)}function pc(a){ca.call(this);this.type="LineDashedMaterial";this.scale=1;this.dashSize=3;this.gapSize=1;this.setValues(a)}function Ma(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c}function Ye(a,b,c,d){Ma.call(this,
a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0}function ie(a,b,c,d){Ma.call(this,a,b,c,d)}function Ze(a,b,c,d){Ma.call(this,a,b,c,d)}function ya(a,b,c,d){if(void 0===a)throw Error("THREE.KeyframeTrack: track name is undefined");if(void 0===b||0===b.length)throw Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a;this.times=ka.convertArray(b,this.TimeBufferType);this.values=ka.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation)}
function $e(a,b,c){ya.call(this,a,b,c)}function af(a,b,c,d){ya.call(this,a,b,c,d)}function bd(a,b,c,d){ya.call(this,a,b,c,d)}function bf(a,b,c,d){Ma.call(this,a,b,c,d)}function je(a,b,c,d){ya.call(this,a,b,c,d)}function cf(a,b,c,d){ya.call(this,a,b,c,d)}function cd(a,b,c,d){ya.call(this,a,b,c,d)}function Sa(a,b,c,d){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.blendMode=void 0!==d?d:2500;this.uuid=M.generateUUID();0>this.duration&&this.resetDuration()}function Gk(a){switch(a.toLowerCase()){case "scalar":case "double":case "float":case "number":case "integer":return bd;
case "vector":case "vector2":case "vector3":case "vector4":return cd;case "color":return af;case "quaternion":return je;case "bool":case "boolean":return $e;case "string":return cf}throw Error("THREE.KeyframeTrack: Unsupported typeName: "+a);}function Hk(a){if(void 0===a.type)throw Error("THREE.KeyframeTrack: track type undefined, can not parse");var b=Gk(a.type);if(void 0===a.times){var c=[],d=[];ka.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d}return void 0!==b.parse?b.parse(a):new b(a.name,
a.times,a.values,a.interpolation)}function rg(a,b,c){var d=this,e=!1,f=0,g=0,h=void 0,l=[];this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad()};this.itemError=function(a){if(void 0!==d.onError)d.onError(a)};this.resolveURL=function(a){return h?h(a):a};this.setURLModifier=function(a){h=
a;return this};this.addHandler=function(a,b){l.push(a,b);return this};this.removeHandler=function(a){a=l.indexOf(a);-1!==a&&l.splice(a,2);return this};this.getHandler=function(a){for(var b=0,c=l.length;b<c;b+=2){var d=l[b],e=l[b+1];d.global&&(d.lastIndex=0);if(d.test(a))return e}return null}}function V(a){this.manager=void 0!==a?a:fi;this.crossOrigin="anonymous";this.resourcePath=this.path="";this.requestHeader={}}function Ta(a){V.call(this,a)}function sg(a){V.call(this,a)}function tg(a){V.call(this,
a)}function df(a){V.call(this,a)}function dd(a){V.call(this,a)}function ef(a){V.call(this,a)}function ff(a){V.call(this,a)}function I(){this.type="Curve";this.arcLengthDivisions=200}function Na(a,b,c,d,e,f,g,h){I.call(this);this.type="EllipseCurve";this.aX=a||0;this.aY=b||0;this.xRadius=c||1;this.yRadius=d||1;this.aStartAngle=e||0;this.aEndAngle=f||2*Math.PI;this.aClockwise=g||!1;this.aRotation=h||0}function ed(a,b,c,d,e,f){Na.call(this,a,b,c,c,d,e,f);this.type="ArcCurve"}function ug(){var a=0,b=
0,c=0,d=0;return{initCatmullRom:function(e,f,g,h,l){e=l*(g-e);h=l*(h-f);a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},initNonuniformCatmullRom:function(e,f,g,h,l,m,k){e=((f-e)/l-(g-e)/(l+m)+(g-f)/m)*m;h=((g-f)/m-(h-f)/(m+k)+(h-g)/k)*m;a=f;b=e;c=-3*f+3*g-2*e-h;d=2*f-2*g+e+h},calc:function(e){var f=e*e;return a+b*e+c*f+d*f*e}}}function za(a,b,c,d){I.call(this);this.type="CatmullRomCurve3";this.points=a||[];this.closed=b||!1;this.curveType=c||"centripetal";this.tension=d||.5}function gi(a,b,c,d,e){b=.5*(d-
b);e=.5*(e-c);var f=a*a;return(2*c-2*d+b+e)*a*f+(-3*c+3*d-2*b-e)*f+b*a+c}function ke(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d}function le(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e}function Ya(a,b,c,d){I.call(this);this.type="CubicBezierCurve";this.v0=a||new t;this.v1=b||new t;this.v2=c||new t;this.v3=d||new t}function jb(a,b,c,d){I.call(this);this.type="CubicBezierCurve3";this.v0=a||new p;this.v1=b||new p;this.v2=c||new p;this.v3=d||new p}function Ea(a,b){I.call(this);
this.type="LineCurve";this.v1=a||new t;this.v2=b||new t}function Za(a,b){I.call(this);this.type="LineCurve3";this.v1=a||new p;this.v2=b||new p}function $a(a,b,c){I.call(this);this.type="QuadraticBezierCurve";this.v0=a||new t;this.v1=b||new t;this.v2=c||new t}function kb(a,b,c){I.call(this);this.type="QuadraticBezierCurve3";this.v0=a||new p;this.v1=b||new p;this.v2=c||new p}function ab(a){I.call(this);this.type="SplineCurve";this.points=a||[]}function wb(){I.call(this);this.type="CurvePath";this.curves=
[];this.autoClose=!1}function bb(a){wb.call(this);this.type="Path";this.currentPoint=new t;a&&this.setFromPoints(a)}function Ob(a){bb.call(this,a);this.uuid=M.generateUUID();this.type="Shape";this.holes=[]}function W(a,b){y.call(this);this.type="Light";this.color=new D(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0}function gf(a,b,c){W.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(y.DefaultUp);this.updateMatrix();this.groundColor=new D(b)}function lb(a){this.camera=
a;this.bias=0;this.radius=1;this.mapSize=new t(512,512);this.mapPass=this.map=null;this.matrix=new O;this._frustum=new Gc;this._frameExtents=new t(1,1);this._viewportCount=1;this._viewports=[new fa(0,0,1,1)]}function hf(){lb.call(this,new S(50,1,.5,500))}function jf(a,b,c,d,e,f){W.call(this,a,b);this.type="SpotLight";this.position.copy(y.DefaultUp);this.updateMatrix();this.target=new y;Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(a){this.intensity=
a/Math.PI}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new hf}function vg(){lb.call(this,new S(90,1,.5,500));this._frameExtents=new t(4,2);this._viewportCount=6;this._viewports=[new fa(2,1,1,1),new fa(0,1,1,1),new fa(3,1,1,1),new fa(1,1,1,1),new fa(3,0,1,1),new fa(1,0,1,1)];this._cubeDirections=[new p(1,0,0),new p(-1,0,0),new p(0,0,1),new p(0,0,-1),new p(0,1,0),new p(0,-1,0)];this._cubeUps=[new p(0,1,0),new p(0,
1,0),new p(0,1,0),new p(0,1,0),new p(0,0,1),new p(0,0,-1)]}function kf(a,b,c,d){W.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function(){return 4*this.intensity*Math.PI},set:function(a){this.intensity=a/(4*Math.PI)}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new vg}function fd(a,b,c,d,e,f){fb.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=void 0!==a?a:-1;this.right=void 0!==b?b:1;this.top=void 0!==c?c:1;this.bottom=
void 0!==d?d:-1;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix()}function lf(){lb.call(this,new fd(-5,5,5,-5,.5,500))}function mf(a,b){W.call(this,a,b);this.type="DirectionalLight";this.position.copy(y.DefaultUp);this.updateMatrix();this.target=new y;this.shadow=new lf}function nf(a,b){W.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0}function of(a,b,c,d){W.call(this,a,b);this.type="RectAreaLight";this.width=void 0!==c?c:10;this.height=void 0!==d?d:
10}function pf(){this.coefficients=[];for(var a=0;9>a;a++)this.coefficients.push(new p)}function Ua(a,b){W.call(this,void 0,b);this.type="LightProbe";this.sh=void 0!==a?a:new pf}function qf(a){V.call(this,a);this.textures={}}function me(){E.call(this);this.type="InstancedBufferGeometry";this.instanceCount=Infinity}function rf(a,b,c,d){"number"===typeof c&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));F.call(this,a,b,c);this.meshPerAttribute=
d||1}function sf(a){V.call(this,a)}function tf(a){V.call(this,a)}function wg(a){"undefined"===typeof createImageBitmap&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");"undefined"===typeof fetch&&console.warn("THREE.ImageBitmapLoader: fetch() not supported.");V.call(this,a);this.options=void 0}function xg(){this.type="ShapePath";this.color=new D;this.subPaths=[];this.currentPath=null}function yg(a){this.type="Font";this.data=a}function zg(a){V.call(this,a)}function uf(a){V.call(this,
a)}function Ag(a,b,c){Ua.call(this,void 0,c);a=(new D).set(a);c=(new D).set(b);b=new p(a.r,a.g,a.b);a=new p(c.r,c.g,c.b);c=Math.sqrt(Math.PI);var d=c*Math.sqrt(.75);this.sh.coefficients[0].copy(b).add(a).multiplyScalar(c);this.sh.coefficients[1].copy(b).sub(a).multiplyScalar(d)}function Bg(a,b){Ua.call(this,void 0,b);a=(new D).set(a);this.sh.coefficients[0].set(a.r,a.g,a.b).multiplyScalar(2*Math.sqrt(Math.PI))}function hi(){this.type="StereoCamera";this.aspect=1;this.eyeSep=.064;this.cameraL=new S;
this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new S;this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1;this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}function Cg(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1}function Dg(){y.call(this);this.type="AudioListener";this.context=Eg.getContext();this.gain=this.context.createGain();this.gain.connect(this.context.destination);
this.filter=null;this.timeDelta=0;this._clock=new Cg}function gd(a){y.call(this);this.type="Audio";this.listener=a;this.context=a.context;this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.buffer=null;this.detune=0;this.loop=!1;this.offset=this.loopEnd=this.loopStart=0;this.duration=void 0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this._progress=this._startedAt=0;this.filters=[]}function Fg(a){gd.call(this,a);this.panner=
this.context.createPanner();this.panner.panningModel="HRTF";this.panner.connect(this.gain)}function Gg(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser)}function Hg(a,b,c){this.binding=a;this.valueSize=c;switch(b){case "quaternion":a=this._slerp;b=this._slerpAdditive;var d=this._setAdditiveIdentityQuaternion;this.buffer=new Float64Array(6*c);this._workIndex=5;break;case "string":case "bool":b=
a=this._select;d=this._setAdditiveIdentityOther;this.buffer=Array(5*c);break;default:a=this._lerp,b=this._lerpAdditive,d=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(5*c)}this._mixBufferRegion=a;this._mixBufferRegionAdditive=b;this._setIdentity=d;this._origIndex=3;this._addIndex=4;this.referenceCount=this.useCount=this.cumulativeWeightAdditive=this.cumulativeWeight=0}function ii(a,b,c){c=c||Aa.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c)}function Aa(a,b,
c){this.path=b;this.parsedPath=c||Aa.parseTrackName(b);this.node=Aa.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a}function ji(){this.uuid=M.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var a={};this._indicesByUUID=a;for(var b=0,c=arguments.length;b!==c;++b)a[arguments[b].uuid]=b;this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var d=this;this.stats={objects:{get total(){return d._objects.length},get inUse(){return this.total-
d.nCachedObjects_}},get bindingsPerObject(){return d._bindings.length}}}function ki(a,b,c,d){this._mixer=a;this._clip=b;this._localRoot=c||null;this.blendMode=d||b.blendMode;a=b.tracks;b=a.length;c=Array(b);d={endingStart:2400,endingEnd:2400};for(var e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=
2201;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0}function Ig(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1}function vf(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a}function Jg(a,b,c){sb.call(this,
a,b);this.meshPerAttribute=c||1}function Kg(a,b,c,d){this.ray=new Xb(a,b);this.near=c||0;this.far=d||Infinity;this.camera=null;this.layers=new De;this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points}}})}function li(a,b){return a.distance-b.distance}function Lg(a,b,c,d){a.layers.test(b.layers)&&a.raycast(b,
c);if(!0===d){a=a.children;d=0;for(var e=a.length;d<e;d++)Lg(a[d],b,c,!0)}}function mi(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this}function ni(a,b,c){this.radius=void 0!==a?a:1;this.theta=void 0!==b?b:0;this.y=void 0!==c?c:0;return this}function Mg(a,b){this.min=void 0!==a?a:new t(Infinity,Infinity);this.max=void 0!==b?b:new t(-Infinity,-Infinity)}function Ng(a,b){this.start=void 0!==a?a:new p;this.end=void 0!==b?b:new p}function ne(a){y.call(this);
this.material=a;this.render=function(){};this.hasUvs=this.hasColors=this.hasNormals=this.hasPositions=!1;this.uvArray=this.colorArray=this.normalArray=this.positionArray=null;this.count=0}function hd(a,b){y.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=b;a=new E;b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(var c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,
Math.cos(f),Math.sin(f),1)}a.setAttribute("position",new B(b,3));b=new ca({fog:!1,toneMapped:!1});this.cone=new la(a,b);this.add(this.cone);this.update()}function oi(a){var b=[];a&&a.isBone&&b.push(a);for(var c=0;c<a.children.length;c++)b.push.apply(b,oi(a.children[c]));return b}function qc(a){for(var b=oi(a),c=new E,d=[],e=[],f=new D(0,0,1),g=new D(0,1,0),h=0;h<b.length;h++){var l=b[h];l.parent&&l.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.setAttribute("position",
new B(d,3));c.setAttribute("color",new B(e,3));d=new ca({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});la.call(this,c,d);this.type="SkeletonHelper";this.root=a;this.bones=b;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1}function id(a,b,c){this.light=a;this.light.updateMatrixWorld();this.color=c;a=new fc(b,4,2);b=new Pa({wireframe:!0,fog:!1,toneMapped:!1});ha.call(this,a,b);this.type="PointLightHelper";this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;this.update()}
function jd(a,b,c){y.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;a=new cc(b);a.rotateY(.5*Math.PI);this.material=new Pa({wireframe:!0,fog:!1,toneMapped:!1});void 0===this.color&&(this.material.vertexColors=!0);b=a.getAttribute("position");b=new Float32Array(3*b.count);a.setAttribute("color",new F(b,3));this.add(new ha(a,this.material));this.update()}function wf(a,b,c,d){a=a||10;b=b||10;c=new D(void 0!==c?c:4473924);d=new D(void 0!==
d?d:8947848);var e=b/2,f=a/b,g=a/2;a=[];for(var h=[],l=0,m=0,k=-g;l<=b;l++,k+=f){a.push(-g,0,k,g,0,k);a.push(k,0,-g,k,0,g);var n=l===e?c:d;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3;n.toArray(h,m);m+=3}b=new E;b.setAttribute("position",new B(a,3));b.setAttribute("color",new B(h,3));c=new ca({vertexColors:!0,toneMapped:!1});la.call(this,b,c);this.type="GridHelper"}function xf(a,b,c,d,e,f){a=a||10;b=b||16;c=c||8;d=d||64;e=new D(void 0!==e?e:4473924);f=new D(void 0!==f?f:8947848);var g=
[],h=[],l;for(l=0;l<=b;l++){var m=l/b*2*Math.PI;var k=Math.sin(m)*a;m=Math.cos(m)*a;g.push(0,0,0);g.push(k,0,m);var n=l&1?e:f;h.push(n.r,n.g,n.b);h.push(n.r,n.g,n.b)}for(l=0;l<=c;l++){n=l&1?e:f;var v=a-a/c*l;for(b=0;b<d;b++)m=b/d*2*Math.PI,k=Math.sin(m)*v,m=Math.cos(m)*v,g.push(k,0,m),h.push(n.r,n.g,n.b),m=(b+1)/d*2*Math.PI,k=Math.sin(m)*v,m=Math.cos(m)*v,g.push(k,0,m),h.push(n.r,n.g,n.b)}a=new E;a.setAttribute("position",new B(g,3));a.setAttribute("color",new B(h,3));g=new ca({vertexColors:!0,toneMapped:!1});
la.call(this,a,g);this.type="PolarGridHelper"}function kd(a,b,c){y.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.color=c;void 0===b&&(b=1);a=new E;a.setAttribute("position",new B([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));b=new ca({fog:!1,toneMapped:!1});this.lightPlane=new La(a,b);this.add(this.lightPlane);a=new E;a.setAttribute("position",new B([0,0,0,0,0,1],3));this.targetLine=new La(a,b);this.add(this.targetLine);this.update()}function oe(a){function b(a,
b,d){c(a,d);c(b,d)}function c(a,b){f.push(0,0,0);g.push(b.r,b.g,b.b);void 0===h[a]&&(h[a]=[]);h[a].push(f.length/3-1)}var d=new E,e=new ca({color:16777215,vertexColors:!0,toneMapped:!1}),f=[],g=[],h={},l=new D(16755200),m=new D(16711680),k=new D(43775),n=new D(16777215),v=new D(3355443);b("n1","n2",l);b("n2","n4",l);b("n4","n3",l);b("n3","n1",l);b("f1","f2",l);b("f2","f4",l);b("f4","f3",l);b("f3","f1",l);b("n1","f1",l);b("n2","f2",l);b("n3","f3",l);b("n4","f4",l);b("p","n1",m);b("p","n2",m);b("p",
"n3",m);b("p","n4",m);b("u1","u2",k);b("u2","u3",k);b("u3","u1",k);b("c","t",n);b("p","c",v);b("cn1","cn2",v);b("cn3","cn4",v);b("cf1","cf2",v);b("cf3","cf4",v);d.setAttribute("position",new B(f,3));d.setAttribute("color",new B(g,3));la.call(this,d,e);this.type="CameraHelper";this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=h;this.update()}function Q(a,b,c,d,e,f,g){yf.set(e,f,g).unproject(d);a=b[a];
if(void 0!==a)for(c=c.getAttribute("position"),b=0,d=a.length;b<d;b++)c.setXYZ(a[b],yf.x,yf.y,yf.z)}function xb(a,b){this.object=a;void 0===b&&(b=16776960);a=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new Float32Array(24),d=new E;d.setIndex(new F(a,1));d.setAttribute("position",new F(c,3));la.call(this,d,new ca({color:b,toneMapped:!1}));this.type="BoxHelper";this.matrixAutoUpdate=!1;this.update()}function pe(a,b){this.type="Box3Helper";this.box=a;b=b||16776960;a=new Uint16Array([0,
1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]);var c=new E;c.setIndex(new F(a,1));c.setAttribute("position",new B([1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],3));la.call(this,c,new ca({color:b,toneMapped:!1}));this.type="Box3Helper";this.geometry.computeBoundingSphere()}function qe(a,b,c){this.plane=a;this.size=void 0===b?1:b;a=void 0!==c?c:16776960;b=new E;b.setAttribute("position",new B([1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],3));b.computeBoundingSphere();
La.call(this,b,new ca({color:a,toneMapped:!1}));this.type="PlaneHelper";b=new E;b.setAttribute("position",new B([1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],3));b.computeBoundingSphere();this.add(new ha(b,new Pa({color:a,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}function yb(a,b,c,d,e,f){y.call(this);this.type="ArrowHelper";void 0===a&&(a=new p(0,0,1));void 0===b&&(b=new p(0,0,0));void 0===c&&(c=1);void 0===d&&(d=16776960);void 0===e&&(e=.2*c);void 0===f&&(f=.2*e);void 0===zf&&(zf=new E,
zf.setAttribute("position",new B([0,0,0,0,1,0],3)),Og=new ub(0,.5,1,5,1),Og.translate(0,-.5,0));this.position.copy(b);this.line=new La(zf,new ca({color:d,toneMapped:!1}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new ha(Og,new Pa({color:d,toneMapped:!1}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(a);this.setLength(c,e,f)}function re(a){a=a||1;var b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a];a=new E;a.setAttribute("position",new B(b,3));a.setAttribute("color",
new B([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3));b=new ca({vertexColors:!0,toneMapped:!1});la.call(this,a,b);this.type="AxesHelper"}function Pg(a){this._renderer=a;this._pingPongRenderTarget=null;a=new Float32Array(20);var b=new p(0,1,0);a=new vb({defines:{n:20},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:b},inputEncoding:{value:mb[3E3]},outputEncoding:{value:mb[3E3]}},vertexShader:Qg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform int samples;\nuniform float weights[n];\nuniform bool latitudinal;\nuniform float dTheta;\nuniform float mipInt;\nuniform vec3 poleAxis;\n\n"+
Rg()+"\n\n#define ENVMAP_TYPE_CUBE_UV\n#include <cube_uv_reflection_fragment>\n\nvec3 getSample(float theta, vec3 axis) {\n\tfloat cosTheta = cos(theta);\n\t// Rodrigues' axis-angle rotation\n\tvec3 sampleDirection = vOutputDirection * cosTheta\n\t\t+ cross(axis, vOutputDirection) * sin(theta)\n\t\t+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);\n\treturn bilinearCubeUV(envMap, sampleDirection, mipInt);\n}\n\nvoid main() {\n\tvec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);\n\tif (all(equal(axis, vec3(0.0))))\n\t\taxis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);\n\taxis = normalize(axis);\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb += weights[0] * getSample(0.0, axis);\n\tfor (int i = 1; i < n; i++) {\n\t\tif (i >= samples)\n\t\t\tbreak;\n\t\tfloat theta = dTheta * float(i);\n\t\tgl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);\n\t\tgl_FragColor.rgb += weights[i] * getSample(theta, axis);\n\t}\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="SphericalGaussianBlur";this._blurMaterial=a;this._cubemapShader=this._equirectShader=null;this._compileMaterial(this._blurMaterial)}function pi(a){a=new Ia(3*nb,3*nb,a);a.texture.mapping=306;a.texture.name="PMREM.cubeUv";a.scissorTest=!0;return a}function Sg(a,b,c,d,e){a.viewport.set(b,c,d,e);a.scissor.set(b,c,d,e)}function qi(){var a=new t(1,1);a=new vb({uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:mb[3E3]},outputEncoding:{value:mb[3E3]}},
vertexShader:Qg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform sampler2D envMap;\nuniform vec2 texelSize;\n\n"+Rg()+"\n\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tvec3 outputDirection = normalize(vOutputDirection);\n\tvec2 uv;\n\tuv.y = asin(clamp(outputDirection.y, -1.0, 1.0)) * RECIPROCAL_PI + 0.5;\n\tuv.x = atan(outputDirection.z, outputDirection.x) * RECIPROCAL_PI2 + 0.5;\n\tvec2 f = fract(uv / texelSize - 0.5);\n\tuv -= f * texelSize;\n\tvec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x += texelSize.x;\n\tvec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.y += texelSize.y;\n\tvec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tuv.x -= texelSize.x;\n\tvec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n\tvec3 tm = mix(tl, tr, f.x);\n\tvec3 bm = mix(bl, br, f.x);\n\tgl_FragColor.rgb = mix(tm, bm, f.y);\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="EquirectangularToCubeUV";return a}function ri(){var a=new vb({uniforms:{envMap:{value:null},inputEncoding:{value:mb[3E3]},outputEncoding:{value:mb[3E3]}},vertexShader:Qg(),fragmentShader:"\nprecision mediump float;\nprecision mediump int;\nvarying vec3 vOutputDirection;\nuniform samplerCube envMap;\n\n"+Rg()+"\n\nvoid main() {\n\tgl_FragColor = vec4(0.0);\n\tgl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;\n\tgl_FragColor = linearToOutputTexel(gl_FragColor);\n}\n\t\t",
blending:0,depthTest:!1,depthWrite:!1});a.type="CubemapToCubeUV";return a}function Qg(){return"\nprecision mediump float;\nprecision mediump int;\nattribute vec3 position;\nattribute vec2 uv;\nattribute float faceIndex;\nvarying vec3 vOutputDirection;\n\n// RH coordinate system; PMREM face-indexing convention\nvec3 getDirection(vec2 uv, float face) {\n\tuv = 2.0 * uv - 1.0;\n\tvec3 direction = vec3(uv, 1.0);\n\tif (face == 0.0) {\n\t\tdirection = direction.zyx; // ( 1, v, u ) pos x\n\t} else if (face == 1.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.xz *= -1.0; // ( -u, 1, -v ) pos y\n\t} else if (face == 2.0) {\n\t\tdirection.x *= -1.0; // ( -u, v, 1 ) pos z\n\t} else if (face == 3.0) {\n\t\tdirection = direction.zyx;\n\t\tdirection.xz *= -1.0; // ( -1, v, -u ) neg x\n\t} else if (face == 4.0) {\n\t\tdirection = direction.xzy;\n\t\tdirection.xy *= -1.0; // ( -u, -1, v ) neg y\n\t} else if (face == 5.0) {\n\t\tdirection.z *= -1.0; // ( u, v, -1 ) neg z\n\t}\n\treturn direction;\n}\n\nvoid main() {\n\tvOutputDirection = getDirection(uv, faceIndex);\n\tgl_Position = vec4( position, 1.0 );\n}\n\t"}
function Rg(){return"\nuniform int inputEncoding;\nuniform int outputEncoding;\n\n#include <encodings_pars_fragment>\n\nvec4 inputTexelToLinear(vec4 value){\n\tif(inputEncoding == 0){\n\t\treturn value;\n\t}else if(inputEncoding == 1){\n\t\treturn sRGBToLinear(value);\n\t}else if(inputEncoding == 2){\n\t\treturn RGBEToLinear(value);\n\t}else if(inputEncoding == 3){\n\t\treturn RGBMToLinear(value, 7.0);\n\t}else if(inputEncoding == 4){\n\t\treturn RGBMToLinear(value, 16.0);\n\t}else if(inputEncoding == 5){\n\t\treturn RGBDToLinear(value, 256.0);\n\t}else{\n\t\treturn GammaToLinear(value, 2.2);\n\t}\n}\n\nvec4 linearToOutputTexel(vec4 value){\n\tif(outputEncoding == 0){\n\t\treturn value;\n\t}else if(outputEncoding == 1){\n\t\treturn LinearTosRGB(value);\n\t}else if(outputEncoding == 2){\n\t\treturn LinearToRGBE(value);\n\t}else if(outputEncoding == 3){\n\t\treturn LinearToRGBM(value, 7.0);\n\t}else if(outputEncoding == 4){\n\t\treturn LinearToRGBM(value, 16.0);\n\t}else if(outputEncoding == 5){\n\t\treturn LinearToRGBD(value, 256.0);\n\t}else{\n\t\treturn LinearToGamma(value, 2.2);\n\t}\n}\n\nvec4 envMapTexelToLinear(vec4 color) {\n\treturn inputTexelToLinear(color);\n}\n\t"}
function si(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");za.call(this,a);this.type="catmullrom";this.closed=!0}function ti(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");za.call(this,a);this.type="catmullrom"}function Tg(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");za.call(this,a);this.type="catmullrom"}void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,
-52));void 0===Number.isInteger&&(Number.isInteger=function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a});void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a});!1==="name"in Function.prototype&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});void 0===Object.assign&&(Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=
Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b});Object.assign(Fa.prototype,{addEventListener:function(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b)},hasEventListener:function(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)},removeEventListener:function(a,
b){void 0!==this._listeners&&(a=this._listeners[a],void 0!==a&&(b=a.indexOf(b),-1!==b&&a.splice(b,1)))},dispatchEvent:function(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;b=b.slice(0);for(var c=0,d=b.length;c<d;c++)b[c].call(this,a)}}}});for(var xa=[],se=0;256>se;se++)xa[se]=(16>se?"0":"")+se.toString(16);var M={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a=4294967295*Math.random()|0,b=4294967295*Math.random()|0,c=4294967295*Math.random()|
0,d=4294967295*Math.random()|0;return(xa[a&255]+xa[a>>8&255]+xa[a>>16&255]+xa[a>>24&255]+"-"+xa[b&255]+xa[b>>8&255]+"-"+xa[b>>16&15|64]+xa[b>>24&255]+"-"+xa[c&63|128]+xa[c>>8&255]+"-"+xa[c>>16&255]+xa[c>>24&255]+xa[d&255]+xa[d>>8&255]+xa[d>>16&255]+xa[d>>24&255]).toUpperCase()},clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,
b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a)},smootherstep:function(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10)},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*M.DEG2RAD},radToDeg:function(a){return a*M.RAD2DEG},isPowerOfTwo:function(a){return 0===(a&a-1)&&0!==a},ceilPowerOfTwo:function(a){return Math.pow(2,
Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))},setQuaternionFromProperEuler:function(a,b,c,d,e){var f=Math.cos,g=Math.sin,h=f(c/2);c=g(c/2);var l=f((b+d)/2),m=g((b+d)/2),k=f((b-d)/2),n=g((b-d)/2);f=f((d-b)/2);b=g((d-b)/2);switch(e){case "XYX":a.set(h*m,c*k,c*n,h*l);break;case "YZY":a.set(c*n,h*m,c*k,h*l);break;case "ZXZ":a.set(c*k,c*n,h*m,h*l);break;case "XZX":a.set(h*m,c*b,c*f,h*l);break;case "YXY":a.set(c*f,h*m,c*b,h*l);break;case "ZYZ":a.set(c*
b,c*f,h*m,h*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+e)}}};Object.defineProperties(t.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(t.prototype,{isVector2:!0,set:function(a,b){this.x=a;this.y=b;return this},setScalar:function(a){this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=
a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){this.x=a.x;this.y=a.y;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this},addScalar:function(a){this.x+=a;this.y+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this},subScalar:function(a){this.x-=a;this.y-=a;return this},
subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},multiply:function(a){this.x*=a.x;this.y*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divide:function(a){this.x/=a.x;this.y/=a.y;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){var b=this.x,c=this.y;a=a.elements;this.x=a[0]*b+a[3]*c+a[6];this.y=a[1]*b+a[4]*c+a[7];return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this},
max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);
return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this},negate:function(){this.x=-this.x;this.y=-this.y;return this},dot:function(a){return this.x*a.x+this.y*a.y},cross:function(a){return this.x*a.y-this.y*a.x},lengthSq:function(){return this.x*
this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){return Math.atan2(-this.y,-this.x)+Math.PI},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-
a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a},fromBufferAttribute:function(a,b,c){void 0!==
c&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);return this},rotateAround:function(a,b){var c=Math.cos(b);b=Math.sin(b);var d=this.x-a.x,e=this.y-a.y;this.x=d*c-e*b+a.x;this.y=d*b+e*c+a.y;return this},random:function(){this.x=Math.random();this.y=Math.random();return this}});Object.assign(va.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,l){var m=this.elements;m[0]=a;m[1]=d;m[2]=g;m[3]=b;m[4]=e;m[5]=h;m[6]=c;m[7]=f;m[8]=
l;return this},identity:function(){this.set(1,0,0,0,1,0,0,0,1);return this},clone:function(){return(new this.constructor).fromArray(this.elements)},copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];return this},extractBasis:function(a,b,c){a.setFromMatrix3Column(this,0);b.setFromMatrix3Column(this,1);c.setFromMatrix3Column(this,2);return this},setFromMatrix4:function(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],
a[5],a[9],a[2],a[6],a[10]);return this},multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[3],f=c[6],g=c[1],h=c[4],l=c[7],m=c[2],k=c[5];c=c[8];var n=d[0],v=d[3],p=d[6],q=d[1],u=d[4],t=d[7],z=d[2],w=d[5];d=d[8];b[0]=a*n+e*q+f*z;b[3]=a*v+e*u+f*w;b[6]=a*p+e*t+f*d;b[1]=g*n+h*q+l*z;b[4]=g*v+h*u+l*w;b[7]=g*p+h*t+l*d;b[2]=m*n+k*q+c*z;b[5]=m*v+k*
u+c*w;b[8]=m*p+k*t+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this},determinant:function(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],l=a[7];a=a[8];return b*f*a-b*g*l-c*e*a+c*g*h+d*e*l-d*f*h},getInverse:function(a,b){void 0!==b&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");var c=a.elements;a=this.elements;b=c[0];var d=c[1],
e=c[2],f=c[3],g=c[4],h=c[5],l=c[6],m=c[7];c=c[8];var k=c*g-h*m,n=h*l-c*f,p=m*f-g*l,r=b*k+d*n+e*p;if(0===r)return this.set(0,0,0,0,0,0,0,0,0);r=1/r;a[0]=k*r;a[1]=(e*m-c*d)*r;a[2]=(h*d-e*g)*r;a[3]=n*r;a[4]=(c*b-e*l)*r;a[5]=(e*f-h*b)*r;a[6]=p*r;a[7]=(d*l-m*b)*r;a[8]=(g*b-d*f)*r;return this},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[3];a[3]=b;b=a[2];a[2]=a[6];a[6]=b;b=a[5];a[5]=a[7];a[7]=b;return this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},
transposeIntoArray:function(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this},setUvTransform:function(a,b,c,d,e,f,g){var h=Math.cos(e);e=Math.sin(e);this.set(c*h,c*e,-c*(h*f+e*g)+f+a,-d*e,d*h,-d*(-e*f+h*g)+g+b,0,0,1)},scale:function(a,b){var c=this.elements;c[0]*=a;c[3]*=a;c[6]*=a;c[1]*=b;c[4]*=b;c[7]*=b;return this},rotate:function(a){var b=Math.cos(a);a=Math.sin(a);var c=this.elements,d=c[0],e=c[3],f=c[6],g=c[1],h=c[4],
l=c[7];c[0]=b*d+a*g;c[3]=b*e+a*h;c[6]=b*f+a*l;c[1]=-a*d+b*g;c[4]=-a*e+b*h;c[7]=-a*f+b*l;return this},translate:function(a,b){var c=this.elements;c[0]+=a*c[2];c[3]+=a*c[5];c[6]+=a*c[8];c[1]+=b*c[2];c[4]+=b*c[5];c[7]+=b*c[8];return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;9>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;9>c;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=
this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a}});var ld,Pb={getDataURL:function(a){if("undefined"==typeof HTMLCanvasElement)return a.src;if(!(a instanceof HTMLCanvasElement)){void 0===ld&&(ld=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"));ld.width=a.width;ld.height=a.height;var b=ld.getContext("2d");a instanceof ImageData?b.putImageData(a,0,0):b.drawImage(a,0,0,a.width,a.height);a=ld}return 2048<
a.width||2048<a.height?a.toDataURL("image/jpeg",.6):a.toDataURL("image/png")}},fj=0;Y.DEFAULT_IMAGE=void 0;Y.DEFAULT_MAPPING=300;Y.prototype=Object.assign(Object.create(Fa.prototype),{constructor:Y,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=a.name;this.image=a.image;this.mipmaps=a.mipmaps.slice(0);
this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.internalFormat=a.internalFormat;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.center.copy(a.center);this.rotation=a.rotation;this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrix.copy(a.matrix);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=
a.unpackAlignment;this.encoding=a.encoding;return this},toJSON:function(a){var b=void 0===a||"string"===typeof a;if(!b&&void 0!==a.textures[this.uuid])return a.textures[this.uuid];var c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,
minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(void 0!==this.image){var d=this.image;void 0===d.uuid&&(d.uuid=M.generateUUID());if(!b&&void 0===a.images[d.uuid]){if(Array.isArray(d)){var e=[];for(var f=0,g=d.length;f<g;f++)e.push(Pb.getDataURL(d[f]))}else e=Pb.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e}}c.image=d.uuid}b||(a.textures[this.uuid]=c);return c},dispose:function(){this.dispatchEvent({type:"dispose"})},
transformUv:function(a){if(300!==this.mapping)return a;a.applyMatrix3(this.matrix);if(0>a.x||1<a.x)switch(this.wrapS){case 1E3:a.x-=Math.floor(a.x);break;case 1001:a.x=0>a.x?0:1;break;case 1002:a.x=1===Math.abs(Math.floor(a.x)%2)?Math.ceil(a.x)-a.x:a.x-Math.floor(a.x)}if(0>a.y||1<a.y)switch(this.wrapT){case 1E3:a.y-=Math.floor(a.y);break;case 1001:a.y=0>a.y?0:1;break;case 1002:a.y=1===Math.abs(Math.floor(a.y)%2)?Math.ceil(a.y)-a.y:a.y-Math.floor(a.y)}this.flipY&&(a.y=1-a.y);return a}});Object.defineProperty(Y.prototype,
"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.defineProperties(fa.prototype,{width:{get:function(){return this.z},set:function(a){this.z=a}},height:{get:function(){return this.w},set:function(a){this.w=a}}});Object.assign(fa.prototype,{isVector4:!0,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},setScalar:function(a){this.w=this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=
a;return this},setW:function(a){this.w=a;return this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){this.x=
a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addScaledVector:function(a,b){this.x+=a.x*
b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=
a;this.w*=a;return this},applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this},setAxisAngleFromRotationMatrix:function(a){a=
a.elements;var b=a[0];var c=a[4];var d=a[8],e=a[1],f=a[5],g=a[9];var h=a[2];var l=a[6];var m=a[10];if(.01>Math.abs(c-e)&&.01>Math.abs(d-h)&&.01>Math.abs(g-l)){if(.1>Math.abs(c+e)&&.1>Math.abs(d+h)&&.1>Math.abs(g+l)&&.1>Math.abs(b+f+m-3))return this.set(1,0,0,0),this;a=Math.PI;b=(b+1)/2;f=(f+1)/2;m=(m+1)/2;c=(c+e)/4;d=(d+h)/4;g=(g+l)/4;b>f&&b>m?.01>b?(l=0,c=h=.707106781):(l=Math.sqrt(b),h=c/l,c=d/l):f>m?.01>f?(l=.707106781,h=0,c=.707106781):(h=Math.sqrt(f),l=c/h,c=g/h):.01>m?(h=l=.707106781,c=0):(c=
Math.sqrt(m),l=d/c,h=g/c);this.set(l,h,c,a);return this}a=Math.sqrt((l-g)*(l-g)+(d-h)*(d-h)+(e-c)*(e-c));.001>Math.abs(a)&&(a=1);this.x=(l-g)/a;this.y=(d-h)/a;this.z=(e-c)/a;this.w=Math.acos((b+f+m-1)/2);return this},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this},clamp:function(a,
b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));this.w=Math.max(a,Math.min(b,this.w));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=
Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);
this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+
Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){void 0===
b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);this.w=a.getW(b);return this},random:function(){this.x=Math.random();this.y=Math.random();this.z=Math.random();this.w=Math.random();
return this}});Ia.prototype=Object.assign(Object.create(Fa.prototype),{constructor:Ia,isWebGLRenderTarget:!0,setSize:function(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.texture.image.width=a,this.texture.image.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=
a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Yf.prototype=Object.assign(Object.create(Ia.prototype),{constructor:Yf,isWebGLMultisampleRenderTarget:!0,copy:function(a){Ia.prototype.copy.call(this,a);this.samples=a.samples;return this}});Object.assign(na,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){var h=c[d+0],l=c[d+1],m=c[d+2];c=c[d+3];d=e[f+0];var k=
e[f+1],n=e[f+2];e=e[f+3];if(c!==e||h!==d||l!==k||m!==n){f=1-g;var p=h*d+l*k+m*n+c*e,r=0<=p?1:-1,q=1-p*p;q>Number.EPSILON&&(q=Math.sqrt(q),p=Math.atan2(q,p*r),f=Math.sin(f*p)/q,g=Math.sin(g*p)/q);r*=g;h=h*f+d*r;l=l*f+k*r;m=m*f+n*r;c=c*f+e*r;f===1-g&&(g=1/Math.sqrt(h*h+l*l+m*m+c*c),h*=g,l*=g,m*=g,c*=g)}a[b]=h;a[b+1]=l;a[b+2]=m;a[b+3]=c},multiplyQuaternionsFlat:function(a,b,c,d,e,f){var g=c[d],h=c[d+1],l=c[d+2];c=c[d+3];d=e[f];var m=e[f+1],k=e[f+2];e=e[f+3];a[b]=g*e+c*d+h*k-l*m;a[b+1]=h*e+c*m+l*d-g*
k;a[b+2]=l*e+c*k+g*m-h*d;a[b+3]=c*e-g*d-h*m-l*k;return a}});Object.defineProperties(na.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this._onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a;this._onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this._onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a;this._onChangeCallback()}}});Object.assign(na.prototype,{isQuaternion:!0,set:function(a,
b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this._onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this._onChangeCallback();return this},setFromEuler:function(a,b){if(!a||!a.isEuler)throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");var c=a._x,d=a._y,e=a._z;a=a.order;var f=Math.cos,g=Math.sin,h=f(c/2),l=f(d/2);
f=f(e/2);c=g(c/2);d=g(d/2);e=g(e/2);switch(a){case "XYZ":this._x=c*l*f+h*d*e;this._y=h*d*f-c*l*e;this._z=h*l*e+c*d*f;this._w=h*l*f-c*d*e;break;case "YXZ":this._x=c*l*f+h*d*e;this._y=h*d*f-c*l*e;this._z=h*l*e-c*d*f;this._w=h*l*f+c*d*e;break;case "ZXY":this._x=c*l*f-h*d*e;this._y=h*d*f+c*l*e;this._z=h*l*e+c*d*f;this._w=h*l*f-c*d*e;break;case "ZYX":this._x=c*l*f-h*d*e;this._y=h*d*f+c*l*e;this._z=h*l*e-c*d*f;this._w=h*l*f+c*d*e;break;case "YZX":this._x=c*l*f+h*d*e;this._y=h*d*f+c*l*e;this._z=h*l*e-c*
d*f;this._w=h*l*f-c*d*e;break;case "XZY":this._x=c*l*f-h*d*e;this._y=h*d*f-c*l*e;this._z=h*l*e+c*d*f;this._w=h*l*f+c*d*e;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}!1!==b&&this._onChangeCallback();return this},setFromAxisAngle:function(a,b){b/=2;var c=Math.sin(b);this._x=a.x*c;this._y=a.y*c;this._z=a.z*c;this._w=Math.cos(b);this._onChangeCallback();return this},setFromRotationMatrix:function(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],
f=b[5],g=b[9],h=b[2],l=b[6];b=b[10];var m=c+f+b;0<m?(c=.5/Math.sqrt(m+1),this._w=.25/c,this._x=(l-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(l-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+l)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+l)/c,this._z=.25*c);this._onChangeCallback();return this},setFromUnitVectors:function(a,b){var c=a.dot(b)+1;1E-6>
c?(c=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0):(this._x=0,this._y=-a.z,this._z=a.y)):(this._x=a.y*b.z-a.z*b.y,this._y=a.z*b.x-a.x*b.z,this._z=a.x*b.y-a.y*b.x);this._w=c;return this.normalize()},angleTo:function(a){return 2*Math.acos(Math.abs(M.clamp(this.dot(a),-1,1)))},rotateTowards:function(a,b){var c=this.angleTo(a);if(0===c)return this;this.slerp(a,Math.min(1,b/c));return this},inverse:function(){return this.conjugate()},conjugate:function(){this._x*=-1;this._y*=-1;this._z*=
-1;this._onChangeCallback();return this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this._onChangeCallback();return this},multiply:function(a,
b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){var c=a._x,d=a._y,e=a._z;a=a._w;var f=b._x,g=b._y,h=b._z;b=b._w;this._x=c*b+a*f+d*h-e*g;this._y=d*b+a*g+e*f-c*h;this._z=e*b+a*h+c*g-d*f;this._w=a*b-c*f-d*g-e*h;this._onChangeCallback();return this},
slerp:function(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;a=1-g*g;if(a<=Number.EPSILON)return g=1-b,this._w=g*f+b*this._w,this._x=g*c+b*this._x,this._y=g*d+b*this._y,this._z=g*e+b*this._z,this.normalize(),this._onChangeCallback(),this;a=Math.sqrt(a);var h=Math.atan2(a,g);g=Math.sin((1-
b)*h)/a;b=Math.sin(b*h)/a;this._w=f*g+this._w*b;this._x=c*g+this._x*b;this._y=d*g+this._y*b;this._z=e*g+this._z*b;this._onChangeCallback();return this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this._onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a},
fromBufferAttribute:function(a,b){this._x=a.getX(b);this._y=a.getY(b);this._z=a.getZ(b);this._w=a.getW(b);return this},_onChange:function(a){this._onChangeCallback=a;return this},_onChangeCallback:function(){}});var Ug=new p,ui=new na;Object.assign(p.prototype,{isVector3:!0,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setScalar:function(a){this.z=this.y=this.x=a;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},
setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},add:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},addVectors:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addScaledVector:function(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this},sub:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;
return this},subScalar:function(a){this.x-=a;this.y-=a;this.z-=a;return this},subVectors:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},multiply:function(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},multiplyVectors:function(a,b){this.x=a.x*
b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},applyEuler:function(a){a&&a.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");return this.applyQuaternion(ui.setFromEuler(a))},applyAxisAngle:function(a,b){return this.applyQuaternion(ui.setFromAxisAngle(a,b))},applyMatrix3:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this},applyNormalMatrix:function(a){return this.applyMatrix3(a).normalize()},
applyMatrix4:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this},applyQuaternion:function(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,l=a*c+g*b-e*d,m=a*d+e*c-f*b;b=-e*b-f*c-g*d;this.x=h*a+b*-e+l*-g-m*-f;this.y=l*a+b*-f+m*-e-h*-g;this.z=m*a+b*-g+h*-f-l*-e;return this},project:function(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)},
unproject:function(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)},transformDirection:function(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize()},divide:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,
a.z);return this},max:function(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this},clamp:function(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this},clampScalar:function(a,b){this.x=Math.max(a,Math.min(b,this.x));this.y=Math.max(a,Math.min(b,this.y));this.z=Math.max(a,Math.min(b,this.z));return this},clampLength:function(a,b){var c=this.length();return this.divideScalar(c||
1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this},ceil:function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this},round:function(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this},roundToZero:function(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=
0>this.z?Math.ceil(this.z):Math.floor(this.z);return this},negate:function(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},
lerp:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this},lerpVectors:function(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a)},cross:function(a,b){return void 0!==b?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){var c=a.x,d=a.y;a=a.z;var e=b.x,f=b.y;b=b.z;this.x=d*b-a*f;this.y=a*e-c*b;this.z=c*f-d*e;return this},
projectOnVector:function(a){var b=a.lengthSq();if(0===b)return this.set(0,0,0);b=a.dot(this)/b;return this.copy(a).multiplyScalar(b)},projectOnPlane:function(a){Ug.copy(this).projectOnVector(a);return this.sub(Ug)},reflect:function(a){return this.sub(Ug.copy(a).multiplyScalar(2*this.dot(a)))},angleTo:function(a){var b=Math.sqrt(this.lengthSq()*a.lengthSq());if(0===b)return Math.PI/2;a=this.dot(a)/b;return Math.acos(M.clamp(a,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},
distanceToSquared:function(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)},setFromSphericalCoords:function(a,b,c){var d=Math.sin(b)*a;this.x=d*Math.sin(c);this.y=Math.cos(b)*a;this.z=d*Math.cos(c);return this},setFromCylindrical:function(a){return this.setFromCylindricalCoords(a.radius,a.theta,
a.y)},setFromCylindricalCoords:function(a,b,c){this.x=a*Math.sin(b);this.y=c;this.z=a*Math.cos(b);return this},setFromMatrixPosition:function(a){a=a.elements;this.x=a[12];this.y=a[13];this.z=a[14];return this},setFromMatrixScale:function(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,4*b)},setFromMatrix3Column:function(a,
b){return this.fromArray(a.elements,3*b)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a},fromBufferAttribute:function(a,b,c){void 0!==c&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");this.x=a.getX(b);this.y=a.getY(b);this.z=a.getZ(b);return this},
random:function(){this.x=Math.random();this.y=Math.random();this.z=Math.random();return this}});var md=new p,ma=new O,Ik=new p(0,0,0),Jk=new p(1,1,1),Qb=new p,Af=new p,ra=new p;Object.assign(O.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,l,m,k,n,p,r,q,u){var x=this.elements;x[0]=a;x[4]=b;x[8]=c;x[12]=d;x[1]=e;x[5]=f;x[9]=g;x[13]=h;x[2]=l;x[6]=m;x[10]=k;x[14]=n;x[3]=p;x[7]=r;x[11]=q;x[15]=u;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},clone:function(){return(new O).fromArray(this.elements)},
copy:function(a){var b=this.elements;a=a.elements;b[0]=a[0];b[1]=a[1];b[2]=a[2];b[3]=a[3];b[4]=a[4];b[5]=a[5];b[6]=a[6];b[7]=a[7];b[8]=a[8];b[9]=a[9];b[10]=a[10];b[11]=a[11];b[12]=a[12];b[13]=a[13];b[14]=a[14];b[15]=a[15];return this},copyPosition:function(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this},extractBasis:function(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this},makeBasis:function(a,b,c){this.set(a.x,
b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this},extractRotation:function(a){var b=this.elements,c=a.elements,d=1/md.setFromMatrixColumn(a,0).length(),e=1/md.setFromMatrixColumn(a,1).length();a=1/md.setFromMatrixColumn(a,2).length();b[0]=c[0]*d;b[1]=c[1]*d;b[2]=c[2]*d;b[3]=0;b[4]=c[4]*e;b[5]=c[5]*e;b[6]=c[6]*e;b[7]=0;b[8]=c[8]*a;b[9]=c[9]*a;b[10]=c[10]*a;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c);c=Math.sin(c);var g=Math.cos(d);d=Math.sin(d);var h=Math.cos(e);e=Math.sin(e);if("XYZ"===a.order){a=f*h;var l=f*e,m=c*h,k=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=l+m*d;b[5]=a-k*d;b[9]=-c*g;b[2]=k-a*d;b[6]=m+l*d;b[10]=f*g}else"YXZ"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a+k*c,b[4]=m*c-l,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=l*c-m,b[6]=k+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,l=g*e,m=d*h,k=d*e,b[0]=a-k*c,b[4]=-f*e,b[8]=m+l*c,b[1]=l+m*c,b[5]=f*h,b[9]=
k-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,l=f*e,m=c*h,k=c*e,b[0]=g*h,b[4]=m*d-l,b[8]=a*d+k,b[1]=g*e,b[5]=k*d+a,b[9]=l*d-m,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=k-a*e,b[8]=m*e+l,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=l*e+m,b[10]=a-k*e):"XZY"===a.order&&(a=f*g,l=f*d,m=c*g,k=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+k,b[5]=f*h,b[9]=l*e-m,b[2]=m*e-l,b[6]=c*h,b[10]=k*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this},makeRotationFromQuaternion:function(a){return this.compose(Ik,
a,Jk)},lookAt:function(a,b,c){var d=this.elements;ra.subVectors(a,b);0===ra.lengthSq()&&(ra.z=1);ra.normalize();Qb.crossVectors(c,ra);0===Qb.lengthSq()&&(1===Math.abs(c.z)?ra.x+=1E-4:ra.z+=1E-4,ra.normalize(),Qb.crossVectors(c,ra));Qb.normalize();Af.crossVectors(ra,Qb);d[0]=Qb.x;d[4]=Af.x;d[8]=ra.x;d[1]=Qb.y;d[5]=Af.y;d[9]=ra.y;d[2]=Qb.z;d[6]=Af.z;d[10]=ra.z;return this},multiply:function(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){var c=a.elements,d=b.elements;b=this.elements;a=c[0];var e=c[4],f=c[8],g=c[12],h=c[1],l=c[5],m=c[9],k=c[13],n=c[2],p=c[6],r=c[10],q=c[14],u=c[3],t=c[7],z=c[11];c=c[15];var w=d[0],y=d[4],B=d[8],Z=d[12],C=d[1],A=d[5],D=d[9],E=d[13],F=d[2],I=d[6],J=d[10],L=d[14],M=d[3],N=d[7],O=d[11];d=d[15];b[0]=a*w+e*C+f*F+g*M;b[4]=a*y+e*A+f*I+g*N;b[8]=a*B+e*D+f*J+
g*O;b[12]=a*Z+e*E+f*L+g*d;b[1]=h*w+l*C+m*F+k*M;b[5]=h*y+l*A+m*I+k*N;b[9]=h*B+l*D+m*J+k*O;b[13]=h*Z+l*E+m*L+k*d;b[2]=n*w+p*C+r*F+q*M;b[6]=n*y+p*A+r*I+q*N;b[10]=n*B+p*D+r*J+q*O;b[14]=n*Z+p*E+r*L+q*d;b[3]=u*w+t*C+z*F+c*M;b[7]=u*y+t*A+z*I+c*N;b[11]=u*B+t*D+z*J+c*O;b[15]=u*Z+t*E+z*L+c*d;return this},multiplyScalar:function(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this},determinant:function(){var a=
this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],l=a[13],m=a[2],k=a[6],n=a[10],p=a[14];return a[3]*(+e*h*k-d*l*k-e*g*n+c*l*n+d*g*p-c*h*p)+a[7]*(+b*h*p-b*l*n+e*f*n-d*f*p+d*l*m-e*h*m)+a[11]*(+b*l*k-b*g*p-e*f*k+c*f*p+e*g*m-c*l*m)+a[15]*(-d*g*m-b*h*k+b*g*n+d*f*k-c*f*n+c*h*m)},transpose:function(){var a=this.elements;var b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this},setPosition:function(a,
b,c){var d=this.elements;a.isVector3?(d[12]=a.x,d[13]=a.y,d[14]=a.z):(d[12]=a,d[13]=b,d[14]=c);return this},getInverse:function(a,b){void 0!==b&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");b=this.elements;var c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],l=c[6],m=c[7],k=c[8],n=c[9],p=c[10],r=c[11],q=c[12],u=c[13],t=c[14];c=c[15];var z=n*t*m-u*p*m+u*l*r-h*t*r-n*l*c+h*p*c,w=q*p*m-k*t*m-q*l*r+g*t*r+k*l*c-g*p*c,y=k*u*m-q*n*m+q*h*r-g*u*
r-k*h*c+g*n*c,B=q*n*l-k*u*l-q*h*p+g*u*p+k*h*t-g*n*t,A=a*z+d*w+e*y+f*B;if(0===A)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);A=1/A;b[0]=z*A;b[1]=(u*p*f-n*t*f-u*e*r+d*t*r+n*e*c-d*p*c)*A;b[2]=(h*t*f-u*l*f+u*e*m-d*t*m-h*e*c+d*l*c)*A;b[3]=(n*l*f-h*p*f-n*e*m+d*p*m+h*e*r-d*l*r)*A;b[4]=w*A;b[5]=(k*t*f-q*p*f+q*e*r-a*t*r-k*e*c+a*p*c)*A;b[6]=(q*l*f-g*t*f-q*e*m+a*t*m+g*e*c-a*l*c)*A;b[7]=(g*p*f-k*l*f+k*e*m-a*p*m-g*e*r+a*l*r)*A;b[8]=y*A;b[9]=(q*n*f-k*u*f-q*d*r+a*u*r+k*d*c-a*n*c)*A;b[10]=(g*u*f-q*h*f+q*d*m-
a*u*m-g*d*c+a*h*c)*A;b[11]=(k*h*f-g*n*f-k*d*m+a*n*m+g*d*r-a*h*r)*A;b[12]=B*A;b[13]=(k*u*e-q*n*e+q*d*p-a*u*p-k*d*t+a*n*t)*A;b[14]=(q*h*e-g*u*e-q*d*l+a*u*l+g*d*t-a*h*t)*A;b[15]=(g*n*e-k*h*e+k*d*l-a*n*l-g*d*p+a*h*p)*A;return this},scale:function(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this},getMaxScaleOnAxis:function(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*
a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]))},makeTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},makeRotationX:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},makeRotationY:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},makeRotationZ:function(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},makeRotationAxis:function(a,
b){var c=Math.cos(b);b=Math.sin(b);var d=1-c,e=a.x,f=a.y;a=a.z;var g=d*e,h=d*f;this.set(g*e+c,g*f-b*a,g*a+b*f,0,g*f+b*a,h*f+c,h*a-b*e,0,g*a-b*f,h*a+b*e,d*a*a+c,0,0,0,0,1);return this},makeScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},makeShear:function(a,b,c){this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1);return this},compose:function(a,b,c){var d=this.elements,e=b._x,f=b._y,g=b._z,h=b._w,l=e+e,m=f+f,k=g+g;b=e*l;var n=e*m;e*=k;var p=f*m;f*=k;g*=k;l*=h;m*=h;h*=k;k=c.x;var r=
c.y;c=c.z;d[0]=(1-(p+g))*k;d[1]=(n+h)*k;d[2]=(e-m)*k;d[3]=0;d[4]=(n-h)*r;d[5]=(1-(b+g))*r;d[6]=(f+l)*r;d[7]=0;d[8]=(e+m)*c;d[9]=(f-l)*c;d[10]=(1-(b+p))*c;d[11]=0;d[12]=a.x;d[13]=a.y;d[14]=a.z;d[15]=1;return this},decompose:function(a,b,c){var d=this.elements,e=md.set(d[0],d[1],d[2]).length(),f=md.set(d[4],d[5],d[6]).length(),g=md.set(d[8],d[9],d[10]).length();0>this.determinant()&&(e=-e);a.x=d[12];a.y=d[13];a.z=d[14];ma.copy(this);a=1/e;d=1/f;var h=1/g;ma.elements[0]*=a;ma.elements[1]*=a;ma.elements[2]*=
a;ma.elements[4]*=d;ma.elements[5]*=d;ma.elements[6]*=d;ma.elements[8]*=h;ma.elements[9]*=h;ma.elements[10]*=h;b.setFromRotationMatrix(ma);c.x=e;c.y=f;c.z=g;return this},makePerspective:function(a,b,c,d,e,f){void 0===f&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(c-d);g[9]=(c+d)/(c-d);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);
g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this},makeOrthographic:function(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),l=1/(c-d),m=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*l;g[9]=0;g[13]=-((c+d)*l);g[2]=0;g[6]=0;g[10]=-2*m;g[14]=-((f+e)*m);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this},equals:function(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++)if(b[c]!==a[c])return!1;return!0},fromArray:function(a,b){void 0===b&&(b=0);for(var c=0;16>c;c++)this.elements[c]=a[c+b];return this},
toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a}});var vi=new O,wi=new na;Vb.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");Vb.DefaultOrder="XYZ";Object.defineProperties(Vb.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a;this._onChangeCallback()}},
y:{get:function(){return this._y},set:function(a){this._y=a;this._onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a;this._onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a;this._onChangeCallback()}}});Object.assign(Vb.prototype,{isEuler:!0,set:function(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this._onChangeCallback();return this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},
copy:function(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this._onChangeCallback();return this},setFromRotationMatrix:function(a,b,c){var d=M.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],l=e[5],m=e[9],k=e[2],n=e[6];e=e[10];b=b||this._order;switch(b){case "XYZ":this._y=Math.asin(d(g,-1,1));.9999999>Math.abs(g)?(this._x=Math.atan2(-m,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(n,l),this._z=0);break;case "YXZ":this._x=Math.asin(-d(m,-1,1));.9999999>Math.abs(m)?(this._y=
Math.atan2(g,e),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-k,a),this._z=0);break;case "ZXY":this._x=Math.asin(d(n,-1,1));.9999999>Math.abs(n)?(this._y=Math.atan2(-k,e),this._z=Math.atan2(-f,l)):(this._y=0,this._z=Math.atan2(h,a));break;case "ZYX":this._y=Math.asin(-d(k,-1,1));.9999999>Math.abs(k)?(this._x=Math.atan2(n,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,l));break;case "YZX":this._z=Math.asin(d(h,-1,1));.9999999>Math.abs(h)?(this._x=Math.atan2(-m,l),this._y=Math.atan2(-k,
a)):(this._x=0,this._y=Math.atan2(g,e));break;case "XZY":this._z=Math.asin(-d(f,-1,1));.9999999>Math.abs(f)?(this._x=Math.atan2(n,l),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-m,e),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+b)}this._order=b;!1!==c&&this._onChangeCallback();return this},setFromQuaternion:function(a,b,c){vi.makeRotationFromQuaternion(a);return this.setFromRotationMatrix(vi,b,c)},setFromVector3:function(a,b){return this.set(a.x,
a.y,a.z,b||this._order)},reorder:function(a){wi.setFromEuler(this);return this.setFromQuaternion(wi,a)},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this._onChangeCallback();return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a},toVector3:function(a){return a?a.set(this._x,
this._y,this._z):new p(this._x,this._y,this._z)},_onChange:function(a){this._onChangeCallback=a;return this},_onChangeCallback:function(){}});Object.assign(De.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask=this.mask|1<<a|0},enableAll:function(){this.mask=-1},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},disableAll:function(){this.mask=0},test:function(a){return 0!==(this.mask&a.mask)}});var gj=0,xi=new p,nd=new na,zb=new O,Bf=new p,te=new p,
Kk=new p,Lk=new na,yi=new p(1,0,0),zi=new p(0,1,0),Ai=new p(0,0,1),Mk={type:"added"},Nk={type:"removed"};y.DefaultUp=new p(0,1,0);y.DefaultMatrixAutoUpdate=!0;y.prototype=Object.assign(Object.create(Fa.prototype),{constructor:y,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(a){this.matrixAutoUpdate&&this.updateMatrix();this.matrix.premultiply(a);this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){this.quaternion.premultiply(a);
return this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(a,b){nd.setFromAxisAngle(a,b);this.quaternion.multiply(nd);return this},rotateOnWorldAxis:function(a,b){nd.setFromAxisAngle(a,b);this.quaternion.premultiply(nd);return this},rotateX:function(a){return this.rotateOnAxis(yi,
a)},rotateY:function(a){return this.rotateOnAxis(zi,a)},rotateZ:function(a){return this.rotateOnAxis(Ai,a)},translateOnAxis:function(a,b){xi.copy(a).applyQuaternion(this.quaternion);this.position.add(xi.multiplyScalar(b));return this},translateX:function(a){return this.translateOnAxis(yi,a)},translateY:function(a){return this.translateOnAxis(zi,a)},translateZ:function(a){return this.translateOnAxis(Ai,a)},localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(a){return a.applyMatrix4(zb.getInverse(this.matrixWorld))},
lookAt:function(a,b,c){a.isVector3?Bf.copy(a):Bf.set(a,b,c);a=this.parent;this.updateWorldMatrix(!0,!1);te.setFromMatrixPosition(this.matrixWorld);this.isCamera||this.isLight?zb.lookAt(te,Bf,this.up):zb.lookAt(Bf,te,this.up);this.quaternion.setFromRotationMatrix(zb);a&&(zb.extractRotation(a.matrixWorld),nd.setFromRotationMatrix(zb),this.quaternion.premultiply(nd.inverse()))},add:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.add(arguments[b]);return this}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",
a),this;a&&a.isObject3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(Mk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this},remove:function(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++)this.remove(arguments[b]);return this}b=this.children.indexOf(a);-1!==b&&(a.parent=null,this.children.splice(b,1),a.dispatchEvent(Nk));return this},attach:function(a){this.updateWorldMatrix(!0,!1);zb.getInverse(this.matrixWorld);
null!==a.parent&&(a.parent.updateWorldMatrix(!0,!1),zb.multiply(a.parent.matrixWorld));a.applyMatrix4(zb);a.updateWorldMatrix(!1,!1);this.add(a);return this},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e}},getWorldPosition:function(a){void 0===
a&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new p);this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),a=new na);this.updateMatrixWorld(!0);this.matrixWorld.decompose(te,a,Kk);return a},getWorldScale:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),a=new p);this.updateMatrixWorld(!0);
this.matrixWorld.decompose(te,Lk,a);return a},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),a=new p);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize()},raycast:function(){},traverse:function(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)}},
traverseAncestors:function(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=this.children,c=
0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},updateWorldMatrix:function(a,b){var c=this.parent;!0===a&&null!==c&&c.updateWorldMatrix(!0,!1);this.matrixAutoUpdate&&this.updateMatrix();null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(!0===b)for(a=this.children,b=0,c=a.length;b<c;b++)a[b].updateWorldMatrix(!1,!0)},toJSON:function(a){function b(b,c){void 0===b[c.uuid]&&(b[c.uuid]=c.toJSON(a));return c.uuid}function c(a){var b=
[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var d=void 0===a||"string"===typeof a,e={};d&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},e.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});var f={};f.uuid=this.uuid;f.type=this.type;""!==this.name&&(f.name=this.name);!0===this.castShadow&&(f.castShadow=!0);!0===this.receiveShadow&&(f.receiveShadow=!0);!1===this.visible&&(f.visible=!1);!1===this.frustumCulled&&(f.frustumCulled=!1);0!==this.renderOrder&&
(f.renderOrder=this.renderOrder);"{}"!==JSON.stringify(this.userData)&&(f.userData=this.userData);f.layers=this.layers.mask;f.matrix=this.matrix.toArray();!1===this.matrixAutoUpdate&&(f.matrixAutoUpdate=!1);this.isInstancedMesh&&(f.type="InstancedMesh",f.count=this.count,f.instanceMatrix=this.instanceMatrix.toJSON());if(this.isMesh||this.isLine||this.isPoints){f.geometry=b(a.geometries,this.geometry);var g=this.geometry.parameters;if(void 0!==g&&void 0!==g.shapes)if(g=g.shapes,Array.isArray(g))for(var h=
0,l=g.length;h<l;h++)b(a.shapes,g[h]);else b(a.shapes,g)}if(void 0!==this.material)if(Array.isArray(this.material)){g=[];h=0;for(l=this.material.length;h<l;h++)g.push(b(a.materials,this.material[h]));f.material=g}else f.material=b(a.materials,this.material);if(0<this.children.length)for(f.children=[],h=0;h<this.children.length;h++)f.children.push(this.children[h].toJSON(a).object);if(d){d=c(a.geometries);h=c(a.materials);l=c(a.textures);var m=c(a.images);g=c(a.shapes);0<d.length&&(e.geometries=d);
0<h.length&&(e.materials=h);0<l.length&&(e.textures=l);0<m.length&&(e.images=m);0<g.length&&(e.shapes=g)}e.object=f;return e},clone:function(a){return(new this.constructor).copy(this,a)},copy:function(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;
this.layers.mask=a.layers.mask;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(b=0;b<a.children.length;b++)this.add(a.children[b].clone());return this}});qb.prototype=Object.assign(Object.create(y.prototype),{constructor:qb,isScene:!0,copy:function(a,b){y.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());
null!==a.environment&&(this.environment=a.environment.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this},toJSON:function(a){var b=y.prototype.toJSON.call(this,a);null!==this.background&&(b.object.background=this.background.toJSON(a));null!==this.environment&&(b.object.environment=this.environment.toJSON(a));null!==this.fog&&(b.object.fog=this.fog.toJSON());
return b},dispose:function(){this.dispatchEvent({type:"dispose"})}});var Ab=[new p,new p,new p,new p,new p,new p,new p,new p],ue=new p,Vg=new Va,od=new p,pd=new p,qd=new p,Rb=new p,Sb=new p,rc=new p,ve=new p,Cf=new p,Df=new p,Wb=new p;Object.assign(Va.prototype,{isBox3:!0,set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromArray:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.length;h<l;h+=3){var m=a[h],k=a[h+1],n=a[h+2];m<b&&(b=
m);k<c&&(c=k);n<d&&(d=n);m>e&&(e=m);k>f&&(f=k);n>g&&(g=n)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromBufferAttribute:function(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,l=a.count;h<l;h++){var m=a.getX(h),k=a.getY(h),n=a.getZ(h);m<b&&(b=m);k<c&&(c=k);n<d&&(d=n);m>e&&(e=m);k>f&&(f=k);n>g&&(g=n)}this.min.set(b,c,d);this.max.set(e,f,g);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);
return this},setFromCenterAndSize:function(a,b){b=ue.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this},setFromObject:function(a){this.makeEmpty();return this.expandByObject(a)},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this},isEmpty:function(){return this.max.x<
this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){void 0===a&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new p);return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===a&&(console.warn("THREE.Box3: .getSize() target is now required"),a=new p);return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);
this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);this.max.addScalar(a);return this},expandByObject:function(a){a.updateWorldMatrix(!1,!1);var b=a.geometry;void 0!==b&&(null===b.boundingBox&&b.computeBoundingBox(),Vg.copy(b.boundingBox),Vg.applyMatrix4(a.matrixWorld),this.union(Vg));a=a.children;b=0;for(var c=a.length;b<c;b++)this.expandByObject(a[b]);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||
a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box3: .getParameter() target is now required"),b=new p);return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||
a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(a){this.clampPoint(a.center,ue);return ue.distanceToSquared(a.center)<=a.radius*a.radius},intersectsPlane:function(a){if(0<a.normal.x){var b=a.normal.x*this.min.x;var c=a.normal.x*this.max.x}else b=a.normal.x*this.max.x,c=a.normal.x*this.min.x;0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*
this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=-a.constant&&c>=-a.constant},intersectsTriangle:function(a){if(this.isEmpty())return!1;this.getCenter(ve);Cf.subVectors(this.max,ve);od.subVectors(a.a,ve);pd.subVectors(a.b,ve);qd.subVectors(a.c,ve);Rb.subVectors(pd,od);Sb.subVectors(qd,pd);rc.subVectors(od,qd);a=[0,-Rb.z,Rb.y,0,-Sb.z,Sb.y,0,-rc.z,rc.y,Rb.z,0,-Rb.x,Sb.z,0,-Sb.x,rc.z,0,-rc.x,-Rb.y,Rb.x,0,-Sb.y,Sb.x,0,-rc.y,rc.x,0];if(!Zf(a,od,pd,qd,Cf))return!1;
a=[1,0,0,0,1,0,0,0,1];if(!Zf(a,od,pd,qd,Cf))return!1;Df.crossVectors(Rb,Sb);a=[Df.x,Df.y,Df.z];return Zf(a,od,pd,qd,Cf)},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new p);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){return ue.copy(a).clamp(this.min,this.max).sub(a).length()},getBoundingSphere:function(a){void 0===a&&console.error("THREE.Box3: .getBoundingSphere() target is now required");this.getCenter(a.center);
a.radius=.5*this.getSize(ue).length();return a},intersect:function(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},applyMatrix4:function(a){if(this.isEmpty())return this;Ab[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a);Ab[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a);Ab[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a);Ab[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a);
Ab[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a);Ab[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a);Ab[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a);Ab[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a);this.setFromPoints(Ab);return this},translate:function(a){this.min.add(a);this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var Ok=new Va;Object.assign(eb.prototype,{set:function(a,b){this.center.copy(a);this.radius=
b;return this},setFromPoints:function(a,b){var c=this.center;void 0!==b?c.copy(b):Ok.setFromPoints(a).getCenter(c);for(var d=b=0,e=a.length;d<e;d++)b=Math.max(b,c.distanceToSquared(a[d]));this.radius=Math.sqrt(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.center.copy(a.center);this.radius=a.radius;return this},isEmpty:function(){return 0>this.radius},makeEmpty:function(){this.center.set(0,0,0);this.radius=-1;return this},containsPoint:function(a){return a.distanceToSquared(this.center)<=
this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,b){var c=this.center.distanceToSquared(a);void 0===b&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),
b=new p);b.copy(a);c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center));return b},getBoundingBox:function(a){void 0===a&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),a=new Va);if(this.isEmpty())return a.makeEmpty(),a;a.set(this.center,this.center);a.expandByScalar(this.radius);return a},applyMatrix4:function(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this},translate:function(a){this.center.add(a);
return this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});var Bb=new p,Wg=new p,Ef=new p,Tb=new p,Xg=new p,Ff=new p,Yg=new p;Object.assign(Xb.prototype,{set:function(a,b){this.origin.copy(a);this.direction.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this},at:function(a,b){void 0===b&&(console.warn("THREE.Ray: .at() target is now required"),b=new p);
return b.copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){this.direction.copy(a).sub(this.origin).normalize();return this},recast:function(a){this.origin.copy(this.at(a,Bb));return this},closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new p);b.subVectors(a,this.origin);a=b.dot(this.direction);return 0>a?b.copy(this.origin):b.copy(this.direction).multiplyScalar(a).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},
distanceSqToPoint:function(a){var b=Bb.subVectors(a,this.origin).dot(this.direction);if(0>b)return this.origin.distanceToSquared(a);Bb.copy(this.direction).multiplyScalar(b).add(this.origin);return Bb.distanceToSquared(a)},distanceSqToSegment:function(a,b,c,d){Wg.copy(a).add(b).multiplyScalar(.5);Ef.copy(b).sub(a).normalize();Tb.copy(this.origin).sub(Wg);var e=.5*a.distanceTo(b),f=-this.direction.dot(Ef),g=Tb.dot(this.direction),h=-Tb.dot(Ef),l=Tb.lengthSq(),m=Math.abs(1-f*f);if(0<m){a=f*h-g;b=f*
g-h;var k=e*m;0<=a?b>=-k?b<=k?(e=1/m,a*=e,b*=e,f=a*(a+f*b+2*g)+b*(f*a+b+2*h)+l):(b=e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):(b=-e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l):b<=-k?(a=Math.max(0,-(-f*e+g)),b=0<a?-e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l):b<=k?(a=0,b=Math.min(Math.max(-e,-h),e),f=b*(b+2*h)+l):(a=Math.max(0,-(f*e+g)),b=0<a?e:Math.min(Math.max(-e,-h),e),f=-a*a+b*(b+2*h)+l)}else b=0<f?-e:e,a=Math.max(0,-(f*b+g)),f=-a*a+b*(b+2*h)+l;c&&c.copy(this.direction).multiplyScalar(a).add(this.origin);
d&&d.copy(Ef).multiplyScalar(b).add(Wg);return f},intersectSphere:function(a,b){Bb.subVectors(a.center,this.origin);var c=Bb.dot(this.direction),d=Bb.dot(Bb)-c*c;a=a.radius*a.radius;if(d>a)return null;a=Math.sqrt(a-d);d=c-a;c+=a;return 0>d&&0>c?null:0>d?this.at(c,b):this.at(d,b)},intersectsSphere:function(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius},distanceToPlane:function(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+
a.constant)/b;return 0<=a?a:null},intersectPlane:function(a,b){a=this.distanceToPlane(a);return null===a?null:this.at(a,b)},intersectsPlane:function(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1},intersectBox:function(a,b){var c=1/this.direction.x;var d=1/this.direction.y;var e=1/this.direction.z,f=this.origin;if(0<=c){var g=(a.min.x-f.x)*c;c*=a.max.x-f.x}else g=(a.max.x-f.x)*c,c*=a.min.x-f.x;if(0<=d){var h=(a.min.y-f.y)*d;d*=a.max.y-f.y}else h=(a.max.y-
f.y)*d,d*=a.min.y-f.y;if(g>d||h>c)return null;if(h>g||g!==g)g=h;if(d<c||c!==c)c=d;0<=e?(h=(a.min.z-f.z)*e,a=(a.max.z-f.z)*e):(h=(a.max.z-f.z)*e,a=(a.min.z-f.z)*e);if(g>a||h>c)return null;if(h>g||g!==g)g=h;if(a<c||c!==c)c=a;return 0>c?null:this.at(0<=g?g:c,b)},intersectsBox:function(a){return null!==this.intersectBox(a,Bb)},intersectTriangle:function(a,b,c,d,e){Xg.subVectors(b,a);Ff.subVectors(c,a);Yg.crossVectors(Xg,Ff);b=this.direction.dot(Yg);if(0<b){if(d)return null;d=1}else if(0>b)d=-1,b=-b;else return null;
Tb.subVectors(this.origin,a);a=d*this.direction.dot(Ff.crossVectors(Tb,Ff));if(0>a)return null;c=d*this.direction.dot(Xg.cross(Tb));if(0>c||a+c>b)return null;a=-d*Tb.dot(Yg);return 0>a?null:this.at(a/b,e)},applyMatrix4:function(a){this.origin.applyMatrix4(a);this.direction.transformDirection(a);return this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});var Zg=new p,Pk=new p,Qk=new va;Object.assign(Wa.prototype,{isPlane:!0,set:function(a,b){this.normal.copy(a);
this.constant=b;return this},setComponents:function(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this},setFromNormalAndCoplanarPoint:function(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this},setFromCoplanarPoints:function(a,b,c){b=Zg.subVectors(c,b).cross(Pk.subVectors(a,b)).normalize();this.setFromNormalAndCoplanarPoint(b,a);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.normal.copy(a.normal);this.constant=a.constant;
return this},normalize:function(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this},negate:function(){this.constant*=-1;this.normal.negate();return this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){void 0===b&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new p);return b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},
intersectLine:function(a,b){void 0===b&&(console.warn("THREE.Plane: .intersectLine() target is now required"),b=new p);var c=a.delta(Zg),d=this.normal.dot(c);if(0===d){if(0===this.distanceToPoint(a.start))return b.copy(a.start)}else if(d=-(a.start.dot(this.normal)+this.constant)/d,!(0>d||1<d))return b.copy(c).multiplyScalar(d).add(a.start)},intersectsLine:function(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b},intersectsBox:function(a){return a.intersectsPlane(this)},
intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){void 0===a&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new p);return a.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(a,b){b=b||Qk.getNormalMatrix(a);a=this.coplanarPoint(Zg).applyMatrix4(a);b=this.normal.applyMatrix3(b).normalize();this.constant=-a.dot(b);return this},translate:function(a){this.constant-=a.dot(this.normal);return this},equals:function(a){return a.normal.equals(this.normal)&&
a.constant===this.constant}});var cb=new p,Cb=new p,$g=new p,Db=new p,rd=new p,sd=new p,Bi=new p,ah=new p,bh=new p,ch=new p;Object.assign(pa,{getNormal:function(a,b,c,d){void 0===d&&(console.warn("THREE.Triangle: .getNormal() target is now required"),d=new p);d.subVectors(c,b);cb.subVectors(a,b);d.cross(cb);a=d.lengthSq();return 0<a?d.multiplyScalar(1/Math.sqrt(a)):d.set(0,0,0)},getBarycoord:function(a,b,c,d,e){cb.subVectors(d,b);Cb.subVectors(c,b);$g.subVectors(a,b);a=cb.dot(cb);b=cb.dot(Cb);c=cb.dot($g);
var f=Cb.dot(Cb);d=Cb.dot($g);var g=a*f-b*b;void 0===e&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),e=new p);if(0===g)return e.set(-2,-1,-1);g=1/g;f=(f*c-b*d)*g;a=(a*d-b*c)*g;return e.set(1-f-a,a,f)},containsPoint:function(a,b,c,d){pa.getBarycoord(a,b,c,d,Db);return 0<=Db.x&&0<=Db.y&&1>=Db.x+Db.y},getUV:function(a,b,c,d,e,f,g,h){this.getBarycoord(a,b,c,d,Db);h.set(0,0);h.addScaledVector(e,Db.x);h.addScaledVector(f,Db.y);h.addScaledVector(g,Db.z);return h},isFrontFacing:function(a,
b,c,d){cb.subVectors(c,b);Cb.subVectors(a,b);return 0>cb.cross(Cb).dot(d)?!0:!1}});Object.assign(pa.prototype,{set:function(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this},setFromPointsAndIndices:function(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this},getArea:function(){cb.subVectors(this.c,this.b);Cb.subVectors(this.a,
this.b);return.5*cb.cross(Cb).length()},getMidpoint:function(a){void 0===a&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new p);return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(a){return pa.getNormal(this.a,this.b,this.c,a)},getPlane:function(a){void 0===a&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new Wa);return a.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(a,b){return pa.getBarycoord(a,
this.a,this.b,this.c,b)},getUV:function(a,b,c,d,e){return pa.getUV(a,this.a,this.b,this.c,b,c,d,e)},containsPoint:function(a){return pa.containsPoint(a,this.a,this.b,this.c)},isFrontFacing:function(a){return pa.isFrontFacing(this.a,this.b,this.c,a)},intersectsBox:function(a){return a.intersectsTriangle(this)},closestPointToPoint:function(a,b){void 0===b&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),b=new p);var c=this.a,d=this.b,e=this.c;rd.subVectors(d,c);sd.subVectors(e,
c);ah.subVectors(a,c);var f=rd.dot(ah),g=sd.dot(ah);if(0>=f&&0>=g)return b.copy(c);bh.subVectors(a,d);var h=rd.dot(bh),l=sd.dot(bh);if(0<=h&&l<=h)return b.copy(d);var m=f*l-h*g;if(0>=m&&0<=f&&0>=h)return d=f/(f-h),b.copy(c).addScaledVector(rd,d);ch.subVectors(a,e);a=rd.dot(ch);var k=sd.dot(ch);if(0<=k&&a<=k)return b.copy(e);f=a*g-f*k;if(0>=f&&0<=g&&0>=k)return m=g/(g-k),b.copy(c).addScaledVector(sd,m);g=h*k-a*l;if(0>=g&&0<=l-h&&0<=a-k)return Bi.subVectors(e,d),m=(l-h)/(l-h+(a-k)),b.copy(d).addScaledVector(Bi,
m);e=1/(g+f+m);d=f*e;m*=e;return b.copy(c).addScaledVector(rd,d).addScaledVector(sd,m)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});var Ci={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,
crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,
floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,
lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,
moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,
sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ba={h:0,s:0,l:0},Gf={h:0,s:0,l:0};Object.assign(D.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){a&&a.isColor?this.copy(a):"number"===typeof a?this.setHex(a):"string"===
typeof a&&this.setStyle(a);return this},setScalar:function(a){this.b=this.g=this.r=a;return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSL:function(a,b,c){a=M.euclideanModulo(a,1);b=M.clamp(b,0,1);c=M.clamp(c,0,1);0===b?this.r=this.g=this.b=c:(b=.5>=c?c*(1+b):c+b-c*b,c=2*c-b,this.r=$f(c,b,a+1/3),this.g=$f(c,b,a),this.b=$f(c,b,a-1/3));return this},setStyle:function(a){function b(b){void 0!==
b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case "rgb":case "rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)%\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=
Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case "hsl":case "hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){d=parseFloat(c[1])/360;var e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f)}}}else if(c=/^#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+
c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this}return a&&0<a.length?this.setColorName(a):this},setColorName:function(a){var b=Ci[a];void 0!==b?this.setHex(b):console.warn("THREE.Color: Unknown color "+a);return this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){this.r=a.r;
this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},copyLinearToGamma:function(a,b){void 0===b&&(b=2);b=0<b?1/b:1;this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this},convertGammaToLinear:function(a){this.copyGammaToLinear(this,a);return this},convertLinearToGamma:function(a){this.copyLinearToGamma(this,a);return this},copySRGBToLinear:function(a){this.r=
ag(a.r);this.g=ag(a.g);this.b=ag(a.b);return this},copyLinearToSRGB:function(a){this.r=bg(a.r);this.g=bg(a.g);this.b=bg(a.b);return this},convertSRGBToLinear:function(){this.copySRGBToLinear(this);return this},convertLinearToSRGB:function(){this.copyLinearToSRGB(this);return this},getHex:function(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){void 0===a&&(console.warn("THREE.Color: .getHSL() target is now required"),
a={h:0,s:0,l:0});var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var l=e-f;f=.5>=h?l/(e+f):l/(2-e-f);switch(e){case b:g=(c-d)/l+(c<d?6:0);break;case c:g=(d-b)/l+2;break;case d:g=(b-c)/l+4}g/=6}a.h=g;a.s=f;a.l=h;return a},getStyle:function(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")"},offsetHSL:function(a,b,c){this.getHSL(Ba);Ba.h+=a;Ba.s+=b;Ba.l+=c;this.setHSL(Ba.h,Ba.s,Ba.l);return this},add:function(a){this.r+=a.r;this.g+=
a.g;this.b+=a.b;return this},addColors:function(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this},addScalar:function(a){this.r+=a;this.g+=a;this.b+=a;return this},sub:function(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this},multiply:function(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this},multiplyScalar:function(a){this.r*=a;this.g*=a;this.b*=a;return this},lerp:function(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=
(a.b-this.b)*b;return this},lerpHSL:function(a,b){this.getHSL(Ba);a.getHSL(Gf);a=M.lerp(Ba.h,Gf.h,b);var c=M.lerp(Ba.s,Gf.s,b);b=M.lerp(Ba.l,Gf.l,b);this.setHSL(a,c,b);return this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a},toJSON:function(){return this.getHex()}});D.NAMES=
Ci;Object.assign(Ac.prototype,{clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();b=0;for(c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});var hj=0;L.prototype=Object.assign(Object.create(Fa.prototype),{constructor:L,isMaterial:!0,
onBeforeCompile:function(){},setValues:function(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else if("shading"===b)console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=1===c?!0:!1;else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d&&d.isColor?d.set(c):d&&d.isVector3&&c&&c.isVector3?d.copy(c):this[b]=
c}}},toJSON:function(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d)}return b}var c=void 0===a||"string"===typeof a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color&&this.color.isColor&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.sheen&&
this.sheen.isColor&&(d.sheen=this.sheen.getHex());this.emissive&&this.emissive.isColor&&(d.emissive=this.emissive.getHex());this.emissiveIntensity&&1!==this.emissiveIntensity&&(d.emissiveIntensity=this.emissiveIntensity);this.specular&&this.specular.isColor&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);void 0!==this.clearcoat&&(d.clearcoat=this.clearcoat);void 0!==this.clearcoatRoughness&&(d.clearcoatRoughness=this.clearcoatRoughness);this.clearcoatMap&&
this.clearcoatMap.isTexture&&(d.clearcoatMap=this.clearcoatMap.toJSON(a).uuid);this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(d.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid);this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(d.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,d.clearcoatNormalScale=this.clearcoatNormalScale.toArray());this.map&&this.map.isTexture&&(d.map=this.map.toJSON(a).uuid);this.matcap&&this.matcap.isTexture&&(d.matcap=
this.matcap.toJSON(a).uuid);this.alphaMap&&this.alphaMap.isTexture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap&&this.lightMap.isTexture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.aoMap&&this.aoMap.isTexture&&(d.aoMap=this.aoMap.toJSON(a).uuid,d.aoMapIntensity=this.aoMapIntensity);this.bumpMap&&this.bumpMap.isTexture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap&&this.normalMap.isTexture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalMapType=
this.normalMapType,d.normalScale=this.normalScale.toArray());this.displacementMap&&this.displacementMap.isTexture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap&&this.roughnessMap.isTexture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap&&this.metalnessMap.isTexture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap&&this.emissiveMap.isTexture&&(d.emissiveMap=
this.emissiveMap.toJSON(a).uuid);this.specularMap&&this.specularMap.isTexture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap&&this.envMap.isTexture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity,d.refractionRatio=this.refractionRatio,void 0!==this.combine&&(d.combine=this.combine),void 0!==this.envMapIntensity&&(d.envMapIntensity=this.envMapIntensity));this.gradientMap&&this.gradientMap.isTexture&&(d.gradientMap=this.gradientMap.toJSON(a).uuid);void 0!==this.size&&
(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);1!==this.blending&&(d.blending=this.blending);!0===this.flatShading&&(d.flatShading=this.flatShading);0!==this.side&&(d.side=this.side);this.vertexColors&&(d.vertexColors=!0);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);d.depthFunc=this.depthFunc;d.depthTest=this.depthTest;d.depthWrite=this.depthWrite;d.stencilWrite=this.stencilWrite;d.stencilWriteMask=this.stencilWriteMask;
d.stencilFunc=this.stencilFunc;d.stencilRef=this.stencilRef;d.stencilFuncMask=this.stencilFuncMask;d.stencilFail=this.stencilFail;d.stencilZFail=this.stencilZFail;d.stencilZPass=this.stencilZPass;this.rotation&&0!==this.rotation&&(d.rotation=this.rotation);!0===this.polygonOffset&&(d.polygonOffset=!0);0!==this.polygonOffsetFactor&&(d.polygonOffsetFactor=this.polygonOffsetFactor);0!==this.polygonOffsetUnits&&(d.polygonOffsetUnits=this.polygonOffsetUnits);this.linewidth&&1!==this.linewidth&&(d.linewidth=
this.linewidth);void 0!==this.dashSize&&(d.dashSize=this.dashSize);void 0!==this.gapSize&&(d.gapSize=this.gapSize);void 0!==this.scale&&(d.scale=this.scale);!0===this.dithering&&(d.dithering=!0);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);"round"!==this.wireframeLinecap&&(d.wireframeLinecap=this.wireframeLinecap);
"round"!==this.wireframeLinejoin&&(d.wireframeLinejoin=this.wireframeLinejoin);!0===this.morphTargets&&(d.morphTargets=!0);!0===this.morphNormals&&(d.morphNormals=!0);!0===this.skinning&&(d.skinning=!0);!1===this.visible&&(d.visible=!1);!1===this.toneMapped&&(d.toneMapped=!1);"{}"!==JSON.stringify(this.userData)&&(d.userData=this.userData);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.name=
a.name;this.fog=a.fog;this.blending=a.blending;this.side=a.side;this.flatShading=a.flatShading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.stencilWriteMask=a.stencilWriteMask;
this.stencilFunc=a.stencilFunc;this.stencilRef=a.stencilRef;this.stencilFuncMask=a.stencilFuncMask;this.stencilFail=a.stencilFail;this.stencilZFail=a.stencilZFail;this.stencilZPass=a.stencilZPass;this.stencilWrite=a.stencilWrite;var b=a.clippingPlanes,c=null;if(null!==b){var d=b.length;c=Array(d);for(var e=0;e!==d;++e)c[e]=b[e].clone()}this.clippingPlanes=c;this.clipIntersection=a.clipIntersection;this.clipShadows=a.clipShadows;this.shadowSide=a.shadowSide;this.colorWrite=a.colorWrite;this.precision=
a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.dithering=a.dithering;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.visible=a.visible;this.toneMapped=a.toneMapped;this.userData=JSON.parse(JSON.stringify(a.userData));return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(L.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});
Pa.prototype=Object.create(L.prototype);Pa.prototype.constructor=Pa;Pa.prototype.isMeshBasicMaterial=!0;Pa.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=
a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this};var R=new p;Object.defineProperty(F.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(F.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(a){this.usage=a;return this},copy:function(a){this.name=a.name;this.array=new a.array.constructor(a.array);
this.itemSize=a.itemSize;this.count=a.count;this.normalized=a.normalized;this.usage=a.usage;return this},copyAt:function(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){this.array.set(a);return this},copyColorsArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new D);b[c++]=f.r;b[c++]=f.g;b[c++]=
f.b}return this},copyVector2sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new t);b[c++]=f.x;b[c++]=f.y}return this},copyVector3sArray:function(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new p);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z}return this},copyVector4sArray:function(a){for(var b=
this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new fa);b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w}return this},applyMatrix3:function(a){for(var b=0,c=this.count;b<c;b++)R.x=this.getX(b),R.y=this.getY(b),R.z=this.getZ(b),R.applyMatrix3(a),this.setXYZ(b,R.x,R.y,R.z);return this},applyMatrix4:function(a){for(var b=0,c=this.count;b<c;b++)R.x=this.getX(b),R.y=this.getY(b),R.z=this.getZ(b),R.applyMatrix4(a),
this.setXYZ(b,R.x,R.y,R.z);return this},applyNormalMatrix:function(a){for(var b=0,c=this.count;b<c;b++)R.x=this.getX(b),R.y=this.getY(b),R.z=this.getZ(b),R.applyNormalMatrix(a),this.setXYZ(b,R.x,R.y,R.z);return this},transformDirection:function(a){for(var b=0,c=this.count;b<c;b++)R.x=this.getX(b),R.y=this.getY(b),R.z=this.getZ(b),R.transformDirection(a),this.setXYZ(b,R.x,R.y,R.z);return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},getX:function(a){return this.array[a*
this.itemSize]},setX:function(a,b){this.array[a*this.itemSize]=b;return this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){this.array[a*this.itemSize+1]=b;return this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){this.array[a*this.itemSize+2]=b;return this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){this.array[a*this.itemSize+3]=b;return this},setXY:function(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+
1]=c;return this},setXYZ:function(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this},setXYZW:function(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this},onUpload:function(a){this.onUploadCallback=a;return this},clone:function(){return(new this.constructor(this.array,this.itemSize)).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),
normalized:this.normalized}}});yd.prototype=Object.create(F.prototype);yd.prototype.constructor=yd;zd.prototype=Object.create(F.prototype);zd.prototype.constructor=zd;Ad.prototype=Object.create(F.prototype);Ad.prototype.constructor=Ad;Bd.prototype=Object.create(F.prototype);Bd.prototype.constructor=Bd;Yb.prototype=Object.create(F.prototype);Yb.prototype.constructor=Yb;Cd.prototype=Object.create(F.prototype);Cd.prototype.constructor=Cd;Zb.prototype=Object.create(F.prototype);Zb.prototype.constructor=
Zb;B.prototype=Object.create(F.prototype);B.prototype.constructor=B;Dd.prototype=Object.create(F.prototype);Dd.prototype.constructor=Dd;Object.assign(sh.prototype,{computeGroups:function(a){var b=[],c=void 0;a=a.faces;for(var d=0;d<a.length;d++){var e=a[d];if(e.materialIndex!==c){c=e.materialIndex;void 0!==f&&(f.count=3*d-f.start,b.push(f));var f={start:3*d,materialIndex:c}}}void 0!==f&&(f.count=3*d-f.start,b.push(f));this.groups=b},fromGeometry:function(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,
e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length;if(0<h){var l=[];for(var m=0;m<h;m++)l[m]={name:g[m].name,data:[]};this.morphTargets.position=l}var k=a.morphNormals,n=k.length;if(0<n){var p=[];for(m=0;m<n;m++)p[m]={name:k[m].name,data:[]};this.morphTargets.normal=p}var r=a.skinIndices,q=a.skinWeights,u=r.length===c.length,G=q.length===c.length;0<c.length&&0===b.length&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(m=0;m<b.length;m++){var z=
b[m];this.vertices.push(c[z.a],c[z.b],c[z.c]);var w=z.vertexNormals;3===w.length?this.normals.push(w[0],w[1],w[2]):(w=z.normal,this.normals.push(w,w,w));w=z.vertexColors;3===w.length?this.colors.push(w[0],w[1],w[2]):(w=z.color,this.colors.push(w,w,w));!0===e&&(w=d[0][m],void 0!==w?this.uvs.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",m),this.uvs.push(new t,new t,new t)));!0===f&&(w=d[1][m],void 0!==w?this.uvs2.push(w[0],w[1],w[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",
m),this.uvs2.push(new t,new t,new t)));for(w=0;w<h;w++){var y=g[w].vertices;l[w].data.push(y[z.a],y[z.b],y[z.c])}for(w=0;w<n;w++)y=k[w].vertexNormals[m],p[w].data.push(y.a,y.b,y.c);u&&this.skinIndices.push(r[z.a],r[z.b],r[z.c]);G&&this.skinWeights.push(q[z.a],q[z.b],q[z.c])}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;
null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this}});var ij=1,ob=new O,dh=new y,td=new p,Oa=new Va,we=new Va,ta=new p;E.prototype=Object.assign(Object.create(Fa.prototype),{constructor:E,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new (65535<th(a)?Zb:Yb)(a,1):this.index=a},getAttribute:function(a){return this.attributes[a]},setAttribute:function(a,
b){this.attributes[a]=b;return this},deleteAttribute:function(a){delete this.attributes[a];return this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a;this.drawRange.count=b},applyMatrix4:function(a){var b=this.attributes.position;void 0!==b&&(b.applyMatrix4(a),b.needsUpdate=!0);b=this.attributes.normal;if(void 0!==b){var c=(new va).getNormalMatrix(a);b.applyNormalMatrix(c);
b.needsUpdate=!0}b=this.attributes.tangent;void 0!==b&&(b.transformDirection(a),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this},rotateX:function(a){ob.makeRotationX(a);this.applyMatrix4(ob);return this},rotateY:function(a){ob.makeRotationY(a);this.applyMatrix4(ob);return this},rotateZ:function(a){ob.makeRotationZ(a);this.applyMatrix4(ob);return this},translate:function(a,b,c){ob.makeTranslation(a,b,c);this.applyMatrix4(ob);
return this},scale:function(a,b,c){ob.makeScale(a,b,c);this.applyMatrix4(ob);return this},lookAt:function(a){dh.lookAt(a);dh.updateMatrix();this.applyMatrix4(dh.matrix);return this},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(td).negate();this.translate(td.x,td.y,td.z);return this},setFromObject:function(a){var b=a.geometry;if(a.isPoints||a.isLine){a=new B(3*b.vertices.length,3);var c=new B(3*b.colors.length,3);this.setAttribute("position",a.copyVector3sArray(b.vertices));
this.setAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new B(b.lineDistances.length,1),this.setAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&b&&b.isGeometry&&this.fromGeometry(b);return this},setFromPoints:function(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];b.push(e.x,
e.y,e.z||0)}this.setAttribute("position",new B(b,3));return this},updateFromObject:function(a){var b=a.geometry;if(a.isMesh){var c=b.__directGeometry;!0===b.elementsNeedUpdate&&(c=void 0,b.elementsNeedUpdate=!1);if(void 0===c)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=
!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==
c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this},fromGeometry:function(a){a.__directGeometry=(new sh).fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){var b=new Float32Array(3*
a.vertices.length);this.setAttribute("position",(new F(b,3)).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.setAttribute("normal",(new F(b,3)).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.setAttribute("color",(new F(b,3)).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.setAttribute("uv",(new F(b,2)).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*
a.uvs2.length),this.setAttribute("uv2",(new F(b,2)).copyVector2sArray(a.uvs2)));this.groups=a.groups;for(var c in a.morphTargets){b=[];for(var d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new B(3*g.data.length,3);h.name=g.name;b.push(h.copyVector3sArray(g.data))}this.morphAttributes[c]=b}0<a.skinIndices.length&&(c=new B(4*a.skinIndices.length,4),this.setAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new B(4*a.skinWeights.length,4),this.setAttribute("skinWeight",
c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Va);var a=this.attributes.position,b=this.morphAttributes.position;if(void 0!==a){if(this.boundingBox.setFromBufferAttribute(a),b){a=0;for(var c=b.length;a<c;a++)Oa.setFromBufferAttribute(b[a]),this.morphTargetsRelative?(ta.addVectors(this.boundingBox.min,
Oa.min),this.boundingBox.expandByPoint(ta),ta.addVectors(this.boundingBox.max,Oa.max),this.boundingBox.expandByPoint(ta)):(this.boundingBox.expandByPoint(Oa.min),this.boundingBox.expandByPoint(Oa.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){null===
this.boundingSphere&&(this.boundingSphere=new eb);var a=this.attributes.position,b=this.morphAttributes.position;if(a){var c=this.boundingSphere.center;Oa.setFromBufferAttribute(a);if(b)for(var d=0,e=b.length;d<e;d++){var f=b[d];we.setFromBufferAttribute(f);this.morphTargetsRelative?(ta.addVectors(Oa.min,we.min),Oa.expandByPoint(ta),ta.addVectors(Oa.max,we.max),Oa.expandByPoint(ta)):(Oa.expandByPoint(we.min),Oa.expandByPoint(we.max))}Oa.getCenter(c);var g=0;d=0;for(e=a.count;d<e;d++)ta.fromBufferAttribute(a,
d),g=Math.max(g,c.distanceToSquared(ta));if(b)for(d=0,e=b.length;d<e;d++){f=b[d];for(var h=this.morphTargetsRelative,l=0,m=f.count;l<m;l++)ta.fromBufferAttribute(f,l),h&&(td.fromBufferAttribute(a,l),ta.add(td)),g=Math.max(g,c.distanceToSquared(ta))}this.boundingSphere.radius=Math.sqrt(g);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},
computeVertexNormals:function(){var a=this.index,b=this.attributes;if(b.position){var c=b.position.array;if(void 0===b.normal)this.setAttribute("normal",new F(new Float32Array(c.length),3));else for(var d=b.normal.array,e=0,f=d.length;e<f;e++)d[e]=0;d=b.normal.array;var g=new p,h=new p,l=new p,m=new p,k=new p;if(a){var n=a.array;e=0;for(f=a.count;e<f;e+=3){a=3*n[e+0];var v=3*n[e+1];var r=3*n[e+2];g.fromArray(c,a);h.fromArray(c,v);l.fromArray(c,r);m.subVectors(l,h);k.subVectors(g,h);m.cross(k);d[a]+=
m.x;d[a+1]+=m.y;d[a+2]+=m.z;d[v]+=m.x;d[v+1]+=m.y;d[v+2]+=m.z;d[r]+=m.x;d[r+1]+=m.y;d[r+2]+=m.z}}else for(e=0,f=c.length;e<f;e+=9)g.fromArray(c,e),h.fromArray(c,e+3),l.fromArray(c,e+6),m.subVectors(l,h),k.subVectors(g,h),m.cross(k),d[e]=m.x,d[e+1]=m.y,d[e+2]=m.z,d[e+3]=m.x,d[e+4]=m.y,d[e+5]=m.z,d[e+6]=m.x,d[e+7]=m.y,d[e+8]=m.z;this.normalizeNormals();b.normal.needsUpdate=!0}},merge:function(a,b){if(a&&a.isBufferGeometry){void 0===b&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
var c=this.attributes,d;for(d in c)if(void 0!==a.attributes[d]){var e=c[d].array,f=a.attributes[d],g=f.array,h=f.itemSize*b;f=Math.min(g.length,e.length-h);for(var l=0;l<f;l++,h++)e[h]=g[l]}return this}console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a)},normalizeNormals:function(){for(var a=this.attributes.normal,b=0,c=a.count;b<c;b++)ta.x=a.getX(b),ta.y=a.getY(b),ta.z=a.getZ(b),ta.normalize(),a.setXYZ(b,ta.x,ta.y,ta.z)},toNonIndexed:function(){function a(a,
b){var c=a.array;a=a.itemSize;for(var d=new c.constructor(b.length*a),e,f=0,g=0,h=b.length;g<h;g++){e=b[g]*a;for(var l=0;l<a;l++)d[f++]=c[e++]}return new F(d,a)}if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var b=new E,c=this.index.array,d=this.attributes,e;for(e in d){var f=d[e];f=a(f,c);b.setAttribute(e,f)}var g=this.morphAttributes;for(e in g){var h=[],l=g[e];d=0;for(var m=l.length;d<m;d++)f=l[d],f=a(f,c),h.push(f);b.morphAttributes[e]=
h}b.morphTargetsRelative=this.morphTargetsRelative;c=this.groups;d=0;for(e=c.length;d<e;d++)f=c[d],b.addGroup(f.start,f.count,f.materialIndex);return b},toJSON:function(){var a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);0<Object.keys(this.userData).length&&(a.userData=this.userData);if(void 0!==this.parameters){var b=this.parameters;for(m in b)void 0!==b[m]&&(a[m]=b[m]);return a}a.data={attributes:{}};
b=this.index;null!==b&&(a.data.index={type:b.array.constructor.name,array:Array.prototype.slice.call(b.array)});var c=this.attributes;for(m in c){b=c[m];var d=b.toJSON();""!==b.name&&(d.name=b.name);a.data.attributes[m]=d}c={};var e=!1;for(m in this.morphAttributes){for(var f=this.morphAttributes[m],g=[],h=0,l=f.length;h<l;h++)b=f[h],d=b.toJSON(),""!==b.name&&(d.name=b.name),g.push(d);0<g.length&&(c[m]=g,e=!0)}e&&(a.data.morphAttributes=c,a.data.morphTargetsRelative=this.morphTargetsRelative);var m=
this.groups;0<m.length&&(a.data.groups=JSON.parse(JSON.stringify(m)));m=this.boundingSphere;null!==m&&(a.data.boundingSphere={center:m.center.toArray(),radius:m.radius});return a},clone:function(){return(new E).copy(this)},copy:function(a){var b;this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var c=a.index;null!==c&&this.setIndex(c.clone());c=a.attributes;for(g in c)this.setAttribute(g,c[g].clone());var d=a.morphAttributes;
for(g in d){var e=[],f=d[g];c=0;for(b=f.length;c<b;c++)e.push(f[c].clone());this.morphAttributes[g]=e}this.morphTargetsRelative=a.morphTargetsRelative;var g=a.groups;c=0;for(b=g.length;c<b;c++)d=g[c],this.addGroup(d.start,d.count,d.materialIndex);g=a.boundingBox;null!==g&&(this.boundingBox=g.clone());g=a.boundingSphere;null!==g&&(this.boundingSphere=g.clone());this.drawRange.start=a.drawRange.start;this.drawRange.count=a.drawRange.count;this.userData=a.userData;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});
var Di=new O,sc=new Xb,eh=new eb,Eb=new p,Fb=new p,Gb=new p,cg=new p,dg=new p,eg=new p,Ge=new p,He=new p,Ie=new p,Bc=new t,Cc=new t,Dc=new t,Ed=new p,Ee=new p;ha.prototype=Object.assign(Object.create(y.prototype),{constructor:ha,isMesh:!0,copy:function(a){y.prototype.copy.call(this,a);void 0!==a.morphTargetInfluences&&(this.morphTargetInfluences=a.morphTargetInfluences.slice());void 0!==a.morphTargetDictionary&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary));return this},updateMorphTargets:function(){var a=
this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")},raycast:function(a,b){var c=this.geometry,
d=this.material,e=this.matrixWorld;if(void 0!==d&&(null===c.boundingSphere&&c.computeBoundingSphere(),eh.copy(c.boundingSphere),eh.applyMatrix4(e),!1!==a.ray.intersectsSphere(eh)&&(Di.getInverse(e),sc.copy(a.ray).applyMatrix4(Di),null===c.boundingBox||!1!==sc.intersectsBox(c.boundingBox))))if(c.isBufferGeometry){var f=c.index;e=c.attributes.position;var g=c.morphAttributes.position,h=c.morphTargetsRelative,l=c.attributes.uv,m=c.attributes.uv2,k=c.groups,n=c.drawRange,p,r;if(null!==f)if(Array.isArray(d)){var q=
0;for(p=k.length;q<p;q++){var u=k[q];var G=d[u.materialIndex];var z=Math.max(u.start,n.start);for(r=c=Math.min(u.start+u.count,n.start+n.count);z<r;z+=3){c=f.getX(z);var w=f.getX(z+1);var y=f.getX(z+2);if(c=Fe(this,G,a,sc,e,g,h,l,m,c,w,y))c.faceIndex=Math.floor(z/3),c.face.materialIndex=u.materialIndex,b.push(c)}}}else for(z=Math.max(0,n.start),c=Math.min(f.count,n.start+n.count),q=z,p=c;q<p;q+=3){if(c=f.getX(q),w=f.getX(q+1),y=f.getX(q+2),c=Fe(this,d,a,sc,e,g,h,l,m,c,w,y))c.faceIndex=Math.floor(q/
3),b.push(c)}else if(void 0!==e)if(Array.isArray(d))for(q=0,p=k.length;q<p;q++)for(u=k[q],G=d[u.materialIndex],z=Math.max(u.start,n.start),r=c=Math.min(u.start+u.count,n.start+n.count);z<r;z+=3){if(c=z,w=z+1,y=z+2,c=Fe(this,G,a,sc,e,g,h,l,m,c,w,y))c.faceIndex=Math.floor(z/3),c.face.materialIndex=u.materialIndex,b.push(c)}else for(z=Math.max(0,n.start),c=Math.min(e.count,n.start+n.count),q=z,p=c;q<p;q+=3)if(c=q,w=q+1,y=q+2,c=Fe(this,d,a,sc,e,g,h,l,m,c,w,y))c.faceIndex=Math.floor(q/3),b.push(c)}else if(c.isGeometry)for(e=
Array.isArray(d),g=c.vertices,h=c.faces,c=c.faceVertexUvs[0],0<c.length&&(f=c),n=0,q=h.length;n<q;n++)if(p=h[n],c=e?d[p.materialIndex]:d,void 0!==c&&(l=g[p.a],m=g[p.b],k=g[p.c],c=uh(this,c,a,sc,l,m,k,Ed)))f&&f[n]&&(u=f[n],Bc.copy(u[0]),Cc.copy(u[1]),Dc.copy(u[2]),c.uv=pa.getUV(Ed,l,m,k,Bc,Cc,Dc,new t)),c.face=p,c.faceIndex=n,b.push(c)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});var jj=0,pb=new O,fh=new y,Hf=new p;J.prototype=Object.assign(Object.create(Fa.prototype),
{constructor:J,isGeometry:!0,applyMatrix4:function(a){for(var b=(new va).getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++)this.vertices[c].applyMatrix4(a);c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++)a.vertexNormals[e].applyMatrix3(b).normalize()}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this},
rotateX:function(a){pb.makeRotationX(a);this.applyMatrix4(pb);return this},rotateY:function(a){pb.makeRotationY(a);this.applyMatrix4(pb);return this},rotateZ:function(a){pb.makeRotationZ(a);this.applyMatrix4(pb);return this},translate:function(a,b,c){pb.makeTranslation(a,b,c);this.applyMatrix4(pb);return this},scale:function(a,b,c){pb.makeScale(a,b,c);this.applyMatrix4(pb);return this},lookAt:function(a){fh.lookAt(a);fh.updateMatrix();this.applyMatrix4(fh.matrix);return this},fromBufferGeometry:function(a){function b(a,
b,d,e){var f=void 0===h?[]:[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()],k=void 0===g?[]:[(new p).fromArray(g,3*a),(new p).fromArray(g,3*b),(new p).fromArray(g,3*d)];e=new Ac(a,b,d,k,f,e);c.faces.push(e);void 0!==l&&c.faceVertexUvs[0].push([(new t).fromArray(l,2*a),(new t).fromArray(l,2*b),(new t).fromArray(l,2*d)]);void 0!==m&&c.faceVertexUvs[1].push([(new t).fromArray(m,2*a),(new t).fromArray(m,2*b),(new t).fromArray(m,2*d)])}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes;
if(void 0===e.position)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;var f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,l=void 0!==e.uv?e.uv.array:void 0,m=void 0!==e.uv2?e.uv2.array:void 0;void 0!==m&&(this.faceVertexUvs[1]=[]);for(e=0;e<f.length;e+=3)c.vertices.push((new p).fromArray(f,e)),void 0!==h&&c.colors.push((new D).fromArray(h,e));var k=a.groups;if(0<k.length)for(e=0;e<k.length;e++){f=
k[e];var n=f.start,v=n;for(n+=f.count;v<n;v+=3)void 0!==d?b(d[v],d[v+1],d[v+2],f.materialIndex):b(v,v+1,v+2,f.materialIndex)}else if(void 0!==d)for(e=0;e<d.length;e+=3)b(d[e],d[e+1],d[e+2]);else for(e=0;e<f.length/3;e+=3)b(e,e+1,e+2);this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this},center:function(){this.computeBoundingBox();this.boundingBox.getCenter(Hf).negate();this.translate(Hf.x,
Hf.y,Hf.z);return this},normalize:function(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius;b=0===b?1:1/b;var c=new O;c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix4(c);return this},computeFaceNormals:function(){for(var a=new p,b=new p,c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a)}},computeVertexNormals:function(a){void 0===
a&&(a=!0);var b;var c=Array(this.vertices.length);var d=0;for(b=this.vertices.length;d<b;d++)c[d]=new p;if(a){var e=new p,f=new p;a=0;for(d=this.faces.length;a<d;a++){b=this.faces[a];var g=this.vertices[b.a];var h=this.vertices[b.b];var l=this.vertices[b.c];e.subVectors(l,h);f.subVectors(g,h);e.cross(f);c[b.a].add(e);c[b.b].add(e);c[b.c].add(e)}}else for(this.computeFaceNormals(),a=0,d=this.faces.length;a<d;a++)b=this.faces[a],c[b.a].add(b.normal),c[b.b].add(b.normal),c[b.c].add(b.normal);d=0;for(b=
this.vertices.length;d<b;d++)c[d].normalize();a=0;for(d=this.faces.length;a<d;a++)b=this.faces[a],g=b.vertexNormals,3===g.length?(g[0].copy(c[b.a]),g[1].copy(c[b.b]),g[2].copy(c[b.c])):(g[0]=c[b.a].clone(),g[1]=c[b.b].clone(),g[2]=c[b.c].clone());0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){var a;this.computeFaceNormals();var b=0;for(a=this.faces.length;b<a;b++){var c=this.faces[b];var d=c.vertexNormals;3===d.length?(d[0].copy(c.normal),d[1].copy(c.normal),
d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}0<this.faces.length&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){var a,b;var c=0;for(b=this.faces.length;c<b;c++){var d=this.faces[c];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone();d.__originalVertexNormals||(d.__originalVertexNormals=[]);var e=0;for(a=d.vertexNormals.length;e<a;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):
d.__originalVertexNormals[e]=d.vertexNormals[e].clone()}var f=new J;f.faces=this.faces;e=0;for(a=this.morphTargets.length;e<a;e++){if(!this.morphNormals[e]){this.morphNormals[e]={};this.morphNormals[e].faceNormals=[];this.morphNormals[e].vertexNormals=[];d=this.morphNormals[e].faceNormals;var g=this.morphNormals[e].vertexNormals;c=0;for(b=this.faces.length;c<b;c++){var h=new p;var l={a:new p,b:new p,c:new p};d.push(h);g.push(l)}}g=this.morphNormals[e];f.vertices=this.morphTargets[e].vertices;f.computeFaceNormals();
f.computeVertexNormals();c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],h=g.faceNormals[c],l=g.vertexNormals[c],h.copy(d.normal),l.a.copy(d.vertexNormals[0]),l.b.copy(d.vertexNormals[1]),l.c.copy(d.vertexNormals[2])}c=0;for(b=this.faces.length;c<b;c++)d=this.faces[c],d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals},computeBoundingBox:function(){null===this.boundingBox&&(this.boundingBox=new Va);this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){null===
this.boundingSphere&&(this.boundingSphere=new eb);this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(a&&a.isGeometry){var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,l=a.faces,m=this.colors,k=a.colors;void 0===c&&(c=0);void 0!==b&&(d=(new va).getNormalMatrix(b));for(var n=0,p=g.length;n<p;n++){var r=g[n].clone();void 0!==b&&r.applyMatrix4(b);f.push(r)}n=0;for(p=k.length;n<p;n++)m.push(k[n].clone());n=0;for(p=l.length;n<p;n++){g=l[n];var q=g.vertexNormals;
k=g.vertexColors;m=new Ac(g.a+e,g.b+e,g.c+e);m.normal.copy(g.normal);void 0!==d&&m.normal.applyMatrix3(d).normalize();b=0;for(f=q.length;b<f;b++)r=q[b].clone(),void 0!==d&&r.applyMatrix3(d).normalize(),m.vertexNormals.push(r);m.color.copy(g.color);b=0;for(f=k.length;b<f;b++)r=k[b],m.vertexColors.push(r.clone());m.materialIndex=g.materialIndex+c;h.push(m)}n=0;for(p=a.faceVertexUvs.length;n<p;n++)for(c=a.faceVertexUvs[n],void 0===this.faceVertexUvs[n]&&(this.faceVertexUvs[n]=[]),b=0,f=c.length;b<f;b++){d=
c[b];e=[];h=0;for(l=d.length;h<l;h++)e.push(d[h].clone());this.faceVertexUvs[n].push(e)}}else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a)},mergeMesh:function(a){a&&a.isMesh?(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)):console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a)},mergeVertices:function(){var a={},b=[],c=[],d=Math.pow(10,4),e;var f=0;for(e=this.vertices.length;f<e;f++){var g=this.vertices[f];
g=Math.round(g.x*d)+"_"+Math.round(g.y*d)+"_"+Math.round(g.z*d);void 0===a[g]?(a[g]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[g]]}a=[];f=0;for(e=this.faces.length;f<e;f++)for(d=this.faces[f],d.a=c[d.a],d.b=c[d.b],d.c=c[d.c],d=[d.a,d.b,d.c],g=0;3>g;g++)if(d[g]===d[(g+1)%3]){a.push(f);break}for(f=a.length-1;0<=f;f--)for(d=a[f],this.faces.splice(d,1),c=0,e=this.faceVertexUvs.length;c<e;c++)this.faceVertexUvs[c].splice(d,1);f=this.vertices.length-b.length;this.vertices=b;return f},setFromPoints:function(a){this.vertices=
[];for(var b=0,c=a.length;b<c;b++){var d=a[b];this.vertices.push(new p(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){for(var a=this.faces,b=a.length,c=0;c<b;c++)a[c]._id=c;a.sort(function(a,b){return a.materialIndex-b.materialIndex});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h])}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g)},toJSON:function(){function a(a,
b,c){return c?a|1<<b:a&~(1<<b)}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==m[b])return m[b];m[b]=l.length/3;l.push(a.x,a.y,a.z);return m[b]}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==n[b])return n[b];n[b]=k.length;k.push(a.getHex());return n[b]}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==r[b])return r[b];r[b]=p.length/2;p.push(a.x,a.y);return r[b]}var e={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};
e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f)void 0!==f[g]&&(e[g]=f[g]);return e}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z)}h=[];var l=[],m={},k=[],n={},p=[],r={};for(g=0;g<this.faces.length;g++){var q=this.faces[g],u=void 0!==this.faceVertexUvs[0][g],t=0<q.normal.length(),z=0<q.vertexNormals.length,w=1!==q.color.r||1!==q.color.g||1!==q.color.b,y=0<q.vertexColors.length,
A=0;A=a(A,0,0);A=a(A,1,!0);A=a(A,2,!1);A=a(A,3,u);A=a(A,4,t);A=a(A,5,z);A=a(A,6,w);A=a(A,7,y);h.push(A);h.push(q.a,q.b,q.c);h.push(q.materialIndex);u&&(u=this.faceVertexUvs[0][g],h.push(d(u[0]),d(u[1]),d(u[2])));t&&h.push(b(q.normal));z&&(t=q.vertexNormals,h.push(b(t[0]),b(t[1]),b(t[2])));w&&h.push(c(q.color));y&&(q=q.vertexColors,h.push(c(q[0]),c(q[1]),c(q[2])))}e.data={};e.data.vertices=f;e.data.normals=l;0<k.length&&(e.data.colors=k);0<p.length&&(e.data.uvs=[p]);e.data.faces=h;return e},clone:function(){return(new J).copy(this)},
copy:function(a){var b,c,d;this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.name=a.name;var e=a.vertices;var f=0;for(b=e.length;f<b;f++)this.vertices.push(e[f].clone());e=a.colors;f=0;for(b=e.length;f<b;f++)this.colors.push(e[f].clone());e=a.faces;f=0;for(b=e.length;f<b;f++)this.faces.push(e[f].clone());f=0;for(b=a.faceVertexUvs.length;f<
b;f++){var g=a.faceVertexUvs[f];void 0===this.faceVertexUvs[f]&&(this.faceVertexUvs[f]=[]);e=0;for(c=g.length;e<c;e++){var h=g[e],l=[];var m=0;for(d=h.length;m<d;m++)l.push(h[m].clone());this.faceVertexUvs[f].push(l)}}m=a.morphTargets;f=0;for(b=m.length;f<b;f++){d={};d.name=m[f].name;if(void 0!==m[f].vertices)for(d.vertices=[],e=0,c=m[f].vertices.length;e<c;e++)d.vertices.push(m[f].vertices[e].clone());if(void 0!==m[f].normals)for(d.normals=[],e=0,c=m[f].normals.length;e<c;e++)d.normals.push(m[f].normals[e].clone());
this.morphTargets.push(d)}m=a.morphNormals;f=0;for(b=m.length;f<b;f++){d={};if(void 0!==m[f].vertexNormals)for(d.vertexNormals=[],e=0,c=m[f].vertexNormals.length;e<c;e++)g=m[f].vertexNormals[e],h={},h.a=g.a.clone(),h.b=g.b.clone(),h.c=g.c.clone(),d.vertexNormals.push(h);if(void 0!==m[f].faceNormals)for(d.faceNormals=[],e=0,c=m[f].faceNormals.length;e<c;e++)d.faceNormals.push(m[f].faceNormals[e].clone());this.morphNormals.push(d)}e=a.skinWeights;f=0;for(b=e.length;f<b;f++)this.skinWeights.push(e[f].clone());
e=a.skinIndices;f=0;for(b=e.length;f<b;f++)this.skinIndices.push(e[f].clone());e=a.lineDistances;f=0;for(b=e.length;f<b;f++)this.lineDistances.push(e[f]);f=a.boundingBox;null!==f&&(this.boundingBox=f.clone());f=a.boundingSphere;null!==f&&(this.boundingSphere=f.clone());this.elementsNeedUpdate=a.elementsNeedUpdate;this.verticesNeedUpdate=a.verticesNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.lineDistancesNeedUpdate=
a.lineDistancesNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this},dispose:function(){this.dispatchEvent({type:"dispose"})}});var gh=function(a){function b(b,d,e,f,g,h){a.call(this);this.type="BoxGeometry";this.parameters={width:b,height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:h};this.fromBufferGeometry(new Gd(b,d,e,f,g,h));this.mergeVertices()}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b}(J),Gd=function(a){function b(b,
d,e,f,g,h){function c(a,b,c,d,e,f,g,h,l,x,t){var w=f/l,z=g/x,y=f/2,A=g/2,G=h/2;g=l+1;var C=x+1,B=f=0,D,E,F=new p;for(E=0;E<C;E++){var I=E*z-A;for(D=0;D<g;D++)F[a]=(D*w-y)*d,F[b]=I*e,F[c]=G,n.push(F.x,F.y,F.z),F[a]=0,F[b]=0,F[c]=0<h?1:-1,v.push(F.x,F.y,F.z),r.push(D/l),r.push(1-E/x),f+=1}for(E=0;E<x;E++)for(D=0;D<l;D++)a=q+D+g*(E+1),b=q+(D+1)+g*(E+1),c=q+(D+1)+g*E,k.push(q+D+g*E,a,c),k.push(a,b,c),B+=6;m.addGroup(u,B,t);u+=B;q+=f}a.call(this);this.type="BoxBufferGeometry";this.parameters={width:b,
height:d,depth:e,widthSegments:f,heightSegments:g,depthSegments:h};var m=this;b=b||1;d=d||1;e=e||1;f=Math.floor(f)||1;g=Math.floor(g)||1;h=Math.floor(h)||1;var k=[],n=[],v=[],r=[],q=0,u=0;c("z","y","x",-1,-1,e,d,b,h,g,0);c("z","y","x",1,-1,e,d,-b,h,g,1);c("x","z","y",1,1,b,e,d,f,h,2);c("x","z","y",1,-1,b,e,-d,f,h,3);c("x","y","z",1,-1,b,d,e,f,g,4);c("x","y","z",-1,-1,b,d,-e,f,g,5);this.setIndex(k);this.setAttribute("position",new B(n,3));this.setAttribute("normal",new B(v,3));this.setAttribute("uv",
new B(r,2))}a&&(b.__proto__=a);b.prototype=Object.create(a&&a.prototype);return b.prototype.constructor=b}(E),Ph={clone:Ec,merge:qa};Ca.prototype=Object.create(L.prototype);Ca.prototype.constructor=Ca;Ca.prototype.isShaderMaterial=!0;Ca.prototype.copy=function(a){L.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=Ec(a.uniforms);this.defines=Object.assign({},a.defines);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;
this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=Object.assign({},a.extensions);return this};Ca.prototype.toJSON=function(a){var b=L.prototype.toJSON.call(this,a);b.uniforms={};for(var c in this.uniforms){var d=this.uniforms[c].value;b.uniforms[c]=d&&d.isTexture?{type:"t",value:d.toJSON(a).uuid}:d&&d.isColor?{type:"c",value:d.getHex()}:d&&d.isVector2?{type:"v2",value:d.toArray()}:d&&d.isVector3?
{type:"v3",value:d.toArray()}:d&&d.isVector4?{type:"v4",value:d.toArray()}:d&&d.isMatrix3?{type:"m3",value:d.toArray()}:d&&d.isMatrix4?{type:"m4",value:d.toArray()}:{value:d}}0<Object.keys(this.defines).length&&(b.defines=this.defines);b.vertexShader=this.vertexShader;b.fragmentShader=this.fragmentShader;a={};for(var e in this.extensions)!0===this.extensions[e]&&(a[e]=!0);0<Object.keys(a).length&&(b.extensions=a);return b};fb.prototype=Object.assign(Object.create(y.prototype),{constructor:fb,isCamera:!0,
copy:function(a,b){y.prototype.copy.call(this,a,b);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);this.projectionMatrixInverse.copy(a.projectionMatrixInverse);return this},getWorldDirection:function(a){void 0===a&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new p);this.updateMatrixWorld(!0);var b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize()},updateMatrixWorld:function(a){y.prototype.updateMatrixWorld.call(this,
a);this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(a,b){y.prototype.updateWorldMatrix.call(this,a,b);this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return(new this.constructor).copy(this)}});S.prototype=Object.assign(Object.create(fb.prototype),{constructor:S,isPerspectiveCamera:!0,copy:function(a,b){fb.prototype.copy.call(this,a,b);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=
null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this},setFocalLength:function(a){a=.5*this.getFilmHeight()/a;this.fov=2*M.RAD2DEG*Math.atan(a);this.updateProjectionMatrix()},getFocalLength:function(){var a=Math.tan(.5*M.DEG2RAD*this.fov);return.5*this.getFilmHeight()/a},getEffectiveFOV:function(){return 2*M.RAD2DEG*Math.atan(Math.tan(.5*M.DEG2RAD*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},
getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b;null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},
updateProjectionMatrix:function(){var a=this.near,b=a*Math.tan(.5*M.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==this.view&&this.view.enabled){var g=f.fullWidth,h=f.fullHeight;e+=f.offsetX*d/g;b-=f.offsetY*c/h;d*=f.width/g;c*=f.height/h}f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){a=y.prototype.toJSON.call(this,
a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a}});Fc.prototype=Object.create(y.prototype);Fc.prototype.constructor=Fc;$b.prototype=Object.create(Ia.prototype);$b.prototype.constructor=$b;$b.prototype.isWebGLCubeRenderTarget=!0;$b.prototype.fromEquirectangularTexture=
function(a,b){this.texture.type=b.type;this.texture.format=b.format;this.texture.encoding=b.encoding;var c=new qb,d=new Ca({type:"CubemapFromEquirect",uniforms:Ec({tEquirect:{value:null}}),vertexShader:"varying vec3 vWorldDirection;\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",fragmentShader:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}",
side:1,blending:0});d.uniforms.tEquirect.value=b;b=new ha(new Gd(5,5,5),d);c.add(b);(new Fc(1,10,this)).update(a,c);b.geometry.dispose();b.material.dispose();return this};ac.prototype=Object.create(Y.prototype);ac.prototype.constructor=ac;ac.prototype.isDataTexture=!0;var ud=new eb,If=new p;Object.assign(Gc.prototype,{set:function(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this},clone:function(){return(new this.constructor).copy(this)},
copy:function(a){for(var b=this.planes,c=0;6>c;c++)b[c].copy(a.planes[c]);return this},setFromProjectionMatrix:function(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],l=c[6],m=c[7],k=c[8],n=c[9],p=c[10],r=c[11],q=c[12],u=c[13],t=c[14];c=c[15];b[0].setComponents(f-a,m-g,r-k,c-q).normalize();b[1].setComponents(f+a,m+g,r+k,c+q).normalize();b[2].setComponents(f+d,m+h,r+n,c+u).normalize();b[3].setComponents(f-d,m-h,r-n,c-u).normalize();b[4].setComponents(f-e,m-l,r-p,c-
t).normalize();b[5].setComponents(f+e,m+l,r+p,c+t).normalize();return this},intersectsObject:function(a){var b=a.geometry;null===b.boundingSphere&&b.computeBoundingSphere();ud.copy(b.boundingSphere).applyMatrix4(a.matrixWorld);return this.intersectsSphere(ud)},intersectsSprite:function(a){ud.center.set(0,0,0);ud.radius=.7071067811865476;ud.applyMatrix4(a.matrixWorld);return this.intersectsSphere(ud)},intersectsSphere:function(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++)if(b[d].distanceToPoint(c)<
a)return!1;return!0},intersectsBox:function(a){for(var b=this.planes,c=0;6>c;c++){var d=b[c];If.x=0<d.normal.x?a.max.x:a.min.x;If.y=0<d.normal.y?a.max.y:a.min.y;If.z=0<d.normal.z?a.max.z:a.min.z;if(0>d.distanceToPoint(If))return!1}return!0},containsPoint:function(a){for(var b=this.planes,c=0;6>c;c++)if(0>b[c].distanceToPoint(a))return!1;return!0}});var A={common:{diffuse:{value:new D(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new va},uv2Transform:{value:new va},alphaMap:{value:null}},
specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},
displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new D(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},
directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},
pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new D(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new va}},sprite:{diffuse:{value:new D(15658734)},opacity:{value:1},center:{value:new t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new va}}};
Fd.prototype=Object.create(J.prototype);Fd.prototype.constructor=Fd;bc.prototype=Object.create(E.prototype);bc.prototype.constructor=bc;var N={alphamap_fragment:"#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",alphamap_pars_fragment:"#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",alphatest_fragment:"#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",aomap_fragment:"#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
aomap_pars_fragment:"#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:"vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",bsdfs:"vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha  = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );\n}\n#endif",
bumpmap_pars_fragment:"#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
clipping_planes_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#pragma unroll_loop_end\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\t#pragma unroll_loop_end\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
clipping_planes_pars_fragment:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",clipping_planes_pars_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvarying vec3 vClipPosition;\n#endif",clipping_planes_vertex:"#if NUM_CLIPPING_PLANES > 0\n\tvClipPosition = - mvPosition.xyz;\n#endif",color_fragment:"#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",color_pars_fragment:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",color_pars_vertex:"#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
color_vertex:"#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",common:"#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\n#ifdef HIGH_PRECISION\n\tfloat precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n\tfloat max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }\n\tfloat precisionSafeLength( vec3 v ) {\n\t\tfloat maxComponent = max3( abs( v ) );\n\t\treturn length( v / maxComponent ) * maxComponent;\n\t}\n#endif\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n#ifdef CLEARCOAT\n\tvec3 clearcoatNormal;\n#endif\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n  return m[ 2 ][ 3 ] == - 1.0;\n}",
cube_uv_reflection_fragment:"#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_maxMipLevel 8.0\n#define cubeUV_minMipLevel 4.0\n#define cubeUV_maxTileSize 256.0\n#define cubeUV_minTileSize 16.0\nfloat getFace(vec3 direction) {\n    vec3 absDirection = abs(direction);\n    float face = -1.0;\n    if (absDirection.x > absDirection.z) {\n      if (absDirection.x > absDirection.y)\n        face = direction.x > 0.0 ? 0.0 : 3.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    } else {\n      if (absDirection.z > absDirection.y)\n        face = direction.z > 0.0 ? 2.0 : 5.0;\n      else\n        face = direction.y > 0.0 ? 1.0 : 4.0;\n    }\n    return face;\n}\nvec2 getUV(vec3 direction, float face) {\n    vec2 uv;\n    if (face == 0.0) {\n      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {\n      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {\n      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {\n      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {\n      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {\n      uv = vec2(direction.x, direction.y) / abs(direction.z);    }\n    return 0.5 * (uv + 1.0);\n}\nvec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {\n  float face = getFace(direction);\n  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);\n  mipInt = max(mipInt, cubeUV_minMipLevel);\n  float faceSize = exp2(mipInt);\n  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);\n  vec2 uv = getUV(direction, face) * (faceSize - 1.0);\n  vec2 f = fract(uv);\n  uv += 0.5 - f;\n  if (face > 2.0) {\n    uv.y += faceSize;\n    face -= 3.0;\n  }\n  uv.x += face * faceSize;\n  if(mipInt < cubeUV_maxMipLevel){\n    uv.y += 2.0 * cubeUV_maxTileSize;\n  }\n  uv.y += filterInt * 2.0 * cubeUV_minTileSize;\n  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);\n  uv *= texelSize;\n  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x += texelSize;\n  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.y += texelSize;\n  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  uv.x -= texelSize;\n  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;\n  vec3 tm = mix(tl, tr, f.x);\n  vec3 bm = mix(bl, br, f.x);\n  return mix(tm, bm, f.y);\n}\n#define r0 1.0\n#define v0 0.339\n#define m0 -2.0\n#define r1 0.8\n#define v1 0.276\n#define m1 -1.0\n#define r4 0.4\n#define v4 0.046\n#define m4 2.0\n#define r5 0.305\n#define v5 0.016\n#define m5 3.0\n#define r6 0.21\n#define v6 0.0038\n#define m6 4.0\nfloat roughnessToMip(float roughness) {\n  float mip = 0.0;\n  if (roughness >= r1) {\n    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;\n  } else if (roughness >= r4) {\n    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;\n  } else if (roughness >= r5) {\n    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;\n  } else if (roughness >= r6) {\n    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;\n  } else {\n    mip = -2.0 * log2(1.16 * roughness);  }\n  return mip;\n}\nvec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {\n  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);\n  float mipF = fract(mip);\n  float mipInt = floor(mip);\n  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);\n  if (mipF == 0.0) {\n    return vec4(color0, 1.0);\n  } else {\n    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);\n    return vec4(mix(color0, color1, mipF), 1.0);\n  }\n}\n#endif",
defaultnormal_vertex:"vec3 transformedNormal = objectNormal;\n#ifdef USE_INSTANCING\n\tmat3 m = mat3( instanceMatrix );\n\ttransformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );\n\ttransformedNormal = m * transformedNormal;\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
displacementmap_pars_vertex:"#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",displacementmap_vertex:"#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );\n#endif",emissivemap_fragment:"#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
emissivemap_pars_fragment:"#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:"\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = clamp( floor( D ) / 255.0, 0.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
envmap_fragment:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvec3 cameraToFrag;\n\t\t\n\t\tif ( isOrthographic ) {\n\t\t\tcameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t}  else {\n\t\t\tcameraToFrag = normalize( vWorldPosition - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToFrag, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\tenvColor = envMapTexelToLinear( envColor );\n\t#endif\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
envmap_common_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float envMapIntensity;\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\t\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\n\tuniform float reflectivity;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\tvarying vec3 vWorldPosition;\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
envmap_pars_vertex:"#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )\n\t\t#define ENV_WORLDPOS\n\t#endif\n\t#ifdef ENV_WORLDPOS\n\t\t\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",envmap_physical_pars_fragment:"#if defined( USE_ENVMAP )\n\t#ifdef ENVMAP_MODE_REFRACTION\n\t\tuniform float refractionRatio;\n\t#endif\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat sigma = PI * roughness * roughness / ( 1.0 + roughness );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + log2( sigma );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t  vec3 reflectVec = reflect( -viewDir, normal );\n\t\t  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n\t\t#else\n\t\t  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
envmap_vertex:"#ifdef USE_ENVMAP\n\t#ifdef ENV_WORLDPOS\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex;\n\t\tif ( isOrthographic ) { \n\t\t\tcameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n\t\t} else {\n\t\t\tcameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\t}\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
fog_vertex:"#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",fog_pars_vertex:"#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",fog_fragment:"#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",fog_pars_fragment:"#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
gradientmap_pars_fragment:"#ifdef USE_GRADIENTMAP\n\tuniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\tfloat dotNL = dot( normal, lightDirection );\n\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t#ifdef USE_GRADIENTMAP\n\t\treturn texture2D( gradientMap, coord ).rgb;\n\t#else\n\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t#endif\n}",lightmap_fragment:"#ifdef USE_LIGHTMAP\n\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\treflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n#endif",
lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",lights_lambert_vertex:"vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\nvIndirectFront += getAmbientLightIrradiance( ambientLightColor );\nvIndirectFront += getLightProbeIrradiance( lightProbe, geometry );\n#ifdef DOUBLE_SIDED\n\tvIndirectBack += getAmbientLightIrradiance( ambientLightColor );\n\tvIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );\n#endif\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n\t#pragma unroll_loop_end\n#endif",
lights_pars_begin:"uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\t\tstruct DirectionalLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\t\tstruct PointLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t\tfloat shadowCameraNear;\n\t\t\tfloat shadowCameraFar;\n\t\t};\n\t\tuniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tstruct SpotLightShadow {\n\t\t\tfloat shadowBias;\n\t\t\tfloat shadowRadius;\n\t\t\tvec2 shadowMapSize;\n\t\t};\n\t\tuniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
lights_toon_fragment:"ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_toon_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct ToonMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_Toon\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Toon\n#define Material_LightProbeLOD( material )\t(0)",
lights_phong_fragment:"BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",lights_phong_pars_fragment:"varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
lights_physical_fragment:"PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;\nmaterial.specularRoughness = min( material.specularRoughness, 1.0 );\n#ifdef REFLECTIVITY\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#endif\n#ifdef CLEARCOAT\n\tmaterial.clearcoat = clearcoat;\n\tmaterial.clearcoatRoughness = clearcoatRoughness;\n\t#ifdef USE_CLEARCOATMAP\n\t\tmaterial.clearcoat *= texture2D( clearcoatMap, vUv ).x;\n\t#endif\n\t#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\t\tmaterial.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;\n\t#endif\n\tmaterial.clearcoat = saturate( material.clearcoat );\tmaterial.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n\tmaterial.clearcoatRoughness += geometryRoughness;\n\tmaterial.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_SHEEN\n\tmaterial.sheenColor = sheen;\n#endif",
lights_physical_pars_fragment:"struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n#ifdef CLEARCOAT\n\tfloat clearcoat;\n\tfloat clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tvec3 sheenColor;\n#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearcoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );\n\t\tvec3 ccIrradiance = ccDotNL * directLight.color;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tccIrradiance *= PI;\n\t\t#endif\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t\treflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\t#ifdef USE_SHEEN\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(\n\t\t\tmaterial.specularRoughness,\n\t\t\tdirectLight.direction,\n\t\t\tgeometry,\n\t\t\tmaterial.sheenColor\n\t\t);\n\t#else\n\t\treflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);\n\t#endif\n\treflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifdef CLEARCOAT\n\t\tfloat ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );\n\t\tfloat ccDotNL = ccDotNV;\n\t\tfloat clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );\n\t#else\n\t\tfloat clearcoatDHR = 0.0;\n\t#endif\n\tfloat clearcoatInv = 1.0 - clearcoatDHR;\n\tvec3 singleScattering = vec3( 0.0 );\n\tvec3 multiScattering = vec3( 0.0 );\n\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\treflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;\n\treflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
lights_fragment_begin:"\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\n#ifdef CLEARCOAT\n\tgeometry.clearcoatNormal = clearcoatNormal;\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n\t\tpointLightShadow = pointLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n\t\tspotLightShadow = spotLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLightShadow;\n\t#endif\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n\t\tdirectionalLightShadow = directionalLightShadows[ i ];\n\t\tdirectLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n\t#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 iblIrradiance = vec3( 0.0 );\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop_start\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t\t#pragma unroll_loop_end\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
lights_fragment_maps:"#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\tvec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tiblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );\n\t#ifdef CLEARCOAT\n\t\tclearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );\n\t#endif\n#endif",
lights_fragment_end:"#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );\n#endif",logdepthbuf_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",logdepthbuf_pars_fragment:"#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n\tvarying float vIsPerspective;\n#endif",
logdepthbuf_pars_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t\tvarying float vIsPerspective;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",logdepthbuf_vertex:"#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t\tvIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n\t#else\n\t\tif ( isPerspectiveMatrix( projectionMatrix ) ) {\n\t\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\t\tgl_Position.z *= gl_Position.w;\n\t\t}\n\t#endif\n#endif",
map_fragment:"#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",map_pars_fragment:"#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",map_particle_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n#endif\n#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
map_particle_pars_fragment:"#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n\tuniform mat3 uvTransform;\n#endif\n#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",metalnessmap_fragment:"float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",metalnessmap_pars_fragment:"#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
morphnormal_vertex:"#ifdef USE_MORPHNORMALS\n\tobjectNormal *= morphTargetBaseInfluence;\n\tobjectNormal += morphNormal0 * morphTargetInfluences[ 0 ];\n\tobjectNormal += morphNormal1 * morphTargetInfluences[ 1 ];\n\tobjectNormal += morphNormal2 * morphTargetInfluences[ 2 ];\n\tobjectNormal += morphNormal3 * morphTargetInfluences[ 3 ];\n#endif",morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\n\tuniform float morphTargetBaseInfluence;\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
morphtarget_vertex:"#ifdef USE_MORPHTARGETS\n\ttransformed *= morphTargetBaseInfluence;\n\ttransformed += morphTarget0 * morphTargetInfluences[ 0 ];\n\ttransformed += morphTarget1 * morphTargetInfluences[ 1 ];\n\ttransformed += morphTarget2 * morphTargetInfluences[ 2 ];\n\ttransformed += morphTarget3 * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += morphTarget4 * morphTargetInfluences[ 4 ];\n\ttransformed += morphTarget5 * morphTargetInfluences[ 5 ];\n\ttransformed += morphTarget6 * morphTargetInfluences[ 6 ];\n\ttransformed += morphTarget7 * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
normal_fragment_begin:"#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\t#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t#endif\n\t#endif\n#endif\nvec3 geometryNormal = normal;",
normal_fragment_maps:"#ifdef OBJECTSPACE_NORMALMAP\n\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t#ifdef FLIP_SIDED\n\t\tnormal = - normal;\n\t#endif\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\tnormal = normalize( normalMatrix * normal );\n#elif defined( TANGENTSPACE_NORMALMAP )\n\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\tmapN.xy *= normalScale;\n\t#ifdef USE_TANGENT\n\t\tnormal = normalize( vTBN * mapN );\n\t#else\n\t\tnormal = perturbNormal2Arb( -vViewPosition, normal, mapN );\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
normalmap_pars_fragment:"#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n#endif\n#ifdef OBJECTSPACE_NORMALMAP\n\tuniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\tvec3 N = normalize( surf_norm );\n\t\tmat3 tsn = mat3( S, T, N );\n\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif",
clearcoat_normal_fragment_begin:"#ifdef CLEARCOAT\n\tvec3 clearcoatNormal = geometryNormal;\n#endif",clearcoat_normal_fragment_maps:"#ifdef USE_CLEARCOAT_NORMALMAP\n\tvec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;\n\tclearcoatMapN.xy *= clearcoatNormalScale;\n\t#ifdef USE_TANGENT\n\t\tclearcoatNormal = normalize( vTBN * clearcoatMapN );\n\t#else\n\t\tclearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );\n\t#endif\n#endif",clearcoat_pars_fragment:"#ifdef USE_CLEARCOATMAP\n\tuniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n\tuniform sampler2D clearcoatRoughnessMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n\tuniform sampler2D clearcoatNormalMap;\n\tuniform vec2 clearcoatNormalScale;\n#endif",
packing:"vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nvec4 pack2HalfToRGBA( vec2 v ) {\n\tvec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));\n\treturn vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);\n}\nvec2 unpackRGBATo2Half( vec4 v ) {\n\treturn vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
premultiplied_alpha_fragment:"#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",project_vertex:"vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_INSTANCING\n\tmvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",dithering_fragment:"#ifdef DITHERING\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",dithering_pars_fragment:"#ifdef DITHERING\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
roughnessmap_fragment:"float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",roughnessmap_pars_fragment:"#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",shadowmap_pars_fragment:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tvec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n\t\treturn unpackRGBATo2Half( texture2D( shadow, uv ) );\n\t}\n\tfloat VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n\t\tfloat occlusion = 1.0;\n\t\tvec2 distribution = texture2DDistribution( shadow, uv );\n\t\tfloat hard_shadow = step( compare , distribution.x );\n\t\tif (hard_shadow != 1.0 ) {\n\t\t\tfloat distance = compare - distribution.x ;\n\t\t\tfloat variance = max( 0.00000, distribution.y * distribution.y );\n\t\t\tfloat softness_probability = variance / (variance + distance * distance );\t\t\tsoftness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );\t\t\tocclusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n\t\t}\n\t\treturn occlusion;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tfloat dx2 = dx0 / 2.0;\n\t\t\tfloat dy2 = dy0 / 2.0;\n\t\t\tfloat dx3 = dx1 / 2.0;\n\t\t\tfloat dy3 = dy1 / 2.0;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 17.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx = texelSize.x;\n\t\t\tfloat dy = texelSize.y;\n\t\t\tvec2 uv = shadowCoord.xy;\n\t\t\tvec2 f = fract( uv * shadowMapSize + 0.5 );\n\t\t\tuv -= f * texelSize;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, uv, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n\t\t\t\t\t f.x ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t f.y ) +\n\t\t\t\tmix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), \n\t\t\t\t\t\t  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n\t\t\t\t\t\t  f.x ),\n\t\t\t\t\t f.y )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_VSM )\n\t\t\tshadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
shadowmap_pars_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n\t#endif\n#endif",
shadowmap_vertex:"#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n#endif",
shadowmask_pars_fragment:"float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHT_SHADOWS > 0\n\tDirectionalLightShadow directionalLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n\t\tdirectionalLight = directionalLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_SPOT_LIGHT_SHADOWS > 0\n\tSpotLightShadow spotLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n\t\tspotLight = spotLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#if NUM_POINT_LIGHT_SHADOWS > 0\n\tPointLightShadow pointLight;\n\t#pragma unroll_loop_start\n\tfor ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n\t\tpointLight = pointLightShadows[ i ];\n\t\tshadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#pragma unroll_loop_end\n\t#endif\n\t#endif\n\treturn shadow;\n}",
skinbase_vertex:"#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform highp sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
skinning_vertex:"#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",skinnormal_vertex:"#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
specularmap_fragment:"float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",specularmap_pars_fragment:"#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",tonemapping_fragment:"#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",tonemapping_pars_fragment:"#ifndef saturate\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
uv_pars_fragment:"#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )\n\tvarying vec2 vUv;\n#endif",uv_pars_vertex:"#ifdef USE_UV\n\t#ifdef UVS_VERTEX_ONLY\n\t\tvec2 vUv;\n\t#else\n\t\tvarying vec2 vUv;\n\t#endif\n\tuniform mat3 uvTransform;\n#endif",uv_vertex:"#ifdef USE_UV\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",uv2_pars_fragment:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",uv2_pars_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n\tuniform mat3 uv2Transform;\n#endif",
uv2_vertex:"#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;\n#endif",worldpos_vertex:"#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = vec4( transformed, 1.0 );\n\t#ifdef USE_INSTANCING\n\t\tworldPosition = instanceMatrix * worldPosition;\n\t#endif\n\tworldPosition = modelMatrix * worldPosition;\n#endif",background_frag:"uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
background_vert:"varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",cube_frag:"#include <envmap_common_pars_fragment>\nuniform float opacity;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n\tvec3 vReflect = vWorldDirection;\n\t#include <envmap_fragment>\n\tgl_FragColor = envColor;\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
cube_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",depth_frag:"#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\tfloat fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( fragCoordZ );\n\t#endif\n}",
depth_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvHighPrecisionZW = gl_Position.zw;\n}",
distanceRGBA_frag:"#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
distanceRGBA_vert:"#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
equirect_frag:"uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
equirect_vert:"varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",linedashed_frag:"uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
linedashed_vert:"uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvLineDistance = scale * lineDistance;\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
meshbasic_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\n\t\tvec4 lightMapTexel= texture2D( lightMap, vUv2 );\n\t\treflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshbasic_vert:"#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
meshlambert_frag:"uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshlambert_vert:"#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshmatcap_frag:"#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshmatcap_vert:"#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
meshtoon_frag:"#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_toon_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshtoon_vert:"#define TOON\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshphong_frag:"#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphong_vert:"#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
meshphysical_frag:"#define STANDARD\n#ifdef PHYSICAL\n\t#define REFLECTIVITY\n\t#define CLEARCOAT\n\t#define TRANSPARENCY\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef TRANSPARENCY\n\tuniform float transparency;\n#endif\n#ifdef REFLECTIVITY\n\tuniform float reflectivity;\n#endif\n#ifdef CLEARCOAT\n\tuniform float clearcoat;\n\tuniform float clearcoatRoughness;\n#endif\n#ifdef USE_SHEEN\n\tuniform vec3 sheen;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <clearcoat_normal_fragment_begin>\n\t#include <clearcoat_normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#ifdef TRANSPARENCY\n\t\tdiffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );\n\t#endif\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
meshphysical_vert:"#define STANDARD\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
normal_frag:"#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
normal_vert:"#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
points_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n}",
points_vert:"uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
shadow_frag:"uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",shadow_vert:"#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
sprite_frag:"uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
sprite_vert:"uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = isPerspectiveMatrix( projectionMatrix );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"},
gb={basic:{uniforms:qa([A.common,A.specularmap,A.envmap,A.aomap,A.lightmap,A.fog]),vertexShader:N.meshbasic_vert,fragmentShader:N.meshbasic_frag},lambert:{uniforms:qa([A.common,A.specularmap,A.envmap,A.aomap,A.lightmap,A.emissivemap,A.fog,A.lights,{emissive:{value:new D(0)}}]),vertexShader:N.meshlambert_vert,fragmentShader:N.meshlambert_frag},phong:{uniforms:qa([A.common,A.specularmap,A.envmap,A.aomap,A.lightmap,A.emissivemap,A.bumpmap,A.normalmap,A.displacementmap,A.fog,A.lights,{emissive:{value:new D(0)},
specular:{value:new D(1118481)},shininess:{value:30}}]),vertexShader:N.meshphong_vert,fragmentShader:N.meshphong_frag},standard:{uniforms:qa([A.common,A.envmap,A.aomap,A.lightmap,A.emissivemap,A.bumpmap,A.normalmap,A.displacementmap,A.roughnessmap,A.metalnessmap,A.fog,A.lights,{emissive:{value:new D(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag},toon:{uniforms:qa([A.common,A.specularmap,A.aomap,A.lightmap,
A.emissivemap,A.bumpmap,A.normalmap,A.displacementmap,A.gradientmap,A.fog,A.lights,{emissive:{value:new D(0)},specular:{value:new D(1118481)},shininess:{value:30}}]),vertexShader:N.meshtoon_vert,fragmentShader:N.meshtoon_frag},matcap:{uniforms:qa([A.common,A.bumpmap,A.normalmap,A.displacementmap,A.fog,{matcap:{value:null}}]),vertexShader:N.meshmatcap_vert,fragmentShader:N.meshmatcap_frag},points:{uniforms:qa([A.points,A.fog]),vertexShader:N.points_vert,fragmentShader:N.points_frag},dashed:{uniforms:qa([A.common,
A.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:N.linedashed_vert,fragmentShader:N.linedashed_frag},depth:{uniforms:qa([A.common,A.displacementmap]),vertexShader:N.depth_vert,fragmentShader:N.depth_frag},normal:{uniforms:qa([A.common,A.bumpmap,A.normalmap,A.displacementmap,{opacity:{value:1}}]),vertexShader:N.normal_vert,fragmentShader:N.normal_frag},sprite:{uniforms:qa([A.sprite,A.fog]),vertexShader:N.sprite_vert,fragmentShader:N.sprite_frag},background:{uniforms:{uvTransform:{value:new va},
t2D:{value:null}},vertexShader:N.background_vert,fragmentShader:N.background_frag},cube:{uniforms:qa([A.envmap,{opacity:{value:1}}]),vertexShader:N.cube_vert,fragmentShader:N.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:N.equirect_vert,fragmentShader:N.equirect_frag},distanceRGBA:{uniforms:qa([A.common,A.displacementmap,{referencePosition:{value:new p},nearDistance:{value:1},farDistance:{value:1E3}}]),vertexShader:N.distanceRGBA_vert,fragmentShader:N.distanceRGBA_frag},shadow:{uniforms:qa([A.lights,
A.fog,{color:{value:new D(0)},opacity:{value:1}}]),vertexShader:N.shadow_vert,fragmentShader:N.shadow_frag}};gb.physical={uniforms:qa([gb.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new t(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new D(0)},transparency:{value:0}}]),vertexShader:N.meshphysical_vert,fragmentShader:N.meshphysical_frag};rb.prototype=Object.create(Y.prototype);rb.prototype.constructor=
rb;rb.prototype.isCubeTexture=!0;Object.defineProperty(rb.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});Hc.prototype=Object.create(Y.prototype);Hc.prototype.constructor=Hc;Hc.prototype.isDataTexture2DArray=!0;Ic.prototype=Object.create(Y.prototype);Ic.prototype.constructor=Ic;Ic.prototype.isDataTexture3D=!0;var Ch=new Y,Fj=new Hc,Hj=new Ic,Dh=new rb,wh=[],yh=[],Bh=new Float32Array(16),Ah=new Float32Array(9),zh=new Float32Array(4);Eh.prototype.updateCache=function(a){var b=
this.cache;a instanceof Float32Array&&b.length!==a.length&&(this.cache=new Float32Array(a.length));Ja(b,a)};Fh.prototype.setValue=function(a,b,c){for(var d=this.seq,e=0,f=d.length;e!==f;++e){var g=d[e];g.setValue(a,b[g.id],c)}};var fg=/([\w\d_]+)(\])?(\[|\.)?/g;Hb.prototype.setValue=function(a,b,c,d){b=this.map[b];void 0!==b&&b.setValue(a,c,d)};Hb.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b)};Hb.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],
h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d)}};Hb.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f)}return c};var mk=0,hg=/^[ \t]*#include +<([\w\d./]+)>/gm,Oh=/#pragma unroll_loop[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Nh=/#pragma unroll_loop_start[\s]+?for \( int i = (\d+); i < (\d+); i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g,wk=0;Ib.prototype=Object.create(L.prototype);Ib.prototype.constructor=
Ib;Ib.prototype.isMeshDepthMaterial=!0;Ib.prototype.copy=function(a){L.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this};Jb.prototype=Object.create(L.prototype);Jb.prototype.constructor=
Jb;Jb.prototype.isMeshDistanceMaterial=!0;Jb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.referencePosition.copy(a.referencePosition);this.nearDistance=a.nearDistance;this.farDistance=a.farDistance;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;return this};Me.prototype=Object.assign(Object.create(S.prototype),
{constructor:Me,isArrayCamera:!0});Kc.prototype=Object.assign(Object.create(y.prototype),{constructor:Kc,isGroup:!0});Object.assign(Ne.prototype,{constructor:Ne,getTargetRaySpace:function(){null===this._targetRay&&(this._targetRay=new Kc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1);return this._targetRay},getGripSpace:function(){null===this._grip&&(this._grip=new Kc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1);return this._grip},dispatchEvent:function(a){null!==this._targetRay&&
this._targetRay.dispatchEvent(a);null!==this._grip&&this._grip.dispatchEvent(a);return this},disconnect:function(a){this.dispatchEvent({type:"disconnected",data:a});null!==this._targetRay&&(this._targetRay.visible=!1);null!==this._grip&&(this._grip.visible=!1);return this},update:function(a,b,c){var d=null,e=null,f=this._targetRay,g=this._grip;a&&(null!==f&&(d=b.getPose(a.targetRaySpace,c),null!==d&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale))),null!==
g&&a.gripSpace&&(e=b.getPose(a.gripSpace,c),null!==e&&(g.matrix.fromArray(e.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale))));null!==f&&(f.visible=null!==d);null!==g&&(g.visible=null!==e);return this}});Object.assign(Vh.prototype,Fa.prototype);Object.assign(Oe.prototype,{isFogExp2:!0,clone:function(){return new Oe(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});Object.assign(Pe.prototype,{isFog:!0,clone:function(){return new Pe(this.color,
this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});Object.defineProperty(sb.prototype,"needsUpdate",{set:function(a){!0===a&&this.version++}});Object.assign(sb.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(a){this.usage=a;return this},copy:function(a){this.array=new a.array.constructor(a.array);this.count=a.count;this.stride=a.stride;this.usage=a.usage;return this},copyAt:function(a,b,c){a*=this.stride;
c*=b.stride;for(var d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){void 0===b&&(b=0);this.array.set(a,b);return this},clone:function(){return(new this.constructor).copy(this)},onUpload:function(a){this.onUploadCallback=a;return this}});var tc=new p;Object.defineProperties(Kd.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Kd.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(a){for(var b=
0,c=this.data.count;b<c;b++)tc.x=this.getX(b),tc.y=this.getY(b),tc.z=this.getZ(b),tc.applyMatrix4(a),this.setXYZ(b,tc.x,tc.y,tc.z);return this},setX:function(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this},setY:function(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this},setZ:function(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this},setW:function(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this},getX:function(a){return this.data.array[a*
this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this},setXYZ:function(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this},
setXYZW:function(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this},clone:function(){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");for(var a=[],b=0;b<this.count;b++)for(var c=b*this.data.stride+this.offset,d=0;d<this.itemSize;d++)a.push(this.data.array[c+d]);return new F(new this.array.constructor(a),this.itemSize,this.normalized)},
toJSON:function(){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");for(var a=[],b=0;b<this.count;b++)for(var c=b*this.data.stride+this.offset,d=0;d<this.itemSize;d++)a.push(this.data.array[c+d]);return{itemSize:this.itemSize,type:this.array.constructor.name,array:a,normalized:this.normalized}}});Lb.prototype=Object.create(L.prototype);Lb.prototype.constructor=Lb;Lb.prototype.isSpriteMaterial=!0;Lb.prototype.copy=function(a){L.prototype.copy.call(this,
a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.rotation=a.rotation;this.sizeAttenuation=a.sizeAttenuation;return this};var Lc,xe=new p,vd=new p,wd=new p,Mc=new t,Md=new t,Xh=new O,Jf=new p,ye=new p,Kf=new p,Ei=new t,hh=new t,Fi=new t;Ld.prototype=Object.assign(Object.create(y.prototype),{constructor:Ld,isSprite:!0,raycast:function(a,b){null===a.camera&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.');vd.setFromMatrixScale(this.matrixWorld);
Xh.copy(a.camera.matrixWorld);this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse,this.matrixWorld);wd.setFromMatrixPosition(this.modelViewMatrix);a.camera.isPerspectiveCamera&&!1===this.material.sizeAttenuation&&vd.multiplyScalar(-wd.z);var c=this.material.rotation;if(0!==c){var d=Math.cos(c);var e=Math.sin(c)}c=this.center;Qe(Jf.set(-.5,-.5,0),wd,c,vd,e,d);Qe(ye.set(.5,-.5,0),wd,c,vd,e,d);Qe(Kf.set(.5,.5,0),wd,c,vd,e,d);Ei.set(0,0);hh.set(1,0);Fi.set(1,1);var f=a.ray.intersectTriangle(Jf,
ye,Kf,!1,xe);if(null===f&&(Qe(ye.set(-.5,.5,0),wd,c,vd,e,d),hh.set(0,1),f=a.ray.intersectTriangle(Jf,Kf,ye,!1,xe),null===f))return;e=a.ray.origin.distanceTo(xe);e<a.near||e>a.far||b.push({distance:e,point:xe.clone(),uv:pa.getUV(xe,Jf,ye,Kf,Ei,hh,Fi,new t),face:null,object:this})},clone:function(){return(new this.constructor(this.material)).copy(this)},copy:function(a){y.prototype.copy.call(this,a);void 0!==a.center&&this.center.copy(a.center);return this}});var Lf=new p,Gi=new p;Nd.prototype=Object.assign(Object.create(y.prototype),
{constructor:Nd,isLOD:!0,copy:function(a){y.prototype.copy.call(this,a,!1);for(var b=a.levels,c=0,d=b.length;c<d;c++){var e=b[c];this.addLevel(e.object.clone(),e.distance)}this.autoUpdate=a.autoUpdate;return this},addLevel:function(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++);c.splice(d,0,{distance:b,object:a});this.add(a);return this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(a){var b=this.levels;if(0<
b.length){for(var c=1,d=b.length;c<d&&!(a<b[c].distance);c++);return b[c-1].object}return null},raycast:function(a,b){if(0<this.levels.length){Lf.setFromMatrixPosition(this.matrixWorld);var c=a.ray.origin.distanceTo(Lf);this.getObjectForDistance(c).raycast(a,b)}},update:function(a){var b=this.levels;if(1<b.length){Lf.setFromMatrixPosition(a.matrixWorld);Gi.setFromMatrixPosition(this.matrixWorld);a=Lf.distanceTo(Gi)/a.zoom;b[0].object.visible=!0;for(var c=1,d=b.length;c<d;c++)if(a>=b[c].distance)b[c-
1].object.visible=!1,b[c].object.visible=!0;else break;for(this._currentLevel=c-1;c<d;c++)b[c].object.visible=!1}},toJSON:function(a){a=y.prototype.toJSON.call(this,a);!1===this.autoUpdate&&(a.object.autoUpdate=!1);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance})}return a}});Re.prototype=Object.assign(Object.create(ha.prototype),{constructor:Re,isSkinnedMesh:!0,bind:function(a,b){this.skeleton=a;void 0===b&&
(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){for(var a=new fa,b=this.geometry.attributes.skinWeight,c=0,d=b.count;c<d;c++){a.x=b.getX(c);a.y=b.getY(c);a.z=b.getZ(c);a.w=b.getW(c);var e=1/a.manhattanLength();Infinity!==e?a.multiplyScalar(e):a.set(1,0,0,0);b.setXYZW(c,a.x,a.y,a.z,a.w)}},updateMatrixWorld:function(a){ha.prototype.updateMatrixWorld.call(this,
a);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)},boneTransform:function(){var a=new p,b=new fa,c=new fa,d=new p,e=new O;return function(f,g){var h=this.skeleton,l=this.geometry;b.fromBufferAttribute(l.attributes.skinIndex,f);c.fromBufferAttribute(l.attributes.skinWeight,
f);a.fromBufferAttribute(l.attributes.position,f).applyMatrix4(this.bindMatrix);g.set(0,0,0);for(f=0;4>f;f++)if(l=c.getComponent(f),0!==l){var m=b.getComponent(f);e.multiplyMatrices(h.bones[m].matrixWorld,h.boneInverses[m]);g.addScaledVector(d.copy(a).applyMatrix4(e),l)}return g.applyMatrix4(this.bindMatrixInverse)}}()});var Hi=new O,Rk=new O;Object.assign(Se.prototype,{calculateInverses:function(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new O;this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);
this.boneInverses.push(c)}},pose:function(){var a,b;var c=0;for(b=this.bones.length;c<b;c++)(a=this.bones[c])&&a.matrixWorld.getInverse(this.boneInverses[c]);c=0;for(b=this.bones.length;c<b;c++)if(a=this.bones[c])a.parent&&a.parent.isBone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale)},update:function(){for(var a=this.bones,b=this.boneInverses,c=this.boneMatrices,d=this.boneTexture,e=0,f=
a.length;e<f;e++)Hi.multiplyMatrices(a[e]?a[e].matrixWorld:Rk,b[e]),Hi.toArray(c,16*e);void 0!==d&&(d.needsUpdate=!0)},clone:function(){return new Se(this.bones,this.boneInverses)},getBoneByName:function(a){for(var b=0,c=this.bones.length;b<c;b++){var d=this.bones[b];if(d.name===a)return d}},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});lg.prototype=Object.assign(Object.create(y.prototype),{constructor:lg,isBone:!0});var Ii=new O,Ji=new O,Mf=[],ze=new ha;
Te.prototype=Object.assign(Object.create(ha.prototype),{constructor:Te,isInstancedMesh:!0,getMatrixAt:function(a,b){b.fromArray(this.instanceMatrix.array,16*a)},raycast:function(a,b){var c=this.matrixWorld,d=this.count;ze.geometry=this.geometry;ze.material=this.material;if(void 0!==ze.material)for(var e=0;e<d;e++){this.getMatrixAt(e,Ii);Ji.multiplyMatrices(c,Ii);ze.matrixWorld=Ji;ze.raycast(a,Mf);for(var f=0,g=Mf.length;f<g;f++){var h=Mf[f];h.instanceId=e;h.object=this;b.push(h)}Mf.length=0}},setMatrixAt:function(a,
b){b.toArray(this.instanceMatrix.array,16*a)},updateMorphTargets:function(){}});ca.prototype=Object.create(L.prototype);ca.prototype.constructor=ca;ca.prototype.isLineBasicMaterial=!0;ca.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;this.morphTargets=a.morphTargets;return this};var Ki=new p,Li=new p,Mi=new O,Nf=new Xb,Ae=new eb;La.prototype=Object.assign(Object.create(y.prototype),{constructor:La,
isLine:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry)if(null===a.index){for(var b=a.attributes.position,c=[0],d=1,e=b.count;d<e;d++)Ki.fromBufferAttribute(b,d-1),Li.fromBufferAttribute(b,d),c[d]=c[d-1],c[d]+=Ki.distanceTo(Li);a.setAttribute("lineDistance",new B(c,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,c[0]=0,d=1,e=b.length;d<e;d++)c[d]=
c[d-1],c[d]+=b[d-1].distanceTo(b[d]);return this},raycast:function(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Line.threshold;null===c.boundingSphere&&c.computeBoundingSphere();Ae.copy(c.boundingSphere);Ae.applyMatrix4(d);Ae.radius+=e;if(!1!==a.ray.intersectsSphere(Ae)){Mi.getInverse(d);Nf.copy(a.ray).applyMatrix4(Mi);d=e/((this.scale.x+this.scale.y+this.scale.z)/3);d*=d;var f=new p,g=new p;e=new p;var h=new p,l=this&&this.isLineSegments?2:1;if(c.isBufferGeometry){var m=c.index,k=c.attributes.position.array;
if(null!==m){m=m.array;c=0;for(var n=m.length-1;c<n;c+=l){var v=m[c+1];f.fromArray(k,3*m[c]);g.fromArray(k,3*v);v=Nf.distanceSqToSegment(f,g,h,e);v>d||(h.applyMatrix4(this.matrixWorld),v=a.ray.origin.distanceTo(h),v<a.near||v>a.far||b.push({distance:v,point:e.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}))}}else for(c=0,n=k.length/3-1;c<n;c+=l)f.fromArray(k,3*c),g.fromArray(k,3*c+3),v=Nf.distanceSqToSegment(f,g,h,e),v>d||(h.applyMatrix4(this.matrixWorld),v=a.ray.origin.distanceTo(h),
v<a.near||v>a.far||b.push({distance:v,point:e.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}))}else if(c.isGeometry)for(f=c.vertices,g=f.length,c=0;c<g-1;c+=l)v=Nf.distanceSqToSegment(f[c],f[c+1],h,e),v>d||(h.applyMatrix4(this.matrixWorld),v=a.ray.origin.distanceTo(h),v<a.near||v>a.far||b.push({distance:v,point:e.clone().applyMatrix4(this.matrixWorld),index:c,face:null,faceIndex:null,object:this}))}},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=
a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});
var Of=new p,Pf=new p;la.prototype=Object.assign(Object.create(La.prototype),{constructor:la,isLineSegments:!0,computeLineDistances:function(){var a=this.geometry;if(a.isBufferGeometry)if(null===a.index){for(var b=a.attributes.position,c=[],d=0,e=b.count;d<e;d+=2)Of.fromBufferAttribute(b,d),Pf.fromBufferAttribute(b,d+1),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Of.distanceTo(Pf);a.setAttribute("lineDistance",new B(c,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
else if(a.isGeometry)for(b=a.vertices,c=a.lineDistances,d=0,e=b.length;d<e;d+=2)Of.copy(b[d]),Pf.copy(b[d+1]),c[d]=0===d?0:c[d-1],c[d+1]=c[d]+Of.distanceTo(Pf);return this}});Ue.prototype=Object.assign(Object.create(La.prototype),{constructor:Ue,isLineLoop:!0});Xa.prototype=Object.create(L.prototype);Xa.prototype.constructor=Xa;Xa.prototype.isPointsMaterial=!0;Xa.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.alphaMap=a.alphaMap;this.size=a.size;
this.sizeAttenuation=a.sizeAttenuation;this.morphTargets=a.morphTargets;return this};var Ni=new O,ng=new Xb,Be=new eb,Qf=new p;Nc.prototype=Object.assign(Object.create(y.prototype),{constructor:Nc,isPoints:!0,raycast:function(a,b){var c=this.geometry,d=this.matrixWorld,e=a.params.Points.threshold;null===c.boundingSphere&&c.computeBoundingSphere();Be.copy(c.boundingSphere);Be.applyMatrix4(d);Be.radius+=e;if(!1!==a.ray.intersectsSphere(Be))if(Ni.getInverse(d),ng.copy(a.ray).applyMatrix4(Ni),e/=(this.scale.x+
this.scale.y+this.scale.z)/3,e*=e,c.isBufferGeometry){var f=c.index;c=c.attributes.position.array;if(null!==f){var g=f.array;f=0;for(var h=g.length;f<h;f++){var l=g[f];Qf.fromArray(c,3*l);mg(Qf,l,e,d,a,b,this)}}else for(f=0,g=c.length/3;f<g;f++)Qf.fromArray(c,3*f),mg(Qf,f,e,d,a,b,this)}else for(c=c.vertices,f=0,g=c.length;f<g;f++)mg(c[f],f,e,d,a,b,this)},updateMorphTargets:function(){var a=this.geometry;if(a.isBufferGeometry){a=a.morphAttributes;var b=Object.keys(a);if(0<b.length){var c=a[b[0]];if(void 0!==
c)for(this.morphTargetInfluences=[],this.morphTargetDictionary={},a=0,b=c.length;a<b;a++){var d=c[a].name||String(a);this.morphTargetInfluences.push(0);this.morphTargetDictionary[d]=a}}}else a=a.morphTargets,void 0!==a&&0<a.length&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")},clone:function(){return(new this.constructor(this.geometry,this.material)).copy(this)}});og.prototype=Object.assign(Object.create(Y.prototype),{constructor:og,
isVideoTexture:!0,update:function(){var a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});Oc.prototype=Object.create(Y.prototype);Oc.prototype.constructor=Oc;Oc.prototype.isCompressedTexture=!0;Od.prototype=Object.create(Y.prototype);Od.prototype.constructor=Od;Od.prototype.isCanvasTexture=!0;Pd.prototype=Object.create(Y.prototype);Pd.prototype.constructor=Pd;Pd.prototype.isDepthTexture=!0;Pc.prototype=Object.create(E.prototype);Pc.prototype.constructor=Pc;Qd.prototype=Object.create(J.prototype);
Qd.prototype.constructor=Qd;Qc.prototype=Object.create(E.prototype);Qc.prototype.constructor=Qc;Rd.prototype=Object.create(J.prototype);Rd.prototype.constructor=Rd;Ha.prototype=Object.create(E.prototype);Ha.prototype.constructor=Ha;Sd.prototype=Object.create(J.prototype);Sd.prototype.constructor=Sd;Rc.prototype=Object.create(Ha.prototype);Rc.prototype.constructor=Rc;Td.prototype=Object.create(J.prototype);Td.prototype.constructor=Td;cc.prototype=Object.create(Ha.prototype);cc.prototype.constructor=
cc;Ud.prototype=Object.create(J.prototype);Ud.prototype.constructor=Ud;Sc.prototype=Object.create(Ha.prototype);Sc.prototype.constructor=Sc;Vd.prototype=Object.create(J.prototype);Vd.prototype.constructor=Vd;Tc.prototype=Object.create(Ha.prototype);Tc.prototype.constructor=Tc;Wd.prototype=Object.create(J.prototype);Wd.prototype.constructor=Wd;dc.prototype=Object.create(E.prototype);dc.prototype.constructor=dc;dc.prototype.toJSON=function(){var a=E.prototype.toJSON.call(this);a.path=this.parameters.path.toJSON();
return a};Xd.prototype=Object.create(J.prototype);Xd.prototype.constructor=Xd;Uc.prototype=Object.create(E.prototype);Uc.prototype.constructor=Uc;Yd.prototype=Object.create(J.prototype);Yd.prototype.constructor=Yd;Vc.prototype=Object.create(E.prototype);Vc.prototype.constructor=Vc;var Sk={triangulate:function(a,b,c){c=c||2;var d=b&&b.length,e=d?b[0]*c:a.length,f=Yh(a,0,e,c,!0),g=[];if(!f||f.next===f.prev)return g;var h;if(d){var l=c;d=[];var m;var k=0;for(m=b.length;k<m;k++){var n=b[k]*l;var p=k<
m-1?b[k+1]*l:a.length;n=Yh(a,n,p,l,!1);n===n.next&&(n.steiner=!0);d.push(Ek(n))}d.sort(Ck);for(k=0;k<d.length;k++){l=d[k];b=f;if(b=Dk(l,b))l=ai(b,l),Mb(b,b.next),Mb(l,l.next);f=Mb(f,f.next)}}if(a.length>80*c){var r=h=a[0];var q=d=a[1];for(l=c;l<e;l+=c)k=a[l],b=a[l+1],k<r&&(r=k),b<q&&(q=b),k>h&&(h=k),b>d&&(d=b);h=Math.max(h-r,d-q);h=0!==h?1/h:0}$d(f,g,c,r,q,h);return g}},tb={area:function(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return.5*c},isClockWise:function(a){return 0>
tb.area(a)},triangulateShape:function(a,b){var c=[],d=[],e=[];bi(a);ci(c,a);var f=a.length;b.forEach(bi);for(a=0;a<b.length;a++)d.push(f),f+=b[a].length,ci(c,b[a]);b=Sk.triangulate(c,d);for(a=0;a<b.length;a+=3)e.push(b.slice(a,a+3));return e}};ec.prototype=Object.create(J.prototype);ec.prototype.constructor=ec;ec.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);return di(this.parameters.shapes,this.parameters.options,a)};hb.prototype=Object.create(E.prototype);hb.prototype.constructor=
hb;hb.prototype.toJSON=function(){var a=E.prototype.toJSON.call(this);return di(this.parameters.shapes,this.parameters.options,a)};var Fk={generateTopUV:function(a,b,c,d,e){a=b[3*d];d=b[3*d+1];var f=b[3*e];e=b[3*e+1];return[new t(b[3*c],b[3*c+1]),new t(a,d),new t(f,e)]},generateSideWallUV:function(a,b,c,d,e,f){a=b[3*c];var g=b[3*c+1];c=b[3*c+2];var h=b[3*d],l=b[3*d+1];d=b[3*d+2];var m=b[3*e],k=b[3*e+1];e=b[3*e+2];var n=b[3*f],p=b[3*f+1];b=b[3*f+2];return.01>Math.abs(g-l)?[new t(a,1-c),new t(h,1-d),
new t(m,1-e),new t(n,1-b)]:[new t(g,1-c),new t(l,1-d),new t(k,1-e),new t(p,1-b)]}};be.prototype=Object.create(J.prototype);be.prototype.constructor=be;Xc.prototype=Object.create(hb.prototype);Xc.prototype.constructor=Xc;ce.prototype=Object.create(J.prototype);ce.prototype.constructor=ce;fc.prototype=Object.create(E.prototype);fc.prototype.constructor=fc;de.prototype=Object.create(J.prototype);de.prototype.constructor=de;Yc.prototype=Object.create(E.prototype);Yc.prototype.constructor=Yc;ee.prototype=
Object.create(J.prototype);ee.prototype.constructor=ee;Zc.prototype=Object.create(E.prototype);Zc.prototype.constructor=Zc;gc.prototype=Object.create(J.prototype);gc.prototype.constructor=gc;gc.prototype.toJSON=function(){var a=J.prototype.toJSON.call(this);return ei(this.parameters.shapes,a)};hc.prototype=Object.create(E.prototype);hc.prototype.constructor=hc;hc.prototype.toJSON=function(){var a=E.prototype.toJSON.call(this);return ei(this.parameters.shapes,a)};$c.prototype=Object.create(E.prototype);
$c.prototype.constructor=$c;ic.prototype=Object.create(J.prototype);ic.prototype.constructor=ic;ub.prototype=Object.create(E.prototype);ub.prototype.constructor=ub;fe.prototype=Object.create(ic.prototype);fe.prototype.constructor=fe;ge.prototype=Object.create(ub.prototype);ge.prototype.constructor=ge;he.prototype=Object.create(J.prototype);he.prototype.constructor=he;ad.prototype=Object.create(E.prototype);ad.prototype.constructor=ad;var ua=Object.freeze({__proto__:null,WireframeGeometry:Pc,ParametricGeometry:Qd,
ParametricBufferGeometry:Qc,TetrahedronGeometry:Sd,TetrahedronBufferGeometry:Rc,OctahedronGeometry:Td,OctahedronBufferGeometry:cc,IcosahedronGeometry:Ud,IcosahedronBufferGeometry:Sc,DodecahedronGeometry:Vd,DodecahedronBufferGeometry:Tc,PolyhedronGeometry:Rd,PolyhedronBufferGeometry:Ha,TubeGeometry:Wd,TubeBufferGeometry:dc,TorusKnotGeometry:Xd,TorusKnotBufferGeometry:Uc,TorusGeometry:Yd,TorusBufferGeometry:Vc,TextGeometry:be,TextBufferGeometry:Xc,SphereGeometry:ce,SphereBufferGeometry:fc,RingGeometry:de,
RingBufferGeometry:Yc,PlaneGeometry:Fd,PlaneBufferGeometry:bc,LatheGeometry:ee,LatheBufferGeometry:Zc,ShapeGeometry:gc,ShapeBufferGeometry:hc,ExtrudeGeometry:ec,ExtrudeBufferGeometry:hb,EdgesGeometry:$c,ConeGeometry:fe,ConeBufferGeometry:ge,CylinderGeometry:ic,CylinderBufferGeometry:ub,CircleGeometry:he,CircleBufferGeometry:ad,BoxGeometry:gh,BoxBufferGeometry:Gd});jc.prototype=Object.create(L.prototype);jc.prototype.constructor=jc;jc.prototype.isShadowMaterial=!0;jc.prototype.copy=function(a){L.prototype.copy.call(this,
a);this.color.copy(a.color);return this};vb.prototype=Object.create(Ca.prototype);vb.prototype.constructor=vb;vb.prototype.isRawShaderMaterial=!0;ib.prototype=Object.create(L.prototype);ib.prototype.constructor=ib;ib.prototype.isMeshStandardMaterial=!0;ib.prototype.copy=function(a){L.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;
this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=
a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.vertexTangents=a.vertexTangents;return this};kc.prototype=Object.create(ib.prototype);kc.prototype.constructor=kc;kc.prototype.isMeshPhysicalMaterial=
!0;kc.prototype.copy=function(a){ib.prototype.copy.call(this,a);this.defines={STANDARD:"",PHYSICAL:""};this.clearcoat=a.clearcoat;this.clearcoatMap=a.clearcoatMap;this.clearcoatRoughness=a.clearcoatRoughness;this.clearcoatRoughnessMap=a.clearcoatRoughnessMap;this.clearcoatNormalMap=a.clearcoatNormalMap;this.clearcoatNormalScale.copy(a.clearcoatNormalScale);this.reflectivity=a.reflectivity;this.sheen=a.sheen?(this.sheen||new D).copy(a.sheen):null;this.transparency=a.transparency;return this};Nb.prototype=
Object.create(L.prototype);Nb.prototype.constructor=Nb;Nb.prototype.isMeshPhongMaterial=!0;Nb.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;
this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=
a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};lc.prototype=Object.create(L.prototype);lc.prototype.constructor=lc;lc.prototype.isMeshToonMaterial=!0;lc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.gradientMap=a.gradientMap;this.lightMap=a.lightMap;this.lightMapIntensity=
a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;
this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};mc.prototype=Object.create(L.prototype);mc.prototype.constructor=mc;mc.prototype.isMeshNormalMaterial=!0;mc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;
this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};nc.prototype=Object.create(L.prototype);nc.prototype.constructor=nc;nc.prototype.isMeshLambertMaterial=!0;nc.prototype.copy=function(a){L.prototype.copy.call(this,
a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;
this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};oc.prototype=Object.create(L.prototype);oc.prototype.constructor=oc;oc.prototype.isMeshMatcapMaterial=!0;oc.prototype.copy=function(a){L.prototype.copy.call(this,a);this.defines={MATCAP:""};this.color.copy(a.color);this.matcap=a.matcap;this.map=a.map;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=
a.normalMap;this.normalMapType=a.normalMapType;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.alphaMap=a.alphaMap;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this};pc.prototype=Object.create(ca.prototype);pc.prototype.constructor=pc;pc.prototype.isLineDashedMaterial=!0;pc.prototype.copy=function(a){ca.prototype.copy.call(this,a);
this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this};var Tk=Object.freeze({__proto__:null,ShadowMaterial:jc,SpriteMaterial:Lb,RawShaderMaterial:vb,ShaderMaterial:Ca,PointsMaterial:Xa,MeshPhysicalMaterial:kc,MeshStandardMaterial:ib,MeshPhongMaterial:Nb,MeshToonMaterial:lc,MeshNormalMaterial:mc,MeshLambertMaterial:nc,MeshDepthMaterial:Ib,MeshDistanceMaterial:Jb,MeshBasicMaterial:Pa,MeshMatcapMaterial:oc,LineDashedMaterial:pc,LineBasicMaterial:ca,Material:L}),ka={arraySlice:function(a,
b,c){return ka.isTypedArray(a)?new a.constructor(a.subarray(b,void 0!==c?c:a.length)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d)c[d]=d;c.sort(function(b,c){return a[b]-a[c]});return c},sortedArray:function(a,b,c){for(var d=a.length,e=
new a.constructor(d),f=0,g=0;g!==d;++f)for(var h=c[f]*b,l=0;l!==b;++l)e[g++]=a[h+l];return e},flattenJSON:function(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];)f=a[e++];if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(void 0!==f)}else if(void 0!==g.toArray){do g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(void 0!==f)}else{do g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];
while(void 0!==f)}}},subclip:function(a,b,c,d,e){e=e||30;a=a.clone();a.name=b;var f=[];for(b=0;b<a.tracks.length;++b){for(var g=a.tracks[b],h=g.getValueSize(),l=[],m=[],k=0;k<g.times.length;++k){var n=g.times[k]*e;if(!(n<c||n>=d))for(l.push(g.times[k]),n=0;n<h;++n)m.push(g.values[k*h+n])}0!==l.length&&(g.times=ka.convertArray(l,g.times.constructor),g.values=ka.convertArray(m,g.values.constructor),f.push(g))}a.tracks=f;c=Infinity;for(b=0;b<a.tracks.length;++b)c>a.tracks[b].times[0]&&(c=a.tracks[b].times[0]);
for(b=0;b<a.tracks.length;++b)a.tracks[b].shift(-1*c);a.resetDuration();return a},makeClipAdditive:function(a,b,c,d){void 0===b&&(b=0);void 0===c&&(c=a);if(void 0===d||0>=d)d=30;var e=a.tracks.length;b/=d;for(d=0;d<e;++d){var f=c.tracks[d],g=f.ValueTypeName;if("bool"!==g&&"string"!==g){var h=a.tracks.find(function(a){return a.name===f.name&&a.ValueTypeName===g});if(void 0!==h){var l=f.getValueSize(),m=f.times.length-1;b<=f.times[0]?m=ka.arraySlice(f.values,0,f.valueSize):b>=f.times[m]?m=ka.arraySlice(f.values,
m*l):(m=f.createInterpolant(),m.evaluate(b),m=m.resultBuffer);"quaternion"===g&&(new na(m[0],m[1],m[2],m[3])).normalize().conjugate().toArray(m);for(var k=h.times.length,n=0;n<k;++n){var p=n*l;if("quaternion"===g)na.multiplyQuaternionsFlat(h.values,p,m,0,h.values,p);else for(var r=0;r<l;++r)h.values[p+r]-=m[r]}}}}a.blendMode=2501;return a}};Object.assign(Ma.prototype,{evaluate:function(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===
d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e)}if(c===f)break;e=d;d=b[++c];if(a<d)break b}d=b.length;break c}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b}d=c;c=0}}for(;c<d;)e=c+d>>>1,a<b[e]?d=e:c=e+1;d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-
1,e,a)}this._cachedIndex=c;this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e)b[e]=c[a+e];return b},interpolate_:function(){throw Error("call to abstract method");},intervalChanged_:function(){}});Object.assign(Ma.prototype,{beforeStart_:Ma.prototype.copySampleValue_,
afterEnd_:Ma.prototype.copySampleValue_});Ye.prototype=Object.assign(Object.create(Ma.prototype),{constructor:Ye,DefaultSettings_:{endingStart:2400,endingEnd:2400},intervalChanged_:function(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case 2401:e=a;g=2*b-c;break;case 2402:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c}if(void 0===h)switch(this.getSettings_().endingEnd){case 2401:f=a;h=2*c-b;break;case 2402:f=1;h=c+d[1]-d[0];
break;default:f=a-1,h=b}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d},interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,l=this._offsetPrev,m=this._offsetNext,k=this._weightPrev,n=this._weightNext,p=(c-b)/(d-b);c=p*p;d=c*p;b=-k*d+2*k*c-k*p;k=(1+k)*d+(-1.5-2*k)*c+(-.5+k)*p+1;p=(-1-n)*d+(1.5+n)*c+.5*p;n=n*d-n*c;for(c=0;c!==g;++c)e[c]=b*f[l+c]+k*f[h+c]+p*f[a+c]+n*f[m+c];
return e}});ie.prototype=Object.assign(Object.create(Ma.prototype),{constructor:ie,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d)e[d]=f[h+d]*c+f[a+d]*b;return e}});Ze.prototype=Object.assign(Object.create(Ma.prototype),{constructor:Ze,interpolate_:function(a){return this.copySampleValue_(a-1)}});Object.assign(ya,{toJSON:function(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{b={name:a.name,
times:ka.convertArray(a.times,Array),values:ka.convertArray(a.values,Array)};var c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c)}b.type=a.ValueTypeName;return b}});Object.assign(ya.prototype,{constructor:ya,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:2301,InterpolantFactoryMethodDiscrete:function(a){return new Ze(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new ie(this.times,this.values,this.getValueSize(),
a)},InterpolantFactoryMethodSmooth:function(a){return new Ye(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){switch(a){case 2300:var b=this.InterpolantFactoryMethodDiscrete;break;case 2301:b=this.InterpolantFactoryMethodLinear;break;case 2302:b=this.InterpolantFactoryMethodSmooth}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);
else throw Error(b);console.warn("THREE.KeyframeTrack:",b);return this}this.createInterpolant=b;return this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]+=a;return this},scale:function(a){if(1!==
a)for(var b=this.times,c=0,d=b.length;c!==d;++c)b[c]*=a;return this},trim:function(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;)++e;for(;-1!==f&&c[f]>b;)--f;++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),a=this.getValueSize(),this.times=ka.arraySlice(c,e,f),this.values=ka.arraySlice(this.values,e*a,f*a);return this},validate:function(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);var c=this.times;
b=this.values;var d=c.length;0===d&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,f,g);a=!1;break}if(null!==e&&e>g){console.error("THREE.KeyframeTrack: Out of order keys.",this,f,g,e);a=!1;break}e=g}if(void 0!==b&&ka.isTypedArray(b))for(f=0,c=b.length;f!==c;++f)if(d=b[f],isNaN(d)){console.error("THREE.KeyframeTrack: Value is not a valid number.",
this,f,d);a=!1;break}return a},optimize:function(){for(var a=ka.arraySlice(this.times),b=ka.arraySlice(this.values),c=this.getValueSize(),d=2302===this.getInterpolation(),e=1,f=a.length-1,g=1;g<f;++g){var h=!1,l=a[g];if(l!==a[g+1]&&(1!==g||l!==l[0]))if(d)h=!0;else{var m=g*c,k=m-c,n=m+c;for(l=0;l!==c;++l){var p=b[m+l];if(p!==b[k+l]||p!==b[n+l]){h=!0;break}}}if(h){if(g!==e)for(a[e]=a[g],h=g*c,m=e*c,l=0;l!==c;++l)b[m+l]=b[h+l];++e}}if(0<f){a[e]=a[f];h=f*c;m=e*c;for(l=0;l!==c;++l)b[m+l]=b[h+l];++e}e!==
a.length?(this.times=ka.arraySlice(a,0,e),this.values=ka.arraySlice(b,0,e*c)):(this.times=a,this.values=b);return this},clone:function(){var a=ka.arraySlice(this.times,0),b=ka.arraySlice(this.values,0);a=new this.constructor(this.name,a,b);a.createInterpolant=this.createInterpolant;return a}});$e.prototype=Object.assign(Object.create(ya.prototype),{constructor:$e,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});
af.prototype=Object.assign(Object.create(ya.prototype),{constructor:af,ValueTypeName:"color"});bd.prototype=Object.assign(Object.create(ya.prototype),{constructor:bd,ValueTypeName:"number"});bf.prototype=Object.assign(Object.create(Ma.prototype),{constructor:bf,interpolate_:function(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4)na.slerpFlat(e,0,f,a-g,f,a,b);return e}});je.prototype=Object.assign(Object.create(ya.prototype),{constructor:je,
ValueTypeName:"quaternion",DefaultInterpolation:2301,InterpolantFactoryMethodLinear:function(a){return new bf(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});cf.prototype=Object.assign(Object.create(ya.prototype),{constructor:cf,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:2300,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});cd.prototype=Object.assign(Object.create(ya.prototype),{constructor:cd,ValueTypeName:"vector"});
Object.assign(Sa,{parse:function(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e)b.push(Hk(c[e]).scale(d));return new Sa(a.name,a.duration,b,a.blendMode)},toJSON:function(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid,blendMode:a.blendMode};for(var d=0,e=c.length;d!==e;++d)b.push(ya.toJSON(c[d]));return a},CreateFromMorphTargetSequence:function(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],l=[];h.push((g+e-1)%e,g,(g+1)%e);l.push(0,1,0);var m=
ka.getKeyframeOrder(h);h=ka.sortedArray(h,1,m);l=ka.sortedArray(l,1,m);d||0!==h[0]||(h.push(e),l.push(l[0]));f.push((new bd(".morphTargetInfluences["+b[g].name+"]",h,l)).scale(1/c))}return new Sa(a,-1,f)},findByName:function(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(a=0;a<c.length;a++)if(c[a].name===b)return c[a];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],l=h.name.match(e);
if(l&&1<l.length){var m=l[1];(l=d[m])||(d[m]=l=[]);l.push(h)}}a=[];for(m in d)a.push(Sa.CreateFromMorphTargetSequence(m,d[m],b,c));return a},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;var c=function(a,b,c,d,e){if(0!==c.length){var f=[],g=[];ka.flattenJSON(c,f,g,d);0!==f.length&&e.push(new a(b,f,g))}},d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30,h=a.blendMode;a=a.hierarchy||[];for(var l=0;l<a.length;l++){var m=a[l].keys;
if(m&&0!==m.length)if(m[0].morphTargets){f={};for(var k=0;k<m.length;k++)if(m[k].morphTargets)for(var n=0;n<m[k].morphTargets.length;n++)f[m[k].morphTargets[n]]=-1;for(var p in f){var r=[],q=[];for(n=0;n!==m[k].morphTargets.length;++n){var u=m[k];r.push(u.time);q.push(u.morphTarget===p?1:0)}d.push(new bd(".morphTargetInfluence["+p+"]",r,q))}f=f.length*(g||1)}else k=".bones["+b[l].name+"]",c(cd,k+".position",m,"pos",d),c(je,k+".quaternion",m,"rot",d),c(cd,k+".scale",m,"scl",d)}return 0===d.length?
null:new Sa(e,f,d,h)}});Object.assign(Sa.prototype,{resetDuration:function(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b];a=Math.max(a,d.times[d.times.length-1])}this.duration=a;return this},trim:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},validate:function(){for(var a=!0,b=0;b<this.tracks.length;b++)a=a&&this.tracks[b].validate();return a},optimize:function(){for(var a=0;a<this.tracks.length;a++)this.tracks[a].optimize();
return this},clone:function(){for(var a=[],b=0;b<this.tracks.length;b++)a.push(this.tracks[b].clone());return new Sa(this.name,this.duration,a,this.blendMode)}});var uc={enabled:!1,files:{},add:function(a,b){!1!==this.enabled&&(this.files[a]=b)},get:function(a){if(!1!==this.enabled)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}},fi=new rg;Object.assign(V.prototype,{load:function(){},loadAsync:function(a,b){var c=this;return new Promise(function(d,e){c.load(a,
d,b,e)})},parse:function(){},setCrossOrigin:function(a){this.crossOrigin=a;return this},setPath:function(a){this.path=a;return this},setResourcePath:function(a){this.resourcePath=a;return this},setRequestHeader:function(a){this.requestHeader=a;return this}});var db={};Ta.prototype=Object.assign(Object.create(V.prototype),{constructor:Ta,load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=uc.get(a);if(void 0!==f)return e.manager.itemStart(a),
setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;if(void 0!==db[a])db[a].push({onLoad:b,onProgress:c,onError:d});else{var g=a.match(/^data:(.*?)(;base64)?,(.*)$/);if(g){c=g[1];var h=!!g[2];g=g[3];g=decodeURIComponent(g);h&&(g=atob(g));try{var l=(this.responseType||"").toLowerCase();switch(l){case "arraybuffer":case "blob":var k=new Uint8Array(g.length);for(h=0;h<g.length;h++)k[h]=g.charCodeAt(h);var p="blob"===l?new Blob([k.buffer],{type:c}):k.buffer;break;case "document":p=(new DOMParser).parseFromString(g,
c);break;case "json":p=JSON.parse(g);break;default:p=g}setTimeout(function(){b&&b(p);e.manager.itemEnd(a)},0)}catch(v){setTimeout(function(){d&&d(v);e.manager.itemError(a);e.manager.itemEnd(a)},0)}}else{db[a]=[];db[a].push({onLoad:b,onProgress:c,onError:d});var n=new XMLHttpRequest;n.open("GET",a,!0);n.addEventListener("load",function(b){var c=this.response,d=db[a];delete db[a];if(200===this.status||0===this.status){0===this.status&&console.warn("THREE.FileLoader: HTTP Status 0 received.");uc.add(a,
c);for(var f=0,g=d.length;f<g;f++){var h=d[f];if(h.onLoad)h.onLoad(c)}}else{f=0;for(g=d.length;f<g;f++)if(h=d[f],h.onError)h.onError(b);e.manager.itemError(a)}e.manager.itemEnd(a)},!1);n.addEventListener("progress",function(b){for(var c=db[a],d=0,e=c.length;d<e;d++){var f=c[d];if(f.onProgress)f.onProgress(b)}},!1);n.addEventListener("error",function(b){var c=db[a];delete db[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);n.addEventListener("abort",
function(b){var c=db[a];delete db[a];for(var d=0,f=c.length;d<f;d++){var g=c[d];if(g.onError)g.onError(b)}e.manager.itemError(a);e.manager.itemEnd(a)},!1);void 0!==this.responseType&&(n.responseType=this.responseType);void 0!==this.withCredentials&&(n.withCredentials=this.withCredentials);n.overrideMimeType&&n.overrideMimeType(void 0!==this.mimeType?this.mimeType:"text/plain");for(h in this.requestHeader)n.setRequestHeader(h,this.requestHeader[h]);n.send(null)}e.manager.itemStart(a);return n}},setResponseType:function(a){this.responseType=
a;return this},setWithCredentials:function(a){this.withCredentials=a;return this},setMimeType:function(a){this.mimeType=a;return this}});sg.prototype=Object.assign(Object.create(V.prototype),{constructor:sg,load:function(a,b,c,d){var e=this,f=new Ta(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){for(var b=[],c=0;c<a.length;c++){var d=Sa.parse(a[c]);b.push(d)}return b}});tg.prototype=Object.assign(Object.create(V.prototype),{constructor:tg,load:function(a,
b,c,d){function e(e){l.load(a[e],function(a){a=f.parse(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};k+=1;6===k&&(1===a.mipmapCount&&(h.minFilter=1006),h.format=a.format,h.needsUpdate=!0,b&&b(h))},c,d)}var f=this,g=[],h=new Oc;h.image=g;var l=new Ta(this.manager);l.setPath(this.path);l.setResponseType("arraybuffer");if(Array.isArray(a))for(var k=0,p=0,n=a.length;p<n;++p)e(p);else l.load(a,function(a){a=f.parse(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,
d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++)g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=1006);h.format=a.format;h.needsUpdate=!0;b&&b(h)},c,d);return h}});df.prototype=Object.assign(Object.create(V.prototype),{constructor:df,load:function(a,b,c,d){var e=this,f=new ac,g=new Ta(this.manager);g.setResponseType("arraybuffer");
g.setPath(this.path);g.load(a,function(a){if(a=e.parse(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:1001,f.wrapT=void 0!==a.wrapT?a.wrapT:1001,f.magFilter=void 0!==a.magFilter?a.magFilter:1006,f.minFilter=void 0!==a.minFilter?a.minFilter:1006,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=
a.mipmaps,f.minFilter=1008),1===a.mipmapCount&&(f.minFilter=1006),f.needsUpdate=!0,b&&b(f,a)},c,d);return f}});dd.prototype=Object.assign(Object.create(V.prototype),{constructor:dd,load:function(a,b,c,d){function e(){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);uc.add(a,this);b&&b(this);g.manager.itemEnd(a)}function f(b){l.removeEventListener("load",e,!1);l.removeEventListener("error",f,!1);d&&d(b);g.manager.itemError(a);g.manager.itemEnd(a)}void 0!==this.path&&(a=this.path+
a);a=this.manager.resolveURL(a);var g=this,h=uc.get(a);if(void 0!==h)return g.manager.itemStart(a),setTimeout(function(){b&&b(h);g.manager.itemEnd(a)},0),h;var l=document.createElementNS("http://www.w3.org/1999/xhtml","img");l.addEventListener("load",e,!1);l.addEventListener("error",f,!1);"data:"!==a.substr(0,5)&&void 0!==this.crossOrigin&&(l.crossOrigin=this.crossOrigin);g.manager.itemStart(a);l.src=a;return l}});ef.prototype=Object.assign(Object.create(V.prototype),{constructor:ef,load:function(a,
b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f))},void 0,d)}var f=new rb,g=new dd(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c)e(c);return f}});ff.prototype=Object.assign(Object.create(V.prototype),{constructor:ff,load:function(a,b,c,d){var e=new Y,f=new dd(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){e.image=c;c=0<a.search(/\.jpe?g($|\?)/i)||0===a.search(/^data:image\/jpeg/);
e.format=c?1022:1023;e.needsUpdate=!0;void 0!==b&&b(e)},c,d);return e}});Object.assign(I.prototype,{getPoint:function(){console.warn("THREE.Curve: .getPoint() not implemented.");return null},getPointAt:function(a,b){a=this.getUtoTmapping(a);return this.getPoint(a,b)},getPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){void 0===a&&(a=5);for(var b=[],c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){var a=
this.getLengths();return a[a.length-1]},getLengths:function(a){void 0===a&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c=this.getPoint(0),d,e=0;b.push(0);for(d=1;d<=a;d++){var f=this.getPoint(d/a);e+=f.distanceTo(c);b.push(e);c=f}return this.cacheArcLengths=b},updateArcLengths:function(){this.needsUpdate=!0;this.getLengths()},getUtoTmapping:function(a,b){var c=this.getLengths(),d=
c.length;b=b?b:a*c[d-1];for(var e=0,f=d-1,g;e<=f;)if(a=Math.floor(e+(f-e)/2),g=c[a]-b,0>g)e=a+1;else if(0<g)f=a-1;else{f=a;break}a=f;if(c[a]===b)return a/(d-1);e=c[a];return(a+(b-e)/(c[a+1]-e))/(d-1)},getTangent:function(a,b){var c=a-1E-4;a+=1E-4;0>c&&(c=0);1<a&&(a=1);c=this.getPoint(c);a=this.getPoint(a);b=b||(c.isVector2?new t:new p);b.copy(a).sub(c).normalize();return b},getTangentAt:function(a,b){a=this.getUtoTmapping(a);return this.getTangent(a,b)},computeFrenetFrames:function(a,b){var c=new p,
d=[],e=[],f=[],g=new p,h=new O,l;for(l=0;l<=a;l++){var k=l/a;d[l]=this.getTangentAt(k,new p);d[l].normalize()}e[0]=new p;f[0]=new p;l=Number.MAX_VALUE;k=Math.abs(d[0].x);var x=Math.abs(d[0].y),n=Math.abs(d[0].z);k<=l&&(l=k,c.set(1,0,0));x<=l&&(l=x,c.set(0,1,0));n<=l&&c.set(0,0,1);g.crossVectors(d[0],c).normalize();e[0].crossVectors(d[0],g);f[0].crossVectors(d[0],e[0]);for(l=1;l<=a;l++)e[l]=e[l-1].clone(),f[l]=f[l-1].clone(),g.crossVectors(d[l-1],d[l]),g.length()>Number.EPSILON&&(g.normalize(),c=Math.acos(M.clamp(d[l-
1].dot(d[l]),-1,1)),e[l].applyMatrix4(h.makeRotationAxis(g,c))),f[l].crossVectors(d[l],e[l]);if(!0===b)for(c=Math.acos(M.clamp(e[0].dot(e[a]),-1,1)),c/=a,0<d[0].dot(g.crossVectors(e[0],e[a]))&&(c=-c),l=1;l<=a;l++)e[l].applyMatrix4(h.makeRotationAxis(d[l],c*l)),f[l].crossVectors(d[l],e[l]);return{tangents:d,normals:e,binormals:f}},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this},toJSON:function(){var a={metadata:{version:4.5,
type:"Curve",generator:"Curve.toJSON"}};a.arcLengthDivisions=this.arcLengthDivisions;a.type=this.type;return a},fromJSON:function(a){this.arcLengthDivisions=a.arcLengthDivisions;return this}});Na.prototype=Object.create(I.prototype);Na.prototype.constructor=Na;Na.prototype.isEllipseCurve=!0;Na.prototype.getPoint=function(a,b){b=b||new t;for(var c=2*Math.PI,d=this.aEndAngle-this.aStartAngle,e=Math.abs(d)<Number.EPSILON;0>d;)d+=c;for(;d>c;)d-=c;d<Number.EPSILON&&(d=e?0:c);!0!==this.aClockwise||e||(d=
d===c?-c:d-c);c=this.aStartAngle+a*d;a=this.aX+this.xRadius*Math.cos(c);var f=this.aY+this.yRadius*Math.sin(c);0!==this.aRotation&&(c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),e=a-this.aX,f-=this.aY,a=e*c-f*d+this.aX,f=e*d+f*c+this.aY);return b.set(a,f)};Na.prototype.copy=function(a){I.prototype.copy.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;this.aRotation=a.aRotation;
return this};Na.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.aX=this.aX;a.aY=this.aY;a.xRadius=this.xRadius;a.yRadius=this.yRadius;a.aStartAngle=this.aStartAngle;a.aEndAngle=this.aEndAngle;a.aClockwise=this.aClockwise;a.aRotation=this.aRotation;return a};Na.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.aX=a.aX;this.aY=a.aY;this.xRadius=a.xRadius;this.yRadius=a.yRadius;this.aStartAngle=a.aStartAngle;this.aEndAngle=a.aEndAngle;this.aClockwise=a.aClockwise;
this.aRotation=a.aRotation;return this};ed.prototype=Object.create(Na.prototype);ed.prototype.constructor=ed;ed.prototype.isArcCurve=!0;var Rf=new p,ih=new ug,jh=new ug,kh=new ug;za.prototype=Object.create(I.prototype);za.prototype.constructor=za;za.prototype.isCatmullRomCurve3=!0;za.prototype.getPoint=function(a,b){b=b||new p;var c=this.points,d=c.length;a*=d-(this.closed?0:1);var e=Math.floor(a);a-=e;this.closed?e+=0<e?0:(Math.floor(Math.abs(e)/d)+1)*d:0===a&&e===d-1&&(e=d-2,a=1);if(this.closed||
0<e)var f=c[(e-1)%d];else Rf.subVectors(c[0],c[1]).add(c[0]),f=Rf;var g=c[e%d];var h=c[(e+1)%d];this.closed||e+2<d?c=c[(e+2)%d]:(Rf.subVectors(c[d-1],c[d-2]).add(c[d-1]),c=Rf);if("centripetal"===this.curveType||"chordal"===this.curveType){var l="chordal"===this.curveType?.5:.25;d=Math.pow(f.distanceToSquared(g),l);e=Math.pow(g.distanceToSquared(h),l);l=Math.pow(h.distanceToSquared(c),l);1E-4>e&&(e=1);1E-4>d&&(d=e);1E-4>l&&(l=e);ih.initNonuniformCatmullRom(f.x,g.x,h.x,c.x,d,e,l);jh.initNonuniformCatmullRom(f.y,
g.y,h.y,c.y,d,e,l);kh.initNonuniformCatmullRom(f.z,g.z,h.z,c.z,d,e,l)}else"catmullrom"===this.curveType&&(ih.initCatmullRom(f.x,g.x,h.x,c.x,this.tension),jh.initCatmullRom(f.y,g.y,h.y,c.y,this.tension),kh.initCatmullRom(f.z,g.z,h.z,c.z,this.tension));b.set(ih.calc(a),jh.calc(a),kh.calc(a));return b};za.prototype.copy=function(a){I.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());this.closed=a.closed;this.curveType=a.curveType;this.tension=
a.tension;return this};za.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());a.closed=this.closed;a.curveType=this.curveType;a.tension=this.tension;return a};za.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new p).fromArray(d))}this.closed=a.closed;this.curveType=a.curveType;this.tension=
a.tension;return this};Ya.prototype=Object.create(I.prototype);Ya.prototype.constructor=Ya;Ya.prototype.isCubicBezierCurve=!0;Ya.prototype.getPoint=function(a,b){b=b||new t;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(le(a,c.x,d.x,e.x,f.x),le(a,c.y,d.y,e.y,f.y));return b};Ya.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};Ya.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v0=this.v0.toArray();
a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};Ya.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);return this};jb.prototype=Object.create(I.prototype);jb.prototype.constructor=jb;jb.prototype.isCubicBezierCurve3=!0;jb.prototype.getPoint=function(a,b){b=b||new p;var c=this.v0,d=this.v1,e=this.v2,f=this.v3;b.set(le(a,c.x,d.x,e.x,f.x),le(a,c.y,d.y,e.y,f.y),
le(a,c.z,d.z,e.z,f.z));return b};jb.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);this.v3.copy(a.v3);return this};jb.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();a.v3=this.v3.toArray();return a};jb.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);this.v3.fromArray(a.v3);
return this};Ea.prototype=Object.create(I.prototype);Ea.prototype.constructor=Ea;Ea.prototype.isLineCurve=!0;Ea.prototype.getPoint=function(a,b){b=b||new t;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};Ea.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Ea.prototype.getTangent=function(a,b){a=b||new t;return a=a.copy(this.v2).sub(this.v1).normalize()};Ea.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);
return this};Ea.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Ea.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};Za.prototype=Object.create(I.prototype);Za.prototype.constructor=Za;Za.prototype.isLineCurve3=!0;Za.prototype.getPoint=function(a,b){b=b||new p;1===a?b.copy(this.v2):(b.copy(this.v2).sub(this.v1),b.multiplyScalar(a).add(this.v1));return b};
Za.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Za.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};Za.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};Za.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};$a.prototype=Object.create(I.prototype);$a.prototype.constructor=$a;$a.prototype.isQuadraticBezierCurve=
!0;$a.prototype.getPoint=function(a,b){b=b||new t;var c=this.v0,d=this.v1,e=this.v2;b.set(ke(a,c.x,d.x,e.x),ke(a,c.y,d.y,e.y));return b};$a.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};$a.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};$a.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);
this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};kb.prototype=Object.create(I.prototype);kb.prototype.constructor=kb;kb.prototype.isQuadraticBezierCurve3=!0;kb.prototype.getPoint=function(a,b){b=b||new p;var c=this.v0,d=this.v1,e=this.v2;b.set(ke(a,c.x,d.x,e.x),ke(a,c.y,d.y,e.y),ke(a,c.z,d.z,e.z));return b};kb.prototype.copy=function(a){I.prototype.copy.call(this,a);this.v0.copy(a.v0);this.v1.copy(a.v1);this.v2.copy(a.v2);return this};kb.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);
a.v0=this.v0.toArray();a.v1=this.v1.toArray();a.v2=this.v2.toArray();return a};kb.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.v0.fromArray(a.v0);this.v1.fromArray(a.v1);this.v2.fromArray(a.v2);return this};ab.prototype=Object.create(I.prototype);ab.prototype.constructor=ab;ab.prototype.isSplineCurve=!0;ab.prototype.getPoint=function(a,b){b=b||new t;var c=this.points,d=(c.length-1)*a;a=Math.floor(d);d-=a;var e=c[0===a?a:a-1],f=c[a],g=c[a>c.length-2?c.length-1:a+1];c=c[a>c.length-
3?c.length-1:a+2];b.set(gi(d,e.x,f.x,g.x,c.x),gi(d,e.y,f.y,g.y,c.y));return b};ab.prototype.copy=function(a){I.prototype.copy.call(this,a);this.points=[];for(var b=0,c=a.points.length;b<c;b++)this.points.push(a.points[b].clone());return this};ab.prototype.toJSON=function(){var a=I.prototype.toJSON.call(this);a.points=[];for(var b=0,c=this.points.length;b<c;b++)a.points.push(this.points[b].toArray());return a};ab.prototype.fromJSON=function(a){I.prototype.fromJSON.call(this,a);this.points=[];for(var b=
0,c=a.points.length;b<c;b++){var d=a.points[b];this.points.push((new t).fromArray(d))}return this};var lh=Object.freeze({__proto__:null,ArcCurve:ed,CatmullRomCurve3:za,CubicBezierCurve:Ya,CubicBezierCurve3:jb,EllipseCurve:Na,LineCurve:Ea,LineCurve3:Za,QuadraticBezierCurve:$a,QuadraticBezierCurve3:kb,SplineCurve:ab});wb.prototype=Object.assign(Object.create(I.prototype),{constructor:wb,add:function(a){this.curves.push(a)},closePath:function(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-
1].getPoint(1);a.equals(b)||this.curves.push(new Ea(b,a))},getPoint:function(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++}return null},getLength:function(){var a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0;this.cacheLengths=null;this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;
for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a},getSpacedPoints:function(a){void 0===a&&(a=40);for(var b=[],c=0;c<=a;c++)b.push(this.getPoint(c/a));this.autoClose&&b.push(b[0]);return b},getPoints:function(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){var f=e[d];f=f.getPoints(f&&f.isEllipseCurve?2*a:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a);for(var g=0;g<f.length;g++){var h=f[g];
c&&c.equals(h)||(b.push(h),c=h)}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b},copy:function(a){I.prototype.copy.call(this,a);this.curves=[];for(var b=0,c=a.curves.length;b<c;b++)this.curves.push(a.curves[b].clone());this.autoClose=a.autoClose;return this},toJSON:function(){var a=I.prototype.toJSON.call(this);a.autoClose=this.autoClose;a.curves=[];for(var b=0,c=this.curves.length;b<c;b++)a.curves.push(this.curves[b].toJSON());return a},fromJSON:function(a){I.prototype.fromJSON.call(this,
a);this.autoClose=a.autoClose;this.curves=[];for(var b=0,c=a.curves.length;b<c;b++){var d=a.curves[b];this.curves.push((new lh[d.type]).fromJSON(d))}return this}});bb.prototype=Object.assign(Object.create(wb.prototype),{constructor:bb,setFromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y);return this},moveTo:function(a,b){this.currentPoint.set(a,b);return this},lineTo:function(a,b){var c=new Ea(this.currentPoint.clone(),new t(a,b));this.curves.push(c);
this.currentPoint.set(a,b);return this},quadraticCurveTo:function(a,b,c,d){a=new $a(this.currentPoint.clone(),new t(a,b),new t(c,d));this.curves.push(a);this.currentPoint.set(c,d);return this},bezierCurveTo:function(a,b,c,d,e,f){a=new Ya(this.currentPoint.clone(),new t(a,b),new t(c,d),new t(e,f));this.curves.push(a);this.currentPoint.set(e,f);return this},splineThru:function(a){var b=[this.currentPoint.clone()].concat(a);b=new ab(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1]);return this},
arc:function(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f);return this},absarc:function(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f);return this},ellipse:function(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h);return this},absellipse:function(a,b,c,d,e,f,g,h){a=new Na(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a);
return this},copy:function(a){wb.prototype.copy.call(this,a);this.currentPoint.copy(a.currentPoint);return this},toJSON:function(){var a=wb.prototype.toJSON.call(this);a.currentPoint=this.currentPoint.toArray();return a},fromJSON:function(a){wb.prototype.fromJSON.call(this,a);this.currentPoint.fromArray(a.currentPoint);return this}});Ob.prototype=Object.assign(Object.create(bb.prototype),{constructor:Ob,getPointsHoles:function(a){for(var b=[],c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);
return b},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},copy:function(a){bb.prototype.copy.call(this,a);this.holes=[];for(var b=0,c=a.holes.length;b<c;b++)this.holes.push(a.holes[b].clone());return this},toJSON:function(){var a=bb.prototype.toJSON.call(this);a.uuid=this.uuid;a.holes=[];for(var b=0,c=this.holes.length;b<c;b++)a.holes.push(this.holes[b].toJSON());return a},fromJSON:function(a){bb.prototype.fromJSON.call(this,a);this.uuid=a.uuid;this.holes=[];
for(var b=0,c=a.holes.length;b<c;b++){var d=a.holes[b];this.holes.push((new bb).fromJSON(d))}return this}});W.prototype=Object.assign(Object.create(y.prototype),{constructor:W,isLight:!0,copy:function(a){y.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this},toJSON:function(a){a=y.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==
this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);void 0!==this.shadow&&(a.object.shadow=this.shadow.toJSON());return a}});gf.prototype=Object.assign(Object.create(W.prototype),{constructor:gf,isHemisphereLight:!0,copy:function(a){W.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this}});Object.assign(lb.prototype,{_projScreenMatrix:new O,
_lightPositionWorld:new p,_lookTarget:new p,getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(a){var b=this.camera,c=this.matrix,d=this._projScreenMatrix,e=this._lookTarget,f=this._lightPositionWorld;f.setFromMatrixPosition(a.matrixWorld);b.position.copy(f);e.setFromMatrixPosition(a.target.matrixWorld);b.lookAt(e);b.updateMatrixWorld();d.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse);this._frustum.setFromProjectionMatrix(d);
c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);c.multiply(b.projectionMatrix);c.multiply(b.matrixWorldInverse)},getViewport:function(a){return this._viewports[a]},getFrameExtents:function(){return this._frameExtents},copy:function(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this},clone:function(){return(new this.constructor).copy(this)},toJSON:function(){var a={};0!==this.bias&&(a.bias=this.bias);1!==this.radius&&(a.radius=this.radius);if(512!==
this.mapSize.x||512!==this.mapSize.y)a.mapSize=this.mapSize.toArray();a.camera=this.camera.toJSON(!1).object;delete a.camera.matrix;return a}});hf.prototype=Object.assign(Object.create(lb.prototype),{constructor:hf,isSpotLightShadow:!0,updateMatrices:function(a){var b=this.camera,c=2*M.RAD2DEG*a.angle,d=this.mapSize.width/this.mapSize.height,e=a.distance||b.far;if(c!==b.fov||d!==b.aspect||e!==b.far)b.fov=c,b.aspect=d,b.far=e,b.updateProjectionMatrix();lb.prototype.updateMatrices.call(this,a)}});jf.prototype=
Object.assign(Object.create(W.prototype),{constructor:jf,isSpotLight:!0,copy:function(a){W.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});vg.prototype=Object.assign(Object.create(lb.prototype),{constructor:vg,isPointLightShadow:!0,updateMatrices:function(a,b){void 0===b&&(b=0);var c=this.camera,d=this.matrix,e=this._lightPositionWorld,f=this._lookTarget,g=this._projScreenMatrix;
e.setFromMatrixPosition(a.matrixWorld);c.position.copy(e);f.copy(c.position);f.add(this._cubeDirections[b]);c.up.copy(this._cubeUps[b]);c.lookAt(f);c.updateMatrixWorld();d.makeTranslation(-e.x,-e.y,-e.z);g.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);this._frustum.setFromProjectionMatrix(g)}});kf.prototype=Object.assign(Object.create(W.prototype),{constructor:kf,isPointLight:!0,copy:function(a){W.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();
return this}});fd.prototype=Object.assign(Object.create(fb.prototype),{constructor:fd,isOrthographicCamera:!0,copy:function(a,b){fb.prototype.copy.call(this,a,b);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this},setViewOffset:function(a,b,c,d,e,f){null===this.view&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1});this.view.enabled=
!0;this.view.fullWidth=a;this.view.fullHeight=b;this.view.offsetX=c;this.view.offsetY=d;this.view.width=e;this.view.height=f;this.updateProjectionMatrix()},clearViewOffset:function(){null!==this.view&&(this.view.enabled=!1);this.updateProjectionMatrix()},updateProjectionMatrix:function(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a;c+=a;a=d+b;b=d-b;null!==this.view&&this.view.enabled&&(d=(this.right-this.left)/
this.view.fullWidth/this.zoom,b=(this.top-this.bottom)/this.view.fullHeight/this.zoom,e+=d*this.view.offsetX,c=e+d*this.view.width,a-=b*this.view.offsetY,b=a-b*this.view.height);this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){a=y.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;
a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a}});lf.prototype=Object.assign(Object.create(lb.prototype),{constructor:lf,isDirectionalLightShadow:!0,updateMatrices:function(a){lb.prototype.updateMatrices.call(this,a)}});mf.prototype=Object.assign(Object.create(W.prototype),{constructor:mf,isDirectionalLight:!0,copy:function(a){W.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this}});nf.prototype=Object.assign(Object.create(W.prototype),
{constructor:nf,isAmbientLight:!0});of.prototype=Object.assign(Object.create(W.prototype),{constructor:of,isRectAreaLight:!0,copy:function(a){W.prototype.copy.call(this,a);this.width=a.width;this.height=a.height;return this},toJSON:function(a){a=W.prototype.toJSON.call(this,a);a.object.width=this.width;a.object.height=this.height;return a}});Object.assign(pf.prototype,{isSphericalHarmonics3:!0,set:function(a){for(var b=0;9>b;b++)this.coefficients[b].copy(a[b]);return this},zero:function(){for(var a=
0;9>a;a++)this.coefficients[a].set(0,0,0);return this},getAt:function(a,b){var c=a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.282095);b.addScaledVector(e[1],.488603*d);b.addScaledVector(e[2],.488603*a);b.addScaledVector(e[3],.488603*c);b.addScaledVector(e[4],1.092548*c*d);b.addScaledVector(e[5],1.092548*d*a);b.addScaledVector(e[6],.315392*(3*a*a-1));b.addScaledVector(e[7],1.092548*c*a);b.addScaledVector(e[8],.546274*(c*c-d*d));return b},getIrradianceAt:function(a,b){var c=
a.x,d=a.y;a=a.z;var e=this.coefficients;b.copy(e[0]).multiplyScalar(.886227);b.addScaledVector(e[1],1.023328*d);b.addScaledVector(e[2],1.023328*a);b.addScaledVector(e[3],1.023328*c);b.addScaledVector(e[4],.858086*c*d);b.addScaledVector(e[5],.858086*d*a);b.addScaledVector(e[6],.743125*a*a-.247708);b.addScaledVector(e[7],.858086*c*a);b.addScaledVector(e[8],.429043*(c*c-d*d));return b},add:function(a){for(var b=0;9>b;b++)this.coefficients[b].add(a.coefficients[b]);return this},addScaledSH:function(a,
b){for(var c=0;9>c;c++)this.coefficients[c].addScaledVector(a.coefficients[c],b);return this},scale:function(a){for(var b=0;9>b;b++)this.coefficients[b].multiplyScalar(a);return this},lerp:function(a,b){for(var c=0;9>c;c++)this.coefficients[c].lerp(a.coefficients[c],b);return this},equals:function(a){for(var b=0;9>b;b++)if(!this.coefficients[b].equals(a.coefficients[b]))return!1;return!0},copy:function(a){return this.set(a.coefficients)},clone:function(){return(new this.constructor).copy(this)},fromArray:function(a,
b){void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].fromArray(a,b+3*d);return this},toArray:function(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);for(var c=this.coefficients,d=0;9>d;d++)c[d].toArray(a,b+3*d);return a}});Object.assign(pf,{getBasisAt:function(a,b){var c=a.x,d=a.y;a=a.z;b[0]=.282095;b[1]=.488603*d;b[2]=.488603*a;b[3]=.488603*c;b[4]=1.092548*c*d;b[5]=1.092548*d*a;b[6]=.315392*(3*a*a-1);b[7]=1.092548*c*a;b[8]=.546274*(c*c-d*d)}});Ua.prototype=Object.assign(Object.create(W.prototype),
{constructor:Ua,isLightProbe:!0,copy:function(a){W.prototype.copy.call(this,a);this.sh.copy(a.sh);return this},fromJSON:function(a){this.intensity=a.intensity;this.sh.fromArray(a.sh);return this},toJSON:function(a){a=W.prototype.toJSON.call(this,a);a.object.sh=this.sh.toArray();return a}});qf.prototype=Object.assign(Object.create(V.prototype),{constructor:qf,load:function(a,b,c,d){var e=this,f=new Ta(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){function b(a){void 0===
c[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return c[a]}var c=this.textures,d=new Tk[a.type];void 0!==a.uuid&&(d.uuid=a.uuid);void 0!==a.name&&(d.name=a.name);void 0!==a.color&&d.color.setHex(a.color);void 0!==a.roughness&&(d.roughness=a.roughness);void 0!==a.metalness&&(d.metalness=a.metalness);void 0!==a.sheen&&(d.sheen=(new D).setHex(a.sheen));void 0!==a.emissive&&d.emissive.setHex(a.emissive);void 0!==a.specular&&d.specular.setHex(a.specular);void 0!==a.shininess&&(d.shininess=
a.shininess);void 0!==a.clearcoat&&(d.clearcoat=a.clearcoat);void 0!==a.clearcoatRoughness&&(d.clearcoatRoughness=a.clearcoatRoughness);void 0!==a.fog&&(d.fog=a.fog);void 0!==a.flatShading&&(d.flatShading=a.flatShading);void 0!==a.blending&&(d.blending=a.blending);void 0!==a.combine&&(d.combine=a.combine);void 0!==a.side&&(d.side=a.side);void 0!==a.opacity&&(d.opacity=a.opacity);void 0!==a.transparent&&(d.transparent=a.transparent);void 0!==a.alphaTest&&(d.alphaTest=a.alphaTest);void 0!==a.depthTest&&
(d.depthTest=a.depthTest);void 0!==a.depthWrite&&(d.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(d.colorWrite=a.colorWrite);void 0!==a.stencilWrite&&(d.stencilWrite=a.stencilWrite);void 0!==a.stencilWriteMask&&(d.stencilWriteMask=a.stencilWriteMask);void 0!==a.stencilFunc&&(d.stencilFunc=a.stencilFunc);void 0!==a.stencilRef&&(d.stencilRef=a.stencilRef);void 0!==a.stencilFuncMask&&(d.stencilFuncMask=a.stencilFuncMask);void 0!==a.stencilFail&&(d.stencilFail=a.stencilFail);void 0!==a.stencilZFail&&
(d.stencilZFail=a.stencilZFail);void 0!==a.stencilZPass&&(d.stencilZPass=a.stencilZPass);void 0!==a.wireframe&&(d.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(d.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.wireframeLinecap&&(d.wireframeLinecap=a.wireframeLinecap);void 0!==a.wireframeLinejoin&&(d.wireframeLinejoin=a.wireframeLinejoin);void 0!==a.rotation&&(d.rotation=a.rotation);1!==a.linewidth&&(d.linewidth=a.linewidth);void 0!==a.dashSize&&(d.dashSize=a.dashSize);void 0!==a.gapSize&&
(d.gapSize=a.gapSize);void 0!==a.scale&&(d.scale=a.scale);void 0!==a.polygonOffset&&(d.polygonOffset=a.polygonOffset);void 0!==a.polygonOffsetFactor&&(d.polygonOffsetFactor=a.polygonOffsetFactor);void 0!==a.polygonOffsetUnits&&(d.polygonOffsetUnits=a.polygonOffsetUnits);void 0!==a.skinning&&(d.skinning=a.skinning);void 0!==a.morphTargets&&(d.morphTargets=a.morphTargets);void 0!==a.morphNormals&&(d.morphNormals=a.morphNormals);void 0!==a.dithering&&(d.dithering=a.dithering);void 0!==a.vertexTangents&&
(d.vertexTangents=a.vertexTangents);void 0!==a.visible&&(d.visible=a.visible);void 0!==a.toneMapped&&(d.toneMapped=a.toneMapped);void 0!==a.userData&&(d.userData=a.userData);void 0!==a.vertexColors&&(d.vertexColors="number"===typeof a.vertexColors?0<a.vertexColors?!0:!1:a.vertexColors);if(void 0!==a.uniforms)for(var e in a.uniforms){var f=a.uniforms[e];d.uniforms[e]={};switch(f.type){case "t":d.uniforms[e].value=b(f.value);break;case "c":d.uniforms[e].value=(new D).setHex(f.value);break;case "v2":d.uniforms[e].value=
(new t).fromArray(f.value);break;case "v3":d.uniforms[e].value=(new p).fromArray(f.value);break;case "v4":d.uniforms[e].value=(new fa).fromArray(f.value);break;case "m3":d.uniforms[e].value=(new va).fromArray(f.value);case "m4":d.uniforms[e].value=(new O).fromArray(f.value);break;default:d.uniforms[e].value=f.value}}void 0!==a.defines&&(d.defines=a.defines);void 0!==a.vertexShader&&(d.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(d.fragmentShader=a.fragmentShader);if(void 0!==a.extensions)for(var g in a.extensions)d.extensions[g]=
a.extensions[g];void 0!==a.shading&&(d.flatShading=1===a.shading);void 0!==a.size&&(d.size=a.size);void 0!==a.sizeAttenuation&&(d.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(d.map=b(a.map));void 0!==a.matcap&&(d.matcap=b(a.matcap));void 0!==a.alphaMap&&(d.alphaMap=b(a.alphaMap));void 0!==a.bumpMap&&(d.bumpMap=b(a.bumpMap));void 0!==a.bumpScale&&(d.bumpScale=a.bumpScale);void 0!==a.normalMap&&(d.normalMap=b(a.normalMap));void 0!==a.normalMapType&&(d.normalMapType=a.normalMapType);void 0!==
a.normalScale&&(e=a.normalScale,!1===Array.isArray(e)&&(e=[e,e]),d.normalScale=(new t).fromArray(e));void 0!==a.displacementMap&&(d.displacementMap=b(a.displacementMap));void 0!==a.displacementScale&&(d.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(d.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(d.roughnessMap=b(a.roughnessMap));void 0!==a.metalnessMap&&(d.metalnessMap=b(a.metalnessMap));void 0!==a.emissiveMap&&(d.emissiveMap=b(a.emissiveMap));void 0!==a.emissiveIntensity&&
(d.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(d.specularMap=b(a.specularMap));void 0!==a.envMap&&(d.envMap=b(a.envMap));void 0!==a.envMapIntensity&&(d.envMapIntensity=a.envMapIntensity);void 0!==a.reflectivity&&(d.reflectivity=a.reflectivity);void 0!==a.refractionRatio&&(d.refractionRatio=a.refractionRatio);void 0!==a.lightMap&&(d.lightMap=b(a.lightMap));void 0!==a.lightMapIntensity&&(d.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(d.aoMap=b(a.aoMap));void 0!==a.aoMapIntensity&&
(d.aoMapIntensity=a.aoMapIntensity);void 0!==a.gradientMap&&(d.gradientMap=b(a.gradientMap));void 0!==a.clearcoatMap&&(d.clearcoatMap=b(a.clearcoatMap));void 0!==a.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap=b(a.clearcoatRoughnessMap));void 0!==a.clearcoatNormalMap&&(d.clearcoatNormalMap=b(a.clearcoatNormalMap));void 0!==a.clearcoatNormalScale&&(d.clearcoatNormalScale=(new t).fromArray(a.clearcoatNormalScale));return d},setTextures:function(a){this.textures=a;return this}});var mh={decodeText:function(a){if("undefined"!==
typeof TextDecoder)return(new TextDecoder).decode(a);for(var b="",c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);try{return decodeURIComponent(escape(b))}catch(e){return b}},extractUrlBase:function(a){var b=a.lastIndexOf("/");return-1===b?"./":a.substr(0,b+1)}};me.prototype=Object.assign(Object.create(E.prototype),{constructor:me,isInstancedBufferGeometry:!0,copy:function(a){E.prototype.copy.call(this,a);this.instanceCount=a.instanceCount;return this},clone:function(){return(new this.constructor).copy(this)},
toJSON:function(){var a=E.prototype.toJSON.call(this);a.instanceCount=this.instanceCount;a.isInstancedBufferGeometry=!0;return a}});rf.prototype=Object.assign(Object.create(F.prototype),{constructor:rf,isInstancedBufferAttribute:!0,copy:function(a){F.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this},toJSON:function(){var a=F.prototype.toJSON.call(this);a.meshPerAttribute=this.meshPerAttribute;a.isInstancedBufferAttribute=!0;return a}});sf.prototype=Object.assign(Object.create(V.prototype),
{constructor:sf,load:function(a,b,c,d){var e=this,f=new Ta(e.manager);f.setPath(e.path);f.load(a,function(a){b(e.parse(JSON.parse(a)))},c,d)},parse:function(a){var b=a.isInstancedBufferGeometry?new me:new E,c=a.data.index;if(void 0!==c){var d=new nh[c.type](c.array);b.setIndex(new F(d,1))}c=a.data.attributes;for(var e in c){var f=c[e];d=new nh[f.type](f.array);d=new (f.isInstancedBufferAttribute?rf:F)(d,f.itemSize,f.normalized);void 0!==f.name&&(d.name=f.name);b.setAttribute(e,d)}var g=a.data.morphAttributes;
if(g)for(e in g){var h=g[e],l=[];c=0;for(var k=h.length;c<k;c++)f=h[c],d=new nh[f.type](f.array),d=new F(d,f.itemSize,f.normalized),void 0!==f.name&&(d.name=f.name),l.push(d);b.morphAttributes[e]=l}a.data.morphTargetsRelative&&(b.morphTargetsRelative=!0);e=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==e)for(c=0,f=e.length;c!==f;++c)d=e[c],b.addGroup(d.start,d.count,d.materialIndex);c=a.data.boundingSphere;void 0!==c&&(e=new p,void 0!==c.center&&e.fromArray(c.center),b.boundingSphere=
new eb(e,c.radius));a.name&&(b.name=a.name);a.userData&&(b.userData=a.userData);return b}});var nh={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:"undefined"!==typeof Uint8ClampedArray?Uint8ClampedArray:Uint8Array,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};tf.prototype=Object.assign(Object.create(V.prototype),{constructor:tf,load:function(a,b,c,d){var e=this,f=""===this.path?mh.extractUrlBase(a):
this.path;this.resourcePath=this.resourcePath||f;f=new Ta(e.manager);f.setPath(this.path);f.load(a,function(c){var f=null;try{f=JSON.parse(c)}catch(l){void 0!==d&&d(l);console.error("THREE:ObjectLoader: Can't parse "+a+".",l.message);return}c=f.metadata;void 0===c||void 0===c.type||"geometry"===c.type.toLowerCase()?console.error("THREE.ObjectLoader: Can't load "+a):e.parse(f,b)},c,d)},parse:function(a,b){var c=this.parseShape(a.shapes);c=this.parseGeometries(a.geometries,c);var d=this.parseImages(a.images,
function(){void 0!==b&&b(e)});d=this.parseTextures(a.textures,d);d=this.parseMaterials(a.materials,d);var e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e},parseShape:function(a){var b={};if(void 0!==a)for(var c=0,d=a.length;c<d;c++){var e=(new Ob).fromJSON(a[c]);b[e.uuid]=e}return b},parseGeometries:function(a,b){var c={};if(void 0!==a)for(var d=new sf,e=0,f=a.length;e<f;e++){var g=a[e];
switch(g.type){case "PlaneGeometry":case "PlaneBufferGeometry":var h=new ua[g.type](g.width,g.height,g.widthSegments,g.heightSegments);break;case "BoxGeometry":case "BoxBufferGeometry":case "CubeGeometry":h=new ua[g.type](g.width,g.height,g.depth,g.widthSegments,g.heightSegments,g.depthSegments);break;case "CircleGeometry":case "CircleBufferGeometry":h=new ua[g.type](g.radius,g.segments,g.thetaStart,g.thetaLength);break;case "CylinderGeometry":case "CylinderBufferGeometry":h=new ua[g.type](g.radiusTop,
g.radiusBottom,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case "ConeGeometry":case "ConeBufferGeometry":h=new ua[g.type](g.radius,g.height,g.radialSegments,g.heightSegments,g.openEnded,g.thetaStart,g.thetaLength);break;case "SphereGeometry":case "SphereBufferGeometry":h=new ua[g.type](g.radius,g.widthSegments,g.heightSegments,g.phiStart,g.phiLength,g.thetaStart,g.thetaLength);break;case "DodecahedronGeometry":case "DodecahedronBufferGeometry":case "IcosahedronGeometry":case "IcosahedronBufferGeometry":case "OctahedronGeometry":case "OctahedronBufferGeometry":case "TetrahedronGeometry":case "TetrahedronBufferGeometry":h=
new ua[g.type](g.radius,g.detail);break;case "RingGeometry":case "RingBufferGeometry":h=new ua[g.type](g.innerRadius,g.outerRadius,g.thetaSegments,g.phiSegments,g.thetaStart,g.thetaLength);break;case "TorusGeometry":case "TorusBufferGeometry":h=new ua[g.type](g.radius,g.tube,g.radialSegments,g.tubularSegments,g.arc);break;case "TorusKnotGeometry":case "TorusKnotBufferGeometry":h=new ua[g.type](g.radius,g.tube,g.tubularSegments,g.radialSegments,g.p,g.q);break;case "TubeGeometry":case "TubeBufferGeometry":h=
new ua[g.type]((new lh[g.path.type]).fromJSON(g.path),g.tubularSegments,g.radius,g.radialSegments,g.closed);break;case "LatheGeometry":case "LatheBufferGeometry":h=new ua[g.type](g.points,g.segments,g.phiStart,g.phiLength);break;case "PolyhedronGeometry":case "PolyhedronBufferGeometry":h=new ua[g.type](g.vertices,g.indices,g.radius,g.details);break;case "ShapeGeometry":case "ShapeBufferGeometry":h=[];for(var l=0,k=g.shapes.length;l<k;l++){var p=b[g.shapes[l]];h.push(p)}h=new ua[g.type](h,g.curveSegments);
break;case "ExtrudeGeometry":case "ExtrudeBufferGeometry":h=[];l=0;for(k=g.shapes.length;l<k;l++)p=b[g.shapes[l]],h.push(p);l=g.options.extrudePath;void 0!==l&&(g.options.extrudePath=(new lh[l.type]).fromJSON(l));h=new ua[g.type](h,g.options);break;case "BufferGeometry":case "InstancedBufferGeometry":h=d.parse(g);break;case "Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+g.type+
'"');continue}h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);!0===h.isBufferGeometry&&void 0!==g.userData&&(h.userData=g.userData);c[g.uuid]=h}return c},parseMaterials:function(a,b){var c={},d={};if(void 0!==a){var e=new qf;e.setTextures(b);b=0;for(var f=a.length;b<f;b++){var g=a[b];if("MultiMaterial"===g.type){for(var h=[],l=0;l<g.materials.length;l++){var k=g.materials[l];void 0===c[k.uuid]&&(c[k.uuid]=e.parse(k));h.push(c[k.uuid])}d[g.uuid]=h}else void 0===c[g.uuid]&&(c[g.uuid]=e.parse(g)),d[g.uuid]=
c[g.uuid]}}return d},parseAnimations:function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c],e=Sa.parse(d);void 0!==d.uuid&&(e.uuid=d.uuid);b.push(e)}return b},parseImages:function(a,b){function c(a){d.manager.itemStart(a);return f.load(a,function(){d.manager.itemEnd(a)},void 0,function(){d.manager.itemError(a);d.manager.itemEnd(a)})}var d=this,e={};if(void 0!==a&&0<a.length){b=new rg(b);var f=new dd(b);f.setCrossOrigin(this.crossOrigin);b=0;for(var g=a.length;b<g;b++){var h=a[b],l=h.url;if(Array.isArray(l)){e[h.uuid]=
[];for(var k=0,p=l.length;k<p;k++){var n=l[k];n=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(n)?n:d.resourcePath+n;e[h.uuid].push(c(n))}}else n=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url)?h.url:d.resourcePath+h.url,e[h.uuid]=c(n)}}return e},parseTextures:function(a,b){function c(a,b){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return b[a]}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',
g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=Array.isArray(b[g.image])?new rb(b[g.image]):new Y(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping,Uk));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.center&&h.center.fromArray(g.center);void 0!==g.rotation&&(h.rotation=g.rotation);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0],Oi),
h.wrapT=c(g.wrap[1],Oi));void 0!==g.format&&(h.format=g.format);void 0!==g.type&&(h.type=g.type);void 0!==g.encoding&&(h.encoding=g.encoding);void 0!==g.minFilter&&(h.minFilter=c(g.minFilter,Pi));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter,Pi));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);void 0!==g.premultiplyAlpha&&(h.premultiplyAlpha=g.premultiplyAlpha);void 0!==g.unpackAlignment&&(h.unpackAlignment=g.unpackAlignment);d[g.uuid]=h}return d},parseObject:function(a,
b,c){function d(a){void 0===b[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return b[a]}function e(a){if(void 0!==a){if(Array.isArray(a)){for(var b=[],d=0,e=a.length;d<e;d++){var f=a[d];void 0===c[f]&&console.warn("THREE.ObjectLoader: Undefined material",f);b.push(c[f])}return b}void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined material",a);return c[a]}}switch(a.type){case "Scene":var f=new qb;void 0!==a.background&&Number.isInteger(a.background)&&(f.background=new D(a.background));
void 0!==a.fog&&("Fog"===a.fog.type?f.fog=new Pe(a.fog.color,a.fog.near,a.fog.far):"FogExp2"===a.fog.type&&(f.fog=new Oe(a.fog.color,a.fog.density)));break;case "PerspectiveCamera":f=new S(a.fov,a.aspect,a.near,a.far);void 0!==a.focus&&(f.focus=a.focus);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.filmGauge&&(f.filmGauge=a.filmGauge);void 0!==a.filmOffset&&(f.filmOffset=a.filmOffset);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "OrthographicCamera":f=new fd(a.left,a.right,a.top,a.bottom,
a.near,a.far);void 0!==a.zoom&&(f.zoom=a.zoom);void 0!==a.view&&(f.view=Object.assign({},a.view));break;case "AmbientLight":f=new nf(a.color,a.intensity);break;case "DirectionalLight":f=new mf(a.color,a.intensity);break;case "PointLight":f=new kf(a.color,a.intensity,a.distance,a.decay);break;case "RectAreaLight":f=new of(a.color,a.intensity,a.width,a.height);break;case "SpotLight":f=new jf(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case "HemisphereLight":f=new gf(a.color,a.groundColor,
a.intensity);break;case "LightProbe":f=(new Ua).fromJSON(a);break;case "SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case "Mesh":f=d(a.geometry);var g=e(a.material);f=new ha(f,g);break;case "InstancedMesh":f=d(a.geometry);g=e(a.material);var h=a.instanceMatrix;f=new Te(f,g,a.count);f.instanceMatrix=new F(new Float32Array(h.array),16);break;case "LOD":f=new Nd;break;case "Line":f=new La(d(a.geometry),e(a.material),a.mode);break;case "LineLoop":f=new Ue(d(a.geometry),
e(a.material));break;case "LineSegments":f=new la(d(a.geometry),e(a.material));break;case "PointCloud":case "Points":f=new Nc(d(a.geometry),e(a.material));break;case "Sprite":f=new Ld(e(a.material));break;case "Group":f=new Kc;break;default:f=new y}f.uuid=a.uuid;void 0!==a.name&&(f.name=a.name);void 0!==a.matrix?(f.matrix.fromArray(a.matrix),void 0!==a.matrixAutoUpdate&&(f.matrixAutoUpdate=a.matrixAutoUpdate),f.matrixAutoUpdate&&f.matrix.decompose(f.position,f.quaternion,f.scale)):(void 0!==a.position&&
f.position.fromArray(a.position),void 0!==a.rotation&&f.rotation.fromArray(a.rotation),void 0!==a.quaternion&&f.quaternion.fromArray(a.quaternion),void 0!==a.scale&&f.scale.fromArray(a.scale));void 0!==a.castShadow&&(f.castShadow=a.castShadow);void 0!==a.receiveShadow&&(f.receiveShadow=a.receiveShadow);a.shadow&&(void 0!==a.shadow.bias&&(f.shadow.bias=a.shadow.bias),void 0!==a.shadow.radius&&(f.shadow.radius=a.shadow.radius),void 0!==a.shadow.mapSize&&f.shadow.mapSize.fromArray(a.shadow.mapSize),
void 0!==a.shadow.camera&&(f.shadow.camera=this.parseObject(a.shadow.camera)));void 0!==a.visible&&(f.visible=a.visible);void 0!==a.frustumCulled&&(f.frustumCulled=a.frustumCulled);void 0!==a.renderOrder&&(f.renderOrder=a.renderOrder);void 0!==a.userData&&(f.userData=a.userData);void 0!==a.layers&&(f.layers.mask=a.layers);if(void 0!==a.children)for(h=a.children,g=0;g<h.length;g++)f.add(this.parseObject(h[g],b,c));if("LOD"===a.type)for(void 0!==a.autoUpdate&&(f.autoUpdate=a.autoUpdate),a=a.levels,
h=0;h<a.length;h++){g=a[h];var l=f.getObjectByProperty("uuid",g.object);void 0!==l&&f.addLevel(l,g.distance)}return f}});var Uk={UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307},Oi={RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002},Pi={NearestFilter:1003,NearestMipmapNearestFilter:1004,NearestMipmapLinearFilter:1005,
LinearFilter:1006,LinearMipmapNearestFilter:1007,LinearMipmapLinearFilter:1008};wg.prototype=Object.assign(Object.create(V.prototype),{constructor:wg,setOptions:function(a){this.options=a;return this},load:function(a,b,c,d){void 0===a&&(a="");void 0!==this.path&&(a=this.path+a);a=this.manager.resolveURL(a);var e=this,f=uc.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a)},0),f;fetch(a).then(function(a){return a.blob()}).then(function(a){return void 0===
e.options?createImageBitmap(a):createImageBitmap(a,e.options)}).then(function(c){uc.add(a,c);b&&b(c);e.manager.itemEnd(a)}).catch(function(b){d&&d(b);e.manager.itemError(a);e.manager.itemEnd(a)});e.manager.itemStart(a)}});Object.assign(xg.prototype,{moveTo:function(a,b){this.currentPath=new bb;this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b);return this},lineTo:function(a,b){this.currentPath.lineTo(a,b);return this},quadraticCurveTo:function(a,b,c,d){this.currentPath.quadraticCurveTo(a,
b,c,d);return this},bezierCurveTo:function(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f);return this},splineThru:function(a){this.currentPath.splineThru(a);return this},toShapes:function(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new Ob;f.curves=e.curves;b.push(f)}return b}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],l=h.x-g.x,k=h.y-g.y;if(Math.abs(k)>Number.EPSILON){if(0>k&&(g=b[f],l=-l,h=b[e],k=-k),!(a.y<g.y||a.y>h.y))if(a.y===
g.y){if(a.x===g.x)return!0}else{e=k*(a.x-g.x)-l*(a.y-g.y);if(0===e)return!0;0>e||(d=!d)}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0}return d}var e=tb.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);b=[];if(1===f.length){var g=f[0];var h=new Ob;h.curves=g.curves;b.push(h);return b}var l=!e(f[0].getPoints());l=a?!l:l;h=[];var k=[],p=[],n=0;k[n]=void 0;p[n]=[];for(var v=0,r=f.length;v<r;v++){g=f[v];var q=g.getPoints();var u=e(q);(u=a?!u:u)?(!l&&k[n]&&
n++,k[n]={s:new Ob,p:q},k[n].s.curves=g.curves,l&&n++,p[n]=[]):p[n].push({h:g,p:q[0]})}if(!k[0])return c(f);if(1<k.length){v=!1;a=[];e=0;for(f=k.length;e<f;e++)h[e]=[];e=0;for(f=k.length;e<f;e++)for(g=p[e],u=0;u<g.length;u++){l=g[u];n=!0;for(q=0;q<k.length;q++)d(l.p,k[q].p)&&(e!==q&&a.push({froms:e,tos:q,hole:u}),n?(n=!1,h[q].push(l)):v=!0);n&&h[e].push(l)}0<a.length&&(v||(p=h))}v=0;for(e=k.length;v<e;v++)for(h=k[v].s,b.push(h),a=p[v],f=0,g=a.length;f<g;f++)h.holes.push(a[f].h);return b}});Object.assign(yg.prototype,
{isFont:!0,generateShapes:function(a,b){void 0===b&&(b=100);var c=[],d=b;b=this.data;var e=Array.from?Array.from(a):String(a).split("");d/=b.resolution;var f=(b.boundingBox.yMax-b.boundingBox.yMin+b.underlineThickness)*d;a=[];for(var g=0,h=0,l=0;l<e.length;l++){var k=e[l];if("\n"===k)g=0,h-=f;else{var p=k;k=d;var n=g,v=h,r=b,q=r.glyphs[p]||r.glyphs["?"];if(q){p=new xg;if(q.o){r=q._cachedOutline||(q._cachedOutline=q.o.split(" "));for(var u=0,t=r.length;u<t;)switch(r[u++]){case "m":var z=r[u++]*k+n;
var w=r[u++]*k+v;p.moveTo(z,w);break;case "l":z=r[u++]*k+n;w=r[u++]*k+v;p.lineTo(z,w);break;case "q":var y=r[u++]*k+n;var A=r[u++]*k+v;var B=r[u++]*k+n;var C=r[u++]*k+v;p.quadraticCurveTo(B,C,y,A);break;case "b":y=r[u++]*k+n,A=r[u++]*k+v,B=r[u++]*k+n,C=r[u++]*k+v,z=r[u++]*k+n,w=r[u++]*k+v,p.bezierCurveTo(B,C,z,w,y,A)}}k={offsetX:q.ha*k,path:p}}else console.error('THREE.Font: character "'+p+'" does not exists in font family '+r.familyName+"."),k=void 0;g+=k.offsetX;a.push(k.path)}}b=0;for(e=a.length;b<
e;b++)Array.prototype.push.apply(c,a[b].toShapes());return c}});zg.prototype=Object.assign(Object.create(V.prototype),{constructor:zg,load:function(a,b,c,d){var e=this,f=new Ta(this.manager);f.setPath(this.path);f.load(a,function(a){try{var c=JSON.parse(a)}catch(l){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2))}a=e.parse(c);b&&b(a)},c,d)},parse:function(a){return new yg(a)}});var Sf,Eg={getContext:function(){void 0===
Sf&&(Sf=new (window.AudioContext||window.webkitAudioContext));return Sf},setContext:function(a){Sf=a}};uf.prototype=Object.assign(Object.create(V.prototype),{constructor:uf,load:function(a,b,c,d){var e=new Ta(this.manager);e.setResponseType("arraybuffer");e.setPath(this.path);e.load(a,function(a){a=a.slice(0);Eg.getContext().decodeAudioData(a,function(a){b(a)})},c,d)}});Ag.prototype=Object.assign(Object.create(Ua.prototype),{constructor:Ag,isHemisphereLightProbe:!0,copy:function(a){Ua.prototype.copy.call(this,
a);return this},toJSON:function(a){return Ua.prototype.toJSON.call(this,a)}});Bg.prototype=Object.assign(Object.create(Ua.prototype),{constructor:Bg,isAmbientLightProbe:!0,copy:function(a){Ua.prototype.copy.call(this,a);return this},toJSON:function(a){return Ua.prototype.toJSON.call(this,a)}});var Qi=new O,Ri=new O;Object.assign(hi.prototype,{update:function(a){var b=this._cache;if(b.focus!==a.focus||b.fov!==a.fov||b.aspect!==a.aspect*this.aspect||b.near!==a.near||b.far!==a.far||b.zoom!==a.zoom||
b.eyeSep!==this.eyeSep){b.focus=a.focus;b.fov=a.fov;b.aspect=a.aspect*this.aspect;b.near=a.near;b.far=a.far;b.zoom=a.zoom;b.eyeSep=this.eyeSep;var c=a.projectionMatrix.clone(),d=b.eyeSep/2,e=d*b.near/b.focus,f=b.near*Math.tan(M.DEG2RAD*b.fov*.5)/b.zoom;Ri.elements[12]=-d;Qi.elements[12]=d;d=-f*b.aspect+e;var g=f*b.aspect+e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-d);this.cameraL.projectionMatrix.copy(c);d=-f*b.aspect-e;g=f*b.aspect-e;c.elements[0]=2*b.near/(g-d);c.elements[8]=(g+d)/(g-
d);this.cameraR.projectionMatrix.copy(c)}this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Ri);this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Qi)}});Object.assign(Cg.prototype,{start:function(){this.oldTime=this.startTime=("undefined"===typeof performance?Date:performance).now();this.elapsedTime=0;this.running=!0},stop:function(){this.getElapsedTime();this.autoStart=this.running=!1},getElapsedTime:function(){this.getDelta();return this.elapsedTime},getDelta:function(){var a=0;if(this.autoStart&&
!this.running)return this.start(),0;if(this.running){var b=("undefined"===typeof performance?Date:performance).now();a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a}return a}});var vc=new p,Si=new na,Vk=new p,wc=new p;Dg.prototype=Object.assign(Object.create(y.prototype),{constructor:Dg,getInput:function(){return this.gain},removeFilter:function(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),
this.filter=null);return this},getFilter:function(){return this.filter},setFilter:function(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination);return this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01);return this},
updateMatrixWorld:function(a){y.prototype.updateMatrixWorld.call(this,a);a=this.context.listener;var b=this.up;this.timeDelta=this._clock.getDelta();this.matrixWorld.decompose(vc,Si,Vk);wc.set(0,0,-1).applyQuaternion(Si);if(a.positionX){var c=this.context.currentTime+this.timeDelta;a.positionX.linearRampToValueAtTime(vc.x,c);a.positionY.linearRampToValueAtTime(vc.y,c);a.positionZ.linearRampToValueAtTime(vc.z,c);a.forwardX.linearRampToValueAtTime(wc.x,c);a.forwardY.linearRampToValueAtTime(wc.y,c);
a.forwardZ.linearRampToValueAtTime(wc.z,c);a.upX.linearRampToValueAtTime(b.x,c);a.upY.linearRampToValueAtTime(b.y,c);a.upZ.linearRampToValueAtTime(b.z,c)}else a.setPosition(vc.x,vc.y,vc.z),a.setOrientation(wc.x,wc.y,wc.z,b.x,b.y,b.z)}});gd.prototype=Object.assign(Object.create(y.prototype),{constructor:gd,getOutput:function(){return this.gain},setNodeSource:function(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this},setMediaElementSource:function(a){this.hasPlaybackControl=
!1;this.sourceType="mediaNode";this.source=this.context.createMediaElementSource(a);this.connect();return this},setMediaStreamSource:function(a){this.hasPlaybackControl=!1;this.sourceType="mediaStreamNode";this.source=this.context.createMediaStreamSource(a);this.connect();return this},setBuffer:function(a){this.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this},play:function(a){void 0===a&&(a=0);if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===
this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this._startedAt=this.context.currentTime+a,a=this.context.createBufferSource(),a.buffer=this.buffer,a.loop=this.loop,a.loopStart=this.loopStart,a.loopEnd=this.loopEnd,a.onended=this.onEnded.bind(this),a.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=a,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(!1===
this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return!0===this.isPlaying&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,!0===this.loop&&(this._progress%=this.duration||this.buffer.duration),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this._progress=0,this.source.stop(),
this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);
this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this},setDetune:function(a){this.detune=a;if(void 0!==this.source.detune)return!0===this.isPlaying&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this},getDetune:function(){return this.detune},
getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return!1===this.hasPlaybackControl?
(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.loop=a,!0===this.isPlaying&&(this.source.loop=this.loop),this},setLoopStart:function(a){this.loopStart=a;return this},setLoopEnd:function(a){this.loopEnd=a;return this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){this.gain.gain.setTargetAtTime(a,this.context.currentTime,
.01);return this}});var xc=new p,Ti=new na,Wk=new p,yc=new p;Fg.prototype=Object.assign(Object.create(gd.prototype),{constructor:Fg,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){this.panner.refDistance=a;return this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){this.panner.rolloffFactor=a;return this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){this.panner.distanceModel=
a;return this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){this.panner.maxDistance=a;return this},setDirectionalCone:function(a,b,c){this.panner.coneInnerAngle=a;this.panner.coneOuterAngle=b;this.panner.coneOuterGain=c;return this},updateMatrixWorld:function(a){y.prototype.updateMatrixWorld.call(this,a);if(!0!==this.hasPlaybackControl||!1!==this.isPlaying)if(this.matrixWorld.decompose(xc,Ti,Wk),yc.set(0,0,1).applyQuaternion(Ti),a=this.panner,a.positionX){var b=
this.context.currentTime+this.listener.timeDelta;a.positionX.linearRampToValueAtTime(xc.x,b);a.positionY.linearRampToValueAtTime(xc.y,b);a.positionZ.linearRampToValueAtTime(xc.z,b);a.orientationX.linearRampToValueAtTime(yc.x,b);a.orientationY.linearRampToValueAtTime(yc.y,b);a.orientationZ.linearRampToValueAtTime(yc.z,b)}else a.setPosition(xc.x,xc.y,xc.z),a.setOrientation(yc.x,yc.y,yc.z)}});Object.assign(Gg.prototype,{getFrequencyData:function(){this.analyser.getByteFrequencyData(this.data);return this.data},
getAverageFrequency:function(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++)a+=b[c];return a/b.length}});Object.assign(Hg.prototype,{accumulate:function(a,b){var c=this.buffer,d=this.valueSize;a=a*d+d;var e=this.cumulativeWeight;if(0===e){for(e=0;e!==d;++e)c[a+e]=c[e];e=b}else e+=b,this._mixBufferRegion(c,a,0,b/e,d);this.cumulativeWeight=e},accumulateAdditive:function(a){var b=this.buffer,c=this.valueSize,d=c*this._addIndex;0===this.cumulativeWeightAdditive&&this._setIdentity();this._mixBufferRegionAdditive(b,
d,0,a,c);this.cumulativeWeightAdditive+=a},apply:function(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.cumulativeWeightAdditive,f=this.binding;this.cumulativeWeightAdditive=this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,b*this._origIndex,1-d,b);0<e&&this._mixBufferRegionAdditive(c,a,this._addIndex*b,1,b);d=b;for(e=b+b;d!==e;++d)if(c[d]!==c[d+b]){f.setValue(c,a);break}},saveOriginalState:function(){var a=this.buffer,b=this.valueSize,c=b*this._origIndex;this.binding.getValue(a,
c);for(var d=b;d!==c;++d)a[d]=a[c+d%b];this._setIdentity();this.cumulativeWeightAdditive=this.cumulativeWeight=0},restoreOriginalState:function(){this.binding.setValue(this.buffer,3*this.valueSize)},_setAdditiveIdentityNumeric:function(){for(var a=this._addIndex*this.valueSize,b=a+this.valueSize;a<b;a++)this.buffer[a]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric();this.buffer[4*this._addIndex+3]=1},_setAdditiveIdentityOther:function(){for(var a=this._origIndex*this.valueSize,
b=this._addIndex*this.valueSize,c=0;c<this.valueSize;c++)this.buffer[b+c]=this.buffer[a+c]},_select:function(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d)a[b+d]=a[c+d]},_slerp:function(a,b,c,d){na.slerpFlat(a,b,a,b,a,c,d)},_slerpAdditive:function(a,b,c,d,e){e*=this._workIndex;na.multiplyQuaternionsFlat(a,e,a,b,a,c);na.slerpFlat(a,b,a,b,a,e,d)},_lerp:function(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d}},_lerpAdditive:function(a,b,c,d,e){for(var f=0;f!==e;++f){var g=b+f;a[g]+=a[c+
f]*d}}});var Xk=/[\[\]\.:\/]/g,Yk="[^"+"\\[\\]\\.:\\/".replace("\\.","")+"]",Zk=/((?:WC+[\/:])*)/.source.replace("WC","[^\\[\\]\\.:\\/]"),$k=/(WCOD+)?/.source.replace("WCOD",Yk),al=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC","[^\\[\\]\\.:\\/]"),bl=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC","[^\\[\\]\\.:\\/]"),cl=new RegExp("^"+Zk+$k+al+bl+"$"),dl=["material","materials","bones"];Object.assign(ii.prototype,{getValue:function(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];
void 0!==c&&c.getValue(a,b)},setValue:function(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}});Object.assign(Aa,{Composite:ii,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new Aa.Composite(a,b,c):new Aa(a,
b,c)},sanitizeNodeName:function(a){return a.replace(/\s/g,"_").replace(Xk,"")},parseTrackName:function(a){var b=cl.exec(a);if(!b)throw Error("PropertyBinding: Cannot parse trackName: "+a);b={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]};var c=b.nodeName&&b.nodeName.lastIndexOf(".");if(void 0!==c&&-1!==c){var d=b.nodeName.substring(c+1);-1!==dl.indexOf(d)&&(b.nodeName=b.nodeName.substring(0,c),b.objectName=d)}if(null===b.propertyName||0===b.propertyName.length)throw Error("PropertyBinding: can not parse propertyName from trackName: "+
a);return b},findNode:function(a,b){if(!b||""===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=a.skeleton.getBoneByName(b);if(void 0!==c)return c}if(a.children){var d=function(a){for(var c=0;c<a.length;c++){var e=a[c];if(e.name===b||e.uuid===b||(e=d(e.children)))return e}return null};if(a=d(a.children))return a}return null}});Object.assign(Aa.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,
HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)a[b++]=c[d]},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex]},function(a,b){this.resolvedProperty.toArray(a,b)}],SetterByBindingTypeAndVersioning:[[function(a,b){this.targetObject[this.propertyName]=a[b]},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.needsUpdate=
!0},function(a,b){this.targetObject[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++]},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.needsUpdate=!0},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d)c[d]=a[b++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b]},function(a,
b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0}],[function(a,b){this.resolvedProperty.fromArray(a,b)},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function(a,b){this.bind();this.getValue(a,b)},setValue:function(a,
b){this.bind();this.setValue(a,b)},bind:function(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=Aa.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case "materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
this);return}a=a.material.materials;break;case "bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(c=0;c<a.length;c++)if(a[c].name===f){f=c;break}break;default:if(void 0===a[c]){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(void 0!==f){if(void 0===a[f]){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
this,a);return}a=a[f]}}f=a[d];if(void 0===f)console.error("THREE.PropertyBinding: Trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;this.targetObject=a;void 0!==a.needsUpdate?b=this.Versioning.NeedsUpdate:void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}void 0!==a.morphTargetDictionary[e]&&(e=a.morphTargetDictionary[e])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=
e}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b]}}else console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.")},unbind:function(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=
this._setValue_unbound}});Object.assign(Aa.prototype,{_getValue_unbound:Aa.prototype.getValue,_setValue_unbound:Aa.prototype.setValue});Object.assign(ji.prototype,{isAnimationObjectGroup:!0,add:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._paths,f=this._parsedPaths,g=this._bindings,h=g.length,l=void 0,k=0,p=arguments.length;k!==p;++k){var n=arguments[k],t=n.uuid,r=d[t];if(void 0===r){r=b++;d[t]=r;a.push(n);t=0;for(var q=h;t!==q;++t)g[t].push(new Aa(n,
e[t],f[t]))}else if(r<c){l=a[r];var u=--c;q=a[u];d[q.uuid]=r;a[r]=q;d[t]=u;a[u]=n;t=0;for(q=h;t!==q;++t){var y=g[t],z=y[r];y[r]=y[u];void 0===z&&(z=new Aa(n,e[t],f[t]));y[u]=z}}else a[r]!==l&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c},remove:function(){for(var a=this._objects,b=this.nCachedObjects_,c=this._indicesByUUID,d=this._bindings,e=d.length,f=0,g=
arguments.length;f!==g;++f){var h=arguments[f],l=h.uuid,k=c[l];if(void 0!==k&&k>=b){var p=b++,n=a[p];c[n.uuid]=k;a[k]=n;c[l]=p;a[p]=h;h=0;for(l=e;h!==l;++h){n=d[h];var t=n[k];n[k]=n[p];n[p]=t}}}this.nCachedObjects_=b},uncache:function(){for(var a=this._objects,b=a.length,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var l=arguments[g].uuid,k=d[l];if(void 0!==k)if(delete d[l],k<c){l=--c;var p=a[l],n=--b,t=a[n];d[p.uuid]=k;a[k]=p;d[t.uuid]=
l;a[l]=t;a.pop();p=0;for(t=f;p!==t;++p){var r=e[p],q=r[n];r[k]=r[l];r[l]=q;r.pop()}}else for(n=--b,t=a[n],d[t.uuid]=k,a[k]=t,a.pop(),p=0,t=f;p!==t;++p)r=e[p],r[k]=r[n],r.pop()}this.nCachedObjects_=c},subscribe_:function(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,l=this.nCachedObjects_,k=Array(h.length);d=e.length;c[a]=d;f.push(a);g.push(b);e.push(k);c=l;for(d=h.length;c!==d;++c)k[c]=new Aa(h[c],a,b);
return k},unsubscribe_:function(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop()}}});Object.assign(ki.prototype,{play:function(){this._mixer._activateAction(this);return this},stop:function(){this._mixer._deactivateAction(this);return this.reset()},reset:function(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping()},
isRunning:function(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){this._startTime=a;return this},setLoop:function(a,b){this.loop=a;this.repetitions=b;return this},setEffectiveWeight:function(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,
0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},setEffectiveTimeScale:function(a){this.timeScale=a;this._effectiveTimeScale=
this.paused?0:a;return this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){this.timeScale=this._clip.duration/a;return this.stopWarping()},syncWith:function(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());
d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this},stopWarping:function(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(a,b,c,d){if(this.enabled){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=
null;b*=c}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a)switch(b=this._interpolants,e=this._propertyBindings,this.blendMode){case 2501:for(var f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulateAdditive(a);break;default:for(f=0,g=b.length;f!==g;++f)b[f].evaluate(c),e[f].accumulate(d,a)}}else this._updateWeight(a)},_updateWeight:function(a){var b=0;if(this.enabled){b=this.weight;var c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&
(this.stopFading(),0===d&&(this.enabled=!1))}}return this._effectiveWeight=b},_updateTimeScale:function(a){var b=0;if(!this.paused){b=this.timeScale;var c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0];b*=d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b},_updateTime:function(a){var b=this.time+a,c=this._clip.duration,d=this.loop,e=this._loopCount,f=2202===d;if(0===a)return-1===e?b:f&&1===(e&1)?c-b:b;if(2200===
d)a:{if(-1===e&&(this._loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else{this.time=b;break a}this.clampWhenFinished?this.paused=!0:this.enabled=!1;this.time=b;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1})}else{-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,f)):this._setEndings(0===this.repetitions,!0,f));if(b>=c||0>b){d=Math.floor(b/c);b-=c*d;e+=Math.abs(d);var g=this.repetitions-e;0>=g?(this.clampWhenFinished?this.paused=!0:this.enabled=
!1,this.time=b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(1===g?(a=0>a,this._setEndings(a,!a,f)):this._setEndings(!1,!1,f),this._loopCount=e,this.time=b,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:d}))}else this.time=b;if(f&&1===(e&1))return c-b}return b},_setEndings:function(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=2401,d.endingEnd=2401):(d.endingStart=a?this.zeroSlopeAtStart?2401:2400:2402,d.endingEnd=b?this.zeroSlopeAtEnd?
2401:2400:2402)},_scheduleFading:function(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this}});Ig.prototype=Object.assign(Object.create(Fa.prototype),{constructor:Ig,_bindAction:function(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings;a=a._interpolants;var g=c.uuid,h=this._bindingsByRootAndName,l=h[g];void 0===
l&&(l={},h[g]=l);for(h=0;h!==e;++h){var k=d[h],p=k.name,n=l[p];if(void 0===n){n=f[h];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,g,p));continue}n=new Hg(Aa.create(c,p,b&&b._propertyBindings[h].binding.parsedPath),k.ValueTypeName,k.getValueSize());++n.referenceCount;this._addInactiveBinding(n,g,p)}f[h]=n;a[h].resultBuffer=n.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,
d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b)}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=
[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},
_isActiveAction:function(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions},_addInactiveAction:function(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a},_removeInactiveAction:function(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;b=a._clip.uuid;
c=this._actionsByClip;d=c[b];var e=d.knownActions,f=e[e.length-1],g=a._byClipCacheIndex;f._byClipCacheIndex=g;e[g]=f;e.pop();a._byClipCacheIndex=null;delete d.actionByRoot[(a._localRoot||this._root).uuid];0===e.length&&delete c[b];this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d)}},_lendAction:function(a){var b=this._actions,c=a._cacheIndex,
d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackAction:function(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_addInactiveBinding:function(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a)},_removeInactiveBinding:function(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid;c=c.path;var e=this._bindingsByRootAndName,
f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];0===Object.keys(f).length&&delete e[d]},_lendBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_takeBackBinding:function(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e},_lendControlInterpolant:function(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,
c=a[b];void 0===c&&(c=new ie(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c},_takeBackControlInterpolant:function(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b,c){var d=b||this._root,e=d.uuid;d="string"===typeof a?Sa.findByName(d,a):a;a=null!==d?d.uuid:a;var f=
this._actionsByClip[a],g=null;void 0===c&&(c=null!==d?d.blendMode:2500);if(void 0!==f){g=f.actionByRoot[e];if(void 0!==g&&g.blendMode===c)return g;g=f.knownActions[0];null===d&&(d=g._clip)}if(null===d)return null;b=new ki(this,d,b,c);this._bindAction(b,g);this._addInactiveAction(b,a,e);return b},existingAction:function(a,b){var c=b||this._root;b=c.uuid;c="string"===typeof a?Sa.findByName(c,a):a;a=this._actionsByClip[c?c.uuid:a];return void 0!==a?a.actionByRoot[b]||null:null},stopAllAction:function(){for(var a=
this._actions,b=this._nActiveActions-1;0<=b;--b)a[b].stop();return this},update:function(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g)b[g]._update(d,a,e,f);a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g)a[g].apply(f);return this},setTime:function(a){for(var b=this.time=0;b<this._actions.length;b++)this._actions[b].time=0;return this.update(a)},getRoot:function(){return this._root},uncacheClip:function(a){var b=
this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){d=d.knownActions;for(var e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,l=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;l._cacheIndex=h;b[h]=l;b.pop();this._removeInactiveBindingsForAction(g)}delete c[a]}},uncacheRoot:function(a){a=a.uuid;var b=this._actionsByClip;for(d in b){var c=b[d].actionByRoot[a];void 0!==c&&(this._deactivateAction(c),this._removeInactiveAction(c))}var d=this._bindingsByRootAndName[a];
if(void 0!==d)for(var e in d)a=d[e],a.restoreOriginalState(),this._removeInactiveBinding(a)},uncacheAction:function(a,b){a=this.existingAction(a,b);null!==a&&(this._deactivateAction(a),this._removeInactiveAction(a))}});vf.prototype.clone=function(){return new vf(void 0===this.value.clone?this.value:this.value.clone())};Jg.prototype=Object.assign(Object.create(sb.prototype),{constructor:Jg,isInstancedInterleavedBuffer:!0,copy:function(a){sb.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;
return this}});Object.assign(Kg.prototype,{set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize(),this.camera=b):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld),this.camera=b):console.error("THREE.Raycaster: Unsupported camera type.")},
intersectObject:function(a,b,c){c=c||[];Lg(a,this,c,b);c.sort(li);return c},intersectObjects:function(a,b,c){c=c||[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),c;for(var d=0,e=a.length;d<e;d++)Lg(a[d],this,c,b);c.sort(li);return c}});Object.assign(mi.prototype,{set:function(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.phi=
a.phi;this.theta=a.theta;return this},makeSafe:function(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+b*b+c*c);0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a,c),this.phi=Math.acos(M.clamp(b/this.radius,-1,1)));return this}});Object.assign(ni.prototype,{set:function(a,b,c){this.radius=a;this.theta=b;this.y=c;return this},
clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.radius=a.radius;this.theta=a.theta;this.y=a.y;return this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){this.radius=Math.sqrt(a*a+c*c);this.theta=Math.atan2(a,c);this.y=b;return this}});var Ui=new t;Object.assign(Mg.prototype,{set:function(a,b){this.min.copy(a);this.max.copy(b);return this},setFromPoints:function(a){this.makeEmpty();for(var b=0,c=a.length;b<
c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(a,b){b=Ui.copy(b).multiplyScalar(.5);this.min.copy(a).sub(b);this.max.copy(a).add(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.min.copy(a.min);this.max.copy(a.max);return this},makeEmpty:function(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){void 0===
a&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new t);return this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){void 0===a&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new t);return this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){this.min.min(a);this.max.max(a);return this},expandByVector:function(a){this.min.sub(a);this.max.add(a);return this},expandByScalar:function(a){this.min.addScalar(-a);
this.max.addScalar(a);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){void 0===b&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new t);return b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<
this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){void 0===b&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new t);return b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){return Ui.copy(a).clamp(this.min,this.max).sub(a).length()},intersect:function(a){this.min.max(a.min);this.max.min(a.max);return this},union:function(a){this.min.min(a.min);this.max.max(a.max);return this},translate:function(a){this.min.add(a);
this.max.add(a);return this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});var Vi=new p,Tf=new p;Object.assign(Ng.prototype,{set:function(a,b){this.start.copy(a);this.end.copy(b);return this},clone:function(){return(new this.constructor).copy(this)},copy:function(a){this.start.copy(a.start);this.end.copy(a.end);return this},getCenter:function(a){void 0===a&&(console.warn("THREE.Line3: .getCenter() target is now required"),a=new p);return a.addVectors(this.start,this.end).multiplyScalar(.5)},
delta:function(a){void 0===a&&(console.warn("THREE.Line3: .delta() target is now required"),a=new p);return a.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){void 0===b&&(console.warn("THREE.Line3: .at() target is now required"),b=new p);return this.delta(b).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(a,b){Vi.subVectors(a,this.start);Tf.subVectors(this.end,
this.start);a=Tf.dot(Tf);a=Tf.dot(Vi)/a;b&&(a=M.clamp(a,0,1));return a},closestPointToPoint:function(a,b,c){a=this.closestPointToPointParameter(a,b);void 0===c&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new p);return this.delta(c).multiplyScalar(a).add(this.start)},applyMatrix4:function(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});ne.prototype=Object.create(y.prototype);
ne.prototype.constructor=ne;ne.prototype.isImmediateRenderObject=!0;var Wi=new p;hd.prototype=Object.create(y.prototype);hd.prototype.constructor=hd;hd.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose()};hd.prototype.update=function(){this.light.updateMatrixWorld();var a=this.light.distance?this.light.distance:1E3,b=a*Math.tan(this.light.angle);this.cone.scale.set(b,b,a);Wi.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(Wi);void 0!==this.color?
this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};var Ub=new p,Uf=new O,oh=new O;qc.prototype=Object.create(la.prototype);qc.prototype.constructor=qc;qc.prototype.isSkeletonHelper=!0;qc.prototype.updateMatrixWorld=function(a){var b=this.bones,c=this.geometry,d=c.getAttribute("position");oh.getInverse(this.root.matrixWorld);for(var e=0,f=0;e<b.length;e++){var g=b[e];g.parent&&g.parent.isBone&&(Uf.multiplyMatrices(oh,g.matrixWorld),Ub.setFromMatrixPosition(Uf),
d.setXYZ(f,Ub.x,Ub.y,Ub.z),Uf.multiplyMatrices(oh,g.parent.matrixWorld),Ub.setFromMatrixPosition(Uf),d.setXYZ(f+1,Ub.x,Ub.y,Ub.z),f+=2)}c.getAttribute("position").needsUpdate=!0;y.prototype.updateMatrixWorld.call(this,a)};id.prototype=Object.create(ha.prototype);id.prototype.constructor=id;id.prototype.dispose=function(){this.geometry.dispose();this.material.dispose()};id.prototype.update=function(){void 0!==this.color?this.material.color.set(this.color):this.material.color.copy(this.light.color)};
var el=new p,Xi=new D,Yi=new D;jd.prototype=Object.create(y.prototype);jd.prototype.constructor=jd;jd.prototype.dispose=function(){this.children[0].geometry.dispose();this.children[0].material.dispose()};jd.prototype.update=function(){var a=this.children[0];if(void 0!==this.color)this.material.color.set(this.color);else{var b=a.geometry.getAttribute("color");Xi.copy(this.light.color);Yi.copy(this.light.groundColor);for(var c=0,d=b.count;c<d;c++){var e=c<d/2?Xi:Yi;b.setXYZ(c,e.r,e.g,e.b)}b.needsUpdate=
!0}a.lookAt(el.setFromMatrixPosition(this.light.matrixWorld).negate())};wf.prototype=Object.assign(Object.create(la.prototype),{constructor:wf,copy:function(a){la.prototype.copy.call(this,a);this.geometry.copy(a.geometry);this.material.copy(a.material);return this},clone:function(){return(new this.constructor).copy(this)}});xf.prototype=Object.create(la.prototype);xf.prototype.constructor=xf;var Zi=new p,Vf=new p,$i=new p;kd.prototype=Object.create(y.prototype);kd.prototype.constructor=kd;kd.prototype.dispose=
function(){this.lightPlane.geometry.dispose();this.lightPlane.material.dispose();this.targetLine.geometry.dispose();this.targetLine.material.dispose()};kd.prototype.update=function(){Zi.setFromMatrixPosition(this.light.matrixWorld);Vf.setFromMatrixPosition(this.light.target.matrixWorld);$i.subVectors(Vf,Zi);this.lightPlane.lookAt(Vf);void 0!==this.color?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),
this.targetLine.material.color.copy(this.light.color));this.targetLine.lookAt(Vf);this.targetLine.scale.z=$i.length()};var yf=new p,ea=new fb;oe.prototype=Object.create(la.prototype);oe.prototype.constructor=oe;oe.prototype.update=function(){var a=this.geometry,b=this.pointMap;ea.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);Q("c",b,a,ea,0,0,-1);Q("t",b,a,ea,0,0,1);Q("n1",b,a,ea,-1,-1,-1);Q("n2",b,a,ea,1,-1,-1);Q("n3",b,a,ea,-1,1,-1);Q("n4",b,a,ea,1,1,-1);Q("f1",b,a,ea,-1,-1,1);
Q("f2",b,a,ea,1,-1,1);Q("f3",b,a,ea,-1,1,1);Q("f4",b,a,ea,1,1,1);Q("u1",b,a,ea,.7,1.1,-1);Q("u2",b,a,ea,-.7,1.1,-1);Q("u3",b,a,ea,0,2,-1);Q("cf1",b,a,ea,-1,0,1);Q("cf2",b,a,ea,1,0,1);Q("cf3",b,a,ea,0,-1,1);Q("cf4",b,a,ea,0,1,1);Q("cn1",b,a,ea,-1,0,-1);Q("cn2",b,a,ea,1,0,-1);Q("cn3",b,a,ea,0,-1,-1);Q("cn4",b,a,ea,0,1,-1);a.getAttribute("position").needsUpdate=!0};var Wf=new Va;xb.prototype=Object.create(la.prototype);xb.prototype.constructor=xb;xb.prototype.update=function(a){void 0!==a&&console.warn("THREE.BoxHelper: .update() has no longer arguments.");
void 0!==this.object&&Wf.setFromObject(this.object);if(!Wf.isEmpty()){a=Wf.min;var b=Wf.max,c=this.geometry.attributes.position,d=c.array;d[0]=b.x;d[1]=b.y;d[2]=b.z;d[3]=a.x;d[4]=b.y;d[5]=b.z;d[6]=a.x;d[7]=a.y;d[8]=b.z;d[9]=b.x;d[10]=a.y;d[11]=b.z;d[12]=b.x;d[13]=b.y;d[14]=a.z;d[15]=a.x;d[16]=b.y;d[17]=a.z;d[18]=a.x;d[19]=a.y;d[20]=a.z;d[21]=b.x;d[22]=a.y;d[23]=a.z;c.needsUpdate=!0;this.geometry.computeBoundingSphere()}};xb.prototype.setFromObject=function(a){this.object=a;this.update();return this};
xb.prototype.copy=function(a){la.prototype.copy.call(this,a);this.object=a.object;return this};xb.prototype.clone=function(){return(new this.constructor).copy(this)};pe.prototype=Object.create(la.prototype);pe.prototype.constructor=pe;pe.prototype.updateMatrixWorld=function(a){var b=this.box;b.isEmpty()||(b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),y.prototype.updateMatrixWorld.call(this,a))};qe.prototype=Object.create(La.prototype);qe.prototype.constructor=qe;qe.prototype.updateMatrixWorld=
function(a){var b=-this.plane.constant;1E-8>Math.abs(b)&&(b=1E-8);this.scale.set(.5*this.size,.5*this.size,b);this.children[0].material.side=0>b?1:0;this.lookAt(this.plane.normal);y.prototype.updateMatrixWorld.call(this,a)};var aj=new p,zf,Og;yb.prototype=Object.create(y.prototype);yb.prototype.constructor=yb;yb.prototype.setDirection=function(a){.99999<a.y?this.quaternion.set(0,0,0,1):-.99999>a.y?this.quaternion.set(1,0,0,0):(aj.set(a.z,0,-a.x).normalize(),this.quaternion.setFromAxisAngle(aj,Math.acos(a.y)))};
yb.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(1E-4,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix()};yb.prototype.setColor=function(a){this.line.material.color.set(a);this.cone.material.color.set(a)};yb.prototype.copy=function(a){y.prototype.copy.call(this,a,!1);this.line.copy(a.line);this.cone.copy(a.cone);return this};yb.prototype.clone=function(){return(new this.constructor).copy(this)};
re.prototype=Object.create(la.prototype);re.prototype.constructor=re;var nb=Math.pow(2,8),bj=[.125,.215,.35,.446,.526,.582],cj=5+bj.length,mb={3E3:0,3001:1,3002:2,3004:3,3005:4,3006:5,3007:6},ph=new fd,qh=function(){for(var a=[],b=[],c=[],d=8,e=0;e<cj;e++){var f=Math.pow(2,d);b.push(f);var g=1/f;4<e?g=bj[e-8+4-1]:0==e&&(g=0);c.push(g);g=1/(f-1);f=-g/2;g=1+g/2;var h=[f,f,g,f,g,g,f,f,g,g,f,g];f=new Float32Array(108);g=new Float32Array(72);for(var l=new Float32Array(36),k=0;6>k;k++){var p=k%3*2/3-1,
n=2<k?0:-1;f.set([p,n,0,p+2/3,n,0,p+2/3,n+1,0,p,n,0,p+2/3,n+1,0,p,n+1,0],18*k);g.set(h,12*k);l.set([k,k,k,k,k,k],6*k)}h=new E;h.setAttribute("position",new F(f,3));h.setAttribute("uv",new F(g,2));h.setAttribute("faceIndex",new F(l,1));a.push(h);4<d&&d--}return{_lodPlanes:a,_sizeLods:b,_sigmas:c}}(),Ce=qh._lodPlanes,dj=qh._sizeLods,Xf=qh._sigmas,rh=null,zc=(1+Math.sqrt(5))/2,xd=1/zc,ej=[new p(1,1,1),new p(-1,1,1),new p(1,1,-1),new p(-1,1,-1),new p(0,zc,xd),new p(0,zc,-xd),new p(xd,0,zc),new p(-xd,
0,zc),new p(zc,xd,0),new p(-zc,xd,0)];Pg.prototype={constructor:Pg,fromScene:function(a,b,c,d){void 0===b&&(b=0);void 0===c&&(c=.1);void 0===d&&(d=100);rh=this._renderer.getRenderTarget();var e=this._allocateTargets();this._sceneToCubeUV(a,c,d,e);0<b&&this._blur(e,0,0,b);this._applyPMREM(e);this._cleanup(e);return e},fromEquirectangular:function(a){a.magFilter=1003;a.minFilter=1003;a.generateMipmaps=!1;return this.fromCubemap(a)},fromCubemap:function(a){rh=this._renderer.getRenderTarget();var b=this._allocateTargets(a);
this._textureToCubeUV(a,b);this._applyPMREM(b);this._cleanup(b);return b},compileCubemapShader:function(){null===this._cubemapShader&&(this._cubemapShader=ri(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){null===this._equirectShader&&(this._equirectShader=qi(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose();null!==this._cubemapShader&&this._cubemapShader.dispose();null!==this._equirectShader&&this._equirectShader.dispose();
for(var a=0;a<Ce.length;a++)Ce[a].dispose()},_cleanup:function(a){this._pingPongRenderTarget.dispose();this._renderer.setRenderTarget(rh);a.scissorTest=!1;a.setSize(a.width,a.height)},_allocateTargets:function(a){var b=void 0===a||1009!==a.type?!1:3E3===a.encoding||3001===a.encoding||3007===a.encoding;b={magFilter:1003,minFilter:1003,generateMipmaps:!1,type:1009,format:1023,encoding:b?a.encoding:3002,depthBuffer:!1,stencilBuffer:!1};var c=pi(b);c.depthBuffer=a?!1:!0;this._pingPongRenderTarget=pi(b);
return c},_compileMaterial:function(a){var b=new qb;b.add(new ha(Ce[0],a));this._renderer.compile(b,ph)},_sceneToCubeUV:function(a,b,c,d){b=new S(90,1,b,c);c=[1,-1,1,1,1,1];var e=[1,1,1,-1,-1,-1],f=this._renderer,g=f.outputEncoding,h=f.toneMapping,k=f.toneMappingExposure,m=f.getClearColor(),p=f.getClearAlpha();f.toneMapping=1;f.toneMappingExposure=1;f.outputEncoding=3E3;var n=a.background;if(n&&n.isColor){n.convertSRGBToLinear();var t=Math.min(Math.max(Math.ceil(Math.log2(Math.max(n.r,n.g,n.b))),
-128),127);n=n.multiplyScalar(Math.pow(2,-t));f.setClearColor(n,(t+128)/255);a.background=null}for(n=0;6>n;n++)t=n%3,0==t?(b.up.set(0,c[n],0),b.lookAt(e[n],0,0)):1==t?(b.up.set(0,0,c[n]),b.lookAt(0,e[n],0)):(b.up.set(0,c[n],0),b.lookAt(0,0,e[n])),Sg(d,t*nb,2<n?nb:0,nb,nb),f.setRenderTarget(d),f.render(a,b);f.toneMapping=h;f.toneMappingExposure=k;f.outputEncoding=g;f.setClearColor(m,p)},_textureToCubeUV:function(a,b){var c=new qb,d=this._renderer;a.isCubeTexture?null==this._cubemapShader&&(this._cubemapShader=
ri()):null==this._equirectShader&&(this._equirectShader=qi());var e=a.isCubeTexture?this._cubemapShader:this._equirectShader;c.add(new ha(Ce[0],e));e=e.uniforms;e.envMap.value=a;a.isCubeTexture||e.texelSize.value.set(1/a.image.width,1/a.image.height);e.inputEncoding.value=mb[a.encoding];e.outputEncoding.value=mb[b.texture.encoding];Sg(b,0,0,3*nb,2*nb);d.setRenderTarget(b);d.render(c,ph)},_applyPMREM:function(a){var b=this._renderer,c=b.autoClear;b.autoClear=!1;for(var d=1;d<cj;d++)this._blur(a,d-
1,d,Math.sqrt(Xf[d]*Xf[d]-Xf[d-1]*Xf[d-1]),ej[(d-1)%ej.length]);b.autoClear=c},_blur:function(a,b,c,d,e){var f=this._pingPongRenderTarget;this._halfBlur(a,f,b,c,d,"latitudinal",e);this._halfBlur(f,a,c,c,d,"longitudinal",e)},_halfBlur:function(a,b,c,d,e,f,g){var h=this._renderer,k=this._blurMaterial;"latitudinal"!==f&&"longitudinal"!==f&&console.error("blur direction must be either latitudinal or longitudinal!");var m=new qb;m.add(new ha(Ce[d],k));k=k.uniforms;var p=dj[c]-1;p=isFinite(e)?Math.PI/(2*
p):2*Math.PI/39;var n=e/p,t=isFinite(e)?1+Math.floor(3*n):20;20<t&&console.warn("sigmaRadians, "+e+", is too large and will clip, as it requested "+t+" samples when the maximum is set to 20");e=[];for(var r=0,q=0;20>q;++q){var u=q/n;u=Math.exp(-u*u/2);e.push(u);0==q?r+=u:q<t&&(r+=2*u)}for(q=0;q<e.length;q++)e[q]/=r;k.envMap.value=a.texture;k.samples.value=t;k.weights.value=e;k.latitudinal.value="latitudinal"===f;g&&(k.poleAxis.value=g);k.dTheta.value=p;k.mipInt.value=8-c;k.inputEncoding.value=mb[a.texture.encoding];
k.outputEncoding.value=mb[a.texture.encoding];a=dj[d];u=3*Math.max(0,nb-2*a);Sg(b,u,(0===d?0:2*nb)+2*a*(4<d?d-8+4:0),3*a,2*a);h.setRenderTarget(b);h.render(m,ph)}};I.create=function(a,b){console.log("THREE.Curve.create() has been deprecated");a.prototype=Object.create(I.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a};Object.assign(wb.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
a=this.getPoints(a);return this.createGeometry(a)},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");a=this.getSpacedPoints(a);return this.createGeometry(a)},createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");for(var b=new J,c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new p(e.x,
e.y,e.z||0))}return b}});Object.assign(bb.prototype,{fromPoints:function(a){console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");return this.setFromPoints(a)}});si.prototype=Object.create(za.prototype);ti.prototype=Object.create(za.prototype);Tg.prototype=Object.create(za.prototype);Object.assign(Tg.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},
reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});wf.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};qc.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(V.prototype,{extractUrlBase:function(a){console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
return mh.extractUrlBase(a)}});V.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(tf.prototype,{setTexturePath:function(a){console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");return this.setResourcePath(a)}});Object.assign(Mg.prototype,{center:function(a){console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},size:function(a){console.warn("THREE.Box2: .size() has been renamed to .getSize().");return this.getSize(a)}});Object.assign(Va.prototype,{center:function(a){console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
return this.getCenter(a)},empty:function(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty()},isIntersectionBox:function(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionSphere:function(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a)},size:function(a){console.warn("THREE.Box3: .size() has been renamed to .getSize().");
return this.getSize(a)}});Object.assign(eb.prototype,{empty:function(){console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty().");return this.isEmpty()}});Gc.prototype.setFromMatrix=function(a){console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix().");return this.setFromProjectionMatrix(a)};Ng.prototype.center=function(a){console.warn("THREE.Line3: .center() has been renamed to .getCenter().");return this.getCenter(a)};Object.assign(M,{random16:function(){console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");
return Math.random()},nearestPowerOfTwo:function(a){console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");return M.floorPowerOfTwo(a)},nextPowerOfTwo:function(a){console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");return M.ceilPowerOfTwo(a)}});Object.assign(va.prototype,{flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},
multiplyVector3:function(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(a){console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});
Object.assign(O.prototype,{extractPosition:function(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a)},flattenToArrayOffset:function(a,b){console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");return this.toArray(a,b)},getPosition:function(){console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return(new p).setFromMatrixColumn(this,
3)},setRotationFromQuaternion:function(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},multiplyVector4:function(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
return a.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this)},crossVector:function(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},
rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(a){console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this)},
applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");return this.makePerspective(a,b,d,c,e,f)}});Wa.prototype.isIntersectionLine=function(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a)};na.prototype.multiplyVector3=
function(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this)};Object.assign(Xb.prototype,{isIntersectionBox:function(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a)},isIntersectionPlane:function(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a)},isIntersectionSphere:function(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
return this.intersectsSphere(a)}});Object.assign(pa.prototype,{area:function(){console.warn("THREE.Triangle: .area() has been renamed to .getArea().");return this.getArea()},barycoordFromPoint:function(a,b){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return this.getBarycoord(a,b)},midpoint:function(a){console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");return this.getMidpoint(a)},normal:function(a){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
return this.getNormal(a)},plane:function(a){console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");return this.getPlane(a)}});Object.assign(pa,{barycoordFromPoint:function(a,b,c,d,e){console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");return pa.getBarycoord(a,b,c,d,e)},normal:function(a,b,c,d){console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");return pa.getNormal(a,b,c,d)}});Object.assign(Ob.prototype,{extractAllPoints:function(a){console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
return this.extractPoints(a)},extrude:function(a){console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");return new ec(this,a)},makeGeometry:function(a){console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");return new gc(this,a)}});Object.assign(t.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(p.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},
getPositionFromMatrix:function(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,
a)},applyProjection:function(a){console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");return this.applyMatrix4(a)},fromAttribute:function(a,b,c){console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");return this.manhattanDistanceTo(a)},lengthManhattan:function(){console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
return this.manhattanLength()}});Object.assign(fa.prototype,{fromAttribute:function(a,b,c){console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");return this.fromBufferAttribute(a,b,c)},lengthManhattan:function(){console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");return this.manhattanLength()}});Object.assign(J.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},
applyMatrix:function(a){console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4().");return this.applyMatrix4(a)}});Object.assign(y.prototype,{getChildByName:function(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
return this.translateOnAxis(b,a)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(a){console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4().");return this.applyMatrix4(a)}});Object.defineProperties(y.prototype,{eulerOrder:{get:function(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(ha.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});
Object.defineProperties(ha.prototype,{drawMode:{get:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode.");return 0},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Nd.prototype,{objects:{get:function(){console.warn("THREE.LOD: .objects has been renamed to .levels.");
return this.levels}}});Object.defineProperty(Se.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Re.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(I.prototype,"__arcLengthDivisions",{get:function(){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");return this.arcLengthDivisions},
set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");this.arcLengthDivisions=a}});S.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a)};Object.defineProperties(W.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a}}});Object.defineProperties(F.prototype,{length:{get:function(){console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
return this.array.length}},dynamic:{get:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");return 35048===this.usage},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead.");this.setUsage(35048)}}});Object.assign(F.prototype,{setDynamic:function(a){console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead.");this.setUsage(!0===a?35048:35044);return this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},
setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(E.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a)},addAttribute:function(a,b,c){console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute().");return b&&b.isBufferAttribute||b&&b.isInterleavedBufferAttribute?"index"===
a?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),this):this.setAttribute(a,b):(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new F(b,c)))},addDrawCall:function(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(a){console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute().");return this.deleteAttribute(a)},applyMatrix:function(a){console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4().");return this.applyMatrix4(a)}});
Object.defineProperties(E.prototype,{drawcalls:{get:function(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups}},offsets:{get:function(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups}}});Object.defineProperties(me.prototype,{maxInstancedCount:{get:function(){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.");return this.instanceCount},set:function(a){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount.");
this.instanceCount=a}}});Object.defineProperties(Kg.prototype,{linePrecision:{get:function(){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");return this.params.Line.threshold},set:function(a){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead.");this.params.Line.threshold=a}}});Object.defineProperties(sb.prototype,{dynamic:{get:function(){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");
return 35048===this.usage},set:function(a){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead.");this.setUsage(a)}}});Object.assign(sb.prototype,{setDynamic:function(a){console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead.");this.setUsage(!0===a?35048:35044);return this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});
Object.assign(hb.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(vf.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
return this}}});Object.defineProperties(L.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){console.warn("THREE.Material: .wrapRGB has been removed.");return new D}},shading:{get:function(){console.error("THREE."+
this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.");this.flatShading=1===a}},stencilMask:{get:function(){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");return this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead.");this.stencilFuncMask=
a}}});Object.defineProperties(Nb.prototype,{metal:{get:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(Ca.prototype,{derivatives:{get:function(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives},
set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a}}});Object.assign(kg.prototype,{clearTarget:function(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");this.setRenderTarget(a);this.clear(b,c,d)},animate:function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");this.setAnimationLoop(a)},getCurrentRenderTarget:function(){console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
return this.getRenderTarget()},getMaxAnisotropy:function(){console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");return this.capabilities.getMaxAnisotropy()},getPrecision:function(){console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");return this.capabilities.precision},resetGLState:function(){console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");return this.state.reset()},supportsFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
return this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
return this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
return this.capabilities.vertexTextures},supportsInstancedArrays:function(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},
addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},
setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel().");return this.getActiveMipmapLevel()}});Object.defineProperties(kg.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},
set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead.");return this.getContext()}},
vr:{get:function(){console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr");return this.xr}},gammaInput:{get:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.");return!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");
return!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead.");this.outputEncoding=!0===a?3001:3E3}}});Object.defineProperties(Sh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},
set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ia.prototype,{wrapS:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
return this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a}},wrapT:{get:function(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a}},magFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter},
set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a}},minFilter:{get:function(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a}},anisotropy:{get:function(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy},
set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a}},offset:{get:function(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a}},repeat:{get:function(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
this.texture.repeat=a}},format:{get:function(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a}},type:{get:function(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a}},generateMipmaps:{get:function(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
return this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a}}});Object.defineProperties(gd.prototype,{load:{value:function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");var b=this;(new uf).load(a,function(a){b.setBuffer(a)});return this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Gg.prototype.getData=
function(){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData()};Fc.prototype.updateCubeMap=function(a,b){console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");return this.update(a,b)};Pb.crossOrigin=void 0;Pb.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new ff;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};
Pb.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new ef;e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a};Pb.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Pb.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};
"undefined"!==typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"117dev"}}));k.ACESFilmicToneMapping=5;k.AddEquation=100;k.AddOperation=2;k.AdditiveAnimationBlendMode=2501;k.AdditiveBlending=2;k.AlphaFormat=1021;k.AlwaysDepth=1;k.AlwaysStencilFunc=519;k.AmbientLight=nf;k.AmbientLightProbe=Bg;k.AnimationClip=Sa;k.AnimationLoader=sg;k.AnimationMixer=Ig;k.AnimationObjectGroup=ji;k.AnimationUtils=ka;k.ArcCurve=ed;k.ArrayCamera=Me;k.ArrowHelper=yb;
k.Audio=gd;k.AudioAnalyser=Gg;k.AudioContext=Eg;k.AudioListener=Dg;k.AudioLoader=uf;k.AxesHelper=re;k.AxisHelper=function(a){console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");return new re(a)};k.BackSide=1;k.BasicDepthPacking=3200;k.BasicShadowMap=0;k.BinaryTextureLoader=function(a){console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");return new df(a)};k.Bone=lg;k.BooleanKeyframeTrack=$e;k.BoundingBoxHelper=function(a,b){console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
return new xb(a,b)};k.Box2=Mg;k.Box3=Va;k.Box3Helper=pe;k.BoxBufferGeometry=Gd;k.BoxGeometry=gh;k.BoxHelper=xb;k.BufferAttribute=F;k.BufferGeometry=E;k.BufferGeometryLoader=sf;k.ByteType=1010;k.Cache=uc;k.Camera=fb;k.CameraHelper=oe;k.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been removed")};k.CanvasTexture=Od;k.CatmullRomCurve3=za;k.CineonToneMapping=4;k.CircleBufferGeometry=ad;k.CircleGeometry=he;k.ClampToEdgeWrapping=1001;k.Clock=Cg;k.ClosedSplineCurve3=si;k.Color=D;k.ColorKeyframeTrack=
af;k.CompressedTexture=Oc;k.CompressedTextureLoader=tg;k.ConeBufferGeometry=ge;k.ConeGeometry=fe;k.CubeCamera=Fc;k.CubeGeometry=gh;k.CubeReflectionMapping=301;k.CubeRefractionMapping=302;k.CubeTexture=rb;k.CubeTextureLoader=ef;k.CubeUVReflectionMapping=306;k.CubeUVRefractionMapping=307;k.CubicBezierCurve=Ya;k.CubicBezierCurve3=jb;k.CubicInterpolant=Ye;k.CullFaceBack=1;k.CullFaceFront=2;k.CullFaceFrontBack=3;k.CullFaceNone=0;k.Curve=I;k.CurvePath=wb;k.CustomBlending=5;k.CylinderBufferGeometry=ub;k.CylinderGeometry=
ic;k.Cylindrical=ni;k.DataTexture=ac;k.DataTexture2DArray=Hc;k.DataTexture3D=Ic;k.DataTextureLoader=df;k.DecrementStencilOp=7683;k.DecrementWrapStencilOp=34056;k.DefaultLoadingManager=fi;k.DepthFormat=1026;k.DepthStencilFormat=1027;k.DepthTexture=Pd;k.DirectionalLight=mf;k.DirectionalLightHelper=kd;k.DirectionalLightShadow=lf;k.DiscreteInterpolant=Ze;k.DodecahedronBufferGeometry=Tc;k.DodecahedronGeometry=Vd;k.DoubleSide=2;k.DstAlphaFactor=206;k.DstColorFactor=208;k.DynamicBufferAttribute=function(a,
b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setUsage( THREE.DynamicDrawUsage ) instead.");return(new F(a,b)).setUsage(35048)};k.DynamicCopyUsage=35050;k.DynamicDrawUsage=35048;k.DynamicReadUsage=35049;k.EdgesGeometry=$c;k.EdgesHelper=function(a,b){console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");return new la(new $c(a.geometry),new ca({color:void 0!==b?b:16777215}))};k.EllipseCurve=Na;k.EqualDepth=4;k.EqualStencilFunc=
514;k.EquirectangularReflectionMapping=303;k.EquirectangularRefractionMapping=304;k.Euler=Vb;k.EventDispatcher=Fa;k.ExtrudeBufferGeometry=hb;k.ExtrudeGeometry=ec;k.Face3=Ac;k.Face4=function(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new Ac(a,b,c,e,f,g)};k.FaceColors=1;k.FileLoader=Ta;k.FlatShading=1;k.Float32Attribute=function(a,b){console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
return new B(a,b)};k.Float32BufferAttribute=B;k.Float64Attribute=function(a,b){console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");return new Dd(a,b)};k.Float64BufferAttribute=Dd;k.FloatType=1015;k.Fog=Pe;k.FogExp2=Oe;k.Font=yg;k.FontLoader=zg;k.FrontFaceDirectionCCW=1;k.FrontFaceDirectionCW=0;k.FrontSide=0;k.Frustum=Gc;k.GammaEncoding=3007;k.Geometry=J;k.GeometryUtils={merge:function(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
if(b.isMesh){b.matrixAutoUpdate&&b.updateMatrix();var d=b.matrix;b=b.geometry}a.merge(b,d,c)},center:function(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center()}};k.GreaterDepth=6;k.GreaterEqualDepth=5;k.GreaterEqualStencilFunc=518;k.GreaterStencilFunc=516;k.GridHelper=wf;k.Group=Kc;k.HalfFloatType=1016;k.HemisphereLight=gf;k.HemisphereLightHelper=jd;k.HemisphereLightProbe=Ag;k.IcosahedronBufferGeometry=Sc;k.IcosahedronGeometry=
Ud;k.ImageBitmapLoader=wg;k.ImageLoader=dd;k.ImageUtils=Pb;k.ImmediateRenderObject=ne;k.IncrementStencilOp=7682;k.IncrementWrapStencilOp=34055;k.InstancedBufferAttribute=rf;k.InstancedBufferGeometry=me;k.InstancedInterleavedBuffer=Jg;k.InstancedMesh=Te;k.Int16Attribute=function(a,b){console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");return new Bd(a,b)};k.Int16BufferAttribute=Bd;k.Int32Attribute=function(a,b){console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
return new Cd(a,b)};k.Int32BufferAttribute=Cd;k.Int8Attribute=function(a,b){console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");return new yd(a,b)};k.Int8BufferAttribute=yd;k.IntType=1013;k.InterleavedBuffer=sb;k.InterleavedBufferAttribute=Kd;k.Interpolant=Ma;k.InterpolateDiscrete=2300;k.InterpolateLinear=2301;k.InterpolateSmooth=2302;k.InvertStencilOp=5386;k.JSONLoader=function(){console.error("THREE.JSONLoader has been removed.")};k.KeepStencilOp=7680;
k.KeyframeTrack=ya;k.LOD=Nd;k.LatheBufferGeometry=Zc;k.LatheGeometry=ee;k.Layers=De;k.LensFlare=function(){console.error("THREE.LensFlare has been moved to /examples/jsm/objects/Lensflare.js")};k.LessDepth=2;k.LessEqualDepth=3;k.LessEqualStencilFunc=515;k.LessStencilFunc=513;k.Light=W;k.LightProbe=Ua;k.LightShadow=lb;k.Line=La;k.Line3=Ng;k.LineBasicMaterial=ca;k.LineCurve=Ea;k.LineCurve3=Za;k.LineDashedMaterial=pc;k.LineLoop=Ue;k.LinePieces=1;k.LineSegments=la;k.LineStrip=0;k.LinearEncoding=3E3;k.LinearFilter=
1006;k.LinearInterpolant=ie;k.LinearMipMapLinearFilter=1008;k.LinearMipMapNearestFilter=1007;k.LinearMipmapLinearFilter=1008;k.LinearMipmapNearestFilter=1007;k.LinearToneMapping=1;k.Loader=V;k.LoaderUtils=mh;k.LoadingManager=rg;k.LogLuvEncoding=3003;k.LoopOnce=2200;k.LoopPingPong=2202;k.LoopRepeat=2201;k.LuminanceAlphaFormat=1025;k.LuminanceFormat=1024;k.MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2};k.Material=L;k.MaterialLoader=qf;k.Math=M;k.MathUtils=M;k.Matrix3=va;k.Matrix4=O;k.MaxEquation=
104;k.Mesh=ha;k.MeshBasicMaterial=Pa;k.MeshDepthMaterial=Ib;k.MeshDistanceMaterial=Jb;k.MeshFaceMaterial=function(a){console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");return a};k.MeshLambertMaterial=nc;k.MeshMatcapMaterial=oc;k.MeshNormalMaterial=mc;k.MeshPhongMaterial=Nb;k.MeshPhysicalMaterial=kc;k.MeshStandardMaterial=ib;k.MeshToonMaterial=lc;k.MinEquation=103;k.MirroredRepeatWrapping=1002;k.MixOperation=1;k.MultiMaterial=function(a){void 0===a&&(a=[]);console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
a.isMultiMaterial=!0;a.materials=a;a.clone=function(){return a.slice()};return a};k.MultiplyBlending=4;k.MultiplyOperation=0;k.NearestFilter=1003;k.NearestMipMapLinearFilter=1005;k.NearestMipMapNearestFilter=1004;k.NearestMipmapLinearFilter=1005;k.NearestMipmapNearestFilter=1004;k.NeverDepth=0;k.NeverStencilFunc=512;k.NoBlending=0;k.NoColors=0;k.NoToneMapping=0;k.NormalAnimationBlendMode=2500;k.NormalBlending=1;k.NotEqualDepth=7;k.NotEqualStencilFunc=517;k.NumberKeyframeTrack=bd;k.Object3D=y;k.ObjectLoader=
tf;k.ObjectSpaceNormalMap=1;k.OctahedronBufferGeometry=cc;k.OctahedronGeometry=Td;k.OneFactor=201;k.OneMinusDstAlphaFactor=207;k.OneMinusDstColorFactor=209;k.OneMinusSrcAlphaFactor=205;k.OneMinusSrcColorFactor=203;k.OrthographicCamera=fd;k.PCFShadowMap=1;k.PCFSoftShadowMap=2;k.PMREMGenerator=Pg;k.ParametricBufferGeometry=Qc;k.ParametricGeometry=Qd;k.Particle=function(a){console.warn("THREE.Particle has been renamed to THREE.Sprite.");return new Ld(a)};k.ParticleBasicMaterial=function(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
return new Xa(a)};k.ParticleSystem=function(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new Nc(a,b)};k.ParticleSystemMaterial=function(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new Xa(a)};k.Path=bb;k.PerspectiveCamera=S;k.Plane=Wa;k.PlaneBufferGeometry=bc;k.PlaneGeometry=Fd;k.PlaneHelper=qe;k.PointCloud=function(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new Nc(a,b)};k.PointCloudMaterial=
function(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new Xa(a)};k.PointLight=kf;k.PointLightHelper=id;k.Points=Nc;k.PointsMaterial=Xa;k.PolarGridHelper=xf;k.PolyhedronBufferGeometry=Ha;k.PolyhedronGeometry=Rd;k.PositionalAudio=Fg;k.PropertyBinding=Aa;k.PropertyMixer=Hg;k.QuadraticBezierCurve=$a;k.QuadraticBezierCurve3=kb;k.Quaternion=na;k.QuaternionKeyframeTrack=je;k.QuaternionLinearInterpolant=bf;k.REVISION="117dev";k.RGBADepthPacking=3201;k.RGBAFormat=
1023;k.RGBAIntegerFormat=1033;k.RGBA_ASTC_10x10_Format=37819;k.RGBA_ASTC_10x5_Format=37816;k.RGBA_ASTC_10x6_Format=37817;k.RGBA_ASTC_10x8_Format=37818;k.RGBA_ASTC_12x10_Format=37820;k.RGBA_ASTC_12x12_Format=37821;k.RGBA_ASTC_4x4_Format=37808;k.RGBA_ASTC_5x4_Format=37809;k.RGBA_ASTC_5x5_Format=37810;k.RGBA_ASTC_6x5_Format=37811;k.RGBA_ASTC_6x6_Format=37812;k.RGBA_ASTC_8x5_Format=37813;k.RGBA_ASTC_8x6_Format=37814;k.RGBA_ASTC_8x8_Format=37815;k.RGBA_BPTC_Format=36492;k.RGBA_ETC2_EAC_Format=37496;k.RGBA_PVRTC_2BPPV1_Format=
35843;k.RGBA_PVRTC_4BPPV1_Format=35842;k.RGBA_S3TC_DXT1_Format=33777;k.RGBA_S3TC_DXT3_Format=33778;k.RGBA_S3TC_DXT5_Format=33779;k.RGBDEncoding=3006;k.RGBEEncoding=3002;k.RGBEFormat=1023;k.RGBFormat=1022;k.RGBIntegerFormat=1032;k.RGBM16Encoding=3005;k.RGBM7Encoding=3004;k.RGB_ETC1_Format=36196;k.RGB_ETC2_Format=37492;k.RGB_PVRTC_2BPPV1_Format=35841;k.RGB_PVRTC_4BPPV1_Format=35840;k.RGB_S3TC_DXT1_Format=33776;k.RGFormat=1030;k.RGIntegerFormat=1031;k.RawShaderMaterial=vb;k.Ray=Xb;k.Raycaster=Kg;k.RectAreaLight=
of;k.RedFormat=1028;k.RedIntegerFormat=1029;k.ReinhardToneMapping=2;k.RepeatWrapping=1E3;k.ReplaceStencilOp=7681;k.ReverseSubtractEquation=102;k.RingBufferGeometry=Yc;k.RingGeometry=de;k.SRGB8_ALPHA8_ASTC_10x10_Format=37851;k.SRGB8_ALPHA8_ASTC_10x5_Format=37848;k.SRGB8_ALPHA8_ASTC_10x6_Format=37849;k.SRGB8_ALPHA8_ASTC_10x8_Format=37850;k.SRGB8_ALPHA8_ASTC_12x10_Format=37852;k.SRGB8_ALPHA8_ASTC_12x12_Format=37853;k.SRGB8_ALPHA8_ASTC_4x4_Format=37840;k.SRGB8_ALPHA8_ASTC_5x4_Format=37841;k.SRGB8_ALPHA8_ASTC_5x5_Format=
37842;k.SRGB8_ALPHA8_ASTC_6x5_Format=37843;k.SRGB8_ALPHA8_ASTC_6x6_Format=37844;k.SRGB8_ALPHA8_ASTC_8x5_Format=37845;k.SRGB8_ALPHA8_ASTC_8x6_Format=37846;k.SRGB8_ALPHA8_ASTC_8x8_Format=37847;k.Scene=qb;k.SceneUtils={createMultiMaterialObject:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},detach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")},attach:function(){console.error("THREE.SceneUtils has been moved to /examples/jsm/utils/SceneUtils.js")}};
k.ShaderChunk=N;k.ShaderLib=gb;k.ShaderMaterial=Ca;k.ShadowMaterial=jc;k.Shape=Ob;k.ShapeBufferGeometry=hc;k.ShapeGeometry=gc;k.ShapePath=xg;k.ShapeUtils=tb;k.ShortType=1011;k.Skeleton=Se;k.SkeletonHelper=qc;k.SkinnedMesh=Re;k.SmoothShading=2;k.Sphere=eb;k.SphereBufferGeometry=fc;k.SphereGeometry=ce;k.Spherical=mi;k.SphericalHarmonics3=pf;k.SphericalReflectionMapping=305;k.Spline=Tg;k.SplineCurve=ab;k.SplineCurve3=ti;k.SpotLight=jf;k.SpotLightHelper=hd;k.SpotLightShadow=hf;k.Sprite=Ld;k.SpriteMaterial=
Lb;k.SrcAlphaFactor=204;k.SrcAlphaSaturateFactor=210;k.SrcColorFactor=202;k.StaticCopyUsage=35046;k.StaticDrawUsage=35044;k.StaticReadUsage=35045;k.StereoCamera=hi;k.StreamCopyUsage=35042;k.StreamDrawUsage=35040;k.StreamReadUsage=35041;k.StringKeyframeTrack=cf;k.SubtractEquation=101;k.SubtractiveBlending=3;k.TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3};k.TangentSpaceNormalMap=0;k.TetrahedronBufferGeometry=Rc;k.TetrahedronGeometry=Sd;k.TextBufferGeometry=Xc;k.TextGeometry=be;k.Texture=Y;k.TextureLoader=
ff;k.TorusBufferGeometry=Vc;k.TorusGeometry=Yd;k.TorusKnotBufferGeometry=Uc;k.TorusKnotGeometry=Xd;k.Triangle=pa;k.TriangleFanDrawMode=2;k.TriangleStripDrawMode=1;k.TrianglesDrawMode=0;k.TubeBufferGeometry=dc;k.TubeGeometry=Wd;k.UVMapping=300;k.Uint16Attribute=function(a,b){console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");return new Yb(a,b)};k.Uint16BufferAttribute=Yb;k.Uint32Attribute=function(a,b){console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
return new Zb(a,b)};k.Uint32BufferAttribute=Zb;k.Uint8Attribute=function(a,b){console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");return new zd(a,b)};k.Uint8BufferAttribute=zd;k.Uint8ClampedAttribute=function(a,b){console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");return new Ad(a,b)};k.Uint8ClampedBufferAttribute=Ad;k.Uncharted2ToneMapping=3;k.Uniform=vf;k.UniformsLib=A;k.UniformsUtils=
Ph;k.UnsignedByteType=1009;k.UnsignedInt248Type=1020;k.UnsignedIntType=1014;k.UnsignedShort4444Type=1017;k.UnsignedShort5551Type=1018;k.UnsignedShort565Type=1019;k.UnsignedShortType=1012;k.VSMShadowMap=3;k.Vector2=t;k.Vector3=p;k.Vector4=fa;k.VectorKeyframeTrack=cd;k.Vertex=function(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new p(a,b,c)};k.VertexColors=2;k.VideoTexture=og;k.WebGLCubeRenderTarget=$b;k.WebGLMultisampleRenderTarget=Yf;k.WebGLRenderTarget=
Ia;k.WebGLRenderTargetCube=function(a,b,c){console.warn("THREE.WebGLRenderTargetCube( width, height, options ) is now WebGLCubeRenderTarget( size, options ).");return new $b(a,c)};k.WebGLRenderer=kg;k.WebGLUtils=Uh;k.WireframeGeometry=Pc;k.WireframeHelper=function(a,b){console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");return new la(new Pc(a.geometry),new ca({color:void 0!==b?b:16777215}))};k.WrapAroundEnding=2402;k.XHRLoader=function(a){console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
return new Ta(a)};k.ZeroCurvatureEnding=2400;k.ZeroFactor=200;k.ZeroSlopeEnding=2401;k.ZeroStencilOp=0;k.sRGBEncoding=3001;Object.defineProperty(k,"__esModule",{value:!0})});
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 * @author ScieCode / http://github.com/sciecode
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

THREE.OrbitControls = function ( object, domElement ) {

	if ( domElement === undefined ) console.warn( 'THREE.OrbitControls: The second parameter "domElement" is now mandatory.' );
	if ( domElement === document ) console.error( 'THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.' );

	this.object = object;
	this.domElement = domElement;

	// Set to false to disable this control
	this.enabled = true;

	// "target" sets the location of focus, where the object orbits around
	this.target = new THREE.Vector3();

	// How far you can dolly in and out ( PerspectiveCamera only )
	this.minDistance = 0;
	this.maxDistance = Infinity;

	// How far you can zoom in and out ( OrthographicCamera only )
	this.minZoom = 0;
	this.maxZoom = Infinity;

	// How far you can orbit vertically, upper and lower limits.
	// Range is 0 to Math.PI radians.
	this.minPolarAngle = 0; // radians
	this.maxPolarAngle = Math.PI; // radians

	// How far you can orbit horizontally, upper and lower limits.
	// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
	this.minAzimuthAngle = - Infinity; // radians
	this.maxAzimuthAngle = Infinity; // radians

	// Set to true to enable damping (inertia)
	// If damping is enabled, you must call controls.update() in your animation loop
	this.enableDamping = false;
	this.dampingFactor = 0.05;

	// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
	// Set to false to disable zooming
	this.enableZoom = true;
	this.zoomSpeed = 1.0;

	// Set to false to disable rotating
	this.enableRotate = true;
	this.rotateSpeed = 1.0;

	// Set to false to disable panning
	this.enablePan = true;
	this.panSpeed = 1.0;
	this.screenSpacePanning = false; // if true, pan in screen-space
	this.keyPanSpeed = 7.0;	// pixels moved per arrow key push

	// Set to true to automatically rotate around the target
	// If auto-rotate is enabled, you must call controls.update() in your animation loop
	this.autoRotate = false;
	this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

	// Set to false to disable use of the keys
	this.enableKeys = true;

	// The four arrow keys
	this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

	// Mouse buttons
	this.mouseButtons = { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };

	// Touch fingers
	this.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

	// for reset
	this.target0 = this.target.clone();
	this.position0 = this.object.position.clone();
	this.zoom0 = this.object.zoom;

	//
	// public methods
	//

	this.getPolarAngle = function () {

		return spherical.phi;

	};

	this.getAzimuthalAngle = function () {

		return spherical.theta;

	};

	this.saveState = function () {

		scope.target0.copy( scope.target );
		scope.position0.copy( scope.object.position );
		scope.zoom0 = scope.object.zoom;

	};

	this.reset = function () {

		scope.target.copy( scope.target0 );
		scope.object.position.copy( scope.position0 );
		scope.object.zoom = scope.zoom0;

		scope.object.updateProjectionMatrix();
		scope.dispatchEvent( changeEvent );

		scope.update();

		state = STATE.NONE;

	};

	// this method is exposed, but perhaps it would be better if we can make it private...
	this.update = function () {

		var offset = new THREE.Vector3();

		// so camera.up is the orbit axis
		var quat = new THREE.Quaternion().setFromUnitVectors( object.up, new THREE.Vector3( 0, 1, 0 ) );
		var quatInverse = quat.clone().inverse();

		var lastPosition = new THREE.Vector3();
		var lastQuaternion = new THREE.Quaternion();

		return function update() {

			var position = scope.object.position;

			offset.copy( position ).sub( scope.target );

			// rotate offset to "y-axis-is-up" space
			offset.applyQuaternion( quat );

			// angle from z-axis around y-axis
			spherical.setFromVector3( offset );

			if ( scope.autoRotate && state === STATE.NONE ) {

				rotateLeft( getAutoRotationAngle() );

			}

			if ( scope.enableDamping ) {

				spherical.theta += sphericalDelta.theta * scope.dampingFactor;
				spherical.phi += sphericalDelta.phi * scope.dampingFactor;

			} else {

				spherical.theta += sphericalDelta.theta;
				spherical.phi += sphericalDelta.phi;

			}

			// restrict theta to be between desired limits
			spherical.theta = Math.max( scope.minAzimuthAngle, Math.min( scope.maxAzimuthAngle, spherical.theta ) );

			// restrict phi to be between desired limits
			spherical.phi = Math.max( scope.minPolarAngle, Math.min( scope.maxPolarAngle, spherical.phi ) );

			spherical.makeSafe();


			spherical.radius *= scale;

			// restrict radius to be between desired limits
			spherical.radius = Math.max( scope.minDistance, Math.min( scope.maxDistance, spherical.radius ) );

			// move target to panned location

			if ( scope.enableDamping === true ) {

				scope.target.addScaledVector( panOffset, scope.dampingFactor );

			} else {

				scope.target.add( panOffset );

			}

			offset.setFromSpherical( spherical );

			// rotate offset back to "camera-up-vector-is-up" space
			offset.applyQuaternion( quatInverse );

			position.copy( scope.target ).add( offset );

			scope.object.lookAt( scope.target );

			if ( scope.enableDamping === true ) {

				sphericalDelta.theta *= ( 1 - scope.dampingFactor );
				sphericalDelta.phi *= ( 1 - scope.dampingFactor );

				panOffset.multiplyScalar( 1 - scope.dampingFactor );

			} else {

				sphericalDelta.set( 0, 0, 0 );

				panOffset.set( 0, 0, 0 );

			}

			scale = 1;

			// update condition is:
			// min(camera displacement, camera rotation in radians)^2 > EPS
			// using small-angle approximation cos(x/2) = 1 - x^2 / 8

			if ( zoomChanged ||
				lastPosition.distanceToSquared( scope.object.position ) > EPS ||
				8 * ( 1 - lastQuaternion.dot( scope.object.quaternion ) ) > EPS ) {

				scope.dispatchEvent( changeEvent );

				lastPosition.copy( scope.object.position );
				lastQuaternion.copy( scope.object.quaternion );
				zoomChanged = false;

				return true;

			}

			return false;

		};

	}();

	this.dispose = function () {

		scope.domElement.removeEventListener( 'contextmenu', onContextMenu, false );
		scope.domElement.removeEventListener( 'mousedown', onMouseDown, false );
		scope.domElement.removeEventListener( 'wheel', onMouseWheel, false );

		scope.domElement.removeEventListener( 'touchstart', onTouchStart, false );
		scope.domElement.removeEventListener( 'touchend', onTouchEnd, false );
		scope.domElement.removeEventListener( 'touchmove', onTouchMove, false );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		scope.domElement.removeEventListener( 'keydown', onKeyDown, false );

		//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?

	};

	//
	// internals
	//

	var scope = this;

	var changeEvent = { type: 'change' };
	var startEvent = { type: 'start' };
	var endEvent = { type: 'end' };

	var STATE = {
		NONE: - 1,
		ROTATE: 0,
		DOLLY: 1,
		PAN: 2,
		TOUCH_ROTATE: 3,
		TOUCH_PAN: 4,
		TOUCH_DOLLY_PAN: 5,
		TOUCH_DOLLY_ROTATE: 6
	};

	var state = STATE.NONE;

	var EPS = 0.000001;

	// current position in spherical coordinates
	var spherical = new THREE.Spherical();
	var sphericalDelta = new THREE.Spherical();

	var scale = 1;
	var panOffset = new THREE.Vector3();
	var zoomChanged = false;

	var rotateStart = new THREE.Vector2();
	var rotateEnd = new THREE.Vector2();
	var rotateDelta = new THREE.Vector2();

	var panStart = new THREE.Vector2();
	var panEnd = new THREE.Vector2();
	var panDelta = new THREE.Vector2();

	var dollyStart = new THREE.Vector2();
	var dollyEnd = new THREE.Vector2();
	var dollyDelta = new THREE.Vector2();

	function getAutoRotationAngle() {

		return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;

	}

	function getZoomScale() {

		return Math.pow( 0.95, scope.zoomSpeed );

	}

	function rotateLeft( angle ) {

		sphericalDelta.theta -= angle;

	}

	function rotateUp( angle ) {

		sphericalDelta.phi -= angle;

	}

	var panLeft = function () {

		var v = new THREE.Vector3();

		return function panLeft( distance, objectMatrix ) {

			v.setFromMatrixColumn( objectMatrix, 0 ); // get X column of objectMatrix
			v.multiplyScalar( - distance );

			panOffset.add( v );

		};

	}();

	var panUp = function () {

		var v = new THREE.Vector3();

		return function panUp( distance, objectMatrix ) {

			if ( scope.screenSpacePanning === true ) {

				v.setFromMatrixColumn( objectMatrix, 1 );

			} else {

				v.setFromMatrixColumn( objectMatrix, 0 );
				v.crossVectors( scope.object.up, v );

			}

			v.multiplyScalar( distance );

			panOffset.add( v );

		};

	}();

	// deltaX and deltaY are in pixels; right and down are positive
	var pan = function () {

		var offset = new THREE.Vector3();

		return function pan( deltaX, deltaY ) {

			var element = scope.domElement;

			if ( scope.object.isPerspectiveCamera ) {

				// perspective
				var position = scope.object.position;
				offset.copy( position ).sub( scope.target );
				var targetDistance = offset.length();

				// half of the fov is center to top of screen
				targetDistance *= Math.tan( ( scope.object.fov / 2 ) * Math.PI / 180.0 );

				// we use only clientHeight here so aspect ratio does not distort speed
				panLeft( 2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix );
				panUp( 2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix );

			} else if ( scope.object.isOrthographicCamera ) {

				// orthographic
				panLeft( deltaX * ( scope.object.right - scope.object.left ) / scope.object.zoom / element.clientWidth, scope.object.matrix );
				panUp( deltaY * ( scope.object.top - scope.object.bottom ) / scope.object.zoom / element.clientHeight, scope.object.matrix );

			} else {

				// camera neither orthographic nor perspective
				console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.' );
				scope.enablePan = false;

			}

		};

	}();

	function dollyOut( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale /= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom * dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	function dollyIn( dollyScale ) {

		if ( scope.object.isPerspectiveCamera ) {

			scale *= dollyScale;

		} else if ( scope.object.isOrthographicCamera ) {

			scope.object.zoom = Math.max( scope.minZoom, Math.min( scope.maxZoom, scope.object.zoom / dollyScale ) );
			scope.object.updateProjectionMatrix();
			zoomChanged = true;

		} else {

			console.warn( 'WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.' );
			scope.enableZoom = false;

		}

	}

	//
	// event callbacks - update the object state
	//

	function handleMouseDownRotate( event ) {

		rotateStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownDolly( event ) {

		dollyStart.set( event.clientX, event.clientY );

	}

	function handleMouseDownPan( event ) {

		panStart.set( event.clientX, event.clientY );

	}

	function handleMouseMoveRotate( event ) {

		rotateEnd.set( event.clientX, event.clientY );

		rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

		var element = scope.domElement;

		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

		rotateStart.copy( rotateEnd );

		scope.update();

	}

	function handleMouseMoveDolly( event ) {

		dollyEnd.set( event.clientX, event.clientY );

		dollyDelta.subVectors( dollyEnd, dollyStart );

		if ( dollyDelta.y > 0 ) {

			dollyOut( getZoomScale() );

		} else if ( dollyDelta.y < 0 ) {

			dollyIn( getZoomScale() );

		}

		dollyStart.copy( dollyEnd );

		scope.update();

	}

	function handleMouseMovePan( event ) {

		panEnd.set( event.clientX, event.clientY );

		panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

		scope.update();

	}

	function handleMouseUp( /*event*/ ) {

		// no-op

	}

	function handleMouseWheel( event ) {

		if ( event.deltaY < 0 ) {

			dollyIn( getZoomScale() );

		} else if ( event.deltaY > 0 ) {

			dollyOut( getZoomScale() );

		}

		scope.update();

	}

	function handleKeyDown( event ) {

		var needsUpdate = false;

		switch ( event.keyCode ) {

			case scope.keys.UP:
				pan( 0, scope.keyPanSpeed );
				needsUpdate = true;
				break;

			case scope.keys.BOTTOM:
				pan( 0, - scope.keyPanSpeed );
				needsUpdate = true;
				break;

			case scope.keys.LEFT:
				pan( scope.keyPanSpeed, 0 );
				needsUpdate = true;
				break;

			case scope.keys.RIGHT:
				pan( - scope.keyPanSpeed, 0 );
				needsUpdate = true;
				break;

		}

		if ( needsUpdate ) {

			// prevent the browser from scrolling on cursor keys
			event.preventDefault();

			scope.update();

		}


	}

	function handleTouchStartRotate( event ) {

		if ( event.touches.length == 1 ) {

			rotateStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			rotateStart.set( x, y );

		}

	}

	function handleTouchStartPan( event ) {

		if ( event.touches.length == 1 ) {

			panStart.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			panStart.set( x, y );

		}

	}

	function handleTouchStartDolly( event ) {

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyStart.set( 0, distance );

	}

	function handleTouchStartDollyPan( event ) {

		if ( scope.enableZoom ) handleTouchStartDolly( event );

		if ( scope.enablePan ) handleTouchStartPan( event );

	}

	function handleTouchStartDollyRotate( event ) {

		if ( scope.enableZoom ) handleTouchStartDolly( event );

		if ( scope.enableRotate ) handleTouchStartRotate( event );

	}

	function handleTouchMoveRotate( event ) {

		if ( event.touches.length == 1 ) {

			rotateEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			rotateEnd.set( x, y );

		}

		rotateDelta.subVectors( rotateEnd, rotateStart ).multiplyScalar( scope.rotateSpeed );

		var element = scope.domElement;

		rotateLeft( 2 * Math.PI * rotateDelta.x / element.clientHeight ); // yes, height

		rotateUp( 2 * Math.PI * rotateDelta.y / element.clientHeight );

		rotateStart.copy( rotateEnd );

	}

	function handleTouchMovePan( event ) {

		if ( event.touches.length == 1 ) {

			panEnd.set( event.touches[ 0 ].pageX, event.touches[ 0 ].pageY );

		} else {

			var x = 0.5 * ( event.touches[ 0 ].pageX + event.touches[ 1 ].pageX );
			var y = 0.5 * ( event.touches[ 0 ].pageY + event.touches[ 1 ].pageY );

			panEnd.set( x, y );

		}

		panDelta.subVectors( panEnd, panStart ).multiplyScalar( scope.panSpeed );

		pan( panDelta.x, panDelta.y );

		panStart.copy( panEnd );

	}

	function handleTouchMoveDolly( event ) {

		var dx = event.touches[ 0 ].pageX - event.touches[ 1 ].pageX;
		var dy = event.touches[ 0 ].pageY - event.touches[ 1 ].pageY;

		var distance = Math.sqrt( dx * dx + dy * dy );

		dollyEnd.set( 0, distance );

		dollyDelta.set( 0, Math.pow( dollyEnd.y / dollyStart.y, scope.zoomSpeed ) );

		dollyOut( dollyDelta.y );

		dollyStart.copy( dollyEnd );

	}

	function handleTouchMoveDollyPan( event ) {

		if ( scope.enableZoom ) handleTouchMoveDolly( event );

		if ( scope.enablePan ) handleTouchMovePan( event );

	}

	function handleTouchMoveDollyRotate( event ) {

		if ( scope.enableZoom ) handleTouchMoveDolly( event );

		if ( scope.enableRotate ) handleTouchMoveRotate( event );

	}

	function handleTouchEnd( /*event*/ ) {

		// no-op

	}

	//
	// event handlers - FSM: listen for events and reset state
	//

	function onMouseDown( event ) {

		if ( scope.enabled === false ) return;

		// Prevent the browser from scrolling.
		event.preventDefault();

		// Manually set the focus since calling preventDefault above
		// prevents the browser from setting it automatically.

		scope.domElement.focus ? scope.domElement.focus() : window.focus();

		var mouseAction;

		switch ( event.button ) {

			case 0:

				mouseAction = scope.mouseButtons.LEFT;
				break;

			case 1:

				mouseAction = scope.mouseButtons.MIDDLE;
				break;

			case 2:

				mouseAction = scope.mouseButtons.RIGHT;
				break;

			default:

				mouseAction = - 1;

		}

		switch ( mouseAction ) {

			case THREE.MOUSE.DOLLY:

				if ( scope.enableZoom === false ) return;

				handleMouseDownDolly( event );

				state = STATE.DOLLY;

				break;

			case THREE.MOUSE.ROTATE:

				if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

					if ( scope.enablePan === false ) return;

					handleMouseDownPan( event );

					state = STATE.PAN;

				} else {

					if ( scope.enableRotate === false ) return;

					handleMouseDownRotate( event );

					state = STATE.ROTATE;

				}

				break;

			case THREE.MOUSE.PAN:

				if ( event.ctrlKey || event.metaKey || event.shiftKey ) {

					if ( scope.enableRotate === false ) return;

					handleMouseDownRotate( event );

					state = STATE.ROTATE;

				} else {

					if ( scope.enablePan === false ) return;

					handleMouseDownPan( event );

					state = STATE.PAN;

				}

				break;

			default:

				state = STATE.NONE;

		}

		if ( state !== STATE.NONE ) {

			document.addEventListener( 'mousemove', onMouseMove, false );
			document.addEventListener( 'mouseup', onMouseUp, false );

			scope.dispatchEvent( startEvent );

		}

	}

	function onMouseMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

		switch ( state ) {

			case STATE.ROTATE:

				if ( scope.enableRotate === false ) return;

				handleMouseMoveRotate( event );

				break;

			case STATE.DOLLY:

				if ( scope.enableZoom === false ) return;

				handleMouseMoveDolly( event );

				break;

			case STATE.PAN:

				if ( scope.enablePan === false ) return;

				handleMouseMovePan( event );

				break;

		}

	}

	function onMouseUp( event ) {

		if ( scope.enabled === false ) return;

		handleMouseUp( event );

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onMouseWheel( event ) {

		if ( scope.enabled === false || scope.enableZoom === false || ( state !== STATE.NONE && state !== STATE.ROTATE ) ) return;

		event.preventDefault();
		event.stopPropagation();

		scope.dispatchEvent( startEvent );

		handleMouseWheel( event );

		scope.dispatchEvent( endEvent );

	}

	function onKeyDown( event ) {

		if ( scope.enabled === false || scope.enableKeys === false || scope.enablePan === false ) return;

		handleKeyDown( event );

	}

	function onTouchStart( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault(); // prevent scrolling

		switch ( event.touches.length ) {

			case 1:

				switch ( scope.touches.ONE ) {

					case THREE.TOUCH.ROTATE:

						if ( scope.enableRotate === false ) return;

						handleTouchStartRotate( event );

						state = STATE.TOUCH_ROTATE;

						break;

					case THREE.TOUCH.PAN:

						if ( scope.enablePan === false ) return;

						handleTouchStartPan( event );

						state = STATE.TOUCH_PAN;

						break;

					default:

						state = STATE.NONE;

				}

				break;

			case 2:

				switch ( scope.touches.TWO ) {

					case THREE.TOUCH.DOLLY_PAN:

						if ( scope.enableZoom === false && scope.enablePan === false ) return;

						handleTouchStartDollyPan( event );

						state = STATE.TOUCH_DOLLY_PAN;

						break;

					case THREE.TOUCH.DOLLY_ROTATE:

						if ( scope.enableZoom === false && scope.enableRotate === false ) return;

						handleTouchStartDollyRotate( event );

						state = STATE.TOUCH_DOLLY_ROTATE;

						break;

					default:

						state = STATE.NONE;

				}

				break;

			default:

				state = STATE.NONE;

		}

		if ( state !== STATE.NONE ) {

			scope.dispatchEvent( startEvent );

		}

	}

	function onTouchMove( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault(); // prevent scrolling
		event.stopPropagation();

		switch ( state ) {

			case STATE.TOUCH_ROTATE:

				if ( scope.enableRotate === false ) return;

				handleTouchMoveRotate( event );

				scope.update();

				break;

			case STATE.TOUCH_PAN:

				if ( scope.enablePan === false ) return;

				handleTouchMovePan( event );

				scope.update();

				break;

			case STATE.TOUCH_DOLLY_PAN:

				if ( scope.enableZoom === false && scope.enablePan === false ) return;

				handleTouchMoveDollyPan( event );

				scope.update();

				break;

			case STATE.TOUCH_DOLLY_ROTATE:

				if ( scope.enableZoom === false && scope.enableRotate === false ) return;

				handleTouchMoveDollyRotate( event );

				scope.update();

				break;

			default:

				state = STATE.NONE;

		}

	}

	function onTouchEnd( event ) {

		if ( scope.enabled === false ) return;

		handleTouchEnd( event );

		scope.dispatchEvent( endEvent );

		state = STATE.NONE;

	}

	function onContextMenu( event ) {

		if ( scope.enabled === false ) return;

		event.preventDefault();

	}

	//

	scope.domElement.addEventListener( 'contextmenu', onContextMenu, false );

	scope.domElement.addEventListener( 'mousedown', onMouseDown, false );
	scope.domElement.addEventListener( 'wheel', onMouseWheel, false );

	scope.domElement.addEventListener( 'touchstart', onTouchStart, false );
	scope.domElement.addEventListener( 'touchend', onTouchEnd, false );
	scope.domElement.addEventListener( 'touchmove', onTouchMove, false );

	scope.domElement.addEventListener( 'keydown', onKeyDown, false );

	// make sure element can receive keys.

	if ( scope.domElement.tabIndex === - 1 ) {

		scope.domElement.tabIndex = 0;

	}

	// force an update at start

	this.update();

};

THREE.OrbitControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.OrbitControls.prototype.constructor = THREE.OrbitControls;


// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move

THREE.MapControls = function ( object, domElement ) {

	THREE.OrbitControls.call( this, object, domElement );

	this.mouseButtons.LEFT = THREE.MOUSE.PAN;
	this.mouseButtons.RIGHT = THREE.MOUSE.ROTATE;

	this.touches.ONE = THREE.TOUCH.PAN;
	this.touches.TWO = THREE.TOUCH.DOLLY_ROTATE;

};

THREE.MapControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.MapControls.prototype.constructor = THREE.MapControls;
/**
 * @author zz85 / https://github.com/zz85
 * @author mrdoob / http://mrdoob.com
 * Running this will allow you to drag three.js objects around the screen.
 *
 * Edited by nickibyte / https://github.com/nickibyte
 * Added _recursive parameter to enable/disable checks with descendants
 */

THREE.DragControls = function ( _objects, _recursive, _camera, _domElement ) {

	var _plane = new THREE.Plane();
	var _raycaster = new THREE.Raycaster();

	var _mouse = new THREE.Vector2();
	var _offset = new THREE.Vector3();
	var _intersection = new THREE.Vector3();
	var _worldPosition = new THREE.Vector3();
	var _inverseMatrix = new THREE.Matrix4();
	var _intersections = [];

	var _selected = null, _hovered = null;

	//

	var scope = this;

	function activate() {

		_domElement.addEventListener( 'mousemove', onDocumentMouseMove, false );
		_domElement.addEventListener( 'mousedown', onDocumentMouseDown, false );
		_domElement.addEventListener( 'mouseup', onDocumentMouseCancel, false );
		_domElement.addEventListener( 'mouseleave', onDocumentMouseCancel, false );
		_domElement.addEventListener( 'touchmove', onDocumentTouchMove, false );
		_domElement.addEventListener( 'touchstart', onDocumentTouchStart, false );
		_domElement.addEventListener( 'touchend', onDocumentTouchEnd, false );

	}

	function deactivate() {

		_domElement.removeEventListener( 'mousemove', onDocumentMouseMove, false );
		_domElement.removeEventListener( 'mousedown', onDocumentMouseDown, false );
		_domElement.removeEventListener( 'mouseup', onDocumentMouseCancel, false );
		_domElement.removeEventListener( 'mouseleave', onDocumentMouseCancel, false );
		_domElement.removeEventListener( 'touchmove', onDocumentTouchMove, false );
		_domElement.removeEventListener( 'touchstart', onDocumentTouchStart, false );
		_domElement.removeEventListener( 'touchend', onDocumentTouchEnd, false );

	}

	function dispose() {

		deactivate();

	}

	function getObjects() {

		return _objects;

	}

	function onDocumentMouseMove( event ) {

		event.preventDefault();

		var rect = _domElement.getBoundingClientRect();

		_mouse.x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1;
		_mouse.y = - ( ( event.clientY - rect.top ) / rect.height ) * 2 + 1;

		_raycaster.setFromCamera( _mouse, _camera );

		if ( _selected && scope.enabled ) {

			if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

				_selected.position.copy( _intersection.sub( _offset ).applyMatrix4( _inverseMatrix ) );

			}

			scope.dispatchEvent( { type: 'drag', object: _selected } );

			return;

		}

		_intersections.length = 0;

		_raycaster.setFromCamera( _mouse, _camera );
		_raycaster.intersectObjects( _objects, _recursive, _intersections );

		if ( _intersections.length > 0 ) {

			var object = _intersections[ 0 ].object;

			_plane.setFromNormalAndCoplanarPoint( _camera.getWorldDirection( _plane.normal ), _worldPosition.setFromMatrixPosition( object.matrixWorld ) );

			if ( _hovered !== object ) {

				scope.dispatchEvent( { type: 'hoveron', object: object } );

				_domElement.style.cursor = 'pointer';
				_hovered = object;

			}

		} else {

			if ( _hovered !== null ) {

				scope.dispatchEvent( { type: 'hoveroff', object: _hovered } );

				_domElement.style.cursor = 'auto';
				_hovered = null;

			}

		}

	}

	function onDocumentMouseDown( event ) {

		event.preventDefault();

		_intersections.length = 0;

		_raycaster.setFromCamera( _mouse, _camera );
		_raycaster.intersectObjects( _objects, _recursive, _intersections );

		if ( _intersections.length > 0 ) {

			_selected = ( scope.transformGroup === true ) ? _objects[ 0 ] : _intersections[ 0 ].object;

			if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

				_inverseMatrix.getInverse( _selected.parent.matrixWorld );
				_offset.copy( _intersection ).sub( _worldPosition.setFromMatrixPosition( _selected.matrixWorld ) );

			}

			_domElement.style.cursor = 'move';

			scope.dispatchEvent( { type: 'dragstart', object: _selected } );

		}


	}

	function onDocumentMouseCancel( event ) {

		event.preventDefault();

		if ( _selected ) {

			scope.dispatchEvent( { type: 'dragend', object: _selected } );

			_selected = null;

		}

		_domElement.style.cursor = _hovered ? 'pointer' : 'auto';

	}

	function onDocumentTouchMove( event ) {

		event.preventDefault();
		event = event.changedTouches[ 0 ];

		var rect = _domElement.getBoundingClientRect();

		_mouse.x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1;
		_mouse.y = - ( ( event.clientY - rect.top ) / rect.height ) * 2 + 1;

		_raycaster.setFromCamera( _mouse, _camera );

		if ( _selected && scope.enabled ) {

			if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

				_selected.position.copy( _intersection.sub( _offset ).applyMatrix4( _inverseMatrix ) );

			}

			scope.dispatchEvent( { type: 'drag', object: _selected } );

			return;

		}

	}

	function onDocumentTouchStart( event ) {

		event.preventDefault();
		event = event.changedTouches[ 0 ];

		var rect = _domElement.getBoundingClientRect();

		_mouse.x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1;
		_mouse.y = - ( ( event.clientY - rect.top ) / rect.height ) * 2 + 1;

		_intersections.length = 0;

		_raycaster.setFromCamera( _mouse, _camera );
		 _raycaster.intersectObjects( _objects, _recursive, _intersections );

		if ( _intersections.length > 0 ) {

			_selected = ( scope.transformGroup === true ) ? _objects[ 0 ] : _intersections[ 0 ].object;

			_plane.setFromNormalAndCoplanarPoint( _camera.getWorldDirection( _plane.normal ), _worldPosition.setFromMatrixPosition( _selected.matrixWorld ) );

			if ( _raycaster.ray.intersectPlane( _plane, _intersection ) ) {

				_inverseMatrix.getInverse( _selected.parent.matrixWorld );
				_offset.copy( _intersection ).sub( _worldPosition.setFromMatrixPosition( _selected.matrixWorld ) );

			}

			_domElement.style.cursor = 'move';

			scope.dispatchEvent( { type: 'dragstart', object: _selected } );

		}


	}

	function onDocumentTouchEnd( event ) {

		event.preventDefault();

		if ( _selected ) {

			scope.dispatchEvent( { type: 'dragend', object: _selected } );

			_selected = null;

		}

		_domElement.style.cursor = 'auto';

	}

	activate();

	// API

	this.enabled = true;
	this.transformGroup = false;

	this.activate = activate;
	this.deactivate = deactivate;
	this.dispose = dispose;
	this.getObjects = getObjects;

};

THREE.DragControls.prototype = Object.create( THREE.EventDispatcher.prototype );
THREE.DragControls.prototype.constructor = THREE.DragControls;
/**
 * @author Rich Tibbett / https://github.com/richtr
 * @author mrdoob / http://mrdoob.com/
 * @author Tony Parisi / http://www.tonyparisi.com/
 * @author Takahiro / https://github.com/takahirox
 * @author Don McCurdy / https://www.donmccurdy.com
 */

THREE.GLTFLoader = ( function () {

	function GLTFLoader( manager ) {

		THREE.Loader.call( this, manager );

		this.dracoLoader = null;
		this.ddsLoader = null;

	}

	GLTFLoader.prototype = Object.assign( Object.create( THREE.Loader.prototype ), {

		constructor: GLTFLoader,

		load: function ( url, onLoad, onProgress, onError ) {

			var scope = this;

			var resourcePath;

			if ( this.resourcePath !== '' ) {

				resourcePath = this.resourcePath;

			} else if ( this.path !== '' ) {

				resourcePath = this.path;

			} else {

				resourcePath = THREE.LoaderUtils.extractUrlBase( url );

			}

			// Tells the LoadingManager to track an extra item, which resolves after
			// the model is fully loaded. This means the count of items loaded will
			// be incorrect, but ensures manager.onLoad() does not fire early.
			scope.manager.itemStart( url );

			var _onError = function ( e ) {

				if ( onError ) {

					onError( e );

				} else {

					console.error( e );

				}

				scope.manager.itemError( url );
				scope.manager.itemEnd( url );

			};

			var loader = new THREE.FileLoader( scope.manager );

			loader.setPath( this.path );
			loader.setResponseType( 'arraybuffer' );
			loader.setRequestHeader( this.requestHeader );

			if ( scope.crossOrigin === 'use-credentials' ) {

				loader.setWithCredentials( true );

			}

			loader.load( url, function ( data ) {

				try {

					scope.parse( data, resourcePath, function ( gltf ) {

						onLoad( gltf );

						scope.manager.itemEnd( url );

					}, _onError );

				} catch ( e ) {

					_onError( e );

				}

			}, onProgress, _onError );

		},

		setDRACOLoader: function ( dracoLoader ) {

			this.dracoLoader = dracoLoader;
			return this;

		},

		setDDSLoader: function ( ddsLoader ) {

			this.ddsLoader = ddsLoader;
			return this;

		},

		parse: function ( data, path, onLoad, onError ) {

			var content;
			var extensions = {};

			if ( typeof data === 'string' ) {

				content = data;

			} else {

				var magic = THREE.LoaderUtils.decodeText( new Uint8Array( data, 0, 4 ) );

				if ( magic === BINARY_EXTENSION_HEADER_MAGIC ) {

					try {

						extensions[ EXTENSIONS.KHR_BINARY_GLTF ] = new GLTFBinaryExtension( data );

					} catch ( error ) {

						if ( onError ) onError( error );
						return;

					}

					content = extensions[ EXTENSIONS.KHR_BINARY_GLTF ].content;

				} else {

					content = THREE.LoaderUtils.decodeText( new Uint8Array( data ) );

				}

			}

			var json = JSON.parse( content );

			if ( json.asset === undefined || json.asset.version[ 0 ] < 2 ) {

				if ( onError ) onError( new Error( 'THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.' ) );
				return;

			}

			if ( json.extensionsUsed ) {

				for ( var i = 0; i < json.extensionsUsed.length; ++ i ) {

					var extensionName = json.extensionsUsed[ i ];
					var extensionsRequired = json.extensionsRequired || [];

					switch ( extensionName ) {

						case EXTENSIONS.KHR_LIGHTS_PUNCTUAL:
							extensions[ extensionName ] = new GLTFLightsExtension( json );
							break;

						case EXTENSIONS.KHR_MATERIALS_CLEARCOAT:
							extensions[ extensionName ] = new GLTFMaterialsClearcoatExtension();
							break;

						case EXTENSIONS.KHR_MATERIALS_UNLIT:
							extensions[ extensionName ] = new GLTFMaterialsUnlitExtension();
							break;

						case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
							extensions[ extensionName ] = new GLTFMaterialsPbrSpecularGlossinessExtension();
							break;

						case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
							extensions[ extensionName ] = new GLTFDracoMeshCompressionExtension( json, this.dracoLoader );
							break;

						case EXTENSIONS.MSFT_TEXTURE_DDS:
							extensions[ extensionName ] = new GLTFTextureDDSExtension( this.ddsLoader );
							break;

						case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
							extensions[ extensionName ] = new GLTFTextureTransformExtension();
							break;

						case EXTENSIONS.KHR_MESH_QUANTIZATION:
							extensions[ extensionName ] = new GLTFMeshQuantizationExtension();
							break;

						default:

							if ( extensionsRequired.indexOf( extensionName ) >= 0 ) {

								console.warn( 'THREE.GLTFLoader: Unknown extension "' + extensionName + '".' );

							}

					}

				}

			}

			var parser = new GLTFParser( json, extensions, {

				path: path || this.resourcePath || '',
				crossOrigin: this.crossOrigin,
				manager: this.manager

			} );

			parser.fileLoader.setRequestHeader( this.requestHeader );
			parser.parse( onLoad, onError );

		}

	} );

	/* GLTFREGISTRY */

	function GLTFRegistry() {

		var objects = {};

		return	{

			get: function ( key ) {

				return objects[ key ];

			},

			add: function ( key, object ) {

				objects[ key ] = object;

			},

			remove: function ( key ) {

				delete objects[ key ];

			},

			removeAll: function () {

				objects = {};

			}

		};

	}

	/*********************************/
	/********** EXTENSIONS ***********/
	/*********************************/

	var EXTENSIONS = {
		KHR_BINARY_GLTF: 'KHR_binary_glTF',
		KHR_DRACO_MESH_COMPRESSION: 'KHR_draco_mesh_compression',
		KHR_LIGHTS_PUNCTUAL: 'KHR_lights_punctual',
		KHR_MATERIALS_CLEARCOAT: 'KHR_materials_clearcoat',
		KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: 'KHR_materials_pbrSpecularGlossiness',
		KHR_MATERIALS_UNLIT: 'KHR_materials_unlit',
		KHR_TEXTURE_TRANSFORM: 'KHR_texture_transform',
		KHR_MESH_QUANTIZATION: 'KHR_mesh_quantization',
		MSFT_TEXTURE_DDS: 'MSFT_texture_dds'
	};

	/**
	 * DDS Texture Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/MSFT_texture_dds
	 *
	 */
	function GLTFTextureDDSExtension( ddsLoader ) {

		if ( ! ddsLoader ) {

			throw new Error( 'THREE.GLTFLoader: Attempting to load .dds texture without importing THREE.DDSLoader' );

		}

		this.name = EXTENSIONS.MSFT_TEXTURE_DDS;
		this.ddsLoader = ddsLoader;

	}

	/**
	 * Punctual Lights Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
	 */
	function GLTFLightsExtension( json ) {

		this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;

		var extension = ( json.extensions && json.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ] ) || {};
		this.lightDefs = extension.lights || [];

	}

	GLTFLightsExtension.prototype.loadLight = function ( lightIndex ) {

		var lightDef = this.lightDefs[ lightIndex ];
		var lightNode;

		var color = new THREE.Color( 0xffffff );
		if ( lightDef.color !== undefined ) color.fromArray( lightDef.color );

		var range = lightDef.range !== undefined ? lightDef.range : 0;

		switch ( lightDef.type ) {

			case 'directional':
				lightNode = new THREE.DirectionalLight( color );
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			case 'point':
				lightNode = new THREE.PointLight( color );
				lightNode.distance = range;
				break;

			case 'spot':
				lightNode = new THREE.SpotLight( color );
				lightNode.distance = range;
				// Handle spotlight properties.
				lightDef.spot = lightDef.spot || {};
				lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
				lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
				lightNode.angle = lightDef.spot.outerConeAngle;
				lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
				lightNode.target.position.set( 0, 0, - 1 );
				lightNode.add( lightNode.target );
				break;

			default:
				throw new Error( 'THREE.GLTFLoader: Unexpected light type, "' + lightDef.type + '".' );

		}

		// Some lights (e.g. spot) default to a position other than the origin. Reset the position
		// here, because node-level parsing will only override position if explicitly specified.
		lightNode.position.set( 0, 0, 0 );

		lightNode.decay = 2;

		if ( lightDef.intensity !== undefined ) lightNode.intensity = lightDef.intensity;

		lightNode.name = lightDef.name || ( 'light_' + lightIndex );

		return Promise.resolve( lightNode );

	};

	/**
	 * Unlit Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
	 */
	function GLTFMaterialsUnlitExtension() {

		this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;

	}

	GLTFMaterialsUnlitExtension.prototype.getMaterialType = function () {

		return THREE.MeshBasicMaterial;

	};

	GLTFMaterialsUnlitExtension.prototype.extendParams = function ( materialParams, materialDef, parser ) {

		var pending = [];

		materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
		materialParams.opacity = 1.0;

		var metallicRoughness = materialDef.pbrMetallicRoughness;

		if ( metallicRoughness ) {

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				var array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

		}

		return Promise.all( pending );

	};

	/**
	 * Clearcoat Materials Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
	 */
	function GLTFMaterialsClearcoatExtension() {

		this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;

	}

	GLTFMaterialsClearcoatExtension.prototype.getMaterialType = function () {

		return THREE.MeshPhysicalMaterial;

	};

	GLTFMaterialsClearcoatExtension.prototype.extendParams = function ( materialParams, materialDef, parser ) {

		var pending = [];

		var extension = materialDef.extensions[ this.name ];

		if ( extension.clearcoatFactor !== undefined ) {

			materialParams.clearcoat = extension.clearcoatFactor;

		}

		if ( extension.clearcoatTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatMap', extension.clearcoatTexture ) );

		}

		if ( extension.clearcoatRoughnessFactor !== undefined ) {

			materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;

		}

		if ( extension.clearcoatRoughnessTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatRoughnessMap', extension.clearcoatRoughnessTexture ) );

		}

		if ( extension.clearcoatNormalTexture !== undefined ) {

			pending.push( parser.assignTexture( materialParams, 'clearcoatNormalMap', extension.clearcoatNormalTexture ) );

			if ( extension.clearcoatNormalTexture.scale !== undefined ) {

				var scale = extension.clearcoatNormalTexture.scale;

				materialParams.clearcoatNormalScale = new THREE.Vector2( scale, scale );

			}

		}

		return Promise.all( pending );

	};

	/* BINARY EXTENSION */
	var BINARY_EXTENSION_HEADER_MAGIC = 'glTF';
	var BINARY_EXTENSION_HEADER_LENGTH = 12;
	var BINARY_EXTENSION_CHUNK_TYPES = { JSON: 0x4E4F534A, BIN: 0x004E4942 };

	function GLTFBinaryExtension( data ) {

		this.name = EXTENSIONS.KHR_BINARY_GLTF;
		this.content = null;
		this.body = null;

		var headerView = new DataView( data, 0, BINARY_EXTENSION_HEADER_LENGTH );

		this.header = {
			magic: THREE.LoaderUtils.decodeText( new Uint8Array( data.slice( 0, 4 ) ) ),
			version: headerView.getUint32( 4, true ),
			length: headerView.getUint32( 8, true )
		};

		if ( this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC ) {

			throw new Error( 'THREE.GLTFLoader: Unsupported glTF-Binary header.' );

		} else if ( this.header.version < 2.0 ) {

			throw new Error( 'THREE.GLTFLoader: Legacy binary file detected.' );

		}

		var chunkView = new DataView( data, BINARY_EXTENSION_HEADER_LENGTH );
		var chunkIndex = 0;

		while ( chunkIndex < chunkView.byteLength ) {

			var chunkLength = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			var chunkType = chunkView.getUint32( chunkIndex, true );
			chunkIndex += 4;

			if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON ) {

				var contentArray = new Uint8Array( data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength );
				this.content = THREE.LoaderUtils.decodeText( contentArray );

			} else if ( chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN ) {

				var byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
				this.body = data.slice( byteOffset, byteOffset + chunkLength );

			}

			// Clients must ignore chunks with unknown types.

			chunkIndex += chunkLength;

		}

		if ( this.content === null ) {

			throw new Error( 'THREE.GLTFLoader: JSON content not found.' );

		}

	}

	/**
	 * DRACO Mesh Compression Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
	 */
	function GLTFDracoMeshCompressionExtension( json, dracoLoader ) {

		if ( ! dracoLoader ) {

			throw new Error( 'THREE.GLTFLoader: No DRACOLoader instance provided.' );

		}

		this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
		this.json = json;
		this.dracoLoader = dracoLoader;
		this.dracoLoader.preload();

	}

	GLTFDracoMeshCompressionExtension.prototype.decodePrimitive = function ( primitive, parser ) {

		var json = this.json;
		var dracoLoader = this.dracoLoader;
		var bufferViewIndex = primitive.extensions[ this.name ].bufferView;
		var gltfAttributeMap = primitive.extensions[ this.name ].attributes;
		var threeAttributeMap = {};
		var attributeNormalizedMap = {};
		var attributeTypeMap = {};

		for ( var attributeName in gltfAttributeMap ) {

			var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			threeAttributeMap[ threeAttributeName ] = gltfAttributeMap[ attributeName ];

		}

		for ( attributeName in primitive.attributes ) {

			var threeAttributeName = ATTRIBUTES[ attributeName ] || attributeName.toLowerCase();

			if ( gltfAttributeMap[ attributeName ] !== undefined ) {

				var accessorDef = json.accessors[ primitive.attributes[ attributeName ] ];
				var componentType = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

				attributeTypeMap[ threeAttributeName ] = componentType;
				attributeNormalizedMap[ threeAttributeName ] = accessorDef.normalized === true;

			}

		}

		return parser.getDependency( 'bufferView', bufferViewIndex ).then( function ( bufferView ) {

			return new Promise( function ( resolve ) {

				dracoLoader.decodeDracoFile( bufferView, function ( geometry ) {

					for ( var attributeName in geometry.attributes ) {

						var attribute = geometry.attributes[ attributeName ];
						var normalized = attributeNormalizedMap[ attributeName ];

						if ( normalized !== undefined ) attribute.normalized = normalized;

					}

					resolve( geometry );

				}, threeAttributeMap, attributeTypeMap );

			} );

		} );

	};

	/**
	 * Texture Transform Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
	 */
	function GLTFTextureTransformExtension() {

		this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;

	}

	GLTFTextureTransformExtension.prototype.extendTexture = function ( texture, transform ) {

		texture = texture.clone();

		if ( transform.offset !== undefined ) {

			texture.offset.fromArray( transform.offset );

		}

		if ( transform.rotation !== undefined ) {

			texture.rotation = transform.rotation;

		}

		if ( transform.scale !== undefined ) {

			texture.repeat.fromArray( transform.scale );

		}

		if ( transform.texCoord !== undefined ) {

			console.warn( 'THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.' );

		}

		texture.needsUpdate = true;

		return texture;

	};

	/**
	 * Specular-Glossiness Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_pbrSpecularGlossiness
	 */

	/**
	 * A sub class of THREE.StandardMaterial with some of the functionality
	 * changed via the `onBeforeCompile` callback
	 * @pailhead
	 */

	function GLTFMeshStandardSGMaterial( params ) {

		THREE.MeshStandardMaterial.call( this );

		this.isGLTFSpecularGlossinessMaterial = true;

		//various chunks that need replacing
		var specularMapParsFragmentChunk = [
			'#ifdef USE_SPECULARMAP',
			'	uniform sampler2D specularMap;',
			'#endif'
		].join( '\n' );

		var glossinessMapParsFragmentChunk = [
			'#ifdef USE_GLOSSINESSMAP',
			'	uniform sampler2D glossinessMap;',
			'#endif'
		].join( '\n' );

		var specularMapFragmentChunk = [
			'vec3 specularFactor = specular;',
			'#ifdef USE_SPECULARMAP',
			'	vec4 texelSpecular = texture2D( specularMap, vUv );',
			'	texelSpecular = sRGBToLinear( texelSpecular );',
			'	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
			'	specularFactor *= texelSpecular.rgb;',
			'#endif'
		].join( '\n' );

		var glossinessMapFragmentChunk = [
			'float glossinessFactor = glossiness;',
			'#ifdef USE_GLOSSINESSMAP',
			'	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
			'	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
			'	glossinessFactor *= texelGlossiness.a;',
			'#endif'
		].join( '\n' );

		var lightPhysicalFragmentChunk = [
			'PhysicalMaterial material;',
			'material.diffuseColor = diffuseColor.rgb;',
			'vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );',
			'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
			'material.specularRoughness = max( 1.0 - glossinessFactor, 0.0525 );// 0.0525 corresponds to the base mip of a 256 cubemap.',
			'material.specularRoughness += geometryRoughness;',
			'material.specularRoughness = min( material.specularRoughness, 1.0 );',
			'material.specularColor = specularFactor.rgb;',
		].join( '\n' );

		var uniforms = {
			specular: { value: new THREE.Color().setHex( 0xffffff ) },
			glossiness: { value: 1 },
			specularMap: { value: null },
			glossinessMap: { value: null }
		};

		this._extraUniforms = uniforms;

		// please see #14031 or #13198 for an alternate approach
		this.onBeforeCompile = function ( shader ) {

			for ( var uniformName in uniforms ) {

				shader.uniforms[ uniformName ] = uniforms[ uniformName ];

			}

			shader.fragmentShader = shader.fragmentShader.replace( 'uniform float roughness;', 'uniform vec3 specular;' );
			shader.fragmentShader = shader.fragmentShader.replace( 'uniform float metalness;', 'uniform float glossiness;' );
			shader.fragmentShader = shader.fragmentShader.replace( '#include <roughnessmap_pars_fragment>', specularMapParsFragmentChunk );
			shader.fragmentShader = shader.fragmentShader.replace( '#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk );
			shader.fragmentShader = shader.fragmentShader.replace( '#include <roughnessmap_fragment>', specularMapFragmentChunk );
			shader.fragmentShader = shader.fragmentShader.replace( '#include <metalnessmap_fragment>', glossinessMapFragmentChunk );
			shader.fragmentShader = shader.fragmentShader.replace( '#include <lights_physical_fragment>', lightPhysicalFragmentChunk );

		};

		/*eslint-disable*/
		Object.defineProperties(
			this,
			{
				specular: {
					get: function () { return uniforms.specular.value; },
					set: function ( v ) { uniforms.specular.value = v; }
				},
				specularMap: {
					get: function () { return uniforms.specularMap.value; },
					set: function ( v ) { uniforms.specularMap.value = v; }
				},
				glossiness: {
					get: function () { return uniforms.glossiness.value; },
					set: function ( v ) { uniforms.glossiness.value = v; }
				},
				glossinessMap: {
					get: function () { return uniforms.glossinessMap.value; },
					set: function ( v ) {

						uniforms.glossinessMap.value = v;
						//how about something like this - @pailhead
						if ( v ) {

							this.defines.USE_GLOSSINESSMAP = '';
							// set USE_ROUGHNESSMAP to enable vUv
							this.defines.USE_ROUGHNESSMAP = '';

						} else {

							delete this.defines.USE_ROUGHNESSMAP;
							delete this.defines.USE_GLOSSINESSMAP;

						}

					}
				}
			}
		);

		/*eslint-enable*/
		delete this.metalness;
		delete this.roughness;
		delete this.metalnessMap;
		delete this.roughnessMap;

		this.setValues( params );

	}

	GLTFMeshStandardSGMaterial.prototype = Object.create( THREE.MeshStandardMaterial.prototype );
	GLTFMeshStandardSGMaterial.prototype.constructor = GLTFMeshStandardSGMaterial;

	GLTFMeshStandardSGMaterial.prototype.copy = function ( source ) {

		THREE.MeshStandardMaterial.prototype.copy.call( this, source );
		this.specularMap = source.specularMap;
		this.specular.copy( source.specular );
		this.glossinessMap = source.glossinessMap;
		this.glossiness = source.glossiness;
		delete this.metalness;
		delete this.roughness;
		delete this.metalnessMap;
		delete this.roughnessMap;
		return this;

	};

	function GLTFMaterialsPbrSpecularGlossinessExtension() {

		return {

			name: EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,

			specularGlossinessParams: [
				'color',
				'map',
				'lightMap',
				'lightMapIntensity',
				'aoMap',
				'aoMapIntensity',
				'emissive',
				'emissiveIntensity',
				'emissiveMap',
				'bumpMap',
				'bumpScale',
				'normalMap',
				'normalMapType',
				'displacementMap',
				'displacementScale',
				'displacementBias',
				'specularMap',
				'specular',
				'glossinessMap',
				'glossiness',
				'alphaMap',
				'envMap',
				'envMapIntensity',
				'refractionRatio',
			],

			getMaterialType: function () {

				return GLTFMeshStandardSGMaterial;

			},

			extendParams: function ( materialParams, materialDef, parser ) {

				var pbrSpecularGlossiness = materialDef.extensions[ this.name ];

				materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
				materialParams.opacity = 1.0;

				var pending = [];

				if ( Array.isArray( pbrSpecularGlossiness.diffuseFactor ) ) {

					var array = pbrSpecularGlossiness.diffuseFactor;

					materialParams.color.fromArray( array );
					materialParams.opacity = array[ 3 ];

				}

				if ( pbrSpecularGlossiness.diffuseTexture !== undefined ) {

					pending.push( parser.assignTexture( materialParams, 'map', pbrSpecularGlossiness.diffuseTexture ) );

				}

				materialParams.emissive = new THREE.Color( 0.0, 0.0, 0.0 );
				materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
				materialParams.specular = new THREE.Color( 1.0, 1.0, 1.0 );

				if ( Array.isArray( pbrSpecularGlossiness.specularFactor ) ) {

					materialParams.specular.fromArray( pbrSpecularGlossiness.specularFactor );

				}

				if ( pbrSpecularGlossiness.specularGlossinessTexture !== undefined ) {

					var specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
					pending.push( parser.assignTexture( materialParams, 'glossinessMap', specGlossMapDef ) );
					pending.push( parser.assignTexture( materialParams, 'specularMap', specGlossMapDef ) );

				}

				return Promise.all( pending );

			},

			createMaterial: function ( materialParams ) {

				var material = new GLTFMeshStandardSGMaterial( materialParams );
				material.fog = true;

				material.color = materialParams.color;

				material.map = materialParams.map === undefined ? null : materialParams.map;

				material.lightMap = null;
				material.lightMapIntensity = 1.0;

				material.aoMap = materialParams.aoMap === undefined ? null : materialParams.aoMap;
				material.aoMapIntensity = 1.0;

				material.emissive = materialParams.emissive;
				material.emissiveIntensity = 1.0;
				material.emissiveMap = materialParams.emissiveMap === undefined ? null : materialParams.emissiveMap;

				material.bumpMap = materialParams.bumpMap === undefined ? null : materialParams.bumpMap;
				material.bumpScale = 1;

				material.normalMap = materialParams.normalMap === undefined ? null : materialParams.normalMap;
				material.normalMapType = THREE.TangentSpaceNormalMap;

				if ( materialParams.normalScale ) material.normalScale = materialParams.normalScale;

				material.displacementMap = null;
				material.displacementScale = 1;
				material.displacementBias = 0;

				material.specularMap = materialParams.specularMap === undefined ? null : materialParams.specularMap;
				material.specular = materialParams.specular;

				material.glossinessMap = materialParams.glossinessMap === undefined ? null : materialParams.glossinessMap;
				material.glossiness = materialParams.glossiness;

				material.alphaMap = null;

				material.envMap = materialParams.envMap === undefined ? null : materialParams.envMap;
				material.envMapIntensity = 1.0;

				material.refractionRatio = 0.98;

				return material;

			},

		};

	}

	/**
	 * Mesh Quantization Extension
	 *
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
	 */
	function GLTFMeshQuantizationExtension() {

		this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;

	}

	/*********************************/
	/********** INTERPOLATION ********/
	/*********************************/

	// Spline Interpolation
	// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
	function GLTFCubicSplineInterpolant( parameterPositions, sampleValues, sampleSize, resultBuffer ) {

		THREE.Interpolant.call( this, parameterPositions, sampleValues, sampleSize, resultBuffer );

	}

	GLTFCubicSplineInterpolant.prototype = Object.create( THREE.Interpolant.prototype );
	GLTFCubicSplineInterpolant.prototype.constructor = GLTFCubicSplineInterpolant;

	GLTFCubicSplineInterpolant.prototype.copySampleValue_ = function ( index ) {

		// Copies a sample value to the result buffer. See description of glTF
		// CUBICSPLINE values layout in interpolate_() function below.

		var result = this.resultBuffer,
			values = this.sampleValues,
			valueSize = this.valueSize,
			offset = index * valueSize * 3 + valueSize;

		for ( var i = 0; i !== valueSize; i ++ ) {

			result[ i ] = values[ offset + i ];

		}

		return result;

	};

	GLTFCubicSplineInterpolant.prototype.beforeStart_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.afterEnd_ = GLTFCubicSplineInterpolant.prototype.copySampleValue_;

	GLTFCubicSplineInterpolant.prototype.interpolate_ = function ( i1, t0, t, t1 ) {

		var result = this.resultBuffer;
		var values = this.sampleValues;
		var stride = this.valueSize;

		var stride2 = stride * 2;
		var stride3 = stride * 3;

		var td = t1 - t0;

		var p = ( t - t0 ) / td;
		var pp = p * p;
		var ppp = pp * p;

		var offset1 = i1 * stride3;
		var offset0 = offset1 - stride3;

		var s2 = - 2 * ppp + 3 * pp;
		var s3 = ppp - pp;
		var s0 = 1 - s2;
		var s1 = s3 - pp + p;

		// Layout of keyframe output values for CUBICSPLINE animations:
		//   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
		for ( var i = 0; i !== stride; i ++ ) {

			var p0 = values[ offset0 + i + stride ]; // splineVertex_k
			var m0 = values[ offset0 + i + stride2 ] * td; // outTangent_k * (t_k+1 - t_k)
			var p1 = values[ offset1 + i + stride ]; // splineVertex_k+1
			var m1 = values[ offset1 + i ] * td; // inTangent_k+1 * (t_k+1 - t_k)

			result[ i ] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;

		}

		return result;

	};

	/*********************************/
	/********** INTERNALS ************/
	/*********************************/

	/* CONSTANTS */

	var WEBGL_CONSTANTS = {
		FLOAT: 5126,
		//FLOAT_MAT2: 35674,
		FLOAT_MAT3: 35675,
		FLOAT_MAT4: 35676,
		FLOAT_VEC2: 35664,
		FLOAT_VEC3: 35665,
		FLOAT_VEC4: 35666,
		LINEAR: 9729,
		REPEAT: 10497,
		SAMPLER_2D: 35678,
		POINTS: 0,
		LINES: 1,
		LINE_LOOP: 2,
		LINE_STRIP: 3,
		TRIANGLES: 4,
		TRIANGLE_STRIP: 5,
		TRIANGLE_FAN: 6,
		UNSIGNED_BYTE: 5121,
		UNSIGNED_SHORT: 5123
	};

	var WEBGL_COMPONENT_TYPES = {
		5120: Int8Array,
		5121: Uint8Array,
		5122: Int16Array,
		5123: Uint16Array,
		5125: Uint32Array,
		5126: Float32Array
	};

	var WEBGL_FILTERS = {
		9728: THREE.NearestFilter,
		9729: THREE.LinearFilter,
		9984: THREE.NearestMipmapNearestFilter,
		9985: THREE.LinearMipmapNearestFilter,
		9986: THREE.NearestMipmapLinearFilter,
		9987: THREE.LinearMipmapLinearFilter
	};

	var WEBGL_WRAPPINGS = {
		33071: THREE.ClampToEdgeWrapping,
		33648: THREE.MirroredRepeatWrapping,
		10497: THREE.RepeatWrapping
	};

	var WEBGL_TYPE_SIZES = {
		'SCALAR': 1,
		'VEC2': 2,
		'VEC3': 3,
		'VEC4': 4,
		'MAT2': 4,
		'MAT3': 9,
		'MAT4': 16
	};

	var ATTRIBUTES = {
		POSITION: 'position',
		NORMAL: 'normal',
		TANGENT: 'tangent',
		TEXCOORD_0: 'uv',
		TEXCOORD_1: 'uv2',
		COLOR_0: 'color',
		WEIGHTS_0: 'skinWeight',
		JOINTS_0: 'skinIndex',
	};

	var PATH_PROPERTIES = {
		scale: 'scale',
		translation: 'position',
		rotation: 'quaternion',
		weights: 'morphTargetInfluences'
	};

	var INTERPOLATION = {
		CUBICSPLINE: undefined, // We use a custom interpolant (GLTFCubicSplineInterpolation) for CUBICSPLINE tracks. Each
		                        // keyframe track will be initialized with a default interpolation type, then modified.
		LINEAR: THREE.InterpolateLinear,
		STEP: THREE.InterpolateDiscrete
	};

	var ALPHA_MODES = {
		OPAQUE: 'OPAQUE',
		MASK: 'MASK',
		BLEND: 'BLEND'
	};

	var MIME_TYPE_FORMATS = {
		'image/png': THREE.RGBAFormat,
		'image/jpeg': THREE.RGBFormat
	};

	/* UTILITY FUNCTIONS */

	function resolveURL( url, path ) {

		// Invalid URL
		if ( typeof url !== 'string' || url === '' ) return '';

		// Host Relative URL
		if ( /^https?:\/\//i.test( path ) && /^\//.test( url ) ) {

			path = path.replace( /(^https?:\/\/[^\/]+).*/i, '$1' );

		}

		// Absolute URL http://,https://,//
		if ( /^(https?:)?\/\//i.test( url ) ) return url;

		// Data URI
		if ( /^data:.*,.*$/i.test( url ) ) return url;

		// Blob URL
		if ( /^blob:.*$/i.test( url ) ) return url;

		// Relative URL
		return path + url;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
	 */
	function createDefaultMaterial( cache ) {

		if ( cache[ 'DefaultMaterial' ] === undefined ) {

			cache[ 'DefaultMaterial' ] = new THREE.MeshStandardMaterial( {
				color: 0xFFFFFF,
				emissive: 0x000000,
				metalness: 1,
				roughness: 1,
				transparent: false,
				depthTest: true,
				side: THREE.FrontSide
			} );

		}

		return cache[ 'DefaultMaterial' ];

	}

	function addUnknownExtensionsToUserData( knownExtensions, object, objectDef ) {

		// Add unknown glTF extensions to an object's userData.

		for ( var name in objectDef.extensions ) {

			if ( knownExtensions[ name ] === undefined ) {

				object.userData.gltfExtensions = object.userData.gltfExtensions || {};
				object.userData.gltfExtensions[ name ] = objectDef.extensions[ name ];

			}

		}

	}

	/**
	 * @param {THREE.Object3D|THREE.Material|THREE.BufferGeometry} object
	 * @param {GLTF.definition} gltfDef
	 */
	function assignExtrasToUserData( object, gltfDef ) {

		if ( gltfDef.extras !== undefined ) {

			if ( typeof gltfDef.extras === 'object' ) {

				Object.assign( object.userData, gltfDef.extras );

			} else {

				console.warn( 'THREE.GLTFLoader: Ignoring primitive type .extras, ' + gltfDef.extras );

			}

		}

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
	 *
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Array<GLTF.Target>} targets
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addMorphTargets( geometry, targets, parser ) {

		var hasMorphPosition = false;
		var hasMorphNormal = false;

		for ( var i = 0, il = targets.length; i < il; i ++ ) {

			var target = targets[ i ];

			if ( target.POSITION !== undefined ) hasMorphPosition = true;
			if ( target.NORMAL !== undefined ) hasMorphNormal = true;

			if ( hasMorphPosition && hasMorphNormal ) break;

		}

		if ( ! hasMorphPosition && ! hasMorphNormal ) return Promise.resolve( geometry );

		var pendingPositionAccessors = [];
		var pendingNormalAccessors = [];

		for ( var i = 0, il = targets.length; i < il; i ++ ) {

			var target = targets[ i ];

			if ( hasMorphPosition ) {

				var pendingAccessor = target.POSITION !== undefined
					? parser.getDependency( 'accessor', target.POSITION )
					: geometry.attributes.position;

				pendingPositionAccessors.push( pendingAccessor );

			}

			if ( hasMorphNormal ) {

				var pendingAccessor = target.NORMAL !== undefined
					? parser.getDependency( 'accessor', target.NORMAL )
					: geometry.attributes.normal;

				pendingNormalAccessors.push( pendingAccessor );

			}

		}

		return Promise.all( [
			Promise.all( pendingPositionAccessors ),
			Promise.all( pendingNormalAccessors )
		] ).then( function ( accessors ) {

			var morphPositions = accessors[ 0 ];
			var morphNormals = accessors[ 1 ];

			if ( hasMorphPosition ) geometry.morphAttributes.position = morphPositions;
			if ( hasMorphNormal ) geometry.morphAttributes.normal = morphNormals;
			geometry.morphTargetsRelative = true;

			return geometry;

		} );

	}

	/**
	 * @param {THREE.Mesh} mesh
	 * @param {GLTF.Mesh} meshDef
	 */
	function updateMorphTargets( mesh, meshDef ) {

		mesh.updateMorphTargets();

		if ( meshDef.weights !== undefined ) {

			for ( var i = 0, il = meshDef.weights.length; i < il; i ++ ) {

				mesh.morphTargetInfluences[ i ] = meshDef.weights[ i ];

			}

		}

		// .extras has user-defined data, so check that .extras.targetNames is an array.
		if ( meshDef.extras && Array.isArray( meshDef.extras.targetNames ) ) {

			var targetNames = meshDef.extras.targetNames;

			if ( mesh.morphTargetInfluences.length === targetNames.length ) {

				mesh.morphTargetDictionary = {};

				for ( var i = 0, il = targetNames.length; i < il; i ++ ) {

					mesh.morphTargetDictionary[ targetNames[ i ] ] = i;

				}

			} else {

				console.warn( 'THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.' );

			}

		}

	}

	function createPrimitiveKey( primitiveDef ) {

		var dracoExtension = primitiveDef.extensions && primitiveDef.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ];
		var geometryKey;

		if ( dracoExtension ) {

			geometryKey = 'draco:' + dracoExtension.bufferView
				+ ':' + dracoExtension.indices
				+ ':' + createAttributesKey( dracoExtension.attributes );

		} else {

			geometryKey = primitiveDef.indices + ':' + createAttributesKey( primitiveDef.attributes ) + ':' + primitiveDef.mode;

		}

		return geometryKey;

	}

	function createAttributesKey( attributes ) {

		var attributesKey = '';

		var keys = Object.keys( attributes ).sort();

		for ( var i = 0, il = keys.length; i < il; i ++ ) {

			attributesKey += keys[ i ] + ':' + attributes[ keys[ i ] ] + ';';

		}

		return attributesKey;

	}

	/* GLTF PARSER */

	function GLTFParser( json, extensions, options ) {

		this.json = json || {};
		this.extensions = extensions || {};
		this.options = options || {};

		// loader object cache
		this.cache = new GLTFRegistry();

		// associations between Three.js objects and glTF elements
		this.associations = new Map();

		// BufferGeometry caching
		this.primitiveCache = {};

		this.textureLoader = new THREE.TextureLoader( this.options.manager );
		this.textureLoader.setCrossOrigin( this.options.crossOrigin );

		this.fileLoader = new THREE.FileLoader( this.options.manager );
		this.fileLoader.setResponseType( 'arraybuffer' );

		if ( this.options.crossOrigin === 'use-credentials' ) {

			this.fileLoader.setWithCredentials( true );

		}

	}

	GLTFParser.prototype.parse = function ( onLoad, onError ) {

		var parser = this;
		var json = this.json;
		var extensions = this.extensions;

		// Clear the loader cache
		this.cache.removeAll();

		// Mark the special nodes/meshes in json for efficient parse
		this.markDefs();

		Promise.all( [

			this.getDependencies( 'scene' ),
			this.getDependencies( 'animation' ),
			this.getDependencies( 'camera' ),

		] ).then( function ( dependencies ) {

			var result = {
				scene: dependencies[ 0 ][ json.scene || 0 ],
				scenes: dependencies[ 0 ],
				animations: dependencies[ 1 ],
				cameras: dependencies[ 2 ],
				asset: json.asset,
				parser: parser,
				userData: {}
			};

			addUnknownExtensionsToUserData( extensions, result, json );

			assignExtrasToUserData( result, json );

			onLoad( result );

		} ).catch( onError );

	};

	/**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */
	GLTFParser.prototype.markDefs = function () {

		var nodeDefs = this.json.nodes || [];
		var skinDefs = this.json.skins || [];
		var meshDefs = this.json.meshes || [];

		var meshReferences = {};
		var meshUses = {};

		// Nothing in the node definition indicates whether it is a Bone or an
		// Object3D. Use the skins' joint references to mark bones.
		for ( var skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex ++ ) {

			var joints = skinDefs[ skinIndex ].joints;

			for ( var i = 0, il = joints.length; i < il; i ++ ) {

				nodeDefs[ joints[ i ] ].isBone = true;

			}

		}

		// Meshes can (and should) be reused by multiple nodes in a glTF asset. To
		// avoid having more than one THREE.Mesh with the same name, count
		// references and rename instances below.
		//
		// Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
		for ( var nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex ++ ) {

			var nodeDef = nodeDefs[ nodeIndex ];

			if ( nodeDef.mesh !== undefined ) {

				if ( meshReferences[ nodeDef.mesh ] === undefined ) {

					meshReferences[ nodeDef.mesh ] = meshUses[ nodeDef.mesh ] = 0;

				}

				meshReferences[ nodeDef.mesh ] ++;

				// Nothing in the mesh definition indicates whether it is
				// a SkinnedMesh or Mesh. Use the node's mesh reference
				// to mark SkinnedMesh if node has skin.
				if ( nodeDef.skin !== undefined ) {

					meshDefs[ nodeDef.mesh ].isSkinnedMesh = true;

				}

			}

		}

		this.json.meshReferences = meshReferences;
		this.json.meshUses = meshUses;

	};

	/**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<THREE.Object3D|THREE.Material|THREE.Texture|THREE.AnimationClip|ArrayBuffer|Object>}
	 */
	GLTFParser.prototype.getDependency = function ( type, index ) {

		var cacheKey = type + ':' + index;
		var dependency = this.cache.get( cacheKey );

		if ( ! dependency ) {

			switch ( type ) {

				case 'scene':
					dependency = this.loadScene( index );
					break;

				case 'node':
					dependency = this.loadNode( index );
					break;

				case 'mesh':
					dependency = this.loadMesh( index );
					break;

				case 'accessor':
					dependency = this.loadAccessor( index );
					break;

				case 'bufferView':
					dependency = this.loadBufferView( index );
					break;

				case 'buffer':
					dependency = this.loadBuffer( index );
					break;

				case 'material':
					dependency = this.loadMaterial( index );
					break;

				case 'texture':
					dependency = this.loadTexture( index );
					break;

				case 'skin':
					dependency = this.loadSkin( index );
					break;

				case 'animation':
					dependency = this.loadAnimation( index );
					break;

				case 'camera':
					dependency = this.loadCamera( index );
					break;

				case 'light':
					dependency = this.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].loadLight( index );
					break;

				default:
					throw new Error( 'Unknown type: ' + type );

			}

			this.cache.add( cacheKey, dependency );

		}

		return dependency;

	};

	/**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */
	GLTFParser.prototype.getDependencies = function ( type ) {

		var dependencies = this.cache.get( type );

		if ( ! dependencies ) {

			var parser = this;
			var defs = this.json[ type + ( type === 'mesh' ? 'es' : 's' ) ] || [];

			dependencies = Promise.all( defs.map( function ( def, index ) {

				return parser.getDependency( type, index );

			} ) );

			this.cache.add( type, dependencies );

		}

		return dependencies;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBuffer = function ( bufferIndex ) {

		var bufferDef = this.json.buffers[ bufferIndex ];
		var loader = this.fileLoader;

		if ( bufferDef.type && bufferDef.type !== 'arraybuffer' ) {

			throw new Error( 'THREE.GLTFLoader: ' + bufferDef.type + ' buffer type is not supported.' );

		}

		// If present, GLB container is required to be the first buffer.
		if ( bufferDef.uri === undefined && bufferIndex === 0 ) {

			return Promise.resolve( this.extensions[ EXTENSIONS.KHR_BINARY_GLTF ].body );

		}

		var options = this.options;

		return new Promise( function ( resolve, reject ) {

			loader.load( resolveURL( bufferDef.uri, options.path ), resolve, undefined, function () {

				reject( new Error( 'THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".' ) );

			} );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */
	GLTFParser.prototype.loadBufferView = function ( bufferViewIndex ) {

		var bufferViewDef = this.json.bufferViews[ bufferViewIndex ];

		return this.getDependency( 'buffer', bufferViewDef.buffer ).then( function ( buffer ) {

			var byteLength = bufferViewDef.byteLength || 0;
			var byteOffset = bufferViewDef.byteOffset || 0;
			return buffer.slice( byteOffset, byteOffset + byteLength );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<THREE.BufferAttribute|THREE.InterleavedBufferAttribute>}
	 */
	GLTFParser.prototype.loadAccessor = function ( accessorIndex ) {

		var parser = this;
		var json = this.json;

		var accessorDef = this.json.accessors[ accessorIndex ];

		if ( accessorDef.bufferView === undefined && accessorDef.sparse === undefined ) {

			// Ignore empty accessors, which may be used to declare runtime
			// information about attributes coming from another source (e.g. Draco
			// compression extension).
			return Promise.resolve( null );

		}

		var pendingBufferViews = [];

		if ( accessorDef.bufferView !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.bufferView ) );

		} else {

			pendingBufferViews.push( null );

		}

		if ( accessorDef.sparse !== undefined ) {

			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.indices.bufferView ) );
			pendingBufferViews.push( this.getDependency( 'bufferView', accessorDef.sparse.values.bufferView ) );

		}

		return Promise.all( pendingBufferViews ).then( function ( bufferViews ) {

			var bufferView = bufferViews[ 0 ];

			var itemSize = WEBGL_TYPE_SIZES[ accessorDef.type ];
			var TypedArray = WEBGL_COMPONENT_TYPES[ accessorDef.componentType ];

			// For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
			var elementBytes = TypedArray.BYTES_PER_ELEMENT;
			var itemBytes = elementBytes * itemSize;
			var byteOffset = accessorDef.byteOffset || 0;
			var byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[ accessorDef.bufferView ].byteStride : undefined;
			var normalized = accessorDef.normalized === true;
			var array, bufferAttribute;

			// The buffer is not interleaved if the stride is the item size in bytes.
			if ( byteStride && byteStride !== itemBytes ) {

				// Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
				// This makes sure that IBA.count reflects accessor.count properly
				var ibSlice = Math.floor( byteOffset / byteStride );
				var ibCacheKey = 'InterleavedBuffer:' + accessorDef.bufferView + ':' + accessorDef.componentType + ':' + ibSlice + ':' + accessorDef.count;
				var ib = parser.cache.get( ibCacheKey );

				if ( ! ib ) {

					array = new TypedArray( bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes );

					// Integer parameters to IB/IBA are in array elements, not bytes.
					ib = new THREE.InterleavedBuffer( array, byteStride / elementBytes );

					parser.cache.add( ibCacheKey, ib );

				}

				bufferAttribute = new THREE.InterleavedBufferAttribute( ib, itemSize, ( byteOffset % byteStride ) / elementBytes, normalized );

			} else {

				if ( bufferView === null ) {

					array = new TypedArray( accessorDef.count * itemSize );

				} else {

					array = new TypedArray( bufferView, byteOffset, accessorDef.count * itemSize );

				}

				bufferAttribute = new THREE.BufferAttribute( array, itemSize, normalized );

			}

			// https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
			if ( accessorDef.sparse !== undefined ) {

				var itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
				var TypedArrayIndices = WEBGL_COMPONENT_TYPES[ accessorDef.sparse.indices.componentType ];

				var byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
				var byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;

				var sparseIndices = new TypedArrayIndices( bufferViews[ 1 ], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices );
				var sparseValues = new TypedArray( bufferViews[ 2 ], byteOffsetValues, accessorDef.sparse.count * itemSize );

				if ( bufferView !== null ) {

					// Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
					bufferAttribute = new THREE.BufferAttribute( bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized );

				}

				for ( var i = 0, il = sparseIndices.length; i < il; i ++ ) {

					var index = sparseIndices[ i ];

					bufferAttribute.setX( index, sparseValues[ i * itemSize ] );
					if ( itemSize >= 2 ) bufferAttribute.setY( index, sparseValues[ i * itemSize + 1 ] );
					if ( itemSize >= 3 ) bufferAttribute.setZ( index, sparseValues[ i * itemSize + 2 ] );
					if ( itemSize >= 4 ) bufferAttribute.setW( index, sparseValues[ i * itemSize + 3 ] );
					if ( itemSize >= 5 ) throw new Error( 'THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.' );

				}

			}

			return bufferAttribute;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */
	GLTFParser.prototype.loadTexture = function ( textureIndex ) {

		var parser = this;
		var json = this.json;
		var options = this.options;
		var textureLoader = this.textureLoader;

		var URL = self.URL || self.webkitURL;

		var textureDef = json.textures[ textureIndex ];

		var textureExtensions = textureDef.extensions || {};

		var source;

		if ( textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ] ) {

			source = json.images[ textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].source ];

		} else {

			source = json.images[ textureDef.source ];

		}

		var sourceURI = source.uri;
		var isObjectURL = false;

		if ( source.bufferView !== undefined ) {

			// Load binary image data from bufferView, if provided.

			sourceURI = parser.getDependency( 'bufferView', source.bufferView ).then( function ( bufferView ) {

				isObjectURL = true;
				var blob = new Blob( [ bufferView ], { type: source.mimeType } );
				sourceURI = URL.createObjectURL( blob );
				return sourceURI;

			} );

		}

		return Promise.resolve( sourceURI ).then( function ( sourceURI ) {

			// Load Texture resource.

			var loader = options.manager.getHandler( sourceURI );

			if ( ! loader ) {

				loader = textureExtensions[ EXTENSIONS.MSFT_TEXTURE_DDS ]
					? parser.extensions[ EXTENSIONS.MSFT_TEXTURE_DDS ].ddsLoader
					: textureLoader;

			}

			return new Promise( function ( resolve, reject ) {

				loader.load( resolveURL( sourceURI, options.path ), resolve, undefined, reject );

			} );

		} ).then( function ( texture ) {

			// Clean up resources and configure Texture.

			if ( isObjectURL === true ) {

				URL.revokeObjectURL( sourceURI );

			}

			texture.flipY = false;

			if ( textureDef.name ) texture.name = textureDef.name;

			// Ignore unknown mime types, like DDS files.
			if ( source.mimeType in MIME_TYPE_FORMATS ) {

				texture.format = MIME_TYPE_FORMATS[ source.mimeType ];

			}

			var samplers = json.samplers || {};
			var sampler = samplers[ textureDef.sampler ] || {};

			texture.magFilter = WEBGL_FILTERS[ sampler.magFilter ] || THREE.LinearFilter;
			texture.minFilter = WEBGL_FILTERS[ sampler.minFilter ] || THREE.LinearMipmapLinearFilter;
			texture.wrapS = WEBGL_WRAPPINGS[ sampler.wrapS ] || THREE.RepeatWrapping;
			texture.wrapT = WEBGL_WRAPPINGS[ sampler.wrapT ] || THREE.RepeatWrapping;

			parser.associations.set( texture, {
				type: 'textures',
				index: textureIndex
			} );

			return texture;

		} );

	};

	/**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise}
	 */
	GLTFParser.prototype.assignTexture = function ( materialParams, mapName, mapDef ) {

		var parser = this;

		return this.getDependency( 'texture', mapDef.index ).then( function ( texture ) {

			if ( ! texture.isCompressedTexture ) {

				switch ( mapName ) {

					case 'aoMap':
					case 'emissiveMap':
					case 'metalnessMap':
					case 'normalMap':
					case 'roughnessMap':
						texture.format = THREE.RGBFormat;
						break;

				}

			}

			// Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
			// However, we will copy UV set 0 to UV set 1 on demand for aoMap
			if ( mapDef.texCoord !== undefined && mapDef.texCoord != 0 && ! ( mapName === 'aoMap' && mapDef.texCoord == 1 ) ) {

				console.warn( 'THREE.GLTFLoader: Custom UV set ' + mapDef.texCoord + ' for texture ' + mapName + ' not yet supported.' );

			}

			if ( parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] ) {

				var transform = mapDef.extensions !== undefined ? mapDef.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ] : undefined;

				if ( transform ) {

					var gltfReference = this.associations.get( texture );
					texture = parser.extensions[ EXTENSIONS.KHR_TEXTURE_TRANSFORM ].extendTexture( texture, transform );
					this.associations.set( texture, gltfReference );

				}

			}

			materialParams[ mapName ] = texture;

		} );

	};

	/**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accomodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {THREE.Object3D} mesh Mesh, Line, or Points instance.
	 */
	GLTFParser.prototype.assignFinalMaterial = function ( mesh ) {

		var geometry = mesh.geometry;
		var material = mesh.material;

		var useVertexTangents = geometry.attributes.tangent !== undefined;
		var useVertexColors = geometry.attributes.color !== undefined;
		var useFlatShading = geometry.attributes.normal === undefined;
		var useSkinning = mesh.isSkinnedMesh === true;
		var useMorphTargets = Object.keys( geometry.morphAttributes ).length > 0;
		var useMorphNormals = useMorphTargets && geometry.morphAttributes.normal !== undefined;

		if ( mesh.isPoints ) {

			var cacheKey = 'PointsMaterial:' + material.uuid;

			var pointsMaterial = this.cache.get( cacheKey );

			if ( ! pointsMaterial ) {

				pointsMaterial = new THREE.PointsMaterial();
				THREE.Material.prototype.copy.call( pointsMaterial, material );
				pointsMaterial.color.copy( material.color );
				pointsMaterial.map = material.map;
				pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px

				this.cache.add( cacheKey, pointsMaterial );

			}

			material = pointsMaterial;

		} else if ( mesh.isLine ) {

			var cacheKey = 'LineBasicMaterial:' + material.uuid;

			var lineMaterial = this.cache.get( cacheKey );

			if ( ! lineMaterial ) {

				lineMaterial = new THREE.LineBasicMaterial();
				THREE.Material.prototype.copy.call( lineMaterial, material );
				lineMaterial.color.copy( material.color );

				this.cache.add( cacheKey, lineMaterial );

			}

			material = lineMaterial;

		}

		// Clone the material if it will be modified
		if ( useVertexTangents || useVertexColors || useFlatShading || useSkinning || useMorphTargets ) {

			var cacheKey = 'ClonedMaterial:' + material.uuid + ':';

			if ( material.isGLTFSpecularGlossinessMaterial ) cacheKey += 'specular-glossiness:';
			if ( useSkinning ) cacheKey += 'skinning:';
			if ( useVertexTangents ) cacheKey += 'vertex-tangents:';
			if ( useVertexColors ) cacheKey += 'vertex-colors:';
			if ( useFlatShading ) cacheKey += 'flat-shading:';
			if ( useMorphTargets ) cacheKey += 'morph-targets:';
			if ( useMorphNormals ) cacheKey += 'morph-normals:';

			var cachedMaterial = this.cache.get( cacheKey );

			if ( ! cachedMaterial ) {

				cachedMaterial = material.clone();

				if ( useSkinning ) cachedMaterial.skinning = true;
				if ( useVertexTangents ) cachedMaterial.vertexTangents = true;
				if ( useVertexColors ) cachedMaterial.vertexColors = true;
				if ( useFlatShading ) cachedMaterial.flatShading = true;
				if ( useMorphTargets ) cachedMaterial.morphTargets = true;
				if ( useMorphNormals ) cachedMaterial.morphNormals = true;

				this.cache.add( cacheKey, cachedMaterial );

				this.associations.set( cachedMaterial, this.associations.get( material ) );

			}

			material = cachedMaterial;

		}

		// workarounds for mesh and geometry

		if ( material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined ) {

			geometry.setAttribute( 'uv2', geometry.attributes.uv );

		}

		// https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
		if ( material.normalScale && ! useVertexTangents ) {

			material.normalScale.y = - material.normalScale.y;

		}

		if ( material.clearcoatNormalScale && ! useVertexTangents ) {

			material.clearcoatNormalScale.y = - material.clearcoatNormalScale.y;

		}

		mesh.material = material;

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<THREE.Material>}
	 */
	GLTFParser.prototype.loadMaterial = function ( materialIndex ) {

		var parser = this;
		var json = this.json;
		var extensions = this.extensions;
		var materialDef = json.materials[ materialIndex ];

		var materialType;
		var materialParams = {};
		var materialExtensions = materialDef.extensions || {};

		var pending = [];

		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ] ) {

			var sgExtension = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ];
			materialType = sgExtension.getMaterialType();
			pending.push( sgExtension.extendParams( materialParams, materialDef, parser ) );

		} else if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ] ) {

			var kmuExtension = extensions[ EXTENSIONS.KHR_MATERIALS_UNLIT ];
			materialType = kmuExtension.getMaterialType();
			pending.push( kmuExtension.extendParams( materialParams, materialDef, parser ) );

		} else {

			// Specification:
			// https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material

			materialType = THREE.MeshStandardMaterial;

			var metallicRoughness = materialDef.pbrMetallicRoughness || {};

			materialParams.color = new THREE.Color( 1.0, 1.0, 1.0 );
			materialParams.opacity = 1.0;

			if ( Array.isArray( metallicRoughness.baseColorFactor ) ) {

				var array = metallicRoughness.baseColorFactor;

				materialParams.color.fromArray( array );
				materialParams.opacity = array[ 3 ];

			}

			if ( metallicRoughness.baseColorTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'map', metallicRoughness.baseColorTexture ) );

			}

			materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
			materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;

			if ( metallicRoughness.metallicRoughnessTexture !== undefined ) {

				pending.push( parser.assignTexture( materialParams, 'metalnessMap', metallicRoughness.metallicRoughnessTexture ) );
				pending.push( parser.assignTexture( materialParams, 'roughnessMap', metallicRoughness.metallicRoughnessTexture ) );

			}

		}

		if ( materialDef.doubleSided === true ) {

			materialParams.side = THREE.DoubleSide;

		}

		var alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;

		if ( alphaMode === ALPHA_MODES.BLEND ) {

			materialParams.transparent = true;

			// See: https://github.com/mrdoob/three.js/issues/17706
			materialParams.depthWrite = false;

		} else {

			materialParams.transparent = false;

			if ( alphaMode === ALPHA_MODES.MASK ) {

				materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;

			}

		}

		if ( materialDef.normalTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'normalMap', materialDef.normalTexture ) );

			materialParams.normalScale = new THREE.Vector2( 1, 1 );

			if ( materialDef.normalTexture.scale !== undefined ) {

				materialParams.normalScale.set( materialDef.normalTexture.scale, materialDef.normalTexture.scale );

			}

		}

		if ( materialDef.occlusionTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'aoMap', materialDef.occlusionTexture ) );

			if ( materialDef.occlusionTexture.strength !== undefined ) {

				materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;

			}

		}

		if ( materialDef.emissiveFactor !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			materialParams.emissive = new THREE.Color().fromArray( materialDef.emissiveFactor );

		}

		if ( materialDef.emissiveTexture !== undefined && materialType !== THREE.MeshBasicMaterial ) {

			pending.push( parser.assignTexture( materialParams, 'emissiveMap', materialDef.emissiveTexture ) );

		}

		if ( materialExtensions[ EXTENSIONS.KHR_MATERIALS_CLEARCOAT ] ) {

			var clearcoatExtension = extensions[ EXTENSIONS.KHR_MATERIALS_CLEARCOAT ];
			materialType = clearcoatExtension.getMaterialType();
			pending.push( clearcoatExtension.extendParams( materialParams, { extensions: materialExtensions }, parser ) );

		}

		return Promise.all( pending ).then( function () {

			var material;

			if ( materialType === GLTFMeshStandardSGMaterial ) {

				material = extensions[ EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS ].createMaterial( materialParams );

			} else {

				material = new materialType( materialParams );

			}

			if ( materialDef.name ) material.name = materialDef.name;

			// baseColorTexture, emissiveTexture, and specularGlossinessTexture use sRGB encoding.
			if ( material.map ) material.map.encoding = THREE.sRGBEncoding;
			if ( material.emissiveMap ) material.emissiveMap.encoding = THREE.sRGBEncoding;

			assignExtrasToUserData( material, materialDef );

			parser.associations.set( material, { type: 'materials', index: materialIndex } );

			if ( materialDef.extensions ) addUnknownExtensionsToUserData( extensions, material, materialDef );

			return material;

		} );

	};

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 */
	function computeBounds( geometry, primitiveDef, parser ) {

		var attributes = primitiveDef.attributes;

		var box = new THREE.Box3();

		if ( attributes.POSITION !== undefined ) {

			var accessor = parser.json.accessors[ attributes.POSITION ];

			var min = accessor.min;
			var max = accessor.max;

			// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

			if ( min !== undefined && max !== undefined ) {

				box.set(
					new THREE.Vector3( min[ 0 ], min[ 1 ], min[ 2 ] ),
					new THREE.Vector3( max[ 0 ], max[ 1 ], max[ 2 ] ) );

			} else {

				console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

				return;

			}

		} else {

			return;

		}

		var targets = primitiveDef.targets;

		if ( targets !== undefined ) {

			var maxDisplacement = new THREE.Vector3();
			var vector = new THREE.Vector3();

			for ( var i = 0, il = targets.length; i < il; i ++ ) {

				var target = targets[ i ];

				if ( target.POSITION !== undefined ) {

					var accessor = parser.json.accessors[ target.POSITION ];
					var min = accessor.min;
					var max = accessor.max;

					// glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.

					if ( min !== undefined && max !== undefined ) {

						// we need to get max of absolute components because target weight is [-1,1]
						vector.setX( Math.max( Math.abs( min[ 0 ] ), Math.abs( max[ 0 ] ) ) );
						vector.setY( Math.max( Math.abs( min[ 1 ] ), Math.abs( max[ 1 ] ) ) );
						vector.setZ( Math.max( Math.abs( min[ 2 ] ), Math.abs( max[ 2 ] ) ) );

						// Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
						// to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
						// are used to implement key-frame animations and as such only two are active at a time - this results in very large
						// boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
						maxDisplacement.max( vector );

					} else {

						console.warn( 'THREE.GLTFLoader: Missing min/max properties for accessor POSITION.' );

					}

				}

			}

			// As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
			box.expandByVector( maxDisplacement );

		}

		geometry.boundingBox = box;

		var sphere = new THREE.Sphere();

		box.getCenter( sphere.center );
		sphere.radius = box.min.distanceTo( box.max ) / 2;

		geometry.boundingSphere = sphere;

	}

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {GLTF.Primitive} primitiveDef
	 * @param {GLTFParser} parser
	 * @return {Promise<THREE.BufferGeometry>}
	 */
	function addPrimitiveAttributes( geometry, primitiveDef, parser ) {

		var attributes = primitiveDef.attributes;

		var pending = [];

		function assignAttributeAccessor( accessorIndex, attributeName ) {

			return parser.getDependency( 'accessor', accessorIndex )
				.then( function ( accessor ) {

					geometry.setAttribute( attributeName, accessor );

				} );

		}

		for ( var gltfAttributeName in attributes ) {

			var threeAttributeName = ATTRIBUTES[ gltfAttributeName ] || gltfAttributeName.toLowerCase();

			// Skip attributes already provided by e.g. Draco extension.
			if ( threeAttributeName in geometry.attributes ) continue;

			pending.push( assignAttributeAccessor( attributes[ gltfAttributeName ], threeAttributeName ) );

		}

		if ( primitiveDef.indices !== undefined && ! geometry.index ) {

			var accessor = parser.getDependency( 'accessor', primitiveDef.indices ).then( function ( accessor ) {

				geometry.setIndex( accessor );

			} );

			pending.push( accessor );

		}

		assignExtrasToUserData( geometry, primitiveDef );

		computeBounds( geometry, primitiveDef, parser );

		return Promise.all( pending ).then( function () {

			return primitiveDef.targets !== undefined
				? addMorphTargets( geometry, primitiveDef.targets, parser )
				: geometry;

		} );

	}

	/**
	 * @param {THREE.BufferGeometry} geometry
	 * @param {Number} drawMode
	 * @return {THREE.BufferGeometry}
	 */
	function toTrianglesDrawMode( geometry, drawMode ) {

		var index = geometry.getIndex();

		// generate index if not present

		if ( index === null ) {

			var indices = [];

			var position = geometry.getAttribute( 'position' );

			if ( position !== undefined ) {

				for ( var i = 0; i < position.count; i ++ ) {

					indices.push( i );

				}

				geometry.setIndex( indices );
				index = geometry.getIndex();

			} else {

				console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.' );
				return geometry;

			}

		}

		//

		var numberOfTriangles = index.count - 2;
		var newIndices = [];

		if ( drawMode === THREE.TriangleFanDrawMode ) {

			// gl.TRIANGLE_FAN

			for ( var i = 1; i <= numberOfTriangles; i ++ ) {

				newIndices.push( index.getX( 0 ) );
				newIndices.push( index.getX( i ) );
				newIndices.push( index.getX( i + 1 ) );

			}

		} else {

			// gl.TRIANGLE_STRIP

			for ( var i = 0; i < numberOfTriangles; i ++ ) {

				if ( i % 2 === 0 ) {

					newIndices.push( index.getX( i ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i + 2 ) );


				} else {

					newIndices.push( index.getX( i + 2 ) );
					newIndices.push( index.getX( i + 1 ) );
					newIndices.push( index.getX( i ) );

				}

			}

		}

		if ( ( newIndices.length / 3 ) !== numberOfTriangles ) {

			console.error( 'THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.' );

		}

		// build final geometry

		var newGeometry = geometry.clone();
		newGeometry.setIndex( newIndices );

		return newGeometry;

	}

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<THREE.BufferGeometry>>}
	 */
	GLTFParser.prototype.loadGeometries = function ( primitives ) {

		var parser = this;
		var extensions = this.extensions;
		var cache = this.primitiveCache;

		function createDracoPrimitive( primitive ) {

			return extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ]
				.decodePrimitive( primitive, parser )
				.then( function ( geometry ) {

					return addPrimitiveAttributes( geometry, primitive, parser );

				} );

		}

		var pending = [];

		for ( var i = 0, il = primitives.length; i < il; i ++ ) {

			var primitive = primitives[ i ];
			var cacheKey = createPrimitiveKey( primitive );

			// See if we've already created this geometry
			var cached = cache[ cacheKey ];

			if ( cached ) {

				// Use the cached geometry if it exists
				pending.push( cached.promise );

			} else {

				var geometryPromise;

				if ( primitive.extensions && primitive.extensions[ EXTENSIONS.KHR_DRACO_MESH_COMPRESSION ] ) {

					// Use DRACO geometry if available
					geometryPromise = createDracoPrimitive( primitive );

				} else {

					// Otherwise create a new geometry
					geometryPromise = addPrimitiveAttributes( new THREE.BufferGeometry(), primitive, parser );

				}

				// Cache this geometry
				cache[ cacheKey ] = { primitive: primitive, promise: geometryPromise };

				pending.push( geometryPromise );

			}

		}

		return Promise.all( pending );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<THREE.Group|THREE.Mesh|THREE.SkinnedMesh>}
	 */
	GLTFParser.prototype.loadMesh = function ( meshIndex ) {

		var parser = this;
		var json = this.json;

		var meshDef = json.meshes[ meshIndex ];
		var primitives = meshDef.primitives;

		var pending = [];

		for ( var i = 0, il = primitives.length; i < il; i ++ ) {

			var material = primitives[ i ].material === undefined
				? createDefaultMaterial( this.cache )
				: this.getDependency( 'material', primitives[ i ].material );

			pending.push( material );

		}

		pending.push( parser.loadGeometries( primitives ) );

		return Promise.all( pending ).then( function ( results ) {

			var materials = results.slice( 0, results.length - 1 );
			var geometries = results[ results.length - 1 ];

			var meshes = [];

			for ( var i = 0, il = geometries.length; i < il; i ++ ) {

				var geometry = geometries[ i ];
				var primitive = primitives[ i ];

				// 1. create Mesh

				var mesh;

				var material = materials[ i ];

				if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLES ||
					primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ||
					primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ||
					primitive.mode === undefined ) {

					// .isSkinnedMesh isn't in glTF spec. See .markDefs()
					mesh = meshDef.isSkinnedMesh === true
						? new THREE.SkinnedMesh( geometry, material )
						: new THREE.Mesh( geometry, material );

					if ( mesh.isSkinnedMesh === true && ! mesh.geometry.attributes.skinWeight.normalized ) {

						// we normalize floating point skin weight array to fix malformed assets (see #15319)
						// it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
						mesh.normalizeSkinWeights();

					}

					if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleStripDrawMode );

					} else if ( primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN ) {

						mesh.geometry = toTrianglesDrawMode( mesh.geometry, THREE.TriangleFanDrawMode );

					}

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINES ) {

					mesh = new THREE.LineSegments( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_STRIP ) {

					mesh = new THREE.Line( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.LINE_LOOP ) {

					mesh = new THREE.LineLoop( geometry, material );

				} else if ( primitive.mode === WEBGL_CONSTANTS.POINTS ) {

					mesh = new THREE.Points( geometry, material );

				} else {

					throw new Error( 'THREE.GLTFLoader: Primitive mode unsupported: ' + primitive.mode );

				}

				if ( Object.keys( mesh.geometry.morphAttributes ).length > 0 ) {

					updateMorphTargets( mesh, meshDef );

				}

				mesh.name = meshDef.name || ( 'mesh_' + meshIndex );

				if ( geometries.length > 1 ) mesh.name += '_' + i;

				assignExtrasToUserData( mesh, meshDef );

				parser.assignFinalMaterial( mesh );

				meshes.push( mesh );

			}

			if ( meshes.length === 1 ) {

				return meshes[ 0 ];

			}

			var group = new THREE.Group();

			for ( var i = 0, il = meshes.length; i < il; i ++ ) {

				group.add( meshes[ i ] );

			}

			return group;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */
	GLTFParser.prototype.loadCamera = function ( cameraIndex ) {

		var camera;
		var cameraDef = this.json.cameras[ cameraIndex ];
		var params = cameraDef[ cameraDef.type ];

		if ( ! params ) {

			console.warn( 'THREE.GLTFLoader: Missing camera parameters.' );
			return;

		}

		if ( cameraDef.type === 'perspective' ) {

			camera = new THREE.PerspectiveCamera( THREE.MathUtils.radToDeg( params.yfov ), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6 );

		} else if ( cameraDef.type === 'orthographic' ) {

			camera = new THREE.OrthographicCamera( - params.xmag, params.xmag, params.ymag, - params.ymag, params.znear, params.zfar );

		}

		if ( cameraDef.name ) camera.name = cameraDef.name;

		assignExtrasToUserData( camera, cameraDef );

		return Promise.resolve( camera );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */
	GLTFParser.prototype.loadSkin = function ( skinIndex ) {

		var skinDef = this.json.skins[ skinIndex ];

		var skinEntry = { joints: skinDef.joints };

		if ( skinDef.inverseBindMatrices === undefined ) {

			return Promise.resolve( skinEntry );

		}

		return this.getDependency( 'accessor', skinDef.inverseBindMatrices ).then( function ( accessor ) {

			skinEntry.inverseBindMatrices = accessor;

			return skinEntry;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<THREE.AnimationClip>}
	 */
	GLTFParser.prototype.loadAnimation = function ( animationIndex ) {

		var json = this.json;

		var animationDef = json.animations[ animationIndex ];

		var pendingNodes = [];
		var pendingInputAccessors = [];
		var pendingOutputAccessors = [];
		var pendingSamplers = [];
		var pendingTargets = [];

		for ( var i = 0, il = animationDef.channels.length; i < il; i ++ ) {

			var channel = animationDef.channels[ i ];
			var sampler = animationDef.samplers[ channel.sampler ];
			var target = channel.target;
			var name = target.node !== undefined ? target.node : target.id; // NOTE: target.id is deprecated.
			var input = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.input ] : sampler.input;
			var output = animationDef.parameters !== undefined ? animationDef.parameters[ sampler.output ] : sampler.output;

			pendingNodes.push( this.getDependency( 'node', name ) );
			pendingInputAccessors.push( this.getDependency( 'accessor', input ) );
			pendingOutputAccessors.push( this.getDependency( 'accessor', output ) );
			pendingSamplers.push( sampler );
			pendingTargets.push( target );

		}

		return Promise.all( [

			Promise.all( pendingNodes ),
			Promise.all( pendingInputAccessors ),
			Promise.all( pendingOutputAccessors ),
			Promise.all( pendingSamplers ),
			Promise.all( pendingTargets )

		] ).then( function ( dependencies ) {

			var nodes = dependencies[ 0 ];
			var inputAccessors = dependencies[ 1 ];
			var outputAccessors = dependencies[ 2 ];
			var samplers = dependencies[ 3 ];
			var targets = dependencies[ 4 ];

			var tracks = [];

			for ( var i = 0, il = nodes.length; i < il; i ++ ) {

				var node = nodes[ i ];
				var inputAccessor = inputAccessors[ i ];
				var outputAccessor = outputAccessors[ i ];
				var sampler = samplers[ i ];
				var target = targets[ i ];

				if ( node === undefined ) continue;

				node.updateMatrix();
				node.matrixAutoUpdate = true;

				var TypedKeyframeTrack;

				switch ( PATH_PROPERTIES[ target.path ] ) {

					case PATH_PROPERTIES.weights:

						TypedKeyframeTrack = THREE.NumberKeyframeTrack;
						break;

					case PATH_PROPERTIES.rotation:

						TypedKeyframeTrack = THREE.QuaternionKeyframeTrack;
						break;

					case PATH_PROPERTIES.position:
					case PATH_PROPERTIES.scale:
					default:

						TypedKeyframeTrack = THREE.VectorKeyframeTrack;
						break;

				}

				var targetName = node.name ? node.name : node.uuid;

				var interpolation = sampler.interpolation !== undefined ? INTERPOLATION[ sampler.interpolation ] : THREE.InterpolateLinear;

				var targetNames = [];

				if ( PATH_PROPERTIES[ target.path ] === PATH_PROPERTIES.weights ) {

					// Node may be a THREE.Group (glTF mesh with several primitives) or a THREE.Mesh.
					node.traverse( function ( object ) {

						if ( object.isMesh === true && object.morphTargetInfluences ) {

							targetNames.push( object.name ? object.name : object.uuid );

						}

					} );

				} else {

					targetNames.push( targetName );

				}

				var outputArray = outputAccessor.array;

				if ( outputAccessor.normalized ) {

					var scale;

					if ( outputArray.constructor === Int8Array ) {

						scale = 1 / 127;

					} else if ( outputArray.constructor === Uint8Array ) {

						scale = 1 / 255;

					} else if ( outputArray.constructor == Int16Array ) {

						scale = 1 / 32767;

					} else if ( outputArray.constructor === Uint16Array ) {

						scale = 1 / 65535;

					} else {

						throw new Error( 'THREE.GLTFLoader: Unsupported output accessor component type.' );

					}

					var scaled = new Float32Array( outputArray.length );

					for ( var j = 0, jl = outputArray.length; j < jl; j ++ ) {

						scaled[ j ] = outputArray[ j ] * scale;

					}

					outputArray = scaled;

				}

				for ( var j = 0, jl = targetNames.length; j < jl; j ++ ) {

					var track = new TypedKeyframeTrack(
						targetNames[ j ] + '.' + PATH_PROPERTIES[ target.path ],
						inputAccessor.array,
						outputArray,
						interpolation
					);

					// Override interpolation with custom factory method.
					if ( sampler.interpolation === 'CUBICSPLINE' ) {

						track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline( result ) {

							// A CUBICSPLINE keyframe in glTF has three output values for each input value,
							// representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
							// must be divided by three to get the interpolant's sampleSize argument.

							return new GLTFCubicSplineInterpolant( this.times, this.values, this.getValueSize() / 3, result );

						};

						// Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
						track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;

					}

					tracks.push( track );

				}

			}

			var name = animationDef.name ? animationDef.name : 'animation_' + animationIndex;

			return new THREE.AnimationClip( name, undefined, tracks );

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<THREE.Object3D>}
	 */
	GLTFParser.prototype.loadNode = function ( nodeIndex ) {

		var json = this.json;
		var extensions = this.extensions;
		var parser = this;

		var meshReferences = json.meshReferences;
		var meshUses = json.meshUses;

		var nodeDef = json.nodes[ nodeIndex ];

		return ( function () {

			var pending = [];

			if ( nodeDef.mesh !== undefined ) {

				pending.push( parser.getDependency( 'mesh', nodeDef.mesh ).then( function ( mesh ) {

					var node;

					if ( meshReferences[ nodeDef.mesh ] > 1 ) {

						var instanceNum = meshUses[ nodeDef.mesh ] ++;

						node = mesh.clone();
						node.name += '_instance_' + instanceNum;

					} else {

						node = mesh;

					}

					// if weights are provided on the node, override weights on the mesh.
					if ( nodeDef.weights !== undefined ) {

						node.traverse( function ( o ) {

							if ( ! o.isMesh ) return;

							for ( var i = 0, il = nodeDef.weights.length; i < il; i ++ ) {

								o.morphTargetInfluences[ i ] = nodeDef.weights[ i ];

							}

						} );

					}

					return node;

				} ) );

			}

			if ( nodeDef.camera !== undefined ) {

				pending.push( parser.getDependency( 'camera', nodeDef.camera ) );

			}

			if ( nodeDef.extensions
				&& nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ]
				&& nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light !== undefined ) {

				pending.push( parser.getDependency( 'light', nodeDef.extensions[ EXTENSIONS.KHR_LIGHTS_PUNCTUAL ].light ) );

			}

			return Promise.all( pending );

		}() ).then( function ( objects ) {

			var node;

			// .isBone isn't in glTF spec. See .markDefs
			if ( nodeDef.isBone === true ) {

				node = new THREE.Bone();

			} else if ( objects.length > 1 ) {

				node = new THREE.Group();

			} else if ( objects.length === 1 ) {

				node = objects[ 0 ];

			} else {

				node = new THREE.Object3D();

			}

			if ( node !== objects[ 0 ] ) {

				for ( var i = 0, il = objects.length; i < il; i ++ ) {

					node.add( objects[ i ] );

				}

			}

			if ( nodeDef.name ) {

				node.userData.name = nodeDef.name;
				node.name = THREE.PropertyBinding.sanitizeNodeName( nodeDef.name );

			}

			assignExtrasToUserData( node, nodeDef );

			if ( nodeDef.extensions ) addUnknownExtensionsToUserData( extensions, node, nodeDef );

			if ( nodeDef.matrix !== undefined ) {

				var matrix = new THREE.Matrix4();
				matrix.fromArray( nodeDef.matrix );
				node.applyMatrix4( matrix );

			} else {

				if ( nodeDef.translation !== undefined ) {

					node.position.fromArray( nodeDef.translation );

				}

				if ( nodeDef.rotation !== undefined ) {

					node.quaternion.fromArray( nodeDef.rotation );

				}

				if ( nodeDef.scale !== undefined ) {

					node.scale.fromArray( nodeDef.scale );

				}

			}

			parser.associations.set( node, { type: 'nodes', index: nodeIndex } );

			return node;

		} );

	};

	/**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<THREE.Group>}
	 */
	GLTFParser.prototype.loadScene = function () {

		// scene node hierachy builder

		function buildNodeHierachy( nodeId, parentObject, json, parser ) {

			var nodeDef = json.nodes[ nodeId ];

			return parser.getDependency( 'node', nodeId ).then( function ( node ) {

				if ( nodeDef.skin === undefined ) return node;

				// build skeleton here as well

				var skinEntry;

				return parser.getDependency( 'skin', nodeDef.skin ).then( function ( skin ) {

					skinEntry = skin;

					var pendingJoints = [];

					for ( var i = 0, il = skinEntry.joints.length; i < il; i ++ ) {

						pendingJoints.push( parser.getDependency( 'node', skinEntry.joints[ i ] ) );

					}

					return Promise.all( pendingJoints );

				} ).then( function ( jointNodes ) {

					node.traverse( function ( mesh ) {

						if ( ! mesh.isMesh ) return;

						var bones = [];
						var boneInverses = [];

						for ( var j = 0, jl = jointNodes.length; j < jl; j ++ ) {

							var jointNode = jointNodes[ j ];

							if ( jointNode ) {

								bones.push( jointNode );

								var mat = new THREE.Matrix4();

								if ( skinEntry.inverseBindMatrices !== undefined ) {

									mat.fromArray( skinEntry.inverseBindMatrices.array, j * 16 );

								}

								boneInverses.push( mat );

							} else {

								console.warn( 'THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[ j ] );

							}

						}

						mesh.bind( new THREE.Skeleton( bones, boneInverses ), mesh.matrixWorld );

					} );

					return node;

				} );

			} ).then( function ( node ) {

				// build node hierachy

				parentObject.add( node );

				var pending = [];

				if ( nodeDef.children ) {

					var children = nodeDef.children;

					for ( var i = 0, il = children.length; i < il; i ++ ) {

						var child = children[ i ];
						pending.push( buildNodeHierachy( child, node, json, parser ) );

					}

				}

				return Promise.all( pending );

			} );

		}

		return function loadScene( sceneIndex ) {

			var json = this.json;
			var extensions = this.extensions;
			var sceneDef = this.json.scenes[ sceneIndex ];
			var parser = this;

			// Loader returns Group, not Scene.
			// See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
			var scene = new THREE.Group();
			if ( sceneDef.name ) scene.name = sceneDef.name;

			assignExtrasToUserData( scene, sceneDef );

			if ( sceneDef.extensions ) addUnknownExtensionsToUserData( extensions, scene, sceneDef );

			var nodeIds = sceneDef.nodes || [];

			var pending = [];

			for ( var i = 0, il = nodeIds.length; i < il; i ++ ) {

				pending.push( buildNodeHierachy( nodeIds[ i ], scene, json, parser ) );

			}

			return Promise.all( pending ).then( function () {

				return scene;

			} );

		};

	}();

	return GLTFLoader;

} )();
// tridchessboard.js
// https://github.com/nickibyte/tridchessboard.js
//
// Copyright (c) 2020 nickibyte <https://github.com/nickibyte>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU Lesser General Public License for more details.
//
// You should have received a copy of the GNU Lesser General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.


// Imports (will be handled by build script)
//
// import './three.js/build/three.min.js'
// import './three.js/examples/js/controls/OrbitControls.js'
// import './three.js/examples/js/controls/DragControls.js'
// import './three.js/examples/js/loaders/GLTFLoader.js'


var Tridchessboard = function( canvasId, config ) {

	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// Helpers, defaults and config
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------

	// ----------------------------------------------------------------
	// Helpers
	// ----------------------------------------------------------------

	// Pos object: Specifies a certain square on the board
	var Pos = function( file, row, level ) {

		this.f = file;
		this.r = row;
		this.l = level;

	}


	// Squares

	var MAIN_SQUARES_OBJ = {

		// Low board
		b2_1: new Pos(1,1,0), c2_1: new Pos(2,1,0), d2_1: new Pos(3,1,0), e2_1: new Pos(4,1,0),
		b3_1: new Pos(1,2,0), c3_1: new Pos(2,2,0), d3_1: new Pos(3,2,0), e3_1: new Pos(4,2,0),
		b4_1: new Pos(1,3,0), c4_1: new Pos(2,3,0), d4_1: new Pos(3,3,0), e4_1: new Pos(4,3,0),
		b5_1: new Pos(1,4,0), c5_1: new Pos(2,4,0), d5_1: new Pos(3,4,0), e5_1: new Pos(4,4,0),

		// Middle board
		b4_3: new Pos(1,3,2), c4_3: new Pos(2,3,2), d4_3: new Pos(3,3,2), e4_3: new Pos(4,3,2),
		b5_3: new Pos(1,4,2), c5_3: new Pos(2,4,2), d5_3: new Pos(3,4,2), e5_3: new Pos(4,4,2),
		b6_3: new Pos(1,5,2), c6_3: new Pos(2,5,2), d6_3: new Pos(3,5,2), e6_3: new Pos(4,5,2),
		b7_3: new Pos(1,6,2), c7_3: new Pos(2,6,2), d7_3: new Pos(3,6,2), e7_3: new Pos(4,6,2),

		// High board
		b6_5: new Pos(1,5,4), c6_5: new Pos(2,5,4), d6_5: new Pos(3,5,4), e6_5: new Pos(4,5,4),
		b7_5: new Pos(1,6,4), c7_5: new Pos(2,6,4), d7_5: new Pos(3,6,4), e7_5: new Pos(4,6,4),
		b8_5: new Pos(1,7,4), c8_5: new Pos(2,7,4), d8_5: new Pos(3,7,4), e8_5: new Pos(4,7,4),
		b9_5: new Pos(1,8,4), c9_5: new Pos(2,8,4), d9_5: new Pos(3,8,4), e9_5: new Pos(4,8,4)

	};

	var TOWER_SQUARES_OBJ = {

		T1: { a1_2: new Pos(0,0,1), b1_2: new Pos(1,0,1),
			  a2_2: new Pos(0,1,1), b2_2: new Pos(1,1,1) },

		T2: { e1_2: new Pos(4,0,1), f1_2: new Pos(5,0,1),
			  e2_2: new Pos(4,1,1), f2_2: new Pos(5,1,1) },

		T3: { a5_2: new Pos(0,4,1), b5_2: new Pos(1,4,1),
			  a6_2: new Pos(0,5,1), b6_2: new Pos(1,5,1) },

		T4: { e5_2: new Pos(4,4,1), f5_2: new Pos(5,4,1),
			  e6_2: new Pos(4,5,1), f6_2: new Pos(5,5,1) },

		T5: { a3_4: new Pos(0,2,3), b3_4: new Pos(1,2,3),
			  a4_4: new Pos(0,3,3), b4_4: new Pos(1,3,3) },

		T6: { e3_4: new Pos(4,2,3), f3_4: new Pos(5,2,3),
			  e4_4: new Pos(4,3,3), f4_4: new Pos(5,3,3) },

		T7: { a7_4: new Pos(0,6,3), b7_4: new Pos(1,6,3),
			  a8_4: new Pos(0,7,3), b8_4: new Pos(1,7,3) },

		T8: { e7_4: new Pos(4,6,3), f7_4: new Pos(5,6,3),
			  e8_4: new Pos(4,7,3), f8_4: new Pos(5,7,3) },

		T9: { a5_6: new Pos(0,4,5), b5_6: new Pos(1,4,5),
			  a6_6: new Pos(0,5,5), b6_6: new Pos(1,5,5) },

		T10: { e5_6: new Pos(4,4,5), f5_6: new Pos(5,4,5),
			   e6_6: new Pos(4,5,5), f6_6: new Pos(5,5,5) },

		T11: { a9_6: new Pos(0,8,5), b9_6: new Pos(1,8,5),
			   a10_6: new Pos(0,9,5), b10_6: new Pos(1,9,5) },

		T12: { e9_6: new Pos(4,8,5), f9_6: new Pos(5,8,5),
			   e10_6: new Pos(4,9,5), f10_6: new Pos(5,9,5) }

	};


	// Validation

	// TODO: Remove this as it is no longer needed
	function isValidSquare( squ ) {

		if ( typeof( squ ) !== 'string' ) { return false; }

		// Check for valid square name (e.g. a3_1)
		// file (a-f), row (1-10) and level (1-6)
		let reg = new RegExp( '^[a-f](?:[1-9]|10)_[1-6]$' );
		if ( !reg.test( squ ) ) { return false; }

		return true;

	}

	// TODO: Remove this as it is no longer needed
	function isValidTower( tow ) {

		if ( typeof( tow ) !== 'string' ) { return false; }

		// Check for valid tower name (T1, T2, ..., T12)
		let reg = new RegExp( '^T(?:[1-9]|1[012])$' );
		if ( !reg.test( tow ) ) { return false; }

		return true;

	}

	function isValidPieceCode( pie ) {

		if ( typeof( pie ) !== 'string' ) { return false; }

		// Check for valid piece code (e.g. wP, bK, wQ)
		let reg = new RegExp( '^[wb][PNBRQK]$' );
		if ( !reg.test( pie ) ) { return false; }

		return true;

	}

	function isValidPos( pos ) {

		if ( typeof( pos ) !== 'object' ) { return false; }

		var squares = MAIN_SQUARES_OBJ;

		// Get towers from position object
		for ( let tow in TOWER_SQUARES_OBJ ) {

			if ( pos.hasOwnProperty( tow ) && pos[ tow ] === true ) {

				// Add tower squares to main squares
				Object.assign( squares, TOWER_SQUARES_OBJ[ tow ] );

			}

		}

		// Iterate over position object (e.g. a3_1: 'wP')
		for ( let prop in pos ) {

			if ( pos.hasOwnProperty( prop ) ) {

				if ( TOWER_SQUARES_OBJ.hasOwnProperty( prop ) ) {

					// If valid tower
					// Check tower value (true/false)
					if ( typeof( pos[ prop ] ) !== 'boolean' ) { return false; }

				} else if ( squares.hasOwnProperty( prop ) ) {

					// If square is valid and exists
					// Check piece code
					if ( !isValidPieceCode( pos[ prop ] ) ) { return false; }

				} else { return false; }

			}

		}

		return true;

	}

	function isValidFen( fen ) { }

	function isValidOrientation( orientation ) { }

	function isValidPieceTheme( pieceTheme ) { }

	function isValidBoardTheme( boardTheme ) { }


	// ----------------------------------------------------------------
	// Defaults
	// ----------------------------------------------------------------

	// Orientation (camera position)
	var ORIENTATION_WHITE = new THREE.Vector3( -12, 10, 0 );
	var ORIENTATION_BLACK = new THREE.Vector3( 5, 15, 0 );
	var DEFAULT_ORIENTATION = new THREE.Vector3( -10, 7, 10 );
	var currentOrientation = null;

	// PieceTheme
	var PIECE_THEME = {

		wP: '../assets/pieces/wP.glb',
		wN: '../assets/pieces/wN.glb',
		wB: '../assets/pieces/wB.glb',
		wR: '../assets/pieces/wR.glb',
		wQ: '../assets/pieces/wQ.glb',
		wK: '../assets/pieces/wK.glb',
		bP: '../assets/pieces/bP.glb',
		bN: '../assets/pieces/bN.glb',
		bB: '../assets/pieces/bB.glb',
		bR: '../assets/pieces/bR.glb',
		bQ: '../assets/pieces/bQ.glb',
		bK: '../assets/pieces/bK.glb'

	};

	// BoardTheme
	var BOARD_THEME = {

		board: '../assets/board/board.glb',
		tower: '../assets/board/tower.glb',
		stand: '../assets/board/stand.glb'

	};


	// ----------------------------------------------------------------
	// Config
	// ----------------------------------------------------------------

	// Load config and apply defaults

	if ( config.draggable !== true ) { config.draggable = false; }
	if ( config.turnable !== true ) { config.turnable = false; }
	if ( config.dropOffBoard !== 'trash' ) { config.dropOffBoard = 'snapback'; }
	if ( config.sparePieces !== true ) { config.sparePieces = false; }
	if ( config.stand !== false ) { config.stand = true; }


	// TODO: Validate themes
	// pieceTheme
	if ( config.hasOwnProperty( 'pieceTheme' ) ) {

		if ( typeof ( config.pieceTheme ) === 'string' ) {

			// TODO: This can probably be done more efficently
			// Create object from string
			config.pieceTheme = {

				wP: config.pieceTheme.replace( '{piece}', 'wP' ),
				wN: config.pieceTheme.replace( '{piece}', 'wN' ),
				wB: config.pieceTheme.replace( '{piece}', 'wB' ),
				wR: config.pieceTheme.replace( '{piece}', 'wR' ),
				wQ: config.pieceTheme.replace( '{piece}', 'wQ' ),
				wK: config.pieceTheme.replace( '{piece}', 'wK' ),
				bP: config.pieceTheme.replace( '{piece}', 'bP' ),
				bN: config.pieceTheme.replace( '{piece}', 'bN' ),
				bB: config.pieceTheme.replace( '{piece}', 'bB' ),
				bR: config.pieceTheme.replace( '{piece}', 'bR' ),
				bQ: config.pieceTheme.replace( '{piece}', 'bQ' ),
				bK: config.pieceTheme.replace( '{piece}', 'bK' )

			};

		} else if ( typeof ( config.pieceTheme ) === 'function' ) {

			// TODO: This can probably be done more efficently
			// Create object from function
			config.pieceTheme = {

				wP: config.pieceTheme( 'wP' ),
				wN: config.pieceTheme( 'wN' ),
				wB: config.pieceTheme( 'wB' ),
				wR: config.pieceTheme( 'wR' ),
				wQ: config.pieceTheme( 'wQ' ),
				wK: config.pieceTheme( 'wK' ),
				bP: config.pieceTheme( 'bP' ),
				bN: config.pieceTheme( 'bN' ),
				bB: config.pieceTheme( 'bB' ),
				bR: config.pieceTheme( 'bR' ),
				bQ: config.pieceTheme( 'bQ' ),
				bK: config.pieceTheme( 'bK' )

			};

		}

	} else { config.pieceTheme = PIECE_THEME; }


	// TODO: Validate themes
	// boardTheme
	if ( config.hasOwnProperty( 'boardTheme' ) ) {

		if ( typeof ( config.boardTheme ) === 'string' ) {

			// TODO: This can probably be done more efficently
			// Create object from string
			config.boardTheme = {

				board: config.boardTheme.replace( '{part}', 'board' ),
				tower: config.boardTheme.replace( '{part}', 'tower' ),
				stand: config.boardTheme.replace( '{part}', 'stand' )

			};

		} else if ( typeof ( config.boardTheme ) === 'function' ) {

			// TODO: This can probably be done more efficently
			// Create object from function
			config.boardTheme = {

				board: config.boardTheme( 'board' ),
				tower: config.boardTheme( 'tower' ),
				stand: config.boardTheme( 'stand' )

			};

		}

	} else { config.boardTheme = BOARD_THEME; }


	// orientation
	if ( config.hasOwnProperty( 'orientation' ) ) {

		if ( typeof ( config.orientation ) === 'string' &&
			 config.orientation.toLowerCase() === 'white' ) {

			config.orientation = ORIENTATION_WHITE;
			currentOrientation = 'white';

		} else if ( typeof ( config.orientation ) === 'string' &&
					config.orientation.toLowerCase() === 'black' ) {

			config.orientation = ORIENTATION_BLACK;
			currentOrientation = 'black';

		} else if ( typeof ( config.orientation.x ) !== 'number' ||
					typeof ( config.orientation.y ) !== 'number' ||
					typeof ( config.orientation.z ) !== 'number' ) {

			config.orientation = DEFAULT_ORIENTATION;

		}

	} else { config.orientation = DEFAULT_ORIENTATION; }


	// Callback methods

	// TODO: Find way to not call this on internal moves
	function callOnChange( oldPos ) {

		if ( typeof ( config.onChange ) === 'function' ) {

			var newPos = generatePos();

			// TODO: Only call if the position was changed
			config.onChange( oldPos, newPos );

		}

	}

	function callOnDragStart( obj ) {

		if ( typeof ( config.onDragStart ) === 'function' ) {

			var source = obj.parent.name;

			// Tower or piece (for towers source and piece are the same)
			var piece = obj.parent.name;
			if ( obj.type === 'piece' ) { piece = obj.name; }

			var pos = position();

			return config.onDragStart( source, piece, pos, currentOrientation );

		}

	}

	function callOnDragMove( newObj, oldObj, obj ) {

		if ( typeof ( config.onDragMove ) === 'function' ) {

			newObj = newObj.name;
			oldObj = oldObj.name;
			var source = obj.parent.name;

			// Tower or piece (for towers source and piece are the same)
			var piece = obj.parent.name;
			if ( obj.type === 'piece' ) { piece = obj.name; }

			var pos = position();

			// Only call if the square/tower position was changed
			if ( newObj !== oldObj ) {

				config.onDragMove( newObj, oldObj, source, piece, pos, currentOrientation );

			}

		}

	}

	function callOnDrop( source, target, obj, oldPos ) {

		if ( typeof ( config.onDrop ) === 'function' ) {

			source = source.name;
			if ( target !== 'offboard' ) { target = target.name; }

			// Tower or piece (for towers source and piece are the same)
			var piece = obj.parent.name;
			if ( obj.type === 'piece' ) { piece = obj.name; }

			var newPos = position();

			return config.onDrop( source, target, piece, newPos, oldPos, currentOrientation );

		}
	}

	// TODO: Same as callOnChange, combine somehow
	function callOnMoveEnd( oldPos ) {

		if ( typeof ( config.onMoveEnd ) === 'function' ) {

			var newPos = generatePos();

			// TODO: Only call if the position was changed
			config.onMoveEnd( oldPos, newPos );

		}

	}

	function callOnSnapbackEnd( obj, source ) {

		if ( typeof ( config.onSnapbackEnd ) === 'function' ) {

			source = source.name;

			// Tower or piece (for towers source and piece are the same)
			var piece = obj.parent.name;
			if ( obj.type === 'piece' ) { piece = obj.name; }

			var pos = position();

			config.onSnapbackEnd( piece, source, pos, currentOrientation );

		}
	}

	function callOnSnapEnd( source, target ) {

		if ( typeof ( config.onSnapEnd ) === 'function' ) {

			// Convert pieces/towerModels to squares/towers
			if ( source.type === 'piece' || source.type === 'Mesh' ) { source = source.parent; }
			if ( target.type === 'piece' || target.type === 'Mesh' ) { target = target.parent; }

			// Tower or piece (for towers source and piece are the same)
			var piece = source.name;
			if ( target.type === 'square' ) { piece = target.getPiece().name; }

			source = source.name;
			target = target.name;

			config.onSnapEnd( source, target, piece );

		}

	}

	// TODO: Config - user defined start position
	// TODO: Config - show errors
	// TODO: Config - spare pieces
	// TODO: Config - notation
	// TODO: Config - shorthands ('start', fen, position instead of config object)
	// TODO: Config - configurable colors (background, pieces, squares?)


	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// Three.js
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------

	// Canvas element
	var canvas = document.getElementById( canvasId );
	var width = canvas.offsetWidth;
	var height = canvas.offsetHeight;


	// Scene
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera( 60, width / height, 1, 1000 );
	camera.position.set( config.orientation.x,
						 config.orientation.y,
						 config.orientation.z );
	camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );


	// Renderer
	var renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( width, height );
	renderer.setClearColor( 0xcccccc, 1 );
	document.getElementById( canvasId ).appendChild( renderer.domElement );


	// GLTFLoader for model loading
	var loader = new THREE.GLTFLoader();

	// Function to handle async model loading
	function loadModel( path ) {

		return new Promise( function ( resolve, reject ) {

			loader.load( path, function ( gltf ) {

				var mesh = gltf.scene.children[ 0 ];
				resolve( mesh );

			}, undefined, function ( error ) { reject( error ); } );

		} );

	}


	// Lighting
	var light = new THREE.AmbientLight( 0x404040 );    // Flat lighting
	light.intensity = 10.5;
	scene.add( light );


	// Orbit controls
	var orbitControls = new THREE.OrbitControls( camera, renderer.domElement );
	orbitControls.minDistance = 2;
	orbitControls.maxDistance = 30;
	orbitControls.enablePan = false;
	orbitControls.zoomSpeed = 1.0;
	orbitControls.rotateSpeed = 1.0;
	orbitControls.minPolarAngle = 0;
	orbitControls.maxPolarAngle = Math.PI;
	orbitControls.enabled = false;

	if ( config.turnable === true ) { orbitControls.enabled = true; }


	// Drag controls
	var draggable = [];

	var dragControls = new THREE.DragControls( draggable, false, camera, renderer.domElement );
 	dragControls.enabled = false;

	if ( config.draggable === true ) {

		dragControls.enabled = true;

		dragControls.addEventListener( 'dragstart', onDragStart );
		dragControls.addEventListener( 'dragend', onDragEnd );

		renderer.domElement.addEventListener( 'mousemove', onMouseMove );

	}


	// DEBUG
	//var axesHelper = new THREE.AxesHelper( 10 );
	//scene.add( axesHelper );


	// TODO: Make into API method
	// Window Resizing
	function onWindowResize() {

	width = canvas.offsetWidth;
	height = canvas.offsetHeight;

	camera.aspect = width / height;
	camera.updateProjectionMatrix();

	renderer.setSize( width, height );

	}

	window.addEventListener( 'resize', onWindowResize, false );


	// Animation loop
	function animate() {

	requestAnimationFrame( animate );
	renderer.render( scene, camera );

	}

	animate();


	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// Tri-D-Chess
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------

	// ----------------------------------------------------------------
	// Defaults and config
	// ----------------------------------------------------------------

	var DEFAULT_STARTING_FEN = "12bc rnnr/pbbp/pqkp/pppp/4/4/4/4/4/4/PBBP/RNNR/4/4/PPPP/PQKP w KQkq - 0 1";
	var EMPTY_BOARD_FEN = "12bc 4/4/4/4/4/4/4/4/4/4/4/4/4/4/4/4 w KQkq - 0 1";


	// ----------------------------------------------------------------
	// Globals and helper functions
	// ----------------------------------------------------------------


	function posToVector3( pos ) {

		return new THREE.Vector3( pos.r, pos.l * 2, pos.f );

	}

	function getObjectByPos( obj, pos ) {

		if ( obj.hasOwnProperty( 'pos' ) && obj.pos.f === pos.f &&
											obj.pos.r === pos.r &&
			 								obj.pos.l === pos.l ) {

			return obj

		}

		for ( let i = 0; i < obj.children.length; i++ ) {

			let child = obj.children[ i ];
			let object = getObjectByPos( child, pos );

			if ( object !== undefined ) {

				return object;

			}

		}

		return undefined;

	}


	// Squares
	// TODO: Remove replaced by MAIN_SQUARES_OBJ
	var MAIN_SQUARES = [
		// Low board
		new Pos(1,1,0), new Pos(2,1,0), new Pos(3,1,0), new Pos(4,1,0),
		new Pos(1,2,0), new Pos(2,2,0), new Pos(3,2,0), new Pos(4,2,0),
		new Pos(1,3,0), new Pos(2,3,0), new Pos(3,3,0), new Pos(4,3,0),
		new Pos(1,4,0), new Pos(2,4,0), new Pos(3,4,0), new Pos(4,4,0),

		// Middle board
		new Pos(1,3,2), new Pos(2,3,2), new Pos(3,3,2), new Pos(4,3,2),
		new Pos(1,4,2), new Pos(2,4,2), new Pos(3,4,2), new Pos(4,4,2),
		new Pos(1,5,2), new Pos(2,5,2), new Pos(3,5,2), new Pos(4,5,2),
		new Pos(1,6,2), new Pos(2,6,2), new Pos(3,6,2), new Pos(4,6,2),

		// High board
		new Pos(1,5,4), new Pos(2,5,4), new Pos(3,5,4), new Pos(4,5,4),
		new Pos(1,6,4), new Pos(2,6,4), new Pos(3,6,4), new Pos(4,6,4),
		new Pos(1,7,4), new Pos(2,7,4), new Pos(3,7,4), new Pos(4,7,4),
		new Pos(1,8,4), new Pos(2,8,4), new Pos(3,8,4), new Pos(4,8,4)
	];

	// TODO: Remove replaced by TOWER_SQUARES_OBJ
	var TOWER_SQUARES = [
		// Low board
		[ new Pos(0,0,1), new Pos(1,0,1), new Pos(0,1,1), new Pos(1,1,1) ],
		[ new Pos(4,0,1), new Pos(5,0,1), new Pos(4,1,1), new Pos(5,1,1) ],
		[ new Pos(0,4,1), new Pos(1,4,1), new Pos(0,5,1), new Pos(1,5,1) ],
		[ new Pos(4,4,1), new Pos(5,4,1), new Pos(4,5,1), new Pos(5,5,1) ],

		// Middle board
		[ new Pos(0,2,3), new Pos(1,2,3), new Pos(0,3,3), new Pos(1,3,3) ],
		[ new Pos(4,2,3), new Pos(5,2,3), new Pos(4,3,3), new Pos(5,3,3) ],
		[ new Pos(0,6,3), new Pos(1,6,3), new Pos(0,7,3), new Pos(1,7,3) ],
		[ new Pos(4,6,3), new Pos(5,6,3), new Pos(4,7,3), new Pos(5,7,3) ],

		// High board
		[ new Pos(0,4,5), new Pos(1,4,5), new Pos(0,5,5), new Pos(1,5,5) ],
		[ new Pos(4,4,5), new Pos(5,4,5), new Pos(4,5,5), new Pos(5,5,5) ],
		[ new Pos(0,8,5), new Pos(1,8,5), new Pos(0,9,5), new Pos(1,9,5) ],
		[ new Pos(4,8,5), new Pos(5,8,5), new Pos(4,9,5), new Pos(5,9,5) ]
	];

	var TOWER_POSITIONS = [
		new Pos(0.5,0.5,0),
		new Pos(4.5,0.5,0),
		new Pos(0.5,4.5,0),
		new Pos(4.5,4.5,0),
		new Pos(0.5,2.5,2),
		new Pos(4.5,2.5,2),
		new Pos(0.5,6.5,2),
		new Pos(4.5,6.5,2),
		new Pos(0.5,4.5,4),
		new Pos(4.5,4.5,4),
		new Pos(0.5,8.5,4),
		new Pos(4.5,8.5,4)
	];

	// ----------------------------------------------------------------
	// Board
	// ----------------------------------------------------------------

	var board = new THREE.Group();
	board.position.set( -4.5, -4, -2.5 );    // Center board on origin

	scene.add( board );


	// Add board model
	var offset = new THREE.Vector3( 4.5, 4, 2.5 );

	var boardMod = new THREE.Mesh();
	boardMod.position.set( offset.x, offset.y, offset.z );
	board.add( boardMod );
	loadModel( config.boardTheme.board ).then( function( model ) {

		boardMod.geometry = model.geometry;
		boardMod.material = model.material;

	} );

	var standMod = new THREE.Mesh();
	standMod.position.set( offset.x, offset.y, offset.z );
	board.add( standMod );
	loadModel( config.boardTheme.stand ).then( function( model ) {

		standMod.geometry = model.geometry;
		standMod.material = model.material;

	} );

	// Enable/disable stand
	standMod.visible = config.stand;


	// ----------------------------------------------------------------
	// Squares
	// ----------------------------------------------------------------

	var squares = [];
	var squareIndicators = [];


	// Defaults
	var DEFAULT_SQU_IND_COLOR = 0xfafcb8;
	var DEFAULT_SQU_IND_OPACITY = 0.85;


	// Square Indicators
	var squIndGeo = new THREE.PlaneGeometry();
	squIndGeo.translate( 0, 0, 0.01 );    // Set origin below square

	var squIndMat= new THREE.MeshBasicMaterial();
	squIndMat.color = DEFAULT_SQU_IND_COLOR;
	squIndMat.transparent = true;
	squIndMat.opacity = DEFAULT_SQU_IND_OPACITY;
	squIndMat.side = THREE.DoubleSide;


	// Square object
	var Square = function( name, pos ) {

		// Object3D constructor
		THREE.Object3D.apply( this );

		// Properties
		this.type = 'square';
		this.name = name;
		this.pos = pos;

		squares.push( this );

		// Position
		var vec = posToVector3( pos );
		this.position.set( vec.x, vec.y, vec.z );

		// Active/inactive
		this.active = false;    // TODO: Make private somehow

		this.activate = function() {

			this.active = true;

			// Add to squares array if it doesn't exist yet
			if ( squares.indexOf( this ) === -1 ) {

				squares.push( this );

			}

		}

		this.deactivate = function() {

			this.active = false;

			// Remove from squares array if it exists
			if ( squares.indexOf( this ) !== -1 ) {

				squares.splice( squares.indexOf( this ), 1 );

			}

		}

		// Square Indicator
		var mat = squIndMat.clone();
		var ind = new THREE.Mesh( squIndGeo, mat );
		ind.rotateX( - Math.PI / 2 );    // Rotate upright
		ind.material.visible = false;
		ind.name = "ind: " + this.name;
		this.add( ind );
		squareIndicators.push( ind );

		// Piece
		var piece = null;

		this.getPiece = function() { return piece }
		this.setPiece = function( pie ) {

			if ( pie !== null ) {

				// Remove old piece
				this.setPiece( null );
				scene.remove( piece );

				// Add new piece
				piece = pie;
				this.add( piece );

				piece.position.set( 0, 0, 0 );    // Move to relative origin

				// Add to pieces array if it doesn't exist yet
				if ( pieces.indexOf( piece ) === -1 ) {

					pieces.push( piece );

					// Update draggable
					// TODO: Better way to update draggable?
					draggable.push( piece );

				}

			} else {

				this.remove( piece );

				// Remove from pieces array if it exists
				if ( pieces.indexOf( piece ) !== -1 ) {

					pieces.splice( pieces.indexOf( piece ), 1 );

					// Update draggable
					// TODO: Better way to update draggable?
					draggable.splice( draggable.indexOf( piece ), 1 );

				}

				piece = null
			}

		}

		// Highlight
		this.highlight = function( color = DEFAULT_SQU_IND_COLOR ) {

			// Highlight indicator
			ind.material.visible = true;
			color = new THREE.Color( color );
			ind.material.color = color;

		}

		this.unhighlight = function() {

			ind.material.visible = false;

		}

	}

	Square.prototype = Object.create( THREE.Object3D.prototype );
	Square.prototype.constructor = Square;


	// Create squares for main boards
	// TODO: Modify to use MAIN_SQUARES_OBJ
	for ( let squ = 0; squ < MAIN_SQUARES.length; squ++ ) {

		// Get position
		let pos = MAIN_SQUARES[ squ ];
		let name = 'abcdef'.charAt(pos.f) + (pos.r + 1) + '_' + (pos.l + 1);

		// Add square
		let square = new Square( name, pos );
		board.add( square );

	}


	// ----------------------------------------------------------------
	// Towers
	// ----------------------------------------------------------------

	var towers = [];
	var towerObjs = [];
	var towerIndicators = [];


	// Defaults
	var DEFAULT_TOW_IND_COLOR = 0x9cc5d6;
	var DEFAULT_TOW_IND_OPACITY = 0.75;


	// Tower model
	var towMod = loadModel( config.boardTheme.tower );
	towMod.then( function( model ) {

		for ( let i = 0; i < towerObjs.length; i++ ) {

			let tow = towerObjs[ i ];
			tow.loadModel( model );

		}

	} );


	//var towGeo = new THREE.BoxGeometry( 0.25, 2, 0.25 );
	//towGeo.translate( 0, 1, 0 );    // Set origin at bottom
	//var towMat = new THREE.MeshBasicMaterial( { color: 0xff000 } );


	// Tower indicator
	var towIndGeo = new THREE.BoxGeometry( 2, 2, 2 );
	towIndGeo.translate( 0, 1, 0 );    // Set origin at bottom
	var towIndMat = new THREE.MeshBasicMaterial();
	towIndMat.color = DEFAULT_TOW_IND_COLOR;
	towIndMat.transparent = true;
	towIndMat.opacity = DEFAULT_TOW_IND_OPACITY;


	// Tower object
	var Tower = function( name, pos, squares ) {

		// Object3D constructor
		THREE.Object3D.apply( this );

		// Properties
		this.type = 'tower';
		this.name = name;
		this.pos = pos;    // Integer position (e.g. 1 for T1)

		// Position
		var vec = posToVector3( TOWER_POSITIONS[ pos -1 ] );
		this.position.set( vec.x, vec.y, vec.z );

		// Active/inactive
		this.active = false;    // TODO: Make private somehow

		this.activate = function() {

			this.active = true;
			model.visible = true;

			// Add to towers array if it doesn't exist yet
			if ( towers.indexOf( this ) === -1 ) {

				towers.push( this );

				// Update draggable
				// TODO: Better way to update draggable?
				draggable.push( model );

			}

			// Activate squares
			for ( let i = 0; i < this.squares.length; i++ ) {

				this.squares[ i ].activate();

			}

		}

		this.deactivate = function() {

			this.active = false;
			model.visible = false;

			// Reset position to relativ origin
			model.position.set( 0, 0, 0 );

			// Remove from towers array if it exists
			if ( towers.indexOf( this ) !== -1 ) {

				towers.splice( towers.indexOf( this ), 1 );

				// Update draggable
				// TODO: Better way to update draggable?
				draggable.splice( draggable.indexOf( model ), 1 );

			}

			// Deactivate squares
			for ( let i = 0; i < this.squares.length; i++ ) {

				this.squares[ i ].deactivate();

			}

		}

		// Tower model
		var model = new THREE.Mesh(); // Geo + mat set once model is loaded
		this.add( model );

		this.loadModel = function( mod ) {

			model.geometry = mod.geometry;
			model.material = mod.material;

		}


		// Tower Indicator
		var mat = towIndMat.clone();
		var ind = new THREE.Mesh( towIndGeo, mat );
		ind.material.visible = false;
		this.add( ind );
		towerIndicators.push( ind );

		// Squares
		this.squares = squares;

		for ( let squ = 0; squ < this.squares.length; squ++ ) {

			model.attach( this.squares[ squ ] );

		}

		// Highlight
		this.highlight = function( color = DEFAULT_TOW_IND_COLOR ) {

			// Highlight indicator
			ind.material.visible = true;
			color = new THREE.Color( color );
			ind.material.color = color;

		}

		this.unhighlight = function() { ind.material.visible = false; }

	}

	Tower.prototype = Object.create( THREE.Object3D.prototype );
	Tower.prototype.constructor = Tower;


	// Add towers
	// TODO: Modify to use TOWER_SQUARES_OBJ
	for ( let tow = 0; tow < TOWER_SQUARES.length; tow++ ) {

		let squares = [];

		for ( let squ = 0; squ < TOWER_SQUARES[ tow ].length; squ++ ) {

			// Get position
			let pos = TOWER_SQUARES[ tow ][ squ ];
			let name = 'abcdef'.charAt(pos.f) + (pos.r + 1) + '_' + (pos.l + 1);

			// Add square
			let square = new Square( name, pos );
			squares.push( square );

		}

		let pos = tow + 1;
		let name = 'T' + pos;

		// Add tower
		let tower = new Tower( name, pos, squares );
		towerObjs.push( tower );
		tower.deactivate();

		board.add( tower );

	}


	// ----------------------------------------------------------------
	// Pieces
	// ----------------------------------------------------------------

	var pieces = [];


	//var pieHeight = 1.25;

	//function pieGeo( height ) {

	//	var pieGeo = new THREE.BoxGeometry( 0.5, height, 0.5 );
	//	pieGeo.translate( 0, height / 2 + 0.01, 0 );    // Set Origin at bottom

	//	return pieGeo;

	//}

	var pieModels;

	var promises = [ loadModel( config.pieceTheme.wP ),
					 loadModel( config.pieceTheme.wN ),
					 loadModel( config.pieceTheme.wB ),
					 loadModel( config.pieceTheme.wR ),
					 loadModel( config.pieceTheme.wQ ),
					 loadModel( config.pieceTheme.wK ),
					 loadModel( config.pieceTheme.bP ),
					 loadModel( config.pieceTheme.bN ),
					 loadModel( config.pieceTheme.bB ),
					 loadModel( config.pieceTheme.bR ),
					 loadModel( config.pieceTheme.bQ ),
					 loadModel( config.pieceTheme.bK ) ];


	Promise.all( promises ).then( function( models ) {

		// Pieces: Pawn, Knight, Bishop, Rook, Queen, King
		// white and black
		pieModels = {

			wP: models[ 0 ],
			wN: models[ 1 ],
			wB: models[ 2 ],
			wR: models[ 3 ],
			wQ: models[ 4 ],
			wK: models[ 5 ],
			bP: models[ 6 ],
			bN: models[ 7 ],
			bB: models[ 8 ],
			bR: models[ 9 ],
			bQ: models[ 10 ],
			bK: models[ 11 ]

		};

		for ( let i = 0; i < pieces.length; i++ ) {

			let pie = pieces[ i ];
			pie.loadModel( pieModels[ pie.name ] );

		}

	} );


	//var pieMatWhite = new THREE.MeshBasicMaterial( { color: 0xf7f7f7 } );
	//var pieMatBlack = new THREE.MeshBasicMaterial( { color: 0x3a3a3a } );

	// Piece object
	var Piece = function( name ) {

		// Mesh constructor
		THREE.Mesh.apply( this );

		// Properties
		this.type = 'piece';
		this.name = name;

		// Piece model
		this.loadModel = function( mod ) {

			this.geometry = mod.geometry;
			this.material = mod.material;

			this.geometry.translate( 0, 0.001, 0 );    // Set Origin at bottom

		}

		if ( pieModels !== undefined ) { this.loadModel( pieModels[ name ] ); }

	}

	Piece.prototype = Object.create( THREE.Mesh.prototype );
	Piece.prototype.constructor = Piece;


	// ----------------------------------------------------------------
	// Moving
	// ----------------------------------------------------------------

	function addPiece( square, piece ) {

		square.setPiece( new Piece( piece ) );

	}

	function addTower( tower ) { tower.activate(); }

	function add( target, piece ) {

		var oldPos = generatePos();

		if ( typeof( target ) === 'string' ) {

			target = board.getObjectByName( target );

		}

		// Add tower or piece
		if ( target.type === 'square' ) {

			addPiece( target, piece );

		} else {

			addTower( target );

		}

		callOnChange( oldPos );

	}

	function removePiece( square ) {

		// Convert pieces to squares
		if ( square.type === 'piece' ) { square = square.parent; }

		square.setPiece( null );

	}

	function removeTower( tower ) {

		// Convert towerModels to towers
		if ( tower.type === 'Mesh' ) { tower = tower.parent; }

		tower.deactivate();

		// TODO: Shouldn't this be done in square.deactivate method?
		// Remove pieces
		for ( let i = 0; i < tower.squares.length; i++ ) {

			tower.squares[ i ].setPiece( null );

		}

	}

	function remove( target ) {

		var oldPos = generatePos();

		if ( typeof( target ) === 'string' ) {

			target = board.getObjectByName( target );

		}

		// remove tower or piece
		if ( target.type === 'square' || target.type === 'piece' ) {

			removePiece( target );

		} else {

			// This must be else and not else if type === 'tower'
			// Because the dragged tower is of type Mesh
			// removeTower handles this
			removeTower( target );

		}

		callOnChange( oldPos );

	}


	function movePiece( source, target ) {

		// Convert pieces to squares
		if ( source.type === 'piece' ) { source = source.parent; }
		if ( target.type === 'piece' ) { target = target.parent; }

		// Move piece while overwriting target piece
		if ( source !== target ) {

			let piece = source.getPiece()
			source.setPiece( null );
			target.setPiece( piece );

		} else {

			// Move to self (resets relative position)
			target.setPiece( source.getPiece() );

		}

	}

	function moveTower( source, target ) {

		// Convert towerModels to towers
		if ( source.type === 'Mesh' ) { source = source.parent; }
		if ( target.type === 'Mesh' ) { target = target.parent; }

		// Move pieces
		for ( let i = 0; i < source.squares.length; i++ ) {

			movePiece( source.squares[ i ], target.squares[ i ] );

		}

		// Update tower positions
		// Needs to be done after moving, as deactivating removes pieces
		source.deactivate();
		target.activate();

	}

	// TODO: Handle invalid moves (do nothing)
	function move( source, target ) {

		var oldPos = generatePos();

		// Convert string-names to objects (squares, pieces, towers)
		if ( typeof( source ) === 'string' ) {

			source = board.getObjectByName( source );

		}

		if ( typeof( target ) === 'string' ) {

			target = board.getObjectByName( target );

		}

		// Move tower or piece
		if ( ( source.type === 'square' || source.type === 'piece' ) &&
			 ( target.type === 'square' || target.type === 'piece' ) ) {

			movePiece( source, target );

		} else {

			// This must be else and not else if type === 'tower'
			// because the dragged tower is of type Mesh
			// moveTower handles this
			moveTower( source, target );

		}

		callOnMoveEnd( oldPos );
		callOnSnapEnd( source, target );
		callOnChange( oldPos );

	}


	// ----------------------------------------------------------------
	// Dragging
	// ----------------------------------------------------------------

	var selected = null, target = null, oldTar = null;
	var snap_pos = new THREE.Vector3();

	var mouse = new THREE.Vector2();
	var raycaster = new THREE.Raycaster();

	function onMouseMove( event ) {

		event.preventDefault();

		// Get mouse position
		var rect = renderer.domElement.getBoundingClientRect();
		mouse.x = ( ( event.clientX - rect.left ) / rect.width ) * 2 - 1;
		mouse.y = - ( ( event.clientY - rect.top ) / rect.height ) * 2 + 1;

		// Hightlight hovered squares
		if ( selected !== null ) {

			let selectable = [];
			if ( selected.type === 'piece' ) { selectable = squares; }
			if ( selected.parent.type === 'tower' ) { selectable = towerIndicators; }

			raycaster.setFromCamera( mouse, camera );
			let intersects = raycaster.intersectObjects( selectable, true );

			// At least one object apart from the selected one has been hit
			if ( intersects.length > 0 ) {

				for ( let i = 0; i < intersects.length; i++ ) {

					let intObj = intersects[ i ].object;

					// Ignore selected object to prevent moving to itself
					if ( intObj !== selected && intObj.parent !== selected ) {

						// If target changed
						if ( target !== intObj.parent ) {

							if ( target !== null ) { target.unhighlight(); }
							target = intObj.parent;
							target.highlight();

							if ( oldTar !== null ) {

								callOnDragMove( target, oldTar, selected );

							}
							oldTar = target;

						}

						break;

					} else {

						// TODO: Better way to stop squares from staying highlighted?
						if ( target !== null ) { target.unhighlight(); }
						target = null;

					}

				}

			} else {

				if ( target !== null ) { target.unhighlight(); }
				target = null;

			}

		}

	}


	function onDragStart( event ) {

		orbitControls.enabled = false;

		if ( event.object !== undefined ) {

			// Get selected object
			selected = event.object;

			// Store position for snapback
			snap_pos = selected.position.clone();

			var onDragStart = callOnDragStart( event.object );

			if ( onDragStart === false ) {

				// Cancel Drag
				// TODO: Surely this needs to be enabled again somewhere?
				dragControls.enabled = false;
				onDragEnd();

			}

		}

	}


	function onDragEnd( event ) {

		orbitControls.enabled = config.turnable;

		if ( selected !== null ) {

			var action = 'move';

			// Save position for onDrop
			var oldPos = position();

			if ( target !== null ) { target.unhighlight(); }
			else {

				target = 'offboard';

				if( config.dropOffBoard === 'trash' ) { action = 'trash'; }
				else { action = 'snapback' }

			}

			// TODO: new Pos is always the same as oldPos because move() is called after onDrop
			var onDrop = callOnDrop( selected.parent, target, selected, oldPos );

			// Overwrite onDrop action
			if ( onDrop === 'trash' ) { action = 'trash'; }
			else if ( onDrop === 'snapback' ) { action = 'snapback'; }

			if ( action === 'trash' ) {

				// Trash piece/tower
				remove( selected );

			} else if ( action === 'snapback' ) {

				// Snapback piece/tower
				selected.position.set( snap_pos.x , snap_pos.y, snap_pos.z );

				callOnSnapbackEnd( selected, selected.parent );

			} else if ( action === 'move' ) {

				move( selected, target );

			}

			selected = null;
			target = null;

		}

	}


	// ----------------------------------------------------------------
	// Fen and position loading
	// ----------------------------------------------------------------

	function resetBoard() {

		var length = towers.length;    // Needed, as loop removes elements
		for ( let i = 0; i < length; i++ ) { towers[ 0 ].deactivate(); }

		length = pieces.length;    // Needed, as loop removes elements
		for ( let i = 0; i < length; i++ ) {

			pieces[ 0 ].parent.setPiece( null );    // Remove piece from square

		}

	}


	// TODO: Check if valid fen string
	function loadFen( fen ) {

		var oldPos = generatePos();

		// Reset board
		resetBoard();

		var fields = fen.split( ' ' );


		// Get tower positions
		var towPos = fields[ 0 ].split( '' );

		// Activate towers
		for ( let i = 0; i < towPos.length; i++ ) {

			// Convert 12-base positions to integer
			towPos[ i ] = parseInt( towPos[ i ], 13 );

			let tower = board.getObjectByProperty( 'pos', towPos[ i ] );
			tower.activate();

		}


		// Get piece positions

		// Remove slashes
		var position = fields[ 1 ].split( '/' );
		position = position.join( '' );

		// Expand empty squares
		for ( let i = 0; i < position.length; i++ ) {

			if ( '0123456789'.indexOf( position[ i ] ) !== -1 ) { // Is number

				// Replace number with number of spaces (3 ->    )
				let num = parseInt( position[ i ], 10 );
				let str = new Array( num + 1 ).join( ' ' );
				position = position.replace( position[ i ], str );

			}

		}

		// Place pieces
		var i = 0;

		for ( let l = 5; l >= 0; l-- ) {

			for ( let r = 9; r >= 0; r-- ) {

				for ( let f = 0; f <= 5; f++ ) {

					let piece = position[ i ];
					let pos = new Pos( f, r, l );
					let square = getObjectByPos( board, pos );

					// If a square exists and it is not on a inactive tower
					if ( square !== undefined  && square.parent.parent.active !== false ) {

						// If the square is not supposed to be empty
						if ( piece !== ' ' ) {

							// Convert FEN piece to piece code (wP, bQ, ...)
							if ( piece.toLowerCase() === piece ) {

								piece = 'b' + piece.toUpperCase();

							}
							else {

								piece = 'w' + piece.toUpperCase();

							}

							// Add piece to square
							square.setPiece( new Piece( piece ) );

						}

						i++;

					}

				}

			}

		}

		callOnChange( oldPos );

	}


	function generateFen() {

		// Get tower positions
		var towPos = '';

		for ( let i = 0; i < towers.length; i++ ) {

			if ( towers[i].active ) {

				// Convert integer to 12-base position
				let pos = towers[ i ].pos.toString( 13 );

				// Add to tower positions
				towPos += pos;

			}

		}


		// Get piece positions
		var piePos = '';

		for ( let l = 5; l >= 0; l-- ) {

			for ( let r = 9; r >= 0; r-- ) {

				let emptySqu = 0;

				for ( let f = 0; f <= 5; f++ ) {

					let pos = new Pos( f, r, l );
					let square = getObjectByPos( board, pos );

					// If a square exists and it is not on a inactive tower
					if ( square !== undefined  && square.parent.parent.active !== false ) {

						let piece = square.getPiece();

						// If the square is not empty
						if ( piece ) {

							// Add piece or empty squares to piece positions
							if ( emptySqu > 0) { piePos += emptySqu; }

							// Convert piece code to FEN piece
							let pieCode = '';

							if ( piece.name[ 0 ] === 'b' ) {

								pieCode = piece.name[ 1 ].toLowerCase();

							} else {

								pieCode = piece.name[ 1 ].toUpperCase();

							}

							piePos += pieCode;
							emptySqu = 0;

						} else {

							emptySqu++;

						}

					}

				}

				if ( emptySqu > 0) { piePos += emptySqu; }

				// Only add row separator if row is now empty or last row
				if ( !( piePos.endsWith('/') ) && !( l === 0 && r <= 1 ) ) {

					piePos += '/';

				}

			}

		}

		// Compose fen string
		var fen = towPos + ' ' + piePos;

		return fen;

	}


	function loadPos( pos ) {

		if ( isValidPos( pos ) ) {

			var oldPos = generatePos();

			// Reset board
			resetBoard();

			// Iterate over position object (e.g. a3_1: 'wP')
			for ( let prop in pos ) {

				if ( pos.hasOwnProperty( prop ) ) {

					// Get square/tower
					let obj = board.getObjectByName( prop );

					if ( obj.type === 'square' ) {

						// Add piece to square
						obj.setPiece( new Piece( pos[ prop ] ) );

					} else if ( obj.type === 'tower' && pos[ prop ] ) {

						// Activate Tower
						obj.activate();

					}

				}

			}

			callOnChange( oldPos );

		}

	}


	function generatePos() {

		var pos = {};

		// Add towers to position object
		for ( let i = 0; i < towers.length; i++ ) {

			let tow = towers[ i ];

			if ( tow.active ) { pos[ tow.name ] = true; }

		}

		// Add squares to position object
		for ( let i = 0; i < squares.length; i++ ) {

			let squ = squares[ i ];
			let pie = squ.getPiece();

			// If square is occupied
			if ( pie !== null ) { pos[ squ.name ] = pie.name; }

		}

		return pos

	}


	function position( arg ) {

		if ( arg === undefined ) { return generatePos(); }

		else if ( typeof( arg ) === 'string' && arg.toLowerCase() === 'fen' ) {

			return generateFen();

		}

		else if ( typeof( arg ) === 'string' && arg.toLowerCase() === 'start' ) {

			loadFen( DEFAULT_STARTING_FEN );

		}

		else if ( typeof( arg ) === 'object' ) { loadPos( arg ); }

		else if ( typeof( arg ) === 'string' ) { loadFen( arg ); }

	}


	// ----------------------------------------------------------------
	// Stand enabling/disabling
	// ----------------------------------------------------------------

	function stand( enabled ) {

		if ( enabled === true ) { standMod.visible = true; }
		else if ( enabled === false ) { standMod.visible = false; }
		else { return standMod.visible; }

	}


	// ----------------------------------------------------------------
	// ----------------------------------------------------------------
	// API
	// ----------------------------------------------------------------
	// ----------------------------------------------------------------

	// Load position
	if ( config.position !== undefined ) {

		position( config.position );

	} else { loadFen( EMPTY_BOARD_FEN ); }

	// Return object with API methods
	return {


		add: function( target, piece ) { add( target, piece ); },

		remove: function( target ) { remove( target ); },

		move: function( args ) {

			// If no moves exist, do nothing
			if ( arguments.length === 0 ) { return; }

			for ( let i = 0; i < arguments.length; i++ ) {

				if ( typeof( arguments[ i ] ) !== 'string' ) { continue; }

				let mov = arguments[ i ];

				// Remove whitespace
				mov = mov.replace( /\s/g, '' );

				// Perform move
				mov = mov.split( '-' );
				move( mov[ 0 ], mov[ 1 ] );

			}

			return generatePos();

		},

		// TODO: Reset towers + remove pieces, remove towers + pieces or only remove pieces?
		clear: function() {

			loadFen( EMPTY_BOARD_FEN );
			//resetBoard();
			// foreach square in squares: setPiece(null)

		},

		position: function( arg ) { return position( arg ); },

		fen: function() { return position( 'fen' ); },

		start: function() { position( 'start' ); },

		stand: function( enabled ) { return stand( enabled ); },

		orientation: function( arg ) {

			if ( arguments.length === 0 ) {

				// TODO: Check if currentOrientation is set and return that instead
				return { x: Number ( camera.position.x.toFixed(2) ),
						 y: Number ( camera.position.y.toFixed(2) ),
						 z: Number ( camera.position.z.toFixed(2) ) }

			}

			if ( typeof( arg ) === 'string' && arg.toLowerCase() === 'white' ) {

				camera.position.set( ORIENTATION_WHITE.x,
									 ORIENTATION_WHITE.y,
									 ORIENTATION_WHITE.z );

				camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

				currentOrientation = 'white';

			}

			if ( typeof( arg ) === 'string' && arg.toLowerCase() === 'black' ) {

				camera.position.set( ORIENTATION_BLACK.x,
									 ORIENTATION_BLACK.y,
									 ORIENTATION_BLACK.z );

				camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

				currentOrientation = 'black';

			}

			if ( typeof( arg ) === 'string' && arg.toLowerCase() === 'flip' ) {

				if ( currentOrientation == 'white' ) {

					this.orientation( 'black' );

				} else if ( currentOrientation == 'black' ) {

					this.orientation( 'white' );

				}

			}

			if ( typeof( arg ) === 'object' && ( typeof ( arg.x ) === 'number' ||
												 typeof ( arg.y ) === 'number' ||
												 typeof ( arg.z ) === 'number' ) ) {

				camera.position.set( arg.x, arg.y, arg.z );
				camera.lookAt( new THREE.Vector3( 0, 0, 0 ) );

			}
		}


	}


}
export { Tridchessboard };
