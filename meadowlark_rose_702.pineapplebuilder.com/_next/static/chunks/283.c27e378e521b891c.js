"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{7283:function(e,t,i){let n,r;i.d(t,{ZP:function(){return V}});var s,a,o,h=i(655);let l=/\r\n|[\n\r]/g;function c(e,t){let i=0,n=1;for(let r of e.body.matchAll(l)){if("number"==typeof r.index||function(e,t){let i=Boolean(e);if(!i)throw Error(null!=t?t:"Unexpected invariant triggered.")}(!1),r.index>=t)break;i=r.index+r[0].length,n+=1}return{line:n,column:t+1-i}}function p(e,t){let i=e.locationOffset.column-1,n="".padStart(i)+e.body,r=t.line-1,s=e.locationOffset.line-1,a=t.line+s,o=1===t.line?i:0,h=t.column+o,l=`${e.name}:${a}:${h}
`,c=n.split(/\r\n|[\n\r]/g),p=c[r];if(p.length>120){let e=Math.floor(h/80),t=[];for(let e=0;e<p.length;e+=80)t.push(p.slice(e,e+80));return l+u([[`${a} |`,t[0]],...t.slice(1,e+1).map(e=>["|",e]),["|","^".padStart(h%80)],["|",t[e+1]]])}return l+u([[`${a-1} |`,c[r-1]],[`${a} |`,p],["|","^".padStart(h)],[`${a+1} |`,c[r+1]]])}function u(e){let t=e.filter(([e,t])=>void 0!==t),i=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(i)+(t?" "+t:"")).join("\n")}class d extends Error{constructor(e,...t){var i,n,r,s;let{nodes:a,source:o,positions:h,path:l,originalError:p,extensions:u}=function(e){let t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=l?l:void 0,this.originalError=null!=p?p:void 0,this.nodes=E(Array.isArray(a)?a:a?[a]:void 0);let f=E(null===(i=this.nodes)||void 0===i?void 0:i.map(e=>e.loc).filter(e=>null!=e));this.source=null!=o?o:null==f?void 0:null===(n=f[0])||void 0===n?void 0:n.source,this.positions=null!=h?h:null==f?void 0:f.map(e=>e.start),this.locations=h&&o?h.map(e=>c(o,e)):null==f?void 0:f.map(e=>c(e.source,e.start));let N="object"==typeof(s=null==p?void 0:p.extensions)&&null!==s?null==p?void 0:p.extensions:void 0;this.extensions=null!==(r=null!=u?u:N)&&void 0!==r?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=p&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,d):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes){for(let i of this.nodes)if(i.loc){var t;e+="\n\n"+p((t=i.loc).source,c(t.source,t.start))}}else if(this.source&&this.locations)for(let t of this.locations)e+="\n\n"+p(this.source,t);return e}toJSON(){let e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function E(e){return void 0===e||0===e.length?void 0:e}function f(e,t,i){return new d(`Syntax Error: ${i}`,void 0,e,[t])}var N=i(2380);(s=n||(n={})).QUERY="QUERY",s.MUTATION="MUTATION",s.SUBSCRIPTION="SUBSCRIPTION",s.FIELD="FIELD",s.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",s.FRAGMENT_SPREAD="FRAGMENT_SPREAD",s.INLINE_FRAGMENT="INLINE_FRAGMENT",s.VARIABLE_DEFINITION="VARIABLE_DEFINITION",s.SCHEMA="SCHEMA",s.SCALAR="SCALAR",s.OBJECT="OBJECT",s.FIELD_DEFINITION="FIELD_DEFINITION",s.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",s.INTERFACE="INTERFACE",s.UNION="UNION",s.ENUM="ENUM",s.ENUM_VALUE="ENUM_VALUE",s.INPUT_OBJECT="INPUT_OBJECT",s.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION";var T=i(7359),x=i(7392),m=i(8297);(a=r||(r={})).SOF="<SOF>",a.EOF="<EOF>",a.BANG="!",a.DOLLAR="$",a.AMP="&",a.PAREN_L="(",a.PAREN_R=")",a.SPREAD="...",a.COLON=":",a.EQUALS="=",a.AT="@",a.BRACKET_L="[",a.BRACKET_R="]",a.BRACE_L="{",a.PIPE="|",a.BRACE_R="}",a.NAME="Name",a.INT="Int",a.FLOAT="Float",a.STRING="String",a.BLOCK_STRING="BlockString",a.COMMENT="Comment";class A{constructor(e){let t=new N.WU(r.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;let e=this.token=this.lookahead();return e}lookahead(){let e=this.token;if(e.kind!==r.EOF)do if(e.next)e=e.next;else{let t=function(e,t){let i=e.source.body,n=i.length,s=t;for(;s<n;){let t=i.charCodeAt(s);switch(t){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++e.line,e.lineStart=s;continue;case 13:10===i.charCodeAt(s+1)?s+=2:++s,++e.line,e.lineStart=s;continue;case 35:return function(e,t){let i=e.source.body,n=i.length,s=t+1;for(;s<n;){let e=i.charCodeAt(s);if(10===e||13===e)break;if(_(e))++s;else if(k(i,s))s+=2;else break}return O(e,r.COMMENT,t,s,i.slice(t+1,s))}(e,s);case 33:return O(e,r.BANG,s,s+1);case 36:return O(e,r.DOLLAR,s,s+1);case 38:return O(e,r.AMP,s,s+1);case 40:return O(e,r.PAREN_L,s,s+1);case 41:return O(e,r.PAREN_R,s,s+1);case 46:if(46===i.charCodeAt(s+1)&&46===i.charCodeAt(s+2))return O(e,r.SPREAD,s,s+3);break;case 58:return O(e,r.COLON,s,s+1);case 61:return O(e,r.EQUALS,s,s+1);case 64:return O(e,r.AT,s,s+1);case 91:return O(e,r.BRACKET_L,s,s+1);case 93:return O(e,r.BRACKET_R,s,s+1);case 123:return O(e,r.BRACE_L,s,s+1);case 124:return O(e,r.PIPE,s,s+1);case 125:return O(e,r.BRACE_R,s,s+1);case 34:if(34===i.charCodeAt(s+1)&&34===i.charCodeAt(s+2))return function(e,t){let i=e.source.body,n=i.length,s=e.lineStart,a=t+3,o=a,h="",l=[];for(;a<n;){let n=i.charCodeAt(a);if(34===n&&34===i.charCodeAt(a+1)&&34===i.charCodeAt(a+2)){h+=i.slice(o,a),l.push(h);let n=O(e,r.BLOCK_STRING,t,a+3,(0,x.wv)(l).join("\n"));return e.line+=l.length-1,e.lineStart=s,n}if(92===n&&34===i.charCodeAt(a+1)&&34===i.charCodeAt(a+2)&&34===i.charCodeAt(a+3)){h+=i.slice(o,a),o=a+1,a+=4;continue}if(10===n||13===n){h+=i.slice(o,a),l.push(h),13===n&&10===i.charCodeAt(a+1)?a+=2:++a,h="",o=a,s=a;continue}if(_(n))++a;else if(k(i,a))a+=2;else throw f(e.source,a,`Invalid character within String: ${D(e,a)}.`)}throw f(e.source,a,"Unterminated string.")}(e,s);return function(e,t){let i=e.source.body,n=i.length,s=t+1,a=s,o="";for(;s<n;){let n=i.charCodeAt(s);if(34===n)return o+=i.slice(a,s),O(e,r.STRING,t,s+1,o);if(92===n){o+=i.slice(a,s);let t=117===i.charCodeAt(s+1)?123===i.charCodeAt(s+2)?function(e,t){let i=e.source.body,n=0,r=3;for(;r<12;){let e=i.charCodeAt(t+r++);if(125===e){if(r<5||!_(n))break;return{value:String.fromCodePoint(n),size:r}}if((n=n<<4|R(e))<0)break}throw f(e.source,t,`Invalid Unicode escape sequence: "${i.slice(t,t+r)}".`)}(e,s):function(e,t){let i=e.source.body,n=y(i,t+2);if(_(n))return{value:String.fromCodePoint(n),size:6};if(I(n)&&92===i.charCodeAt(t+6)&&117===i.charCodeAt(t+7)){let e=y(i,t+8);if(v(e))return{value:String.fromCodePoint(n,e),size:12}}throw f(e.source,t,`Invalid Unicode escape sequence: "${i.slice(t,t+6)}".`)}(e,s):function(e,t){let i=e.source.body,n=i.charCodeAt(t+1);switch(n){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw f(e.source,t,`Invalid character escape sequence: "${i.slice(t,t+2)}".`)}(e,s);o+=t.value,s+=t.size,a=s;continue}if(10===n||13===n)break;if(_(n))++s;else if(k(i,s))s+=2;else throw f(e.source,s,`Invalid character within String: ${D(e,s)}.`)}throw f(e.source,s,"Unterminated string.")}(e,s)}if((0,m.X1)(t)||45===t)return function(e,t,i){let n=e.source.body,s=t,a=i,o=!1;if(45===a&&(a=n.charCodeAt(++s)),48===a){if(a=n.charCodeAt(++s),(0,m.X1)(a))throw f(e.source,s,`Invalid number, unexpected digit after 0: ${D(e,s)}.`)}else s=C(e,s,a),a=n.charCodeAt(s);if(46===a&&(o=!0,a=n.charCodeAt(++s),s=C(e,s,a),a=n.charCodeAt(s)),(69===a||101===a)&&(o=!0,(43===(a=n.charCodeAt(++s))||45===a)&&(a=n.charCodeAt(++s)),s=C(e,s,a),a=n.charCodeAt(s)),46===a||(0,m.LQ)(a))throw f(e.source,s,`Invalid number, expected digit but got: ${D(e,s)}.`);return O(e,o?r.FLOAT:r.INT,t,s,n.slice(t,s))}(e,s,t);if((0,m.LQ)(t))return function(e,t){let i=e.source.body,n=i.length,s=t+1;for(;s<n;){let e=i.charCodeAt(s);if((0,m.HQ)(e))++s;else break}return O(e,r.NAME,t,s,i.slice(t,s))}(e,s);throw f(e.source,s,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":_(t)||k(i,s)?`Unexpected character: ${D(e,s)}.`:`Invalid character: ${D(e,s)}.`)}return O(e,r.EOF,n,n)}(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===r.COMMENT);return e}}function _(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function k(e,t){return I(e.charCodeAt(t))&&v(e.charCodeAt(t+1))}function I(e){return e>=55296&&e<=56319}function v(e){return e>=56320&&e<=57343}function D(e,t){let i=e.source.body.codePointAt(t);if(void 0===i)return r.EOF;if(i>=32&&i<=126){let e=String.fromCodePoint(i);return'"'===e?"'\"'":`"${e}"`}return"U+"+i.toString(16).toUpperCase().padStart(4,"0")}function O(e,t,i,n,r){let s=e.line,a=1+i-e.lineStart;return new N.WU(t,i,n,s,a,r)}function C(e,t,i){if(!(0,m.X1)(i))throw f(e.source,t,`Invalid number, expected digit but got: ${D(e,t)}.`);let n=e.source.body,r=t+1;for(;(0,m.X1)(n.charCodeAt(r));)++r;return r}function y(e,t){return R(e.charCodeAt(t))<<12|R(e.charCodeAt(t+1))<<8|R(e.charCodeAt(t+2))<<4|R(e.charCodeAt(t+3))}function R(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}var g=i(1270);class L{constructor(e,t){let i=(0,g.T)(e)?e:new g.H(e);this._lexer=new A(i),this._options=t}parseName(){let e=this.expectToken(r.NAME);return this.node(e,{kind:T.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:T.h.DOCUMENT,definitions:this.many(r.SOF,this.parseDefinition,r.EOF)})}parseDefinition(){if(this.peek(r.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===r.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw f(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){let e;let t=this._lexer.token;if(this.peek(r.BRACE_L))return this.node(t,{kind:T.h.OPERATION_DEFINITION,operation:N.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let i=this.parseOperationType();return this.peek(r.NAME)&&(e=this.parseName()),this.node(t,{kind:T.h.OPERATION_DEFINITION,operation:i,name:e,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(r.NAME);switch(e.value){case"query":return N.ku.QUERY;case"mutation":return N.ku.MUTATION;case"subscription":return N.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(r.PAREN_L,this.parseVariableDefinition,r.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:T.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(r.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(r.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(r.DOLLAR),this.node(e,{kind:T.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:T.h.SELECTION_SET,selections:this.many(r.BRACE_L,this.parseSelection,r.BRACE_R)})}parseSelection(){return this.peek(r.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e,t;let i=this._lexer.token,n=this.parseName();return this.expectOptionalToken(r.COLON)?(e=n,t=this.parseName()):t=n,this.node(i,{kind:T.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(r.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(r.PAREN_L,t,r.PAREN_R)}parseArgument(e=!1){let t=this._lexer.token,i=this.parseName();return this.expectToken(r.COLON),this.node(t,{kind:T.h.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let e=this._lexer.token;this.expectToken(r.SPREAD);let t=this.expectOptionalKeyword("on");return!t&&this.peek(r.NAME)?this.node(e,{kind:T.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:T.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){var e;let t=this._lexer.token;return(this.expectKeyword("fragment"),(null===(e=this._options)||void 0===e?void 0:e.allowLegacyFragmentVariables)===!0)?this.node(t,{kind:T.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(t,{kind:T.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){let t=this._lexer.token;switch(t.kind){case r.BRACKET_L:return this.parseList(e);case r.BRACE_L:return this.parseObject(e);case r.INT:return this._lexer.advance(),this.node(t,{kind:T.h.INT,value:t.value});case r.FLOAT:return this._lexer.advance(),this.node(t,{kind:T.h.FLOAT,value:t.value});case r.STRING:case r.BLOCK_STRING:return this.parseStringLiteral();case r.NAME:switch(this._lexer.advance(),t.value){case"true":return this.node(t,{kind:T.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:T.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:T.h.NULL});default:return this.node(t,{kind:T.h.ENUM,value:t.value})}case r.DOLLAR:if(e){if(this.expectToken(r.DOLLAR),this._lexer.token.kind===r.NAME){let e=this._lexer.token.value;throw f(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this._lexer.advance(),this.node(e,{kind:T.h.STRING,value:e.value,block:e.kind===r.BLOCK_STRING})}parseList(e){let t=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:T.h.LIST,values:this.any(r.BRACKET_L,t,r.BRACKET_R)})}parseObject(e){let t=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:T.h.OBJECT,fields:this.any(r.BRACE_L,t,r.BRACE_R)})}parseObjectField(e){let t=this._lexer.token,i=this.parseName();return this.expectToken(r.COLON),this.node(t,{kind:T.h.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){let t=[];for(;this.peek(r.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let t=this._lexer.token;return this.expectToken(r.AT),this.node(t,{kind:T.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e;let t=this._lexer.token;if(this.expectOptionalToken(r.BRACKET_L)){let i=this.parseTypeReference();this.expectToken(r.BRACKET_R),e=this.node(t,{kind:T.h.LIST_TYPE,type:i})}else e=this.parseNamedType();return this.expectOptionalToken(r.BANG)?this.node(t,{kind:T.h.NON_NULL_TYPE,type:e}):e}parseNamedType(){return this.node(this._lexer.token,{kind:T.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(r.STRING)||this.peek(r.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");let i=this.parseConstDirectives(),n=this.many(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);return this.node(e,{kind:T.h.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:n})}parseOperationTypeDefinition(){let e=this._lexer.token,t=this.parseOperationType();this.expectToken(r.COLON);let i=this.parseNamedType();return this.node(e,{kind:T.h.OPERATION_TYPE_DEFINITION,operation:t,type:i})}parseScalarTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");let i=this.parseName(),n=this.parseConstDirectives();return this.node(e,{kind:T.h.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:n})}parseObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");let i=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:T.h.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:n,directives:r,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(r.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseFieldDefinition,r.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),n=this.parseArgumentDefs();this.expectToken(r.COLON);let s=this.parseTypeReference(),a=this.parseConstDirectives();return this.node(e,{kind:T.h.FIELD_DEFINITION,description:t,name:i,arguments:n,type:s,directives:a})}parseArgumentDefs(){return this.optionalMany(r.PAREN_L,this.parseInputValueDef,r.PAREN_R)}parseInputValueDef(){let e;let t=this._lexer.token,i=this.parseDescription(),n=this.parseName();this.expectToken(r.COLON);let s=this.parseTypeReference();this.expectOptionalToken(r.EQUALS)&&(e=this.parseConstValueLiteral());let a=this.parseConstDirectives();return this.node(t,{kind:T.h.INPUT_VALUE_DEFINITION,description:i,name:n,type:s,defaultValue:e,directives:a})}parseInterfaceTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");let i=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:T.h.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:n,directives:r,fields:s})}parseUnionTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");let i=this.parseName(),n=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:T.h.UNION_TYPE_DEFINITION,description:t,name:i,directives:n,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(r.EQUALS)?this.delimitedMany(r.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");let i=this.parseName(),n=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:T.h.ENUM_TYPE_DEFINITION,description:t,name:i,directives:n,values:r})}parseEnumValuesDefinition(){return this.optionalMany(r.BRACE_L,this.parseEnumValueDefinition,r.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),n=this.parseConstDirectives();return this.node(e,{kind:T.h.ENUM_VALUE_DEFINITION,description:t,name:i,directives:n})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw f(this._lexer.source,this._lexer.token.start,`${S(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");let i=this.parseName(),n=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:T.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:n,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(r.BRACE_L,this.parseInputValueDef,r.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===r.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let t=this.parseConstDirectives(),i=this.optionalMany(r.BRACE_L,this.parseOperationTypeDefinition,r.BRACE_R);if(0===t.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:T.h.SCHEMA_EXTENSION,directives:t,operationTypes:i})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let t=this.parseName(),i=this.parseConstDirectives();if(0===i.length)throw this.unexpected();return this.node(e,{kind:T.h.SCALAR_TYPE_EXTENSION,name:t,directives:i})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let t=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:T.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:n,fields:r})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let t=this.parseName(),i=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(0===i.length&&0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:T.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:n,fields:r})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let t=this.parseName(),i=this.parseConstDirectives(),n=this.parseUnionMemberTypes();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:T.h.UNION_TYPE_EXTENSION,name:t,directives:i,types:n})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let t=this.parseName(),i=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:T.h.ENUM_TYPE_EXTENSION,name:t,directives:i,values:n})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let t=this.parseName(),i=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();if(0===i.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:T.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:n})}parseDirectiveDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(r.AT);let i=this.parseName(),n=this.parseArgumentDefs(),s=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let a=this.parseDirectiveLocations();return this.node(e,{kind:T.h.DIRECTIVE_DEFINITION,description:t,name:i,arguments:n,repeatable:s,locations:a})}parseDirectiveLocations(){return this.delimitedMany(r.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(n,t.value))return t;throw this.unexpected(e)}node(e,t){var i;return(null===(i=this._options)||void 0===i?void 0:i.noLocation)!==!0&&(t.loc=new N.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){let t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw f(this._lexer.source,t.start,`Expected ${b(e)}, found ${S(t)}.`)}expectOptionalToken(e){let t=this._lexer.token;return t.kind===e&&(this._lexer.advance(),!0)}expectKeyword(e){let t=this._lexer.token;if(t.kind===r.NAME&&t.value===e)this._lexer.advance();else throw f(this._lexer.source,t.start,`Expected "${e}", found ${S(t)}.`)}expectOptionalKeyword(e){let t=this._lexer.token;return t.kind===r.NAME&&t.value===e&&(this._lexer.advance(),!0)}unexpected(e){let t=null!=e?e:this._lexer.token;return f(this._lexer.source,t.start,`Unexpected ${S(t)}.`)}any(e,t,i){this.expectToken(e);let n=[];for(;!this.expectOptionalToken(i);)n.push(t.call(this));return n}optionalMany(e,t,i){if(this.expectOptionalToken(e)){let e=[];do e.push(t.call(this));while(!this.expectOptionalToken(i));return e}return[]}many(e,t,i){this.expectToken(e);let n=[];do n.push(t.call(this));while(!this.expectOptionalToken(i));return n}delimitedMany(e,t){this.expectOptionalToken(e);let i=[];do i.push(t.call(this));while(this.expectOptionalToken(e));return i}}function S(e){let t=e.value;return b(e.kind)+(null!=t?` "${t}"`:"")}function b(e){return e===r.BANG||e===r.DOLLAR||e===r.AMP||e===r.PAREN_L||e===r.PAREN_R||e===r.SPREAD||e===r.COLON||e===r.EQUALS||e===r.AT||e===r.BRACKET_L||e===r.BRACKET_R||e===r.BRACE_L||e===r.PIPE||e===r.BRACE_R?`"${e}"`:e}var w=new Map,F=new Map,P=!0,M=!1;function U(e){return e.replace(/[\s,]+/g," ").trim()}function B(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];"string"==typeof e&&(e=[e]);var n=e[0];return t.forEach(function(t,i){t&&"Document"===t.kind?n+=t.loc.source.body:n+=t,n+=e[i+1]}),function(e){var t=U(e);if(!w.has(t)){var i,n,r,s,a,o=function(e,t){let i=new L(e,t);return i.parseDocument()}(e,{experimentalFragmentVariables:M});if(!o||"Document"!==o.kind)throw Error("Not a valid GraphQL document.");w.set(t,(i=new Set,n=[],o.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var t,r=e.name.value,s=U((t=e.loc).source.body.substring(t.start,t.end)),a=F.get(r);a&&!a.has(s)?P&&console.warn("Warning: fragment with name "+r+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):a||F.set(r,a=new Set),a.add(s),i.has(s)||(i.add(s),n.push(e))}else n.push(e)}),r=(0,h.pi)((0,h.pi)({},o),{definitions:n}),(s=new Set(r.definitions)).forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(t){var i=e[t];i&&"object"==typeof i&&s.add(i)})}),(a=r.loc)&&(delete a.startToken,delete a.endToken),r))}return w.get(t)}(n)}var K={gql:B,resetCaches:function(){w.clear(),F.clear()},disableFragmentWarnings:function(){P=!1},enableExperimentalFragmentVariables:function(){M=!0},disableExperimentalFragmentVariables:function(){M=!1}};(o=B||(B={})).gql=K.gql,o.resetCaches=K.resetCaches,o.disableFragmentWarnings=K.disableFragmentWarnings,o.enableExperimentalFragmentVariables=K.enableExperimentalFragmentVariables,o.disableExperimentalFragmentVariables=K.disableExperimentalFragmentVariables,B.default=B;var V=B}}]);