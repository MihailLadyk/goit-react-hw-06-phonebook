(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={list:"Contacts_list__OYKqZ",button:"Contacts_button__3JXhN",list_el:"Contacts_list_el__29PcY"}},12:function(t,e,n){t.exports={form__field:"ContactsCreator_form__field__3z-Wc",text:"ContactsCreator_text__1cYoF",button:"ContactsCreator_button__Q9yaK"}},18:function(t,e,n){t.exports={text:"App_text__3CNwY"}},19:function(t,e,n){t.exports={form__field:"Filter_form__field__2IYMT"}},32:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(4),o=n(10),i=n.n(o),s=n(5),u=n(6),l=n(8),b=n(7),j=n(18),f=n.n(j),d=n(11),h=n.n(d),O="contacts/add",p="contacts/remove",m=n(34),_=n(2),x=Object(_.b)(O,(function(t){return{payload:{id:Object(m.a)(),name:t.name,number:t.number}}})),C=Object(_.b)(p),v=n(1);var g,y={deleteContact:C},N=Object(r.b)(null,y)((function(t){return Object(v.jsx)("div",{children:Object(v.jsx)("ul",{className:h.a.list,children:t.contacts.map((function(e){return Object(v.jsxs)("li",{className:h.a.list_el,children:[Object(v.jsx)("p",{children:e.name}),Object(v.jsx)("p",{children:e.number}),Object(v.jsx)("button",{onClick:function(){return t.deleteContact(e.id)},className:h.a.button,children:"Delete"})]},e.id)}))})})})),w=n(12),k=n.n(w),S=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={text:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.addContact({name:t.state.text,number:t.state.number})},t.textChange=function(e){t.setState({text:e.target.value})},t.numberChange=function(e){t.setState({number:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{type:"input",onChange:this.textChange,placeholder:"Name",className:k.a.form__field}),Object(v.jsx)("input",{type:"number",placeholder:"Number",onChange:this.numberChange,className:k.a.form__field}),Object(v.jsx)("button",{className:k.a.button,children:"Add contact"})]})}}]),n}(c.Component),F={addContact:x},Y=Object(r.b)(null,F)(S),A=n(19),J=n.n(A),D=Object(_.b)("filter/change"),I=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this;return Object(v.jsx)("div",{children:Object(v.jsx)("input",{placeholder:"Filter",type:"input",onChange:function(e){return t.props.onFilterChange(e.target.value)},className:J.a.form__field})})}}]),n}(c.Component),K={onFilterChange:D},L=Object(r.b)((function(t){return{filter:t.filter}}),K)(I),M=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).handleFilter=function(e){t.setState({filter:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(Y,{}),Object(v.jsx)(L,{}),Object(v.jsx)("h2",{className:f.a.text,children:"Contacts"}),Object(v.jsx)(N,{contacts:this.props.contacts})]})}}]),n}(c.Component),q=Object(r.b)((function(t){return{contacts:t.contacts.filter((function(e){return e.name.toLowerCase().includes(t.filter.toLowerCase())}))}}))(M),z=n(9),B=n(20),E=Object(_.c)([],(g={},Object(z.a)(g,O,(function(t,e){return[].concat(Object(B.a)(t),[e.payload])})),Object(z.a)(g,p,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),g)),P=Object(_.c)("",Object(z.a)({},"filter/change",(function(t,e){return e.payload}))),Q=Object(_.a)({reducer:{contacts:E,filter:P}});i.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(r.a,{store:Q,children:Object(v.jsx)(q,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e2f962a0.chunk.js.map