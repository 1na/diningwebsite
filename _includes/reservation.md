  <div class="rm_reservation_body">
    <p style="text-align: center; ">
      <!--style from SeatMe-->
      <link type="text/css" rel="stylesheet" href="{{ site.baseurl }}/seatme.css" />
    </p>
    <div id="rm_wrapper">
      <!-- this is the script which generates the form -->
      <script language="javascript" type="text/javascript">
      document.write("<form name=srm id=srm METHOD=POST action=https://www.seatme.nl/srm/redirector.htm >");
      document.write("<div id=rm_form_wrapper>");
      document.write("<h1 class=rm_header>maak een reservering</h1>");
      document.write("<div class=rm_box_wrapper><div class=rm_gray_box><h2 class=rm_restaurant_name>ZenZez Dining</h2>");
      document.write("<h3 class=rm_restaurant_city>Apeldoorn, Centrum</h3>");
      document.write("<div id=rm_search_box>");
      document.write("<div class='rm_box_row rm_date_row'>");
      document.write("<div class=rm_row_title>datum</div>");
      document.write("<div class=rm_row_value><input name=date type=text value=05/07/2016 readonly=readonly onfocus=getInputDate(this,this.value,'jcalendar_4865');drawCalendar('jcalendar_4865',4865); onchange=getInputDate(this,this.value,'jcalendar_4865');drawCalendar('jcalendar_4865',4865); /><div class=jcalendar id=jcalendar_4865></div></div>");
      document.write("</div>");
      document.write("<div class=rm_box_row>");
      document.write("<div class=rm_row_title>personen</div>");
      document.write("<div class=rm_row_value><select name=person><option value=1>1 persoon</option><option selected value=2>2 personen</option><option value=3>3 personen</option><option value=4>4 personen</option><option value=5>5 personen</option><option value=6>6 personen</option><option value='' disabled='disabled'>-------</option><option value='-1'>Meer dan 6 personen?</option></select></div>");
      document.write("</div>");
      document.write("<div class=rm_box_row>");
      document.write("<div class=rm_row_title>tijd</div>");
      document.write("<div id=divTime class=rm_row_value>");
      document.write("<select class=selectTime id=selectTime name=time><option value=660>11:00</option><option value=690>11:30</option><option value=720>12:00</option><option value=750>12:30</option><option value=780>13:00</option><option value=810>13:30</option><option value=840>14:00</option><option value=870>14:30</option><option value=900>15:00</option><option value=930>15:30</option><option value=960>16:00</option><option value=990>16:30</option><option value=1020>17:00</option><option value=1050>17:30</option><option value=1080>18:00</option><option value=1110>18:30</option><option value=1140>19:00</option></select>");
      document.write("</div>");
      document.write("</div>");
      document.write("<div id=rm_submit_wrapper>");
      document.write("<input TYPE=IMAGE class=submitbutton id=srm_submit name=submit border=0 SRC=https://www.seatme.nl/images/srm/make-reservation-nl.png />");
      document.write("</div>");
      document.write("</div>");
      document.write("</div>");
      document.write("</div>");
      document.write("</div>");
      document.write("<input type=hidden name=rid value=4865 />");
      document.write("<input type=hidden name=lang value=nl />");
      document.write("<input type=hidden name=af value=2774 />");
      document.write("</form>");
      document.write("<div id=rm_logo_wrapper><span class=rm_powered>powered by</span>");
      document.write("<a alt=restaurants reserveren met SeatMe class=rm_logo href=https://www.seatme.nl></a>");
      document.write("</div>");
      var serverDate = new Date(2016, 6, 5);
      var maxDate = new Date(2017, 6, 5);
      var dayAvailabilities = {};
      dayAvailabilities["4865201607"] = "0000222222222222222222200000000";
      dayAvailabilities["4865201608"] = "0000000000000022222222222222222";
      dayAvailabilities["4865201609"] = "222222222222222222222223222222";
      dayAvailabilities["4865201610"] = "2222222222222222222222222222222";
      dayAvailabilities["4865201611"] = "222222222222222222222222222222";
      dayAvailabilities["4865201612"] = "2222222222222222222222222222222";
      dayAvailabilities["4865201701"] = "2222222222222222222222222222222";
      dayAvailabilities["4865201702"] = "2222222222222222222222222222";
      dayAvailabilities["4865201703"] = "2222222222222222222222222222222";
      dayAvailabilities["4865201704"] = "222222222222222222222222222222";
      dayAvailabilities["4865201705"] = "2222222222222222222222222222222";
      dayAvailabilities["4865201706"] = "222222222222222222222222222222";
      dayAvailabilities["4865201707"] = "22222";
      var defaultDateString = 'dd/mm/yyyy';
      var months = new Array("jan", "feb", "maa", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec");
      var days = new Array("ma", "di", "wo", "do", "vr", "za", "zo");
      var isMouseOverCalendar = false;
      var selectedDayInput;
      var selectedMonthInput;
      var selectedYearInput;
      var selectedDate;
      var currentDate;
      var inputDateField;
      
      function drawCalendar(a, rid) {
          var b = currentDate.getMonth();
          var c = currentDate.getFullYear();
          var d = months;
          var e = days;
          var f = new Date(c, b, 1);
          var g = new Date(c, b + 1, 1);
          var h = f.getDay();
          var i = Math.round((g.getTime() - f.getTime()) / (1e3 * 60 * 60 * 24));
          var j = "<table id='calendar' width='182' border='0' cellspacing='0' callpadding='0'>";
          j += "<tr id='jcalendar-links'>";
          j += "<td>";
          if (serverDate.getFullYear() < c || serverDate.getFullYear() == c && b > serverDate.getMonth()) {
              var k = "<a class='left' href=\"javascript:getPrevMonth(new Date('" + currentDate + "'));drawCalendar('" + a + "', " + rid + ");\"> </a>";
              j += k;
          } else j += " ";
          j += "</td>";
          j += "<td id='month' colspan='5'>" + d[b] + " " + c + "</td>";
          j += "<td>";
          if (maxDate.getFullYear() > c || maxDate.getFullYear() == c && b < maxDate.getMonth()) {
              var l = "<a class='right' href=\"javascript:getNextMonth(new Date('" + currentDate + "'));drawCalendar('" + a + "', " + rid + ");\"> </a>";
              j += l;
          } else j += " ";
          j += "</td>";
          j += "</tr>";
          j += "<tr id='days'>";
          for (q = 0; q < e.length; q++) {
              j += "<td>" + e[q] + "</td>";
          }
          j += "</tr>";
          j += "<tr>";
          if (h == 0) h = 7;
          for (var m = 1; m < h; m++) {
              j += "<td> </td>";
          }
          var n = false;
          m = h - 1;
          for (var o = 1; o <= i; o++) {
              m %= 7;
              if (m == 0) j += "</tr><tr>";
              var av = dayAvailabilities[rid + '' + c + '' + ((b + 1) < 10 ? '0' + (b + 1) : (b + 1))];
              if (av.charAt(o - 1) == 1 || av.charAt(o - 1) == 2) n = true;
              else n = false;
              var p = "";
              if (c == selectedDate.getFullYear() && b == selectedDate.getMonth() && selectedDate.getDate() == o) {
                  p = " selected";
                  n = true;
              }
              if (n) j += "<td class='active" + p + "'><a href=\"javascript:selectDay(" + o + ",'" + a + "');\">" + o + "</a></td>";
              else j += "<td class='inactive" + p + "'>" + o + "</td>";
              m++;
          }
          for (var q = m; q < 7; q++) {
              j += "<td> </td>";
          }
          j += "</tr>";
          j += "</table>";
          document.getElementById(a).innerHTML = j;
          setVisible(true, a);
      }
      
      function getPrevMonth(a) {
          var b = a.getMonth();
          var c = a.getFullYear();
          var d = a.getDate();
          if (b == 0) {
              b = 11;
              c--;
          } else {
              b--;
          }
          currentDate = new Date(c, b, d);
      }
      
      function getNextMonth(a) {
          var b = a.getMonth();
          var c = a.getFullYear();
          var d = a.getDate();
          if (b == 11) {
              b = 0;
              c++;
          } else {
              b++;
          }
          currentDate = new Date(c, b, d);
      }
      
      function parseDateString(dateString) {
          function trim(a) {
              var b = /\s{2,10}/g;
              a = a.replace(b, " ");
              while (a.substring(0, 1) == " ") {
                  a = a.substring(1, a.length);
              }
              while (a.substring(a.length - 1, a.length) == " ") {
                  a = a.substring(0, a.length - 1);
              }
              return a;
          }
      
          function delimit(a) {
              var b;
              var c = /,\s/g;
              var d = /([|]|[.]|[,]|[;]|[\s]|[\/])/g;
              b = a.replace(c, ",");
              b = b.replace(d, "|");
              b = b.toLowerCase();
              return b;
          }
      
          function convertMonthAbbreviation(a) {
              var b;
              var c;
              var d;
              var e = /^[a-zA-Z]*/;
              var f = /^[a-zA-Z]{3}/;
              var g = new Array("jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec");
              if (a.length < 3) return;
              if (a.match(e)) {
                  b = a.match(f);
                  for (var h = 0; h < g.length; h++) {
                      if (b == g[h]) {
                          c = h + 1;
                          d = a.replace(e, c);
                          return d;
                      }
                  }
              }
          }
      
          function matchPattern(a) {
              var b = a;
              var c = a;
              var d = /^(\d{1,2})([|]\d{1,2})([|](\d{2}){1,2})?$/i;
              var e = /^([a-zA-z])/;
              if (b.match(e)) {
                  c = convertMonthAbbreviation(b);
              }
              if (c.match(d)) {
                  return c;
              }
              return b;
          }
      
          function parseDateMain(a) {
              var b;
              var c;
              var d;
              b = trim(a);
              c = delimit(b);
              d = matchPattern(c);
              setDateInputs(d);
          }
      
          function setDateInputs(a) {
              var b = "|";
              if (a != null) {
                  var c = a.split(b);
                  if (defaultDateString == "mm/dd/yyyy" || defaultDateString == "mm/dd/yy") {
                      selectedMonthInput = c[0];
                      selectedDayInput = c[1];
                      selectedYearInput = c[2];
                  } else if (defaultDateString == "yyyy/mm/dd" || defaultDateString == "yy/mm/dd") {
                      selectedMonthInput = c[1];
                      selectedDayInput = c[2];
                      selectedYearInput = c[0];
                  } else if (defaultDateString == "dd/mm/yyyy" || defaultDateString == "dd/mm/yy" || defaultDateString == "dd.mm.yyyy" || defaultDateString == "dd.mm.yy") {
                      selectedMonthInput = c[1];
                      selectedDayInput = c[0];
                      selectedYearInput = c[2];
                  } else {
                      return;
                  }
              } else {
                  return;
              }
          }
          parseDateMain(dateString);
      }
      
      function getInputDate(a, b, c) {
          closeCalendar(c);
          inputDateField = a;
          var d = new Date;
          var e = d.getMonth() + 1 + "/" + d.getDate() + "/" + d.getFullYear();
          if (b.length < 1) {
              b = e;
          }
          try {
              parseDateString(b);
          } catch (f) {
              parseDateString(e);
          }
          if (parseToSingleDigit(selectedMonthInput) > 12) {
              parseDateString(e);
          }
          var g = parseToSingleDigit(selectedMonthInput);
          var h = parseToSingleDigit(selectedDayInput);
          var i = selectedYearInput.length <= 2 ? "20" + selectedYearInput : selectedYearInput;
          currentDate = new Date(i, g - 1, h);
          selectedDate = currentDate;
      }
      
      function selectDay(a, b) {
          var c = a;
          var d = currentDate.getMonth() + 1;
          var e = currentDate.getFullYear();
          if (defaultDateString == "mm/dd/yyyy" || defaultDateString == "mm/dd/yy") {
              inputDateField.value = parseToDoubleDigit(d) + "/" + parseToDoubleDigit(c) + "/" + e;
          } else if (defaultDateString == "yyyy/mm/dd" || defaultDateString == "yy/mm/dd") {
              inputDateField.value = e + "/" + parseToDoubleDigit(d) + "/" + parseToDoubleDigit(c);
          } else if (defaultDateString == "dd/mm/yyyy" || defaultDateString == "dd/mm/yy") {
              inputDateField.value = parseToDoubleDigit(c) + "/" + parseToDoubleDigit(d) + "/" + e;
          } else if (defaultDateString == "dd.mm.yyyy" || defaultDateString == "dd.mm.yy") {
              inputDateField.value = parseToDoubleDigit(c) + "." + parseToDoubleDigit(d) + "." + e;
          }
          refreshAvailabilities();
          closeCalendar(b);
      }
      
      function closeCalendar(a) {
          setVisible(false, a);
      }
      
      function setVisible(a, b) {
          if (document.getElementById(b)) {
              var c = document.getElementById(b);
          } else {
              return;
          }
          if (a) {
              c.style.display = "block";
          } else {
              c.style.display = "none";
          }
      }
      
      function parseToDoubleDigit(a) {
          return a < 10 ? "0" + a : a;
      }
      
      function parseToSingleDigit(a) {
          var b = "" + a;
          return b.replace(/^0+/g, "");
      }
      document.getElementById('jcalendar_4865').onmouseover = function() {
          isMouseOverCalendar = true;
      };
      document.getElementById('jcalendar_4865').onmouseout = function() {
          isMouseOverCalendar = false;
      };
      document.onclick = calendarOuterClick;
      
      function calendarOuterClick(e) {
          var b = new Object;
          if (!e) {
              if (window.event) {
                  e = window.event
              } else {
                  return
              }
          }
          if (document.all) {
              b = e.srcElement
          } else {
              b = e.target
          }
          if (!isMouseOverCalendar && b.name != "date") {
              closeCalendar("jcalendar_4865")
          }
      }
      var rmJsonp = {
          callbackCounter: 0,
          fetch: function(a, b) {
              var c = 'JSONPCallback_' + this.callbackCounter++;
              window[c] = this.evalJSONP(b);
              a = a.replace('=JSONPCallback', '=' + c);
              var d = document.createElement('SCRIPT');
              d.src = a;
              document.getElementsByTagName('HEAD')[0].appendChild(d)
          },
          evalJSONP: function(a) {
              return function(b) {
                  var c = false;
                  if (typeof b == "string") {
                      try {
                          c = JSON.parse(b)
                      } catch (d) {}
                  } else {
                      c = JSON.parse(JSON.stringify(b))
                  }
                  if (c) {
                      a(c)
                  }
              }
          }
      };
      
      function refreshAvailabilities() {
          function JsonCallback(data) {
              if (data && data.times) {
                  document.getElementById('divTime').innerHTML = data.times;
              }
          };
          var time = document.getElementById('selectTime').value;
          var rmTimes = "https://www.seatme.nl/srm/availableTimes.ashx?rid=4865&time=" + time + "&date=" + inputDateField.value + "&jsonp=JSONPCallback";
          rmJsonp.fetch(rmTimes, JsonCallback);
      }
      
      </script>
      <noscript>
        <div id="rm_form_wrapper">
           <h1 class="rm_header"> {{ site.name }} Dining</h1> 
          <div class="rm_box_wrapper">
            <div class="rm_gray_box">
              <a class="rm_page"     href="http://www.seatme.nl/restaurant/4865/apeldoorn/centrum/zenzez_dining.htm">Maak een reservering bij {{ site.name }} Dining</a>
            </div>
          </div>
        </div>
        <div id="rm_logo_wrapper"> <span class="rm_powered">powered by</span> 
          <a alt="Powered by SeatMe" class="rm_logo" href="http://www.seatme.nl"></a>
        </div>
      </noscript>
    </div>
  </div>
  
  


<div id="rm_reservation" class="section-content" align="center">
    <div class="rm_reservation_top" style="text-align: center; "></div>
    <div class="rm_reservation_body">
        <p style="text-align: center; ">
            <!--style from SeatMe-->
            <link type="text/css" rel="stylesheet" href="http://www.seatme.nl/css/srm.css" />
        </p>
        <div id="rm_wrapper">
            <!-- this is the script which generates the form -->
            <script language="javascript" type="text/javascript" src="http://www.seatme.nl/srm/?rid=4865&af=2774&lang=nl"></script>
            <noscript>
                <div id="rm_form_wrapper">
                    <h1 class="rm_header">Zenzez Dining</h1>
                    <div class="rm_box_wrapper">
                        <div class="rm_gray_box">
                            <a class="rm_page" href="http://www.seatme.nl/restaurant/4865/apeldoorn/centrum/zenzez_dining.htm"> Maak een reservering bij Zenzez Dining</a>
                        </div>
                    </div>
                </div>
                <div id="rm_logo_wrapper">
                    <span class="rm_powered">powered by</span>
                    <a alt="Powered by SeatMe" class="rm_logo" href="http://www.seatme.nl"></a>
                </div>
            </noscript>
        </div>
    </div>
    <div class="rm_reservation_bottom" style="text-align: center; "></div>
</div>