  
for(var i=1;i<=10;i++)
	{
		document.write(i+"<br>");
	}
     
// JavaScript Document
for(var i=1;i<=10;i++)
	{
		document.write("www.yazilimkodlama.com"+"<br>");
	}
     
// 1-50 arası çift sayıları listeleme
for (var i=1;i<=50;i++)
	{
		if(i%2==0)
			{
				document.write(i+"<br>");
			}
	}
 
     
// 1-100 arası 3 ve 5 e tam bölünen sayılar
for (var i=1;i<=100;i++)
	{
		if(i%3==0 && i%5==0)
			{
				document.write(i+"<br>");
			}
	}
//  Kullanıcının  girdiği metni istenilen adet kadar yazdırma
 
var metin=window.prompt("Metni Girin");
var adet=window.prompt("Metin kaç defa yazdırılsın");
for(var i=1;i<=adet;i++)
	{
		document.write(metin+"<br>")
	}
     
// JavaScript Document
var metin=window.prompt("Yazdırılacak Metni Girin");
for (var i = 6; i > 0; i--) 
{ 
 document.write("<h"+i+">"+metin+"</h"+i+">");
}
 
// JavaScript Document
for (var i = 0; i < 10; i++) 
    { 
     document.write("<span style='font-size:" + i + 5 + "px;'>www.yazilimkodlama.com</span><br/>");
    }
    // JavaScript Document
var yukseklik=window.prompt("Yüksekliği Girin");
var genislik=window.prompt("Genişliği Girin");
for (var i = 1; i <= yukseklik; i++)
            {
                for (var j = 1; j <= genislik; j++)
                {
                    if (i == 1 || i == yukseklik)
                        document.write("*");
                    else
                        if (j == 1 || j == genislik)
                            document.write("*");
                        else
				{
					document.write("&nbsp;");
					document.write("&nbsp;");
				}
                            
                }
                document.write("<br>");
            }