(function(c){function e(a){var b;b=a|0;a-=b;if((a<=-1|a>=1?1:2)==1)_PyErr_SetString(HEAP[_PyExc_ValueError],k),b=-1;return b}function a(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var d,f,g=e(a);HEAP[c]=g;d=HEAP[c]==-1?1:3;a:do if(d==1){if(_PyErr_Occurred()==0){d=3;break a}f=0;d=8;break a}while(0);if(d==3)if(g=___errno_location(),HEAP[g]=0,g=FUNCTION_TABLE[b](c),d=g==0?4:7,d==4){var h=___errno_location();d=HEAP[h]==0?5:6;d==5&&(h=___errno_location(),
HEAP[h]=22);f=_PyErr_SetFromErrno(HEAP[_PyExc_ValueError])}else if(d==7){f=_PyStructSequence_New(aa);d=f==0?1:2;if(d==1)h=0;else if(d==2)if(d=_PyInt_FromLong(HEAP[g+20]+1900),HEAP[f+12]=d,d=_PyInt_FromLong(HEAP[g+16]+1),HEAP[f+12+4]=d,d=_PyInt_FromLong(HEAP[g+12]),HEAP[f+12+8]=d,d=_PyInt_FromLong(HEAP[g+8]),HEAP[f+12+12]=d,d=_PyInt_FromLong(HEAP[g+4]),HEAP[f+12+16]=d,d=_PyInt_FromLong(HEAP[g]),HEAP[f+12+20]=d,d=_PyInt_FromLong((HEAP[g+24]+6)%7),HEAP[f+12+24]=d,d=_PyInt_FromLong(HEAP[g+28]+1),HEAP[f+
12+28]=d,g=_PyInt_FromLong(HEAP[g+32]),HEAP[f+12+32]=g,d=_PyErr_Occurred()!=0?3:7,d==3){d=f!=0?4:6;a:do if(d==4){HEAP[f]-=1;if(HEAP[f]!=0)break a;FUNCTION_TABLE[HEAP[HEAP[f+4]+24]](f)}while(0);h=0}else d==7&&(h=f);f=h}STACKTOP=c;return f}function b(a,b,c){var e=STACKTOP;STACKTOP+=4;_memset(e,0,4);var d;HEAP[e]=0;a=_PyArg_ParseTuple(a,b,allocate([e,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;a:do if(a==1)d=0;else if(a==2){a=HEAP[e]==0|HEAP[e]==__Py_NoneStruct?3:4;if(a==3)d=g(),HEAP[c]=
d;else if(a==4)if(d=_PyFloat_AsDouble(HEAP[e]),a=_PyErr_Occurred()!=0?5:6,a==5){d=0;break a}else a==6&&(HEAP[c]=d);d=1}while(0);STACKTOP=e;return d}function d(a,b){var c=STACKTOP;STACKTOP+=4;_memset(c,0,4);var e,d;_llvm_memset_p0i8_i32(b,0,44,1,0);e=_PyArg_Parse(a,A,allocate([c,0,0,0,b+16,0,0,0,b+12,0,0,0,b+8,0,0,0,b+4,0,0,0,b,0,0,0,b+24,0,0,0,b+28,0,0,0,b+32,0,0,0],["i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0,"i32*",0,0,0],ALLOC_STACK))==
0?1:2;a:do if(e==1)d=0;else if(e==2){e=HEAP[c]<=1899?3:12;b:do if(e==3){d=_PyDict_GetItemString(HEAP[ra],ga);e=d==0?6:4;c:do if(e==4){if((HEAP[HEAP[d+4]+84]&8388608)==0)break c;if(_PyInt_AsLong(d)==0)break c;var f=HEAP[c];e=HEAP[c]<=68|HEAP[c]>99?9:8;if(e==9)if(e=f<0|HEAP[c]>68?11:10,e==11){_PyErr_SetString(HEAP[_PyExc_ValueError],ba);d=0;break a}else{if(e==10){HEAP[c]+=2E3;e=12;break b}}else if(e==8){HEAP[c]=f+1900;e=12;break b}}while(0);_PyErr_SetString(HEAP[_PyExc_ValueError],Ha);d=0;break a}while(0);
HEAP[b+20]=HEAP[c]-1900;HEAP[b+16]-=1;HEAP[b+24]=(HEAP[b+24]+1)%7;HEAP[b+28]-=1;d=1}while(0);STACKTOP=c;return d}function f(a){var b=STACKTOP;STACKTOP+=24;_memset(b,0,24);var c,e,d,f,g,h=b+4,j=b+14;c=_time(0);HEAP[b]=(c/31557600|0)*31557600;f=_localtime(b);g=0-HEAP[f+36];c=HEAP[f+40]!=0?1:2;c==1?d=HEAP[f+40]:c==2&&(d=ma);_strncpy(h,d,9);HEAP[h+9]=0;HEAP[b]+=15778800;f=_localtime(b);d=0-HEAP[f+36];c=HEAP[f+40]!=0?4:5;c==4?e=HEAP[f+40]:c==5&&(e=ma);_strncpy(j,e,9);HEAP[j+9]=0;c=g<d?7:8;c==7?(_PyModule_AddIntConstant(a,
na,d),_PyModule_AddIntConstant(a,Ea,g),_PyModule_AddIntConstant(a,La,g!=d),e=_Py_BuildValue(ea,allocate([j,0,0,0,h,0,0,0],["i8*",0,0,0,"i8*",0,0,0],ALLOC_STACK)),_PyModule_AddObject(a,oa,e)):c==8&&(_PyModule_AddIntConstant(a,na,g),_PyModule_AddIntConstant(a,Ea,d),_PyModule_AddIntConstant(a,La,g!=d),e=_Py_BuildValue(ea,allocate([h,0,0,0,j,0,0,0],["i8*",0,0,0,"i8*",0,0,0],ALLOC_STACK)),_PyModule_AddObject(a,oa,e));STACKTOP=b}function g(){var a=STACKTOP;STACKTOP+=20;_memset(a,0,20);var b,c,e=a+8;b=_gettimeofday(a,
0)==0?1:2;b==1?c=HEAP[a]+HEAP[a+4]*1.0E-6:b==2&&(_ftime(e),c=HEAP[e]+HEAP[e+4]*0.001);STACKTOP=a;return c}function h(){k=allocate([116,105,109,101,115,116,97,109,112,32,111,117,116,32,111,102,32,114,97,110,103,101,32,102,111,114,32,112,108,97,116,102,111,114,109,32,116,105,109,101,95,116,0],"i8",ALLOC_NORMAL);l=allocate([116,105,109,101,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,99,117,114,114,101,
110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,10,70,114,97,99,116,105,111,110,115,32,111,102,32,97,32,115,101,99,111,110,100,32,109,97,121,32,98,101,32,112,114,101,115,101,110,116,32,105,102,32,116,104,101,32,115,121,115,116,101,109,32,99,108,111,99,107,32,112,114,111,118,105,100,101,115,32,116,104,101,109,46,0],"i8",ALLOC_NORMAL);m=allocate([99,108,111,99,107,40,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,
111,105,110,116,32,110,117,109,98,101,114,10,10,82,101,116,117,114,110,32,116,104,101,32,67,80,85,32,116,105,109,101,32,111,114,32,114,101,97,108,32,116,105,109,101,32,115,105,110,99,101,32,116,104,101,32,115,116,97,114,116,32,111,102,32,116,104,101,32,112,114,111,99,101,115,115,32,111,114,32,115,105,110,99,101,10,116,104,101,32,102,105,114,115,116,32,99,97,108,108,32,116,111,32,99,108,111,99,107,40,41,46,32,32,84,104,105,115,32,104,97,115,32,97,115,32,109,117,99,104,32,112,114,101,99,105,115,105,
111,110,32,97,115,32,116,104,101,32,115,121,115,116,101,109,10,114,101,99,111,114,100,115,46,0],"i8",ALLOC_NORMAL);n=allocate([100,58,115,108,101,101,112,0],"i8",ALLOC_NORMAL);o=allocate([115,108,101,101,112,40,115,101,99,111,110,100,115,41,10,10,68,101,108,97,121,32,101,120,101,99,117,116,105,111,110,32,102,111,114,32,97,32,103,105,118,101,110,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,46,32,32,84,104,101,32,97,114,103,117,109,101,110,116,32,109,97,121,32,98,101,10,97,32,
102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,102,111,114,32,115,117,98,115,101,99,111,110,100,32,112,114,101,99,105,115,105,111,110,46,0],"i8",ALLOC_NORMAL);p=allocate([116,109,95,121,101,97,114,0],"i8",ALLOC_NORMAL);r=allocate([121,101,97,114,44,32,102,111,114,32,101,120,97,109,112,108,101,44,32,49,57,57,51,0],"i8",ALLOC_NORMAL);q=allocate([116,109,95,109,111,110,0],"i8",ALLOC_NORMAL);s=allocate([109,111,110,116,104,32,111,102,32,121,101,97,114,44,32,114,97,
110,103,101,32,91,49,44,32,49,50,93,0],"i8",ALLOC_NORMAL);u=allocate([116,109,95,109,100,97,121,0],"i8",ALLOC_NORMAL);v=allocate([100,97,121,32,111,102,32,109,111,110,116,104,44,32,114,97,110,103,101,32,91,49,44,32,51,49,93,0],"i8",ALLOC_NORMAL);y=allocate([116,109,95,104,111,117,114,0],"i8",ALLOC_NORMAL);w=allocate([104,111,117,114,115,44,32,114,97,110,103,101,32,91,48,44,32,50,51,93,0],"i8",ALLOC_NORMAL);x=allocate([116,109,95,109,105,110,0],"i8",ALLOC_NORMAL);B=allocate([109,105,110,117,116,101,
115,44,32,114,97,110,103,101,32,91,48,44,32,53,57,93,0],"i8",ALLOC_NORMAL);z=allocate([116,109,95,115,101,99,0],"i8",ALLOC_NORMAL);F=allocate([115,101,99,111,110,100,115,44,32,114,97,110,103,101,32,91,48,44,32,54,49,93,41,0],"i8",ALLOC_NORMAL);I=allocate([116,109,95,119,100,97,121,0],"i8",ALLOC_NORMAL);N=allocate([100,97,121,32,111,102,32,119,101,101,107,44,32,114,97,110,103,101,32,91,48,44,32,54,93,44,32,77,111,110,100,97,121,32,105,115,32,48,0],"i8",ALLOC_NORMAL);G=allocate([116,109,95,121,100,
97,121,0],"i8",ALLOC_NORMAL);D=allocate([100,97,121,32,111,102,32,121,101,97,114,44,32,114,97,110,103,101,32,91,49,44,32,51,54,54,93,0],"i8",ALLOC_NORMAL);Z=allocate([116,109,95,105,115,100,115,116,0],"i8",ALLOC_NORMAL);T=allocate([49,32,105,102,32,115,117,109,109,101,114,32,116,105,109,101,32,105,115,32,105,110,32,101,102,102,101,99,116,44,32,48,32,105,102,32,110,111,116,44,32,97,110,100,32,45,49,32,105,102,32,117,110,107,110,111,119,110,0],"i8",ALLOC_NORMAL);P=allocate(80,["i8*",0,0,0,"i8*",0,0,
0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"i8","i8","i8","i8"],ALLOC_NORMAL);L=allocate([0,0,0,0,0,0,0,0,0,0,0,0,9,0,0,0],["i8*",0,0,0,"i8*",0,0,0,"%struct.PyStructSequence_Field*",0,0,0,"i32",0,0,0],ALLOC_NORMAL);K=allocate([116,105,109,101,46,115,116,114,117,99,116,95,116,105,109,101,0],"i8",ALLOC_NORMAL);E=allocate([84,104,101,32,116,
105,109,101,32,118,97,108,117,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,103,109,116,105,109,101,40,41,44,32,108,111,99,97,108,116,105,109,101,40,41,44,32,97,110,100,32,115,116,114,112,116,105,109,101,40,41,44,32,97,110,100,10,32,97,99,99,101,112,116,101,100,32,98,121,32,97,115,99,116,105,109,101,40,41,44,32,109,107,116,105,109,101,40,41,32,97,110,100,32,115,116,114,102,116,105,109,101,40,41,46,32,32,77,97,121,32,98,101,32,99,111,110,115,105,100,101,114,101,100,32,97,115,32,97,
10,32,115,101,113,117,101,110,99,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,46,10,10,32,78,111,116,101,32,116,104,97,116,32,115,101,118,101,114,97,108,32,102,105,101,108,100,115,39,32,118,97,108,117,101,115,32,97,114,101,32,110,111,116,32,116,104,101,32,115,97,109,101,32,97,115,32,116,104,111,115,101,32,100,101,102,105,110,101,100,32,98,121,10,32,116,104,101,32,67,32,108,97,110,103,117,97,103,101,32,115,116,97,110,100,97,114,100,32,102,111,114,32,115,116,114,117,99,116,32,116,109,46,
32,32,70,111,114,32,101,120,97,109,112,108,101,44,32,116,104,101,32,118,97,108,117,101,32,111,102,32,116,104,101,10,32,102,105,101,108,100,32,116,109,95,121,101,97,114,32,105,115,32,116,104,101,32,97,99,116,117,97,108,32,121,101,97,114,44,32,110,111,116,32,121,101,97,114,32,45,32,49,57,48,48,46,32,32,83,101,101,32,105,110,100,105,118,105,100,117,97,108,10,32,102,105,101,108,100,115,39,32,100,101,115,99,114,105,112,116,105,111,110,115,32,102,111,114,32,100,101,116,97,105,108,115,46,0],"i8",ALLOC_NORMAL);
aa=allocate(196,["i32",0,0,0,"%struct._typeobject*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32",0,0,0,"i32",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.FILE*, i32)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, i8*)*",0,0,0,"i32 (%struct.PyObject*, i8*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyNumberMethods*",0,0,0,"%struct.PySequenceMethods*",0,0,0,"%struct.PyMappingMethods*",0,0,
0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyBufferProcs*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i32 (%struct.PyObject*, i32 (%struct.PyObject*, i8*)*, i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, i32)*",
0,0,0,"i32",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct.PyObject*)*",0,0,0,"%struct.PyMethodDef*",0,0,0,"%struct.PyMemberDef*",0,0,0,"%struct.PyGetSetDef*",0,0,0,"%struct._typeobject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i32 (%struct.PyObject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"%struct.PyObject* (%struct._typeobject*, i32)*",
0,0,0,"%struct.PyObject* (%struct._typeobject*, %struct.PyObject*, %struct.PyObject*)*",0,0,0,"void (i8*)*",0,0,0,"i32 (%struct.PyObject*)*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"%struct.PyObject*",0,0,0,"void (%struct.PyObject*)*",0,0,0,"i32",0,0,0],ALLOC_NORMAL);Q=allocate([124,79,58,103,109,116,105,109,101,0],"i8",ALLOC_NORMAL);$=allocate([103,109,116,105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,
95,121,101,97,114,44,32,116,109,95,109,111,110,44,32,116,109,95,109,100,97,121,44,32,116,109,95,104,111,117,114,44,32,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,109,95,115,101,99,44,32,116,109,95,119,100,97,121,44,32,116,109,95,121,100,97,121,44,32,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,
116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,85,84,67,32,40,97,46,107,46,97,46,10,71,77,84,41,46,32,32,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,115,101,100,32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0],"i8",ALLOC_NORMAL);S=allocate([124,79,58,108,111,99,97,108,116,105,109,101,0],"i8",ALLOC_NORMAL);t=allocate([108,111,99,97,108,116,
105,109,101,40,91,115,101,99,111,110,100,115,93,41,32,45,62,32,40,116,109,95,121,101,97,114,44,116,109,95,109,111,110,44,116,109,95,109,100,97,121,44,116,109,95,104,111,117,114,44,116,109,95,109,105,110,44,10,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,116,109,95,115,101,99,44,116,109,95,119,100,97,121,44,116,109,95,121,100,97,121,44,116,109,95,105,115,100,115,116,41,10,10,67,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,
32,69,112,111,99,104,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,101,120,112,114,101,115,115,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,87,104,101,110,32,39,115,101,99,111,110,100,115,39,32,105,115,32,110,111,116,32,112,97,115,115,101,100,32,105,110,44,32,99,111,110,118,101,114,116,32,116,104,101,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,115,116,101,97,100,46,0],"i8",ALLOC_NORMAL);A=allocate([40,105,105,105,105,105,105,105,105,105,41,0],"i8",ALLOC_NORMAL);
ra=allocate(1,"%struct.PyObject*",ALLOC_NORMAL);ga=allocate([97,99,99,101,112,116,50,100,121,101,97,114,0],"i8",ALLOC_NORMAL);Ha=allocate([121,101,97,114,32,62,61,32,49,57,48,48,32,114,101,113,117,105,114,101,100,0],"i8",ALLOC_NORMAL);ba=allocate([121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",ALLOC_NORMAL);pa=allocate([115,124,79,58,115,116,114,102,116,105,109,101,0],"i8",ALLOC_NORMAL);ya=allocate([109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",
ALLOC_NORMAL);va=allocate([100,97,121,32,111,102,32,109,111,110,116,104,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",ALLOC_NORMAL);Ua=allocate([104,111,117,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",ALLOC_NORMAL);$a=allocate([109,105,110,117,116,101,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",ALLOC_NORMAL);Va=allocate([115,101,99,111,110,100,115,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",ALLOC_NORMAL);db=allocate([100,97,121,32,111,102,32,119,101,
101,107,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",ALLOC_NORMAL);Ta=allocate([100,97,121,32,111,102,32,121,101,97,114,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",ALLOC_NORMAL);Ra=allocate([115,116,114,102,116,105,109,101,40,102,111,114,109,97,116,91,44,32,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,32,97,99,99,111,114,100,105,110,103,
32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,10,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,
101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0],"i8",ALLOC_NORMAL);Ka=allocate([95,115,116,114,112,116,105,109,101,0],"i8",ALLOC_NORMAL);Za=allocate([95,115,116,114,112,116,105,109,101,95,116,105,109,101,0],"i8",ALLOC_NORMAL);Ia=allocate([79,0],"i8",ALLOC_NORMAL);la=allocate([115,116,114,112,116,105,109,101,40,115,116,114,105,110,103,44,32,102,111,114,109,97,116,41,32,45,62,32,115,116,114,117,99,116,95,116,105,109,101,10,10,80,97,
114,115,101,32,97,32,115,116,114,105,110,103,32,116,111,32,97,32,116,105,109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,97,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,46,10,83,101,101,32,116,104,101,32,108,105,98,114,97,114,121,32,114,101,102,101,114,101,110,99,101,32,109,97,110,117,97,108,32,102,111,114,32,102,111,114,109,97,116,116,105,110,103,32,99,111,100,101,115,32,40,115,97,109,101,32,97,115,32,115,116,114,102,116,105,109,101,
40,41,41,46,0],"i8",ALLOC_NORMAL);Fa=allocate([97,115,99,116,105,109,101,0],"i8",ALLOC_NORMAL);Ja=allocate([105,110,118,97,108,105,100,32,116,105,109,101,0],"i8",ALLOC_NORMAL);Oa=allocate([97,115,99,116,105,109,101,40,91,116,117,112,108,101,93,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,97,32,115,116,114,105,110,103,44,32,101,46,103,46,32,39,83,97,116,32,74,117,110,32,48,54,32,49,54,58,50,54,58,49,49,32,49,57,
57,56,39,46,10,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,32,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,10,105,115,32,117,115,101,100,46,0],"i8",ALLOC_NORMAL);Y=allocate([99,116,105,109,101,0],"i8",ALLOC_NORMAL);Ba=allocate([117,110,99,111,110,118,101,114,116,105,98,108,101,32,116,105,109,101,0],"i8",ALLOC_NORMAL);
Ma=allocate([99,116,105,109,101,40,115,101,99,111,110,100,115,41,32,45,62,32,115,116,114,105,110,103,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,116,111,32,97,32,115,116,114,105,110,103,32,105,110,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,105,115,32,105,115,32,101,113,117,105,118,97,108,101,110,116,32,116,111,32,97,115,99,116,105,109,101,40,108,111,99,97,108,116,105,109,101,
40,115,101,99,111,110,100,115,41,41,46,32,87,104,101,110,32,116,104,101,32,116,105,109,101,32,116,117,112,108,101,32,105,115,10,110,111,116,32,112,114,101,115,101,110,116,44,32,99,117,114,114,101,110,116,32,116,105,109,101,32,97,115,32,114,101,116,117,114,110,101,100,32,98,121,32,108,111,99,97,108,116,105,109,101,40,41,32,105,115,32,117,115,101,100,46,0],"i8",ALLOC_NORMAL);ca=allocate([109,107,116,105,109,101,32,97,114,103,117,109,101,110,116,32,111,117,116,32,111,102,32,114,97,110,103,101,0],"i8",
ALLOC_NORMAL);ja=allocate([109,107,116,105,109,101,40,116,117,112,108,101,41,32,45,62,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,10,10,67,111,110,118,101,114,116,32,97,32,116,105,109,101,32,116,117,112,108,101,32,105,110,32,108,111,99,97,108,32,116,105,109,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,46,0],"i8",ALLOC_NORMAL);ia=allocate([116,105,109,101,0],"i8",ALLOC_NORMAL);ka=allocate([116,122,115,
101,116,40,41,10,10,73,110,105,116,105,97,108,105,122,101,44,32,111,114,32,114,101,105,110,105,116,105,97,108,105,122,101,44,32,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,116,111,32,116,104,101,32,118,97,108,117,101,32,115,116,111,114,101,100,32,105,110,10,111,115,46,101,110,118,105,114,111,110,91,39,84,90,39,93,46,32,84,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,115,104,111,117,108,100,32,98,101,32,115,112,101,99,
105,102,105,101,100,32,105,110,10,115,116,97,110,100,97,114,100,32,85,110,105,120,32,116,105,109,101,122,111,110,101,32,102,111,114,109,97,116,32,97,115,32,100,111,99,117,109,101,110,116,101,100,32,105,110,32,116,104,101,32,116,122,115,101,116,32,109,97,110,32,112,97,103,101,10,40,101,103,46,32,39,85,83,47,69,97,115,116,101,114,110,39,44,32,39,69,117,114,111,112,101,47,65,109,115,116,101,114,100,97,109,39,41,46,32,85,110,107,110,111,119,110,32,116,105,109,101,122,111,110,101,115,32,119,105,108,108,
32,115,105,108,101,110,116,108,121,10,102,97,108,108,32,98,97,99,107,32,116,111,32,85,84,67,46,32,73,102,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,105,115,32,110,111,116,32,115,101,116,44,32,116,104,101,32,108,111,99,97,108,10,116,105,109,101,122,111,110,101,32,105,115,32,115,101,116,32,116,111,32,116,104,101,32,115,121,115,116,101,109,115,32,98,101,115,116,32,103,117,101,115,115,32,111,102,32,119,97,108,108,99,108,111,99,107,32,116,
105,109,101,46,10,67,104,97,110,103,105,110,103,32,116,104,101,32,84,90,32,101,110,118,105,114,111,110,109,101,110,116,32,118,97,114,105,97,98,108,101,32,119,105,116,104,111,117,116,32,99,97,108,108,105,110,103,32,116,122,115,101,116,32,42,109,97,121,42,32,99,104,97,110,103,101,10,116,104,101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,32,117,115,101,100,32,98,121,32,109,101,116,104,111,100,115,32,115,117,99,104,32,97,115,32,108,111,99,97,108,116,105,109,101,44,32,98,117,116,32,116,104,
105,115,32,98,101,104,97,118,105,111,117,114,10,115,104,111,117,108,100,32,110,111,116,32,98,101,32,114,101,108,105,101,100,32,111,110,46,0],"i8",ALLOC_NORMAL);ma=allocate([32,32,32,0],"i8",ALLOC_NORMAL);na=allocate([116,105,109,101,122,111,110,101,0],"i8",ALLOC_NORMAL);Ea=allocate([97,108,116,122,111,110,101,0],"i8",ALLOC_NORMAL);La=allocate([100,97,121,108,105,103,104,116,0],"i8",ALLOC_NORMAL);ea=allocate([40,122,122,41,0],"i8",ALLOC_NORMAL);oa=allocate([116,122,110,97,109,101,0],"i8",ALLOC_NORMAL);
Sa=allocate([99,108,111,99,107,0],"i8",ALLOC_NORMAL);za=allocate([115,108,101,101,112,0],"i8",ALLOC_NORMAL);J=allocate([103,109,116,105,109,101,0],"i8",ALLOC_NORMAL);Ga=allocate([108,111,99,97,108,116,105,109,101,0],"i8",ALLOC_NORMAL);Ca=allocate([109,107,116,105,109,101,0],"i8",ALLOC_NORMAL);da=allocate([115,116,114,102,116,105,109,101,0],"i8",ALLOC_NORMAL);H=allocate([115,116,114,112,116,105,109,101,0],"i8",ALLOC_NORMAL);eb=allocate([116,122,115,101,116,0],"i8",ALLOC_NORMAL);wa=allocate([0,0,0,
0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],["i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",0,0,0,"i32",0,0,0,"i8*",0,0,0,"i8*",0,0,0,"%struct.PyObject* (%struct.PyObject*, %struct.PyObject*)*",
0,0,0,"i8","i8","i8","i8","i8","i8","i8","i8"],ALLOC_NORMAL);qa=allocate([84,104,105,115,32,109,111,100,117,108,101,32,112,114,111,118,105,100,101,115,32,118,97,114,105,111,117,115,32,102,117,110,99,116,105,111,110,115,32,116,111,32,109,97,110,105,112,117,108,97,116,101,32,116,105,109,101,32,118,97,108,117,101,115,46,10,10,84,104,101,114,101,32,97,114,101,32,116,119,111,32,115,116,97,110,100,97,114,100,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,32,111,102,32,116,105,109,101,46,
32,32,79,110,101,32,105,115,32,116,104,101,32,110,117,109,98,101,114,10,111,102,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,44,32,105,110,32,85,84,67,32,40,97,46,107,46,97,46,32,71,77,84,41,46,32,32,73,116,32,109,97,121,32,98,101,32,97,110,32,105,110,116,101,103,101,114,10,111,114,32,97,32,102,108,111,97,116,105,110,103,32,112,111,105,110,116,32,110,117,109,98,101,114,32,40,116,111,32,114,101,112,114,101,115,101,110,116,32,102,114,97,99,116,105,111,110,
115,32,111,102,32,115,101,99,111,110,100,115,41,46,10,84,104,101,32,69,112,111,99,104,32,105,115,32,115,121,115,116,101,109,45,100,101,102,105,110,101,100,59,32,111,110,32,85,110,105,120,44,32,105,116,32,105,115,32,103,101,110,101,114,97,108,108,121,32,74,97,110,117,97,114,121,32,49,115,116,44,32,49,57,55,48,46,10,84,104,101,32,97,99,116,117,97,108,32,118,97,108,117,101,32,99,97,110,32,98,101,32,114,101,116,114,105,101,118,101,100,32,98,121,32,99,97,108,108,105,110,103,32,103,109,116,105,109,101,
40,48,41,46,10,10,84,104,101,32,111,116,104,101,114,32,114,101,112,114,101,115,101,110,116,97,116,105,111,110,32,105,115,32,97,32,116,117,112,108,101,32,111,102,32,57,32,105,110,116,101,103,101,114,115,32,103,105,118,105,110,103,32,108,111,99,97,108,32,116,105,109,101,46,10,84,104,101,32,116,117,112,108,101,32,105,116,101,109,115,32,97,114,101,58,10,32,32,121,101,97,114,32,40,102,111,117,114,32,100,105,103,105,116,115,44,32,101,46,103,46,32,49,57,57,56,41,10,32,32,109,111,110,116,104,32,40,49,45,
49,50,41,10,32,32,100,97,121,32,40,49,45,51,49,41,10,32,32,104,111,117,114,115,32,40,48,45,50,51,41,10,32,32,109,105,110,117,116,101,115,32,40,48,45,53,57,41,10,32,32,115,101,99,111,110,100,115,32,40,48,45,53,57,41,10,32,32,119,101,101,107,100,97,121,32,40,48,45,54,44,32,77,111,110,100,97,121,32,105,115,32,48,41,10,32,32,74,117,108,105,97,110,32,100,97,121,32,40,100,97,121,32,105,110,32,116,104,101,32,121,101,97,114,44,32,49,45,51,54,54,41,10,32,32,68,83,84,32,40,68,97,121,108,105,103,104,116,32,
83,97,118,105,110,103,115,32,84,105,109,101,41,32,102,108,97,103,32,40,45,49,44,32,48,32,111,114,32,49,41,10,73,102,32,116,104,101,32,68,83,84,32,102,108,97,103,32,105,115,32,48,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,114,101,103,117,108,97,114,32,116,105,109,101,32,122,111,110,101,59,10,105,102,32,105,116,32,105,115,32,49,44,32,116,104,101,32,116,105,109,101,32,105,115,32,103,105,118,101,110,32,105,110,32,116,104,101,32,68,83,84,32,116,
105,109,101,32,122,111,110,101,59,10,105,102,32,105,116,32,105,115,32,45,49,44,32,109,107,116,105,109,101,40,41,32,115,104,111,117,108,100,32,103,117,101,115,115,32,98,97,115,101,100,32,111,110,32,116,104,101,32,100,97,116,101,32,97,110,100,32,116,105,109,101,46,10,10,86,97,114,105,97,98,108,101,115,58,10,10,116,105,109,101,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,
99,97,108,32,115,116,97,110,100,97,114,100,32,116,105,109,101,10,97,108,116,122,111,110,101,32,45,45,32,100,105,102,102,101,114,101,110,99,101,32,105,110,32,32,115,101,99,111,110,100,115,32,98,101,116,119,101,101,110,32,85,84,67,32,97,110,100,32,108,111,99,97,108,32,68,83,84,32,116,105,109,101,10,100,97,121,108,105,103,104,116,32,45,45,32,119,104,101,116,104,101,114,32,108,111,99,97,108,32,116,105,109,101,32,115,104,111,117,108,100,32,114,101,102,108,101,99,116,32,68,83,84,10,116,122,110,97,109,101,
32,45,45,32,116,117,112,108,101,32,111,102,32,40,115,116,97,110,100,97,114,100,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,44,32,68,83,84,32,116,105,109,101,32,122,111,110,101,32,110,97,109,101,41,10,10,70,117,110,99,116,105,111,110,115,58,10,10,116,105,109,101,40,41,32,45,45,32,114,101,116,117,114,110,32,99,117,114,114,101,110,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,116,104,101,32,69,112,111,99,104,32,97,115,32,97,32,102,108,111,97,116,
10,99,108,111,99,107,40,41,32,45,45,32,114,101,116,117,114,110,32,67,80,85,32,116,105,109,101,32,115,105,110,99,101,32,112,114,111,99,101,115,115,32,115,116,97,114,116,32,97,115,32,97,32,102,108,111,97,116,10,115,108,101,101,112,40,41,32,45,45,32,100,101,108,97,121,32,102,111,114,32,97,32,110,117,109,98,101,114,32,111,102,32,115,101,99,111,110,100,115,32,103,105,118,101,110,32,97,115,32,97,32,102,108,111,97,116,10,103,109,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,
111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,32,116,111,32,85,84,67,32,116,117,112,108,101,10,108,111,99,97,108,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,32,116,111,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,10,97,115,99,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,116,114,105,110,103,10,99,116,105,
109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,105,110,32,115,101,99,111,110,100,115,32,116,111,32,115,116,114,105,110,103,10,109,107,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,108,111,99,97,108,32,116,105,109,101,32,116,117,112,108,101,32,116,111,32,115,101,99,111,110,100,115,32,115,105,110,99,101,32,69,112,111,99,104,10,115,116,114,102,116,105,109,101,40,41,32,45,45,32,99,111,110,118,101,114,116,32,116,105,109,101,32,116,117,112,108,101,32,116,111,
32,115,116,114,105,110,103,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,115,116,114,112,116,105,109,101,40,41,32,45,45,32,112,97,114,115,101,32,115,116,114,105,110,103,32,116,111,32,116,105,109,101,32,116,117,112,108,101,32,97,99,99,111,114,100,105,110,103,32,116,111,32,102,111,114,109,97,116,32,115,112,101,99,105,102,105,99,97,116,105,111,110,10,116,122,115,101,116,40,41,32,45,45,32,99,104,97,110,103,101,32,116,104,
101,32,108,111,99,97,108,32,116,105,109,101,122,111,110,101,0],"i8",ALLOC_NORMAL);fa=allocate([80,89,84,72,79,78,89,50,75,0],"i8",ALLOC_NORMAL);ua=allocate(1,"i1",ALLOC_NORMAL);xa=allocate([115,116,114,117,99,116,95,116,105,109,101,0],"i8",ALLOC_NORMAL);HEAP[P]=p;HEAP[P+4]=r;HEAP[P+8]=q;HEAP[P+12]=s;HEAP[P+16]=u;HEAP[P+20]=v;HEAP[P+24]=y;HEAP[P+28]=w;HEAP[P+32]=x;HEAP[P+36]=B;HEAP[P+40]=z;HEAP[P+44]=F;HEAP[P+48]=I;HEAP[P+52]=N;HEAP[P+56]=G;HEAP[P+60]=D;HEAP[P+64]=Z;HEAP[P+68]=T;HEAP[L]=K;HEAP[L+4]=
E;HEAP[L+8]=P;HEAP[wa]=ia;HEAP[wa+4]=c+6;HEAP[wa+12]=l;HEAP[wa+16]=Sa;HEAP[wa+20]=c+8;HEAP[wa+28]=m;HEAP[wa+32]=za;HEAP[wa+36]=c+10;HEAP[wa+44]=o;HEAP[wa+48]=J;HEAP[wa+52]=c+12;HEAP[wa+60]=$;HEAP[wa+64]=Ga;HEAP[wa+68]=c+14;HEAP[wa+76]=t;HEAP[wa+80]=Fa;HEAP[wa+84]=c+16;HEAP[wa+92]=Oa;HEAP[wa+96]=Y;HEAP[wa+100]=c+18;HEAP[wa+108]=Ma;HEAP[wa+112]=Ca;HEAP[wa+116]=c+20;HEAP[wa+124]=ja;HEAP[wa+128]=da;HEAP[wa+132]=c+22;HEAP[wa+140]=Ra;HEAP[wa+144]=H;HEAP[wa+148]=c+24;HEAP[wa+156]=la;HEAP[wa+160]=eb;HEAP[wa+
164]=c+26;HEAP[wa+172]=ka}var j={arguments:[]};Runtime.QUANTUM_SIZE=4;var k,l,m,n,o,p,r,q,s,u,v,y,w,x,B,z,F,I,N,G,D,Z,T,P,L,K,E,aa,Q,$,S,t,A,ra,ga,Ha,ba,pa,ya,va,Ua,$a,Va,db,Ta,Ra,Ka,Za,Ia,la,Fa,Ja,Oa,Y,Ba,Ma,ca,ja,ia,ka,ma,na,Ea,La,ea,oa,Sa,za,J,Ga,Ca,da,H,eb,wa,qa,fa,ua,xa;j._inittime=function(){var a,b,c;c=_Py_InitModule4(ia,wa,qa,0,1013);if((c==0?10:1)==1){a=HEAP[_Py_IgnoreEnvironmentFlag]==0?3:2;a:do if(a==3){var e=_getenv(fa);a=e;if(e==0){a=5;break a}if(HEAP[a]==0){a=5;break a}b=0;a=7;break a}else if(a==
2){a=5;break a}while(0);a==5&&(b=1);_PyModule_AddIntConstant(c,ga,b);b=_PyModule_GetDict(c);HEAP[ra]=b;HEAP[HEAP[ra]]+=1;f(c);a=HEAP[ua]==0?8:9;a==8&&_PyStructSequence_InitType(aa,L);HEAP[aa]+=1;_PyModule_AddObject(c,xa,aa);HEAP[ua]=1}};FUNCTION_TABLE=FUNCTION_TABLE.concat([0,0,_gmtime,0,_localtime,0,function(){var a,b,c;c=g();a=c==0?1:2;a==1?(_PyErr_SetFromErrno(HEAP[_PyExc_IOError]),b=0):a==2&&(b=_PyFloat_FromDouble(c));return b},0,function(){var a=_clock()/1E6;return _PyFloat_FromDouble(a)},0,
function(a,b){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var e,d;e=_PyArg_ParseTuple(b,n,allocate([c,0,0,0],["double*",0,0,0],ALLOC_STACK))==0?1:2;if(e==1)d=0;else if(e==2){var f=HEAP[c];e=STACKTOP;STACKTOP+=8;_memset(e,0,8);var g,h;h=_fmod(f,1);f=_floor(f);HEAP[e]=f|0;HEAP[e+4]=h*1E6|0;f=_select(0,0,0,0,e)!=0?1:3;a:do if(f==1){f=___errno_location();if(HEAP[f]==4){f=3;break a}_PyErr_SetFromErrno(HEAP[_PyExc_IOError]);g=-1;f=4;break a}while(0);f==3&&(g=0);STACKTOP=e;e=g!=0?3:4;e==3?d=0:e==4&&(HEAP[__Py_NoneStruct]+=
1,d=__Py_NoneStruct)}STACKTOP=c;return d},0,function(e,d){var f=STACKTOP;STACKTOP+=8;_memset(f,0,8);var g,h;g=b(d,Q,f)==0?1:2;g==1?h=0:g==2&&(h=a(HEAP[f],c+2));STACKTOP=f;return h},0,function(e,d){var f=STACKTOP;STACKTOP+=8;_memset(f,0,8);var g,h;g=b(d,S,f)==0?1:2;g==1?h=0:g==2&&(h=a(HEAP[f],c+4));STACKTOP=f;return h},0,function(a,b){var c=STACKTOP;STACKTOP+=52;_memset(c,0,52);var e,f,g=c+4,h,j=c+48;HEAP[c]=0;e=_PyArg_UnpackTuple(b,Fa,0,1,allocate([c,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==
0?1:2;a:do if(e==1)f=0;else if(e==2){e=HEAP[c]==0?3:4;b:do if(e==3)h=_time(0),HEAP[j]=h,h=_localtime(j),_llvm_memcpy_p0i8_p0i8_i32(g,h,44,4,0);else if(e==4){if(d(HEAP[c],g)!=0)break b;f=0;break a}while(0);h=e=_asctime(g);e=e==0?7:8;e==7?(_PyErr_SetString(HEAP[_PyExc_ValueError],Ja),f=0):e==8&&(e=HEAP[h+24]==10?9:10,e==9&&(HEAP[h+24]=0),f=_PyString_FromString(h))}while(0);STACKTOP=c;return f},0,function(a,b){var c=STACKTOP;STACKTOP+=8;_memset(c,0,8);var d,f,g=c+4,h;HEAP[c]=0;d=_PyArg_UnpackTuple(b,
Y,0,1,allocate([c,0,0,0],["%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;a:do if(d==1)f=0;else if(d==2){d=HEAP[c]==0|HEAP[c]==__Py_NoneStruct?3:4;b:do if(d==3)h=_time(0),HEAP[g]=h;else if(d==4)if(h=_PyFloat_AsDouble(HEAP[c]),d=_PyErr_Occurred()!=0?5:6,d==5){f=0;break a}else if(d==6){d=e(h);HEAP[g]=d;if(HEAP[g]!=-1)break b;if(_PyErr_Occurred()==0)break b;f=0;break a}while(0);h=d=_ctime(g);d=d==0?10:11;d==10?(_PyErr_SetString(HEAP[_PyExc_ValueError],Ba),f=0):d==11&&(d=HEAP[h+24]==10?12:13,d==12&&
(HEAP[h+24]=0),f=_PyString_FromString(h))}while(0);STACKTOP=c;return f},0,function(a,b){var c=STACKTOP;STACKTOP+=44;_memset(c,0,44);var e,f;e=d(b,c)==0?1:2;a:do if(e==1)f=0;else if(e==2){HEAP[c+24]=-1;f=_mktime(c);e=f==-1?3:5;b:do if(e==3){if(HEAP[c+24]!=-1){e=5;break b}_PyErr_SetString(HEAP[_PyExc_OverflowError],ca);f=0;break a}while(0);f=_PyFloat_FromDouble(f)}while(0);STACKTOP=c;return f},0,function(a,b){var c=STACKTOP;STACKTOP+=56;_memset(c,0,56);var e,f,g=c+4,h=c+48,j,k,l;j=c+52;l=HEAP[c]=0;
_llvm_memset_p0i8_i32(g,0,44,1,0);e=_PyArg_ParseTuple(b,pa,allocate([h,0,0,0,c,0,0,0],["i8**",0,0,0,"%struct.PyObject**",0,0,0],ALLOC_STACK))==0?1:2;a:do if(e==1)f=0;else if(e==2){e=HEAP[c]==0?3:4;b:do if(e==3)f=_time(0),HEAP[j]=f,f=_localtime(j),_llvm_memcpy_p0i8_p0i8_i32(g,f,44,4,0);else if(e==4){if(d(HEAP[c],g)!=0)break b;f=0;break a}while(0);f=g+16;e=HEAP[g+16]==-1?7:8;b:do if(e==7)HEAP[f]=0;else if(e==8){e=HEAP[f]<0?10:9;if(e==9&&!(HEAP[g+16]>11))break b;_PyErr_SetString(HEAP[_PyExc_ValueError],
ya);f=0;break a}while(0);f=g+12;e=HEAP[g+12]==0?12:13;b:do if(e==12)HEAP[f]=1;else if(e==13){e=HEAP[f]<0?15:14;if(e==14&&!(HEAP[g+12]>31))break b;_PyErr_SetString(HEAP[_PyExc_ValueError],va);f=0;break a}while(0);e=HEAP[g+8]<0?18:17;b:do if(e==17){if(HEAP[g+8]>23){e=18;break b}e=HEAP[g+4]<0?21:20;c:do if(e==20){if(HEAP[g+4]>59)break c;e=HEAP[g]<0?24:23;d:do if(e==23){if(HEAP[g]>61)break d;e=HEAP[g+24]<0?26:27;if(e==26){_PyErr_SetString(HEAP[_PyExc_ValueError],db);f=0;break a}else if(e==27){j=g+28;
e=HEAP[g+28]==-1?28:29;e:do if(e==28)HEAP[j]=0;else if(e==29){e=HEAP[j]<0?31:30;if(e==30&&!(HEAP[g+28]>365))break e;_PyErr_SetString(HEAP[_PyExc_ValueError],Ta);f=0;break a}while(0);j=g+32;e=HEAP[g+32]<-1?33:34;e:do if(e==33)HEAP[j]=-1;else if(e==34){if(!(HEAP[j]>1)){e=36;break e}HEAP[g+32]=1}while(0);j=_strlen(HEAP[h]);for(f=1024;;){l=e=_malloc(f);if(e==0){e=38;break}k=_strftime(l,f,HEAP[h],g);if(k!=0){e=41;break}if(j*256<=f){e=41;break}_free(l);f+=f;e=37}if(e==38){f=_PyErr_NoMemory();break a}else if(e==
41){g=_PyString_FromStringAndSize(l,k);_free(l);f=g;break a}}}while(0);_PyErr_SetString(HEAP[_PyExc_ValueError],Va);f=0;break a}while(0);_PyErr_SetString(HEAP[_PyExc_ValueError],$a);f=0;break a}while(0);_PyErr_SetString(HEAP[_PyExc_ValueError],Ua);f=0}while(0);STACKTOP=c;return f},0,function(a,b){var c,e,d;d=_PyImport_ImportModuleNoBlock(Ka);c=d==0?1:2;if(c==1)e=0;else if(c==2&&(e=_PyObject_CallMethod(d,Za,Ia,allocate([b,0,0,0],["%struct.PyObject*",0,0,0],ALLOC_STACK)),HEAP[d]-=1,c=HEAP[d]==0?3:4,
c==3))FUNCTION_TABLE[HEAP[HEAP[d+4]+24]](d);return e},0,function(){var a,b,c;c=_PyImport_ImportModuleNoBlock(ia);a=c==0?1:2;if(a==1)b=0;else if(a==2){_tzset();f(c);HEAP[c]-=1;a=HEAP[c]==0?3:4;if(a==3)FUNCTION_TABLE[HEAP[HEAP[c+4]+24]](c);HEAP[__Py_NoneStruct]+=1;b=__Py_NoneStruct}return b},0]);j.run=h;h();return j});