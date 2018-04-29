function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?");
var arrURLParams = arrParams[1].split("&");
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=");
var sValue = decodeURIComponent(sParam[1]);
if( decodeURIComponent(sParam[0]) == frameObjectName)
	sTerms = sValue;
if( decodeURIComponent(sParam[0]) == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>"); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">");
d.write("<html lang=\"en\">");
d.write("<head>");
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">");
d.write("</head>");
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: transparent;\">");
d.write("<div id=\"wpSearchResults\"></div>");
d.write("<script type=\"text/javascript\">");
d.write("var wordMap = new Array(\" data visualization learn more about tableau tool governance data governancce within accelerate digital transformation aligning with programme latest news april 2018 test drive dates june here user manuals vmware browser access server available driving create organisation that thrives creates valuable insights clients gina davies read life blood business \",\" maecenas vestibulum semper enim eros vitae arcu aliquam erat volutpat praesent odio nisl suscipit rhoncus amet porttitor aenean hendrerit etiam augue morbi tincidunt neque lacus duis vulputate cursus orci mauris justo lorem scelerisque placerat condimentum donec urna quis auctor eget ultrices purus rutrum blandit libero tortor bibendum vehicula accumsan adipiscing pede nullam suspendisse tempor nunc fringilla ullamcorper nunc sagittis quisque lacinia phasellus sollicitudin ornare aliquet tempus dolor habitasse platea dictumst mauris proin mattis eleifend pretium ante elit tellus dictum dapibus sodales lectus pellentesque molestie iaculis nulla viverra ultricies velit magna ipsum nisi sapien integer curabitur felis pellentesque diam class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos risus vestibulum nibh faucibus egestas luctus metus turpis tristique potenti feugiat lorem consectetuer cras gravida massa aliquam interdum consequat nulla porta imperdiet primis posuere cubilia ligula dignissim mollis \",\" tableau preferred tool transform into data-driven company lorem ipsum dolor amet consectetuer adipiscing elit cras gravida massa quisque accumsan porttitor interdum nisl consequat tristique lacus nulla porta test drive 2018 register tableau's tableaus office south beach road advanced june more sessions user manuals vmware browser user access server from mobile devices manuals download here pretium nullam posuere mauris velit sodales donec suscipit erat blandit praesent congue lorem maecenas vitae purus dapibus sapien tempus fringilla elementum duis molestie pede vivamus quis odio libero tincidunt metus lectus ullamcorper dignissim suspendisse turpis justo aliquet morbi pretium laoreet sociis natoque penatibus magnis parturient montes nascetur magna eget rhoncus lacinia aliquam semper pellentesque mollis iaculis fusce varius phasellus mattis ornare ligula mauris nunc integer nibh egestas cursus faucibus vestibulum luctus \",\" contact have several offices located throughout country please find main office address primary contact details below vestibulum lorem habitasse platea mauris rutrum quisque pede wp123 donec 012-345-6789 duis 012-345-6787 fusce nulla vestibulumlorem curabitur comments e-mail address name eget sapien vitae massa rhoncus lacinia nullam lorem tempus fringilla felis erat placerat \",\" morbi nisl eros quisque pellentesque metus quam donec magna nulla aliquet vitae congue faucibus erat amet neque posuere tempus massa duis vulputate mauris purus vestibulum fusce \",\" vestibulum semper enim aliquam dapibus ipsum vitae eget mauris nunc luctus ornare phasellus augue rutrum tempus blandit vehicula neque consequat proin metus duis tellus malesuada tincidunt mauris purus donec aliquet dolor integer sapien nibh egestas cursus amet faucibus elementum ullamcorper massa nullam posuere velit quisque sodales suscipit erat praesent congue lorem maecenas gravida fringilla molestie pede vivamus quis odio libero lectus dignissim suspendisse turpis justo accumsan morbi pretium lacus cras laoreet elit sociis natoque penatibus magnis parturient montes nascetur ridiculus iaculis felis nulla nulla nisi nunc arcu magna sollicitudin adipiscing feugiat facilisis euismod risus pellentesque mollis nisl fusce varius tristique mattis ligula quam ultrices sagittis bibendum pellentesque interdum porta orci diam \",\" vestibulum semper enim habitasse platea dictumst mauris rutrum vitae mauris proin mattis eleifend pede pretium ante amet elit quisque tellus dictum eget dapibus sodales lectus pellentesque molestie adipiscing iaculis quis arcu nulla viverra ultricies morbi nisl eros dignissim malesuada convallis augue ipsum primis faucibus orci luctus ultrices posuere cubilia curae aliquam tempus massa sollicitudin erat magna metus donec sagittis velit fusce venenatis rhoncus praesent lobortis suscipit congue volutpat bibendum feugiat facilisis scelerisque odio suspendisse fermentum felis pharetra consequat ullamcorper placerat auctor aliquam tortor tincidunt maecenas duis nisi sapien nullam fringilla integer curabitur pellentesque purus diam nunc class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos aenean risus porttitor vestibulum nibh justo etiam vulputate egestas neque dolor hendrerit turpis tristique lacinia potenti lorem consectetuer cras gravida accumsan interdum lacus nulla porta imperdiet ligula lorem ornare tempor aliquet nunc urna cursus pulvinar \",\" vestibulum semper enim morbi pellentesque mauris interdum porta tincidunt neque orci molestie vitae iaculis dolor felis nunc maecenas diam massa quis odio feugiat sagittis quisque lorem ipsum suscipit malesuada nulla ante fermentum proin eget augue vehicula mattis pellentesque nisi scelerisque phasellus adipiscing suspendisse elit ullamcorper gravida tempor ligula nibh erat dictum purus etiam luctus aliquam urna eros aliquet ultrices donec cursus integer amet consectetuer justo vivamus sapien praesent nisl tortor laoreet arcu volutpat rhoncus porttitor aenean hendrerit lacus duis vulputate mauris placerat condimentum auctor rutrum blandit libero bibendum accumsan pede nullam fringilla nunc lacinia sollicitudin ornare tempus egestas faucibus habitasse lorem cras consequat tristique nulla imperdiet primis posuere cubilia curae metus viverra tellus vestibulum convallis platea dictumst eleifend pretium dapibus sodales lectus ultricies velit magna \",\" maecenas pellentesque tincidunt dolor dignissim mollis justo vestibulum semper enim eros lorem ipsum amet consectetuer adipiscing elit cras gravida massa quisque accumsan porttitor interdum nisl consequat tristique lacus nulla porta aliquam dapibus curabitur felis erat tempus placerat pellentesque purus diam vivamus sapien praesent tortor laoreet quis egestas mauris sociis natoque penatibus magnis parturient montes nascetur ridiculus morbi habitasse platea dictumst mauris rutrum vitae proin mattis eleifend pede neque orci molestie iaculis nunc pretium nullam posuere velit sodales donec suscipit blandit congue lorem fringilla elementum duis odio libero metus lectus ullamcorper suspendisse turpis aliquet pretium magna eget rhoncus lacinia aliquam fusce varius phasellus ornare ligula integer nibh cursus faucibus luctus \");");
d.write("var pageMap = new Array(\"Home\",\"Data Gov\",\"Data Viz\",\"Contact Us\",\"Search Results\",\"News Story\",\"Terms And Conditions\",\"Privacy Policy\",\"Accelerate\");");
d.write("var linkMap = new Array(\"index.html\",\"datagov.html\",\"dataviz.html\",\"contactus.html\",\"searchresults.html\",\"newsstory.html\",\"termsandconditions.html\",\"privacypolicy.html\",\"accelerate.html\");");
d.write("var preMap = new Array(\"Data Visualization Learn more about Tableau as our Data Visualization tool at ÅÜÅ    Data Governance Learn more about data and data governancce within ÅÜÅ  Accelerate Learn about Digital Transformatio\",\"Maecenas Vestibulum semper enim non eros  Sed vitae arcu  Aliquam erat volutpat  Praesent odio nisl suscipit at  rhoncus sit amet  porttitor sit amet leo  Aenean hendrerit est  Etiam ac augue   Morbi \",\"Tableau Tableau is our preferred tool to transform ÅÜÅ  into a data-driven company    Lorem ipsum dolor sit amet  consectetuer adipiscing elit  Cras gravida sem ut massa  Quisque accumsan porttitor du\",\"Contact Us We have several offices located throughout the country   Please find our main office address and primary contact details below  Vestibulum Lorem Habitasse Platea  100 Mauris Rutrum  Quisque\",\"Morbi nisl eros Quisque pellentesque metus ac quam  Donec magna nulla  aliquet vitae  congue ac  faucibus ut  erat  Donec sit amet neque  Donec posuere tempus massa  Duis vulputate mauris sit amet pur\",\"Vestibulum semper enim Aliquam dapibus ipsum vitae sem  Ut eget mauris ac nunc luctus ornare  Phasellus enim augue  rutrum tempus  blandit in  vehicula eu  neque  Sed consequat nunc  Proin metus  Duis\",\"Vestibulum semper enim In hac habitasse platea dictumst  Mauris rutrum enim vitae mauris  Proin mattis eleifend pede  Sed pretium ante sit amet elit  Quisque pede tellus  dictum eget  dapibus ac  soda\",\"Vestibulum semper enim Morbi pellentesque  mauris interdum porta tincidunt  neque orci molestie mauris  vitae iaculis dolor felis at nunc  Maecenas eu diam a leo porta interdum  In non massa quis odio\",\"Maecenas Pellentesque tincidunt dolor eu dignissim mollis  justo Vestibulum semper enim non eros   Lorem ipsum dolor sit amet  consectetuer adipiscing elit  Cras gravida sem ut massa  Quisque accumsan\");");
d.write("function doNav(ind)");
d.write("{");
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\");");
else
d.write("		 parent.window.location.href=linkMap[ind];");
d.write("}");
d.write("function wpDoSearch(searchTerms){");
d.write("var terms = searchTerms.split(\" \");");
d.write("if (terms==\"\") return;");
d.write("var results = \"\";");
d.write("var resultscount = 0;");
d.write("for (var i=0; i<wordMap.length; i++)");
d.write("{");
d.write("			var found=true;");
d.write("			for (var j=0; j<terms.length; j++)");
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;");
d.write("			if (found)");
d.write("			{");
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\");\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";");
d.write("				 resultscount++;");
d.write("			}");
d.write("}");
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;");
d.write("}");
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","");
};
d.write("wpDoSearch(\""+sTerms+"\");");
d.write("</script>");
d.write("</body></html>");
d.close();
}